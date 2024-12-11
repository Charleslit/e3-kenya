'use client'

import { Container } from '@/components/ui/container'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-24"
      >
        <h1 className="heading-1 mb-8">About E3 Kenya</h1>
        <div className="prose prose-lg max-w-4xl">
          <p>
            At E3 we believe in a world where every Kenyan girl and woman is empowered 
            to be an active participant in shaping her own life and community. We don&apos;t 
            just bring solutions; we work hand-in-hand with local women and girls to 
            develop sustainable programs that reflect their needs and aspirations.
          </p>
          {/* More content will be added here */}
        </div>
      </motion.div>
    </Container>
  )
} 