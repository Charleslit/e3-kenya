'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { Container } from '@/components/ui/container'

const stories = [
  {
    title: "Training Session in Maasai Mara",
    date: "October 2024",
    description: "Our team conducted a three-day training session teaching sewing skills to local women and girls.",
    imageUrl: "/images/chronicles/training.jpg"
  }
  // More stories will be added
]

export default function ChroniclesPage() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-24"
      >
        <h1 className="heading-1 mb-8">Herd Chronicles</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <div className="relative h-64">
                  <Image
                    src={story.imageUrl}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h2 className="heading-3 mb-2">{story.title}</h2>
                  <p className="text-sm text-muted-foreground mb-4">{story.date}</p>
                  <p>{story.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Container>
  )
} 