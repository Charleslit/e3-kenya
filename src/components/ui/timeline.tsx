"use client"

import { motion } from "framer-motion"
import { Initiative } from "@/types/Initiative"

interface TimelineProps {
  initiatives: Initiative[]
}

export function Timeline({ initiatives }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-1/2 h-full w-0.5 bg-primary/20 -translate-x-1/2" />
      
      {initiatives.map((initiative, index) => (
        <motion.div
          key={initiative.id}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} mb-8`}
        >
          <div className="w-1/2 px-8">
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-2">{initiative.title}</h3>
              <p className="text-muted-foreground">{initiative.description}</p>
              <div className="mt-4 text-sm">
                <p><span className="font-medium">Location:</span> {initiative.impact.location}</p>
                <p><span className="font-medium">Duration:</span> {initiative.impact.duration}</p>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center w-8">
            <div className="h-4 w-4 rounded-full bg-primary" />
          </div>
          <div className="w-1/2" />
        </motion.div>
      ))}
    </div>
  )
} 