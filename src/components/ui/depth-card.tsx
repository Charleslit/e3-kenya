"use client"

import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface DepthCardProps {
  children: React.ReactNode
  className?: string
  depth?: number
}

export function DepthCard({ 
  children, 
  className = "", 
  depth = 20 
}: DepthCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    const x = (clientX - left) / width - 0.5
    const y = (clientY - top) / height - 0.5
    
    mouseX.set(x * depth)
    mouseY.set(y * depth)
  }

  const transform = useMotionTemplate`rotateX(${mouseY}deg) rotateY(${mouseX}deg)`

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      style={{ transform }}
      className={`perspective-1000 ${className}`}
    >
      <Card className="transition-transform duration-200 ease-out">
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </motion.div>
  )
} 