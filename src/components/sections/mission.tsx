'use client'

import { motion } from "framer-motion"
import { LogoButton } from "@/components/shared/logobutton"
import { routes } from "@/lib/routes" // Assuming you have a routes file

export function MissionSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16 bg-blue-50 rounded-2xl p-8 sm:p-12"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-serif mb-4 text-blue-900">Our Vision</h3>
            <p className="text-xl sm:text-2xl font-semibold mb-4 text-blue-800 leading-tight">
              A Kenya Where Every Woman and Girl Has the Opportunity to Make Her Own Decisions
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              At E3, we believe in a world where every Kenyan girl and woman is empowered to be an active participant 
              in shaping her own life and community. We don't just bring solutions; we work hand-in-hand with local 
              women and girls to develop sustainable programs that reflect their needs and aspirations.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16 bg-rose-50 rounded-2xl p-8 sm:p-12"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-serif mb-4 text-rose-900">Our Mission</h3>
            <p className="text-lg sm:text-xl font-medium mb-4 text-rose-800 leading-tight">
              To Encourage, Engage, and Empower Kenyan Girls and Women through dialogue and community-inspired projects, 
              increasing the number of those who become active participants in their own decision-making.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed italic">
              Whether it's through education, mentorship, or creating income-generating programs, we are committed 
              to engaging with and empowering Kenyan girls and women as they seek greater freedoms and opportunities 
              in their communities.
            </p>
          </div>
        </motion.div>

        <div className="mt-12 flex justify-center">
          <LogoButton 
            href={routes.donate}
            variant="default"
            textStyle="glow"
            focusStyle="glow"
            darkOverlay
            className="min-w-[200px] text-lg"
          >
            Support Our Mission
          </LogoButton>
        </div>
      </div>
    </section>
  )
}

export default MissionSection

