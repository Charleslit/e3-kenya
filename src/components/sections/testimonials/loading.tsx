"use client"

import { Card, CardContent } from "@/components/ui/card"
import { LoadingCard } from "@/components/ui/loading-card"
import { Skeleton } from "@/components/ui/loading-skeleton"

export function TestimonialsLoading() {
  return (
    <section className="container py-24 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-primary/10 to-transparent" />
      
      <div className="text-center mb-16">
        <LoadingCard className="h-10 w-64 mx-auto mb-4" />
        <LoadingCard className="h-6 w-96 mx-auto" />
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <Card key={index} className="h-full">
            <CardContent className="pt-6">
              <Skeleton className="h-8 w-8 mb-4" />
              <Skeleton className="h-24 w-full mb-6" />
              <div className="flex items-center gap-4">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="flex-1">
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-3 w-32" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
} 