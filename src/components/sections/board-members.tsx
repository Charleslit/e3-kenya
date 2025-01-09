"use client"

import { useState } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { BoardMember } from "@/types/BoardMember"
import { Card, CardContent } from "@/components/ui/card"
import { Modal } from "@/components/ui/modal"
import Image from "next/image"
import { LogoButton } from "@/components/ui/logo-button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import boardMembersData from "@/data/board-members.json"

const boardMembers = boardMembersData.boardMembers as BoardMember[]

function MemberCard({ member }: { member: BoardMember }) {
  const [isOpen, setIsOpen] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <>
      <Card
        className="group relative overflow-hidden rounded-2xl border-none bg-gradient-to-b from-primary/5 to-secondary/5"
        onMouseMove={handleMouseMove}
      >
        <CardContent className="p-0">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={member.imageUrl}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-white">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
              </div>
              
              <div className="mt-4 space-y-3">
                <p className="line-clamp-3 text-sm text-white/90">
                  {member.bio}
                </p>
                <div className="pt-2">
                  <LogoButton 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => setIsOpen(true)}
                  >
                    Read {member.name}'s Story
                  </LogoButton>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        className="max-w-2xl"
      >
        <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
          <Image
            src={member.imageUrl}
            alt={member.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <div className="p-6">
          <h3 className="font-serif text-2xl font-bold">{member.name}</h3>
          <p className="text-primary">{member.role}</p>

          <div className="mt-6 space-y-4">
            <p className="text-muted-foreground">{member.bio}</p>

            {member.education && (
              <div>
                <h4 className="font-bold">Education</h4>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  {member.education.map((edu, index) => (
                    <li key={index}>{edu}</li>
                  ))}
                </ul>
              </div>
            )}

            {member.achievements && (
              <div>
                <h4 className="font-bold">Achievements</h4>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  {member.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </>
  )
}

export function BoardMembersSection() {
  return (
    <section className="relative overflow-hidden bg-muted/20 py-24">
      <div className="absolute inset-0 bg-[url('/images/pattern-warm.png')] opacity-5" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Meet Our Herd Leaders
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Our board members aren't just leaders – they're storytellers, dreamers, and 
            champions of change. Each brings their unique journey to our shared mission.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {boardMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MemberCard member={member} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 rounded-3xl border border-border bg-card p-8 text-center"
        >
          <h3 className="font-serif text-2xl font-bold">Join Our Herd</h3>
          <p className="mt-4 text-lg text-muted-foreground">
            We're always looking for passionate individuals to join our mission. 
            Whether you're in Kenya or across the globe, your story could be part 
            of our journey.
          </p>
          <div className="mt-6">
            <Link href="/join-us">
              <LogoButton size="lg">
                Learn About Joining Our Board
              </LogoButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}