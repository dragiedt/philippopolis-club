import { useRef } from 'react'
import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import SectionDivider from '../components/SectionDivider'
import usePageMeta from '../hooks/usePageMeta'
import { useLang } from '../i18n/LanguageContext'

const highlights = [
  { image: '/images/ovtc-cigar-feature.png', titleKey: 'ouatip.highlight.0.title', descKey: 'ouatip.highlight.0.desc' },
  { image: '/images/cigar-journal-logo-social.jpg', titleKey: 'ouatip.highlight.1.title', descKey: 'ouatip.highlight.1.desc' },
  { image: '/images/cigar-factory.jpg', titleKey: 'ouatip.highlight.2.title', descKey: 'ouatip.highlight.2.desc' },
  { image: '/images/jazz-band.jpg', titleKey: 'ouatip.highlight.3.title', descKey: 'ouatip.highlight.3.desc' },
  { image: '/images/young-artists-new.jpg', titleKey: 'ouatip.highlight.4.title', descKey: 'ouatip.highlight.4.desc' },
  { image: '/images/retro-car.jpg', titleKey: 'ouatip.highlight.5.title', descKey: 'ouatip.highlight.5.desc' },
  { image: '/images/appleton-estate.jpg', titleKey: 'ouatip.highlight.6.title', descKey: 'ouatip.highlight.6.desc' },
  { image: '/images/glenallachie-12.jpg', titleKey: 'ouatip.highlight.7.title', descKey: 'ouatip.highlight.7.desc' },
  { image: '/images/frapin-cigar-blend.jpg', titleKey: 'ouatip.highlight.8.title', descKey: 'ouatip.highlight.8.desc' },
]

export default function OnceUponATime() {
  const { t } = useLang()
  const paymentRef = useRef<HTMLDivElement>(null)

  const scrollToPayment = () => {
    paymentRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  usePageMeta({
    title: t('seo.ouatip.title'),
    description: t('seo.ouatip.desc'),
    path: '/once-upon-a-time-in-philippopolis',
    image: '/images/ouatip-logo.png',
  })

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex flex-col justify-center items-center pt-28 pb-16 md:pt-36 md:pb-20 bg-brand-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/ouatip-logo.png" alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-900/60 via-brand-900/20 to-brand-900" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-6">{t('ouatip.hero.label')}</p>
          </FadeIn>
          <FadeIn delay={150}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream font-light leading-tight mb-6 gold-shimmer">
              {t('ouatip.hero.title')}
            </h1>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-brand-300 text-lg md:text-xl font-light max-w-2xl mx-auto mb-4 leading-relaxed">
              {t('ouatip.hero.subtitle')}
            </p>
          </FadeIn>
          <FadeIn delay={450}>
            <p className="text-gold-500 text-sm tracking-[0.2em] uppercase mt-6 mb-10">
              {t('ouatip.hero.date')}
            </p>
          </FadeIn>
          <FadeIn delay={600}>
            <button
              type="button"
              onClick={scrollToPayment}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-900 text-gold-500 border border-gold-500 text-sm tracking-widest uppercase font-medium hover:bg-brand-800 hover:border-gold-400 transition-colors duration-200"
            >
              {t('ouatip.hero.cta')}
            </button>
          </FadeIn>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-gold-500" />
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32 px-6 bg-brand-800 tobacco-leaf-dark">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <SectionDivider className="mb-16" />
          </FadeIn>
          <FadeIn>
            <img
              src="/images/ouatip-official-logo.png"
              alt={t('ouatip.hero.title')}
              className="mx-auto mb-10 w-full max-w-md"
            />
          </FadeIn>
          <FadeIn>
            <p className="text-center text-brand-300 text-lg md:text-xl leading-relaxed mb-6">
              {t('ouatip.intro.p1')}
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-center text-brand-300 text-lg md:text-xl leading-relaxed">
              {t('ouatip.intro.p2')}
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-12">
              {[
                { label: t('ouatip.highlights.label'), target: 'ouatip-highlights' },
                { label: t('ouatip.sponsors.title'), target: 'ouatip-sponsors' },
                { label: t('ouatip.info.label'), target: 'ouatip-info' },
                { label: t('ouatip.payment.title'), target: 'ouatip-payment' },
                { label: t('ouatip.contact.label'), target: 'ouatip-contact' },
              ].map((tab) => (
                <button
                  key={tab.target}
                  type="button"
                  onClick={() => scrollToSection(tab.target)}
                  className="inline-flex items-center justify-center px-6 py-3 bg-brand-900 text-gold-500 border border-gold-500 text-sm tracking-widest uppercase font-medium hover:bg-brand-800 hover:border-gold-400 transition-colors duration-200"
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Highlights */}
      <section id="ouatip-highlights" className="py-24 md:py-32 px-6 bg-brand-900 tobacco-leaf-dark gold-hairline-top scroll-mt-28">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">{t('ouatip.highlights.label')}</p>
              <h2 className="font-serif text-3xl md:text-4xl text-cream font-light">{t('ouatip.highlights.title')}</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <FadeIn key={index} delay={index * 100} className="h-full">
                <div className="flex flex-col h-full border border-brand-700 bg-brand-800/60 hover:border-gold-500/50 transition-colors duration-300 overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={item.image} alt={t(item.titleKey)} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="font-serif text-xl text-cream mb-3">{t(item.titleKey)}</h3>
                    <p className="text-brand-300 leading-relaxed">{t(item.descKey)}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Info */}
      <section id="ouatip-info" className="py-24 md:py-32 px-6 bg-brand-800 tobacco-leaf-dark gold-hairline-top scroll-mt-28">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div id="ouatip-sponsors" className="text-center mb-16 scroll-mt-28">
              <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">{t('ouatip.sponsors.title')}</p>
              <img
                src="/images/sponsors.jpg"
                alt={t('ouatip.sponsors.title')}
                className="mx-auto w-full max-w-2xl"
              />
            </div>
          </FadeIn>

          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">{t('ouatip.info.label')}</p>
              <h2 className="font-serif text-3xl md:text-4xl text-cream font-light">{t('ouatip.info.title')}</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Venue */}
            <FadeIn delay={0}>
              <div className="p-8 border border-brand-700 bg-brand-900/50">
                <h3 className="font-serif text-xl text-cream mb-4">{t('ouatip.info.venue.title')}</h3>
                <div className="overflow-hidden border border-brand-700">
                  <iframe
                    title={t('ouatip.info.venue.title')}
                    src="https://maps.google.com/maps?q=Kazarmi%20Iztochen%2C%20bul.%20%22Sankt%20Peterburg%22%20131%2C%204017%20Plovdiv%2C%20Bulgaria&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full"
                    style={{ height: '280px', border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </FadeIn>

            {/* Price */}
            <FadeIn delay={100}>
              <div className="p-8 border border-brand-700 bg-brand-900/50">
                <h3 className="font-serif text-xl text-cream mb-4">{t('ouatip.info.price.title')}</h3>
                <p className="text-brand-300 leading-relaxed">{t('ouatip.info.price.desc')}</p>
              </div>
            </FadeIn>

            {/* Dress Code */}
            <FadeIn delay={200}>
              <div className="p-8 border border-brand-700 bg-brand-900/50">
                <h3 className="font-serif text-xl text-cream mb-4">{t('ouatip.info.dresscode.title')}</h3>
                <p className="text-brand-300 leading-relaxed">{t('ouatip.info.dresscode.desc')}</p>
              </div>
            </FadeIn>

            {/* Limited Seats */}
            <FadeIn delay={300}>
              <div className="p-8 border border-brand-700 bg-brand-900/50">
                <h3 className="font-serif text-xl text-cream mb-4">{t('ouatip.info.limited.title')}</h3>
                <p className="text-brand-300 leading-relaxed">{t('ouatip.info.limited.desc')}</p>
              </div>
            </FadeIn>

            {/* Hotels */}
            <FadeIn delay={400}>
              <div className="p-8 border border-brand-700 bg-brand-900/50">
                <h3 className="font-serif text-xl text-cream mb-4">{t('ouatip.info.hotels.title')}</h3>
                <p className="text-brand-300 leading-relaxed mb-2">
                  <span className="font-medium text-cream">{t('ouatip.info.hotels.radisson')}</span> — <span className="text-brand-300/80">{t('ouatip.info.hotels.promoLabel')}</span> <span className="font-mono text-gold-500">PHIL26</span>
                </p>
                <p className="text-brand-300 leading-relaxed">
                  <span className="font-medium text-cream">{t('ouatip.info.hotels.flavia')}</span> — <span className="text-brand-300/80">{t('ouatip.info.hotels.promoLabel')}</span> <span className="font-mono text-gold-500">GCP</span>
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Payment */}
      <section ref={paymentRef} id="ouatip-payment" className="py-24 md:py-32 px-6 bg-brand-900 tobacco-leaf-dark gold-hairline-top scroll-mt-28">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="text-center mb-6">
              <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">{t('ouatip.payment.label')}</p>
              <h2 className="font-serif text-3xl md:text-4xl text-cream font-light">{t('ouatip.payment.title')}</h2>
            </div>
          </FadeIn>

          <FadeIn>
            <p className="text-center text-sm text-brand-300 leading-relaxed mx-auto max-w-xl mb-10">
              {t('ouatip.payment.note')}
            </p>
          </FadeIn>

          <FadeIn>
            <div className="p-8 md:p-12 border border-brand-200 bg-cream">
              <div className="space-y-4 text-brand-600">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-b border-brand-100 pb-3">
                  <span className="text-sm tracking-wider uppercase">{t('ouatip.payment.entity')}</span>
                  <span className="font-medium text-brand-900 sm:text-right">{t('ouatip.payment.entityName')}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-b border-brand-100 pb-3">
                  <span className="text-sm tracking-wider uppercase">IBAN</span>
                  <span className="font-mono text-brand-900 text-sm sm:text-sm sm:text-right break-all">BG45 STSA 9300 0031 2344 44</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-b border-brand-100 pb-3">
                  <span className="text-sm tracking-wider uppercase">{t('ouatip.payment.bank')}</span>
                  <span className="font-medium text-brand-900 sm:text-right">{t('ouatip.payment.bankName')}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-b border-brand-100 pb-3">
                  <span className="text-sm tracking-wider uppercase">{t('ouatip.payment.amount')}</span>
                  <span className="font-medium text-brand-900 sm:text-right">125 EUR</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="text-sm tracking-wider uppercase">{t('ouatip.payment.reason')}</span>
                  <span className="font-medium text-brand-900 sm:text-right">{t('ouatip.payment.reasonDesc')}</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact */}
      <section id="ouatip-contact" className="py-24 md:py-32 px-6 bg-brand-900 scroll-mt-28">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">{t('ouatip.contact.label')}</p>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="text-cream text-lg leading-relaxed mb-8">
              {t('ouatip.contact.desc')}
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-brand-300">
              <a href="tel:+35888262780" className="inline-flex items-center justify-center gap-2 hover:text-gold-500 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                +359 888 262 780
              </a>
              <a href="mailto:philippopolis2022@gmail.com" className="inline-flex items-center justify-center gap-2 hover:text-gold-500 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                philippopolis2022@gmail.com
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="flex gap-4 justify-center mt-8">
              <a href="https://shorturl.at/jRmdE" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-11 h-11 border border-cream/20 text-cream hover:border-gold-500 hover:text-gold-500 transition-colors duration-200">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://shorturl.at/IIbjk" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-11 h-11 border border-cream/20 text-cream hover:border-gold-500 hover:text-gold-500 transition-colors duration-200">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.8C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 bg-brand-800">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <Link
              to="/events"
              className="inline-flex items-center text-cream text-sm tracking-widest uppercase font-medium hover:text-gold-500 transition-colors duration-200 group"
            >
              {t('ouatip.back')}
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
