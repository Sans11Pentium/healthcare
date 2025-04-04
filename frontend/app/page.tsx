import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { FeaturedSolutions } from "@/components/featured-solutions"
import { ChallengeAreas } from "@/components/challenge-areas"
import { ImpactStats } from "@/components/impact-stats"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <ChallengeAreas />
        <FeaturedSolutions />
        <ImpactStats />
      </main>
      <Footer />
    </div>
  )
}

