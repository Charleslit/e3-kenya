"use client"

import Image from 'next/image'
import { Section } from '@/components/ui/section'
import { motion } from 'framer-motion'
import { theme } from '@/lib/theme'
import { cn } from '@/lib/utils'
import { LogoButton } from '@/components/shared/logobutton'
import { ChevronDown } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function SisterherdStrongSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/5">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/logo/image.png')" }}
          />
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30" /> */}
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className={cn(
              "font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary",
              "tracking-tight leading-tight"
            )}>
              Sisterherd Strong
            </h2>
            <p className={cn(
              "text-lg md:text-xl text-muted-foreground mb-8",
              "max-w-2xl mx-auto leading-relaxed"
            )}>
              Join us in empowering Kenyan women and girls through education, economic opportunities, and community support.
            </p>
            
            <p className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto">
              Building a Future Where Kenyan Women and Girls Lead the Way
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              delay: 1,
              duration: 0.6,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto space-y-20">
          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <Card className="p-6 space-y-4 bg-primary/5 border-none">
              <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
              <p className="text-xl font-medium text-primary/90">
                A Kenya Where Every Woman and Girl Has the Opportunity to Make Her Own Decisions
              </p>
              <p className="text-muted-foreground">
                At E3 we believe in a world where every Kenyan girl and woman is empowered to be an active participant 
                in shaping her own life and community. We don't just bring solutions; we work hand-in-hand with local 
                women and girls to develop sustainable programs that reflect their needs and aspirations.
              </p>
            </Card>
            
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <div 
                className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: "url('/images/backgrounds/vision.png')" }}
              />
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl md:order-2">
              <div 
                className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: "url('/images/backgrounds/mission.png')" }}
              />
            </div>

            <Card className="p-6 space-y-4 bg-secondary/5 border-none md:order-1">
              <h2 className="text-3xl font-bold text-secondary">Our Mission</h2>
              <p className="text-xl font-medium text-secondary/90">
                To Encourage, Engage, and Empower Kenyan Girls and Women
              </p>
              <p className="text-muted-foreground">
                Whether it's through education, mentorship, or creating income-generating programs, we are committed to 
                engaging with and empowering Kenyan girls and women as they seek greater freedoms and opportunities 
                in their communities.
              </p>
            </Card>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-6 space-y-4 bg-secondary/5 border-none rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500"
            >
              <h2 className="text-3xl font-bold text-secondary">Our Story</h2>
              <p className="text-muted-foreground">
                E3 was founded in a setting where many great ideas emerge—around a kitchen table where a small group of friends and family discussed the stigma surrounding menstruation, the challenges many face in affording period products, and the importance of empowering girls and women to live their daily lives with confidence throughout the month.
              </p>
              <p className="text-muted-foreground">
                We argued and laughed while researching eco-friendly and absorbent fabrics, conducting absorbency tests, and weighing the pros and cons of various designs. Our goal was to create comfortable and effective pads that would not harm the environment while providing girls and women with the dignity and freedom they deserve.
              </p>
            </motion.div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl md:order-2">
              <div 
                className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: "url('/images/backgrounds/mission.png')" }}
              />
            </div>
            <></>
            <LogoButton 
              size="lg"
              className="px-8 py-6 text-lg hover:scale-105 transition-transform duration-300"
            >
              Support Our Mission
            </LogoButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
