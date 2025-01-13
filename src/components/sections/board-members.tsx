"use client"

import { useState } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { BoardMember } from "@/types/BoardMember"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Modal } from "@/components/ui/modal"
import Image from "next/image"
import { LogoButton } from "../shared/logobutton"

interface BoardMembersProps {
  boardMembers: BoardMember[]
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
      hsl(var(--primary) / 0.15),
      transparent 80%
    )
  `

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card
          className="group relative overflow-hidden border border-primary/10 hover:border-primary/20 transition-colors cursor-pointer hover:shadow-lg transition-shadow duration-300 bg-accent-beige"
          onClick={() => setIsOpen(true)}
          onMouseMove={handleMouseMove}
        >
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
            style={{ background }}
          />
          <CardContent className="p-6">
            <div className="relative h-72 mb-4 overflow-hidden rounded-lg">
              <Image
                src={member.imageUrl}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-primary">{member.name}</h3>
            <p className="text-sm text-accent-gray">{member.role}</p>
          </CardContent>
        </Card>
      </motion.div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative h-[400px]">
            <Image
              src={member.imageUrl}
              alt={member.name}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-primary">{member.name}</h2>
              <p className="text-secondary font-medium">{member.role}</p>
            </div>
            
            <div className="prose prose-sm max-w-none text-accent-gray">
              <div className="mb-6">{member.bio}</div>
              
              {member.expertise && (
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Areas of Expertise</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {member.expertise.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {member.quote && (
                <blockquote className="border-l-4 border-primary pl-4 italic mt-6">
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

export function BoardMembers({ boardMembers }: BoardMembersProps) {
  return (
    <section className="py-20 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold mb-4"
          >
            Meet the Herd
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground"
          >
            At the heart of our mission to encourage, engage, and empower Kenyan girls and women is a diverse and dedicated Board of Directors who bring a wealth of experience, expertise, and passion, providing strategic leadership while ensuring that all programs align with our vision and mission.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {boardMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <CardHeader>
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={member.imageUrl || '/images/placeholder-member.jpg'}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle className="font-display">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <LogoButton
            href="/about"
            variant="default"
            textStyle="glow"
            focusStyle="glow"
            darkOverlay
            className="min-w-[200px]"
          >
            Meet Our Team
          </LogoButton>
        </div>
      </div>
    </section>
  )
}
