import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Twitter, Linkedin } from "lucide-react"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Prajwal Bhattarai",
      position: "Senior Strategic Advisor & CEO",
      
      image: "/assets/prajwal.jpeg",
      social: {
        facebook: "https://www.facebook.com/prajwal7bhattarai",
        twitter: "https://x.com/AcademicPrajwal?fbclid=IwAR0Qm_GYpYHS1KohRUWH_lo31I46S326Zv-JxHTCgyiaPXLjX4ACdKsz4Ms",
        linkedin: "#",
      },
    },
    {
      name: " Sujit k. Chaudhary",
      position: " CEO & Managing Director",
     
      image: "/assets/sujit.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Prasanna Dhungel ",
      position: "Head of IT",
      bio: "Rajesh specializes in building strategic partnerships with organizations across sectors.",
      image: "/assets/prassanna.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Bibek Yonzon",
      position: "Legal Counselors",
      bio: "Priya oversees the development and implementation of our training and development programs.",
      image: "/assets/bibek.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Ashmit Kumar Jha",
      position: " Research Officer / Program Coordinator",
      bio: "Michael leads our marketing efforts with innovative strategies to reach our target audience.",
      image: "/assets/assmit.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Ritika Shah",
      position: "Communication Officer",
      bio: "Sarah helps individuals identify and pursue opportunities aligned with their career goals.",
      image: "/assets/ritika.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "David Wilson",
      position: "Technology Lead",
      bio: "David ensures our digital platforms provide seamless experiences for all users.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Anita Gurung",
      position: "Community Engagement Manager",
      bio: "Anita builds and nurtures relationships with communities across Nepal.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-4">Meet Our Team</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Meet the dedicated professionals who work tirelessly to create opportunities and transform lives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden group">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-center space-x-4 mb-2">
                        <a
                          href={member.social.facebook}
                          className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors duration-300"
                          aria-label={`${member.name}'s Facebook`}
                        >
                          <Facebook size={16} className="text-white" />
                        </a>
                        <a
                          href={member.social.twitter}
                          className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors duration-300"
                          aria-label={`${member.name}'s Twitter`}
                        >
                          <Twitter size={16} className="text-white" />
                        </a>
                        <a
                          href={member.social.linkedin}
                          className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors duration-300"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <Linkedin size={16} className="text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg text-[#121d3e]">{member.name}</h3>
                  <p className="text-[#0e9aa7] font-medium mb-2">{member.position}</p>
                 
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
