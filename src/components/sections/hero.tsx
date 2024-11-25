"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ElephantLogo } from '@/components/3d/elephant-logo'

export function HeroSection() {
  return (
    <section className="relative h-screen w-full bg-gradient-to-b from-primary/10 to-background overflow-hidden">
      <div className="absolute inset-0">
        <ElephantLogo />
      </div>

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-1 mb-6">
              Welcome to our Sisterherd
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Encourage • Engage • Empower
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" className="min-w-[200px]" asChild>
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="min-w-[200px]" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
          <div className="h-16 w-8 rounded-full border-2 border-muted p-2">
            <div className="h-3 w-3 animate-bounce rounded-full bg-muted" />
          </div>
        </div>
      </motion.div>
    </section>
  )
} 