"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BoardMember } from "@/types/BoardMember"

interface BoardMembersProps {
  members: BoardMember[]
}

export function BoardMembers({ members }: BoardMembersProps) {
  return (
    <section className="container py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Meet the Herd
        </h2>
        <p className="mt-4 text-muted-foreground">
          Our dedicated team working to make a difference in Kenya
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {member.bio}
                </p>
                <div className="flex gap-2">
                  {member.socialLinks.linkedin && (
                    <Button variant="outline" size="icon" asChild>
                      <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {member.socialLinks.email && (
                    <Button variant="outline" size="icon" asChild>
                      <a href={`mailto:${member.socialLinks.email}`}>
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {member.socialLinks.twitter && (
                    <Button variant="outline" size="icon" asChild>
                      <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
} 