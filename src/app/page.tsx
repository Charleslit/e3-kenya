'use client'

import { motion } from 'framer-motion'
import { HeroSection } from '@/components/sections/hero'
import { MissionSection } from '@/components/sections/mission'
import { InitiativesShowcase } from '@/components/sections/initiatives-showcase'
import { BoardMembersSection } from '@/components/sections/board-members'
import { HerdNeedsSection } from '@/components/sections/herd-needs'
import { DonationSection } from '@/components/sections/donation'
import { HerdChronicles } from '@/components/sections/herd-chronicles'

// Import data
import initiativesJson from '@/data/initiatives.json'
import { Initiative } from '@/types/Initiative'
import { Metadata } from 'next'

const initiatives = initiativesJson.initiatives as Initiative[]



export default function Home() {
  return (  
    <main className="flex min-h-screen flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
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
        <InitiativesShowcase initiatives={initiatives} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <BoardMembersSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <HerdNeedsSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <HerdChronicles />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <DonationSection />
      </motion.div>
    </main>
  )
}
