import Image from "next/image"
import Link from "next/link"
import HeroSection from "@/components/hero-section"
import { AnimatedSection } from "@/components/ui/animated-section"

export default function ServicesPage() {
  return (
    <>
      <AnimatedSection animation="fade-in">
        <HeroSection
          title="Our Services"
          subtitle="Discover how we can help you achieve your goals"
          backgroundColor="#0e6e8c"
        />
      </AnimatedSection>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={0.1 * index}>
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
                <div className="relative h-48 sm:h-56 md:h-64">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex flex-col justify-end p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white text-xs md:text-sm">{service.subtitle}</p>
                  </div>
                </div>
                <div className="p-4 md:p-6 flex-grow">
                  <p className="text-gray-700 text-sm md:text-base mb-4">{service.description}</p>
                  <Link
                    href={service.link}
                    className="inline-block bg-[#0e9aa7] hover:bg-[#0c8b98] text-white font-semibold py-2 px-4 rounded transition-colors text-sm md:text-base"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </>
  )
}

const services = [
  {
    slug: "logistics-management",
    title: "LOGISTICS MANAGEMENT",
    subtitle: "STREAMLINING SUPPLY CHAINS FOR EFFICIENT & TIMELY OPERATIONS",
    description:
      "Our logistics management service focuses on optimizing your supply chain processes to ensure efficient and timely operations. We provide comprehensive solutions for transportation, warehousing, inventory management, and distribution to help your business run smoothly.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/services/logistics-management",
  },
  {
    slug: "vendor-management",
    title: "VENDOR MANAGEMENT",
    subtitle: "OPTIMIZING PROCUREMENT FOR QUALITY SUPPLY CHAIN PARTNERSHIPS",
    description:
      "Our vendor management service helps you build and maintain quality partnerships throughout your supply chain. We assist with vendor selection, contract negotiation, performance evaluation, and relationship management to ensure you get the best value from your suppliers.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/services/vendor-management",
  },
  {
    slug: "event-management",
    title: "EVENT MANAGEMENT",
    subtitle: "CREATING MEMORABLE EXPERIENCES WITH FLAWLESS EXECUTION",
    description:
      "Our event management service covers everything from concept development to on-site execution. We handle planning, coordination, logistics, and promotion to ensure your events are successful, impactful, and memorable for all attendees.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/services/event-management",
  },
  {
    slug: "career-development",
    title: "CAREER DEVELOPMENT",
    subtitle: "EMPOWERING INDIVIDUALS TO ACHIEVE PROFESSIONAL EXCELLENCE",
    description:
      "Our career development service provides guidance and resources to help individuals advance in their professional journey. We offer career counseling, skills assessment, resume building, interview preparation, and personalized action plans for career growth.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/services/career-development",
  },
  {
    slug: "digital-marketing",
    title: "DIGITAL MARKETING",
    subtitle: "ENHANCING YOUR ONLINE PRESENCE FOR MAXIMUM IMPACT",
    description:
      "Our digital marketing service helps you establish and grow your online presence. We provide strategies for social media management, content creation, SEO optimization, email marketing, and analytics to increase your visibility and engagement with your target audience.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/services/digital-marketing",
  },
  {
    slug: "consulting-services",
    title: "CONSULTING SERVICES",
    subtitle: "EXPERT GUIDANCE FOR ORGANIZATIONAL GROWTH AND TRANSFORMATION",
    description:
      "Our consulting services offer expert advice and solutions for various business challenges. We provide strategic planning, process improvement, change management, and performance optimization to help your organization achieve its goals and overcome obstacles.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/services/consulting-services",
  },
  {
    slug: "merchandise",
    title: "MERCHANDISE",
    subtitle: "HIGH-QUALITY PRODUCTS THAT REPRESENT OUR MISSION AND VALUES",
    description:
      "Our merchandise collection is designed to inspire and empower. Each purchase supports our mission to create opportunities for individuals and communities around the world. From apparel to accessories, our products are made with quality materials and ethical manufacturing practices.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/services/merchandise",
  },
  {
    slug: "extended-services",
    title: "EXTENDED SERVICES",
    subtitle: "SPECIALIZED SOLUTIONS TO MEET YOUR UNIQUE NEEDS",
    description:
      "Our extended services offer specialized solutions including event management & conferences, academic ECA calendar, event management toolkit, professional development workshops, and educational consulting to address your specific challenges and requirements.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/services/extended-services",
  },
  {
    slug: "community-development",
    title: "COMMUNITY DEVELOPMENT",
    subtitle: "BUILDING STRONGER, MORE RESILIENT COMMUNITIES",
    description:
      "Our community development services focus on empowering local communities through sustainable initiatives, capacity building, and collaborative projects. We work with community leaders, organizations, and stakeholders to identify needs and implement effective solutions.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/services/community-development",
  },
  {
    slug: "youth-empowerment",
    title: "YOUTH EMPOWERMENT",
    subtitle: "INSPIRING AND EQUIPPING THE NEXT GENERATION OF LEADERS",
    description:
      "Our youth empowerment programs focus on developing the skills, confidence, and opportunities young people need to thrive. We provide mentorship, leadership training, educational support, and platforms for youth to make a positive impact in their communities.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/services/youth-empowerment",
  },
]
