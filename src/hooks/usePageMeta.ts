import { useEffect } from 'react'
import { useLang } from '../i18n/LanguageContext'

interface PageMeta {
  title: string
  description: string
  path: string
  image?: string
}

const EN_BASE = 'https://philippopolis.club'
const BG_BASE = 'https://philippopolis.club/bg'
const IMAGE_BASE = 'https://philippopolis.club'

function setMeta(selector: string, attr: 'name' | 'property', value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${selector}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, selector)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function clearHreflang() {
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove())
}

function setHreflang(hreflang: string, href: string) {
  const el = document.createElement('link')
  el.setAttribute('rel', 'alternate')
  el.setAttribute('hreflang', hreflang)
  el.setAttribute('href', href)
  document.head.appendChild(el)
}

export default function usePageMeta({ title, description, path, image = '/images/drive/photo_167.jpg' }: PageMeta) {
  const { lang } = useLang()

  useEffect(() => {
    const base = lang === 'bg' ? BG_BASE : EN_BASE
    const url = `${base}${path}`
    document.title = title
    setMeta('description', 'name', description)
    setCanonical(url)
    setMeta('og:title', 'property', title)
    setMeta('og:description', 'property', description)
    setMeta('og:url', 'property', url)
    setMeta('og:image', 'property', `${IMAGE_BASE}${image}`)
    setMeta('og:image:alt', 'property', title)
    setMeta('og:locale', 'property', lang === 'bg' ? 'bg_BG' : 'en_US')

    clearHreflang()
    const enUrl = `${EN_BASE}${path}`
    const bgUrl = `${BG_BASE}${path}`
    setHreflang('en', enUrl)
    setHreflang('bg', bgUrl)
    setHreflang('x-default', enUrl)
  }, [title, description, path, image, lang])
}
