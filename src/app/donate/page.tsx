'use client'

import { motion } from 'framer-motion'
import { DonationSection } from '@/components/sections/donation'
import { Container } from '@/components/ui/container'

export default function DonatePage() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-24"
      >
        <h1 className="heading-1 mb-8 text-center">Support Our Mission</h1>
        <DonationSection />
      </motion.div>
    </Container>
  )
} 