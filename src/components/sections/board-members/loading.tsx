"use client"

import { motion } from "framer-motion"
import { LoadingCard } from "@/components/ui/loading-card"

export function BoardMembersLoading() {
  return (
    <section className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <div className="heading-2 mb-4">
          <LoadingCard className="h-10 w-64 mx-auto" />
        </div>
        <div className="text-lg max-w-3xl mx-auto">
          <LoadingCard className="h-20 w-full" />
        </div>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <LoadingCard
            key={index}
            imageHeight="h-64"
            lines={2}
          />
        ))}
      </div>
    </section>
  )
} 