"use client"

import { DonationService } from "@/lib/services/donation-service"
import { formatCurrency } from "@/lib/utils"

interface RecentDonation {
  id: string
  amount: number
  firstName: string
  lastName: string
  createdAt: Date
}

const donationService = new DonationService()

export default async function DonationsPage() {
  const stats = await donationService.getDonationStats()
  const recentDonations = await donationService.getRecentDonations(20)

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Donations Overview</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <div className="p-6 bg-card rounded-lg">
          <h3 className="text-lg font-medium mb-2">Total Donations</h3>
          <p className="text-3xl font-bold">{stats.totalDonations}</p>
        </div>
        <div className="p-6 bg-card rounded-lg">
          <h3 className="text-lg font-medium mb-2">Total Amount</h3>
          <p className="text-3xl font-bold">{formatCurrency(stats.totalAmount)}</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Recent Donations</h2>
      <div className="space-y-4">
        {recentDonations.map((donation: RecentDonation) => (
          <div key={donation.id} className="p-4 bg-card rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">
                  {donation.firstName} {donation.lastName}
                </p>
                <p className="text-sm text-muted-foreground">
                  {new Date(donation.createdAt).toLocaleDateString()}
                </p>
              </div>
              <p className="font-bold">{formatCurrency(donation.amount)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 