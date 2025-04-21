import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Aarav Sharma",
      position: "Software Engineer",
      company: "Tech Innovations",
      quote:
        "Creating Opportunities International played a pivotal role in my career journey. Their guidance and support helped me secure a position at a leading tech company in Nepal.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Sita Thapa",
      position: "Marketing Director",
      company: "Global Brands",
      quote:
        "The skills training program at Creating Opportunities transformed my professional outlook. I gained practical knowledge and confidence that propelled my career forward.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Bikash Rai",
      position: "Entrepreneur",
      company: "Innovative Solutions",
      quote:
        "As a young entrepreneur, I found invaluable resources and mentorship through Creating Opportunities. Their support was instrumental in launching my business successfully.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Anita Gurung",
      position: "Student",
      company: "Kathmandu University",
      quote:
        "The educational opportunities facilitated by Creating Opportunities have been life-changing. I was able to access scholarships and programs that would have been out of reach otherwise.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Rajiv Patel",
      position: "Community Leader",
      company: "Rural Development Initiative",
      quote:
        "Creating Opportunities has made a significant impact in our community. Their programs have empowered our youth and created pathways for growth and development.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Maya Shrestha",
      position: "HR Manager",
      company: "Himalayan Industries",
      quote:
        "As a partner organization, we've benefited greatly from our collaboration with Creating Opportunities. They've connected us with exceptional talent and innovative ideas.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-4">Testimonials</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Hear from individuals and organizations who have experienced the impact of our work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="mb-4 text-[#0e9aa7]">
                  <Quote size={32} />
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#121d3e]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}, {testimonial.company}
                    </p>
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
