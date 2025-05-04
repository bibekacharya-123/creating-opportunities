import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function MessagesSection() {
  const messages = [
    {
      role: "CEO & COFOUNDER",
      name: "Sujit Kumar Chaudary",
      message:
        "At Creating Opportunities, we believe that every person deserves access to opportunities to reach their full potential and live more fulfilling lives However, unequal access persists, and systemic barriers prevent individuals from accessing opportunities in education, employment, entrepreneurship, wellbeing, and beyond.That is why we built Creating Opportunities – to connect people with life-changing experiences that empower personal growth, career development, and global understanding. Through our global platform, we are breaking down barriers to provide diverse, meaningful opportunities..",
      image: "/assets/sujit.jpg", 
    },
    {
      role: "Strategic Advisor",
      name: "Prajwal Bhattrai",
      message:
        "As a Project Management Strategist and Youth Mentor, I wholeheartedly endorse the mission of Creating Opportunities International (CO) in bridging the information gap among young people globally. CO’s commitment to providing a diverse array of educational and developmental opportunities is commendable and has the potential to catalyze positive change on a global scale.The transformative power of educational opportunities for young individuals cannot be overstated. Through CO’s extensive database, encompassing scholarships, training, conferences, fellowships, grants, and employment avenues, young people are empowered to cultivate their skills, expand their knowledge, and effect meaningful change in their communities and beyond. By facilitating access to such opportunities, CO is playing a pivotal role in fostering equity and justice worldwide.",
      image: "/assets/prajwal.jpeg",
    },
    {
      role: "Project Advisor",
      name: "Anil Pokhrel",
      message:
        "Creating opportunities for youngsters is essential for their personal and professional development, as well as for the overall progress of society and the economy. Young people are more likely to become successful, productive, and involved members of society when they are given opportunities to explore their interests, acquire skills, and participate in meaningful activities. Creating opportunities for kids also assists in reducing poverty, inequality, and social exclusion, as well as contributing to a prosperous and sustainable future for all.As a youth trainer, he has worked directly with young people to help them develop the skills and knowledge they need to succeed in their personal and professional lives, who has a deep understanding of the challenges facing young people today, and he is committed to helping them overcome these challenges and reach their full potential.His expertise and contribution have been fundamental to the expansion of Creating Opportunities International. He has played a critical role in creating COI’s strategy, initiatives, and effects as a senior Project adviser and youth trainer. His dedication to empowering young people via technology and education has been critical in furthering COI’s purpose and making a positive influence on the lives of young people all around the world.",
      image: "/assets/anil.jpg",
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
