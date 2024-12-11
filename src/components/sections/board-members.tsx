"use client"

import { useState } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { BoardMember } from "@/types/BoardMember"
import { Card, CardContent } from "@/components/ui/card"
import { Modal } from "@/components/ui/modal"
import Image from "next/image"

interface BoardMembersProps {
  members: BoardMember[]
}

function MemberCard({ member }: { member: BoardMember }) {
  const [isOpen, setIsOpen] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
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
      >
        <Card
          className="group relative overflow-hidden cursor-pointer"
          onClick={() => setIsOpen(true)}
          onMouseMove={handleMouseMove}
        >
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
            style={{ background }}
          />
          <CardContent className="p-6">
            <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
              <Image
                src={member.imageUrl}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-muted-foreground">{member.role}</p>
          </CardContent>
        </Card>
      </motion.div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src={member.imageUrl}
              alt={member.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
            <p className="text-primary font-medium mb-4">{member.role}</p>
            <div className="prose prose-sm">
              <p className="mb-4">{member.bio}</p>
              {member.expertise && (
                <>
                  <h3 className="text-lg font-semibold mb-2">Areas of Expertise</h3>
                  <ul>
                    {member.expertise.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
              {member.quote && (
                <blockquote className="border-l-4 border-primary pl-4 italic mt-4">
                  {member.quote}
                </blockquote>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export function BoardMembers({ members }: BoardMembersProps) {
  return (
    <section className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="heading-2 mb-4">Meet the Herd</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Our diverse and dedicated Board of Directors brings expertise from education,
          public health, business, and philanthropy to strengthen our impact.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  )
} 