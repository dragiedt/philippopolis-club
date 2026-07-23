import { useState } from 'react'
import FadeIn from '../components/FadeIn'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    referral: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-20 bg-brand-900 cigar-wrapper">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">Contact</p>
          </FadeIn>
          <FadeIn delay={150}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream font-light leading-tight max-w-3xl">
              Reach out.
            </h1>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="mt-6 text-brand-300 text-lg max-w-xl font-light italic">
              "The doors will be opened to those who are bold enough to knock."<br />
              <span className="text-brand-400 text-sm not-italic tracking-wider">- Tony Gaskins</span>
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 tobacco-leaf">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <FadeIn direction="left">
              <div>
                <p className="text-brand-600 text-lg leading-relaxed mb-8">
                  All inquiries are handled with the utmost discretion. If you wish to learn more about membership or arrange a visit, please complete the form below.
                </p>

                {submitted ? (
                  <div className="p-8 border border-gold-500/30 bg-brand-50 text-center">
                    <h3 className="font-serif text-2xl text-brand-900 mb-4">Thank you</h3>
                    <p className="text-brand-600">
                      Your inquiry has been received. We will respond within 48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm text-brand-600 mb-2 tracking-wider uppercase">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 border border-brand-200 bg-cream text-brand-900 focus:outline-none focus:border-gold-500 transition-colors"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm text-brand-600 mb-2 tracking-wider uppercase">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 border border-brand-200 bg-cream text-brand-900 focus:outline-none focus:border-gold-500 transition-colors"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm text-brand-600 mb-2 tracking-wider uppercase">
                        Phone (optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 border border-brand-200 bg-cream text-brand-900 focus:outline-none focus:border-gold-500 transition-colors"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div>
                      <label htmlFor="referral" className="block text-sm text-brand-600 mb-2 tracking-wider uppercase">
                        Referred by a member? (optional)
                      </label>
                      <input
                        type="text"
                        id="referral"
                        placeholder="Member's name"
                        className="w-full px-4 py-3 border border-brand-200 bg-cream text-brand-900 focus:outline-none focus:border-gold-500 transition-colors placeholder:text-brand-400"
                        value={formData.referral}
                        onChange={(e) => setFormData({ ...formData, referral: e.target.value })}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm text-brand-600 mb-2 tracking-wider uppercase">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 border border-brand-200 bg-cream text-brand-900 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-3.5 bg-brand-900 text-cream text-sm tracking-widest uppercase font-medium hover:bg-brand-800 transition-colors duration-200"
                    >
                      Submit Inquiry
                    </button>

                    <p className="text-brand-500 text-xs text-center">
                      All information provided is kept strictly confidential.
                    </p>
                  </form>
                )}
              </div>
            </FadeIn>

            {/* Details */}
            <FadeIn direction="right">
              <div className="lg:pl-8">
                <div className="sticky top-32 space-y-12">
                  <div>
                    <h3 className="font-serif text-2xl text-brand-900 mb-4">The House</h3>
                    <address className="not-italic text-brand-600 space-y-2">
                      <p>Old Town, Plovdiv</p>
                      <p>Bulgaria</p>
                    </address>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl text-brand-900 mb-4">Hours</h3>
                    <p className="text-brand-600">By appointment only</p>
                    <p className="text-brand-500 text-sm mt-2">
                      The club is open to members and their guests. Visits must be arranged in advance.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl text-brand-900 mb-4">Confidentiality</h3>
                    <p className="text-brand-600 leading-relaxed">
                      Gentlemen's Club Philippopolis operates under a strict code of discretion. The identities of our members and the details of our gatherings are never disclosed.
                    </p>
                  </div>

                  <div className="p-6 border border-brand-200">
                    <p className="text-brand-600 text-sm leading-relaxed italic">
                      "Some rooms are built for conversation. Ours was built to remember it."
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}