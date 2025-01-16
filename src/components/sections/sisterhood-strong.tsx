"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { LogoButton } from '@/components/shared/logobutton'
import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

export default function SisterherdStrongSection1() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/50 to-background/5 py-16 md:py-24">
      <div className="container mx-auto px-4 space-y-24 md:space-y-32">
        {/* Vision Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Card className="p-8 md:p-12 space-y-8 md:space-y-12 bg-white/5 backdrop-blur-sm border-none shadow-2xl rounded-2xl hover:shadow-primary/20 transition-all duration-500">
            {/* Vision Content */}
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-4">
                <LogoButton className="w-12 h-12 md:w-16 md:h-16 text-primary rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-bold"></span>
                </LogoButton>
                <span className="text-lg md:text-xl uppercase tracking-wider text-primary/70 font-bold">OUR VISION</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight tracking-tight">
                A Kenya Where Every Woman and Girl Has the Opportunity to Make Her Own Decisions
              </h2>
              <div className="w-16 md:w-24 h-1 bg-primary/30" />
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-serif">
                At E3 we believe in a world where every Kenyan girl and woman is empowered to be an active participant 
                in shaping her own life and community. We don't just bring solutions; we work hand-in-hand with local 
                women and girls to develop sustainable programs that reflect their needs and aspirations.
              </p>
            </div>

            {/* Vision Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="/images/backgrounds/vision.png"
                  alt="Vision Image 1"
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="/images/initiatives/vision2.png"
                  alt="Vision Image 2"
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Card className="p-8 md:p-12 space-y-8 md:space-y-12 bg-white/5 backdrop-blur-sm border-none shadow-2xl rounded-2xl hover:shadow-secondary/20 transition-all duration-500">
            {/* Mission Content */}
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-4">
                <LogoButton className="w-12 h-12 md:w-16 md:h-16 text-secondary rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="text-lg font-bold"></span>
                </LogoButton>
                <span className="text-lg md:text-xl uppercase tracking-wider text-secondary/70 font-bold">OUR MISSION</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-secondary leading-tight tracking-tight">
                To Encourage, Engage, and Empower Kenyan Girls and Women
              </h2>
              <div className="w-16 md:w-24 h-1 bg-secondary/30" />
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-serif">
                To encourage, engage, and empower Kenyan girls and women through meaningful dialogue and community-driven 
                initiatives, to become active participants in their own decision-making. We provide more than just resources; 
                we work hand-in-hand with local women and girls to create sustainable programs that align with their needs 
                and aspirations as they seek greater freedoms and opportunities in their communities.
              </p>
            </div>

            {/* Mission Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="/images/backgrounds/mission.png"
                  alt="Mission Image 1"
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="/images/initiatives/initiative2.png"
                  alt="Mission Image 2"
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Story Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-8 md:p-12 space-y-8 md:space-y-10 bg-white/5 backdrop-blur-sm border-none shadow-2xl rounded-2xl">
            <div className="space-y-6 md:space-y-8 text-center">
              <div className="flex items-center gap-4 justify-center">
                <LogoButton className="w-12 h-12 md:w-16 md:h-16 text-primary rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-bold"></span>
                </LogoButton>
                <span className="text-lg md:text-xl uppercase tracking-wider text-primary/70 font-bold"></span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight tracking-tight">
              </h2>
              <div className="w-16 md:w-24 h-1 bg-primary/30 mx-auto" />
            </div>
            
            <div className="space-y-6 md:space-y-8 text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-serif">
              <p className="first-letter:text-7xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                E3 was founded in a setting where many great ideas emerge—around a kitchen table where a small group of friends and family discussed the stigma surrounding menstruation, the challenges many face in affording period products, and the importance of empowering girls and women to live their daily lives with confidence throughout the month. 
              </p>
              <p>
                We argued and laughed while researching eco-friendly and absorbent fabrics, conducting absorbency tests, and weighing the pros and cons of various designs. Our goal was to create comfortable and effective pads that would not harm the environment while providing girls and women with the dignity and freedom they deserve.
              </p>
            </div>

            {/* Story Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="/images/backgrounds/mission.png"
                  alt="Our Story Image 1"
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="/images/initiatives/vision2.png"
                  alt="Our Story Image 2"
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            <div className="pt-8 border-t border-primary/10">
              <LogoButton 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-serif px-10 py-8 rounded-full mx-auto block group text-2xl"
              >
                <ArrowRight className="ml-3 w-8 h-8 group-hover:translate-x-1 transition-transform duration-300" />
              </LogoButton>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}