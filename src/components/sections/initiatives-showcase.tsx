"use client"

import { useEffect, useState } from "react"
import { Initiative } from "@/types/Initiative"
import { useAPI } from "@/hooks/use-api"
import { APIErrorBoundary } from "@/components/api-error-boundary"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface InitiativesShowcaseProps {
  initiatives?: Initiative[]
}

export function InitiativesShowcase({ initiatives: initialInitiatives }: InitiativesShowcaseProps) {
  return (
    <APIErrorBoundary>
      <section className="container py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              Herd Initiatives
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-serif">
              Join us on our journey of empowerment and hope as we work hand-in-hand with local communities
              to create sustainable change.
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
                <Image
                  src="/images/initiatives/34501136-023e-46cb-8971-06dd336fdc72.jpeg"
                  alt="Osiligi Pad Project"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="mb-4">Ongoing Initiative</Badge>
                  <h3 className="text-2xl font-bold text-white mb-2">The Osiligi Pad Project</h3>
                  <p className="text-white/90">Bringing hope and dignity through sustainable solutions</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed font-serif">
                During the summer of 2024, we embarked on an inspiring initiative in partnership with MWEGO, 
                a women's empowerment group in Maasai Mara, to produce reusable, eco-friendly menstrual pads 
                here in the United States and distribute them to adolescent girls in six schools in the Mara.
              </p>
              
              <p className="text-lg leading-relaxed font-serif">
                Named by the local Maasai girls, the Osiligi Pad Project (Osiligi is the Maa word for hope) 
                aims to provide girls with sanitary products and seeks to instruct girls and women how to make 
                the pads, ultimately creating a self-sustaining program that meets a critical community need.
              </p>

              <div className="grid grid-cols-2 gap-4 my-8">
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-bold text-xl mb-2">2,500</h4>
                    <p className="text-sm text-muted-foreground">Reusable pads distributed</p>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/5 border-secondary/20">
                  <CardContent className="p-4">
                    <h4 className="font-bold text-xl mb-2">35</h4>
                    <p className="text-sm text-muted-foreground">Women and girls trained</p>
                  </CardContent>
                </Card>
              </div>

              <Button asChild className="w-full group">
                <Link href="/initiatives/osiligi-pad-project">
                  Learn More About Osiligi
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-serif">
              And this is just the beginning. Our Sisterherd Strong team has already distributed 300 pads 
              in western Kenya and we are working with colleagues to deliver over 500 pads in two locations 
              in Nairobi. Together, we're making lasting change.
            </p>
          </motion.div>
        </div>
      </section>
    </APIErrorBoundary>
  )
}