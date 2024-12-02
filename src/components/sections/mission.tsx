"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function MissionSection() {
  return (
    <section className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
          Our Vision
        </h2>
        <p className="text-xl text-muted-foreground">
          A Kenya Where Every Woman and Girl Has the Opportunity to Make Her Own Decisions
        </p>
      </motion.div>

      <div className="grid gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-lg leading-relaxed">
            At E3 we believe in a world where every Kenyan girl and woman is empowered to be an active participant 
            in shaping her own life and community. We don&apos;t just bring solutions; we work hand-in-hand with local 
            women and girls to develop sustainable programs that reflect their needs and aspirations.
          </p>
          <p className="text-lg leading-relaxed">
            Whether it&apos;s through education, mentorship, or creating income-generating programs, we are committed 
            to engaging with and empowering Kenyan girls and women as they seek greater freedoms and opportunities 
            in their communities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="h-full">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg mb-6">
                To Encourage, Engage, and Empower Kenyan Girls and Women through dialogue and community-inspired projects, 
                increasing the number of those who become active participants in their own decision-making.
              </p>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-primary text-2xl font-bold">•</span>
                  <span className="text-lg">Encourage through support and guidance</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-primary text-2xl font-bold">•</span>
                  <span className="text-lg">Engage through active participation</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-primary text-2xl font-bold">•</span>
                  <span className="text-lg">Empower through sustainable solutions</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
} 