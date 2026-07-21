import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="mb-6">
              <img src="/images/logo-light.svg" alt="Gentlemen's Club Philippopolis" className="h-16 w-auto" />
            </div>
            <p className="text-brand-400 text-sm leading-relaxed max-w-md">
              A private society devoted to the quiet pleasures of the cigar, the glass, and considered conversation. Est. Plovdiv, Bulgaria.
            </p>
            <p className="text-brand-500 text-xs mt-4 tracking-wider uppercase">
              Discretion. Craft. Fellowship.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-cream text-lg mb-4">Navigate</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Heritage', href: '/heritage' },
                { name: 'Membership', href: '/membership' },
                { name: 'Events', href: '/events' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-brand-400 hover:text-cream text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-cream text-lg mb-4">The House</h4>
            <address className="not-italic text-brand-400 text-sm space-y-2">
              <p>Old Town, Plovdiv</p>
              <p>Bulgaria</p>
              <p className="text-brand-500 mt-4">By appointment only</p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-brand-500 text-xs tracking-wider">
            © {new Date().getFullYear()} Gentlemen's Club Philippopolis. All rights reserved.
          </p>
          <p className="text-brand-600 text-xs tracking-wider">Plovdiv · Bulgaria</p>
        </div>
      </div>
    </footer>
  )
}