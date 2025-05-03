import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowLeft } from "lucide-react"

export default function InitiativeDetailPage({ params }: { params: { id: string } }) {
  // Adjusted mock data
  const initiative = {
    title: "Digital Skills Workshop Series",
    headerImage: "/placeholder.svg?height=400&width=800",
    highlights: [
      "Monthly workshops starting May 2025",
      "Various locations across Nepal",
      "Focus on youth, women, and underserved communities",
    ],
    eventDescription: "A series of workshops focused on developing essential digital skills for the modern workplace.",
    email: "digitalskills@creatingoppo.com",
    website: "https://creatingoppo.com",
    phoneNumber: "+977 1234567890",
  }

  return (
    <>
      <section className="bg-[#121d3e] text-white py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/events-projects/our-initiatives"
            className="inline-flex items-center text-white/80 hover:text-white mb-6"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Initiatives
          </Link>
          <div className="flex flex-wrap items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{initiative.title}</h1>
              <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-4">Contact Information</h2>
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Email:</span> {initiative.email}
            </p>
            <p>
              <span className="font-semibold">Website:</span>{" "}
              <a href={initiative.website} className="text-[#0e9aa7] hover:underline">
                {initiative.website}
              </a>
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {initiative.phoneNumber}
            </p>
          </div>
        </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="mb-8 rounded-lg overflow-hidden">
              <Image
                src={initiative.headerImage || "/placeholder.svg"}
                alt={initiative.title}
                width={800}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div>
              <p className="text-gray-700">{initiative.eventDescription}</p>
              <ul className="space-y-2 text-sm mt-4">
                {initiative.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-[#0e9aa7] mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
       
      </section>
    </>
  )
}
