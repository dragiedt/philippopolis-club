import { useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import SectionDivider from '../components/SectionDivider'
import FadeIn from '../components/FadeIn'
import SmokeBackground from '../components/SmokeBackground'
import { useLang } from '../i18n/LanguageContext'

interface GalleryItem {
  src: string
  alt: string
  span: 'normal' | 'wide' | 'tall'
  objectPos?: string
  isBanner?: boolean
  bannerTitle?: string
  bannerSubtitle?: string
  bannerTag?: string
  bannerDesc?: string
}

const photos: GalleryItem[] = [
  { src: '/images/drive/GC_0043.jpg', alt: 'The club interior', span: 'tall' },
  { src: '/images/drive/GC_0064.jpg', alt: 'Evening setting', span: 'normal' },
  { src: '/images/drive/GC_0071.jpg', alt: 'The bar', span: 'normal' },
  { src: '/images/drive/GC_0119.jpg', alt: 'Cigars on display', span: 'normal' },
  { src: '/images/drive/GC_0110.jpg', alt: 'Evening atmosphere', span: 'wide' },
  { src: '/images/drive/GC_0128.jpg', alt: 'Members gathering', span: 'normal' },
  { src: '/images/drive/GC_0129.jpg', alt: 'The lounge corner', span: 'normal' },
  { src: '/images/drive/GC_0130.jpg', alt: 'Glasses raised', span: 'normal' },
  { src: '/images/drive/GC_0143.jpg', alt: 'The hallway', span: 'normal' },
  { src: '/images/drive/GC_0217.jpg', alt: 'The humidor shelf', span: 'tall' },
  { src: '/images/drive/GC_0278.jpg', alt: 'Evening ritual', span: 'wide' },
  { src: '/images/drive/GC_0186.jpg', alt: 'The lounge', span: 'normal' },
  { src: '/images/drive/GC_0213.jpg', alt: 'Amber light', span: 'normal' },
  { src: '/images/drive/GC_0230.jpg', alt: 'Fine spirits', span: 'normal' },
  { src: '/images/drive/GC_0318.jpg', alt: 'Cigar selection', span: 'tall' },
  { src: '/images/drive/GC_0269.jpg', alt: 'The humidor', span: 'normal' },
  { src: '/images/drive/GC_0396.jpg', alt: 'The salon', span: 'wide' },
  { src: '/images/drive/GC_0273.jpg', alt: 'Smoke and shadow', span: 'normal' },
  { src: '/images/drive/GC_0413.jpg', alt: 'By the window', span: 'tall' },
  { src: '/images/drive/GC_0299.jpg', alt: 'The ashtray', span: 'normal' },
  { src: '/images/drive/GC_0322.jpg', alt: 'The library', span: 'normal' },
  { src: '/images/drive/GC_0362.jpg', alt: 'Cigar ritual', span: 'normal' },
  { src: '/images/drive/GC_0551.jpg', alt: 'The balcony', span: 'wide', objectPos: 'center top' },
  { src: '/images/drive/GC_0379.jpg', alt: 'Quiet corner', span: 'normal' },
  { src: '/images/drive/GC_0528.jpg', alt: 'Arriving in style', span: 'normal' },
  { src: '/images/drive/GC_0592.jpg', alt: 'Conversation & smoke', span: 'tall' },
  { src: '/images/drive/GC_0596.jpg', alt: 'Among friends', span: 'normal' },
  { src: '/images/drive/GC_0597.jpg', alt: 'The toast', span: 'normal' },
  { src: '/images/drive/GC_0665.jpg', alt: 'The cellar', span: 'normal' },
  {
    src: '/images/drive/GC_0700.jpg',
    alt: 'Fly Me to the Moon 2025 Event Highlights',
    span: 'wide',
    isBanner: true,
    bannerTitle: 'Fly Me to the Moon 2025 Event Highlights',
    bannerSubtitle: 'Annual Event · 2025',
    bannerTag: 'Event Highlights',
    bannerDesc: 'An extraordinary evening of cigar culture, fine spirits, and live fellowship.',
  },
  { src: '/images/drive/GC_0382.jpg', alt: 'Leather and wood', span: 'normal' },
  { src: '/images/drive/GC_0700.jpg', alt: 'A toast among friends', span: 'wide' },
  { src: '/images/drive/GC_0400.jpg', alt: 'Plovdiv rooftops', span: 'normal' },
  { src: '/images/drive/GC_0406.jpg', alt: 'The ancient theatre', span: 'normal' },
  { src: '/images/drive/GC_0408.jpg', alt: 'The courtyard', span: 'normal' },
  { src: '/images/drive/GC_0743.jpg', alt: 'The bottle collection', span: 'tall' },
  { src: '/images/drive/GC_0411.jpg', alt: 'Evening stroll', span: 'normal' },
  { src: '/images/drive/GC_0423.jpg', alt: 'The fireplace', span: 'normal' },
  { src: '/images/drive/GC_0455.jpg', alt: 'By the fireplace', span: 'normal' },
  { src: '/images/drive/GC_0460.jpg', alt: 'Candlelight', span: 'normal' },
  { src: '/images/drive/GC_0815.jpg', alt: 'Members portrait', span: 'tall' },
  { src: '/images/drive/GC_0466.jpg', alt: 'The doorway', span: 'normal' },
  { src: '/images/drive/GC_0534.jpg', alt: 'The terrace', span: 'normal' },
  { src: '/images/drive/GC_0543.jpg', alt: 'Night air', span: 'normal' },
  { src: '/images/drive/GC_0553.jpg', alt: 'City lights', span: 'normal' },
  { src: '/images/drive/GC_0698.jpg', alt: 'Barrel aged', span: 'normal' },
  { src: '/images/drive/GC_0722.jpg', alt: 'The corner seat', span: 'normal' },
  { src: '/images/drive/GC_0739.jpg', alt: 'Details & craft', span: 'normal' },
  { src: '/images/drive/GC_0741.jpg', alt: 'Old world charm', span: 'normal' },
  { src: '/images/drive/GC_0756.jpg', alt: 'Reflections', span: 'normal' },
  { src: '/images/drive/GC_0770.jpg', alt: 'The study', span: 'normal' },
  { src: '/images/drive/GC_0773.jpg', alt: 'Evening mood', span: 'normal' },
  { src: '/images/drive/GC_0778.jpg', alt: 'The humidor door', span: 'normal' },
  { src: '/images/drive/GC_0780.jpg', alt: 'Selected leaves', span: 'normal' },
  { src: '/images/drive/GC_0819.jpg', alt: 'The veranda', span: 'normal' },
  { src: '/images/drive/GC_0820.jpg', alt: 'Night falls', span: 'normal' },
  { src: '/images/drive/GC_0278.jpg', alt: 'Evening ritual', span: 'wide' },
  { src: '/images/drive/GC_0597.jpg', alt: 'The toast', span: 'normal' },
]

export default function Gallery() {
  const { t } = useLang()
  const [lbIdx, setLbIdx] = useState<number | null>(null)

  const close = useCallback(() => setLbIdx(null), [])
  const next = useCallback(() => setLbIdx((p) => (p !== null ? (p + 1) % photos.length : null)), [])
  const prev = useCallback(() => setLbIdx((p) => (p !== null ? (p - 1 + photos.length) % photos.length : null)), [])

  const getSpanClass = (i: number) => {
    const p = photos[i]
    const parts: string[] = []
    if (p.span === 'wide') parts.push('col-span-2', 'md:col-span-2')
    if (p.span === 'tall') parts.push('md:row-span-2')
    return parts.join(' ')
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-brand-900 overflow-hidden cigar-wrapper">
        <SmokeBackground />
        <div className="absolute inset-0 bg-[url('/images/drive/GC_0362.jpg')] bg-cover bg-center opacity-10 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-900/30 to-brand-900 z-[2]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <FadeIn><p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">{t('gallery.hero.label')}</p></FadeIn>
          <FadeIn delay={150}><h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-cream font-light">{t('gallery.hero.title')}</h1></FadeIn>
          <FadeIn delay={300}>
            <p className="mt-6 text-brand-300 text-lg max-w-xl mx-auto font-light">{t('gallery.hero.desc')}</p>
          </FadeIn>
        </div>
      </section>

      {/* Grid */}
      <section className="relative py-20 px-6 overflow-hidden tobacco-leaf">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-800/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-700/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 auto-rows-[160px] md:auto-rows-[240px] grid-flow-dense">
            {photos.map((photo, i) => (
              <FadeIn key={`${photo.src}-${i}`} delay={i * 60} className={getSpanClass(i)}>
                {photo.isBanner ? (
                  <div
                    onClick={() => setLbIdx(i)}
                    className="group relative w-full h-full overflow-hidden border-2 border-gold-500/40 bg-brand-900 cursor-pointer flex flex-col justify-between p-6 md:p-8"
                  >
                    <div className="absolute inset-0 z-0">
                      <img src={photo.src} alt={t('gallery.alt.' + i)} className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/85 to-brand-900/70" />
                    </div>
                    <div className="relative z-10 flex items-center justify-between gap-2">
                      <span className="text-gold-500 text-xs tracking-[0.25em] uppercase font-medium">{t('gallery.banner.subtitle')}</span>
                      <span className="inline-block px-2.5 py-0.5 text-[10px] tracking-wider uppercase border border-gold-500/50 text-gold-500 bg-brand-900/60 backdrop-blur-sm">{t('gallery.banner.tag')}</span>
                    </div>
                    <div className="relative z-10 mt-auto pt-4">
                      <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-cream gold-shimmer font-medium mb-2 leading-tight">{t('gallery.banner.title')}</h3>
                      <p className="text-brand-300 text-xs md:text-sm font-light leading-relaxed line-clamp-2">{t('gallery.banner.desc')}</p>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setLbIdx(i)}
                    className="group relative w-full h-full overflow-hidden border-0 p-0 bg-transparent cursor-pointer"
                  >
                    <img
                      src={photo.src} alt={t('gallery.alt.' + i)} loading="lazy"
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${photo.objectPos ? '' : 'object-[center_30%]'}`}
                      style={photo.objectPos ? { objectPosition: photo.objectPos } : undefined}
                    />
                    <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/40 transition-all duration-500 flex items-end">
                      <span className="text-cream text-sm tracking-wider opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 p-4 font-light">{t('gallery.alt.' + i)}</span>
                    </div>
                  </button>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="px-6 pb-16"><div className="mx-auto max-w-7xl"><FadeIn><SectionDivider /></FadeIn></div></div>

      {lbIdx !== null && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-brand-900/95 flex items-center justify-center"
          onClick={close}
          onKeyDown={(e) => { if (e.key === 'Escape') close(); if (e.key === 'ArrowRight') next(); if (e.key === 'ArrowLeft') prev(); }}
          tabIndex={0}
          ref={(el) => el?.focus()}
        >
          <button onClick={close} className="absolute top-4 right-4 w-12 h-12 rounded-full bg-brand-800/80 text-brand-400 hover:text-cream hover:bg-brand-700 flex items-center justify-center z-10 border-0 cursor-pointer">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          <button onClick={(e) => { e.stopPropagation(); prev() }} className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-brand-800/80 text-brand-400 hover:text-cream hover:bg-brand-700 flex items-center justify-center z-10 border-0 cursor-pointer">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </button>

          <button onClick={(e) => { e.stopPropagation(); next() }} className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-brand-800/80 text-brand-400 hover:text-cream hover:bg-brand-700 flex items-center justify-center z-10 border-0 cursor-pointer">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </button>

          <div className="max-w-[90vw] max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img key={lbIdx} src={photos[lbIdx].src} alt={t('gallery.alt.' + lbIdx)} className="max-w-full max-h-[80vh] w-auto h-auto object-contain block" />
            <p className="text-brand-400 text-sm mt-4 tracking-wider font-light">{t('gallery.alt.' + lbIdx)}<span className="text-brand-500 ml-3">{lbIdx + 1} / {photos.length}</span></p>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}