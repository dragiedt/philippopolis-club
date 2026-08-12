import SectionDivider from '../components/SectionDivider'
import FadeIn from '../components/FadeIn'
import usePageMeta from '../hooks/usePageMeta'
import { useLang } from '../i18n/LanguageContext'

const codeItems = [
  { titleKey: 'heritage.code.0.title', descKey: 'heritage.code.0.desc' },
  { titleKey: 'heritage.code.1.title', descKey: 'heritage.code.1.desc' },
  { titleKey: 'heritage.code.2.title', descKey: 'heritage.code.2.desc' },
  { titleKey: 'heritage.code.3.title', descKey: 'heritage.code.3.desc' },
  { titleKey: 'heritage.code.4.title', descKey: 'heritage.code.4.desc' },
  { titleKey: 'heritage.code.5.title', descKey: 'heritage.code.5.desc' },
  { titleKey: 'heritage.code.6.title', descKey: 'heritage.code.6.desc' },
]

const storySections = [
  {
    titleKey: 'heritage.story.heading.1',
    paragraphKeys: ['heritage.story.s1.p1', 'heritage.story.s1.p2'],
  },
  {
    titleKey: 'heritage.story.heading.2',
    paragraphKeys: ['heritage.story.s2.p1', 'heritage.story.s2.p2'],
  },
  {
    titleKey: 'heritage.story.heading.3',
    paragraphKeys: ['heritage.story.s3.p1', 'heritage.story.s3.p2', 'heritage.story.s3.p3', 'heritage.story.s3.p4'],
  },
]

export default function Heritage() {
  const { lang, t } = useLang()

  usePageMeta({ title: t('seo.heritage.title'), description: t('seo.heritage.desc'), path: '/heritage' })
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
              {t('heritage.hero.subtitle')}<br />
              <span className="text-brand-400 text-sm not-italic tracking-wider">{t('heritage.hero.subtitleAttr')}</span>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="pt-24 md:pt-32 pb-8 md:pb-10 px-6 tobacco-leaf">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto">
            {lang === 'bg' ? (
              <>
                <FadeIn>
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl text-brand-900 font-light mb-6">{t('heritage.story.heading.0')}</h2>
                    <p className="text-brand-600 text-lg leading-relaxed mb-6">
                      {t('heritage.story.s0.p1')}
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
                <FadeIn>
                  <div className="mt-16 space-y-6">
                    {storySections.map((section) => (
                      <div key={section.titleKey}>
                        <h2 className="font-serif text-2xl md:text-3xl text-brand-900 font-light mb-6">{t(section.titleKey)}</h2>
                        {section.paragraphKeys.map((key) => (
                          <p key={key} className="text-brand-600 text-lg leading-relaxed mb-4">
                            {t(key)}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </>
            ) : (
              <>
                <FadeIn>
                  <div>
                    <p className="text-brand-600 text-lg leading-relaxed mb-6">
                      {t('heritage.story.p1')}
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
              </>
            )}
          </div>
        </div>
      </section>

      {/* Coat of Arms */}
      <section className="pt-0 pb-12 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <img src="/images/logo.svg" alt="Club coat of arms" className="mx-auto w-44 md:w-60 mb-4" />
            <p className="text-gold-500 text-xs tracking-[0.4em] uppercase font-medium">Gentlemen's Club Philippopolis Coat of Arms</p>
          </FadeIn>
        </div>
      </section>

      {/* The Code */}
      <section className="py-24 md:py-32 px-6 bg-brand-50 tobacco-leaf-warm">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <SectionDivider className="mb-16" />
          </FadeIn>
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">{t('heritage.code.label')}</p>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-900 font-light max-w-3xl mx-auto">
                {t('heritage.code.intro')}
              </h2>
            </div>
          </FadeIn>
          <div className="space-y-12">
            {codeItems.map((item, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-4">
                    <h3 className="font-serif text-2xl text-brand-900">{t(item.titleKey)}</h3>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-brand-600 leading-relaxed">{t(item.descKey)}</p>
                  </div>
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