'use client'

import { Section } from '@/components/ui/section'
import { motion } from 'framer-motion'
import { theme } from '@/lib/theme'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import { LogoButton } from '@/components/shared/logobutton'

const boardMembers = [
  {
    id: 1,
    name: "Salome Aluso",
    bio: "Salome holds a Bachelor's degree in Education (Arts) from the University of Nairobi, a Master's degree in Applied Linguistics from Ohio University, and is currently completing her PhD in Higher Education Administration & Student Affairs at Ohio University.",
    image: "/images/initiatives/board.jpeg",
  },
  {
    id: 2,
    name: "Jennie Chen",
    bio: "Bridging data, psychology, and community empowerment, Jennie Chen has extensive expertise in social marketing, data analysis, data products, and community engagement.",
    image: "/images/initiatives/board.jpeg",
  },
  {
    id: 3,
    name: "Susan Kavaya",
    bio: "Susan is currently pursuing a PHD in public health at Indiana University- Bloomington. She specializes in Health Behavior and specifically adolescent health.",
    image: "/images/initiatives/board.jpeg",
  },
  {
    id: 4,
    name: "Rhinah Ondiso",
    image: "/images/initiatives/board.jpeg",
    bio: "Born and raised in Kenya, Rhinah holds an MBA from Lynn University and a Master of Science in Project Management from Harrisburg University of Science and Technology. She currently resides in Massachusetts and works as a Software Business Analyst/Project Manager for an insurance and annuities company based in the greater Boston area."
  },
  {
    id: 5,
    name: "Vicki Seiler-Cushman",
    image: "/images/initiatives/board.jpeg",
    bio: "With expertise in marketing and communications, Vicki is currently an entrepreneur for a small family-owned business, serving as Vice President of JV Cedar Properties and the co-owner of Glazed Donut Eatery Beavercreek along with her husband."
  },
  {
    id: 6,
    name: "Jacquie Smith",
    image: "/images/initiatives/board.jpeg",
    bio: "Jacquie is a graduate of Purdue University with a B.S. in Mechanical Engineering. She also holds a Master of Business Administration degree from the University of Pittsburgh and attended Carnegie Mellon University's Negotiation and Leadership Academy for Women."
  }
]

export function MeetTheHerdSection() {
  return (
    <Section className="bg-gradient-to-b from-background to-primary/5">
      <motion.div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className={cn(
          "font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary text-center",
          "tracking-tight leading-tight"
        )}>
          Meet the Herd
        </h2>
        <p className={cn(
          "text-lg md:text-xl text-muted-foreground mb-12",
          "max-w-2xl mx-auto leading-relaxed text-center"
        )}>
          Get to know the passionate individuals who make our mission possible. Each member brings unique skills and dedication to our cause.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {boardMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full">
              <div className="aspect-square relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <h3 className={cn(
                  theme.typography.sizes.h4,
                  "font-serif text-primary"
                )}>
                  {member.name}
                </h3>
                <p className={cn(
                  theme.typography.sizes.body,
                  "text-muted-foreground line-clamp-4"
                )}>
                  {member.bio}
                </p>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <LogoButton
          href="/join"
          variant="default"
          size="lg"
          className="inline-flex"
        >
          Join Our Herd
        </LogoButton>
      </motion.div>
    </Section>
  )
}

export default MeetTheHerdSection
