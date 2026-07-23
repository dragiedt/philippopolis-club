import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import en from './en'
import bg from './bg'

type Lang = 'en' | 'bg'

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

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const t = useCallback(
    (key: string) => {
      const v = dict[lang]?.[key]
      return v ?? dict.en[key] ?? key
    },
    [lang]
  )
  return (
    <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>
  )
}
