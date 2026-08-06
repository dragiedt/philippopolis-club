import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import en from '../src/i18n/en.ts'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const dist = resolve(root, 'dist')
const base = 'https://philippopolis.club'

const routes = [
  { path: '/', title: en['seo.home.title'], desc: en['seo.home.desc'] },
  { path: '/heritage', title: en['seo.heritage.title'], desc: en['seo.heritage.desc'] },
  { path: '/membership', title: en['seo.membership.title'], desc: en['seo.membership.desc'] },
  { path: '/events', title: en['seo.events.title'], desc: en['seo.events.desc'] },
  { path: '/gallery', title: en['seo.gallery.title'], desc: en['seo.gallery.desc'] },
  { path: '/contact', title: en['seo.contact.title'], desc: en['seo.contact.desc'] },
  { path: '/faq', title: en['seo.faq.title'], desc: en['seo.faq.desc'] },
]

function setMeta(html, attr, key, value) {
  const re = new RegExp(`<meta ${attr}="${key}" content="[^"]*"`)
  const replacement = `<meta ${attr}="${key}" content="${value.replaceAll('&', '&amp;').replaceAll('"', '&quot;')}"`
  if (html.includes(`<meta ${attr}="${key}"`)) {
    return html.replace(re, replacement)
  }
  return html.replace('</head>', `  <meta ${attr}="${key}" content="${value.replaceAll('&', '&amp;').replaceAll('"', '&quot;')}" />\n  </head>`)
}

function setLink(html, rel, href) {
  const re = new RegExp(`<link rel="${rel}" href="[^"]*"`)
  if (html.includes(`<link rel="${rel}"`)) {
    return html.replace(re, `<link rel="${rel}" href="${href}"`)
  }
  return html.replace('</head>', `  <link rel="${rel}" href="${href}" />\n  </head>`)
}

const template = readFileSync(resolve(dist, 'index.html'), 'utf-8')

for (const route of routes) {
  let html = template
  const url = route.path === '/' ? `${base}/` : `${base}${route.path}`
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${route.title.replaceAll('&', '&amp;').replaceAll('"', '&quot;')}</title>`)
  html = setMeta(html, 'name', 'description', route.desc)
  html = setLink(html, 'canonical', url)
  html = setMeta(html, 'property', 'og:title', route.title)
  html = setMeta(html, 'property', 'og:description', route.desc)
  html = setMeta(html, 'property', 'og:url', url)
  html = setMeta(html, 'property', 'og:image', `${base}/images/photo_167.jpg`)

  if (route.path === '/faq') {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [0, 1, 2, 3, 4, 5, 6, 7].map((i) => ({
        '@type': 'Question',
        name: en[`faq.q.${i}`],
        acceptedAnswer: { '@type': 'Answer', text: en[`faq.a.${i}`] },
      })),
    }
    html = html.replace('</head>', `  <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>\n  </head>`)
  }

  const outPath = route.path === '/' ? resolve(dist, 'index.html') : resolve(dist, route.path.slice(1), 'index.html')
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, html)
  console.log(`prerendered ${route.path || '/'} -> ${outPath}`)
}

console.log('Prerender complete.')
