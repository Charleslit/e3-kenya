import { NextRequest, NextResponse } from "next/server"
import { headers } from "next/headers"
import Stripe from "stripe"
import { DonationService } from "@/lib/services/donation-service"

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set")
}

if (!process.env.STRIPE_WEBHOOK_SECRET) {
  throw new Error("STRIPE_WEBHOOK_SECRET is not set")
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-11-20.acacia",
})

const donationService = new DonationService()

export async function POST(request: NextRequest) {
  const body = await request.text()
  const headerList = await headers()
  const signature = headerList.get("stripe-signature")

  if (!signature) {
    return NextResponse.json(
      { error: "Missing stripe-signature header" },
      { status: 400 }
    )
  }

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )

    if (event.type === "payment_intent.succeeded") {
      const paymentIntent = event.data.object as Stripe.PaymentIntent
      const customerData = await stripe.customers.retrieve(
        paymentIntent.customer as string
      ) as Stripe.Customer

      if ('deleted' in customerData) {
        throw new Error("Customer was deleted")
      }

      // Save donation to database
      await donationService.createDonation({
        amount: paymentIntent.amount / 100,
        currency: paymentIntent.currency.toUpperCase(),
        status: "successful",
        paymentMethod: "stripe",
        paymentId: paymentIntent.id,
        firstName: customerData.name?.split(" ")[0] || "Anonymous",
        lastName: customerData.name?.split(" ")[1] || "Donor",
        email: customerData.email || "anonymous@example.com",
        isAnonymous: !customerData.email,
        metadata: {
          rawPaymentData: paymentIntent,
        },
      })
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Webhook Error:", error)
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 400 }
    )
  }
} 