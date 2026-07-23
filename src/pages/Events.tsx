import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SectionDivider from '../components/SectionDivider'
import FadeIn from '../components/FadeIn'
import { useLang } from '../i18n/LanguageContext'

const upcomingEvents = [
  {
    dateKey: 'event.upcoming.0.date',
    titleKey: 'event.upcoming.0.title',
    descKey: 'event.upcoming.0.desc',
    typeKey: 'event.upcoming.0.type',
    highlighted: true,
    image: '/images/ouatip-logo.png',
    countdownTo: '2026-10-17T18:00:00+03:00',
  },
  {
    dateKey: 'event.upcoming.1.date',
    titleKey: 'event.upcoming.1.title',
    descKey: 'event.upcoming.1.desc',
    typeKey: 'event.upcoming.1.type',
  },
  {
    dateKey: 'event.upcoming.2.date',
    titleKey: 'event.upcoming.2.title',
    descKey: 'event.upcoming.2.desc',
    typeKey: 'event.upcoming.2.type',
  },
]

const pastEvents = [
  { dateKey: 'event.past.0.date', titleKey: 'event.past.0.title', descKey: 'event.past.0.desc', typeKey: 'event.past.0.type' },
  { dateKey: 'event.past.1.date', titleKey: 'event.past.1.title', descKey: 'event.past.1.desc', typeKey: 'event.past.1.type' },
  { dateKey: 'event.past.2.date', titleKey: 'event.past.2.title', descKey: 'event.past.2.desc', typeKey: 'event.past.2.type' },
  { dateKey: 'event.past.3.date', titleKey: 'event.past.3.title', descKey: 'event.past.3.desc', typeKey: 'event.past.3.type' },
  { dateKey: 'event.past.4.date', titleKey: 'event.past.4.title', descKey: 'event.past.4.desc', typeKey: 'event.past.4.type' },
  { dateKey: 'event.past.5.date', titleKey: 'event.past.5.title', descKey: 'event.past.5.desc', typeKey: 'event.past.5.type' },
  { dateKey: 'event.past.6.date', titleKey: 'event.past.6.title', descKey: 'event.past.6.desc', typeKey: 'event.past.6.type' },
  { dateKey: 'event.past.7.date', titleKey: 'event.past.7.title', descKey: 'event.past.7.desc', typeKey: 'event.past.7.type' },
]

function Countdown({ to }: { to: string }) {
  const { t } = useLang()
  const [remaining, setRemaining] = useState(() => {
    const diff = new Date(to).getTime() - Date.now()
    return diff > 0 ? diff : 0
  })

  useEffect(() => {
    if (remaining <= 0) return
    const timer = setInterval(() => {
      const diff = new Date(to).getTime() - Date.now()
      setRemaining(diff > 0 ? diff : 0)
    }, 1000)
    return () => clearInterval(timer)
  }, [to])

  if (remaining <= 0) return null

  const days = Math.floor(remaining / (1000 * 60 * 60 * 24))
  const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((remaining / (1000 * 60)) % 60)
  const seconds = Math.floor((remaining / 1000) % 60)

  const units = [
    { value: days, label: t('countdown.days') },
    { value: hours, label: t('countdown.hours') },
    { value: minutes, label: t('countdown.min') },
    { value: seconds, label: t('countdown.sec') },
  ]

  return (
    <div className="flex gap-3 md:gap-4 mt-6">
      {units.map(({ value, label }) => (
        <div key={label} className="flex flex-col items-center">
          <span className="font-display text-2xl md:text-3xl text-gold-500 tabular-nums leading-none">
            {String(value).padStart(2, '0')}
          </span>
          <span className="text-brand-400 text-[10px] tracking-widest uppercase mt-1">{label}</span>
        </div>
      ))}
    </div>
  )
}

export default function Events() {
  const { t } = useLang()
  const [activeFilter, setActiveFilter] = useState('events.filter.all')
  const filters = ['events.filter.all', 'events.filter.members', 'events.filter.invitation', 'events.filter.guests']
  const filteredUpcoming = activeFilter === 'events.filter.all' ? upcomingEvents : upcomingEvents.filter(e => t(e.typeKey) === t(activeFilter))
  const filteredPast = activeFilter === 'events.filter.all' ? pastEvents : pastEvents.filter(e => t(e.typeKey) === t(activeFilter))

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-20 bg-brand-900 cigar-wrapper">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">{t('events.hero.label')}</p>
          </FadeIn>
          <FadeIn delay={150}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream font-light leading-tight max-w-3xl">
              {t('events.hero.title')}
            </h1>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="mt-6 text-brand-300 text-lg max-w-xl font-light italic">
              {t('events.hero.quote')}<br />
              <span className="text-brand-400 text-sm not-italic tracking-wider">{t('events.hero.quoteAttr')}</span>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Event Type Filter */}
      <section className="py-8 px-6 border-b border-brand-200">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="text-brand-500 text-xs tracking-[0.2em] uppercase shrink-0">{t('events.filter.label')}</span>
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-1.5 text-xs tracking-wider uppercase border transition-colors duration-200 ${
                    activeFilter === filter
                      ? 'bg-brand-900 text-cream border-brand-900'
                      : 'bg-transparent text-brand-600 border-brand-300 hover:border-brand-900 hover:text-brand-900'
                  }`}
                >
                  {t(filter)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="py-8 px-6 bg-brand-50 border-b border-brand-200">
        <div className="mx-auto max-w-5xl">
          <p className="text-brand-600 leading-relaxed">
            {t('events.info').split('<link>').map((part, i) =>
              i % 2 === 0 ? part : <Link key={i} to="/heritage" className="text-gold-500 hover:text-gold-600 underline underline-offset-2 transition-colors">{part}</Link>
            )}
          </p>
        </div>
      </section>

      {/* Upcoming */}
      <section className="pt-24 md:pt-32 pb-8 md:pb-12 px-6 tobacco-leaf">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="mb-16">
              <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">{t('events.upcoming.label')}</p>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-900 font-light">
                {t('events.upcoming.title')}
              </h2>
            </div>
          </FadeIn>
          <div className="space-y-8">
            {filteredUpcoming.map((event, index) => (
              <FadeIn key={index} delay={index * 100}>
                {event.highlighted ? (
                  <div className="relative overflow-hidden border-2 border-gold-500/40 bg-brand-900">
                    {event.image && (
                      <div className="absolute inset-0">
                        <img src={event.image} alt={t(event.titleKey)} className="w-full h-full object-cover opacity-50" />
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/80 to-brand-900/60" />
                      </div>
                    )}
                    <div className="relative p-8 md:p-10">
                      <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                        <div className="md:w-40 shrink-0">
                          <span className="text-gold-500 text-sm tracking-wider uppercase">{t(event.dateKey)}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display text-2xl md:text-3xl text-cream mb-3 gold-shimmer">{t(event.titleKey)}</h3>
                          <p className="text-brand-300 leading-relaxed">{t(event.descKey)}</p>
                          {event.countdownTo && <Countdown to={event.countdownTo} />}
                        </div>
                        <div className="md:w-32 shrink-0">
                          <span className="inline-block px-3 py-1 text-xs tracking-wider uppercase border border-gold-500/50 text-gold-500">
                            {t(event.typeKey)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="group p-8 border border-brand-200 hover:border-gold-500/50 transition-colors duration-300">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                      <div className="md:w-40 shrink-0">
                        <span className="text-gold-500 text-sm tracking-wider uppercase">{t(event.dateKey)}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-2xl text-brand-900 mb-2">{t(event.titleKey)}</h3>
                        <p className="text-brand-600 leading-relaxed">{t(event.descKey)}</p>
                      </div>
                      <div className="md:w-32 shrink-0">
                        <span className="inline-block px-3 py-1 text-xs tracking-wider uppercase border border-brand-300 text-brand-600">
                          {t(event.typeKey)}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="pt-8 md:pt-12 pb-24 md:pb-32 px-6 bg-brand-50 tobacco-leaf-warm">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <SectionDivider className="mb-16" />
          </FadeIn>
          <FadeIn>
            <div className="mb-16">
              <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">{t('events.past.label')}</p>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-900 font-light">
                {t('events.past.title')}
              </h2>
            </div>
          </FadeIn>
          <div className="space-y-8">
            {filteredPast.map((event, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="p-8 bg-cream border border-brand-200">
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                    <div className="md:w-40 shrink-0">
                      <span className="text-brand-500 text-sm tracking-wider uppercase">{t(event.dateKey)}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl text-brand-900 mb-2">{t(event.titleKey)}</h3>
                      <p className="text-brand-600 leading-relaxed">{t(event.descKey)}</p>
                    </div>
                    <div className="md:w-32 shrink-0">
                      <span className="inline-block px-3 py-1 text-xs tracking-wider uppercase border border-brand-300 text-brand-600">
                        {t(event.typeKey)}
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-16 px-6 tobacco-leaf">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <p className="text-brand-500 text-sm leading-relaxed">
              {t('events.note')}
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}