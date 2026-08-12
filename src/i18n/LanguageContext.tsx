import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react'
import en from './en'
import bg from './bg'

export type Lang = 'en' | 'bg'

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
}

const Ctx = createContext<LangCtx>(null!)

export function useLang() {
  return useContext(Ctx)
}

const dict: Record<Lang, Record<string, string>> = { en, bg }

export function detectLang(): Lang {
  if (typeof window !== 'undefined') {
    if (window.location.pathname.startsWith('/bg/') || window.location.pathname === '/bg') return 'bg'
  }
  return 'en'
}

interface LangProviderProps {
  children: ReactNode
  initialLang?: Lang
}

export function LangProvider({ children, initialLang }: LangProviderProps) {
  const [lang, setLang] = useState<Lang>(initialLang ?? detectLang())
  const t = useCallback(
    (key: string) => {
      const v = dict[lang]?.[key]
      return v ?? dict.en[key] ?? key
    },
    [lang]
  )

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>
  )
}
