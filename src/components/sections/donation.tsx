"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, ArrowRight } from "lucide-react"

const donationTiers = [
  {
    amount: 25,
    title: "Supporter",
    description: "Help provide educational materials for one student",
    impact: "Supports 1 student"
  },
  {
    amount: 50,
    title: "Champion",
    description: "Provide menstrual health supplies for 5 girls",
    impact: "Helps 5 students"
  },
  {
    amount: 100,
    title: "Guardian",
    description: "Fund a community workshop and training session",
    impact: "Impacts entire community"
  }
]

export function DonationSection() {
  return (
    <section className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Make a Difference Today
        </h2>
        <p className="mt-4 text-muted-foreground">
          Your donation helps us continue our mission of empowering communities in Kenya.
          Choose a donation tier or enter a custom amount.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        {donationTiers.map((tier, index) => (
          <motion.div
            key={tier.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="relative h-full">
              <CardHeader>
                <CardTitle className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">${tier.amount}</span>
                  <span className="text-muted-foreground">/once</span>
                </CardTitle>
                <CardDescription className="text-lg font-semibold">
                  {tier.title}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{tier.description}</p>
                <div className="text-sm text-muted-foreground">
                  <strong>Impact:</strong> {tier.impact}
                </div>
                <Button className="w-full group" size="lg">
                  Donate ${tier.amount}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12 text-center"
      >
        <Button variant="outline" size="lg">
          Make a Custom Donation
        </Button>
      </motion.div>
    </section>
  )
} 