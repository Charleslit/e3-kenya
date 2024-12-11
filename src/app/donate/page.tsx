'use client'

import { motion } from 'framer-motion'
import { DonationTiers, type DonationTier } from '@/components/sections/donation/tiers'
import { DonationForm } from '@/components/sections/donation/form'
import { PaymentMethods } from '@/components/sections/donation/payment-methods'
import { TransparencySection } from '@/components/sections/donation/transparency'
import { Container } from '@/components/ui/container'
import { useState } from 'react'

function DonationProgress() {
  return (
    <motion.div className="max-w-2xl mx-auto mb-12">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">Current: $15,000</span>
        <span className="text-sm font-medium">Goal: $50,000</span>
      </div>
      <div className="h-4 bg-muted rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: "30%" }}
          transition={{ duration: 1 }}
        />
      </div>
      <p className="text-sm text-muted-foreground mt-2 text-center">
        Help us reach our quarterly goal!
      </p>
    </motion.div>
  )
}

function DonationImpact() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <h3 className="text-2xl font-bold text-center mb-8">Your Impact</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
            <div className="text-muted-foreground">Girls Supported</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5</div>
            <div className="text-muted-foreground">Schools Reached</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">35%</div>
            <div className="text-muted-foreground">Attendance Increase</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DonationContainer() {
  const [selectedTier, setSelectedTier] = useState<DonationTier | null>(null)

  return (
    <div className="flex min-h-screen flex-col">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-24 text-center"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
            Support Our Mission
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your donation helps us empower Kenyan girls and women through sustainable programs
            and community-inspired initiatives.
          </p>
        </motion.div>

        {/* <DonationTiers 
          selectedTierId={selectedTier?.id || ""} 
          onSelectTier={setSelectedTier} 
        /> */}
        <DonationForm />
        <PaymentMethods />
        <TransparencySection />
        <DonationProgress />
        <DonationImpact />
      </Container>
    </div>
  )
}

export default function DonatePage() {
  return <DonationContainer />
} 