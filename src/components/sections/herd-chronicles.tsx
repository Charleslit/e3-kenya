"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LogoButton } from "@/components/ui/logo-button"
import { PlayCircle, Podcast } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HerdChronicles() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
            Herd Chronicles
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-serif">
            Experience our journey through stories, videos, and podcasts
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Featured Video */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="overflow-hidden bg-gradient-to-br from-background/80 to-background border-primary/20">
              <CardContent className="p-6">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-6 group">
                  <Image
                    src="/images/initiatives/34501136-023e-46cb-8971-06dd336fdc72.jpeg"
                    alt="Featured video thumbnail"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayCircle className="w-16 h-16 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">The Story of Hope</h3>
                <p className="text-muted-foreground mb-4">
                  Watch how the Osiligi Pad Project is transforming lives in the Maasai Mara community
                </p>
                <Button variant="outline" size="lg" className="w-full gap-2">
                  <PlayCircle className="w-5 h-5" />
                  Watch Video
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Featured Podcast */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="overflow-hidden bg-gradient-to-br from-background/80 to-background border-primary/20">
              <CardContent className="p-6">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-6 group bg-primary/5">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Podcast className="w-24 h-24 text-primary/40" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-3 h-12 bg-primary/60 mx-1 animate-sound-wave-1" />
                    <div className="w-3 h-12 bg-primary/60 mx-1 animate-sound-wave-2" />
                    <div className="w-3 h-12 bg-primary/60 mx-1 animate-sound-wave-3" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Voices of the Sisterherd</h3>
                <p className="text-muted-foreground mb-4">
                  Listen to inspiring stories from our community members and their journey of empowerment
                </p>
                <Button variant="outline" size="lg" className="w-full gap-2">
                  <Podcast className="w-5 h-5" />
                  Listen Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link href="/chronicles">
            <LogoButton variant="outline">
              View All Chronicles
            </LogoButton>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
