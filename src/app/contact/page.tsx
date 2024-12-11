'use client'

import { PageTransition } from '@/components/page-transition'
import { Container } from '@/components/ui/container'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "info@e3kenya.org",
    link: "mailto:info@e3kenya.org"
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+254 123 456 789",
    link: "tel:+254123456789"
  },
  {
    icon: MapPin,
    title: "Location",
    details: "Nairobi, Kenya",
    link: "https://maps.google.com/?q=Nairobi,Kenya"
  },
  {
    icon: Globe,
    title: "Social Media",
    details: "Follow us @E3Kenya",
    link: "https://twitter.com/e3kenya"
  }
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Here you would typically send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated delay
      alert('Thank you for your message. We will get back to you soon!')
      setFormState({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      alert('There was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

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
            <h1 className="heading-1 mb-4">Get in Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our initiatives or want to get involved? 
              We'd love to hear from you. Reach out to us using any of the methods below.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="grid gap-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <Card key={item.title}>
                      <CardContent className="flex items-center gap-4 p-4">
                        <div className="rounded-full bg-primary/10 p-3">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{item.title}</h3>
                          <a 
                            href={item.link}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            target={item.icon === MapPin || item.icon === Globe ? "_blank" : undefined}
                            rel={item.icon === MapPin || item.icon === Globe ? "noopener noreferrer" : undefined}
                          >
                            {item.details}
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              <div className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Office Hours</CardTitle>
                    <CardDescription>When you can reach us</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <dl className="space-y-2">
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Monday - Friday</dt>
                        <dd>9:00 AM - 5:00 PM EAT</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Saturday</dt>
                        <dd>10:00 AM - 2:00 PM EAT</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Sunday</dt>
                        <dd>Closed</dd>
                      </div>
                    </dl>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Input
                          placeholder="Your name"
                          value={formState.name}
                          onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Your email"
                          value={formState.email}
                          onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Input
                        placeholder="Subject"
                        value={formState.subject}
                        onChange={e => setFormState(s => ({ ...s, subject: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your message"
                        value={formState.message}
                        onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                        className="min-h-[150px]"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </Container>
    </PageTransition>
  )
} 