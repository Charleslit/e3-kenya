"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Mary Wanjiku",
    role: "Community Member",
    content: "E3 Kenya has transformed our community. The Osiligi Pad Project has made a real difference in girls' education.",
    image: "/images/testimonials/mary.jpg"
  },
  {
    name: "John Kamau",
    role: "Local Teacher",
    content: "The education support program has helped many students continue their studies who would otherwise have dropped out.",
    image: "/images/testimonials/john.jpg"
  },
  {
    name: "Sarah Muthoni",
    role: "Student Beneficiary",
    content: "Thanks to E3 Kenya's support, I can continue my education and pursue my dreams of becoming a doctor.",
    image: "/images/testimonials/sarah.jpg"
  }
]

export function TestimonialsSection() {
  return (
    <section className="container py-24 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-primary/10 to-transparent" />
      
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Community Voices
        </h2>
        <p className="mt-4 text-muted-foreground">
          Hear from the people whose lives have been impacted by our initiatives
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="mb-6 text-muted-foreground">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
} 