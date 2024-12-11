"use client"

import { useI18n } from "@/lib/i18n/store"
import { languages } from "@/lib/i18n/config"
import { useEffect } from "react"

interface RTLProviderProps {
  children: React.ReactNode
}

export function RTLProvider({ children }: RTLProviderProps) {
  const { language } = useI18n()
  const currentLanguage = languages.find(lang => lang.code === language)

  useEffect(() => {
    document.documentElement.dir = currentLanguage?.dir || 'ltr'
    document.documentElement.lang = language
  }, [language, currentLanguage?.dir])

  return <>{children}</>
} 