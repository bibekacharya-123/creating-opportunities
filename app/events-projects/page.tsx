import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Users } from "lucide-react"
import HeroSection from "@/components/hero-section"
import { AnimatedSection } from "@/components/ui/animated-section"

export default function EventsProjectsPage() {
  const featuredEvents = [
    {
      id: 1,
      title: "Youth Leadership Summit 2025",
      date: "June 15-17, 2025",
      location: "Kathmandu, Nepal",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "A three-day summit bringing together young leaders from across Nepal to discuss pressing issues and develop leadership skills.",
      category: "Collaborative Event",
    },
    {
      id: 2,
      title: "Digital Skills Workshop Series",
      date: "Monthly, Starting May 2025",
      location: "Various Locations",
      image: "/placeholder.svg?height=300&width=400",
      description: "A series of workshops focused on developing essential digital skills for the modern workplace.",
      category: "Our Initiative",
    },
    {
      id: 3,
      title: "Community Development Project",
      date: "Ongoing",
      location: "Rural Nepal",
      image: "/placeholder.svg?height=300&width=400",
      description: "A long-term project aimed at developing infrastructure and opportunities in rural communities.",
      category: "Our Project",
    },
  ]

  const upcomingEvents = [
    {
      id: 4,
      title: "Entrepreneurship Bootcamp",
      date: "April 25-27, 2025",
      location: "Pokhara, Nepal",
      image: "/placeholder.svg?height=200&width=300",
      category: "Our Initiative",
    },
    {
      id: 5,
      title: "Career Fair 2025",
      date: "May 10, 2025",
      location: "Kathmandu, Nepal",
      image: "/placeholder.svg?height=200&width=300",
      category: "Collaborative Event",
    },
    {
      id: 6,
      title: "Tech Innovation Challenge",
      date: "May 20-22, 2025",
      location: "Online",
      image: "/placeholder.svg?height=200&width=300",
      category: "Our Project",
    },
  ]

  const ongoingProjects = [
    {
      id: 7,
      title: "Youth Empowerment Program",
      duration: "2023-2025",
      location: "Nationwide",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "A comprehensive program designed to empower youth through education, skill development, and mentorship.",
      category: "Our Project",
    },
    {
      id: 8,
      title: "Digital Literacy Initiative",
      duration: "2024-2026",
      location: "Various Locations",
      image: "/placeholder.svg?height=200&width=300",
      description: "An initiative to improve digital literacy among underserved communities.",
      category: "Our Initiative",
    },
    {
      id: 9,
      title: "Community Health Project",
      duration: "2024-2025",
      location: "Rural Nepal",
      image: "/placeholder.svg?height=200&width=300",
      description: "A collaborative project focused on improving health outcomes in rural communities.",
      category: "Collaborative Event",
    },
  ]

  return (
    <>
      <AnimatedSection animation="fade-in">
        <HeroSection
          title="Events & Projects"
          subtitle="Discover our upcoming events, ongoing projects, and collaborative initiatives"
          backgroundColor="#121d3e"
        />
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={0.2}>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#121d3e] mb-8 text-left">Featured Events & Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden">
                  <div className="h-48 relative">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                    <div className="absolute top-2 right-2 bg-[#0e9aa7] text-white px-3 py-1 rounded-full text-xs">
                      {event.category}
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-500 text-sm flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {event.date}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {event.location}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Link
                      href={`/events-projects/${event.category.toLowerCase().replace(/\s+/g, "-")}s/${event.id}`}
                      className="w-full"
                    >
                      <Button className="w-full bg-[#0e9aa7] hover:bg-[#0c8b98]">Learn More</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={0.2}>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#121d3e] mb-8 text-left">Explore by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/events-projects/our-projects">
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-[#0e9aa7]/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="text-[#0e9aa7]" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#121d3e] mb-2">Our Projects</h3>
                  <p className="text-gray-600">
                    Long-term initiatives designed to create sustainable impact in communities.
                  </p>
                </div>
              </Link>

              <Link href="/events-projects/our-initiatives">
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-[#0e9aa7]/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="text-[#0e9aa7]" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#121d3e] mb-2">Our Initiatives</h3>
                  <p className="text-gray-600">
                    Programs and activities initiated by Creating Opportunities International.
                  </p>
                </div>
              </Link>

              <Link href="/events-projects/collaborative-events">
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-[#0e9aa7]/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="text-[#0e9aa7]" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#121d3e] mb-2">Collaborative Events</h3>
                  <p className="text-gray-600">
                    Events organized in partnership with other organizations and institutions.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection animation="fade-in" delay={0.3}>
        <section className="py-16 bg-[#121d3e] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-left">Want to collaborate?</h2>
            <p className="max-w-2xl mb-8 text-lg">
              We're always looking for partners to collaborate on impactful projects and events.
            </p>
            <Link href="/contact">
              <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white px-8 py-6 rounded font-bold text-lg">
                GET IN TOUCH
              </Button>
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </>
  )
}
