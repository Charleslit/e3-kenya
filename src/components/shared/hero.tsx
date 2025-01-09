"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { LogoButton } from "@/components/ui/logo-button"
import { cn } from "@/lib/utils"

const floatingImages = [
  {
    src: "/images/hero/girls-1.jpg",
    alt: "Girls in school",
    className: "left-[10%] top-[20%] w-48 rotate-[-8deg] sm:w-64",
  },
  {
    src: "/images/hero/girls-2.jpg",
    alt: "Community gathering",
    className: "right-[15%] top-[15%] w-40 rotate-[6deg] sm:w-56",
  },
  {
    src: "/images/hero/girls-3.jpg",
    alt: "Learning together",
    className: "bottom-[20%] left-[20%] w-44 rotate-[8deg] sm:w-60",
  },
  {
    src: "/images/hero/girls-4.jpg",
    alt: "Celebration",
    className: "bottom-[25%] right-[25%] w-36 rotate-[-6deg] sm:w-52",
  },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-muted/20">
      {/* Main Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/main.jpg"
          alt="E3 Kenya Community"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
      </div>

      {/* Floating Images */}
      {floatingImages.map((image, index) => (
        <motion.div
          key={image.src}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
          className={cn(
            "absolute z-10 hidden overflow-hidden rounded-2xl border-4 border-background shadow-2xl lg:block",
            image.className
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={400}
            height={300}
            className="h-full w-full object-cover"
          />
        </motion.div>
      ))}

      {/* Content */}
      <div className="container relative z-20 flex min-h-screen flex-col items-center justify-center py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl space-y-6"
        >
          <div className="space-y-2">
            <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Welcome to Our{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text font-serif italic text-transparent">
                Sisterherd
              </span>
            </h1>
            <p className="mx-auto max-w-2xl font-serif text-xl text-muted-foreground sm:text-2xl">
              Where strength flows like a river, and hope blooms like wildflowers 
              across the Kenyan plains.
            </p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mt-8 max-w-3xl text-lg font-light text-muted-foreground"
          >
            We are more than an organization – we're a movement of hearts beating in 
            unison, weaving dreams of education and empowerment into reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8"
          >
            <LogoButton size="lg" className="group">
              Join Our Journey
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1.5,
                }}
              >
                →
              </motion.span>
            </LogoButton>
          </motion.div>
        </motion.div>

        {/* Vision & Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-24 grid gap-8 md:grid-cols-2"
        >
          <div className="rounded-3xl bg-primary/5 p-8">
            <h2 className="font-display text-2xl font-bold">Our Vision</h2>
            <p className="mt-4 font-serif text-lg text-muted-foreground">
              To create a world where every girl and woman has access to the resources, 
              education, and support they need to thrive, building stronger communities 
              through empowerment and dignity.
            </p>
          </div>

          <div className="rounded-3xl bg-secondary/5 p-8">
            <h2 className="font-display text-2xl font-bold">Our Mission</h2>
            <p className="mt-4 font-serif text-lg text-muted-foreground">
              Through sustainable initiatives and community partnerships, we provide 
              essential resources and education that enable Kenyan girls and women 
              to maintain their dignity, stay in school, and realize their full potential.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-warm.png')] opacity-5" />
        <div className="absolute -left-1/4 top-1/4 h-96 w-96 rotate-12 bg-primary/10 blur-3xl" />
        <div className="absolute -right-1/4 bottom-1/4 h-96 w-96 -rotate-12 bg-secondary/10 blur-3xl" />
      </div>
    </section>
  )
}