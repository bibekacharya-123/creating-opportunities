import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, UserPlus, Handshake, FileText, Megaphone, PlusCircle } from "lucide-react"

export default function JoinCommunitySection() {
  const communityOptions = [
    {
      icon: Users,
      title: "Become a Member / Volunteer",
      description: "Join our community and contribute your skills and time to make a difference.",
      link: "/get-involved/become-member",
    },
    {
      icon: UserPlus,
      title: "Become a COI Ambassador",
      description: "Represent Creating Opportunities in your community and help spread our mission.",
      link: "/get-involved/become-ambassador",
    },
    {
      icon: Handshake,
      title: "Be Our Partner Organization",
      description: "Collaborate with us to create greater impact through strategic partnership.",
      link: "/get-involved/become-partner",
    },
    {
      icon: FileText,
      title: "COI Brochure",
      description: "Download our brochure to learn more about our programs and initiatives.",
      link: "/brochure",
    },
    {
      icon: Megaphone,
      title: "Advertise with us",
      description: "Reach our network of professionals and organizations with your message.",
      link: "/get-involved/advertise",
    },
    {
      icon: PlusCircle,
      title: "Post an Opportunity",
      description: "Share job openings, internships, scholarships, and other opportunities with our community.",
      link: "/opportunities/post",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-4">JOIN OUR COMMUNITY</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Be part of our growing community and help us create more opportunities for individuals across Nepal and
            beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityOptions.map((option, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#0e9aa7]/10 rounded-lg flex items-center justify-center mb-4">
                  <option.icon className="text-[#0e9aa7]" size={24} />
                </div>
                <h3 className="font-bold text-lg text-[#121d3e] mb-2">{option.title}</h3>
                <p className="text-gray-700 mb-4">{option.description}</p>
                <Link href={option.link}>
                  <Button
                    variant="outline"
                    className="w-full border-[#0e9aa7] text-[#0e9aa7] hover:bg-[#0e9aa7] hover:text-white"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
