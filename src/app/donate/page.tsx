'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Heart, ArrowRight, Gift, Users, School } from 'lucide-react'
import { DonationForm } from '@/components/sections/donation/form'
import { PaymentMethods } from '@/components/sections/donation/payment-methods'
import { TransparencySection } from '@/components/sections/donation/transparency'
import { Container } from '@/components/ui/container'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { type DonationTier } from '@/components/sections/donation/tiers'
import { LogoButton } from '@/components/shared/logobutton'

function DonationProgress() {
  // Calculate days remaining in current quarter
  const now = new Date('2025-01-15T09:20:45+03:00')
  const quarterEnd = new Date(now)
  quarterEnd.setMonth(Math.floor((now.getMonth() / 3) * 3) + 3, 0)
  const daysRemaining = Math.ceil((quarterEnd.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto mb-12 bg-card p-6 rounded-lg shadow-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-lg mb-1">Q1 2025 Goal Progress</h3>
          <p className="text-sm text-muted-foreground">
            {daysRemaining} days remaining
          </p>
        </div>
        <Badge variant="secondary" className="text-primary">
          30% Complete
        </Badge>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm font-medium">
          <span>Current: $15,000</span>
          <span>Goal: $50,000</span>
        </div>
        <div className="h-4 bg-muted rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: "30%" }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
      <p className="text-sm text-muted-foreground mt-4 text-center">
        Join <strong>127 donors</strong> in supporting our mission this quarter
      </p>
    </motion.div>
  )
}

function DonationTiers({ onSelectAmount }: { onSelectAmount: (amount: number) => void }) {
  const tiers = [
    {
      name: "Herd Hands",
      description: "Reflecting the way elephants lift and support each other with their trunks, these are the volunteers who amplify the Sisterherd mission through their selfless actions.",
      action: "Contact us to see how you can get involved.",
      isVolunteer: true
    },
    {
      name: "Tiny Tusks",
      range: "up to $99",
      description: "Symbolizing young elephants, just beginning their journey, full of potential and hope.",
      impact: "Your donation buys fabric, thread, scissors and other supplies to make the pads; $25 supports one 4-pad package, a pouch to carry pads, and instructions on how to use."
    },
    {
      name: "Footprint Friends",
      range: "$100 - $999",
      description: "Representing the deep footprints that elephants make, leaving lasting impressions in the ground for others to follow.",
      impact: "Your gift makes a substantial contribution towards purchasing sewing machines for each project; 1 pedal sewing machine with table and transportation of machine to location costs between $250-$500."
    },
    {
      name: "Watering Hole Allies",
      range: "$1000-$4999",
      description: "Standing for those who sustain the Herd through their deep sense of connection, community, and shared purpose.",
      impact: "Your contribution is instrumental for organizing, providing supplies, and carrying out a multiple-day training session for Kenyan women and girls, ensuring that there are at least 2 sewing machines on site."
    },
    {
      name: "Savanna Stewards",
      range: "$5000-$9999",
      description: "Exemplifying those who leave a lasting legacy of care and stewardship for others who follow us in our journey.",
      impact: "Your donation helps sustain our sewing project here and in Kenya and provide training sessions at multiple locations with at least 5 machines available at each location as we continue to distribute sanitary pads."
    },
    {
      name: "Magnanimous Matriarchs",
      range: "$10,000+",
      description: "Embodying our heart and soul, these are the ultimate caretakers of the herd, protecting our survival and spreading awareness and support.",
      impact: "Your magnanimous gift solidifies our impact as we seek to reach more girls and women throughout Kenya, creating our visionary world where every Kenyan girl and woman has the opportunity to make her own decisions. With sufficient funds, we imagine building a Herd Hub where girls and women come together to encourage, engage, and empower each other through community-inspired programs and projects."
    }
  ]

  const donationOptions = [25, 50, 100, 250, 500, 1000]

  return (
    <section className="py-16 bg-muted/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <LogoButton
            src="/images/logo/elephant-logo.svg"
            variant="emerald"
            size="xl"
            textStyle="emerald"
            textSize="display"
            textWeight="bold"
            className="mx-auto mb-8 h-32 w-32"
            darkOverlay
            imageOpacity={0.85}
            motionConfig={{
              hover: true,
              tap: true,
              gradient: true,
              scale: 1.05
            }}
          >
            <span className="flex flex-col items-center gap-1">
              <span>DONATE</span>
              <span className="text-base font-medium">Support Our Mission</span>
            </span>
          </LogoButton>

          <h2 className="text-3xl font-bold mb-6">HELP US MAKE TRACKS</h2>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Gifts to the Sisterherd</h3>
            <p className="text-muted-foreground mb-8">
              Each tier of giving reflects our Sisterherd Strong theme and weaves the vital roles 
              and characteristics of female elephants with the crucial part YOU play in E3's vision 
              and mission. These tiers show what your contribution means to E3 and the Sisterherd 
              Strong Pad Project. There are no administrative costs. All donations are funneled 
              directly into Herd projects.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-8 mb-16">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                      {tier.range && (
                        <Badge variant="secondary" className="mb-4">
                          {tier.range}
                        </Badge>
                      )}
                    </div>
                    <div className="md:w-2/3 space-y-4">
                      <p>{tier.description}</p>
                      {tier.impact && (
                        <p className="text-muted-foreground">{tier.impact}</p>
                      )}
                      {tier.isVolunteer && (
                        <p className="font-medium text-primary">{tier.action}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">Choose Your Donation Amount</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                {donationOptions.map((amount) => (
                  <LogoButton
                    key={amount}
                    variant="emerald"
                    textStyle="emerald"
                    size="icon"
                    textSize="display"
                    textWeight="bold"
                    rounded="full"
                    blurStyle="sm"
                    overlayStyle="medium"
                    className="w-32 h-32 mx-auto"
                    onClick={() => onSelectAmount(amount)}
                    motionConfig={{
                      hover: true,
                      tap: true,
                      gradient: true,
                      scale: 1.05
                    }}
                  >
                    <span className="text-4xl font-bold text-emerald-400 drop-shadow-lg">
                      ${amount}
                    </span>
                  </LogoButton>
                ))}
                <LogoButton
                  variant="emerald"
                  textStyle="emerald"
                  size="icon"
                  textSize="lg"
                  textWeight="bold"
                  rounded="full"
                  blurStyle="sm"
                  overlayStyle="medium"
                  className="w-32 h-32 mx-auto"
                  onClick={() => onSelectAmount(0)}
                  motionConfig={{
                    hover: true,
                    tap: true,
                    gradient: true,
                    scale: 1.05
                  }}
                >
                  <span className="flex flex-col items-center font-bold text-emerald-400 drop-shadow-lg">
                    <span>Other</span>
                    <span>Amount</span>
                  </span>
                </LogoButton>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  )
}

function DonationContainer() {
  const [selectedTier, setSelectedTier] = useState<DonationTier | null>(null)
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    const element = document.querySelector('.donation-form')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Container>
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-24 text-center"
        >
          <Badge className="mb-6" variant="outline">
            Sisterherd Strong Pad Project
          </Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
            Empower Change Today
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Your donation helps provide sustainable menstrual solutions and creates economic 
            opportunities for women and girls in Kenya.
          </p>
          <Button 
            size="lg" 
            className="group"
            onClick={() => {
              const element = document.querySelector('.donation-tiers')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Donate Now
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div> */}

        {/* <DonationProgress /> */}
        
        <div className="donation-tiers">
          <DonationTiers onSelectAmount={handleAmountSelect} />
        </div>
        
        <div className="donation-form">
          <Card className="mb-16">
            <CardContent className="p-8">
              <DonationForm selectedAmount={selectedAmount} />
            </CardContent>
          </Card>
        </div>

        <PaymentMethods />
        {/* <TransparencySection /> */}
      </Container>
    </div>
  )
}

export default function DonatePage() {
  return <DonationContainer />
}