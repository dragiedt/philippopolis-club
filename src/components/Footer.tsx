import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLang()

  const navItems = [
    { name: 'nav.home', href: '/' },
    { name: 'nav.heritage', href: '/heritage' },
    { name: 'nav.membership', href: '/membership' },
    { name: 'nav.events', href: '/events' },
    { name: 'nav.gallery', href: '/gallery' },
    { name: 'nav.contact', href: '/contact' },
  ]

  return (
    <footer className="bg-brand-900 text-brand-300 cigar-wrapper">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-start gap-4 mb-6">
              <img src="/images/logo-light.svg" alt="Gentlemen's Club Philippopolis" className="h-14 w-auto shrink-0 mt-0.5" />
              <p className="text-brand-500 text-xs tracking-wider uppercase leading-relaxed pt-2">
                {t('footer.motto')}
              </p>
            </div>
            <p className="text-brand-400 text-sm leading-relaxed max-w-md">
              {t('footer.desc')}
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a href="https://www.facebook.com/profile.php?id=100088984060770" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-cream transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/gentlemens_club_philippopolis" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-cream transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="tel:+35888262780" className="text-brand-400 hover:text-cream transition-colors flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                <span className="text-xs tracking-wider">+358 88 262 780</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 lg:pl-4">
            <h4 className="font-serif text-cream text-lg mb-4">{t('footer.navTitle')}</h4>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 md:block md:space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-brand-400 hover:text-cream text-sm transition-colors duration-200"
                  >
                    {t(item.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 lg:pl-4">
            <div className="text-brand-400 text-sm space-y-4">
              <div>
                <p className="text-cream/80 tracking-wider uppercase text-xs mb-1">{t('contact.details.meetings')}</p>
                <p>{t('contact.details.meetingsDay')}</p>
                <p>{t('contact.details.meetingsLocation')}</p>
                <p className="text-brand-500 text-xs mt-1">{t('contact.details.meetingsNote')}</p>
              </div>
              <div>
                <p className="text-cream/80 tracking-wider uppercase text-xs mb-1">{t('contact.details.time')}</p>
                <p>{t('contact.details.timeDesc')}</p>
              </div>
              <div>
                <p className="text-cream/80 tracking-wider uppercase text-xs mb-1">{t('contact.details.membersOnly')}</p>
                <p>{t('contact.details.membersOnlyDesc')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-brand-500 text-xs tracking-wider">
            {t('footer.copyright').replace('{year}', String(new Date().getFullYear()))}
          </p>
          <p className="text-brand-600 text-xs tracking-wider">{t('footer.location')}</p>
        </div>
      </div>
    </footer>
  )
}