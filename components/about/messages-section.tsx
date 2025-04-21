import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function MessagesSection() {
  const messages = [
    {
      role: "CEO",
      name: "John Doe",
      message:
        "At Creating Opportunities International, we believe in the power of opportunities to transform lives. Our mission is to connect talented individuals with opportunities that align with their aspirations and potential. We are committed to fostering growth, nurturing aspirations, and creating pathways to success for countless individuals across Nepal and beyond.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      role: "Strategic Advisor",
      name: "Jane Smith",
      message:
        "Our strategic vision is to create a platform that not only connects individuals with opportunities but also equips them with the skills and knowledge they need to succeed. We are dedicated to building partnerships and collaborations that expand the scope and impact of our work, reaching more individuals and communities in need of support.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      role: "Project Advisor",
      name: "Rajesh Sharma",
      message:
        "Our projects are designed with a focus on sustainability and long-term impact. We work closely with communities, organizations, and individuals to identify needs and develop initiatives that address these needs effectively. Our approach is collaborative, inclusive, and centered on creating lasting positive change.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-4">Messages from Our Leadership</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Hear from the visionaries who guide our organization's mission and initiatives.
          </p>
        </div>

        <div className="space-y-8">
          {messages.map((message, index) => (
            <Card key={index} className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-[#121d3e]">
                    <div className="h-full flex flex-col items-center justify-center p-8 text-white">
                      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white">
                        <Image
                          src={message.image || "/placeholder.svg"}
                          alt={message.name}
                          width={200}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-1">{message.name}</h3>
                      <p className="text-[#0e9aa7]">Message from {message.role}</p>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="mb-4 text-[#0e9aa7]">
                      <Quote size={32} />
                    </div>
                    <p className="text-gray-700 italic">{message.message}</p>
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
