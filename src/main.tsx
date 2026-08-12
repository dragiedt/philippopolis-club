import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LangProvider } from './i18n/LanguageContext'

const basename = window.location.pathname.startsWith('/bg/') || window.location.pathname === '/bg' ? '/bg' : '/'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LangProvider>
      <App basename={basename} />
    </LangProvider>
  </StrictMode>,
)
