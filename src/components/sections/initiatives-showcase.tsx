"use client"

import { useEffect, useState } from "react"
import { Initiative } from "@/types/Initiative"
import { useAPI } from "@/hooks/use-api"
import { APIErrorBoundary } from "@/components/api-error-boundary"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"
import { LoadingSection } from "@/components/ui/loading-section"
import { LoadingCard } from "@/components/ui/loading-card"

interface InitiativesShowcaseProps {
  initiatives?: Initiative[]
}

export function InitiativesShowcase({ initiatives: initialInitiatives }: InitiativesShowcaseProps) {
  const [initiatives, setInitiatives] = useState<Initiative[]>(initialInitiatives || [])
  const { isLoading, request } = useAPI<{ initiatives: Initiative[] }>()

  useEffect(() => {
    if (!initialInitiatives) {
      const fetchInitiatives = async () => {
        const data = await request('/api/initiatives')
        if (data) {
          setInitiatives(data.initiatives)
        }
      }
      fetchInitiatives()
    }
  }, [request, initialInitiatives])

  if (isLoading) {
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
          {Array.from({ length: 3 }).map((_, index) => (
            <LoadingCard key={index} />
          ))}
        </div>
      </section>
    )
  }

  return (
    <APIErrorBoundary>
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
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={initiative.imageUrl}
                      alt={initiative.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">{initiative.title}</h3>
                    <Badge variant={
                      initiative.status === 'ongoing' ? 'default' :
                      initiative.status === 'completed' ? 'secondary' :
                      'outline'
                    }>
                      {initiative.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {initiative.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="font-medium">Location:</span> {initiative.impact.location}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Beneficiaries:</span> {initiative.impact.beneficiaries}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Duration:</span> {initiative.impact.duration}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </APIErrorBoundary>
  )
} 