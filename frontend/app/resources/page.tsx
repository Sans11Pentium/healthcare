import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { FileText, Video, BookOpen, Download } from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Healthcare AI Resources</h1>
            <p className="text-muted-foreground">
              Access guides, research, and tools to help you build effective healthcare AI solutions for underserved
              communities.
            </p>
          </div>

          <Tabs defaultValue="guides">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="guides">Guides</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
              <TabsTrigger value="tools">Tools & Data</TabsTrigger>
            </TabsList>

            <TabsContent value="guides" className="mt-6">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <FileText className="h-5 w-5 text-blue-500" />
                          Building Offline-Capable Healthcare Apps
                        </CardTitle>
                        <CardDescription>
                          A comprehensive guide to developing healthcare applications that work in low-connectivity
                          environments.
                        </CardDescription>
                      </div>
                      <Badge>Beginner</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <Badge variant="outline">Technical</Badge>
                        <Badge variant="outline">Infrastructure</Badge>
                      </div>
                      <Link href="/guides/offline-apps" className="text-sm text-blue-600 hover:underline">
                        Read Guide →
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <FileText className="h-5 w-5 text-blue-500" />
                          Designing for Low-Literacy Users
                        </CardTitle>
                        <CardDescription>
                          Best practices for creating voice-based interfaces for users with limited literacy.
                        </CardDescription>
                      </div>
                      <Badge>Intermediate</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <Badge variant="outline">UX/UI</Badge>
                        <Badge variant="outline">Accessibility</Badge>
                      </div>
                      <Link href="/guides/low-literacy-design" className="text-sm text-blue-600 hover:underline">
                        Read Guide →
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Video className="h-5 w-5 text-blue-500" />
                          Video Tutorial: Multilingual Voice Assistants
                        </CardTitle>
                        <CardDescription>
                          Step-by-step tutorial on building voice assistants that support multiple Indian languages.
                        </CardDescription>
                      </div>
                      <Badge>Advanced</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <Badge variant="outline">Video</Badge>
                        <Badge variant="outline">NLP</Badge>
                      </div>
                      <Link href="/guides/multilingual-voice" className="text-sm text-blue-600 hover:underline">
                        Watch Tutorial →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="research" className="mt-6">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <BookOpen className="h-5 w-5 text-blue-500" />
                          AI for Maternal Health Risk Assessment
                        </CardTitle>
                        <CardDescription>
                          Research paper on using machine learning to identify high-risk pregnancies in rural settings.
                        </CardDescription>
                      </div>
                      <Badge variant="outline">2023</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <Badge variant="outline">Research Paper</Badge>
                        <Badge variant="outline">Maternal Health</Badge>
                      </div>
                      <Link href="/research/maternal-health-ai" className="text-sm text-blue-600 hover:underline">
                        Read Paper →
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <BookOpen className="h-5 w-5 text-blue-500" />
                          Effectiveness of AI in Healthcare Scheme Navigation
                        </CardTitle>
                        <CardDescription>
                          Study on the impact of AI assistants in improving access to government healthcare schemes.
                        </CardDescription>
                      </div>
                      <Badge variant="outline">2022</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <Badge variant="outline">Research Paper</Badge>
                        <Badge variant="outline">Healthcare Access</Badge>
                      </div>
                      <Link href="/research/scheme-navigation" className="text-sm text-blue-600 hover:underline">
                        Read Paper →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="case-studies" className="mt-6">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Reducing Maternal Mortality in Rural Rajasthan</CardTitle>
                    <CardDescription>
                      How AI-powered risk assessment tools helped ASHA workers identify and manage high-risk
                      pregnancies.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <Badge variant="outline">Case Study</Badge>
                        <Badge variant="outline">Maternal Health</Badge>
                      </div>
                      <Link href="/case-studies/rajasthan" className="text-sm text-blue-600 hover:underline">
                        Read Case Study →
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Improving Healthcare Scheme Enrollment in Bihar</CardTitle>
                    <CardDescription>
                      How a voice-based AI assistant increased healthcare scheme enrollment by 42% in rural Bihar.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <Badge variant="outline">Case Study</Badge>
                        <Badge variant="outline">Healthcare Access</Badge>
                      </div>
                      <Link href="/case-studies/bihar" className="text-sm text-blue-600 hover:underline">
                        Read Case Study →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="tools" className="mt-6">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Download className="h-5 w-5 text-blue-500" />
                          Offline Healthcare Data Toolkit
                        </CardTitle>
                        <CardDescription>
                          Tools and libraries for building offline-capable healthcare applications.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <Badge variant="outline">Toolkit</Badge>
                        <Badge variant="outline">Open Source</Badge>
                      </div>
                      <Link href="/tools/offline-toolkit" className="text-sm text-blue-600 hover:underline">
                        Download →
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Download className="h-5 w-5 text-blue-500" />
                          Healthcare Scheme Database
                        </CardTitle>
                        <CardDescription>
                          Comprehensive database of government healthcare schemes across all Indian states.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <Badge variant="outline">Dataset</Badge>
                        <Badge variant="outline">Healthcare Access</Badge>
                      </div>
                      <Link href="/tools/scheme-database" className="text-sm text-blue-600 hover:underline">
                        Access Database →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}

