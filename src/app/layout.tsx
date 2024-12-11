import { Montserrat, Crimson_Text as CrimsonText, Raleway } from 'next/font/google'
import { Metadata } from 'next'
import { ClientProviders } from "@/components/providers/client-providers"
import { RTLProvider } from "@/components/i18n/rtl-provider"
import { ToastProvider } from '@/components/ui/toast';
import { Toast } from "@/components/ui/toast"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import "@/styles/globals.css"

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat'
})

const crimsonText = CrimsonText({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-crimson'
})

const raleway = Raleway({ 
  subsets: ['latin'],
  variable: '--font-raleway'
})

export const metadata: Metadata = {
  title: {
    default: 'E3 Sisters Kenya | Empowering Communities Through Education',
    template: '%s | E3 Sisters Kenya'
  },
  description: 'E3 Sisters Kenya is a non-profit organization dedicated to empowering communities through education, economic empowerment, and environmental conservation.',
  keywords: ['education', 'empowerment', 'environment', 'Kenya', 'non-profit', 'community development', 'women empowerment', 'sustainability'],
  authors: [{ name: 'E3 Sisters Kenya' }],
  creator: 'E3 Sisters Kenya',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://e3sisters.org',
    title: 'E3 Sisters Kenya',
    description: 'Empowering Communities Through Education, Economic Development, and Environmental Conservation',
    siteName: 'E3 Sisters Kenya'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E3 Sisters Kenya',
    description: 'Empowering Communities Through Education, Economic Development, and Environmental Conservation',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${montserrat.variable} ${crimsonText.variable} ${raleway.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ClientProviders>
          <RTLProvider>
            <ToastProvider>
              <div className="relative flex min-h-screen flex-col">
                <Navigation />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
              <Toast />
            </ToastProvider>
          </RTLProvider>
        </ClientProviders>
      </body>
    </html>
  )
}
