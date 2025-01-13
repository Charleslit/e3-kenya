'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { HerdChronicles } from '@/components/sections/herd-chronicles'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Newspaper } from 'lucide-react'
import Image from 'next/image'

function StoriesSection() {
  const stories = [
    {
      title: "The Birth of Osiligi Pad Project",
      date: "December 2024",
      excerpt: "How a community-inspired initiative is changing lives in Maasai Mara",
      image: "/images/logo/0.jpg"
    },
    {
      title: "Training Sessions: A Journey of Empowerment",
      date: "October 2024",
      excerpt: "25 women and 10 adolescent girls learn valuable skills in pad-making",
      image: "/images/logo/0.jpg"
    },
    {
      title: "Expanding Our Reach",
      date: "January 2025",
      excerpt: "From Maasai Mara to Nairobi: The growing impact of our initiatives",
      image: "/images/logo/0.jpg"
    }
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {stories.map((story, index) => (
        <motion.div
          key={story.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="overflow-hidden h-full">
            <div className="relative h-48">
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-muted-foreground mb-2">{story.date}</div>
              <h3 className="text-xl font-crimson font-semibold mb-2">{story.title}</h3>
              <p className="text-muted-foreground mb-4">{story.excerpt}</p>
              <Button variant="outline" className="w-full">
                <Newspaper className="w-4 h-4 mr-2" />
                Read Story
              </Button>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export default function ChroniclesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-24"
        >
          <div className="text-center mb-16">
            <h1 className="text-5xl font-crimson font-bold text-primary-500 mb-6">
              Herd Chronicles
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Discover the stories, voices, and journeys of our Sisterherd community. Through articles, 
              videos, and podcasts, we share the impact of our initiatives and the inspiring individuals 
              who make them possible.
            </p>
          </div>

          <StoriesSection />
          <HerdChronicles />
        </motion.div>
      </Container>
    </div>
  )
}
