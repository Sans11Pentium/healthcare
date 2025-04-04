"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload } from "lucide-react"

export default function ContributePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Contribute to Healthcare AI</h1>
            <p className="text-muted-foreground">
              Help build AI solutions that address critical healthcare challenges in underserved communities.
            </p>
          </div>

          <Tabs defaultValue="solution">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="solution">Submit Solution</TabsTrigger>
              <TabsTrigger value="collaborate">Collaborate</TabsTrigger>
              <TabsTrigger value="submissions">My Submissions</TabsTrigger>
            </TabsList>

            <TabsContent value="solution" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Submit a Healthcare AI Solution</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Solution Title</label>
                    <Input placeholder="Enter solution title" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Description</label>
                    <Textarea placeholder="Describe your healthcare AI solution..." />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Challenge Area</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select challenge area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="maternal">Maternal and Child Health</SelectItem>
                        <SelectItem value="schemes">Healthcare Scheme Access</SelectItem>
                        <SelectItem value="infrastructure">Infrastructure Support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Languages Supported</label>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                        Hindi
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                        English
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                        Bengali
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                        Tamil
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                        Telugu
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                        + Add More
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Features</label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="offline-capable" className="rounded border-gray-300" />
                        <label htmlFor="offline-capable" className="text-sm">
                          Offline Capable
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="voice-interface" className="rounded border-gray-300" />
                        <label htmlFor="voice-interface" className="text-sm">
                          Voice Interface
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="low-bandwidth" className="rounded border-gray-300" />
                        <label htmlFor="low-bandwidth" className="text-sm">
                          Low Bandwidth
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="multilingual" className="rounded border-gray-300" />
                        <label htmlFor="multilingual" className="text-sm">
                          Multilingual
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Upload Solution Files</label>
                    <div className="border-2 border-dashed rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
                      <p className="mt-2 text-sm text-muted-foreground">
                        Drag and drop your solution files here, or click to browse
                      </p>
                      <Input type="file" className="hidden" />
                    </div>
                  </div>

                  <Button className="w-full">Submit Solution</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="collaborate" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Collaborate on Healthcare AI Projects</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold">Maternal Health Risk Assessment</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Looking for ML engineers and healthcare experts to improve our risk assessment algorithm.
                          </p>
                          <div className="flex gap-2 mt-2">
                            <Badge variant="outline" className="bg-blue-50 text-blue-700">
                              ML
                            </Badge>
                            <Badge variant="outline" className="bg-green-50 text-green-700">
                              Healthcare
                            </Badge>
                          </div>
                        </div>
                        <Button size="sm">Join</Button>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold">Multilingual Voice Assistant</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Need language experts for Hindi, Bengali, and Tamil to improve our voice recognition system.
                          </p>
                          <div className="flex gap-2 mt-2">
                            <Badge variant="outline" className="bg-blue-50 text-blue-700">
                              NLP
                            </Badge>
                            <Badge variant="outline" className="bg-green-50 text-green-700">
                              Languages
                            </Badge>
                          </div>
                        </div>
                        <Button size="sm">Join</Button>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold">Offline-Capable Medical Guidelines</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Seeking medical professionals to validate and improve our treatment recommendations.
                          </p>
                          <div className="flex gap-2 mt-2">
                            <Badge variant="outline" className="bg-blue-50 text-blue-700">
                              Medical
                            </Badge>
                            <Badge variant="outline" className="bg-green-50 text-green-700">
                              Data
                            </Badge>
                          </div>
                        </div>
                        <Button size="sm">Join</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="submissions" className="mt-6">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>Healthcare Scheme Navigator</span>
                      <Badge>Under Review</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Multilingual voice assistant that helps rural populations discover and enroll in applicable
                      healthcare schemes.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <Badge variant="outline">Hindi</Badge>
                        <Badge variant="outline">English</Badge>
                        <Badge variant="outline">+3 more</Badge>
                      </div>
                      <div className="space-x-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="destructive" size="sm">
                          Withdraw
                        </Button>
                      </div>
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

