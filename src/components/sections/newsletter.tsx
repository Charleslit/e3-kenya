"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"
import { useAsyncError } from "@/hooks/use-async-error"
import { ErrorAlert } from "@/components/ui/error-alert"

export function NewsletterSection() {
  const { error, isLoading, withErrorHandling, clearError } = useAsyncError()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await withErrorHandling(async () => {
      const formData = new FormData(e.currentTarget)
      const email = formData.get("email")
      
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error("Failed to subscribe to newsletter")
      }

      // Handle success
    })
  }

  return (
    <section className="container py-24">
      <Card className="bg-primary-foreground">
        <CardContent className="grid gap-12 lg:grid-cols-2 p-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Mail className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Stay Updated
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Subscribe to our newsletter to receive updates about our initiatives,
              success stories, and ways you can help make a difference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            {error && (
              <ErrorAlert message={error.message} onDismiss={clearError} />
            )}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="flex-1"
                required
              />
              <Button size="lg" type="submit" disabled={isLoading}>
                {isLoading ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
            <p className="mt-4 text-sm text-muted-foreground">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </CardContent>
      </Card>
    </section>
  )
} 