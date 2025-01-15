"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PayPalButton } from "./paypal-button"
import { StripePaymentElement } from "./stripe-payment-element"
import { useToast } from "@/components/ui/use-toast"

const donationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  amount: z.number().min(1, "Amount must be at least $1"),
  isRecurring: z.boolean().default(false),
})

type DonationFormData = z.infer<typeof donationSchema>

type DonationFormProps = {
  selectedAmount?: number | null
}

export function DonationForm({ selectedAmount }: DonationFormProps) {
  const [paymentMethod, setPaymentMethod] = useState<"stripe" | "paypal" | null>(null)
  const [clientSecret, setClientSecret] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<DonationFormData>({
    resolver: zodResolver(donationSchema),
    mode: "onChange",
    defaultValues: {
      amount: selectedAmount || 0,
      isRecurring: false,
    }
  })

  useEffect(() => {
    if (selectedAmount) {
      setValue("amount", selectedAmount)
    }
  }, [selectedAmount, setValue])

  const onSubmit = async (data: DonationFormData) => {
    try {
      setIsLoading(true)
      if (paymentMethod === "stripe") {
        const response = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...data,
            amount: Number(data.amount), // Ensure amount is a number
          }),
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || "Failed to create payment intent")
        }

        const { clientSecret } = await response.json()
        setClientSecret(clientSecret)
      } else if (paymentMethod === "paypal") {
        // Process PayPal payment
      } else {
        toast({
          title: "Error",
          description: "Please select a payment method",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error processing donation:", error)
      toast({
        title: "Error",
        description: "Failed to process donation. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Input
            {...register("firstName")}
            placeholder="First Name"
            className={errors.firstName ? "border-red-500" : ""}
          />
          {errors.firstName && (
            <p className="text-sm text-red-500 mt-1">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <Input
            {...register("lastName")}
            placeholder="Last Name"
            className={errors.lastName ? "border-red-500" : ""}
          />
          {errors.lastName && (
            <p className="text-sm text-red-500 mt-1">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <Input
          {...register("email")}
          type="email"
          placeholder="Email"
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Input
          {...register("amount", {
            valueAsNumber: true,
            onChange: (e) => {
              const value = parseFloat(e.target.value)
              if (!isNaN(value)) {
                setValue("amount", value)
              }
            }
          })}
          type="number"
          placeholder="Amount"
          min={1}
          step={0.01}
          className={errors.amount ? "border-red-500" : ""}
        />
        {errors.amount && (
          <p className="text-sm text-red-500 mt-1">{errors.amount.message}</p>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex gap-4">
          <Button
            type="button"
            variant={paymentMethod === "stripe" ? "default" : "outline"}
            onClick={() => setPaymentMethod("stripe")}
            className="flex-1"
          >
            Credit Card
          </Button>
          <Button
            type="button"
            variant={paymentMethod === "paypal" ? "default" : "outline"}
            onClick={() => setPaymentMethod("paypal")}
            className="flex-1"
          >
            PayPal
          </Button>
        </div>

        {paymentMethod === "stripe" && clientSecret && <StripePaymentElement clientSecret={clientSecret} />}
        {paymentMethod === "paypal" && <PayPalButton amount={0} onSuccess={function (details: any): void {
          throw new Error("Function not implemented.")
        } } />}
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Processing..." : "Complete Donation"}
      </Button>
    </form>
  )
}