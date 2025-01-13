"use client"

import { motion } from 'framer-motion'
import { theme } from '@/lib/theme'
import { cn } from '@/lib/utils'

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

interface SectionWrapperProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function SectionWrapper({ children, delay = 0, className }: SectionWrapperProps) {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay }}
      className={cn("w-full", className)}
    >
      {children}
    </motion.div>
  )
} 