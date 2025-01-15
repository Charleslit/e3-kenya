"use client"

import { Section } from '@/components/ui/section'
import { motion } from 'framer-motion'
import { theme } from '@/lib/theme'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { LogoButton } from '@/components/shared/logobutton'
import { Heart, Footprints, Droplets, Trees, Crown, HandHeart } from 'lucide-react'

export interface DonationTier {
  id: string
  title: string
  amount?: string
  description: string
  icon: React.ElementType
  color: string
  bgColor: string
  stripeProductId?: string
}

const donationTiers: DonationTier[] = [
  {
    id: 'herd-hands',
    title: "Herd Hands",
    description: "Reflecting the way elephants lift and support each other with their trunks, these are the volunteers who amplify the Sisterherd mission through their selfless actions.",
    icon: HandHeart,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    id: 'tiny-tusks',
    title: "Tiny Tusks",
    amount: "Up to $99",
    description: "Symbolizing young elephants, just beginning their journey. Your donation buys fabric, thread, and supplies for pads. $15 supports one 4-pad package.",
    icon: Heart,
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
    stripeProductId: 'prod_tiny_tusks'
  },
  {
    id: 'footprint-friends',
    title: "Footprint Friends",
    amount: "$100 - $999",
    description: "Representing deep footprints that elephants make. Contributes towards purchasing sewing machines ($250-$500 per machine including transportation).",
    icon: Footprints,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    stripeProductId: 'prod_footprint_friends'
  }
]

interface DonationTiersProps {
  selectedTierId?: string
  onSelectTier: (tier: DonationTier) => void
}

export function DonationTiersSection({ selectedTierId, onSelectTier }: DonationTiersProps) {
  return (
    <Section className="bg-gradient-to-b from-background to-primary/5">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className={cn(
          theme.typography.sizes.h2,
          "font-serif text-primary mb-6"
        )}>
          HELP US MAKE TRACKS
        </h2>
        <p className={cn(
          theme.typography.sizes.body,
          "text-muted-foreground max-w-3xl mx-auto"
        )}>
          Each tier reflects the vital roles of female elephants and shows what your contribution 
          means to the Sisterherd Strong Pad Project. All donations go directly to our projects 
          with no administrative costs.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {donationTiers.map((tier, index) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => tier.stripeProductId && onSelectTier(tier)}
            className={cn(
              "cursor-pointer transition-transform duration-300",
              tier.stripeProductId && "hover:scale-105"
            )}
          >
            <Card className={cn(
              "h-full",
              selectedTierId === tier.id && "ring-2 ring-primary"
            )}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className={cn("p-3 rounded-full", tier.bgColor, tier.color)}>
                    <tier.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-primary">{tier.title}</h3>
                    {tier.amount && (
                      <p className="text-sm font-medium text-muted-foreground">
                        {tier.amount}
                      </p>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  {tier.description}
                </p>
                <LogoButton
                  href={tier.stripeProductId ? undefined : '/contact'}
                  variant="default"
                  className="w-full"
                  onClick={() => tier.stripeProductId && onSelectTier(tier)}
                >
                  {tier.stripeProductId ? 'Select' : 'Contact Us'}
                </LogoButton>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}