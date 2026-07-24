import SectionDivider from '../components/SectionDivider'
import FadeIn from '../components/FadeIn'
import { useLang } from '../i18n/LanguageContext'

const milestones = [
  {
    yearKey: 'heritage.milestone.0.year',
    titleKey: 'heritage.milestone.0.title',
    descKey: 'heritage.milestone.0.desc',
  },
  {
    yearKey: 'heritage.milestone.1.year',
    titleKey: 'heritage.milestone.1.title',
    descKey: 'heritage.milestone.1.desc',
  },
  {
    yearKey: 'heritage.milestone.2.year',
    titleKey: 'heritage.milestone.2.title',
    descKey: 'heritage.milestone.2.desc',
  },
]

const values = [
  {
    titleKey: 'heritage.principle.0.title',
    descKey: 'heritage.principle.0.desc',
  },
  {
    titleKey: 'heritage.principle.1.title',
    descKey: 'heritage.principle.1.desc',
  },
  {
    titleKey: 'heritage.principle.2.title',
    descKey: 'heritage.principle.2.desc',
  },
]

export default function Heritage() {
  const { t } = useLang()
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-900 cigar-wrapper overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/logo-light.svg')] bg-center bg-no-repeat bg-[length:60%_auto] opacity-[0.06]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">{t('heritage.hero.label')}</p>
          </FadeIn>
          <FadeIn delay={150}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream font-light leading-tight max-w-3xl">
              {t('heritage.hero.title')}
            </h1>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="mt-6 text-brand-300 text-lg font-light italic">
              {t('heritage.hero.subtitle')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32 px-6 tobacco-leaf">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div>
                <p className="text-brand-600 text-lg leading-relaxed mb-6">
                  {t('heritage.story.p1')}
                </p>
                <p className="text-brand-600 text-lg leading-relaxed mb-6">
                  {t('heritage.story.p2')}
                </p>
                <p className="text-brand-600 text-lg leading-relaxed">
                  {t('heritage.story.p3')}
                </p>
                <div className="mt-8 aspect-[16/9] overflow-hidden">
                  <img
                    src="/images/drive/photo_167.jpg"
                    alt="Gentlemen's Club Philippopolis"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="mt-16 space-y-6">
              <p className="text-brand-600 text-lg leading-relaxed">
                {t('heritage.story.p4')}
              </p>
              <p className="text-brand-600 text-lg leading-relaxed">
                {t('heritage.story.p5')}
              </p>
              <p className="text-brand-600 text-lg leading-relaxed">
                {t('heritage.story.p6')}
              </p>
              <p className="text-brand-600 text-lg leading-relaxed">
                {t('heritage.story.p7')}
              </p>
              <p className="text-brand-600 text-lg leading-relaxed">
                {t('heritage.story.p8')}
              </p>
              <p className="text-brand-600 text-lg leading-relaxed">
                {t('heritage.story.p9')}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32 px-6 bg-brand-50 tobacco-leaf-warm">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <SectionDivider className="mb-16" />
          </FadeIn>
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <FadeIn key={index} delay={index * 150}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-3">
                    <span className="text-gold-500 text-sm tracking-[0.3em] uppercase font-medium">
                      {t(milestone.yearKey)}
                    </span>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="font-serif text-2xl md:text-3xl text-brand-900 mb-4">{t(milestone.titleKey)}</h3>
                    <p className="text-brand-600 leading-relaxed">{t(milestone.descKey)}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 px-6 tobacco-leaf">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">{t('heritage.principles.label')}</p>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-900 font-light">
                {t('heritage.principles.title')}
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <FadeIn key={index} delay={index * 150}>
                <div className="text-center">
                  <h3 className="font-serif text-2xl text-brand-900 mb-4">{t(value.titleKey)}</h3>
                  <p className="text-brand-600 leading-relaxed">{t(value.descKey)}</p>
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
                {t('heritage.quote')}
              </blockquote>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}