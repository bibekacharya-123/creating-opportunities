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
        <div className="space-y-12">
          {services.map((service, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={0.1 * index}>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className={`relative h-[30rem] sm:h-[36rem] md:h-[40rem] ${index % 2 === 1 ? "order-last md:order-first" : ""}`}>
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover rounded-lg shadow-lg"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-700 text-sm md:text-base mb-4">{service.description}</p>
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
      "Streamlining the flow of goods, services, and information across the supply chain, our logistics management services ensure timely delivery, cost-effectiveness, and operational efficiency.",
    image: "/assets/services/logi.jpg",
    link: "assets/services/logi.jpg",
  },
  {
    slug: "vendor-management",
    title: "VENDOR MANAGEMENT",
    subtitle: "OPTIMIZING PROCUREMENT FOR QUALITY SUPPLY CHAIN PARTNERSHIPS",
    description:
      "Our vendor management service helps you build and maintain quality partnerships throughout your supply chain. We assist with vendor selection, contract negotiation, performance evaluation, and relationship management to ensure you get the best value from your suppliers.",
    image: "/assets/services/vendor.jpg",
    link: "/services/vendor-management",
  },
  {
    slug: "event-management",
    title: "Human Resource Management",
    subtitle: "CREATING MEMORABLE EXPERIENCES WITH FLAWLESS EXECUTION",
    description:
      "Services related to the management of personnel, including recruitment, training, and development.",
    image: "/assets/services/human.jpg",
    link: "/services/event-management",
  },
  {
    slug: "career-development",
    title: "Training & Event Management",
    subtitle: "EMPOWERING INDIVIDUALS TO ACHIEVE PROFESSIONAL EXCELLENCE",
    description:
      "Our career development service provides guidance and resources to help individuals advance in their professional journey. We offer career counseling, skills assessment, resume building, interview preparation, and personalized action plans for career growth.",
    image: "/assets/services/traning.jpg",
    link: "/services/career-development",
  },
  {
    slug: "digital-marketing",
    title: "Corporate Events & Strategic Business Projects",
    subtitle: "ENHANCING YOUR ONLINE PRESENCE FOR MAXIMUM IMPACT",
    description:
      "Our digital marketing service helps you establish and grow your online presence. We provide strategies for social media management, content creation, SEO optimization, email marketing, and analytics to increase your visibility and engagement with your target audience.",
    image: "/assets/services/corpo.jpg",
    link: "/services/digital-marketing",
  },
  {
    slug: "consulting-services",
    title: "Advancing Professional Development & Learning",
    subtitle: "EXPERT GUIDANCE FOR ORGANIZATIONAL GROWTH AND TRANSFORMATION",
    description:
      "Our consulting services offer expert advice and solutions for various business challenges. We provide strategic planning, process improvement, change management, and performance optimization to help your organization achieve its goals and overcome obstacles.",
    image: "/assets/services/adv.jpg",
    link: "/services/consulting-services",
  },
  {
    slug: "merchandise",
    title: "Opportunity Matching & Application Support",
    subtitle: "HIGH-QUALITY PRODUCTS THAT REPRESENT OUR MISSION AND VALUES",
    description:
      "Our merchandise collection is designed to inspire and empower. Each purchase supports our mission to create opportunities for individuals and communities around the world. From apparel to accessories, our products are made with quality materials and ethical manufacturing practices.",
    image: "/assets/services/opp.jpg",
    link: "/services/merchandise",
  },
  {
    slug: "extended-services",
    title: "Career Development & Technical Partnership",
    subtitle: "SPECIALIZED SOLUTIONS TO MEET YOUR UNIQUE NEEDS",
    description:
      "Our extended services offer specialized solutions including event management & conferences, academic ECA calendar, event management toolkit, professional development workshops, and educational consulting to address your specific challenges and requirements.",
    image: "/assets/services/career.jpg",
    link: "/services/extended-services",
  },
]
