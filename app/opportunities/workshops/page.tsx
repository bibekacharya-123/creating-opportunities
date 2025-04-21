import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Clock, Search, Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function WorkshopsPage() {
  return (
    <>
      <div className="relative w-full h-[300px] md:h-[400px] bg-gradient-to-r from-[#121d3e] to-[#1e3a8a] text-white">
        <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full md:w-3/4 lg:w-2/3">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Workshops & Training</h1>
          <p className="text-lg mb-8 max-w-3xl">
            Enhance your skills and knowledge through hands-on workshops and specialized training programs.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/opportunities">
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                All Opportunities
              </Button>
            </Link>
            <Link href="/opportunities/post">
              <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white">
                Post a Workshop
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
      

   
          <div>
            <h2 className="text-2xl font-bold text-[#121d3e] mb-6">Upcoming Workshops</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Data Analysis with Python",
                  organization: "Tech Institute",
                  location: "Virtual",
                  duration: "4 Days",
                  date: "June 20-23, 2025",
                  deadline: "May 25, 2025",
                  link: "/opportunities/workshops/data-analysis",
                },
                {
                  title: "Public Speaking Workshop",
                  organization: "Communication Skills Center",
                  location: "Kathmandu, Nepal",
                  duration: "1 Day",
                  date: "June 5, 2025",
                  deadline: "May 15, 2025",
                  link: "/opportunities/workshops/public-speaking",
                },
                {
                  title: "UX/UI Design Fundamentals",
                  organization: "Design Academy",
                  location: "Hybrid",
                  duration: "3 Days",
                  date: "July 10-12, 2025",
                  deadline: "June 15, 2025",
                  link: "/opportunities/workshops/ux-ui-design",
                },
                {
                  title: "Financial Planning Workshop",
                  organization: "Finance Institute",
                  location: "Kathmandu, Nepal",
                  duration: "2 Days",
                  date: "June 25-26, 2025",
                  deadline: "May 30, 2025",
                  link: "/opportunities/workshops/financial-planning",
                },
                {
                  title: "Content Creation Masterclass",
                  organization: "Media Academy",
                  location: "Virtual",
                  duration: "2 Days",
                  date: "July 15-16, 2025",
                  deadline: "June 20, 2025",
                  link: "/opportunities/workshops/content-creation",
                },
                {
                  title: "Project Management Workshop",
                  organization: "Management Institute",
                  location: "Kathmandu, Nepal",
                  duration: "3 Days",
                  date: "August 10-12, 2025",
                  deadline: "July 15, 2025",
                  link: "/opportunities/workshops/project-management",
                },
                {
                  title: "Mobile App Development Workshop",
                  organization: "Tech Training Center",
                  location: "Virtual",
                  duration: "5 Days",
                  date: "July 20-24, 2025",
                  deadline: "June 25, 2025",
                  link: "/opportunities/workshops/mobile-app-development",
                },
                {
                  title: "Social Media Strategy Workshop",
                  organization: "Digital Marketing Institute",
                  location: "Kathmandu, Nepal",
                  duration: "1 Day",
                  date: "June 18, 2025",
                  deadline: "May 20, 2025",
                  link: "/opportunities/workshops/social-media-strategy",
                },
                {
                  title: "Entrepreneurship Bootcamp",
                  organization: "Startup Hub",
                  location: "Kathmandu, Nepal",
                  duration: "5 Days",
                  date: "August 15-19, 2025",
                  deadline: "July 20, 2025",
                  link: "/opportunities/workshops/entrepreneurship-bootcamp",
                },
              ].map((workshop, index) => (
                <WorkshopCard
                  key={index}
                  title={workshop.title}
                  organization={workshop.organization}
                  location={workshop.location}
                  duration={workshop.duration}
                  date={workshop.date}
                  deadline={workshop.deadline}
                  link={workshop.link}
                />
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" className="px-6">
              Load More
            </Button>
          </div>
        </div>
      </section>



    </>
  )
}

interface WorkshopCardProps {
  title: string
  organization: string
  location: string
  duration: string
  date: string
  deadline: string
  link: string
}

function WorkshopCard({
  title,
  organization,
  location,
  duration,
  date,
  deadline,
  link,
}: WorkshopCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{organization}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-3 text-sm">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-gray-500" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-gray-500" />
            <span>Duration: {duration}</span>
          </div>
          <div className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-2 text-gray-500" />
            <span>Date: {date}</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-gray-500">
              <path d="M10 2v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2" />
              <path d="M4 18v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
              <path d="M14 18v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2" />
              <path d="M10 2H4a2 2 0 0 0-2 2v2" />
            </svg>
            <span>Registration Deadline: {deadline}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={link} className="w-full">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

interface FeaturedWorkshopCardProps {
  title: string;
  organization: string;
  location: string;
  duration: string;
  date: string;
  deadline: string;
  link: string;
}

function FeaturedWorkshopCard({
  title,
  organization,
  location,
  duration,
  date,
  deadline,
  link,
}: FeaturedWorkshopCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 relative overflow-hidden border-2 border-[#0e9aa7]">
      <div className="absolute top-0 right-0">
        <Badge className="bg-[#0e9aa7] text-white m-2">Featured</Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{organization}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-3 text-sm">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-gray-500" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-gray-500" />
            <span>Duration: {duration}</span>
          </div>
          <div className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-2 text-gray-500" />
            <span>Date: {date}</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-gray-500">
              <path d="M10 2v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2" />
              <path d="M4 18v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
              <path d="M14 18v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2" />
              <path d="M10 2H4a2 2 0 0 0-2 2v2" />
            </svg>
            <span>Registration Deadline: {deadline}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={link} className="w-full">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
