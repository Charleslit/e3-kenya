"use client"

import { Initiative } from "@/types/Initiative"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"

interface InitiativesShowcaseProps {
  initiatives: Initiative[]
}

export function InitiativesShowcase({ initiatives }: InitiativesShowcaseProps) {
  return (
    <section className="container py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Herd Initiatives
        </h2>
        <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
          Currently, we are working on exciting initiatives in partnership with local communities,
          focusing on sustainable solutions that empower women and girls across Kenya.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {initiatives.map((initiative, index) => (
          <motion.div
            key={initiative.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full overflow-hidden">
              <div className="relative h-48">
                {initiative.imageUrl ? (
                  <Image
                    src={initiative.imageUrl}
                    alt={initiative.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                ) : (
                  <ImagePlaceholder />
                )}
                <Badge
                  className="absolute top-2 right-2"
                  variant={
                    initiative.status === 'ongoing'
                      ? 'default'
                      : initiative.status === 'completed'
                      ? 'secondary'
                      : 'outline'
                  }
                >
                  {initiative.status}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle>{initiative.title}</CardTitle>
                <CardDescription>{initiative.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>
                      <strong>Impact:</strong> {initiative.impact.beneficiaries.toLocaleString()} beneficiaries
                    </div>
                    <div>
                      <strong>Location:</strong> {initiative.impact.location}
                    </div>
                    <div>
                      <strong>Duration:</strong> {initiative.impact.duration}
                    </div>
                  </div>
                  {initiative.highlights && (
                    <div className="space-y-2">
                      <strong className="text-sm">Highlights:</strong>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {initiative.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
} 