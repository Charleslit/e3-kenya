import { Merriweather, Raleway, Montserrat, Poppins } from 'next/font/google'

export const headingFont = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

export const bodyFont = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export const serifFont = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
})

export const accentFont = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-accent',
})
