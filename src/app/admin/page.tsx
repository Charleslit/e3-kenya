"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Users, FileText, TrendingUp } from "lucide-react"
import { DonationsChart } from "@/components/admin/charts/donations-chart"
import { ImpactMetrics } from "@/components/admin/charts/impact-metrics"
import { DonorAnalytics } from "@/components/admin/analytics/donor-analytics"
import { VolunteerAnalytics } from "@/components/admin/analytics/volunteer-analytics"

const stats = [
  {
    title: "Total Donations",
    value: "$12,345",
    description: "Last 30 days",
    icon: DollarSign,
    trend: "+12%"
  },
  {
    title: "Active Donors",
    value: "123",
    description: "Monthly recurring",
    icon: Users,
    trend: "+5%"
  },
  {
    title: "Projects",
    value: "15",
    description: "Currently active",
    icon: FileText,
    trend: "+2"
  },
  {
    title: "Impact Growth",
    value: "+25%",
    description: "Year over year",
    icon: TrendingUp,
    trend: "+8%"
  }
]

const chartData = {
  donations: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Donations",
        data: [12000, 19000, 15000, 25000, 22000, 30000],
        borderColor: "hsl(var(--primary))",
        backgroundColor: "hsl(var(--primary) / 0.1)",
      },
    ],
  },
  impact: {
    labels: ["Education", "Health", "Economic", "Social"],
    datasets: [
      {
        data: [40, 25, 20, 15],
        backgroundColor: [
          "hsl(var(--primary))",
          "hsl(var(--secondary))",
          "hsl(var(--accent))",
          "hsl(var(--muted))",
        ],
        borderColor: ["#fff", "#fff", "#fff", "#fff"],
        borderWidth: 2,
      },
    ],
  },
  donors: {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "New Donors",
        data: [65, 85, 95, 120],
        backgroundColor: "hsl(var(--primary))",
      },
    ],
  },
}

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="flex items-center space-x-2">
                    <p className="text-xs text-muted-foreground">
                      {stat.description}
                    </p>
                    <span className="text-xs text-green-500">
                      {stat.trend}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <DonationsChart data={chartData.donations} />
        <ImpactMetrics data={chartData.impact} />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <DonorAnalytics data={chartData.donors} />
        <VolunteerAnalytics />
      </div>
    </div>
  )
}