"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DonationTiers, type DonationTier } from "./tiers"
import { PayPalButton } from "./paypal-button"
import { StripePaymentElement } from "./stripe-payment-element"

const donationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  amount: z.number().min(1, "Amount must be at least $1"),
  isRecurring: z.boolean().default(false),
})

type DonationFormData = z.infer<typeof donationSchema>

export function DonationForm() {
  const [selectedTier, setSelectedTier] = useState<DonationTier | null>(null)
  const [clientSecret, setClientSecret] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<DonationFormData>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      amount: 0,
      isRecurring: false,
    },
  })

  const handleTierSelect = (tier: DonationTier) => {
    setSelectedTier(tier)
    form.setValue("amount", tier.amount)
  }

  const onSubmit = async (data: DonationFormData) => {
    try {
      setIsLoading(true)
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to create payment intent")
      }

      const { clientSecret } = await response.json()
      setClientSecret(clientSecret)
    } catch (error) {
      console.error("Payment error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      <DonationTiers
        selectedTierId={selectedTier?.id ?? ''}
        onSelectTier={handleTierSelect}
      />

      <Card>
        <CardContent className="p-6">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" autoComplete="on">
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                {...form.register("firstName")}
                placeholder="First Name"
                className="w-full"
                autoComplete="given-name"
              />
              <Input
                {...form.register("lastName")}
                placeholder="Last Name"
                className="w-full"
                autoComplete="family-name"
              />
            </div>

            <Input
              {...form.register("email")}
              type="email"
              placeholder="Email"
              className="w-full"
              autoComplete="email"
            />

            <Input
              {...form.register("amount", {
                setValueAs: (value) => (value === "" ? 0 : parseFloat(value)),
              })}
              type="number"
              placeholder="Amount (USD)"
              className="w-full"
              value={selectedTier?.amount || form.watch("amount") || ""}
              onChange={(e) => {
                form.setValue("amount", parseFloat(e.target.value))
                setSelectedTier(null)
              }}
              autoComplete="transaction-amount"
            />

            {clientSecret ? (
              <StripePaymentElement clientSecret={clientSecret} />
            ) : (
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Processing..." : "Continue to Payment"}
              </Button>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  )
} 