"use client"

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { GallerySection } from '@/components/sections/gallery'

export default function GalleryPage() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <GallerySection />
      </motion.div>
    </Container>
  )
} 