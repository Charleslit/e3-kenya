'use client'

import { PageTransition } from '@/components/page-transition'
import { Container } from '@/components/ui/container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ParallaxSection } from '@/components/ui/parallax-section'
import { motion } from 'framer-motion'
import Image from 'next/image'

const impactStories = [
  {
    title: "Education Empowerment",
    location: "Maasai Mara",
    story: "Through the Osiligi Pad Project, we've helped keep girls in school by providing sustainable menstrual health solutions.",
    imageUrl: "/images/impact/education.jpg",
    stats: {
      girlsSupported: 2500,
      schoolsReached: 5,
      attendanceIncrease: "35%"
    },
    quote: {
      text: "Now I can attend school without worrying about missing classes.",
      author: "Sarah, Student"
    }
  },
  // More impact stories will be added
]

export default function ImpactPage() {
  return (
    <PageTransition>
      <Container>
        <div className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="heading-1 mb-4">Our Impact</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories of transformation and empowerment from the communities we serve
            </p>
          </motion.div>

          <div className="space-y-24">
            {impactStories.map((story, index) => (
              <ParallaxSection
                key={story.title}
                imageUrl={story.imageUrl}
                className="rounded-lg overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="grid gap-8 md:grid-cols-2 items-center p-8"
                >
                  <div className="space-y-6">
                    <h2 className="heading-2">{story.title}</h2>
                    <p className="text-lg">{story.story}</p>
                    <div className="grid grid-cols-3 gap-4">
                      <Card>
                        <CardContent className="pt-6">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-primary">
                              {story.stats.girlsSupported}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Girls Supported
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="pt-6">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-primary">
                              {story.stats.schoolsReached}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Schools Reached
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="pt-6">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-primary">
                              {story.stats.attendanceIncrease}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Attendance Increase
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  <Card>
                    <CardContent className="p-6">
                      <blockquote className="border-l-4 border-primary pl-4 italic">
                        "{story.quote.text}"
                        <footer className="text-sm text-muted-foreground mt-2">
                          — {story.quote.author}
                        </footer>
                      </blockquote>
                    </CardContent>
                  </Card>
                </motion.div>
              </ParallaxSection>
            ))}
          </div>
        </div>
      </Container>
    </PageTransition>
  )
} 