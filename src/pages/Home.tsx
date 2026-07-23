import { Link } from 'react-router-dom'
import SectionDivider from '../components/SectionDivider'
import FadeIn from '../components/FadeIn'
import SmokeEffect from '../components/SmokeEffect'
import { useLang } from '../i18n/LanguageContext'

const pleasures = [
  { number: 'I', titleKey: 'home.pleasures.0.title', descKey: 'home.pleasures.0.desc' },
  { number: 'II', titleKey: 'home.pleasures.1.title', descKey: 'home.pleasures.1.desc' },
  { number: 'III', titleKey: 'home.pleasures.2.title', descKey: 'home.pleasures.2.desc' },
]

export default function Home() {
  const { t } = useLang()
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center bg-brand-900 cigar-wrapper pt-40 md:pt-56">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 scale-105"
          style={{
            backgroundImage: `url('/images/photo_168.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/60 via-brand-900/40 to-brand-900/80" />
        <SmokeEffect />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <FadeIn delay={100}>
            <img src="/images/logo-light.svg" alt="Gentlemen's Club Philippopolis" className="mx-auto mb-2 w-24 md:w-40" />
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
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-900 font-light leading-tight mb-6" dangerouslySetInnerHTML={{ __html: t('home.society.title') }} />
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
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative">
                <div className="aspect-[4/5] bg-brand-200 overflow-hidden">
                  <img
                    src="/images/drive/GC_0299.jpg"
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

      {/* Quote */}
      <section className="py-24 md:py-32 px-6 bg-brand-900 cigar-wrapper vignette">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <div className="relative">
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-serif text-6xl text-gold-500/30">"</span>
              <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-cream font-light leading-relaxed italic">
                {t('home.quote')}
              </blockquote>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Heritage Preview */}
      <section className="py-24 md:py-32 px-6 tobacco-leaf">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left" className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-[4/3] bg-brand-200 overflow-hidden">
                  <img
                    src="/images/drive/GC_0406.jpg"
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
                  to="/heritage"
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