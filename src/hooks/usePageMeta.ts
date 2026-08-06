import { useEffect } from 'react'

interface PageMeta {
  title: string
  description: string
  path: string
  image?: string
}

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

export default function usePageMeta({ title, description, path, image = '/images/photo_167.jpg' }: PageMeta) {
  useEffect(() => {
    const base = 'https://philippopolis.club'
    const url = `${base}${path}`
    document.title = title
    setMeta('description', 'name', description)
    setCanonical(url)
    setMeta('og:title', 'property', title)
    setMeta('og:description', 'property', description)
    setMeta('og:url', 'property', url)
    setMeta('og:image', 'property', `${base}${image}`)
    setMeta('og:image:alt', 'property', title)
  }, [title, description, path, image])
}
