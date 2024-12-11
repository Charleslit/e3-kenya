import { NextResponse } from "next/server"
import Stripe from "stripe"
import { z } from "zod"

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set in environment variables")
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-11-20.acacia",
})

const paymentSchema = z.object({
  amount: z.number().min(1),
  email: z.string().email(),
  isRecurring: z.boolean(),
  firstName: z.string(),
  lastName: z.string(),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const validatedData = paymentSchema.parse(body)
    
    const { amount, email, isRecurring, firstName, lastName } = validatedData

    const customer = await stripe.customers.create({
      email,
      name: `${firstName} ${lastName}`,
      metadata: {
        donationType: isRecurring ? "recurring" : "one-time",
      },
    })

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: "usd",
      customer: customer.id,
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        donationType: isRecurring ? "recurring" : "one-time",
        email,
        name: `${firstName} ${lastName}`,
      },
    })

    return NextResponse.json({ clientSecret: paymentIntent.client_secret })
  } catch (error) {
    console.error("Payment Intent Error:", error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid payment data" },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
} 