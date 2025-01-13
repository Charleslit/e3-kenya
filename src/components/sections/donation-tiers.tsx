'use client'

import { Section } from '@/components/ui/section'
import { motion } from 'framer-motion'
import { theme } from '@/lib/theme'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { LogoButton } from '@/components/shared/logobutton'

export function DonationTiersSection() {
  return (
    <Section className="bg-gradient-to-b from-background to-primary/5">
      <motion.div className="text-center mb-16">
        <h2 className={cn(
          theme.typography.sizes.h2,
          "font-serif text-primary mb-4"
        )}>
          HELP US MAKE TRACKS
        </h2>
        <p className={cn(
          theme.typography.sizes.body,
          "text-muted-foreground max-w-3xl mx-auto"
        )}>
          Join us in our mission to empower Kenyan women and girls. Your support 
          helps create lasting change in communities across Kenya.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Donation tier cards with consistent styling */}
        {[
          { title: "Friend", amount: "25" },
          { title: "Supporter", amount: "50" },
          { title: "Champion", amount: "100" }
        ].map((tier) => (
          <Card key={tier.title} className="relative overflow-hidden">
            <CardContent className="p-6">
              <h3 className={cn(
                theme.typography.sizes.h3,
                "font-serif text-primary mb-4"
              )}>
                {tier.title}
              </h3>
              <p className={cn(
                theme.typography.sizes.h4,
                "font-bold mb-4"
              )}>
                ${tier.amount} / month
              </p>
              <LogoButton
                href={`/donate?amount=${tier.amount}`}
                variant="default"
                className="w-full"
              >
                Select
              </LogoButton>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
} 