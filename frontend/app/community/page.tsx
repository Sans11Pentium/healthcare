"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, MapPin } from "lucide-react"

export default function CommunityPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Healthcare AI Community</h1>
            <p className="text-muted-foreground">
              Connect with healthcare professionals, developers, and researchers working to improve healthcare access.
            </p>
          </div>

          <Tabs defaultValue="forums">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="forums">Discussion Forums</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="partners">Partners</TabsTrigger>
            </TabsList>

            <TabsContent value="forums" className="mt-6">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-blue-500" />
                      Active Discussions
                    </CardTitle>
                    <CardDescription>Join conversations about healthcare AI solutions and challenges.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border-b pb-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">Best practices for training ASHA workers on AI tools</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              Sharing experiences and challenges in training frontline workers to use new technologies.
                            </p>
                          </div>
                          <Badge>32 replies</Badge>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback>DR</AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-muted-foreground">Started by Dr. Rajesh • 2 days ago</span>
                        </div>
                      </div>

                      <div className="border-b pb-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">
                              Challenges in multilingual voice recognition for rural dialects
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              Technical discussion on improving voice recognition for regional language variations.
                            </p>
                          </div>
                          <Badge>18 replies</Badge>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback>SP</AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-muted-foreground">Started by Sanjay P. • 5 days ago</span>
                        </div>
                      </div>

                      <div className="border-b pb-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">
                              Ethical considerations in collecting health data in rural areas
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              Discussion on privacy, consent, and data ownership in healthcare AI applications.
                            </p>
                          </div>
                          <Badge>27 replies</Badge>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback>AM</AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-muted-foreground">Started by Anita M. • 1 week ago</span>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full mt-4">Start New Discussion</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="events" className="mt-6">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-blue-500" />
                      Upcoming Events
                    </CardTitle>
                    <CardDescription>Join workshops, webinars, and conferences on healthcare AI.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">Workshop: Building Voice Interfaces for Healthcare</h3>
                            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>June 15, 2023 • 10:00 AM - 1:00 PM IST</span>
                            </div>
                            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              <span>Online (Zoom)</span>
                            </div>
                          </div>
                          <Button size="sm">Register</Button>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">Conference: AI for Rural Healthcare</h3>
                            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>July 8-10, 2023 • 9:00 AM - 5:00 PM IST</span>
                            </div>
                            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              <span>New Delhi & Online</span>
                            </div>
                          </div>
                          <Button size="sm">Register</Button>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">Webinar: Healthcare Scheme Navigation with AI</h3>
                            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>June 22, 2023 • 3:00 PM - 4:30 PM IST</span>
                            </div>
                            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              <span>Online (YouTube Live)</span>
                            </div>
                          </div>
                          <Button size="sm">Register</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="partners" className="mt-6">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Healthcare Partners</CardTitle>
                    <CardDescription>
                      Organizations working with us to improve healthcare access through AI.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                          <span className="text-xl font-bold text-gray-400">MH</span>
                        </div>
                        <h3 className="font-medium">Ministry of Health</h3>
                        <p className="text-sm text-muted-foreground">Government Partner</p>
                      </div>

                      <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                          <span className="text-xl font-bold text-gray-400">WHO</span>
                        </div>
                        <h3 className="font-medium">World Health Organization</h3>
                        <p className="text-sm text-muted-foreground">Global Partner</p>
                      </div>

                      <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                          <span className="text-xl font-bold text-gray-400">AIIMS</span>
                        </div>
                        <h3 className="font-medium">AIIMS</h3>
                        <p className="text-sm text-muted-foreground">Medical Partner</p>
                      </div>

                      <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                          <span className="text-xl font-bold text-gray-400">GH</span>
                        </div>
                        <h3 className="font-medium">Gates Health</h3>
                        <p className="text-sm text-muted-foreground">Foundation Partner</p>
                      </div>

                      <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                          <span className="text-xl font-bold text-gray-400">TCS</span>
                        </div>
                        <h3 className="font-medium">TCS Healthcare</h3>
                        <p className="text-sm text-muted-foreground">Technology Partner</p>
                      </div>

                      <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                          <span className="text-xl font-bold text-gray-400">+</span>
                        </div>
                        <h3 className="font-medium">Become a Partner</h3>
                        <p className="text-sm text-muted-foreground">Join our mission</p>
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

