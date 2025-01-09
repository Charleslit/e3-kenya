import { motion } from "framer-motion"
import { LogoButton } from "@/components/ui/logo-button"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background/50 to-muted/20 pt-24">
      {/* Warm background pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern-warm.png')] opacity-5" />
      
      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                </span>
                Our story continues to grow
              </motion.div>
              
              <h1 className="font-serif text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Welcome to Our{" "}
                <span className="relative">
                  <span className="absolute -inset-1 block -skew-y-3 bg-primary/20"></span>
                  <span className="relative bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Sisterherd
                  </span>
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground md:text-2xl">
                We're not just changing lives – we're weaving a tapestry of hope, 
                connecting hearts across continents. Every pad made, every girl empowered, 
                every story shared strengthens our herd.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-4 text-lg font-medium text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Encourage
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Engage
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Empower
                </span>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/donate">
                  <LogoButton size="lg" className="w-full sm:w-auto">
                    Join Our Journey
                  </LogoButton>
                </Link>
                <Link href="/our-story">
                  <LogoButton variant="outline" size="lg" className="w-full sm:w-auto">
                    Read Our Stories
                  </LogoButton>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 rounded-2xl border border-border/50 bg-muted/30 p-6">
              <div className="text-center">
                <div className="font-serif text-2xl font-bold text-primary">1000+</div>
                <p className="mt-1 text-sm text-muted-foreground">Lives Touched</p>
              </div>
              <div className="text-center">
                <div className="font-serif text-2xl font-bold text-primary">15+</div>
                <p className="mt-1 text-sm text-muted-foreground">Communities United</p>
              </div>
              <div className="text-center">
                <div className="font-serif text-2xl font-bold text-primary">2</div>
                <p className="mt-1 text-sm text-muted-foreground">Continents Connected</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto w-full max-w-xl lg:mx-0"
          >
            {/* Main image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border-2 border-primary/20">
              <Image
                src="/images/hero-main.jpg"
                alt="E3 Kenya Community"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-serif text-2xl font-medium text-white">
                  "Together, we're creating ripples of change that touch countless lives."
                </p>
              </div>
            </div>

            {/* Floating images */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -right-8 -top-8 h-40 w-32 rotate-6 overflow-hidden rounded-2xl border-4 border-background shadow-2xl"
            >
              <Image
                src="/images/hero-2.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-8 -left-8 h-40 w-32 -rotate-6 overflow-hidden rounded-2xl border-4 border-background shadow-2xl"
            >
              <Image
                src="/images/hero-3.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="text-muted"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}