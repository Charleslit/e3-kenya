import { motion } from 'framer-motion'

export function DonationHero() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-primary-50 to-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
          Join Our Herd in Making a Difference
        </h1>
        <p className="text-xl md:text-2xl font-serif text-neutral-600 mb-8">
          Your donation helps provide sustainable menstrual solutions and economic opportunities for women and girls in Kenya
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
            <div className="text-neutral-600">Pads Distributed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">35</div>
            <div className="text-neutral-600">Women Trained</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5</div>
            <div className="text-neutral-600">Communities Reached</div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-heading font-semibold mb-4">
            Current Project: Osiligi Pad Project
          </h3>
          <p className="text-neutral-600 mb-6">
            We're expanding our pad-making training program to reach more communities and create sustainable solutions for menstrual health.
          </p>
          <div className="relative h-4 bg-neutral-100 rounded-full overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm text-neutral-500">
            <span>Current: $15,000</span>
            <span>Goal: $25,000</span>
          </div>
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2">
        <div className="w-full h-full rounded-full bg-primary/5" />
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/3 translate-y-1/3">
        <div className="w-full h-full rounded-full bg-primary/5" />
      </div>
    </section>
  )
}
