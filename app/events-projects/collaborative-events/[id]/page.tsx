import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Building, Share2, Download, ArrowRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for collaborative events only
const getEventById = (id: string) => {
  const collaborativeEvents = [
    {
      id: "1",
      title: "Youth Leadership Summit 2025",
      date: "June 15-17, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Kathmandu, Nepal",
      venue: "Himalayan Convention Center",
      image: "/placeholder.svg?height=500&width=800",
      category: "Conference",
      description:
        "A three-day summit bringing together young leaders from across Nepal to discuss pressing issues and develop leadership skills.",
      longDescription: `The Youth Leadership Summit 2025 is designed to empower the next generation of Nepali leaders with the skills, knowledge, and networks they need to drive positive change in their communities and beyond.
      
      Over three immersive days, participants will engage in workshops, panel discussions, keynote speeches, and networking events focused on leadership development, social innovation, and community action.`,
      partners: ["Nepal Youth Foundation", "Global Leadership Institute", "Ministry of Youth"],
      agenda: [
        {
          day: "Day 1: June 15, 2025",
          sessions: [
            { time: "08:00 - 09:00", title: "Registration and Welcome Coffee" },
            { time: "09:00 - 10:00", title: "Opening Ceremony and Keynote Address" },
            { time: "10:15 - 12:00", title: "Panel: The Role of Youth in Nepal's Development" },
            { time: "12:00 - 13:00", title: "Lunch Break" },
            { time: "13:00 - 15:00", title: "Workshop: Leadership Fundamentals" },
            { time: "15:15 - 17:00", title: "Networking Session and Day 1 Recap" },
          ],
        },
        {
          day: "Day 2: June 16, 2025",
          sessions: [
            { time: "09:00 - 10:00", title: "Keynote: Innovation and Social Entrepreneurship" },
            { time: "10:15 - 12:00", title: "Workshop: Design Thinking for Social Impact" },
            { time: "12:00 - 13:00", title: "Lunch Break" },
            { time: "13:00 - 15:00", title: "Panel: Youth-Led Initiatives in Nepal" },
            { time: "15:15 - 17:00", title: "Group Project Work and Mentoring" },
          ],
        },
        {
          day: "Day 3: June 17, 2025",
          sessions: [
            { time: "09:00 - 10:00", title: "Keynote: From Vision to Action" },
            { time: "10:15 - 12:00", title: "Workshop: Community Organizing and Mobilization" },
            { time: "12:00 - 13:00", title: "Lunch Break" },
            { time: "13:00 - 15:00", title: "Project Presentations" },
            { time: "15:15 - 16:30", title: "Closing Panel: The Way Forward" },
            { time: "16:30 - 17:30", title: "Closing Ceremony and Certificate Distribution" },
          ],
        },
      ],
      registrationFee: "NPR 2,000 (Scholarships available)",
      applicationDeadline: "May 15, 2025",
      contactEmail: "summit@creatingopportunities.org",
      contactPhone: "+977 1234567890",
    },
  ]

  return collaborativeEvents.find((event) => event.id === id) || null
}

export default function EventDetailsPage({ params }: { params: { id: string } }) {
  const event = getEventById(params.id)

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Event not found</h1>
        <p className="mb-8">The event you're looking for doesn't exist or has been removed.</p>
        <Link href="/events-projects/collaborative-events">
          <Button>Back to Events</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-white">
      {/* Hero Section with Event Image */}
      <div className="relative h-[50vh] min-h-[400px]">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center text-white">
            <div className="inline-block bg-[#0e9aa7] px-4 py-2 rounded-full text-sm font-medium mb-4">
              {event.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{event.title}</h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                {event.date}
              </span>
              {event.time && (
                <span className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  {event.time}
                </span>
              )}
              <span className="flex items-center">
                <MapPin className="mr-1 h-4 w-4" />
                {event.location}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Event Details Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <Tabs defaultValue="overview">
              <TabsList className="mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                {(event.agenda || event.speakers) && <TabsTrigger value="program">Program</TabsTrigger>}
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview">
                <div className="prose max-w-none mb-8">
                  <h2 className="text-2xl font-bold mb-4">About the Event</h2>
                  <p className="whitespace-pre-line text-gray-700">{event.longDescription || event.description}</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Organized in Partnership With</h2>
                  <div className="flex flex-wrap gap-4">
                    {event.partners.map((partner, index) => (
                      <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg">
                        <Building className="text-[#0e9aa7] mr-3" />
                        <span className="font-medium">{partner}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Program Tab */}
              {event.agenda && (
                <TabsContent value="program">
                  {/* Agenda Section */}
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Event Agenda</h2>
                    <div className="space-y-8">
                      {event.agenda.map((day, dayIndex) => (
                        <div key={dayIndex}>
                          <h3 className="text-xl font-bold mb-4 bg-[#0e9aa7] text-white px-4 py-2 rounded-md inline-block">
                            {day.day}
                          </h3>
                          <div className="border-l-2 border-[#0e9aa7] ml-4 pl-6 space-y-4">
                            {day.sessions.map((session, sessionIndex) => (
                              <div key={sessionIndex} className="relative">
                                <div className="absolute -left-[32px] w-5 h-5 bg-[#0e9aa7] rounded-full border-4 border-white"></div>
                                <div className="mb-1 font-semibold">{session.time}</div>
                                <div className="bg-gray-50 rounded-lg p-4">{session.title}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              )}
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4">Event Information</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-medium text-gray-700">Date & Time</div>
                  <div className="flex items-start mt-1">
                    <Calendar className="h-5 w-5 text-[#0e9aa7] mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      {event.date}
                      {event.time && <div className="text-gray-600 text-sm">{event.time}</div>}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="font-medium text-gray-700">Location</div>
                  <div className="flex items-start mt-1">
                    <MapPin className="h-5 w-5 text-[#0e9aa7] mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      {event.venue}
                      <div className="text-gray-600 text-sm">{event.location}</div>
                    </div>
                  </div>
                </div>

                {event.registrationFee && (
                  <div>
                    <div className="font-medium text-gray-700">Registration Fee</div>
                    <div className="mt-1 ml-7">{event.registrationFee}</div>
                  </div>
                )}

                {event.applicationDeadline && (
                  <div>
                    <div className="font-medium text-gray-700">Application Deadline</div>
                    <div className="mt-1 ml-7">{event.applicationDeadline}</div>
                  </div>
                )}

                <div>
                  <div className="font-medium text-gray-700">Organized by</div>
                  <div className="flex items-start mt-1">
                    <Building className="h-5 w-5 text-[#0e9aa7] mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      Creating Opportunities International
                      <div className="text-gray-600 text-sm">In partnership with {event.partners.join(", ")}</div>
                    </div>
                  </div>
                </div>

                {event.contactEmail && (
                  <div>
                    <div className="font-medium text-gray-700">Contact</div>
                    <div className="mt-1 ml-7">
                      <div>{event.contactEmail}</div>
                      {event.contactPhone && <div>{event.contactPhone}</div>}
                    </div>
                  </div>
                )}

                <div className="pt-4">
                  <Button className="w-full bg-[#0e9aa7] hover:bg-[#0c8b98]">Register for this Event</Button>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1 flex items-center justify-center gap-2">
                      <Share2 size={16} />
                      Share
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 flex items-center justify-center gap-2">
                      <Download size={16} />
                      Calendar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Events Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Other Events You Might Be Interested In</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => {
              // Get a random event that's not the current one
              const randomId = (((Number.parseInt(params.id) + index + 1) % 1) + 1).toString()
              const relatedEvent = getEventById(randomId)

              if (!relatedEvent) return null

              return (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 relative">
                    <Image
                      src={relatedEvent.image || "/placeholder.svg"}
                      alt={relatedEvent.title}
                      fill
                      className="object-cover"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-[#0e9aa7] text-white px-3 py-1 rounded-full text-xs">
                      {relatedEvent.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{relatedEvent.title}</h3>
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <Calendar size={14} className="mr-1" />
                      {relatedEvent.date}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <MapPin size={14} className="mr-1" />
                      {relatedEvent.location}
                    </div>
                    <Link
                      href={`/events-projects/collaborative-events/${relatedEvent.id}`}
                      className="text-[#0e9aa7] font-medium hover:underline flex items-center"
                    >
                      View Details
                      <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to collaborate on an event?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            We're always looking for partners to create impactful events together. If you have an idea for an event or
            want to collaborate, get in touch with us.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-involved/become-partner">
              <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98]">Become a Partner</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
