"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  description?: string
  className?: string
  align?: "left" | "center" | "right"
  tagline?: string
  variant?: "default" | "primary" | "secondary"
}

export function SectionHeader({ 
  title, 
  description, 
  tagline,
  className,
  align = "center",
  variant = "default"
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-16",
        {
          "text-center": align === "center",
          "text-left": align === "left",
          "text-right": align === "right",
          "text-primary": variant === "primary",
          "text-secondary": variant === "secondary",
        },
        className
      )}
    >
      {tagline && (
        <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-3">
          {tagline}
        </span>
      )}
      <h2 className="heading-2 mb-4 font-display">{title}</h2>
      {description && (
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-serif">
          {description}
        </p>
      )}
      <div className="mt-6 flex items-center justify-center gap-2">
        <span className="h-1 w-1 rounded-full bg-primary" />
        <span className="h-1 w-1 rounded-full bg-secondary" />
        <span className="h-1 w-1 rounded-full bg-accent" />
      </div>
    </motion.div>
  )
} 