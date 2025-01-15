'use client'

import { Section } from '@/components/ui/section'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { theme } from '@/lib/theme'
import { cn } from '@/lib/utils'

export function HerdInitiativesSection() {
  const initiative = `In the summer of 2024, we embarked on our first initiative by partnering with MWEGO, a women’s empowerment group based in Kenya's Maasai Mara. Together, we launched the Osiligi Pad Project which carries a name rich in cultural significance; "Osiligi" translates to "Hope" in the local Maasai language, symbolizing the bright future envisioned for girls and women who will have greater access to sanitary products and menstrual health education. 

Throughout the summer and fall, we reached out to others to join us in producing reusable, eco-friendly menstrual pads, setting a goal of finishing 2,000 pads to distribute to adolescent girls who live within MWEGO's boundary.  In October 2024, an E3 team traveled to the Mara, taking with them 2,500 reusable menstrual pads and five small, portable sewing machines. During a three-day training session, our dedicated Sisterherd Strong team engaged with an inspiring group of 25 women and 10 adolescent girls to teach skills necessary to make their own pads and create a self-sustaining program, equipping the girls and women with valuable skills that can lead to income generation and greater independence.

Exciting plans are already in motion for a team to return in June 2025, where they will conduct an even more comprehensive training session, further empowering the girls and women with essential skills and resources.

This marks the beginning of our journey. A dedicated member of the Sisterherd Strong Board has successfully distributed 300 sanitary pads in western Kenya. Additionally, we are actively collaborating with colleagues to facilitate the delivery of more than 500 pads to two different locations in Nairobi. Once we complete follow-up evaluations to assess the impact of our initial distribution, we plan to expand the Sisterherd Strong Pad Project to support an even larger number of adolescent girls.  Furthermore, we wholeheartedly encourage and welcome the initiation of other projects that resonate with and further our vision and mission to empower young women.
`
  return (
    <Section className="bg-gradient-to-b from-primary/5 to-background">
      <motion.div>
        <h2 className={cn(
          theme.typography.sizes.h2,
          "font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary text-center"
        )}>
          HERD INITIATIVES
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <p className={cn(
            "text-lg md:text-xl text-muted-foreground leading-relaxed",
            "max-w-2xl mx-auto"
          )}>
            In the summer of 2024, we embarked on our first initiative by partnering with MWEGO, a women’s empowerment group based in Kenya's Maasai Mara. Together, we launched the Osiligi Pad Project which carries a name rich in cultural significance; "Osiligi" translates to "Hope" in the local Maasai language, symbolizing the bright future envisioned for girls and women who will have greater access to sanitary products and menstrual health education.
          </p>

          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/images/initiatives/osiligi.png" 
              alt="Women working on the Osiligi Pad Project" 
              layout="fill" 
              objectFit="cover"
            />
          </div>

          <p className={cn(
            theme.typography.sizes.body,
            "text-muted-foreground leading-relaxed"
          )}>
            Throughout the summer and fall, we reached out to others to join us in producing reusable, eco-friendly menstrual pads, setting a goal of finishing 2,000 pads to distribute to adolescent girls who live within MWEGO's boundary.  In October 2024, an E3 team traveled to the Mara, taking with them 2,500 reusable menstrual pads and five small, portable sewing machines. During a three-day training session, our dedicated Sisterherd Strong team engaged with an inspiring group of 25 women and 10 adolescent girls to teach skills necessary to make their own pads and create a self-sustaining program, equipping the girls and women with valuable skills that can lead to income generation and greater independence.
          </p>

          <blockquote className="border-l-4 border-primary pl-4 italic text-xl md:text-2xl font-serif">
            "Osiligi is more than a project. It's a beacon of hope, a symbol of empowerment, and a testament to the 
            strength of community."
          </blockquote>

          <p className={cn(
            theme.typography.sizes.body,
            "text-muted-foreground leading-relaxed"
          )}>
            Exciting plans are already in motion for a team to return in June 2025, where they will conduct an even more comprehensive training session, further empowering the girls and women with essential skills and resources.
          </p>

          <p className={cn(
            theme.typography.sizes.body,
            "text-muted-foreground leading-relaxed"
          )}>
            This marks the beginning of our journey. A dedicated member of the Sisterherd Strong Board has successfully distributed 300 sanitary pads in western Kenya. Additionally, we are actively collaborating with colleagues to facilitate the delivery of more than 500 pads to two different locations in Nairobi. Once we complete follow-up evaluations to assess the impact of our initial distribution, we plan to expand the Sisterherd Strong Pad Project to support an even larger number of adolescent girls.  Furthermore, we wholeheartedly encourage and welcome the initiation of other projects that resonate with and further our vision and mission to empower young women.
          </p>

          <div className="bg-primary/10 p-6 rounded-lg shadow-inner">
            <h3 className={cn(
              theme.typography.sizes.h3,
              "font-serif text-primary mb-4"
            )}>
            </h3>
          </div>

          <p className={cn(
            theme.typography.sizes.body,
            "text-muted-foreground leading-relaxed"
          )}>
          </p>
        </div>

        <motion.h2 
          className={cn(
            theme.typography.sizes.h2,
            "font-serif text-primary mt-16 mb-8 text-center"
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
        </motion.h2>
      </motion.div>
    </Section>
  )
}

export default HerdInitiativesSection

