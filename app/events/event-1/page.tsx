"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EventRegistrationForm from "@/components/forms/event-registration-form"
import { ArrowLeft, Calendar, Clock, MapPin, Users } from "lucide-react"

export default function EventDetailPage() {
  return (
    <>
      <section className="bg-[#121d3e] text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/events" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft size={16} className="mr-2" />
            Back to Events
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Workshop: Career Development</h1>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              April 20, 2025
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              10:00 AM - 4:00 PM
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="mr-2" />
              Hotel Himalaya, Kathmandu
            </div>
            <div className="flex items-center">
              <Users size={16} className="mr-2" />
              Limited to 50 participants
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Workshop: Career Development"
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </div>

              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="agenda">Agenda</TabsTrigger>
                  <TabsTrigger value="speakers">Speakers</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-4">Event Overview</h2>
                      <p className="mb-4">
                        Join us for a comprehensive workshop focused on enhancing your career prospects. This
                        interactive session will feature industry experts who will share insights on career growth,
                        skill development, and networking.
                      </p>
                      <p className="mb-4">
                        Whether you're a recent graduate, a professional looking to advance in your career, or someone
                        considering a career change, this workshop will provide valuable guidance and practical
                        strategies to help you achieve your goals.
                      </p>
                      <h3 className="text-lg font-bold mt-6 mb-2">What You'll Learn:</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Effective strategies for career planning and development</li>
                        <li>Skills assessment and enhancement techniques</li>
                        <li>Resume building and interview preparation</li>
                        <li>Networking strategies in the digital age</li>
                        <li>Personal branding and online presence</li>
                        <li>Work-life balance and professional well-being</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="agenda" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-4">Event Agenda</h2>
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-bold text-[#0e9aa7]">9:30 AM - 10:00 AM</h3>
                          <p className="font-semibold">Registration and Networking</p>
                        </div>
                        <div>
                          <h3 className="font-bold text-[#0e9aa7]">10:00 AM - 10:30 AM</h3>
                          <p className="font-semibold">Welcome and Introduction</p>
                          <p className="text-gray-600">Opening remarks and overview of the day's agenda</p>
                        </div>
                        <div>
                          <h3 className="font-bold text-[#0e9aa7]">10:30 AM - 12:00 PM</h3>
                          <p className="font-semibold">Session 1: Career Planning Strategies</p>
                          <p className="text-gray-600">Comprehensive approach to career planning and goal setting</p>
                        </div>
                        <div>
                          <h3 className="font-bold text-[#0e9aa7]">12:00 PM - 1:00 PM</h3>
                          <p className="font-semibold">Lunch Break and Networking</p>
                        </div>
                        <div>
                          <h3 className="font-bold text-[#0e9aa7]">1:00 PM - 2:30 PM</h3>
                          <p className="font-semibold">Session 2: Skills Development and Personal Branding</p>
                          <p className="text-gray-600">Identifying key skills and building your professional brand</p>
                        </div>
                        <div>
                          <h3 className="font-bold text-[#0e9aa7]">2:30 PM - 3:00 PM</h3>
                          <p className="font-semibold">Coffee Break</p>
                        </div>
                        <div>
                          <h3 className="font-bold text-[#0e9aa7]">3:00 PM - 4:00 PM</h3>
                          <p className="font-semibold">Session 3: Networking and Q&A Panel</p>
                          <p className="text-gray-600">Interactive session with industry experts</p>
                        </div>
                        <div>
                          <h3 className="font-bold text-[#0e9aa7]">4:00 PM - 4:30 PM</h3>
                          <p className="font-semibold">Closing Remarks and Next Steps</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="speakers" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-6">Event Speakers</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[1, 2, 3, 4].map((speaker) => (
                          <div key={speaker} className="flex space-x-4">
                            <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                              <Image
                                src={`/placeholder.svg?height=80&width=80`}
                                alt={`Speaker ${speaker}`}
                                width={80}
                                height={80}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-bold text-lg">Speaker Name {speaker}</h3>
                              <p className="text-[#0e9aa7]">Position, Company</p>
                              <p className="text-sm text-gray-600 mt-1">
                                Brief bio of the speaker highlighting their expertise and experience in the field.
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <div className="mt-8 flex justify-center">
                <Button
                  className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white px-8 py-6 rounded font-bold text-lg"
                  onClick={() => document.getElementById("registration-form")?.scrollIntoView({ behavior: "smooth" })}
                >
                  REGISTER NOW
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Event Details</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-700">Date</h3>
                      <p>April 20, 2025</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">Time</h3>
                      <p>10:00 AM - 4:00 PM</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">Location</h3>
                      <p>Hotel Himalaya, Kathmandu</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">Registration Fee</h3>
                      <p>NPR 2,000 (Includes lunch and refreshments)</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">Registration Deadline</h3>
                      <p>April 15, 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Share This Event</h2>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                  <p className="text-gray-600 mb-4">For any inquiries about this event, please contact:</p>
                  <div className="space-y-2">
                    <p>
                      <span className="font-semibold">Email:</span> events@creatingoppo.com
                    </p>
                    <p>
                      <span className="font-semibold">Phone:</span> +977 1234567890
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="registration-form" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#121d3e] mb-8">Register for This Event</h2>
          <div className="max-w-4xl mx-auto">
            <EventRegistrationForm eventTitle="Workshop: Career Development" eventDate="April 20, 2025" />
          </div>
        </div>
      </section>
    </>
  )
}
