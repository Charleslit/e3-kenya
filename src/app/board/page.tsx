'use client'

import { PageTransition } from '@/components/page-transition'
import { Container } from '@/components/ui/container'
import { BoardMembers } from '@/components/sections/board-members'
import { motion } from 'framer-motion'
import boardMembersJson from '@/data/board-members.json'
import { BoardMember } from '@/types/BoardMember'
import { ParallaxSection } from '@/components/ui/parallax-section'

const boardMembers = boardMembersJson.boardMembers as BoardMember[]

export default function BoardPage() {
  return (
    <PageTransition>
      <ParallaxSection
        imageUrl="/images/backgrounds/board-hero.jpg"
        className="py-24"
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Meet the Herd
            </h1>
            <p className="text-xl text-muted-foreground">
              At the heart of our mission to encourage, engage, and empower Kenyan
              girls and women is a diverse and dedicated Board of Directors who bring
              a wealth of experience, expertise, and passion, providing strategic
              leadership and governance while ensuring that all programs align with
              our vision and mission.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="prose prose-lg max-w-3xl mx-auto text-center mb-16"
          >
            <p>
              This Sisterherd transcends international borders, including women from
              the United States and Kenya, all of whom represent various sectors of
              the community, including education, public health, business, and
              philanthropy.
            </p>
            <p>
              As advocates for our Sisterherd, they offer invaluable insights,
              connections, and support to strengthen our impact. Together, we are
              working hand-in-hand with Kenyan girls and women as we seek to hear
              all of their voices roaring!
            </p>
          </motion.div>

          <BoardMembers members={boardMembers} />
        </Container>
      </ParallaxSection>
    </PageTransition>
  )
} 