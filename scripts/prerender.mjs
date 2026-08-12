import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import en from '../src/i18n/en.ts'
import bg from '../src/i18n/bg.ts'
import { upcomingEvents, pastEvents } from '../src/data/events.ts'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const dist = resolve(root, 'dist')

const languages = [
  { code: 'en', dict: en, base: 'https://philippopolis.club', basename: undefined },
  { code: 'bg', dict: bg, base: 'https://philippopolis.club/bg', basename: '/bg' },
]

const routes = [
  { path: '/', titleKey: 'seo.home.title', descKey: 'seo.home.desc' },
  { path: '/heritage', titleKey: 'seo.heritage.title', descKey: 'seo.heritage.desc' },
  { path: '/membership', titleKey: 'seo.membership.title', descKey: 'seo.membership.desc' },
  { path: '/events', titleKey: 'seo.events.title', descKey: 'seo.events.desc' },
  { path: '/gallery', titleKey: 'seo.gallery.title', descKey: 'seo.gallery.desc' },
  { path: '/contact', titleKey: 'seo.contact.title', descKey: 'seo.contact.desc' },
  { path: '/faq', titleKey: 'seo.faq.title', descKey: 'seo.faq.desc' },
]

function priorityFor(path) {
  if (path === '/') return '1.0'
  if (path === '/events') return '0.9'
  if (path === '/heritage' || path === '/membership') return '0.8'
  if (path === '/gallery') return '0.7'
  if (path === '/contact') return '0.6'
  return '0.5'
}

function changefreqFor(path) {
  return path === '/' || path === '/events' ? 'weekly' : 'monthly'
}

function esc(str) {
  return String(str).replaceAll('&', '&amp;').replaceAll('"', '&quot;')
}

function setMeta(html, attr, key, value) {
  const re = new RegExp(`<meta ${attr}="${key}" content="[^"]*"`)
  const replacement = `<meta ${attr}="${key}" content="${esc(value)}"`
  if (html.includes(`<meta ${attr}="${key}"`)) {
    return html.replace(re, replacement)
  }
  return html.replace('</head>', `  <meta ${attr}="${key}" content="${esc(value)}" />\n  </head>`)
}

function setLink(html, rel, href) {
  const re = new RegExp(`<link rel="${rel}" href="[^"]*"`)
  if (html.includes(`<link rel="${rel}"`)) {
    return html.replace(re, `<link rel="${rel}" href="${href}"`)
  }
  return html.replace('</head>', `  <link rel="${rel}" href="${href}" />\n  </head>`)
}

function setHtmlLang(html, lang) {
  return html.replace('<html lang="en"', `<html lang="${lang}"`)
}

function removeOgLocaleAlternate(html) {
  return html.replace(/<meta property="og:locale:alternate" content="[^"]*"\s*\/?>\n?/g, '')
}

function setHreflang(html, alternates) {
  html = html.replace(/<link rel="alternate" hreflang="[^"]*" href="[^"]*"\s*\/?>\n?/g, '')
  const links = alternates
    .map((a) => `  <link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" />`)
    .join('\n')
  return html.replace('</head>', `${links}\n  </head>`)
}

function injectSchema(html, schemas) {
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\n?/g, '')
  const scripts = schemas
    .map((s) => `  <script type="application/ld+json">${JSON.stringify(s)}</script>`)
    .join('\n')
  return html.replace('</head>', `${scripts}\n  </head>`)
}

function buildOrgSchema(lang, dict, base) {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': `${base}/#organization`,
    name: "Gentlemen's Club Philippopolis",
    description: dict['seo.home.desc'],
    url: base,
    logo: `${base}/images/logo.svg`,
    image: `${base}/images/drive/photo_167.jpg`,
    telephone: '+358-88-262-780',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Plovdiv',
      addressRegion: 'Plovdiv Province',
      addressCountry: 'BG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '42.1354',
      longitude: '24.7453',
    },
    areaServed: [
      { '@type': 'City', name: 'Plovdiv' },
      { '@type': 'Country', name: 'Bulgaria' },
    ],
    knowsAbout: [
      'Cigar Enthusiasts',
      'Private Social Club',
      'Business Networking',
      'Premium Spirits',
      'Exclusive Events',
      'Cognac',
      'Single Malt Whisky',
    ],
    sameAs: [
      'https://www.facebook.com/profile.php?id=100088984060770',
      'https://www.instagram.com/gentlemens_club_philippopolis',
    ],
  }
}

function buildFaqSchema(dict) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [0, 1, 2, 3, 4, 5, 6, 7].map((i) => ({
      '@type': 'Question',
      name: dict[`faq.q.${i}`],
      acceptedAnswer: { '@type': 'Answer', text: dict[`faq.a.${i}`] },
    })),
  }
}

function buildEventsSchema(dict, base) {
  const all = [...upcomingEvents, ...pastEvents]
  return {
    '@context': 'https://schema.org',
    '@graph': all.map((e) => {
      const event = {
        '@type': 'Event',
        name: dict[e.titleKey],
        description: dict[e.descKey],
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        organizer: {
          '@type': 'Organization',
          name: "Gentlemen's Club Philippopolis",
          url: base,
        },
        location: {
          '@type': 'Place',
          name: "Gentlemen's Club Philippopolis",
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Plovdiv',
            addressCountry: 'BG',
          },
        },
      }
      if (e.countdownTo) event.startDate = e.countdownTo
      if (e.image) event.image = `${base}${e.image}`
      return event
    }),
  }
}

const template = readFileSync(resolve(dist, 'index.html'), 'utf-8')

const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
})

const { AppRoutes } = await vite.ssrLoadModule('/src/App.tsx')
const { LangProvider } = await vite.ssrLoadModule('/src/i18n/LanguageContext.tsx')

const sitemapEntries = []

for (const route of routes) {
  for (const { code, dict, base, basename } of languages) {
    let html = template
    const title = dict[route.titleKey]
    const desc = dict[route.descKey]
    const path = route.path === '/' ? '' : route.path
    const url = `${base}${path || '/'}`

    html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
    html = setMeta(html, 'name', 'description', desc)
    html = setLink(html, 'canonical', url)
    html = setMeta(html, 'property', 'og:title', title)
    html = setMeta(html, 'property', 'og:description', desc)
    html = setMeta(html, 'property', 'og:url', url)
    html = setMeta(html, 'property', 'og:image', `${base}/images/drive/photo_167.jpg`)
    html = setMeta(html, 'property', 'og:image:alt', title)
    html = setMeta(html, 'property', 'og:locale', code === 'bg' ? 'bg_BG' : 'en_US')
    html = removeOgLocaleAlternate(html)

    const enUrl = `${languages[0].base}${path || '/'}`
    const bgUrl = `${languages[1].base}${path || '/'}`
    html = setHreflang(html, [
      { hreflang: 'en', href: enUrl },
      { hreflang: 'bg', href: bgUrl },
      { hreflang: 'x-default', href: enUrl },
    ])

    html = setHtmlLang(html, code)

    const entryPath = `${basename ?? ''}${path || '/'}${path === '' ? '' : ''}`
    const initialEntries = [entryPath || '/']

    const appHtml = renderToString(
      createElement(
        MemoryRouter,
        { basename: basename ?? '/', initialEntries },
        createElement(LangProvider, { initialLang: code }, createElement(AppRoutes))
      )
    )
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

    const schemas = [buildOrgSchema(code, dict, base)]
    if (route.path === '/faq') schemas.push(buildFaqSchema(dict))
    if (route.path === '/events') schemas.push(buildEventsSchema(dict, base))
    html = injectSchema(html, schemas)

    const outDir = code === 'en'
      ? (route.path === '/' ? '' : route.path.slice(1))
      : (route.path === '/' ? 'bg' : `bg${route.path}`)
    const outPath = outDir ? resolve(dist, outDir, 'index.html') : resolve(dist, 'index.html')
    mkdirSync(dirname(outPath), { recursive: true })
    writeFileSync(outPath, html)
    console.log(`prerendered ${code} ${route.path || '/'} -> ${outPath}`)

    sitemapEntries.push({
      loc: url,
      changefreq: changefreqFor(route.path),
      priority: priorityFor(route.path),
    })
  }
}

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries
  .map(
    (e) =>
      `  <url>\n    <loc>${e.loc}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
  )
  .join('\n')}
</urlset>
`
writeFileSync(resolve(dist, 'sitemap.xml'), sitemapXml)
console.log('wrote sitemap.xml')

await vite.close()
console.log('Prerender complete.')
