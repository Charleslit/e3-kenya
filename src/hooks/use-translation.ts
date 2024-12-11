import { useI18n } from "@/lib/i18n/store"
import translations from "@/data/translations.json"

export function useTranslation() {
  const { language } = useI18n()

  function t(key: keyof typeof translations['en'], params?: Record<string, string>) {
    let text = translations[language]?.[key] || translations.en[key] || key

    if (params) {
      Object.entries(params).forEach(([paramKey, value]) => {
        text = text.replace(`{{${paramKey}}}`, value)
      })
    }

    return text
  }

  return { t, language }
} 