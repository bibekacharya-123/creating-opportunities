import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import { AnimatedSection } from "@/components/ui/animated-section"

// Mock service data - in a real app, this would come from a database or API
const services = [
  {
    slug: "logistics-management",
    title: "LOGISTICS MANAGEMENT",
    subtitle: "STREAMLINING SUPPLY CHAINS FOR EFFICIENT & TIMELY OPERATIONS",
    description:
      "Our logistics management service focuses on optimizing your supply chain processes to ensure efficient and timely operations. We provide comprehensive solutions for transportation, warehousing, inventory management, and distribution to help your business run smoothly.",
    image: "/placeholder.svg?height=800&width=1600",
    detailedDescription: [
      "Logistics management is the backbone of any successful operation. At Creating Opportunities International, we understand the critical nature of a well-functioning supply chain. Our logistics management services are designed to streamline your operations, reduce costs, and improve overall efficiency.",
      "We take a holistic approach to logistics, analyzing your entire supply chain from end to end. This comprehensive assessment allows us to identify bottlenecks, inefficiencies, and opportunities for improvement. Our team of logistics experts then develops and implements customized solutions tailored to your specific needs.",
      "Our logistics management services include:",
    ],
    features: [
      {
        title: "Supply Chain Optimization",
        description:
          "We analyze your current supply chain structure and identify opportunities for optimization, ensuring smooth and efficient flow of goods and services.",
      },
      {
        title: "Transportation Management",
        description:
          "We help you select the most cost-effective and efficient transportation methods, routes, and carriers to meet your delivery requirements.",
      },
      {
        title: "Warehouse Management",
        description:
          "Our experts optimize your warehouse layout, inventory placement, and picking processes to maximize space utilization and efficiency.",
      },
      {
        title: "Inventory Control",
        description:
          "We implement systems and processes to maintain optimal inventory levels, reducing carrying costs while ensuring product availability.",
      },
      {
        title: "Distribution Network Design",
        description:
          "We design and optimize your distribution network to ensure products reach customers quickly and cost-effectively.",
      },
      {
        title: "Performance Metrics & Analytics",
        description:
          "We establish key performance indicators and reporting systems to continuously monitor and improve logistics operations.",
      },
    ],
    benefits: [
      "Reduced operational costs through optimized processes",
      "Improved customer satisfaction through timely deliveries",
      "Enhanced visibility and control over your supply chain",
      "Increased adaptability to market changes and disruptions",
      "Streamlined operations leading to higher productivity",
      "Data-driven decision making for continuous improvement",
    ],
  },
 
 
 
  
  
  
]

export default function ServicePage({ params }: { params: { slug: string } }) {
  // Check if we're trying to access the merchandise page
  if (params.slug === "merchandise") {
    // Redirect to the specific merchandise page
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Redirecting to Merchandise Page...</h2>
          <p>
            If you are not redirected automatically, please{" "}
            <Link href="/services/merchandise" className="text-blue-600 underline">
              click here
            </Link>
            .
          </p>

          {/* Client-side redirect script */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.location.href = "/services/merchandise";
              `,
            }}
          />
        </div>
      </div>
    )
  }

  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div>
      {/* Hero Section with Service Image */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <AnimatedSection animation="fade-up">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Service Title and Subtitle */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0e6e8c] mb-3">{service.title}</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">{service.subtitle}</p>

            {/* Service Description */}
            <div className="prose prose-lg max-w-none mb-12">
              {service.detailedDescription.map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Service Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {service.features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-[#0e6e8c] mb-3">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="bg-[#f7f9fa] p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold text-[#0e6e8c] mb-6">Benefits</h2>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-[#0e9aa7] mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="text-center py-8">
              <h2 className="text-2xl font-bold mb-6">
                Ready to get started with our {service.title.toLowerCase()} services?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white px-8 py-6 rounded font-bold text-lg">
                    CONTACT US
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="px-8 py-6 rounded font-bold text-lg">
                    EXPLORE OTHER SERVICES
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
