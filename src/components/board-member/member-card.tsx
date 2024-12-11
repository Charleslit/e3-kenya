"use client"

import { useState } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { BoardMember } from "@/types/BoardMember"
import { Card, CardContent } from "@/components/ui/card"
import { MemberModal } from "./member-modal"
import Image from "next/image"

interface MemberCardProps {
  member: BoardMember
}

export function MemberCard({ member }: MemberCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    
    const x = clientX - left
    const y = clientY - top
    
    mouseX.set(x)
    mouseY.set(y)
    
    // Calculate rotation based on mouse position
    const rotateXValue = ((y - height / 2) / height) * -10
    const rotateYValue = ((x - width / 2) / width) * 10
    
    rotateX.set(rotateXValue)
    rotateY.set(rotateYValue)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
    rotateX.set(0)
    rotateY.set(0)
  }

  const background = useMotionTemplate`
    radial-gradient(
      650px circle at ${mouseX}px ${mouseY}px,
      rgba(var(--primary-rgb), 0.15),
      transparent 80%
    )
  `

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          perspective: 1000
        }}
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d"
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <Card
            className="group relative overflow-hidden cursor-pointer"
            onClick={() => setIsOpen(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
              style={{ background }}
            />
            <CardContent className="p-6">
              <div className="relative h-64 mb-4 overflow-hidden rounded-lg transform-gpu" style={{ transform: "translateZ(50px)" }}>
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div style={{ transform: "translateZ(75px)" }}>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <MemberModal
        member={member}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  )
} 