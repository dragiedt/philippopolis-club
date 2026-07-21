import { useState, useEffect, useCallback } from 'react'
import SectionDivider from '../components/SectionDivider'
import FadeIn from '../components/FadeIn'
import SmokeBackground from '../components/SmokeBackground'

const words = [
  { word: 'Honor.' },
  { word: 'Loyalty.' },
  { word: 'Integrity.' },
  { word: 'Authenticity.' },
  { word: 'Humility.' },
]

const wordSizes = ['text-3xl', 'text-4xl', 'text-2xl', 'text-5xl', 'text-3xl']

const gridItems: ({ type: 'photo'; src: string; alt: string; span: string } | { type: 'word'; word: string; size: string })[] = [
  { type: 'photo', src: '/images/drive/GC_0043.jpg', alt: 'The club interior', span: 'tall' },
  { type: 'photo', src: '/images/drive/GC_0064.jpg', alt: 'Evening setting', span: 'normal' },
  { type: 'photo', src: '/images/drive/GC_0110.jpg', alt: 'Evening atmosphere', span: 'wide' },
  { type: 'photo', src: '/images/drive/GC_0128.jpg', alt: 'Members gathering', span: 'normal' },
  { type: 'photo', src: '/images/drive/GC_0186.jpg', alt: 'The lounge', span: 'normal' },
  { type: 'photo', src: '/images/drive/GC_0230.jpg', alt: 'Fine spirits', span: 'normal' },
  { type: 'photo', src: '/images/drive/GC_0269.jpg', alt: 'The humidor', span: 'normal' },
  { type: 'photo', src: '/images/drive/GC_0318.jpg', alt: 'Cigar selection', span: 'tall' },
  { type: 'photo', src: '/images/drive/GC_0362.jpg', alt: 'Cigar ritual', span: 'normal' },
  { type: 'photo', src: '/images/drive/GC_0396.jpg', alt: 'The salon', span: 'wide' },
  { type: 'photo', src: '/images/drive/GC_0406.jpg', alt: 'The ancient theatre', span: 'normal' },
  { type: 'photo', src: '/images/drive/GC_0455.jpg', alt: 'By the fireplace', span: 'normal' },
  { type: 'photo', src: '/images/drive/GC_0528.jpg', alt: 'Arriving in style', span: 'normal' },
  { type: 'photo', src: '/images/drive/GC_0534.jpg', alt: 'The terrace', span: 'normal' },
  { type: 'photo', src: '/images/drive/GC_0592.jpg', alt: 'Conversation & smoke', span: 'tall' },
  { type: 'photo', src: '/images/drive/GC_0665.jpg', alt: 'The cellar', span: 'normal' },
  { type: 'photo', src: '/images/drive/GC_0700.jpg', alt: 'A toast among friends', span: 'wide' },
  { type: 'photo', src: '/images/drive/GC_0739.jpg', alt: 'Details & craft', span: 'normal' },
  { type: 'photo', src: '/images/drive/GC_0770.jpg', alt: 'The study', span: 'normal' },
  { type: 'photo', src: '/images/drive/GC_0773.jpg', alt: 'Evening mood', span: 'normal' },
  { type: 'photo', src: '/images/drive/GC_0815.jpg', alt: 'Members portrait', span: 'tall' },
  { type: 'photo', src: '/images/drive/GC_0820.jpg', alt: 'Night falls', span: 'normal' },
  { type: 'photo', src: '/images/drive/GC_0143.jpg', alt: 'The hallway', span: 'normal' },
  ...words.map((w, i) => ({ type: 'word' as const, word: w.word, size: wordSizes[i] })),
]

const photos = gridItems.filter((item) => item.type === 'photo')

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const close = useCallback(() => setLightbox(null), [])

  const next = useCallback(() => {
    setLightbox((prev) => (prev !== null ? (prev + 1) % photos.length : null))
  }, [])

  const prev = useCallback(() => {
    setLightbox((prev) => (prev !== null ? (prev - 1 + photos.length) % photos.length : null))
  }, [])

  useEffect(() => {
    if (lightbox === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, close, next, prev])

  const getSpanClass = (item: typeof gridItems[number]) => {
    if (item.type === 'word') return 'hidden lg:flex'
    const parts: string[] = []
    if (item.span === 'wide') parts.push('col-span-2', 'md:col-span-2')
    if (item.span === 'tall') parts.push('md:row-span-2')
    return parts.join(' ')
  }

  const photoIndex = (item: typeof gridItems[number]) => {
    if (item.type !== 'photo') return -1
    return photos.indexOf(item)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-brand-900 overflow-hidden cigar-wrapper">
        <SmokeBackground />
        <div className="absolute inset-0 bg-[url('/images/drive/GC_0362.jpg')] bg-cover bg-center opacity-10 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-900/30 to-brand-900 z-[2]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">The Collection</p>
          </FadeIn>
          <FadeIn delay={150}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-cream font-light">
              Gallery
            </h1>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="mt-6 text-brand-300 text-lg max-w-xl mx-auto font-light">
              Moments captured within the walls of Philippopolis — the smoke, the glass, the fellowship.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Grid */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-800/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-700/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 auto-rows-[160px] md:auto-rows-[240px]" style={{ gridAutoFlow: 'dense' }}>
            {gridItems.map((item, i) => (
              <FadeIn
                key={i}
                delay={item.type === 'photo' ? i * 60 : 0}
                className={getSpanClass(item)}
              >
                {item.type === 'photo' ? (
                  <button
                    onClick={() => setLightbox(photoIndex(item))}
                    className="group relative w-full h-full overflow-hidden cursor-pointer"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="w-full h-full object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/40 transition-all duration-500 flex items-end">
                      <span className="text-cream text-sm tracking-wider opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 p-4 font-light">
                        {item.alt}
                      </span>
                    </div>
                  </button>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-brand-50 border border-brand-200/50">
                    <span className={`font-display ${item.size} text-brand-400/60 tracking-wide`}>
                      {item.word}
                    </span>
                  </div>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <SectionDivider />
          </FadeIn>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-brand-900/95 backdrop-blur-sm flex items-center justify-center"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-6 right-6 text-brand-400 hover:text-cream transition-colors z-10"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-4 md:left-8 text-brand-400 hover:text-cream transition-colors z-10"
            aria-label="Previous"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-4 md:right-8 text-brand-400 hover:text-cream transition-colors z-10"
            aria-label="Next"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          <div className="max-w-5xl max-h-[85vh] px-16" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              className="max-w-full max-h-[80vh] object-contain mx-auto"
            />
            <p className="text-brand-400 text-center text-sm mt-4 tracking-wider font-light">
              {photos[lightbox].alt}
              <span className="text-brand-600 ml-3">{lightbox + 1} / {photos.length}</span>
            </p>
          </div>
        </div>
      )}
    </>
  )
}
