import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const initiatives = [
  {
    title: "Osiligi Pad Project",
    description: "Providing sustainable menstrual health solutions",
    image: "/images/initiatives/osiligi.jpg"
  },
  {
    title: "Education Support",
    description: "Empowering through knowledge and skills",
    image: "/images/initiatives/education.jpg"
  },
  {
    title: "Community Development",
    description: "Building stronger communities together",
    image: "/images/initiatives/community.jpg"
  }
]

export function InitiativeHighlights() {
  return (
    <section className="container py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Our Initiatives</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {initiatives.map((initiative) => (
          <Card key={initiative.title} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={initiative.image}
                alt={initiative.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{initiative.title}</CardTitle>
              <CardDescription>{initiative.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Add more content or call-to-action buttons here */}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
} 