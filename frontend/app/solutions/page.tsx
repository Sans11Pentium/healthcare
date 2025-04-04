"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { StarIcon, Filter } from "lucide-react"
import { useState } from "react"

const solutions = [
  {
    id: 1,
    title: "Maternal Risk Assessment",
    description:
      "AI tool for ASHA workers to identify high-risk pregnancies early based on symptoms and medical history.",
    impact: "Reduces maternal mortality by 35%",
    category: "Maternal Health",
    rating: 4.8,
    languages: ["Hindi", "English", "Bengali", "Tamil"],
    offlineCapable: true,
  },
  {
    id: 2,
    title: "Healthcare Scheme Navigator",
    description:
      "Multilingual voice assistant that helps rural populations discover and enroll in applicable healthcare schemes.",
    impact: "Increased scheme enrollment by 42%",
    category: "Healthcare Access",
    rating: 4.9,
    languages: ["Hindi", "English", "Marathi", "Telugu", "Kannada"],
    offlineCapable: true,
  },
  {
    id: 3,
    title: "Rural Doctor Assistant",
    description:
      "Offline-capable AI tool providing medical guidelines and treatment recommendations for rural healthcare providers.",
    impact: "Serves 25% more patients daily",
    category: "Infrastructure",
    rating: 4.7,
    languages: ["English", "Hindi"],
    offlineCapable: true,
  },
  {
    id: 4,
    title: "Anemia Detection & Management",
    description:
      "AI-powered tool to help detect anemia in children and provide personalized dietary recommendations using locally available foods.",
    impact: "20% reduction in childhood anemia",
    category: "Child Health",
    rating: 4.6,
    languages: ["Hindi", "English", "Bengali", "Gujarati"],
    offlineCapable: true,
  },
  {
    id: 5,
    title: "Patient History Organizer",
    description:
      "Tool that organizes past health data into structured reports for doctors and nurses for quick analysis and maintaining patient history.",
    impact: "40% reduction in administrative time",
    category: "Infrastructure",
    rating: 4.5,
    languages: ["English", "Hindi"],
    offlineCapable: false,
  },
  {
    id: 6,
    title: "Low-Bandwidth Telemedicine",
    description:
      "Enables real-time doctor-patient consultations even with poor connectivity through optimized data transmission.",
    impact: "Connected 300+ remote villages",
    category: "Infrastructure",
    rating: 4.8,
    languages: ["Hindi", "English", "Bengali", "Tamil", "Telugu"],
    offlineCapable: false,
  },
]

export default function SolutionsPage() {
  const [category, setCategory] = useState("all")

  const filteredSolutions =
    category === "all"
      ? solutions
      : solutions.filter((solution) => solution.category.toLowerCase() === category.toLowerCase())

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full md:w-64 space-y-6">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filters
              </h2>
              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="maternal health">Maternal Health</SelectItem>
                    <SelectItem value="child health">Child Health</SelectItem>
                    <SelectItem value="healthcare access">Healthcare Access</SelectItem>
                    <SelectItem value="infrastructure">Infrastructure</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Language Support</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Languages</SelectItem>
                    <SelectItem value="hindi">Hindi</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="bengali">Bengali</SelectItem>
                    <SelectItem value="tamil">Tamil</SelectItem>
                    <SelectItem value="telugu">Telugu</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Features</label>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="offline" className="rounded border-gray-300" />
                  <label htmlFor="offline" className="text-sm">
                    Offline Capable
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="voice" className="rounded border-gray-300" />
                  <label htmlFor="voice" className="text-sm">
                    Voice Interface
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Solutions Grid */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <Input placeholder="Search solutions..." className="max-w-md" />
              <Button>Search</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSolutions.map((solution) => (
                <Card key={solution.id} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-start gap-2">
                      <span>{solution.title}</span>
                      <Badge variant="secondary">{solution.category}</Badge>
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{solution.description}</p>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex items-center gap-2">
                      <StarIcon className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <span className="text-sm">{solution.rating}</span>
                    </div>
                    <div className="mt-3">
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {solution.impact}
                      </Badge>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {solution.languages.slice(0, 2).map((lang) => (
                        <Badge key={lang} variant="outline" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                      {solution.languages.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{solution.languages.length - 2} more
                        </Badge>
                      )}
                    </div>
                    {solution.offlineCapable && (
                      <div className="mt-2">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          Offline Capable
                        </Badge>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <Button>View Details</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

