import { Montserrat, Crimson_Text, Raleway } from 'next/font/google'

export const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export const crimsonText = Crimson_Text({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-crimson'
})

export const raleway = Raleway({ 
  subsets: ['latin'],
  variable: '--font-raleway'
})

export const fonts = {
  sans: montserrat.variable,
  serif: crimsonText.variable,
  display: raleway.variable,
} 