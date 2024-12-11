import { NextRequest, NextResponse } from "next/server"
import { DonationService } from "@/lib/services/donation-service"
import type { DonationCreateInput } from "@/types/Donation"

const donationService = new DonationService()

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const startDate = searchParams.get("startDate")
    const endDate = searchParams.get("endDate")
    const initiative = searchParams.get("initiative")
    const campaign = searchParams.get("campaign")

    const stats = await donationService.getDonationStats({
      startDate: startDate ? new Date(startDate) : undefined,
      endDate: endDate ? new Date(endDate) : undefined,
      initiative: initiative || undefined,
      campaign: campaign || undefined,
    })

    return NextResponse.json(stats)
  } catch (error) {
    console.error("Error tracking donations:", error)
    return NextResponse.json(
      { error: "Failed to track donations" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const {
      amount,
      currency,
      status,
      paymentMethod,
      paymentId,
      firstName,
      lastName,
      email,
      isAnonymous = false,
      initiative,
      campaign,
      metadata,
    } = await request.json()

    // Validate required fields
    if (!amount || !currency || !status || !paymentMethod || !paymentId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Create donation data
    const donationData: DonationCreateInput = {
      amount: parseFloat(amount),
      currency,
      status,
      paymentMethod,
      paymentId,
      firstName,
      lastName,
      email,
      isAnonymous,
      initiative,
      campaign,
      metadata,
    }

    // Save donation to database
    const donation = await donationService.createDonation(donationData)

    return NextResponse.json({ success: true, donation })
  } catch (error) {
    console.error("Error tracking donation:", error)
    return NextResponse.json(
      { error: "Failed to track donation" },
      { status: 500 }
    )
  }
}