import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Heritage from './pages/Heritage'
import Membership from './pages/Membership'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Faq from './pages/Faq'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/heritage" element={<Heritage />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
      </Route>
    </Routes>
  )
}

export default function App({ basename = '/' }: { basename?: string }) {
  return (
    <BrowserRouter basename={basename}>
      <AppRoutes />
    </BrowserRouter>
  )
}
