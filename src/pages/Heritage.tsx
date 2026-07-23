import SectionDivider from '../components/SectionDivider'
import FadeIn from '../components/FadeIn'

const milestones = [
  {
    year: 'Ancient',
    title: 'Philippopolis',
    description: 'Founded upon the seven hills, one of Europe\'s oldest continuously inhabited cities. The name Philippopolis, given by Philip II of Macedon, has endured through Thracian, Roman, Byzantine, and Ottoman rule.',
  },
  {
    year: 'Tradition',
    title: 'The Gentleman\'s Code',
    description: 'The values of discretion, craft, and fellowship have been the cornerstones of gentlemanly societies across Europe for centuries. We continue this tradition in the spirit of Plovdiv.',
  },
  {
    year: 'Today',
    title: 'The Club',
    description: 'Behind an unassuming door in the old city, our members gather. There are no screens, no headlines — only leather, walnut, and the slow ceremony of a well-cut cigar.',
  },
]

const values = [
  {
    title: 'Discretion',
    description: 'What is shared within these walls remains within these walls. Our members trust in the sanctity of private conversation.',
  },
  {
    title: 'Craft',
    description: 'From the selection of our cigars to the curation of our cellar, every detail is considered with the utmost care and expertise.',
  },
  {
    title: 'Fellowship',
    description: 'A membership drawn from the arts, law, industry and the professions — united not by profession, but by principle.',
  },
]

export default function Heritage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-900 cigar-wrapper overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/logo-light.svg')] bg-center bg-no-repeat bg-[length:60%_auto] opacity-[0.08]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">Heritage</p>
          </FadeIn>
          <FadeIn delay={150}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream font-light leading-tight max-w-3xl">
              From Philippopolis to the present day.
            </h1>
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
                  Founded upon the seven hills of one of Europe's oldest continuously inhabited cities, our club draws its name — and its temperament — from a place that has watched empires pass.
                </p>
                <p className="text-brand-600 text-lg leading-relaxed mb-6">
                  Philippopolis, now known as Plovdiv, has been a crossroads of civilizations for millennia. Thracian tribes first settled these hills, followed by Macedonians, Romans, Byzantines, Ottomans, and Bulgarians. Each has left its mark on the city's character.
                </p>
                <p className="text-brand-600 text-lg leading-relaxed">
                  It is from this layered history that our club draws its spirit — a reverence for tradition, an appreciation for the finer things, and an understanding that true elegance is timeless.
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
                Our club was established by a small circle of cigar aficionados. It all began as a gathering of friends from all walks of life united by a shared appreciation for fine cigars, thoughtful conversation, and timeless traditions. Over time, this informal circle evolved into an organized cigar club with its own governance, more than 50 paid members, and a growing community of gentlemen who value refinement, camaraderie and culture.
              </p>
              <p className="text-brand-600 text-lg leading-relaxed">
                Soon Gentlemen's Club Philippopolis started rapidly growing and evolving — a Sofia chapter is currently in development — while at the same time maintaining strict admission rules. Each candidate must adhere to the Club's policies of cultivating gentlemanly conduct, etiquette, and elegance among its members and guests while promoting the culture and knowledge surrounding cigars, fine spirits, coffee, and gastronomy. Through tastings, lectures, cultural events, and meetings with cigar manufacturers and industry experts, members deepen their appreciation for the craftsmanship and traditions behind these arts. We strive to make cigar culture more popular and teach gentlemen the 'art of slow living'.
              </p>
              <p className="text-brand-600 text-lg leading-relaxed">
                Gentlemen's Club Philippopolis emerged in a time when cigar culture was at its infancy in Bulgaria and Eastern Europe as a whole. Our organization was the first legally established cigar club in Bulgaria and remains as such to this day. The club is currently working on a long-term plan to expand its operations abroad and establish more chapters in other European countries, defying language barriers and sometimes letting 'the smoke do the talking instead'.
              </p>
              <p className="text-brand-600 text-lg leading-relaxed">
                Notable events which Gentlemen's Club Philippopolis has participated in include meetings and cigar presentations with Christian and Vivian Eiroa (Eiroa Cigars), Oscar Valladares (Oscar Valladares Cigars), Tom Lazuka (Asylum Cigars), Freddy Molina and Steven Kron (A.J. Fernandez Cigars), Rocky Patel (Rocky Patel Cigars), Pedro Gomez (Drew Estate Cigars), Jose Blanco (Arturo Fuente Cigars), Christopher Mey and Craig Cunningham (Esteban Carreras Cigars), J.C. Newman (J.C. Newman Cigars) and more. In addition we organize and participate in regular whisky, rum and wine presentations. Each year we organize a major event in autumn open to all major cigar aficionados and industry professionals in Europe.
              </p>
              <p className="text-brand-600 text-lg leading-relaxed">
                Furthermore, Gentlemen's Club Philippopolis has great club relationships with cigar organizations in Bulgaria and throughout Europe: KD Leaf Diaries (UK), Cigar Club Luxembourg, Smoke Society Macedonia, Cigars Club Yatrus (Bulgaria), Cigar Nomads Sofia (Bulgaria). Our club ambassadors — one in France and one in Belgium — are always working on expanding our contacts with cigar aficionados even further.
              </p>
              <p className="text-brand-600 text-lg leading-relaxed">
                Our partners and sponsors include all major cigar and premium alcohol distributors in Bulgaria such as: Kaliman Caribe, Best Cigars, Delion, Aficionado, Corojo Club, Valentino Siesto, Azteca, Leaf Brothers and more.
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
                      {milestone.year}
                    </span>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="font-serif text-2xl md:text-3xl text-brand-900 mb-4">{milestone.title}</h3>
                    <p className="text-brand-600 leading-relaxed">{milestone.description}</p>
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
              <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">Our Principles</p>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-900 font-light">
                The foundations upon which we gather.
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <FadeIn key={index} delay={index * 150}>
                <div className="text-center">
                  <h3 className="font-serif text-2xl text-brand-900 mb-4">{value.title}</h3>
                  <p className="text-brand-600 leading-relaxed">{value.description}</p>
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
                Some rooms are built for conversation. Ours was built to remember it.
              </blockquote>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}