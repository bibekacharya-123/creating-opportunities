import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"

export default function KudosMentionsSection() {
  const awards = [
    {
      title: "Excellence in Service Award",
      organization: "Nepal Business Association",
      year: "2023",
      description: "Recognized for outstanding contribution to career development and opportunity creation.",
      logo: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Social Impact Award",
      organization: "Global Changemakers",
      year: "2022",
      description: "Honored for creating significant social impact through our initiatives and programs.",
      logo: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Innovation in Education",
      organization: "Education Forum Nepal",
      year: "2021",
      description: "Awarded for innovative approaches to educational opportunity creation and access.",
      logo: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Community Development Award",
      organization: "Nepal Development Council",
      year: "2020",
      description: "Recognized for contributions to community development and empowerment.",
      logo: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-4">KUDOS & MENTIONS</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Recognition and acknowledgments we've received for our work and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#0e9aa7]">
                    <Image
                      src={award.logo || "/placeholder.svg"}
                      alt={award.organization}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <Award className="text-[#0e9aa7] mr-2" size={16} />
                      <span className="text-sm text-gray-500">{award.year}</span>
                    </div>
                    <h3 className="font-bold text-lg text-[#121d3e] mb-1">{award.title}</h3>
                    <p className="text-[#0e9aa7] text-sm mb-2">{award.organization}</p>
                    <p className="text-gray-700">{award.description}</p>
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
