import { Link } from 'react-router-dom'
import SectionDivider from '../components/SectionDivider'
import FadeIn from '../components/FadeIn'

const tiers = [
  {
    name: 'Member',
    description: 'Full access to the club\'s facilities, events, and humidor.',
    features: [
      'Access to the lounge and humidor',
      'Invitation to members-only events',
      'Personal humidor locker',
      'Bar privileges at member rates',
    ],
  },
  {
    name: 'Patron',
    description: 'Enhanced privileges for those who wish to support the club\'s cultural mission.',
    features: [
      'All Member benefits',
      'Priority access to rare releases',
      'Private dining room access',
      'Guest privileges (2 per visit)',
      'Complimentary pairing events',
    ],
  },
  {
    name: 'Honorary',
    description: 'Bestowed upon distinguished individuals who embody the spirit of the club.',
    features: [
      'All Patron benefits',
      'Lifetime membership',
      'Dedicated humidor compartment',
      'Unlimited guest privileges',
      'Private event hosting',
    ],
  },
]

const process = [
  {
    step: '01',
    title: 'Inquiry',
    description: 'Express your interest through our contact form. All inquiries are handled with the utmost discretion.',
  },
  {
    step: '02',
    title: 'Introduction',
    description: 'A current member must propose your candidacy. If you do not know a member, we can facilitate an introduction.',
  },
  {
    step: '03',
    title: 'Review',
    description: 'The committee reviews all candidates. We seek individuals of character who share our appreciation for tradition.',
  },
  {
    step: '04',
    title: 'Invitation',
    description: 'Selected candidates receive a formal invitation to visit the club and meet the committee.',
  },
]

export default function Membership() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-20 bg-brand-900 cigar-wrapper">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">Membership</p>
          </FadeIn>
          <FadeIn delay={150}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream font-light leading-tight max-w-3xl">
              A membership by invitation only.
            </h1>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="mt-6 text-brand-300 text-lg max-w-xl font-light italic">
              "Speak friend and enter."<br />
              <span className="text-brand-400 text-sm not-italic tracking-wider">- The gates of Moria</span>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 md:py-32 px-6 tobacco-leaf">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <p className="text-brand-600 text-lg leading-relaxed">
              Gentlemen's Club Philippopolis is a private society. Membership is by invitation only, proposed by an existing member and approved by the committee. We welcome those who share our appreciation for fellowship and follow the way of the leaf.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-24 md:py-32 px-6 bg-brand-50 tobacco-leaf-warm gold-hairline-top">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">Membership Tiers</p>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-900 font-light">
                Choose your level of engagement.
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
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-serif text-2xl text-brand-900 mt-4 mb-2">{tier.name}</h3>
                  <p className="text-brand-600 text-sm mb-6">{tier.description}</p>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-sm text-brand-600">
                        <svg className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
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
              <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">The Process</p>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-900 font-light">
                How to become a member.
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {process.map((step, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="flex gap-6">
                  <span className="font-serif text-4xl text-brand-200 shrink-0">{step.step}</span>
                  <div>
                    <h3 className="font-serif text-xl text-brand-900 mb-2">{step.title}</h3>
                    <p className="text-brand-600 leading-relaxed">{step.description}</p>
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
              Interested in joining?
            </h2>
            <p className="text-brand-300 text-lg mb-8">
              We welcome inquiries from those who share our values. All correspondence is handled with strict confidence.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3.5 bg-gold-500 text-brand-900 text-sm tracking-widest uppercase font-medium hover:bg-gold-400 transition-colors duration-200"
            >
              Begin Inquiry
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}