import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-950 dark:to-teal-950" />
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">AI for Healthcare Access Everywhere</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Bridging critical gaps in healthcare accessibility, affordability, and quality through innovative AI
            solutions that work for everyone, everywhere.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/solutions">
              <Button size="lg" className="rounded-full">
                Explore Solutions
              </Button>
            </Link>
            <Link href="/contribute">
              <Button size="lg" variant="outline" className="rounded-full">
                Contribute
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

