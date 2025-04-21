import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Building, Share2, Download, ArrowRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// This would typically come from a database or API
const getEventById = (id: string) => {
  // Combined events for demo purposes
  const allEvents = [
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
      
      Over three immersive days, participants will engage in workshops, panel discussions, keynote speeches, and networking events focused on leadership development, social innovation, and community action. The summit will address pressing issues facing Nepal today, including environmental sustainability, economic development, social inclusion, and civic engagement.
      
      Experienced facilitators, renowned speakers, and industry experts will guide participants through interactive sessions designed to build practical leadership skills, foster critical thinking, and inspire action. Participants will have the opportunity to collaborate with peers from diverse backgrounds, share experiences, and develop action plans for addressing challenges in their communities.`,
      partners: ["Nepal Youth Foundation", "Global Leadership Institute", "Ministry of Youth"],
      speakers: [
        {
          name: "Aarav Sharma",
          title: "Executive Director, Nepal Youth Foundation",
          image: "/placeholder.svg?height=100&width=100",
          bio: "Aarav has over 15 years of experience working with youth development programs across Nepal and South Asia.",
        },
        {
          name: "Sita Gurung",
          title: "Leadership Coach & Social Entrepreneur",
          image: "/placeholder.svg?height=100&width=100",
          bio: "A renowned leadership expert who has trained thousands of young leaders across the region.",
        },
        {
          name: "Dr. Rajendra Patel",
          title: "Professor of Social Policy, Kathmandu University",
          image: "/placeholder.svg?height=100&width=100",
          bio: "Dr. Patel specializes in youth policy and has advised multiple government agencies on youth engagement.",
        },
      ],
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
    {
      id: "2",
      title: "Tech for Good Hackathon",
      date: "July 10-12, 2025",
      time: "48-hour event",
      location: "Pokhara, Nepal",
      venue: "Pokhara Innovation Hub",
      image: "/placeholder.svg?height=500&width=800",
      category: "Hackathon",
      description:
        "A hackathon challenging participants to develop technological solutions for social and environmental challenges.",
      longDescription: `The Tech for Good Hackathon brings together developers, designers, engineers, and problem-solvers for an intensive 48-hour event focused on creating innovative technological solutions to address pressing social and environmental challenges in Nepal.

      This collaborative event encourages participants to form cross-disciplinary teams and work together to develop practical, scalable solutions to real-world problems. Whether you're a seasoned coder, a creative designer, or someone with domain expertise in social or environmental issues, this hackathon provides a platform to channel your skills toward meaningful impact.
      
      Throughout the 48 hours, teams will have access to mentors, technical resources, and subject matter experts to help refine and develop their ideas. The event will conclude with team presentations and demonstrations, followed by awards for the most promising solutions in various categories.`,
      partners: ["Tech Nepal", "Innovation Hub", "Social Impact Network"],
      speakers: [
        {
          name: "Priya Thapa",
          title: "CTO, Tech Nepal",
          image: "/placeholder.svg?height=100&width=100",
          bio: "A tech leader with extensive experience in software development and social impact technology.",
        },
        {
          name: "Niraj Joshi",
          title: "Founder, CodeForNepal",
          image: "/placeholder.svg?height=100&width=100",
          bio: "Niraj has pioneered several tech initiatives aimed at solving social problems in Nepal.",
        },
      ],
      challenges: [
        {
          title: "Environmental Monitoring",
          description: "Develop solutions for monitoring and addressing environmental challenges in Nepal.",
        },
        {
          title: "Digital Education",
          description: "Create tools to improve access to quality education through digital means.",
        },
        {
          title: "Healthcare Access",
          description: "Design systems to improve healthcare access in remote areas of Nepal.",
        },
        {
          title: "Disaster Preparedness",
          description: "Build applications that can help communities prepare for and respond to natural disasters.",
        },
      ],
      prizes: [
        {
          title: "First Prize",
          description: "NPR 100,000 cash + 3 months incubation support",
        },
        {
          title: "Second Prize",
          description: "NPR 50,000 cash + mentorship package",
        },
        {
          title: "People's Choice Award",
          description: "NPR 25,000 cash",
        },
      ],
      registrationFee: "Free (Application required)",
      applicationDeadline: "June 20, 2025",
      contactEmail: "hackathon@creatingopportunities.org",
      contactPhone: "+977 9876543210",
    },
    {
      id: "3",
      title: "Career Fair 2025",
      date: "May 10, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Kathmandu, Nepal",
      venue: "Hotel Annapurna",
      image: "/placeholder.svg?height=500&width=800",
      category: "Fair",
      description:
        "A collaborative event connecting job seekers with potential employers and providing career development resources.",
      longDescription: `The Career Fair 2025 is Nepal's premier job fair, bringing together job seekers, employers, and career development resources under one roof. This collaborative event aims to address the employment gap in Nepal by connecting talented individuals with opportunities across various sectors.
      
      Whether you're a recent graduate looking for your first job, a professional seeking to advance your career, or an employer searching for qualified candidates, this fair offers a platform for meaningful connections. In addition to meeting potential employers, attendees will have access to career counseling sessions, resume reviews, interview preparation workshops, and industry panels.
      
      The fair will feature representatives from more than 50 companies across diverse sectors including technology, finance, healthcare, education, hospitality, and non-profit organizations. This event is organized in collaboration with the Nepal Chamber of Commerce, Employment Council, and several major employers committed to developing Nepal's workforce.`,
      partners: ["Nepal Chamber of Commerce", "Employment Council", "Major Employers"],
      participatingCompanies: [
        { name: "Nepal Telecom", industry: "Telecommunications", positions: 12 },
        { name: "Himalayan Bank", industry: "Banking & Finance", positions: 8 },
        { name: "Yeti Airlines", industry: "Aviation", positions: 5 },
        { name: "Deerwalk Inc.", industry: "Information Technology", positions: 15 },
        { name: "Buddha Air", industry: "Aviation", positions: 7 },
        { name: "Ncell", industry: "Telecommunications", positions: 10 },
        { name: "Kantipur Publications", industry: "Media", positions: 6 },
        { name: "Hotel Soaltee", industry: "Hospitality", positions: 9 },
        { name: "Dolma Impact Fund", industry: "Investment", positions: 3 },
        { name: "World Food Programme", industry: "International Development", positions: 4 },
      ],
      workshops: [
        { time: "10:30 AM", title: "Resume Building Workshop", presenter: "Career Development Center" },
        { time: "11:30 AM", title: "Interview Skills and Techniques", presenter: "HR Professionals Network" },
        { time: "1:00 PM", title: "LinkedIn Profile Optimization", presenter: "Digital Marketing Association" },
        { time: "2:00 PM", title: "Entrepreneurship as a Career Path", presenter: "Startup Nepal" },
        { time: "3:00 PM", title: "Careers in Technology", presenter: "Tech Nepal Association" },
      ],
      entryFee: "Free (Registration required)",
      registrationDeadline: "May 5, 2025",
      contactEmail: "careerfair@creatingopportunities.org",
      contactPhone: "+977 1234567890",
    },
    {
      id: "4",
      title: "Entrepreneurship Conference",
      date: "August 5-6, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Kathmandu, Nepal",
      venue: "Radisson Hotel",
      image: "/placeholder.svg?height=500&width=800",
      category: "Conference",
      description: "A comprehensive conference focused on entrepreneurship and innovation in Nepal.",
      partners: ["Startup Nepal", "Business Incubator", "Chamber of Commerce"],
    },
    {
      id: "5",
      title: "Environmental Sustainability Workshop",
      date: "September 15, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Pokhara, Nepal",
      venue: "Pokhara University",
      image: "/placeholder.svg?height=500&width=800",
      category: "Workshop",
      description: "A hands-on workshop addressing environmental sustainability challenges and solutions.",
      partners: ["Green Nepal", "Environmental Protection Agency", "Sustainable Development Network"],
    },
    {
      id: "6",
      title: "Digital Marketing Bootcamp",
      date: "October 10-12, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Chitwan, Nepal",
      venue: "Chitwan Business Center",
      image: "/placeholder.svg?height=500&width=800",
      category: "Bootcamp",
      description: "An intensive bootcamp covering all aspects of digital marketing for beginners and intermediates.",
      partners: ["Digital Marketing Association", "Tech Hub", "Business School"],
    },
    {
      id: "7",
      title: "Women in Leadership Forum",
      date: "March 8, 2025",
      location: "Kathmandu, Nepal",
      venue: "Hotel Yak & Yeti",
      image: "/placeholder.svg?height=500&width=800",
      category: "Forum",
      description: "A forum celebrating and empowering women leaders across various sectors.",
      partners: ["Women's Empowerment Network", "Leadership Institute", "UN Women"],
    },
    {
      id: "8",
      title: "Rural Development Symposium",
      date: "February 20-21, 2025",
      location: "Nepalgunj, Nepal",
      venue: "Nepalgunj Conference Center",
      image: "/placeholder.svg?height=500&width=800",
      category: "Symposium",
      description: "A symposium addressing challenges and opportunities in rural development.",
      partners: ["Rural Development Foundation", "Agricultural Association", "Community Development Network"],
    },
    {
      id: "9",
      title: "Youth Innovation Challenge",
      date: "January 15-17, 2025",
      location: "Biratnagar, Nepal",
      venue: "Biratnagar Innovation Hub",
      image: "/placeholder.svg?height=500&width=800",
      category: "Challenge",
      description: "A competition challenging young innovators to develop solutions for local problems.",
      partners: ["Innovation Hub", "Youth Council", "Tech Startups"],
    },
  ]

  return allEvents.find((event) => event.id === id) || null
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
                {event.challenges && <TabsTrigger value="challenges">Challenges</TabsTrigger>}
                {event.participatingCompanies && <TabsTrigger value="exhibitors">Exhibitors</TabsTrigger>}
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
              {(event.agenda || event.speakers) && (
                <TabsContent value="program">
                  {/* Speakers Section */}
                  {event.speakers && (
                    <div className="mb-12">
                      <h2 className="text-2xl font-bold mb-6">Featured Speakers</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {event.speakers.map((speaker, index) => (
                          <div key={index} className="bg-gray-50 p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                              <div className="w-16 h-16 relative rounded-full overflow-hidden mr-4">
                                <Image
                                  src={speaker.image || "/placeholder.svg"}
                                  alt={speaker.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h3 className="font-bold text-lg">{speaker.name}</h3>
                                <p className="text-sm text-gray-600">{speaker.title}</p>
                              </div>
                            </div>
                            <p className="text-gray-700 text-sm">{speaker.bio}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Agenda Section */}
                  {event.agenda && (
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
                  )}

                  {/* Workshops Section */}
                  {event.workshops && (
                    <div className="mt-12">
                      <h2 className="text-2xl font-bold mb-6">Workshops</h2>
                      <div className="border-l-2 border-[#0e9aa7] ml-4 pl-6 space-y-4">
                        {event.workshops.map((workshop, index) => (
                          <div key={index} className="relative">
                            <div className="absolute -left-[32px] w-5 h-5 bg-[#0e9aa7] rounded-full border-4 border-white"></div>
                            <div className="mb-1 font-semibold">{workshop.time}</div>
                            <div className="bg-gray-50 rounded-lg p-4">
                              <div className="font-medium">{workshop.title}</div>
                              <div className="text-sm text-gray-600">Presenter: {workshop.presenter}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </TabsContent>
              )}

              {/* Challenges Tab */}
              {event.challenges && (
                <TabsContent value="challenges">
                  <h2 className="text-2xl font-bold mb-6">Hackathon Challenges</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {event.challenges.map((challenge, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-xl mb-2 text-[#0e9aa7]">{challenge.title}</h3>
                        <p className="text-gray-700">{challenge.description}</p>
                      </div>
                    ))}
                  </div>

                  {event.prizes && (
                    <div className="mt-12">
                      <h2 className="text-2xl font-bold mb-6">Prizes</h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {event.prizes.map((prize, index) => (
                          <div key={index} className="border-2 border-[#0e9aa7] p-6 rounded-lg text-center">
                            <h3 className="font-bold text-xl mb-2 text-[#0e9aa7]">{prize.title}</h3>
                            <p className="text-gray-700">{prize.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </TabsContent>
              )}

              {/* Exhibitors Tab */}
              {event.participatingCompanies && (
                <TabsContent value="exhibitors">
                  <h2 className="text-2xl font-bold mb-6">Participating Companies</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-[#0e9aa7] text-white">
                          <th className="p-3 text-left">Company</th>
                          <th className="p-3 text-left">Industry</th>
                          <th className="p-3 text-left">Open Positions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {event.participatingCompanies.map((company, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                            <td className="p-3 border-t">{company.name}</td>
                            <td className="p-3 border-t">{company.industry}</td>
                            <td className="p-3 border-t">{company.positions}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
              const randomId = (((Number.parseInt(params.id) + index + 1) % 9) + 1).toString()
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
