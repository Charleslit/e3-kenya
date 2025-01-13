'use client'

import { motion } from 'framer-motion'
import { DonationTiers, type DonationTier } from '@/components/sections/donation/tiers'
import { DonationForm } from '@/components/sections/donation/form'
import { PaymentMethods } from '@/components/sections/donation/payment-methods'
import { TransparencySection } from '@/components/sections/donation/transparency'
import { Container } from '@/components/ui/container'
import { useState } from 'react'

const DonationProgress = () => (
  <motion.div className="max-w-2xl mx-auto mb-12">
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium">Current: $15,000</span>
      <span className="text-sm font-medium">Goal: $50,000</span>
    </div>
    <div className="h-4 bg-accent-beige rounded-full overflow-hidden">
      <motion.div 
        className="h-full bg-primary-500"
        initial={{ width: 0 }}
        animate={{ width: "30%" }}
        transition={{ duration: 1 }}
      />
    </div>
    <p className="text-sm text-muted-foreground mt-2 text-center">
      Help us reach our quarterly goal to support more girls and women!
    </p>
  </motion.div>
)

const DonationImpact = () => (
  <section className="py-12 bg-accent-beige/30">
    <div className="container">
      <h3 className="text-2xl font-crimson font-bold text-center mb-8">Your Impact So Far</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { count: "2,500+", description: "Girls Supported with Dignity" },
          { count: "35", description: "Women Trained in Pad Making" },
          { count: "6", description: "Communities Empowered" }
        ].map((impact, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl font-bold text-primary-500 mb-2">{impact.count}</div>
            <div className="text-neutral-600">{impact.description}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const DonationContainer = () => {
  const [selectedTier, setSelectedTier] = useState<DonationTier | null>(null)

  return (
    <div className="flex min-h-screen flex-col">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-24"
        >
          <div className="text-center mb-16">
            <h1 className="text-5xl font-crimson font-bold text-primary-500 mb-6">
              Help Us Make Tracks
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Join our herd of supporters making lasting change in Kenya. Like elephants who protect and 
              nurture their community, your donation helps us empower girls and women through sustainable 
              programs and community-inspired initiatives.
            </p>
          </div>

          <DonationTiers 
            selectedTierId={selectedTier?.id || ""} 
            onSelectTier={setSelectedTier} 
          />

          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
              <h2 className="text-2xl font-crimson text-secondary-500 mb-4">Why Join Our Herd?</h2>
              <ul className="space-y-4 text-neutral-700">
                {[
                  { icon: "🌍", text: "Your support creates sustainable change through local empowerment and skills training." },
                  { icon: "💪", text: "Every donation directly impacts girls' education and women's economic independence." },
                  { icon: "🤝", text: "Join a global community committed to empowering Kenyan women and girls." }
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>

            <DonationForm />
            <PaymentMethods />
            <TransparencySection />
          </div>

          <DonationProgress />
        
        </motion.div>
      </Container>
    </div>
  )
}

export default function DonatePage() {
  return <DonationContainer />
}
