"use client"

import { motion } from "framer-motion"
import { LogoButton } from "@/components/ui/logo-button"
import Image from "next/image"
import { Heart, ArrowRight, Quote } from "lucide-react"

const impactStories = [
  {
    amount: 25,
    title: "Support a Student",
    story: "\"With just one pad kit, I can stay in school without worry. Now I dream of becoming a doctor.\" - Faith, Student",
    image: "/images/stories/student.jpg",
    impact: "Provides educational materials and pad kit for one student"
  },
  {
    amount: 50,
    title: "Empower a Group",
    story: "\"Our sewing circle doesn't just make pads - we share stories, support each other, and grow together.\" - Mary, Community Leader",
    image: "/images/stories/group.jpg",
    impact: "Supports menstrual health supplies for 5 girls"
  },
  {
    amount: 100,
    title: "Transform a Community",
    story: "\"The workshop changed everything. Now we're teaching other villages what we learned.\" - Sarah, Workshop Graduate",
    image: "/images/stories/community.jpg",
    impact: "Funds a community workshop and training session"
  }
]

export function DonationSection() {
  return (
    <section className="relative overflow-hidden bg-muted/20 py-24">
      <div className="absolute inset-0 bg-[url('/images/pattern-warm.png')] opacity-5" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Heart className="h-6 w-6 text-primary" />
          </span>
          
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Join Our Story of Change
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Every contribution weaves another thread into our tapestry of hope. 
            See how your support transforms lives and strengthens our herd.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {impactStories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-3xl font-bold text-primary">
                      ${story.amount}
                    </span>
                    <span className="text-sm text-muted-foreground">/once</span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-white">
                    {story.title}
                  </h3>
                </div>
              </div>

              <div className="relative space-y-4 p-6">
                <div className="flex gap-3">
                  <Quote className="h-8 w-8 shrink-0 text-primary opacity-50" />
                  <p className="italic text-muted-foreground">
                    {story.story}
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    <strong>Your Impact:</strong> {story.impact}
                  </p>
                  <LogoButton className="w-full group" size="lg">
                    Donate ${story.amount}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </LogoButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 rounded-3xl border border-border bg-card p-8 text-center"
        >
          <div className="mx-auto max-w-2xl">
            <h3 className="font-serif text-2xl font-bold">
              Create Your Own Impact Story
            </h3>
            <p className="mt-4 text-muted-foreground">
              Every donation, big or small, writes a new chapter in our story of change. 
              Choose an amount that speaks to your heart.
            </p>
            <div className="mt-6">
              <LogoButton variant="outline" size="lg">
                Make a Custom Donation
              </LogoButton>
            </div>
          </div>
        </motion.div>

        {/* Monthly Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <div className="rounded-3xl border border-border bg-gradient-to-r from-primary/5 to-secondary/5 p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative aspect-square overflow-hidden rounded-2xl md:aspect-auto">
                <Image
                  src="/images/monthly-impact.jpg"
                  alt="Monthly impact"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex flex-col justify-center space-y-6">
                <h3 className="font-serif text-2xl font-bold">
                  Join Our Monthly Giving Circle
                </h3>
                <p className="text-muted-foreground">
                  Become a sustaining member of our herd with a monthly gift. Your ongoing 
                  support helps us plan for the future and create lasting change.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Heart className="h-5 w-5 text-primary" />
                    </span>
                    <p className="text-sm text-muted-foreground">
                      <strong>Sustainable Impact:</strong> Your monthly gift provides 
                      consistent support for our programs
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Heart className="h-5 w-5 text-primary" />
                    </span>
                    <p className="text-sm text-muted-foreground">
                      <strong>Community Connection:</strong> Receive regular updates 
                      about the lives you're touching
                    </p>
                  </div>
                </div>
                <LogoButton size="lg">
                  Start Monthly Giving
                </LogoButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}