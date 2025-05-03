import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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
          <h2 className="text-2xl font-bold text-[#121d3e] mb-6">Upcoming Workshops</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Data Analysis with Python",
                organization: "Tech Institute",
                deadline: "May 25, 2025",
                benefits: "Certificate of Completion, Networking Opportunities",
                eligibility: "Open to all professionals and students",
                description: "Learn data analysis techniques using Python in this comprehensive workshop.",
                country: "USA",
                region: "Virtual",
                applicationList: ["Submit Resume", "Fill Application Form"],
                image: "/images/workshop-python.jpg",
              },
            ].map((workshop, index) => (
              <WorkshopCard
                key={index}
                title={workshop.title}
                organization={workshop.organization}
                deadline={workshop.deadline}
                benefits={workshop.benefits}
                eligibility={workshop.eligibility}
                description={workshop.description}
                country={workshop.country}
                region={workshop.region}
                image={workshop.image}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

interface WorkshopCardProps {
  title: string
  organization: string
  deadline: string
  benefits: string
  eligibility: string
  description: string
  country: string
  region: string
  image: string
}

function WorkshopCard({
  title,
  organization,
  deadline,
  benefits,
  eligibility,
  description,
  country,
  region,
  image,
}: WorkshopCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{organization}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm mb-2"><strong>Deadline:</strong> {deadline}</p>
        <p className="text-sm mb-2"><strong>Benefits:</strong> {benefits}</p>
        <p className="text-sm mb-2"><strong>Eligibility:</strong> {eligibility}</p>
        <p className="text-sm mb-2"><strong>Description:</strong> {description}</p>
        <p className="text-sm mb-2"><strong>Country:</strong> {country}</p>
        <p className="text-sm"><strong>Region:</strong> {region}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Apply Now
        </Button>
      </CardFooter>
    </Card>
  )
}
