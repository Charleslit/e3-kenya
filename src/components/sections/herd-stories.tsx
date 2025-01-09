"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Quote } from "lucide-react"
import storiesData from "@/data/herd-stories.json"
import { LogoButton } from "@/components/ui/logo-button"

interface Story {
  id: string
  name: string
  role: string
  location: string
  story: string
  imageUrl: string
  impact: string
  quote: string
}

function StoryCard({ story }: { story: Story }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-card">
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={story.imageUrl}
          alt={story.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="space-y-1">
            <h3 className="font-serif text-xl font-bold text-white">{story.name}</h3>
            <p className="text-sm text-primary">{story.role} • {story.location}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex gap-4">
          <Quote className="h-8 w-8 shrink-0 text-primary opacity-50" />
          <p className="italic text-muted-foreground">
            "{story.quote}"
          </p>
        </div>

        <div className="mt-4 space-y-4">
          <p className="text-sm text-muted-foreground">
            {story.story}
          </p>
          <div className="rounded-lg bg-primary/5 p-3">
            <p className="text-sm font-medium text-primary">Impact: {story.impact}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function HerdStoriesSection() {
  const stories = storiesData.stories as Story[]

  return (
    <section className="relative overflow-hidden bg-muted/20 py-24">
      <div className="absolute inset-0 bg-[url('/images/pattern-warm.png')] opacity-5" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Quote className="h-6 w-6 text-primary" />
          </span>
          
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Stories from Our Herd
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Every member of our community has a unique story of transformation. 
            These are the voices that inspire us to continue our mission.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StoryCard story={story} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 rounded-3xl border border-border bg-card p-8 text-center"
        >
          <h3 className="font-serif text-2xl font-bold">Share Your Story</h3>
          <p className="mt-4 text-lg text-muted-foreground">
            Have you been impacted by E3 Kenya's work? We'd love to hear your story 
            and share it with our community.
          </p>
          <div className="mt-6">
            <LogoButton size="lg">
              Submit Your Story
            </LogoButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
