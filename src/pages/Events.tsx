import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SectionDivider from '../components/SectionDivider'
import FadeIn from '../components/FadeIn'

const upcomingEvents = [
  {
    date: 'October 2026',
    title: 'Once Upon a Time in Philippopolis',
    description: 'Our flagship annual event — an unforgettable evening celebrating cigar culture, heritage, and fellowship. Details to be announced.',
    type: 'Invitation',
    highlighted: true,
    image: '/images/ouatip-logo.png',
    countdownTo: '2026-10-17T18:00:00+03:00',
  },
  {
    date: 'September 2026',
    title: 'To Be Announced',
    description: 'Events for the month of September will be announced shortly.',
    type: 'Members Only',
  },
  {
    date: 'August 2026',
    title: 'To Be Announced',
    description: 'Events for the month of August will be announced shortly.',
    type: 'Members Only',
  },
]

const pastEvents = [
  {
    date: 'July 2026',
    title: 'Davidoff White Party',
    description: 'An evening with Hristo Kenansky of Delion, celebrating the Davidoff legacy.',
    type: 'Invitation',
  },
  {
    date: 'June 2026',
    title: 'Plasencia Year of the Horse Night',
    description: 'A special collaboration with Corojo Club, honouring the Plasencia Year of the Horse release.',
    type: 'Members Only',
  },
  {
    date: 'June 2026',
    title: 'Rosa Bulgaria Regional Edition',
    description: 'An exclusive regional edition presentation in partnership with Kaliman Caribe.',
    type: 'Guests',
  },
  {
    date: 'May 2026',
    title: "Bucanero's Cigar Night",
    description: 'An evening dedicated to the Bucanero brand and its distinguished portfolio.',
    type: 'Invitation',
  },
  {
    date: 'May 2026',
    title: 'Special Guest Rob Diedrich',
    description: 'Blackened Whisky and Cigars — an evening with Rob Diedrich exploring the pairing of peated spirits and full-bodied cigars.',
    type: 'Guests',
  },
  {
    date: 'April 2026',
    title: 'San Luis Rey Night',
    description: 'A night dedicated to the San Luis Rey marque, in collaboration with KD Leaf.',
    type: 'Invitation',
  },
  {
    date: 'April 2026',
    title: 'Partagás Maduro Night',
    description: 'A Partagás Maduro evening with Kaliman Caribe and special guest Yordan "Yuri" Kostadinov.',
    type: 'Members Only',
  },
  {
    date: 'March 2026',
    title: 'Artista Cigars Night',
    description: 'An Artista Cigars showcase in collaboration with Leaf Brothers.',
    type: 'Members Only',
  },
]

function Countdown({ to }: { to: string }) {
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
    { value: days, label: 'Days' },
    { value: hours, label: 'Hours' },
    { value: minutes, label: 'Min' },
    { value: seconds, label: 'Sec' },
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
  const [activeFilter, setActiveFilter] = useState('All')
  const filters = ['All', 'Members Only', 'Invitation', 'Guests']
  const filteredUpcoming = activeFilter === 'All' ? upcomingEvents : upcomingEvents.filter(e => e.type === activeFilter)
  const filteredPast = activeFilter === 'All' ? pastEvents : pastEvents.filter(e => e.type === activeFilter)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-20 bg-brand-900 cigar-wrapper">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">Events</p>
          </FadeIn>
          <FadeIn delay={150}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream font-light leading-tight max-w-3xl">
              Evenings that linger.
            </h1>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="mt-6 text-brand-300 text-lg max-w-xl font-light italic">
              "Good company, good wine, and good welcome can make good people."<br />
              <span className="text-brand-400 text-sm not-italic tracking-wider">- William Shakespeare</span>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Event Type Filter */}
      <section className="py-8 px-6 border-b border-brand-200">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="text-brand-500 text-xs tracking-[0.2em] uppercase shrink-0">Event Type</span>
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
                  {filter}
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
            The events organized by Gentlemen's Club Philippopolis are essential to our private society. More information about our mission can be found in the <Link to="/heritage" className="text-gold-500 hover:text-gold-600 underline underline-offset-2 transition-colors">Heritage</Link> section of the website.
          </p>
        </div>
      </section>

      {/* Upcoming */}
      <section className="pt-24 md:pt-32 pb-8 md:pb-12 px-6 tobacco-leaf">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="mb-16">
              <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">Upcoming</p>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-900 font-light">
                Mark your calendar.
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
                        <img src={event.image} alt={event.title} className="w-full h-full object-cover opacity-50" />
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/80 to-brand-900/60" />
                      </div>
                    )}
                    <div className="relative p-8 md:p-10">
                      <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                        <div className="md:w-40 shrink-0">
                          <span className="text-gold-500 text-sm tracking-wider uppercase">{event.date}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display text-2xl md:text-3xl text-cream mb-3 gold-shimmer">{event.title}</h3>
                          <p className="text-brand-300 leading-relaxed">{event.description}</p>
                          {event.countdownTo && <Countdown to={event.countdownTo} />}
                        </div>
                        <div className="md:w-32 shrink-0">
                          <span className="inline-block px-3 py-1 text-xs tracking-wider uppercase border border-gold-500/50 text-gold-500">
                            {event.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="group p-8 border border-brand-200 hover:border-gold-500/50 transition-colors duration-300">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                      <div className="md:w-40 shrink-0">
                        <span className="text-gold-500 text-sm tracking-wider uppercase">{event.date}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-2xl text-brand-900 mb-2">{event.title}</h3>
                        <p className="text-brand-600 leading-relaxed">{event.description}</p>
                      </div>
                      <div className="md:w-32 shrink-0">
                        <span className="inline-block px-3 py-1 text-xs tracking-wider uppercase border border-brand-300 text-brand-600">
                          {event.type}
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
              <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">Past Events</p>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-900 font-light">
                A glimpse of evenings past.
              </h2>
            </div>
          </FadeIn>
          <div className="space-y-8">
            {filteredPast.map((event, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="p-8 bg-cream border border-brand-200">
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                    <div className="md:w-40 shrink-0">
                      <span className="text-brand-500 text-sm tracking-wider uppercase">{event.date}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl text-brand-900 mb-2">{event.title}</h3>
                      <p className="text-brand-600 leading-relaxed">{event.description}</p>
                    </div>
                    <div className="md:w-32 shrink-0">
                      <span className="inline-block px-3 py-1 text-xs tracking-wider uppercase border border-brand-300 text-brand-600">
                        {event.type}
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
              All events are held at the club or by invitation at select venues in Plovdiv.
              Details are shared with members directly. For inquiries about attending, please contact us.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}