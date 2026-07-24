import { Link } from 'react-router-dom'
import SectionDivider from '../components/SectionDivider'
import FadeIn from '../components/FadeIn'
import { useLang } from '../i18n/LanguageContext'

const tiers = [
  {
    nameKey: 'membership.tier.0.name',
    descKey: 'membership.tier.0.desc',
    features: [
      'membership.tier.0.feature.0',
      'membership.tier.0.feature.1',
      'membership.tier.0.feature.2',
      'membership.tier.0.feature.3',
    ],
  },
  {
    nameKey: 'membership.tier.1.name',
    descKey: 'membership.tier.1.desc',
    features: [
      'membership.tier.1.feature.0',
      'membership.tier.1.feature.1',
      'membership.tier.1.feature.2',
      'membership.tier.1.feature.3',
      'membership.tier.1.feature.4',
    ],
  },
  {
    nameKey: 'membership.tier.2.name',
    descKey: 'membership.tier.2.desc',
    features: [
      'membership.tier.2.feature.0',
      'membership.tier.2.feature.1',
      'membership.tier.2.feature.2',
      'membership.tier.2.feature.3',
      'membership.tier.2.feature.4',
    ],
  },
]

const process = [
  {
    step: '01',
    titleKey: 'membership.step.0.title',
    descKey: 'membership.step.0.desc',
  },
  {
    step: '02',
    titleKey: 'membership.step.1.title',
    descKey: 'membership.step.1.desc',
  },
  {
    step: '03',
    titleKey: 'membership.step.2.title',
    descKey: 'membership.step.2.desc',
  },
  {
    step: '04',
    titleKey: 'membership.step.3.title',
    descKey: 'membership.step.3.desc',
  },
]

export default function Membership() {
  const { t } = useLang()
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-20 bg-brand-900 cigar-wrapper overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/membership-hero.jpg')] bg-cover bg-center opacity-[0.12]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">{t('membership.hero.label')}</p>
          </FadeIn>
          <FadeIn delay={150}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream font-light leading-tight max-w-3xl">
              {t('membership.hero.title')}
            </h1>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="mt-6 text-brand-300 text-lg max-w-xl font-light italic">
              {t('membership.hero.quote')}<br />
              <span className="text-brand-400 text-sm not-italic tracking-wider">{t('membership.hero.quoteAttr')}</span>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 md:py-32 px-6 tobacco-leaf">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <p className="text-brand-600 text-lg leading-relaxed">
              {t('membership.intro')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-24 md:py-32 px-6 bg-brand-50 tobacco-leaf-warm gold-hairline-top">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">{t('membership.tiers.label')}</p>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-900 font-light">
                {t('membership.tiers.title')}
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <FadeIn key={index} delay={index * 150}>
                <div
                  className={`p-8 border h-full cigar-band-top ${
                    index === 1
                      ? 'border-gold-500 bg-cream shadow-lg'
                      : 'border-brand-200 bg-cream'
                  }`}
                >
                  {index === 1 && (
                    <span className="text-gold-500 text-xs tracking-[0.2em] uppercase font-medium">
                      {t('membership.tiers.popular')}
                    </span>
                  )}
                  <h3 className="font-serif text-2xl text-brand-900 mt-4 mb-2">{t(tier.nameKey)}</h3>
                  <p className="text-brand-600 text-sm mb-6">{t(tier.descKey)}</p>
                  <ul className="space-y-3">
                    {tier.features.map((featureKey, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-sm text-brand-600">
                        <svg className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {t(featureKey)}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 px-6 tobacco-leaf">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <SectionDivider className="mb-16" />
          </FadeIn>
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">{t('membership.process.label')}</p>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-900 font-light">
                {t('membership.process.title')}
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {process.map((step, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="flex gap-6">
                  <span className="font-serif text-4xl text-brand-200 shrink-0">{step.step}</span>
                  <div>
                    <h3 className="font-serif text-xl text-brand-900 mb-2">{t(step.titleKey)}</h3>
                    <p className="text-brand-600 leading-relaxed">{t(step.descKey)}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 bg-brand-900 cigar-wrapper">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-cream font-light mb-6">
              {t('membership.cta.title')}
            </h2>
            <p className="text-brand-300 text-lg mb-8">
              {t('membership.cta.desc')}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3.5 bg-gold-500 text-brand-900 text-sm tracking-widest uppercase font-medium hover:bg-gold-400 transition-colors duration-200"
            >
              {t('membership.cta.button')}
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}