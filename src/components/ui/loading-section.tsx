"use client"

import { motion } from "framer-motion"
import { LoadingSpinner } from "./loading-spinner"

interface LoadingSectionProps {
  message?: string
}

export function LoadingSection({ message = "Loading..." }: LoadingSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-[200px] p-8"
    >
      <LoadingSpinner size="lg" className="mb-4" />
      <p className="text-muted-foreground animate-pulse">{message}</p>
    </motion.div>
  )
} 