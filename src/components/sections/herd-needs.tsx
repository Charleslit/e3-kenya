"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, Users, HandHeart } from "lucide-react"

const opportunities = [
  {
    title: "Make a Donation",
    description: "Support our initiatives through financial contributions. Every donation helps us expand our impact.",
    icon: Heart,
    action: {
      text: "Donate Now",
      href: "/donate"
    }
  },
  {
    title: "Volunteer with Us",
    description: "Share your skills and time. Join us in making a difference in the lives of Kenyan women and girls.",
    icon: Users,
    action: {
      text: "Join Our Team",
      href: "/volunteer"
    }
  },
  {
    title: "Partner with Us",
    description: "Collaborate with us to create sustainable change. Together we can achieve more.",
    icon: HandHeart,
    action: {
      text: "Become a Partner",
      href: "/contact"
    }
  }
]

export function HerdNeedsSection() {
  return (
    <section className="container py-24 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-primary/10 to-transparent" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="heading-2 mb-4">Our Herd Needs You</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Join us in our mission to empower Kenyan women and girls. There are many ways you can contribute to making a difference.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        {opportunities.map((opportunity, index) => {
          const Icon = opportunity.icon
          return (
            <motion.div
              key={opportunity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <Icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{opportunity.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {opportunity.description}
                  </p>
                  <Button className="w-full" asChild>
                    <Link href={opportunity.action.href}>
                      {opportunity.action.text}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-16 text-center"
      >
        <p className="text-muted-foreground mb-6">
          Have questions about how you can help? We&apos;d love to hear from you!
        </p>
        <Button variant="outline" size="lg" asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      </motion.div>
    </section>
  )
} 