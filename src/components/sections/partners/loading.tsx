"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { LoadingCard } from "@/components/ui/loading-card"
import { Skeleton } from "@/components/ui/loading-skeleton"

export function PartnersLoading() {
  return (
    <section className="container py-24 bg-muted/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <LoadingCard className="h-10 w-48 mx-auto mb-4" />
        <LoadingCard className="h-6 w-80 mx-auto" />
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index} className="h-full">
            <CardContent className="p-6">
              <div className="relative h-20 mb-4">
                <Skeleton className="h-full w-full" />
              </div>
              <Skeleton className="h-6 w-32 mb-2" />
              <Skeleton className="h-4 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-center mt-12"
      >
        <LoadingCard className="h-6 w-64 mx-auto" />
      </motion.div>
    </section>
  )
} 