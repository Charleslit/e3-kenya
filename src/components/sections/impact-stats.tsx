import { Card } from "@/components/ui/card"

const stats = [
  {
    title: "Lives Impacted",
    value: "10,000+",
    description: "Community members reached"
  },
  {
    title: "Projects Completed",
    value: "25+",
    description: "Successful initiatives"
  },
  {
    title: "Communities Served",
    value: "15",
    description: "Across Kenya"
  }
]

export function ImpactStats() {
  return (
    <section className="container py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-6 text-center">
            <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
            <p className="text-xl font-semibold mb-2">{stat.title}</p>
            <p className="text-muted-foreground">{stat.description}</p>
          </Card>
        ))}
      </div>
    </section>
  )
} 