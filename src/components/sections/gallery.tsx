"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  {
    src: '/images/initiatives/0b3d1f8c-1311-4f09-937b-1cf8f638ed4d.jpeg',
    alt: 'Initiative Image 1',
    caption: 'Empowering Communities'
  },
  {src:'/images/initiatives/ce759596-5b7b-4e65-a66b-5a3c04a52cc1.jpeg',
    alt: 'Initiative Image 2',
    caption: 'Educational Outreach'
  },
  {
    src:'/images/initiatives/182780e8-73be-4581-af77-847d9c686c4c.jpeg',
    alt: 'Initiative Image 3',
    caption: 'Health Initiatives'
  },
  // Add more initiative images here
  {
    src: '/images/testimonials/5a5ca7e7-ea9f-481a-8dce-fa903f3f5dab.jpeg',
    alt: 'Testimonial Image 1',
    caption: 'Community Feedback'
  },
  {
    src: '/images/testimonials/5de7934a-b0ad-4cdb-97ca-d06fe1648948.jpeg',
    alt: 'Testimonial Image 2',
    caption: 'Success Stories'
  },
  {
    src: '/images/initiatives/a05c9a02-9f69-4043-983e-eeb8ee249047.jpeg',
    alt: 'Testimonial Image 3',
    caption: 'Impactful Changes'
  },
]
    
export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-4">Our Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A visual journey through our community initiatives and impact
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="aspect-[16/9] relative rounded-lg overflow-hidden"
            >
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white text-lg font-medium">
                  {images[currentIndex].caption}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-muted'
              }`}
              onClick={() => {
                setIsAutoPlaying(false)
                setCurrentIndex(index)
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}