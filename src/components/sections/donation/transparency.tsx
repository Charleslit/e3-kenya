"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { PieChart } from "@/components/ui/pie-chart"

const allocationData = [
  {
    name: "Program Expenses",
    value: 85,
    color: "var(--primary)",
    description: "Direct support for our initiatives and community programs",
  },
  {
    name: "Administrative",
    value: 10,
    color: "var(--secondary)",
    description: "Essential operations and management",
  },
  {
    name: "Fundraising",
    value: 5,
    color: "var(--muted)",
    description: "Outreach and donor engagement",
  },
]

export function TransparencySection() {
  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl font-bold mb-4">Fund Allocation</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We are committed to transparency and responsible stewardship of your
          donations. Here&apos;s how we allocate funds to maximize impact.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <PieChart data={allocationData} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Detailed Breakdown</h3>
              <div className="space-y-4">
                {allocationData.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{item.name}</span>
                      <span>{item.value}%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${item.value}%`,
                          backgroundColor: item.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
} 