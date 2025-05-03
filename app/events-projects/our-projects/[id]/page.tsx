import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = {
    id: params.id,
    title: "Youth Empowerment Program",
    headerImage: "/placeholder.svg?height=400&width=800",
    highlights: [
      "Empowering youth through education and skill development.",
      "Promoting leadership and community engagement.",
      "Facilitating access to employment opportunities.",
    ],
    eventDescription: `The Youth Empowerment Program is a flagship initiative of Creating Opportunities International, 
    designed to address the challenges faced by young people in Nepal. Through education, skill development, and mentorship, 
    the program aims to empower youth to become agents of positive change.`,
    email: "projects@creatingoppo.com",
    website: "https://creatingoppo.com",
    phoneNumber: "+977 1234567890",
  }

  return (
    <>
      <section className="bg-[#121d3e] text-white py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/events-projects/our-projects"
            className="inline-flex items-center text-white/80 hover:text-white mb-6"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
          <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Email:</span> {project.email}
                </p>
                <p>
                  <span className="font-semibold">Website:</span>{" "}
                  <a href={project.website} className="text-[#0e9aa7] hover:underline">
                    {project.website}
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> {project.phoneNumber}
                </p>
              </div>
            </CardContent>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={project.headerImage || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Event Description</h2>
                <p className="text-gray-700 mb-6">{project.eventDescription}</p>

                <h3 className="text-lg font-bold mb-3">Highlights</h3>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#0e9aa7] mr-2 h-5 w-5 flex-shrink-0 mt-0.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <Card>
           
          </Card>
        </div>
      </section>
    </>
  )
}
