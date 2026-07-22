import { Outlet, useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main key={pathname} className="flex-1 animate-page-in">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}