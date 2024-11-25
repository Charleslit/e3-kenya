import { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'E3 Kenya - Sisterherd Strong',
  description: 'Encourage, Engage, Empower - Making a difference in Kenya through sustainable community initiatives',
  keywords: ['Kenya', 'NGO', 'Community Development', 'Women Empowerment', 'Education'],
  authors: [{ name: 'E3 Kenya' }],
  openGraph: {
    title: 'E3 Kenya - Sisterherd Strong',
    description: 'Encourage, Engage, Empower - Making a difference in Kenya',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-geist antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 