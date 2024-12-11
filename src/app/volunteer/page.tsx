'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

const opportunities = [
  {
    title: "Pad Making Trainer",
    description: "Share your sewing skills and help train women in pad-making techniques. Be part of our sustainable menstrual health initiative.",
    commitment: "2-3 weeks",
    location: "Maasai Mara",
    skills: ["Sewing experience", "Teaching ability", "Cultural sensitivity"]
  },
  {
    title: "Community Outreach",
    description: "Help coordinate with local communities, organize training sessions, and build relationships with community leaders.",
    commitment: "1-3 months",
    location: "Various locations",
    skills: ["Communication skills", "Program coordination", "Local language a plus"]
  },
  {
    title: "Skills Training Facilitator",
    description: "Lead workshops and training sessions in various skills to promote economic empowerment.",
    commitment: "2-4 weeks",
    location: "Multiple regions",
    skills: ["Teaching experience", "Project management", "Workshop facilitation"]
  },
  {
    title: "Administrative Support",
    description: "Support our team with program documentation, data management, and coordination activities.",
    commitment: "3+ months",
    location: "Nairobi/Remote",
    skills: ["Organization skills", "Computer proficiency", "Documentation"]
  }
]

export default function VolunteerPage() {
  const [activeSection, setActiveSection] = useState<'opportunities' | 'apply'>('opportunities')
  const [selectedOpportunity, setSelectedOpportunity] = useState<string | null>(null)

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-24"
      >
        <h1 className="heading-1 mb-8 text-center">Join Our Sisterherd</h1>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Make a lasting impact by volunteering your time and skills to support our mission
          of empowering Kenyan women and girls through sustainable initiatives.
        </p>

        <div className="flex justify-center space-x-4 mb-12">
          <Button
            variant={activeSection === 'opportunities' ? 'default' : 'outline'}
            onClick={() => setActiveSection('opportunities')}
          >
            View Opportunities
          </Button>
          <Button
            variant={activeSection === 'apply' ? 'default' : 'outline'}
            onClick={() => setActiveSection('apply')}
          >
            Apply Now
          </Button>
        </div>

        {activeSection === 'opportunities' ? (
          <div className="grid gap-8 md:grid-cols-2">
            {opportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{opportunity.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground">{opportunity.description}</p>
                    <div className="space-y-2 mb-6">
                      <p className="text-sm">
                        <span className="font-medium">Time Commitment:</span> {opportunity.commitment}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Location:</span> {opportunity.location}
                      </p>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-sm font-medium mb-2">Required Skills:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        {opportunity.skills.map((skill, i) => (
                          <li key={i}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      className="w-full"
                      onClick={() => {
                        setSelectedOpportunity(opportunity.title)
                        setActiveSection('apply')
                      }}
                    >
                      Apply for this Role
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Volunteer Application</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="Enter your email address" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Position of Interest</label>
                  <select 
                    className="w-full h-10 px-3 border rounded-md"
                    value={selectedOpportunity || ''}
                    onChange={(e) => setSelectedOpportunity(e.target.value)}
                  >
                    <option value="">Select a position</option>
                    {opportunities.map(opp => (
                      <option key={opp.title} value={opp.title}>{opp.title}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Relevant Experience</label>
                  <Textarea 
                    placeholder="Tell us about your relevant experience and skills"
                    className="h-32"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Availability</label>
                  <Input placeholder="When can you start? For how long?" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Additional Information</label>
                  <Textarea 
                    placeholder="Any additional information you'd like to share"
                    className="h-32"
                  />
                </div>

                <Button className="w-full">Submit Application</Button>
              </form>
            </CardContent>
          </Card>
        )}
      </motion.div>
    </Container>
  )
}