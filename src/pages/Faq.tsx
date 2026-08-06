import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SectionDivider from '../components/SectionDivider'
import FadeIn from '../components/FadeIn'
import usePageMeta from '../hooks/usePageMeta'
import { useLang } from '../i18n/LanguageContext'

const faqIndexes = [0, 1, 2, 3, 4, 5, 6, 7]

export default function Faq() {
  const { t } = useLang()
  const [open, setOpen] = useState<number | null>(0)

  usePageMeta({ title: t('seo.faq.title'), description: t('seo.faq.desc'), path: '/faq' })

  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'faq-jsonld'
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqIndexes.map((i) => ({
        '@type': 'Question',
        name: t(`faq.q.${i}`),
        acceptedAnswer: {
          '@type': 'Answer',
          text: t(`faq.a.${i}`),
        },
      })),
    })
    const existing = document.getElementById('faq-jsonld')
    if (existing) existing.remove()
    document.head.appendChild(script)
    return () => {
      const el = document.getElementById('faq-jsonld')
      if (el) el.remove()
    }
  }, [t])

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-20 bg-brand-900 cigar-wrapper overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/membership-hero.jpg')] bg-cover bg-center opacity-[0.12]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">{t('faq.hero.label')}</p>
          </FadeIn>
          <FadeIn delay={150}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream font-light leading-tight max-w-3xl">
              {t('faq.hero.title')}
            </h1>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="mt-6 text-brand-300 text-lg max-w-xl font-light italic">
              {t('faq.hero.quote')}<br />
              <span className="text-brand-400 text-sm not-italic tracking-wider">{t('faq.hero.quoteAttr')}</span>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6 tobacco-leaf">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <SectionDivider className="mb-16" />
          </FadeIn>
          <div className="space-y-4">
            {faqIndexes.map((i) => {
              const isOpen = open === i
              return (
                <FadeIn key={i} delay={i * 50}>
                  <div className={`border ${isOpen ? 'border-gold-500/40 bg-cream' : 'border-brand-200 bg-cream/60'} transition-colors duration-200`}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <h2 className="font-serif text-lg md:text-xl text-brand-900">{t(`faq.q.${i}`)}</h2>
                      <svg
                        className={`w-5 h-5 text-gold-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 -mt-1 text-brand-600 leading-relaxed">
                        {t(`faq.a.${i}`)}
                      </div>
                    )}
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 bg-brand-900 cigar-wrapper">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-cream font-light mb-6">
              {t('faq.cta.title')}
            </h2>
            <p className="text-brand-300 text-lg mb-8">
              {t('faq.cta.desc')}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3.5 bg-gold-500 text-brand-900 text-sm tracking-widest uppercase font-medium hover:bg-gold-400 transition-colors duration-200"
            >
              {t('faq.cta.button')}
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
