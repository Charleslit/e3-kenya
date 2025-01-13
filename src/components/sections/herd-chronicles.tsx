'use client'

import { useState } from 'react'
import { Section } from '@/components/ui/section'
import { motion } from 'framer-motion'
import { theme } from '@/lib/theme'
import { cn } from '@/lib/utils'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'

export function HerdChroniclesSection() {
  const [activeTab, setActiveTab] = useState('video')

  return (
    <Section className="bg-gradient-to-b from-primary/5 to-background">
      <motion.div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className={cn(
          "font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary",
          "tracking-tight leading-tight"
        )}>
          HERD CHRONICLES
        </h2>
        <p className={cn(
          "text-lg md:text-xl text-muted-foreground mb-8",
          "max-w-2xl mx-auto leading-relaxed"
        )}>
          Stories of Impact, Hope, and Transformation
        </p>
      </motion.div>

      <Tabs defaultValue="video" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          {['video', 'podcast', 'other-videos'].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className={cn(
                "text-lg font-serif",
                activeTab === tab 
                  ? "bg-primary text-white" 
                  : "bg-primary/5 text-primary"
              )}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'video' ? 'Weaver of Change' : 
               tab === 'podcast' ? 'Podcast' : 'Other Videos'}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="video">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-serif text-primary mb-4">Weaver of Change</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                "Weaver of Change" showcases the inspiring journey of our Sisterherd Strong initiative. 
                Watch as we weave together stories of empowerment, resilience, and hope from the Maasai Mara to beyond.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="podcast">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-serif text-primary mb-4">Sisterherd Strong Podcast</h3>
              <audio controls className="w-full mb-4">
                <source src="/path-to-your-podcast.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <p className="text-muted-foreground leading-relaxed">
                Listen to our latest podcast episode where we discuss the challenges and triumphs of 
                empowering women and girls in Kenya. Hear from our board members, local partners, and 
                the women whose lives have been transformed by our initiatives.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="other-videos">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-serif text-primary mb-4">More Inspiring Stories</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Explore more videos showcasing our work, the communities we serve, and the impact 
                we're making together. From educational initiatives to economic empowerment programs, 
                these videos capture the essence of our mission.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Section>
  )
}

export { HerdChroniclesSection as HerdChronicles }
export default HerdChroniclesSection
