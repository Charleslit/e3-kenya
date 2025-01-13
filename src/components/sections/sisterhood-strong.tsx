"use client"

import Image from 'next/image'
import { Section } from '@/components/ui/section'
import { motion } from 'framer-motion'
import { theme } from '@/lib/theme'
import { cn } from '@/lib/utils'
import { LogoButton } from '@/components/shared/logobutton'
import { ArrowRight, BookOpen, ChevronDown, Star, Target } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function SisterherdStrongSection1() {
  // return (
  //   <div className="min-h-screen bg-gradient-to-b from-background to-background/5">
  

  //     {/* Vision & Mission Section */}
  //     <section className="py-20 px-4">
  //       <div className="container mx-auto space-y-20">
  //         {/* Vision */}
  //         <motion.div 
  //           initial={{ opacity: 0, y: 20 }}
  //           whileInView={{ opacity: 1, y: 0 }}
  //           viewport={{ once: true }}
  //           className="grid md:grid-cols-2 gap-8 items-center"
  //         >
  //           <Card className="p-6 space-y-4 bg-primary/5 border-none">
  //             <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
  //             <p className="text-xl font-medium text-primary/90">
  //               A Kenya Where Every Woman and Girl Has the Opportunity to Make Her Own Decisions
  //             </p>
  //             <p className="text-muted-foreground">
  //               At E3 we believe in a world where every Kenyan girl and woman is empowered to be an active participant 
  //               in shaping her own life and community. We don't just bring solutions; we work hand-in-hand with local 
  //               women and girls to develop sustainable programs that reflect their needs and aspirations.
  //             </p>
  //           </Card>
            
  //           <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
  //             <div 
  //               className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-500"
  //               style={{ backgroundImage: "url('/images/backgrounds/vision.png')" }}
  //             />
  //           </div>
  //         </motion.div>

  //         {/* Mission */}
  //         <motion.div 
  //           initial={{ opacity: 0, y: 20 }}
  //           whileInView={{ opacity: 1, y: 0 }}
  //           viewport={{ once: true }}
  //           className="grid md:grid-cols-2 gap-8 items-center"
  //         >
  //           <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl md:order-2">
  //             <div 
  //               className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-500"
  //               style={{ backgroundImage: "url('/images/backgrounds/mission.png')" }}
  //             />
  //           </div>

  //           <Card className="p-6 space-y-4 bg-secondary/5 border-none md:order-1">
  //             <h2 className="text-3xl font-bold text-secondary">Our Mission</h2>
  //             <p className="text-xl font-medium text-secondary/90">
  //               To Encourage, Engage, and Empower Kenyan Girls and Women
  //             </p>
  //             <p className="text-muted-foreground">
  //               Whether it's through education, mentorship, or creating income-generating programs, we are committed to 
  //               engaging with and empowering Kenyan girls and women as they seek greater freedoms and opportunities 
  //               in their communities.
  //             </p>
  //           </Card>
  //         </motion.div>

  //         <motion.div 
  //           initial={{ opacity: 0, y: 20 }}
  //           whileInView={{ opacity: 1, y: 0 }}
  //           viewport={{ once: true }}
  //           className="text-center"
  //         >
  //           <motion.div 
  //             initial={{ opacity: 0, y: 20 }}
  //             whileInView={{ opacity: 1, y: 0 }}
  //             viewport={{ once: true }}
  //             className="relative p-6 space-y-4 bg-secondary/5 border-none rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500"
  //           >
  //             <h2 className="text-3xl font-bold text-secondary">Our Story</h2>
  //             <p className="text-muted-foreground">
  //               E3 was founded in a setting where many great ideas emerge—around a kitchen table where a small group of friends and family discussed the stigma surrounding menstruation, the challenges many face in affording period products, and the importance of empowering girls and women to live their daily lives with confidence throughout the month.
  //             </p>
  //             <p className="text-muted-foreground">
  //               We argued and laughed while researching eco-friendly and absorbent fabrics, conducting absorbency tests, and weighing the pros and cons of various designs. Our goal was to create comfortable and effective pads that would not harm the environment while providing girls and women with the dignity and freedom they deserve.
  //             </p>
  //           </motion.div>
  //           <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl md:order-2">
  //             <div 
  //               className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-500"
  //               style={{ backgroundImage: "url('/images/backgrounds/mission.png')" }}
  //             />
  //           </div>
  //           <></>
  //           <LogoButton 
  //             size="lg"
  //             className="px-8 py-6 text-lg hover:scale-105 transition-transform duration-300"
  //           >
  //             Support Our Mission
  //           </LogoButton>
  //         </motion.div>
  //       </div>
  //     </section>
  //   </div>
  // );


  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/50 to-background/5 py-24">
      <div className="container mx-auto px-4 space-y-32">
        {/* Editorial Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-6 max-w-4xl mx-auto"
        >
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary italic">
            Our Purpose
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-serif leading-relaxed">
            Transforming lives through empowerment, education, and sustainable change
          </p>
          <div className="w-32 h-px bg-primary/20 mx-auto" />
        </motion.div>

        {/* Vision Section - Blog Style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center"
        >
          <Card className="md:col-span-7 p-12 space-y-8 bg-white/5 backdrop-blur-sm border-none shadow-2xl rounded-2xl hover:shadow-primary/20 transition-all duration-500">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm uppercase tracking-widest text-primary/70">Our Vision</span>
              </div>
              <h2 className="font-serif text-4xl font-bold text-primary leading-tight">
                A Kenya Where Every Woman and Girl Has the Opportunity to Make Her Own Decisions
              </h2>
              <div className="w-20 h-px bg-primary/20" />
              <p className="text-xl text-muted-foreground leading-relaxed font-serif">
                At E3 we believe in a world where every Kenyan girl and woman is empowered to be an active participant 
                in shaping her own life and community. We don't just bring solutions; we work hand-in-hand with local 
                women and girls to develop sustainable programs that reflect their needs and aspirations.
              </p>
            </div>
          </Card>
          
          <div className="md:col-span-5 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl group">
            <div 
              className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
              style={{ backgroundImage: "url('/images/backgrounds/vision.png')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>

        {/* Mission Section - Blog Style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center"
        >
          <div className="md:col-span-5 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl group">
            <div 
              className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
              style={{ backgroundImage: "url('/images/backgrounds/mission.png')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          <Card className="md:col-span-7 p-12 space-y-8 bg-white/5 backdrop-blur-sm border-none shadow-2xl rounded-2xl hover:shadow-secondary/20 transition-all duration-500">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <span className="text-sm uppercase tracking-widest text-secondary/70">Our Mission</span>
              </div>
              <h2 className="font-serif text-4xl font-bold text-secondary leading-tight">
                To Encourage, Engage, and Empower Kenyan Girls and Women
              </h2>
              <div className="w-20 h-px bg-secondary/20" />
              <p className="text-xl text-muted-foreground leading-relaxed font-serif">
                Whether it's through education, mentorship, or creating income-generating programs, we are committed to 
                engaging with and empowering Kenyan girls and women as they seek greater freedoms and opportunities 
                in their communities.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Story Section - Editorial Style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-12 space-y-8 bg-white/5 backdrop-blur-sm border-none shadow-2xl rounded-2xl">
            <div className="space-y-6 text-center">
              <div className="flex items-center gap-4 justify-center">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm uppercase tracking-widest text-primary/70">Our Story</span>
              </div>
              <h2 className="font-serif text-4xl font-bold text-primary leading-tight">
                From Kitchen Table to Community Impact
              </h2>
              <div className="w-20 h-px bg-primary/20 mx-auto" />
            </div>
            
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed font-serif">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                E3 was founded in a setting where many great ideas emerge—around a kitchen table where a small group of friends and family discussed the stigma surrounding menstruation, the challenges many face in affording period products, and the importance of empowering girls and women to live their daily lives with confidence throughout the month.
              </p>
              <p>
                We argued and laughed while researching eco-friendly and absorbent fabrics, conducting absorbency tests, and weighing the pros and cons of various designs. Our goal was to create comfortable and effective pads that would not harm the environment while providing girls and women with the dignity and freedom they deserve.
              </p>
            </div>

            <div className="pt-8 border-t border-primary/10">
              <LogoButton 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-serif px-8 py-6 rounded-full mx-auto block group"
              >
                Support Our Mission
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </LogoButton>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
