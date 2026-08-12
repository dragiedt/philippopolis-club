import { useRef } from 'react'
import { Link } from 'react-router-dom'
import SectionDivider from '../components/SectionDivider'
import FadeIn from '../components/FadeIn'
import usePageMeta from '../hooks/usePageMeta'
import { useLang } from '../i18n/LanguageContext'

const pleasures = [
  { number: 'I', titleKey: 'home.pleasures.0.title', descKey: 'home.pleasures.0.desc' },
  { number: 'II', titleKey: 'home.pleasures.1.title', descKey: 'home.pleasures.1.desc' },
  { number: 'III', titleKey: 'home.pleasures.2.title', descKey: 'home.pleasures.2.desc' },
]

const previewEvents = [
  { date: 'July 2026', title: 'Davidoff White Party', type: 'Invitation', dateKey: 'event.past.0.date', titleKey: 'event.past.0.title', typeKey: 'event.past.0.type', image: '/images/davidoff-hero.jpg' },
  { date: 'June 2026', title: 'Plasencia Year of the Horse', type: 'Members Only', dateKey: 'event.past.1.date', titleKey: 'event.past.1.title', typeKey: 'event.past.1.type', image: '/images/plasencia-hero.jpg' },
  { date: 'June 2026', title: 'Rosa Bulgaria Regional Edition', type: 'Guests', dateKey: 'event.past.2.date', titleKey: 'event.past.2.title', typeKey: 'event.past.2.type', image: '/images/rosa-bulgaria-hero.jpg' },
]

const previewGallery = [
  { src: '/images/drive/GC_0130.jpg', alt: 'Glasses raised' },
  { src: '/images/drive/GC_0110.jpg', alt: 'Evening atmosphere' },
  { src: '/images/drive/GC_0278.jpg', alt: 'Evening ritual' },
  { src: '/images/drive/GC_0396.jpg', alt: 'The salon' },
  { src: '/images/drive/GC_0551.jpg', alt: 'The balcony' },
  { src: '/images/drive/GC_0592.jpg', alt: 'Conversation & smoke' },
]

export default function Home() {
  const { t } = useLang()

  usePageMeta({ title: t('seo.home.title'), description: t('seo.home.desc'), path: '/' })
  const galleryRef = useRef<HTMLDivElement>(null)

  const scrollGallery = (direction: 'left' | 'right') => {
    if (!galleryRef.current) return
    const amount = direction === 'left' ? -300 : 300
    galleryRef.current.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 md:pt-36 md:pb-20 bg-brand-900 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105 [mask-image:linear-gradient(to_bottom,black_75%,transparent_98%)]"
          poster="/images/photo_168.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/40 via-brand-900/10 to-brand-900" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <FadeIn delay={100}>
            <img src="/images/logo-light.svg" alt="Gentlemen's Club Philippopolis" className="mx-auto mb-3 md:mb-4 w-32 md:w-[9.6rem]" />
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-8">{t('home.hero.tagline')}</p>
          </FadeIn>
          <FadeIn delay={400}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream font-light leading-tight mb-8 gold-shimmer">
              {t('home.hero.title')}
            </h1>
          </FadeIn>
          <FadeIn delay={600}>
            <p className="text-brand-300 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
              {t('home.hero.desc')}
            </p>
          </FadeIn>
          <FadeIn delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-gold-500 text-brand-900 text-sm tracking-widest uppercase font-medium hover:bg-gold-400 transition-colors duration-200"
              >
                {t('home.hero.cta')}
              </Link>
                <Link
                  to="/heritage"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-cream/30 text-cream text-sm tracking-widest uppercase hover:bg-cream/10 transition-colors duration-200"
              >
                {t('home.hero.cta2')}
              </Link>
            </div>
          </FadeIn>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-gold-500" />
        </div>
      </section>

      {/* The Society */}
      <section className="py-24 md:py-32 px-6 tobacco-leaf">
        <div className="relative mx-auto max-w-7xl">
          <FadeIn>
            <SectionDivider className="mb-16" />
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div>
                <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">{t('home.society.label')}</p>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-900 font-light leading-tight mb-6" dangerouslySetInnerHTML={{ __html: t('home.society.title') }} />
                <p className="text-brand-600 text-lg leading-relaxed mb-8">
                  {t('home.society.desc')}
                </p>
                <Link
                  to="/heritage"
                  className="inline-flex items-center text-brand-900 text-sm tracking-widest uppercase font-medium hover:text-gold-600 transition-colors duration-200 group"
                >
                  {t('home.society.link')}
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
                <div className="hidden lg:flex justify-center mb-6">
                  <img src="/images/logo.svg" alt="Gentlemen's Club Philippopolis" className="w-80" />
                </div>
                <div className="hidden lg:flex items-center justify-center gap-4 mb-10">
                  <a
                    href="https://www.facebook.com/profile.php?id=100088984060770"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex items-center justify-center w-11 h-11 border border-brand-300 text-brand-700 hover:border-gold-500 hover:text-gold-600 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a
                    href="https://www.instagram.com/gentlemens_club_philippopolis"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex items-center justify-center w-11 h-11 border border-brand-300 text-brand-700 hover:border-gold-500 hover:text-gold-600 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                  <a
                    href="mailto:philippopolis2022@gmail.com"
                    aria-label="Email"
                    className="flex items-center justify-center w-11 h-11 border border-brand-300 text-brand-700 hover:border-gold-500 hover:text-gold-600 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                  </a>
                </div>

                <div className="hidden lg:flex items-center gap-4 mt-12" aria-hidden="true">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-gold-500/60" />
                  <div className="relative w-14 h-14 flex items-center justify-center">
                    <div className="absolute inset-0 border border-gold-500/30 rotate-45" />
                    <img src="/images/logo-light.svg" alt="" className="w-7 h-7 opacity-60" />
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gold-500/40 to-gold-500/60" />
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative">
                <div className="aspect-[4/5] bg-brand-200 overflow-hidden">
                  <img
                    src="/images/home-feature.jpg"
                    alt="An evening at the club"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-gold-500/30" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Three Pleasures */}
      <section className="py-24 md:py-32 px-6 bg-brand-50 tobacco-leaf-warm gold-hairline-top">
        <div className="relative mx-auto max-w-7xl">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">{t('home.pleasures.label')}</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {pleasures.map((pleasure, index) => (
              <FadeIn key={pleasure.number} delay={index * 150}>
                <div className="text-center">
                  <span className="font-serif text-5xl text-brand-200 mb-6 block">{pleasure.number}</span>
                  <h3 className="font-serif text-2xl text-brand-900 mb-4">{t(pleasure.titleKey)}</h3>
                  <p className="text-brand-600 leading-relaxed">{t(pleasure.descKey)}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="relative py-16 md:py-20 px-6 bg-brand-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/SHB_8024.jpg" alt="" className="w-full h-full object-cover opacity-5" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <FadeIn>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">{t('home.events.label')}</p>
                <h2 className="font-serif text-3xl md:text-4xl text-cream font-light">{t('home.events.title')}</h2>
              </div>
              <Link
                to="/events"
                className="hidden md:inline-flex items-center text-cream/70 text-sm tracking-widest uppercase hover:text-gold-500 transition-colors duration-200 group"
              >
                {t('home.events.link')}
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>

          {/* Featured Event Banner */}
          <FadeIn>
            <a href="https://fb.me/e/4g45U6Yjw" target="_blank" rel="noopener noreferrer" className="group block relative overflow-hidden mb-8">
              {/* Gold corner accent */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold-500/60 z-10" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold-500/60 z-10" />
              <div className="absolute inset-0">
                <img src="/images/ouatip-logo.png" alt="OUATIP" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-900/70 via-brand-900/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 via-transparent to-brand-900/20" />
              </div>
              {/* Gold shimmer bottom edge */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />
              <div className="relative p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <span className="text-gold-500 text-xs tracking-[0.2em] uppercase">{t('event.upcoming.0.date')}</span>
                  <h3 className="font-display text-2xl md:text-3xl text-cream mt-2 mb-2 gold-shimmer">{t('event.upcoming.0.title')}</h3>
                  <p className="text-brand-200 text-sm leading-relaxed max-w-xl">{t('event.upcoming.0.desc')}</p>
                </div>
                <div className="shrink-0">
                  <span className="inline-block px-4 py-1.5 text-xs tracking-wider uppercase border border-gold-500/50 text-gold-500 group-hover:bg-gold-500/10 transition-colors duration-300">{t('event.upcoming.0.type')}</span>
                </div>
              </div>
            </a>
          </FadeIn>

          {/* Past Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewEvents.map((event, index) => (
              <FadeIn key={index} delay={index * 120}>
                <Link
                  to="/events"
                  className="group block relative p-6 border border-cream/10 hover:border-gold-500/40 transition-all duration-300 overflow-hidden"
                >
                  {event.image && (
                    <div className="absolute inset-0">
                      <img src={event.image} alt="" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-brand-900/70" />
                    </div>
                  )}
                  <div className="relative">
                    <span className="text-gold-500 text-xs tracking-[0.2em] uppercase">{t(event.dateKey)}</span>
                    <h3 className="font-serif text-xl text-cream mt-3 mb-3 group-hover:text-gold-500 transition-colors duration-200">{t(event.titleKey)}</h3>
                    <span className="inline-block px-3 py-1 text-[10px] tracking-wider uppercase border border-cream/20 text-cream/50">{t(event.typeKey)}</span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="mt-10 md:hidden text-center">
              <Link
                to="/events"
                className="inline-flex items-center text-cream/70 text-sm tracking-widest uppercase hover:text-gold-500 transition-colors duration-200 group"
              >
                {t('home.events.link')}
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-6 bg-brand-50 tobacco-leaf-warm gold-hairline-top">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">{t('home.gallery.label')}</p>
                <h2 className="font-serif text-3xl md:text-4xl text-brand-900 font-light">{t('home.gallery.title')}</h2>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2">
                  <button
                    onClick={() => scrollGallery('left')}
                    className="w-10 h-10 flex items-center justify-center border border-brand-300 text-brand-600 hover:border-brand-900 hover:text-brand-900 transition-colors duration-200"
                    aria-label="Scroll left"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <button
                    onClick={() => scrollGallery('right')}
                    className="w-10 h-10 flex items-center justify-center border border-brand-300 text-brand-600 hover:border-brand-900 hover:text-brand-900 transition-colors duration-200"
                    aria-label="Scroll right"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
                <Link
                  to="/gallery"
                  className="hidden md:inline-flex items-center text-brand-900 text-sm tracking-widest uppercase hover:text-gold-600 transition-colors duration-200 group"
                >
                  {t('home.gallery.link')}
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </FadeIn>
          <div ref={galleryRef} className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
            {previewGallery.map((photo, index) => (
              <FadeIn key={index} delay={index * 80}>
                <Link
                  to="/gallery"
                  className="group relative block shrink-0 w-64 md:w-72 aspect-[3/4] overflow-hidden snap-start"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-brand-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-cream text-sm tracking-wider">{photo.alt}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="mt-10 text-center md:hidden">
              <Link
                to="/gallery"
                className="inline-flex items-center text-brand-900 text-sm tracking-widest uppercase hover:text-gold-600 transition-colors duration-200 group"
              >
                {t('home.gallery.link')}
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-brand-50 tobacco-leaf-warm">
        <SectionDivider />
      </div>

      {/* Heritage Preview */}
      <section className="py-24 md:py-32 px-6 tobacco-leaf">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left" className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-[4/3] bg-brand-200 overflow-hidden">
                  <img
                    src="/images/drive/photo_167.jpg"
                    alt="Ancient theatre of Philippopolis"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" className="order-1 lg:order-2">
              <div>
                <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">{t('home.heritage.label')}</p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-900 font-light leading-tight mb-6" dangerouslySetInnerHTML={{ __html: t('home.heritage.title') }} />
                <p className="text-brand-600 text-lg leading-relaxed mb-8">
                  {t('home.heritage.desc')}
                </p>
                <Link
                  to="/membership"
                  className="inline-flex items-center text-brand-900 text-sm tracking-widest uppercase font-medium hover:text-gold-600 transition-colors duration-200 group"
                >
                  {t('home.heritage.link')}
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}