'use client'

import { Section } from '@/components/ui/section'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { LogoButton } from '@/components/shared/logobutton'
import { Heart, Footprints, Droplets, Trees, Crown, HandHeart } from 'lucide-react'

const DonationOptions = [25, 50, 100, 250, 500, 1000]

const donationTiers = [
  {
    title: "Herd Hands",
    description: "Reflecting the way elephants lift and support each other with their trunks, these are the volunteers who amplify the Sisterherd mission through their selfless actions. Contact us to see how you can get involved.",
    icon: HandHeart,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    title: "Tiny Tusks",
    amount: "Donations up to $99",
    description: "Symbolizing young elephants, just beginning their journey, full of potential and hope. Your donation buys fabric, thread, scissors and other supplies to make the pads; $25 supports one 4-pad package, a pouch to carry pads, and instructions on how to use.",
    icon: Heart,
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
  },
  {
    title: "Footprint Friends",
    amount: "Donations from $100 - $999",
    description: "Representing the deep footprints that elephants make, leaving lasting impressions in the ground for others to follow. Your gift makes a substantial contribution towards purchasing sewing machines for each project; 1 pedal sewing machine with table and transportation of machine to location costs between $250-$500.",
    icon: Footprints,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    title: "Watering Hole Allies",
    amount: "Donations from $1000-$4999",
    description: "Standing for those who sustain the Herd through their deep sense of connection, community, and shared purpose. Your contribution is instrumental for organizing, providing supplies, and carrying out a multiple-day training session for Kenyan women and girls, ensuring that there are at least 2 sewing machines on site.",
    icon: Droplets,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Savanna Stewards",
    amount: "Donations from $5000-$9999",
    description: "Exemplifying those who leave a lasting legacy of care and stewardship for others who follow us in our journey. Your donation helps sustain our sewing project here and in Kenya and provide training sessions at multiple locations with at least 5 machines available at each location as we continue to distribute sanitary pads.",
    icon: Trees,
    color: "text-forest",
    bgColor: "bg-forest/10",
  },
  {
    title: "Magnanimous Matriarchs",
    amount: "Donations from $10,000",
    description: "Embodying our heart and soul, these are the ultimate caretakers of the herd, protecting our survival and spreading awareness and support. Your magnanimous gift solidifies our impact as we seek to reach more girls and women throughout Kenya, creating our visionary world where every Kenyan girl and woman has the opportunity to make her own decisions. With sufficient funds, we imagine building a Herd Hub where girls and women come together to encourage, engage, and empower each other through community-inspired programs and projects.",
    icon: Crown,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  }
]

export function DonationTiersSection() {
  return (
    <Section className="bg-gradient-to-b from-background to-primary/5">
      {/* Story Section */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={cn(
            "font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary",
            "tracking-tight leading-tight"
          )}>
            HELP US MAKE TRACKS
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif text-primary mb-6">
            Gifts to the Sisterherd
          </h3>
          <p className={cn(
            "text-lg text-muted-foreground mb-8",
            "max-w-3xl mx-auto leading-relaxed"
          )}>
            Each tier of giving reflects our Sisterherd Strong theme and weaves the vital roles and characteristics of female elephants with the crucial part YOU play in E3's vision and mission. These tiers show what your contribution means to E3 and the Sisterherd Strong Pad Project. <em>There are no administrative costs. All donations are funneled directly into Herd projects.</em>
          </p>
        </motion.div>
      </div>

      {/* Donation Tiers */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-4 max-w-7xl mx-auto mb-16">
        {donationTiers.map((tier, index) => (
          <motion.div
            key={tier.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full">
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
                  href={`/donate?tier=${tier.title.toLowerCase().replace(/\s+/g, '-')}`}
                  variant="default"
                  className="w-full"
                >
                  {tier.amount ? 'Donate' : 'Contact Us'}
                </LogoButton>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Donation Options */}
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h3 className="text-2xl font-serif text-primary mb-8">
          Choose Your Donation Amount
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {DonationOptions.map((amount) => (
            <LogoButton
              key={amount}
              href={`/donate?amount=${amount}`}
              variant="outline"
              className="text-lg"
            >
              ${amount}
            </LogoButton>
          ))}
          <LogoButton
            href="/donate?amount=other"
            variant="outline"
            className="text-lg md:col-span-3"
          >
            Other Amount
          </LogoButton>
        </div>
      </div>
    </Section>
  )
}

export default DonationTiersSection