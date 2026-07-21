import SectionDivider from '../components/SectionDivider'

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
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">Heritage</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream font-light leading-tight max-w-3xl">
            From Philippopolis to the present day.
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
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
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-brand-200 overflow-hidden">
                <img
                  src="https://philippopolis-smokehouse-ai.lovable.app/assets/heritage-philippopolis-B-AFDCh0.jpg"
                  alt="Ancient theatre of Philippopolis"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold-500/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32 px-6 bg-brand-50">
        <div className="mx-auto max-w-4xl">
          <SectionDivider className="mb-16" />
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
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
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">Our Principles</p>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-900 font-light">
              The foundations upon which we gather.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="font-serif text-2xl text-brand-900 mb-4">{value.title}</h3>
                <p className="text-brand-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 md:py-32 px-6 bg-brand-900">
        <div className="mx-auto max-w-4xl text-center">
          <div className="relative">
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-serif text-6xl text-gold-500/30">"</span>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-cream font-light leading-relaxed italic">
              Some rooms are built for conversation. Ours was built to remember it.
            </blockquote>
          </div>
        </div>
      </section>
    </>
  )
}