"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { LoadingCard } from "@/components/ui/loading-card"
import { Skeleton } from "@/components/ui/loading-skeleton"

export function NewsletterLoading() {
  return (
    <section className="container py-24">
      <Card className="bg-primary-foreground">
        <CardContent className="grid gap-12 lg:grid-cols-2 p-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Skeleton className="h-12 w-12 mb-4" />
            <LoadingCard className="h-10 w-48 mb-4" />
            <LoadingCard className="h-24 w-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <Skeleton className="h-10 flex-1" />
              <Skeleton className="h-10 w-32" />
            </div>
            <Skeleton className="h-4 w-64 mt-4" />
          </motion.div>
        </CardContent>
      </Card>
    </section>
  )
} 