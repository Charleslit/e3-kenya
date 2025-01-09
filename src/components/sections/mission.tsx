"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Heart } from "lucide-react"

const culturalValues = [
  {
    title: "Harambee Spirit",
    description: "Embracing the Kenyan tradition of 'pulling together,' we work hand in hand with communities to create sustainable change.",
    image: "/images/values/harambee.jpg"
  },
  {
    title: "Ubuntu Philosophy",
    description: "'I am because we are' - our work is built on the African principle of shared humanity and interconnectedness.",
    image: "/images/values/ubuntu.jpg"
  },
  {
    title: "Sisterhood Bond",
    description: "Like the traditional women's circles in Kenyan communities, we create spaces for sharing, learning, and supporting each other.",
    image: "/images/values/sisterhood.jpg"
  }
]

export function MissionSection() {
  return (
    <section className="relative overflow-hidden bg-muted/20 py-24">
      <div className="absolute inset-0 bg-[url('/images/pattern-warm.png')] opacity-5" />
      
      <div className="container relative">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-3xl">
              <Image
                src="/images/mission/main.jpg"
                alt="E3 Kenya Community"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/50 to-transparent" />
              
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <p className="font-serif text-2xl font-medium italic text-white/90">
                  "When you educate a girl, you educate a community. When you empower a woman, you uplift a nation."
                </p>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 aspect-square w-48 overflow-hidden rounded-3xl border-4 border-background">
              <Image
                src="/images/mission/secondary.jpg"
                alt="E3 Kenya Impact"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Heart className="h-6 w-6 text-primary" />
            </span>
            
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tighter sm:text-4xl">
              Our Story of Hope & Transformation
            </h2>
            
            <div className="mt-4 space-y-4 text-lg text-muted-foreground">
              <p>
                Born from the heart of Kenya's communities, E3 Kenya is more than an 
                organization – we're a movement of hope, dignity, and empowerment. Our 
                journey began with a simple truth: when girls stay in school and women 
                are empowered, entire communities rise.
              </p>
              <p>
                We weave together traditional wisdom with modern solutions, honoring 
                the rich cultural heritage of Kenya while addressing contemporary 
                challenges. Our approach is deeply rooted in the spirit of Harambee 
                – the Kenyan tradition of community self-help and unity.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center font-serif text-2xl font-bold"
          >
            Our Cultural Values
          </motion.h3>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {culturalValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="font-serif text-xl font-bold text-white">
                      {value.title}
                    </h4>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}