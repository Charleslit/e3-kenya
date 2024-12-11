export const languages = [
  {
    code: 'en',
    name: 'English',
    dir: 'ltr',
    flag: '🇬🇧'
  },
  {
    code: 'sw',
    name: 'Kiswahili',
    dir: 'ltr',
    flag: '🇰🇪'
  }
] as const

export type LanguageCode = typeof languages[number]['code']
export type Direction = typeof languages[number]['dir']

export const defaultLanguage = 'en' 