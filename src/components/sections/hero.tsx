"use client"

import { Suspense, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Parallax } from '@/components/ui/parallax'
import { FallbackLogo } from '@/components/3d/fallback-logo'
import { ErrorBoundary } from '../ui/error-boundary'
import { getImages } from '@/lib/images'
import { cn } from '@/lib/utils'
import { LogoButton } from '../shared/logobutton'
import { routes } from '@/lib/routes'

// Dynamically import 3D logo with better loading management
const ElephantLogo = dynamic(
  () => import('@/components/3d/elephant-logo').then(mod => mod.ElephantLogo),
  { 
    ssr: false,
    loading: () => (
      <FallbackLogo 
        className="w-64 h-64 mx-auto animate-pulse" 
        aria-label="Loading 3D elephant logo"
      />
    ),
  }
)

interface HeroImage {
  path: string
  description?: string
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()
  
  // Parallax effect for background
  const backgroundY = useTransform(scrollY, [0, 500], ['0%', '50%'])
  
  // Get background image
  const backgroundImage: HeroImage = getImages({
    category: 'testimonials',
    count: 1,
    tags: ['group', 'community'],
    shuffle: true
  })[0]

  // Handle mounting for SSR
  useEffect(() => {
    setMounted(true)
  }, [])

  const heroContent = {
    title: "E3 Kenya: Encourage, Engage, Empower",
    subtitle: "Building a Future Where Kenyan Women and Girls Lead the Way",
    description: "At E3 we believe in a world where every Kenyan girl and woman is empowered to be an active participant in shaping her own life and community. We don't just bring solutions; we work hand-in-hand with local women and girls to develop sustainable programs that reflect their needs and aspirations.",
    buttons: [
      { text: "Join Our Herd", href: "/initiatives", variant: "default" },
      { text: "Our Initiatives", href: "/initiatives", variant: "outline" as const }
    ]
  }

  return (
    <section 
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-primary/5 via-primary/10 to-background"
      aria-label="Hero section"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <Image 
          src={backgroundImage.path}
          alt={backgroundImage.description || "E3 Kenya Community"} 
          fill 
          className="object-cover brightness-90"
          priority 
          sizes="100vw"
          quality={90}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-b from-background/40 to-background/80"
          aria-hidden="true"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-20">
        <div className="container max-w-4xl">
          <div className="text-left">
            {/* 3D Logo */}
            <Parallax offset={30}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative mx-auto mb-16 h-64 w-64"
              >
                <ErrorBoundary fallback={<FallbackLogo className="mx-auto h-64 w-64" />}>
                  <Suspense fallback={<FallbackLogo className="mx-auto h-64 w-64 animate-pulse" />}>
                    {mounted && <ElephantLogo animate scale={1.2} />}
                  </Suspense>
                </ErrorBoundary>
              </motion.div>
            </Parallax>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
                {heroContent.title}
              </h1>
              <p className="text-xl md:text-2xl text-secondary mb-6">
                {heroContent.subtitle}
              </p>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                {heroContent.description}
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-12 flex flex-col items-start gap-4 sm:flex-row"
            >
              <LogoButton
                href={routes.initiatives}
                variant="default"
                textStyle="glow"
                focusStyle="glow"
                darkOverlay
                className="min-w-[200px]"
              >
                Learn More
              </LogoButton>
              
              <LogoButton
                href={routes.initiatives}
                variant="outline"
                textStyle="shadow"
                focusStyle="ring"
                className="min-w-[200px]"
              >
                Get Involved
              </LogoButton>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2" aria-hidden="true">
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
          <div className="h-16 w-8 rounded-full border-2 border-muted p-2">
            <div className="h-3 w-3 animate-bounce rounded-full bg-muted" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}