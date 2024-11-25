"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const partners = [
  {
    name: "USAID",
    logo: "/images/partners/usaid.png",
    description: "Supporting sustainable development initiatives"
  },
  {
    name: "Gates Foundation",
    logo: "/images/partners/gates.png",
    description: "Empowering communities through education"
  },
  {
    name: "UN Women",
    logo: "/images/partners/un-women.png",
    description: "Advancing gender equality and women's empowerment"
  },
  {
    name: "Kenya Red Cross",
    logo: "/images/partners/red-cross.png",
    description: "Collaborating for community health and welfare"
  }
]

export function PartnersSection() {
  return (
    <section className="container py-24 bg-muted/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Our Partners
        </h2>
        <p className="mt-4 text-muted-foreground">
          Working together with leading organizations to create lasting impact
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="relative h-20 mb-4">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{partner.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {partner.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-center mt-12"
      >
        <p className="text-muted-foreground">
          Interested in partnering with us? {" "}
          <a href="/contact" className="text-primary hover:underline">
            Get in touch
          </a>
        </p>
      </motion.div>
    </section>
  )
} 