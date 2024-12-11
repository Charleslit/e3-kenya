import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { LanguageCode, defaultLanguage } from './config'

interface I18nState {
  language: LanguageCode
  setLanguage: (language: LanguageCode) => void
}

export const useI18n = create<I18nState>()(
  persist(
    (set) => ({
      language: defaultLanguage,
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'i18n-storage',
    }
  )
) 