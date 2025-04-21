import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Marketing Professional",
      company: "ABC Company",
      quote:
        "Creating Opportunities International helped me find the perfect job that aligned with my career goals. Their guidance and support throughout the process was invaluable.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Rajesh Sharma",
      position: "Software Engineer",
      company: "Tech Solutions",
      quote:
        "The skills training program completely transformed my career trajectory. I gained practical knowledge that I could immediately apply in my work.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Priya Patel",
      position: "Recent Graduate",
      company: "University of Nepal",
      quote:
        "As a fresh graduate, I was unsure about my career path. The career counseling services provided clarity and direction, helping me secure my first job.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-4">What People Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from individuals who have transformed their careers with our support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
