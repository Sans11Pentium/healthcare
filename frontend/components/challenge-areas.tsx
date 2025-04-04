import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HeartPulse, Users, Building2 } from "lucide-react"

export function ChallengeAreas() {
  return (
    <section className="py-16 px-6 bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Addressing Critical Healthcare Challenges</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our AI solutions target three key areas where technology can make the greatest impact in healthcare
            delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card className="border-l-4 border-l-pink-500">
            <CardHeader>
              <HeartPulse className="h-8 w-8 text-pink-500 mb-2" />
              <CardTitle>Maternal and Child Health</CardTitle>
              <CardDescription>Empowering frontline workers with AI tools</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Early detection of high-risk pregnancies</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Personalized dietary advice using locally available foods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Simplified data collection and patient history management</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <Users className="h-8 w-8 text-blue-500 mb-2" />
              <CardTitle>Healthcare Scheme Access</CardTitle>
              <CardDescription>Bridging awareness and accessibility gaps</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Automated mapping to eligible government schemes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Simplified application processes in local languages</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Voice-based assistance for non-literate populations</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-teal-500">
            <CardHeader>
              <Building2 className="h-8 w-8 text-teal-500 mb-2" />
              <CardTitle>Infrastructure Support</CardTitle>
              <CardDescription>Enhancing rural healthcare delivery</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Offline access to medical guidelines and best practices</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>AI-assisted preliminary diagnostics to save time</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Real-time consultations even with poor connectivity</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

