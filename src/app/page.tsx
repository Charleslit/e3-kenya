'use client'

import { motion } from 'framer-motion'
import { HeroSection } from '@/components/sections/hero'
import { MissionSection } from '@/components/sections/mission'
import { ImpactStats } from '@/components/sections/impact-stats'
import { InitiativesShowcase } from '@/components/sections/initiatives-showcase'
import { BoardMembers } from '@/components/sections/board-members'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { PartnersSection } from '@/components/sections/partners'
import { NewsletterSection } from '@/components/sections/newsletter'
import { HerdNeedsSection } from '@/components/sections/herd-needs'

import initiativesData from '@/data/initiatives.json'
import type { Initiative } from '@/types/Initiative'
import boardMembersData from '@/data/board-members.json'
import type { BoardMember } from '@/types/BoardMember'

const initiatives = initiativesData.initiatives as unknown as Initiative[]
const boardMembers = boardMembersData.boardMembers as unknown as BoardMember[]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <MissionSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <ImpactStats />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <InitiativesShowcase initiatives={initiatives} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <BoardMembers members={boardMembers} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <HerdNeedsSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <TestimonialsSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <PartnersSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <NewsletterSection />
      </motion.div>
    </div>
  )
}
