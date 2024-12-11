import { NextRequest, NextResponse } from "next/server"
import { DonationService } from "@/lib/services/donation-service"
import type { DonationCreateInput } from "@/types/Donation"

interface PayPalOrderDetails {
  id: string
  payer: {
    name: {
      given_name: string
      surname: string
    }
    email_address: string
  }
  purchase_units: Array<{
    amount: {
      value: string
      currency_code: string
    }
  }>
}

const donationService = new DonationService()

export async function POST(request: NextRequest) {
  try {
    console.log("Received PayPal webhook request")
    const body = await request.json()
    console.log("PayPal webhook body:", JSON.stringify(body, null, 2))

    const { orderID, details } = body as { orderID: string; details: PayPalOrderDetails }

    if (!orderID || !details) {
      console.error("Missing required fields")
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const {
      id: paymentId,
      payer: {
        name: { given_name: firstName, surname: lastName },
        email_address: email,
      },
      purchase_units: [{ amount }],
    } = details

    console.log("Extracted donation details:", {
      amount,
      paymentId,
      email,
      firstName,
      lastName,
    })

    // Verify payment with PayPal
    await donationService.verifyPayPalPayment({
      paymentId,
      email,
      firstName,
      lastName,
    })

    // Prepare donation data
    const donationData: DonationCreateInput = {
      amount: parseFloat(amount.value),
      currency: amount.currency_code,
      status: "successful",
      paymentMethod: "paypal",
      paymentId,
      firstName,
      lastName,
      email,
      isAnonymous: false,
      metadata: {
        rawPaymentData: details,
      },
    }

    // Save donation to database
    const donation = await donationService.createDonation(donationData)

    console.log("Donation saved successfully:", donation)

    return NextResponse.json({ success: true, donation })
  } catch (error) {
    console.error("Failed to process PayPal donation:", error)
    return NextResponse.json(
      { error: "Failed to process donation", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    )
  }
}