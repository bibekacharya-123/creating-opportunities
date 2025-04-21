import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Calendar } from "lucide-react"

export default function MediaMentionsSection() {
  const mediaMentions = [
    {
      title: "Creating Opportunities International Launches New Initiative",
      publication: "Nepal Times",
      date: "March 15, 2023",
      excerpt:
        "Creating Opportunities International has launched a new initiative aimed at connecting young professionals with international career opportunities...",
      link: "#",
      logo: "/placeholder.svg?height=60&width=120",
    },
    {
      title: "Local Organization Makes Global Impact",
      publication: "Kathmandu Post",
      date: "January 10, 2023",
      excerpt:
        "Creating Opportunities International has been recognized for its significant impact in creating educational and career pathways for Nepali youth...",
      link: "#",
      logo: "/placeholder.svg?height=60&width=120",
    },
    {
      title: "Interview with the CEO of Creating Opportunities",
      publication: "Business Nepal",
      date: "November 5, 2022",
      excerpt:
        "In an exclusive interview, the CEO of Creating Opportunities International discusses the organization's vision, achievements, and future plans...",
      link: "#",
      logo: "/placeholder.svg?height=60&width=120",
    },
    {
      title: "Creating Opportunities Wins Social Impact Award",
      publication: "Global Development News",
      date: "September 20, 2022",
      excerpt:
        "Creating Opportunities International has been awarded the prestigious Social Impact Award for its innovative approach to opportunity creation and access...",
      link: "#",
      logo: "/placeholder.svg?height=60&width=120",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-4">Media Mentions</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            News and articles featuring Creating Opportunities International and our work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mediaMentions.map((mention, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-20 flex-shrink-0">
                    <Image
                      src={mention.logo || "/placeholder.svg"}
                      alt={mention.publication}
                      width={120}
                      height={60}
                      className="w-full h-auto"
                    />
                  </div>
                  <div>
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <Calendar size={14} className="mr-1" />
                      {mention.date}
                    </div>
                    <h3 className="font-bold text-lg text-[#121d3e] mb-1">{mention.title}</h3>
                    <p className="text-[#0e9aa7] text-sm mb-2">{mention.publication}</p>
                    <p className="text-gray-700 mb-3">{mention.excerpt}</p>
                    <a
                      href={mention.link}
                      className="inline-flex items-center text-[#0e9aa7] hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Full Article
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
