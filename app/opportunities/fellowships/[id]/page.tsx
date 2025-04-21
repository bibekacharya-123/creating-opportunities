"use client"
import { useState } from "react";
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import { CalendarDays, MapPin, Users, ExternalLink, CheckCircle, Mail, Building, GraduationCap } from "lucide-react"
import { Modal, ModalHeader, ModalBody, ModalFooter } from "@/components/ui/modal"

// This is a mock function to simulate fetching fellowship data
// In a real application, this would fetch data from an API or database
function getFellowshipData(id: string) {
  // Sample data for demonstration
  const fellowships = {
    "global-leadership": {
      title: "Global Leadership Fellowship",
      organization: "International Development Institute",
      location: "Multiple Locations",
      duration: "1 Year",
      startDate: "September 2025",
      applicationDeadline: "June 30, 2025",
      stipend: "$25,000",
      positions: "15",
      eligibility: "Graduate degree holders with 2-5 years of professional experience",
      featured: true,
      image: "/placeholder.svg?height=400&width=600",
      description:
        "The Global Leadership Fellowship is designed for emerging leaders committed to addressing global challenges. Fellows will engage in leadership training, field placements, and collaborative projects while receiving mentorship from experienced professionals in international development.",
      benefits: [
        "Monthly stipend of $25,000 for the year",
        "Health insurance coverage",
        "Professional development allowance",
        "Travel expenses for field placements",
        "Networking opportunities with global leaders",
        "Post-fellowship career support",
      ],
      components: [
        "Leadership training workshops",
        "Field placements in partner organizations",
        "Research and policy analysis projects",
        "Mentorship from senior professionals",
        "Global summit participation",
        "Community engagement initiatives",
      ],
      testimonials: [
        {
          text: "This fellowship transformed my career trajectory and gave me the skills and network to make a real impact in international development.",
          author: "Maya Sharma",
          position: "Former Fellow, 2023 Cohort",
          image: "/placeholder.svg?height=80&width=80",
        },
        {
          text: "The hands-on experience and mentorship I received during the fellowship were invaluable. I now lead a major initiative that stemmed from my fellowship project.",
          author: "David Chen",
          position: "Former Fellow, 2022 Cohort",
          image: "/placeholder.svg?height=80&width=80",
        },
      ],
      hostOrganizations: [
        "United Nations Development Programme",
        "World Bank",
        "International NGO Alliance",
        "Regional Development Banks",
        "Government Ministries",
      ],
    },
    "climate-action": {
      title: "Climate Action Fellowship",
      organization: "Environmental Research Foundation",
      location: "Kathmandu, Nepal with Field Work",
      duration: "18 Months",
      startDate: "August 2025",
      applicationDeadline: "July 15, 2025",
      stipend: "$20,000",
      positions: "10",
      eligibility: "Bachelor's degree in environmental science or related field, research experience preferred",
      featured: true,
      image: "/placeholder.svg?height=400&width=600",
      description:
        "The Climate Action Fellowship supports researchers and practitioners working on climate change mitigation and adaptation strategies in Nepal. Fellows will conduct field research, develop policy recommendations, and implement community-based climate resilience projects.",
      benefits: [
        "Monthly stipend of $20,000 for 18 months",
        "Research and project implementation budget",
        "Field equipment and resources",
        "Publication support",
        "Conference participation funding",
        "Professional development workshops",
      ],
      components: [
        "Climate science and policy training",
        "Field research in vulnerable regions",
        "Community-based adaptation projects",
        "Policy analysis and advocacy",
        "Scientific publication development",
        "Public engagement and education",
      ],
      testimonials: [
        {
          text: "This fellowship allowed me to conduct critical research on glacial melt in the Himalayas while developing practical solutions for affected communities.",
          author: "Anita Gurung",
          position: "Former Fellow, 2023 Cohort",
          image: "/placeholder.svg?height=80&width=80",
        },
        {
          text: "The support and resources provided by this fellowship were exceptional. I was able to publish my research in leading journals and present at international conferences.",
          author: "Raj Patel",
          position: "Former Fellow, 2022 Cohort",
          image: "/placeholder.svg?height=80&width=80",
        },
      ],
      hostOrganizations: [
        "Nepal Climate Change Council",
        "International Centre for Integrated Mountain Development",
        "Ministry of Forests and Environment",
        "Community Adaptation Centers",
        "Research Universities",
      ],
    },
    "social-entrepreneurship": {
      title: "Social Entrepreneurship Fellowship",
      organization: "Innovation Hub",
      location: "Remote with Quarterly Meetups",
      duration: "1 Year",
      startDate: "October 2025",
      applicationDeadline: "August 5, 2025",
      stipend: "$18,000",
      positions: "12",
      eligibility: "Entrepreneurs with innovative social impact ideas, no specific degree required",
      featured: true,
      image: "/placeholder.svg?height=400&width=600",
      description:
        "The Social Entrepreneurship Fellowship supports innovators developing sustainable solutions to social and environmental challenges. Fellows receive funding, mentorship, and technical assistance to launch or scale their social enterprises.",
      benefits: [
        "Monthly stipend of $18,000",
        "Seed funding of up to $10,000 for venture",
        "Business development support",
        "Legal and accounting services",
        "Marketing and branding assistance",
        "Investor pitch preparation",
      ],
      components: [
        "Business model development",
        "Product/service refinement",
        "Market research and validation",
        "Financial planning and management",
        "Impact measurement framework",
        "Scaling strategy development",
      ],
      testimonials: [
        {
          text: "This fellowship provided the perfect combination of funding, mentorship, and peer support to help me scale my education technology social enterprise.",
          author: "Suman Thapa",
          position: "Founder, EduAccess Nepal",
          image: "/placeholder.svg?height=80&width=80",
        },
        {
          text: "The connections I made through this fellowship were invaluable. I secured additional investment and partnerships that helped my waste management solution reach five new communities.",
          author: "Priya Joshi",
          position: "CEO, WasteSmart",
          image: "/placeholder.svg?height=80&width=80",
        },
      ],
      hostOrganizations: [
        "Social Innovation Accelerator",
        "Impact Investor Network",
        "Technology Incubators",
        "Corporate Social Responsibility Departments",
        "International Development Organizations",
      ],
    },
  }

  // Return the fellowship data for the given ID, or a default if not found
  return fellowships[id as keyof typeof fellowships] || fellowships["global-leadership"]
}

export default function FellowshipDetailPage({ params }: { params: { id: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false); // Moved useState here
  const fellowship = getFellowshipData(params.id);

  return (
    <>
      <div className="relative w-full h-[300px] md:h-[400px] bg-gradient-to-r from-[#121d3e] to-[#1e3a8a] text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full md:w-3/4 lg:w-2/3">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-[#0e9aa7] hover:bg-[#0c8b98]">Fellowship</Badge>
            {fellowship.featured && (
              <Badge variant="outline" className="text-white border-white">
                Featured
              </Badge>
            )}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{fellowship.title}</h1>
          <p className="text-lg mb-6">Offered by {fellowship.organization}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/opportunities/fellowships">
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                All Fellowships
              </Button>
            </Link>
            <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white" onClick={() => setIsModalOpen(true)}>
              Apply Now
            </Button>
          </div>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#121d3e] mb-4">About This Fellowship</h2>
                <p className="text-gray-700 mb-6">{fellowship.description}</p>
                <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-6">
                  <Image
                    src={fellowship.image || "/placeholder.svg"}
                    alt={fellowship.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#121d3e] mb-4">Fellowship Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {fellowship.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-[#0e9aa7] flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#121d3e] mb-4">Fellowship Components</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {fellowship.components.map((component, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-[#0e9aa7] flex-shrink-0 mt-0.5" />
                      <span>{component}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#121d3e] mb-4">Host Organizations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {fellowship.hostOrganizations.map((org, index) => (
                    <div key={index} className="flex items-start">
                      <Building className="h-5 w-5 mr-2 text-[#0e9aa7] flex-shrink-0 mt-0.5" />
                      <span>{org}</span>
                    </div>
                  ))}
                </div>
              </div>

           
            </div>

            <div>
              <div className="bg-gray-50 p-6 rounded-lg sticky top-8">
                <h3 className="text-xl font-bold text-[#121d3e] mb-4">Fellowship Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Building className="h-5 w-5 mr-3 text-[#0e9aa7] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Organization</p>
                      <p className="text-gray-600">{fellowship.organization}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-[#0e9aa7] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-600">{fellowship.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CalendarDays className="h-5 w-5 mr-3 text-[#0e9aa7] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Duration</p>
                      <p className="text-gray-600">{fellowship.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CalendarDays className="h-5 w-5 mr-3 text-[#0e9aa7] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Start Date</p>
                      <p className="text-gray-600">{fellowship.startDate}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-3 text-[#0e9aa7] flex-shrink-0 mt-0.5"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                    <div>
                      <p className="font-medium">Stipend</p>
                      <p className="text-gray-600">{fellowship.stipend}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 mr-3 text-[#0e9aa7] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Available Positions</p>
                      <p className="text-gray-600">{fellowship.positions}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <GraduationCap className="h-5 w-5 mr-3 text-[#0e9aa7] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Eligibility</p>
                      <p className="text-gray-600">{fellowship.eligibility}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CalendarDays className="h-5 w-5 mr-3 text-[#0e9aa7] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Application Deadline</p>
                      <p className="text-gray-600">{fellowship.applicationDeadline}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <Button className="w-full bg-[#0e9aa7] hover:bg-[#0c8b98]" onClick={() => setIsModalOpen(true)}>
                    Apply Now <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalHeader>Apply for {fellowship.title}</ModalHeader>
        <ModalBody>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#0e9aa7] focus:border-[#0e9aa7]"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#0e9aa7] focus:border-[#0e9aa7]"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#0e9aa7] focus:border-[#0e9aa7]"
                placeholder="Enter the title"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#0e9aa7] focus:border-[#0e9aa7]"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div>
              <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                Upload File
              </label>
              <input
                type="file"
                id="file"
                name="file"
                className="mt-1 block w-full text-gray-700"
              />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setIsModalOpen(false)} className="bg-gray-500 hover:bg-gray-600 text-white">
            Close
          </Button>
          <Button type="submit" className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white">
            Submit Application
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}
