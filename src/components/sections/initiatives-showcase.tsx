'use client'

import { Section } from '@/components/ui/section'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { theme } from '@/lib/theme'
import { cn } from '@/lib/utils'

export function HerdInitiativesSection() {
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
            During the summer of 2024, we embarked on an inspiring journey. In partnership with MWEGO, a women's 
            empowerment group in Maasai Mara, we initiated a project that would change lives. Our mission? To produce 
            reusable, eco-friendly menstrual pads in the United States and distribute them to adolescent girls in six 
            schools across the Mara.
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
            The local Maasai girls named it the Osiligi Pad Project. Osiligi, in the Maa language, means hope. And hope 
            is exactly what this project aims to bring. Beyond providing girls with sanitary products, we seek to empower 
            them with knowledge. Our goal is to teach girls and women how to make these pads themselves, creating a 
            self-sustaining program that not only meets a critical community need but also provides an opportunity to learn 
            a valuable, income-producing skill.
          </p>

          <blockquote className="border-l-4 border-primary pl-4 italic text-xl md:text-2xl font-serif">
            "Osiligi is more than a project. It's a beacon of hope, a symbol of empowerment, and a testament to the 
            strength of community."
          </blockquote>

          <p className={cn(
            theme.typography.sizes.body,
            "text-muted-foreground leading-relaxed"
          )}>
            In October 2024, our journey took a significant step forward. An E3 team traveled to the Mara, carrying with 
            them 2500 reusable menstrual pads and 5 small, portable sewing machines. For three inspiring days, our 
            Sisterherd Strong team engaged with 25 women and 10 adolescent girls. Together, they traced and cut out pad 
            patterns, practiced sewing skills, and shared knowledge and laughter.
          </p>

          <p className={cn(
            theme.typography.sizes.body,
            "text-muted-foreground leading-relaxed"
          )}>
            As the training session concluded, we witnessed the fruits of our collective labor. The 2500 pads were 
            distributed to 5 area representatives, ready to make their way to local schools. But this is just the beginning 
            of our story. Plans are already underway for a team to return in June 2025 for another, more in-depth training 
            session.
          </p>

          <div className="bg-primary/10 p-6 rounded-lg shadow-inner">
            <h3 className={cn(
              theme.typography.sizes.h3,
              "font-serif text-primary mb-4"
            )}>
              The Ripple Effect
            </h3>
            <p className={cn(
              theme.typography.sizes.body,
              "text-muted-foreground leading-relaxed"
            )}>
              Our initiative is spreading, creating ripples of change across Kenya. A Sisterherd Strong board member has 
              distributed 300 pads in western Kenya. We're also working with colleagues to deliver over 500 pads in two 
              locations in Nairobi. Once we complete follow-up evaluations from our initial distribution, the Sisterherd 
              Strong Pad Project will expand, reaching even more adolescent girls.
            </p>
          </div>

          <p className={cn(
            theme.typography.sizes.body,
            "text-muted-foreground leading-relaxed"
          )}>
            This is more than a project; it's a movement. As we continue to grow and evolve, we encourage and welcome other 
            initiatives that align with our vision and mission. Together, we're writing a story of empowerment, one pad at 
            a time.
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

