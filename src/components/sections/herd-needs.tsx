'use client'

import { Section } from '@/components/ui/section'
import { motion } from 'framer-motion'
import { theme } from '@/lib/theme'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { LogoButton } from '@/components/shared/logobutton'
import { Heart, Footprints, Droplets, Trees, Crown, HandHeart } from 'lucide-react'

const donationTiers = [
  {
    title: "Herd Hands",
    icon: HandHeart,
    description: "Reflecting the way elephants lift and support each other with their trunks, these are the volunteers who amplify the Sisterherd mission through their selfless actions.",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    title: "Tiny Tusks",
    amount: "$10 - $99",
    icon: Heart,
    description: "Symbolizing young elephants, just beginning their journey. Your donation buys fabric, thread, and supplies for pads. $15 supports one 4-pad package.",
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
  },
  {
    title: "Footprint Friends",
    amount: "$100 - $999",
    icon: Footprints,
    description: "Representing deep footprints that elephants make. Contributes towards purchasing sewing machines ($250-$500 per machine including transportation).",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    title: "Watering Hole Allies",
    amount: "$1,000 - $4,999",
    icon: Droplets,
    description: "Supporting multiple-day training sessions with at least 2 sewing machines on site, fostering community and shared purpose.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Savanna Stewards",
    amount: "$5,000 - $9,999",
    icon: Trees,
    description: "Enabling training sessions at multiple locations with at least 5 machines available at each location.",
    color: "text-forest",
    bgColor: "bg-forest/10",
  },
  {
    title: "Magnanimous Matriarchs",
    amount: "$10,000+",
    icon: Crown,
    description: "Our ultimate caretakers, supporting the vision of a Herd Hub where girls and women come together to encourage, engage, and empower each other.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  }
]

export function DonationTiersSection() {
  return (
    <Section className="bg-gradient-to-b from-background to-primary/5">
      <motion.div 
        className="text-center mb-8 sm:mb-16 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className={cn(
          "font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary",
          "tracking-tight leading-tight"
        )}>
          Sustain the Herd
        </h2>
        <p className={cn(
          "text-lg md:text-xl text-muted-foreground mb-8",
          "max-w-2xl mx-auto leading-relaxed"
        )}>
          Your support helps us continue our mission of empowering Kenyan women and girls. Choose a donation tier that resonates with you.
        </p>
      </motion.div>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6">
        {donationTiers.map((tier, index) => (
          <motion.div
            key={tier.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full transition-transform duration-300 hover:scale-105">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className={cn(
                    "p-2 sm:p-3 rounded-full shrink-0",
                    tier.bgColor,
                    tier.color
                  )}>
                    <tier.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-primary">
                      {tier.title}
                    </h3>
                    {tier.amount && (
                      <p className="text-sm sm:text-base font-medium text-muted-foreground">
                        {tier.amount}
                      </p>
                    )}
                  </div>
                </div>
                
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                  {tier.description}
                </p>

                <LogoButton
                  href={`/donate?tier=${tier.title.toLowerCase().replace(/\s+/g, '-')}`}
                  variant="default"
                  className="w-full text-sm sm:text-base"
                >
                  {tier.amount ? 'Donate' : 'Learn More'}
                </LogoButton>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default DonationTiersSection
