import { useState } from 'react'
import FadeIn from '../components/FadeIn'
import { useLang } from '../i18n/LanguageContext'

export default function Contact() {
  const { t } = useLang()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-20 bg-brand-900 cigar-wrapper overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/contact-hero.jpg')] bg-cover bg-center opacity-[0.12]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4">{t('contact.hero.label')}</p>
          </FadeIn>
          <FadeIn delay={150}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream font-light leading-tight max-w-3xl">
              {t('contact.hero.title')}
            </h1>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="mt-6 text-brand-300 text-lg max-w-xl font-light italic">
              {t('contact.hero.quote')}<br />
              <span className="text-brand-400 text-sm not-italic tracking-wider">{t('contact.hero.quoteAttr')}</span>
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
                  {t('contact.intro')}
                </p>

                {submitted ? (
                  <div className="p-8 border border-gold-500/30 bg-brand-50 text-center">
                    <h3 className="font-serif text-2xl text-brand-900 mb-4">{t('contact.thankyou.title')}</h3>
                    <p className="text-brand-600">
                      {t('contact.thankyou.desc')}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm text-brand-600 mb-2 tracking-wider uppercase">
                        {t('contact.form.name')} <span className="text-gold-500">*</span>
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
                        {t('contact.form.email')} <span className="text-gold-500">*</span>
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
                        {t('contact.form.phone')}
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
                        {t('contact.form.referral')}
                      </label>
                      <input
                        type="text"
                        id="referral"
                        placeholder={t('contact.form.referralPlaceholder')}
                        className="w-full px-4 py-3 border border-brand-200 bg-cream text-brand-900 focus:outline-none focus:border-gold-500 transition-colors placeholder:text-brand-400"
                        value={formData.referral}
                        onChange={(e) => setFormData({ ...formData, referral: e.target.value })}
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm text-brand-600 mb-2 tracking-wider uppercase">
                        {t('contact.form.subject')} <span className="text-gold-500">*</span>
                      </label>
                      <select
                        id="subject"
                        required
                        className="w-full px-4 py-3 pr-10 border border-brand-200 bg-cream text-brand-900 focus:outline-none focus:border-gold-500 transition-colors appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239a8a76%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      >
                        <option value="" disabled>{t('contact.form.subjectPlaceholder')}</option>
                        <option value={t('contact.form.subjectMembership')}>{t('contact.form.subjectMembership')}</option>
                        <option value={t('contact.form.subjectPartnership')}>{t('contact.form.subjectPartnership')}</option>
                        <option value={t('contact.form.subjectOther')}>{t('contact.form.subjectOther')}</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm text-brand-600 mb-2 tracking-wider uppercase">
                        {t('contact.form.message')} <span className="text-gold-500">*</span>
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
                      {t('contact.form.submit')}
                    </button>

                    <p className="text-brand-500 text-xs text-center">
                      {t('contact.form.privacy')}
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
                    <h3 className="font-serif text-2xl text-brand-900 mb-4">{t('contact.details.meetings')}</h3>
                    <p className="text-gold-500 font-serif text-lg">{t('contact.details.meetingsDay')}</p>
                    <p className="text-brand-600 mt-2">{t('contact.details.meetingsLocation')}</p>
                    <p className="text-brand-500 text-sm mt-2">{t('contact.details.meetingsNote')}</p>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl text-brand-900 mb-4">{t('contact.details.time')}</h3>
                    <p className="text-brand-600">{t('contact.details.timeDesc')}</p>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl text-brand-900 mb-4">{t('contact.details.membersOnly')}</h3>
                    <p className="text-brand-600 leading-relaxed">
                      {t('contact.details.membersOnlyDesc')}
                    </p>
                  </div>

                  <div className="p-6 border border-brand-200">
                    <p className="text-brand-600 text-sm leading-relaxed italic">
                      {t('contact.details.quote')}
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