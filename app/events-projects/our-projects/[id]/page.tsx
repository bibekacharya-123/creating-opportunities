import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Calendar, MapPin, Users, CheckCircle, Download, Share2 } from "lucide-react"

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = {
    id: params.id,
    title: "Youth Empowerment Program",
    duration: "2023-2025",
    location: "Nationwide, Nepal",
    category: "Education",
    status: "Ongoing",
    image: "/placeholder.svg?height=400&width=800",
    longDescription: `The Youth Empowerment Program is a flagship initiative of Creating Opportunities International, 
    designed to address the challenges faced by young people in Nepal. Through a combination of education, 
    skill development, mentorship, and community engagement, the program aims to empower youth to become 
    agents of positive change in their communities.`,
    objectives: [
      "Enhance the educational and skill development opportunities for youth",
      "Promote entrepreneurship and innovation among young people",
      "Develop leadership skills and civic engagement",
      "Create a supportive network for youth development",
      "Facilitate access to employment and economic opportunities",
      "Empower youth to address community challenges",
    ],
    activities: [
      {
        title: "Educational Workshops",
        description:
          "Regular workshops on various topics including digital literacy, financial management, and career development.",
      },
      {
        title: "Skill Development Training",
        description:
          "Hands-on training in vocational skills, soft skills, and technical skills relevant to the job market.",
      },
      {
        title: "Mentorship Program",
        description: "Connecting youth with experienced professionals for guidance and support.",
      },
      {
        title: "Community Projects",
        description: "Implementing community-based projects to address local challenges and develop leadership skills.",
      },
      {
        title: "Entrepreneurship Support",
        description: "Providing resources, training, and seed funding for youth-led entrepreneurial ventures.",
      },
      {
        title: "Networking Events",
        description: "Organizing events to connect youth with potential employers, mentors, and peers.",
      },
    ],
    gallery: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
  }

  return (
    <>
      <section className="bg-[#121d3e] text-white py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/events-projects/our-projects"
            className="inline-flex items-center text-white/80 hover:text-white mb-6"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Link>
          <div className="flex flex-wrap items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {project.duration}
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  {project.location}
                </div>
                <div className="flex items-center">
                  <Users size={16} className="mr-2" />
                  {project.impact?.beneficiaries}
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="bg-[#0e9aa7] text-white px-4 py-2 rounded-full text-sm font-medium">
                {project.status}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8 rounded-lg overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </div>

              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="activities">Activities</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-4">Project Overview</h2>
                      <p className="mb-6 text-gray-700">{project.longDescription}</p>

                      <h3 className="text-lg font-bold mt-6 mb-3">Project Objectives</h3>
                      <ul className="space-y-2">
                        {project.objectives.map((objective, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="text-[#0e9aa7] mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                            <span>{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="activities" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-6">Project Activities</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.activities.map((activity, index) => (
                          <div key={index} className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-bold text-[#0e9aa7] mb-2">{activity.title}</h3>
                            <p className="text-gray-700">{activity.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="gallery" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-6">Project Gallery</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {project.gallery.map((image, index) => (
                          <div key={index} className="rounded-lg overflow-hidden">
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`Project image ${index + 1}`}
                              width={300}
                              height={200}
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Project Details</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-700">Category</h3>
                      <p>{project.category}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">Duration</h3>
                      <p>{project.duration}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">Location</h3>
                      <p>{project.location}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">Status</h3>
                      <p>{project.status}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                  <p className="text-gray-600 mb-4">For any inquiries about this project, please contact:</p>
                  <div className="space-y-2">
                    <p>
                      <span className="font-semibold">Email:</span> projects@creatingoppo.com
                    </p>
                    <p>
                      <span className="font-semibold">Phone:</span> +977 1234567890
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-8">Support This Project</h2>
          <p className="max-w-2xl mx-auto text-gray-700 mb-8">
            Your support can help us expand this project and create even greater impact. There are several ways you can
            contribute to the Youth Empowerment Program.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/donate">
              <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white px-8 py-6 rounded font-bold text-lg">
                DONATE NOW
              </Button>
            </Link>
            <Link href="/get-involved/become-partner">
              <Button
                variant="outline"
                className="border-[#0e9aa7] text-[#0e9aa7] hover:bg-[#0e9aa7] hover:text-white px-8 py-6 rounded font-bold text-lg"
              >
                BECOME A PARTNER
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-[#0e9aa7] text-[#0e9aa7] hover:bg-[#0e9aa7] hover:text-white px-8 py-6 rounded font-bold text-lg"
              >
                VOLUNTEER
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
