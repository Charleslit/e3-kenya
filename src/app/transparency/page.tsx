'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PieChart, DollarSign, Users, Globe } from 'lucide-react'
import Link from 'next/link'

const reports = [
  {
    title: "Financial Allocation",
    icon: DollarSign,
    stats: [
      { label: "Program Expenses", value: "85%" },
      { label: "Administrative Costs", value: "10%" },
      { label: "Fundraising", value: "5%" }
    ]
  },
  {
    title: "Impact Metrics",
    icon: Users,
    stats: [
      { label: "Beneficiaries Reached", value: "2,800+" },
      { label: "Communities Served", value: "3" },
      { label: "Active Projects", value: "2" }
    ]
  },
  {
    title: "Project Distribution",
    icon: Globe,
    stats: [
      { label: "Maasai Mara", value: "60%" },
      { label: "Western Kenya", value: "25%" },
      { label: "Nairobi", value: "15%" }
    ]
  }
]

export default function TransparencyPage() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-24"
      >
        <h1 className="heading-1 mb-8">Transparency Report</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          We believe in complete transparency with our donors and stakeholders. 
          Here's a detailed breakdown of our operations, impact, and financial allocations.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reports.map((report, index) => {
            const Icon = report.icon
            return (
              <motion.div
                key={report.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <Icon className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>{report.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <dl className="space-y-4">
                      {report.stats.map((stat) => (
                        <div key={stat.label} className="flex justify-between">
                          <dt className="text-muted-foreground">{stat.label}</dt>
                          <dd className="font-semibold">{stat.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Annual Reports Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <h2 className="heading-2 mb-8">Annual Reports</h2>
          <div className="grid gap-4">
            <Card>
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <h3 className="font-semibold">2024 Annual Report</h3>
                  <p className="text-sm text-muted-foreground">
                    Detailed overview of our first year's operations and impact
                  </p>
                </div>
                <Link 
                  href="/reports/2024-annual-report.pdf" 
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground"
                >
                  Download PDF
                </Link>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </motion.div>
    </Container>
  )
} 