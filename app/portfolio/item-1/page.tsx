import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react"

export default function PortfolioItemPage() {
  // This would typically come from a database or CMS
  const portfolioItem = {
    id: 1,
    title: "Youth Employment Initiative",
    category: "Project",
    date: "January - December 2022",
    location: "Metro Area",
    client: "City Youth Department",
    team: "Employment Team",
    duration: "12 months",
    image: "/placeholder.svg?height=800&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    description: `
      <p>The Youth Employment Initiative was a comprehensive program designed to address the growing challenge of youth unemployment in our metro area. Working in partnership with the City Youth Department, we developed and implemented a multi-faceted approach that combined skills training, mentorship, and direct job placement services.</p>
      
      <h3>Project Objectives</h3>
      <ul>
        <li>Reduce youth unemployment in targeted neighborhoods by 15% within 12 months</li>
        <li>Provide vocational training to at least 200 young people aged 18-25</li>
        <li>Establish partnerships with at least 50 local employers for job placement</li>
        <li>Create a sustainable mentorship program connecting youth with industry professionals</li>
      </ul>
      
      <h3>Our Approach</h3>
      <p>We implemented a three-phase strategy:</p>
      
      <h4>Phase 1: Skills Assessment and Training</h4>
      <p>We began by conducting comprehensive skills assessments for all participants, identifying both strengths and areas for development. Based on these assessments, we designed customized training programs focusing on both technical skills and essential workplace competencies such as communication, teamwork, and problem-solving.</p>
      
      <h4>Phase 2: Mentorship and Work Experience</h4>
      <p>Each participant was matched with a mentor from their field of interest who provided guidance and support throughout the program. Additionally, we arranged short-term work placements with partner organizations to provide practical experience and exposure to real workplace environments.</p>
      
      <h4>Phase 3: Job Placement and Ongoing Support</h4>
      <p>The final phase focused on connecting participants with employment opportunities aligned with their skills and interests. Our team worked closely with local employers to identify suitable positions and prepare participants for the application and interview process. Following placement, we provided ongoing support to both employers and participants to ensure successful integration and retention.</p>
      
      <h3>Results and Impact</h3>
      <ul>
        <li>Trained 237 young people in various vocational and soft skills</li>
        <li>Established partnerships with 63 local employers across diverse industries</li>
        <li>Achieved a 68% job placement rate within 3 months of program completion</li>
        <li>Reduced youth unemployment in target areas by 18%, exceeding our initial goal</li>
        <li>Created a sustainable mentorship network with 85 active professional mentors</li>
      </ul>
      
      <h3>Testimonials</h3>
      <p>"This program transformed my prospects completely. I not only gained valuable skills but also the confidence to pursue a career I never thought possible." - Program Participant</p>
      
      <p>"The quality of candidates coming through this initiative has been exceptional. They're well-prepared, motivated, and bring fresh perspectives to our organization." - Employer Partner</p>
      
      <h3>Lessons Learned</h3>
      <p>The success of this initiative highlighted the importance of a holistic approach to youth employment. We found that combining skills development with mentorship and direct employer engagement created a powerful framework for sustainable impact. The project also underscored the value of ongoing support beyond initial job placement to ensure long-term success.</p>
    `,
    outcomes: [
      "237 youth trained in vocational skills",
      "68% job placement rate",
      "63 employer partnerships established",
      "18% reduction in youth unemployment",
    ],
    relatedItems: [2, 3],
  }

  return (
    <>
      <section className="bg-[#121d3e] text-white py-20">
        <div className="container mx-auto px-4">
          <Link href="/portfolio" className="inline-flex items-center text-[#0e9aa7] mb-6 hover:underline">
            <ArrowLeft size={16} className="mr-2" />
            Back to Portfolio
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <Badge className="bg-[#0e9aa7] mb-4">{portfolioItem.category}</Badge>
              <h1 className="text-3xl md:text-5xl font-bold">{portfolioItem.title}</h1>
            </div>
            <div className="mt-6 md:mt-0">
              <Link href="/contact">
                <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98]">Start a Similar Project</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
                <Image
                  src={portfolioItem.image || "/placeholder.svg"}
                  alt={portfolioItem.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div
                className="prose prose-lg max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: portfolioItem.description }}
              />

              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {portfolioItem.gallery.map((image, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${portfolioItem.title} - Gallery Image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar size={20} className="text-[#0e9aa7] mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Date</p>
                      <p className="text-gray-600">{portfolioItem.date}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin size={20} className="text-[#0e9aa7] mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-600">{portfolioItem.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users size={20} className="text-[#0e9aa7] mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Client</p>
                      <p className="text-gray-600">{portfolioItem.client}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users size={20} className="text-[#0e9aa7] mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Team</p>
                      <p className="text-gray-600">{portfolioItem.team}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock size={20} className="text-[#0e9aa7] mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Duration</p>
                      <p className="text-gray-600">{portfolioItem.duration}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#121d3e] text-white p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Key Outcomes</h3>
                <ul className="space-y-3">
                  {portfolioItem.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-[#0e9aa7] rounded-full p-1 mt-1 mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Need a Similar Project?</h3>
                <p className="text-gray-600 mb-4">
                  We'd love to help you create a similar impact for your organization or community.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-[#0e9aa7] hover:bg-[#0c8b98]">Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Related Projects</h2>
            <Link href="/portfolio" className="text-[#0e9aa7] hover:underline inline-flex items-center">
              View All
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Related Project 1"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#0e9aa7]">Project</Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Community Skills Workshop</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  A series of workshops designed to enhance employability skills in underserved communities.
                </p>
                <Link href="/portfolio/item-2">
                  <Button
                    variant="outline"
                    className="text-[#0e9aa7] border-[#0e9aa7] hover:bg-[#0e9aa7] hover:text-white"
                  >
                    View Details
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Related Project 2"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#0e9aa7]">Event</Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Career Fair 2022</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  An annual event connecting job seekers with potential employers across various industries.
                </p>
                <Link href="/portfolio/item-3">
                  <Button
                    variant="outline"
                    className="text-[#0e9aa7] border-[#0e9aa7] hover:bg-[#0e9aa7] hover:text-white"
                  >
                    View Details
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Related Project 3"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#0e9aa7]">Project</Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Digital Skills Academy</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  A comprehensive training program focused on developing essential digital skills for the modern
                  workplace.
                </p>
                <Link href="/portfolio/item-4">
                  <Button
                    variant="outline"
                    className="text-[#0e9aa7] border-[#0e9aa7] hover:bg-[#0e9aa7] hover:text-white"
                  >
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
