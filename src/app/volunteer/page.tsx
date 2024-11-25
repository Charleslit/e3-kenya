'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
const opportunities = [
  {
    title: "Teaching & Training",
    description: "Share your skills by teaching sewing and other crafts to women and girls.",
    commitment: "2-4 weeks",
    location: "Maasai Mara"
  },
  {
    title: "Project Coordination",
    description: "Help coordinate our various initiatives and community outreach programs.",
    commitment: "3+ months",
    location: "Nairobi"
  }
  // More opportunities will be added
]

export default function VolunteerPage() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-24"
      >
        <h1 className="heading-1 mb-8 text-center">Join Our Herd</h1>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Make a difference by volunteering your time and skills to support our mission
          of empowering Kenyan women and girls.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{opportunity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{opportunity.description}</p>
                  <div className="space-y-2 text-sm text-muted-foreground mb-6">
                    <p>Time Commitment: {opportunity.commitment}</p>
                    <p>Location: {opportunity.location}</p>
                  </div>
                  <Button className="w-full">Apply Now</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Container>
  )
} 