"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LogoButton } from "@/components/shared/logobutton"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "../ui/button"
import { useForm } from "react-hook-form"

interface ContactFormData {
  name: string
  email: string
  message: string
}

export function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>()

  return (
    <section className="container py-24">
      <div className="grid gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-muted-foreground">
            We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
          
          <div className="mt-8 space-y-4">
            <Card>
              <CardContent className="flex items-center gap-4 p-4">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <CardTitle className="text-base">Email</CardTitle>
                  <CardDescription>info@e3kenya.org</CardDescription>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="flex items-center gap-4 p-4">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <CardTitle className="text-base">Phone</CardTitle>
                  <CardDescription>+254 123 456 789</CardDescription>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="flex items-center gap-4 p-4">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <CardTitle className="text-base">Location</CardTitle>
                  <CardDescription>Nairobi, Kenya</CardDescription>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Input placeholder="First name" />
                  </div>
                  <div className="space-y-2">
                    <Input placeholder="Last name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Input type="email" placeholder="Email" />
                </div>
                <div className="space-y-2">
                  <Textarea placeholder="Your message" className="min-h-[150px]" />
                </div>
                <LogoButton
                  type="submit"
                  variant="default"
                  textStyle="shadow"
                  focusStyle="glow"
                  isLoading={isSubmitting}
                  loadingText="Sending..."
                  className="w-full"
                >
                  Send Message
                </LogoButton>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
} 