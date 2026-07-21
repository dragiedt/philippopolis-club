import SectionDivider from '../components/SectionDivider'
import FadeIn from '../components/FadeIn'

const upcomingEvents = [
  {
    date: 'August 2026',
    title: 'Heritage Evening',
    description: 'An intimate gathering celebrating the history of Plovdiv, with rare vintages and curated cigars.',
    type: 'Members Only',
  },
  {
    date: 'September 2026',
    title: 'The Autumn Selection',
    description: 'The release of our seasonal humidor selection, paired with single-cask whiskies from our cellar.',
    type: 'Members Only',
  },
  {
    date: 'October 2026',
    title: 'Guest Speaker Series',
    description: 'An evening with a distinguished guest from the world of tobacco or spirits. Details to be announced.',
    type: 'Invitation',
  },
]

const pastEvents = [
  {
    date: 'June 2026',
    title: 'Fly Me to the Moon',
    description: 'Cigars, Sinatra & Retro Cars — our annual celebration featuring live jazz, classic automobiles, and the finest Habanos.',
    highlight: 'Featuring Vasyl Petrov performing the greatest hits of Frank Sinatra.',
  },
  {
    date: 'March 2026',
    title: 'Honorary Membership',
    description: 'Krasimir Balakov, legend of Bulgarian football, was received as an honorary member of the club.',
    highlight: 'Previous honourees include Yordan Yovchev and Mikhail Bilalov.',
  },
  {
    date: 'December 2025',
    title: 'Winter Gala',
    description: 'A black-tie evening celebrating the season, with a curated selection of aged rums and premium cigars.',
    highlight: 'Attendance by over 60 members and distinguished guests.',
  },
]

export default function Events() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-900 cigar-wrapper">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">Events</p>
          </FadeIn>
          <FadeIn delay={150}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream font-light leading-tight max-w-3xl">
              Evenings that linger.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-24 md:py-32 px-6 tobacco-leaf">
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
            {upcomingEvents.map((event, index) => (
              <FadeIn key={index} delay={index * 100}>
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
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-24 md:py-32 px-6 bg-brand-50 tobacco-leaf-warm">
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
            {pastEvents.map((event, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="p-8 bg-cream border border-brand-200">
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                    <div className="md:w-40 shrink-0">
                      <span className="text-brand-500 text-sm tracking-wider uppercase">{event.date}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl text-brand-900 mb-2">{event.title}</h3>
                      <p className="text-brand-600 leading-relaxed mb-3">{event.description}</p>
                      {event.highlight && (
                        <p className="text-gold-600 text-sm italic">{event.highlight}</p>
                      )}
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