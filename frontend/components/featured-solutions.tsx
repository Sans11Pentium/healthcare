import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StarIcon } from "lucide-react"

const featuredSolutions = [
  {
    id: 1,
    title: "Maternal Risk Assessment",
    description:
      "AI tool for ASHA workers to identify high-risk pregnancies early based on symptoms and medical history.",
    impact: "Reduces maternal mortality by 35%",
    category: "Maternal Health",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Healthcare Scheme Navigator",
    description:
      "Multilingual voice assistant that helps rural populations discover and enroll in applicable healthcare schemes.",
    impact: "Increased scheme enrollment by 42%",
    category: "Healthcare Access",
    rating: 4.9,
  },
  {
    id: 3,
    title: "Rural Doctor Assistant",
    description:
      "Offline-capable AI tool providing medical guidelines and treatment recommendations for rural healthcare providers.",
    impact: "Serves 25% more patients daily",
    category: "Infrastructure",
    rating: 4.7,
  },
  {
    id: 4,
    title: "Emergency P2P Connect",
    description:
      "Low-bandwidth peer-to-peer connection system for emergency consultations between doctors and patients in remote areas.",
    impact: "Critical response time reduced by 58%",
    category: "Emergency Care",
    rating: 4.9,
  },
]

export function FeaturedSolutions() {
  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Featured Healthcare Solutions</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredSolutions.map((solution) => (
            <Card key={solution.id} className="group relative overflow-hidden transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{solution.title}</CardTitle>
                    <CardDescription className="mt-2">{solution.description}</CardDescription>
                  </div>
                  <Badge variant="secondary">{solution.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-1 text-yellow-500">
                  <StarIcon className="h-4 w-4 fill-current" />
                  <span className="text-sm font-medium">{solution.rating}</span>
                </div>
                <div className="mt-4">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    {solution.impact}
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <Button>Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

