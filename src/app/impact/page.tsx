'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

const stories = [
  {
    title: "Empowering Through Education",
    location: "Maasai Mara",
    story: "Through the Osiligi Pad Project, we've helped keep girls in school by providing sustainable menstrual health solutions.",
    imageUrl: "/images/impact/education.jpg",
    quote: "Now I can attend school without worrying about missing classes.",
    author: "Sarah, Student"
  }
  // More stories will be added
]

export default function ImpactPage() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-24"
      >
        <h1 className="heading-1 mb-8">Impact Stories</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Real stories of transformation and empowerment from the communities we serve.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="relative h-64">
                  <Image
                    src={story.imageUrl}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{story.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{story.location}</p>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{story.story}</p>
                  <blockquote className="border-l-4 border-primary pl-4 italic">
                    "{story.quote}"
                    <footer className="text-sm text-muted-foreground mt-2">
                      — {story.author}
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Container>
  )
} 