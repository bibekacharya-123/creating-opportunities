import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, ExternalLink, Search, GraduationCap } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ScholarshipsPage() {
  return (
    <>
      <div className="relative w-full h-[300px] md:h-[400px] bg-gradient-to-r from-[#121d3e] to-[#1e3a8a] text-white">
        <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full md:w-3/4 lg:w-2/3">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Scholarship Opportunities</h1>
          <p className="text-lg mb-8 max-w-3xl">
            Discover scholarships to fund your education and achieve your academic goals.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/opportunities">
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                All Opportunities
              </Button>
            </Link>
            <Link href="/opportunities/post">
              <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white">Post a Scholarship</Button>
            </Link>
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          

      

          <div>
            <h2 className="text-2xl font-bold text-[#121d3e] mb-6">All Scholarship Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Engineering Scholarship",
                  organization: "Technical University",
                  location: "Kathmandu, Nepal",
                  level: "Undergraduate",
                  deadline: "July 5, 2025",
                  link: "/opportunities/scholarships/engineering",
                },
                {
                  title: "Future Leaders Scholarship",
                  organization: "Business School",
                  location: "Multiple Campuses",
                  level: "MBA",
                  deadline: "June 15, 2025",
                  link: "/opportunities/scholarships/future-leaders",
                },
                {
                  title: "Creative Arts Scholarship",
                  organization: "Arts Institute",
                  location: "Kathmandu, Nepal",
                  level: "Undergraduate",
                  deadline: "May 30, 2025",
                  link: "/opportunities/scholarships/creative-arts",
                },
                {
                  title: "Medical Studies Scholarship",
                  organization: "Health Sciences University",
                  location: "Kathmandu, Nepal",
                  level: "MBBS",
                  deadline: "July 20, 2025",
                  link: "/opportunities/scholarships/medical-studies",
                },
                {
                  title: "Environmental Research Scholarship",
                  organization: "Environmental Institute",
                  location: "Multiple Locations",
                  level: "PhD",
                  deadline: "August 10, 2025",
                  link: "/opportunities/scholarships/environmental-research",
                },
                {
                  title: "Community Service Scholarship",
                  organization: "Community Foundation",
                  location: "Nepal",
                  level: "Undergraduate",
                  deadline: "June 25, 2025",
                  link: "/opportunities/scholarships/community-service",
                },
                {
                  title: "Digital Technology Scholarship",
                  organization: "Tech Institute",
                  location: "Online/Hybrid",
                  level: "Undergraduate/Graduate",
                  deadline: "July 15, 2025",
                  link: "/opportunities/scholarships/digital-technology",
                },
                {
                  title: "Law Studies Scholarship",
                  organization: "Law School",
                  location: "Kathmandu, Nepal",
                  level: "LLB/LLM",
                  deadline: "June 30, 2025",
                  link: "/opportunities/scholarships/law-studies",
                },
                {
                  title: "Agricultural Sciences Scholarship",
                  organization: "Agricultural University",
                  location: "Chitwan, Nepal",
                  level: "Undergraduate/Graduate",
                  deadline: "July 25, 2025",
                  link: "/opportunities/scholarships/agricultural-sciences",
                },
              ].map((scholarship, index) => (
                <ScholarshipCard
                  key={index}
                  title={scholarship.title}
                  organization={scholarship.organization}
                  location={scholarship.location}
                  level={scholarship.level}
                  deadline={scholarship.deadline}
                  link={scholarship.link}
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#121d3e] mb-6">Scholarship Application Tips</h2>
            <p className="text-lg text-gray-600 mb-12">
              Increase your chances of securing a scholarship with these helpful tips.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                    <path d="M10 9H8" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Prepare Early</h3>
                <p className="text-gray-600">
                  Start your application well before the deadline to ensure you have time to gather all required
                  documents.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Craft a Strong Essay</h3>
                <p className="text-gray-600">
                  Write a compelling personal statement that highlights your achievements, goals, and why you deserve
                  the scholarship.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Get Strong References</h3>
                <p className="text-gray-600">
                  Request recommendation letters from teachers, professors, or employers who know your abilities well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#121d3e] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Need Help With Your Scholarship Application?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Our team can provide guidance on finding and applying for scholarships that match your profile.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-[#121d3e] hover:bg-gray-100">Schedule a Consultation</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Join Our Scholarship Workshop
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

function ScholarshipCard({
  title,
  organization,
  location,
  level,
  deadline,
  link,
}: {
  title: string
  organization: string
  location: string
  level: string
  deadline: string
  link: string
}) {
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
            <GraduationCap className="h-4 w-4 mr-2 text-gray-500" />
            <span>Level: {level}</span>
          </div>
          <div className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-2 text-gray-500" />
            <span>Deadline: {deadline}</span>
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

function FeaturedScholarshipCard({
  title,
  organization,
  location,
  amount,
  level,
  deadline,
  link,
}: {
  title: string
  organization: string
  location: string
  amount: string
  level: string
  deadline: string
  link: string
}) {
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
            <GraduationCap className="h-4 w-4 mr-2 text-gray-500" />
            <span>Level: {level}</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 text-gray-500"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            <span>Amount: {amount}</span>
          </div>
          <div className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-2 text-gray-500" />
            <span>Deadline: {deadline}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={link} className="w-full">
          <Button className="w-full bg-[#0e9aa7] hover:bg-[#0c8b98]">
            Apply Now <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
