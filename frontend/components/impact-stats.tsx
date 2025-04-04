import { Card, CardContent } from "@/components/ui/card"

export function ImpactStats() {
  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Our Impact</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">35%</div>
              <p className="text-sm text-muted-foreground">Reduction in maternal complications</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">42%</div>
              <p className="text-sm text-muted-foreground">Increase in healthcare scheme enrollment</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">25%</div>
              <p className="text-sm text-muted-foreground">More patients served by rural doctors</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-sm text-muted-foreground">Villages with improved healthcare access</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

