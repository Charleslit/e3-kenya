import { NextResponse } from "next/server"
import { DonationService } from "@/lib/services/donation-service"

const donationService = new DonationService()

export async function GET() {
  try {
    const recentDonations = await donationService.getRecentDonations(10)
    return NextResponse.json({ donations: recentDonations })
  } catch (error) {
    console.error("Failed to fetch donations:", error)
    return NextResponse.json(
      { error: "Failed to fetch donations" },
      { status: 500 }
    )
  }
} 