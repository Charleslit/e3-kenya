"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

interface ParallaxSectionProps {
  children: React.ReactNode
  imageUrl: string
  className?: string
  strength?: number
}

export function ParallaxSection({ 
  children, 
  imageUrl, 
  className = "", 
  strength = 200 
}: ParallaxSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, strength])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={imageUrl}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </motion.div>
      <div className="relative z-10">{children}</div>
    </div>
  )
} 