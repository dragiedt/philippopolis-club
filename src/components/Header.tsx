import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Heritage', href: '/heritage' },
  { name: 'Membership', href: '/membership' },
  { name: 'Events', href: '/events' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-brand-200/50">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-900 flex items-center justify-center">
              <span className="text-gold-500 font-serif text-lg font-semibold">P</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-lg text-brand-900 tracking-wide">Philippopolis</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm tracking-widest uppercase transition-colors duration-200 ${
                  location.pathname === item.href
                    ? 'text-brand-900 font-medium'
                    : 'text-brand-600 hover:text-brand-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-2.5 bg-brand-900 text-cream text-sm tracking-widest uppercase hover:bg-brand-800 transition-colors duration-200"
            >
              Inquire
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-brand-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-brand-200/50">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block py-3 text-sm tracking-widest uppercase ${
                  location.pathname === item.href
                    ? 'text-brand-900 font-medium'
                    : 'text-brand-600'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 block w-full text-center px-6 py-2.5 bg-brand-900 text-cream text-sm tracking-widest uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inquire
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}