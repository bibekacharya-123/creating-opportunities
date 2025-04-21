import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, MapPin } from "lucide-react"
import HeroSection from "@/components/hero-section"

export default function OurProjectsPage() {
  const ongoingProjects = [
    {
      id: 4,
      title: "Women in Leadership",
      duration: "2023-2025",
      location: "Various Locations",
      image: "/placeholder.svg?height=200&width=300",
      description: "A project focused on developing leadership skills among women and promoting gender equality.",
      category: "Gender Equality",
    },
    {
      id: 5,
      title: "Environmental Conservation Initiative",
      duration: "2024-2026",
      location: "Various Locations",
      image: "/placeholder.svg?height=200&width=300",
      description: "A project aimed at promoting environmental conservation and sustainable practices.",
      category: "Environment",
    },
    {
      id: 6,
      title: "Rural Education Access Program",
      duration: "2024-2027",
      location: "Rural Nepal",
      image: "/placeholder.svg?height=200&width=300",
      description: "A program designed to improve access to quality education in rural areas.",
      category: "Education",
    },
    {
      id: 7,
      title: "Healthcare Outreach Project",
      duration: "2023-2025",
      location: "Underserved Communities",
      image: "/placeholder.svg?height=200&width=300",
      description: "A project providing healthcare services and education to underserved communities.",
      category: "Healthcare",
    },
    {
      id: 8,
      title: "Digital Literacy Campaign",
      duration: "2024-2026",
      location: "Nationwide",
      image: "/placeholder.svg?height=200&width=300",
      description: "A campaign to improve digital literacy and access to technology across Nepal.",
      category: "Technology",
    },
    {
      id: 9,
      title: "Entrepreneurship Development Program",
      duration: "2024-2027",
      location: "Various Locations",
      image: "/placeholder.svg?height=200&width=300",
      description: "A program supporting aspiring entrepreneurs with training, resources, and mentorship.",
      category: "Entrepreneurship",
    },
  ]

  const completedProjects = [
    {
      id: 10,
      title: "Youth Leadership Summit 2023",
      duration: "2023",
      location: "Kathmandu, Nepal",
      image: "/placeholder.svg?height=200&width=300",
      description: "A summit that brought together young leaders to discuss pressing issues and develop solutions.",
      category: "Leadership",
    },
    {
      id: 11,
      title: "Community Health Initiative",
      duration: "2022-2023",
      location: "Rural Nepal",
      image: "/placeholder.svg?height=200&width=300",
      description: "An initiative that improved health outcomes in rural communities through education and services.",
      category: "Healthcare",
    },
    {
      id: 12,
      title: "Educational Resource Development",
      duration: "2021-2023",
      location: "Nationwide",
      image: "/placeholder.svg?height=200&width=300",
      description: "A project that developed and distributed educational resources to schools across Nepal.",
      category: "Education",
    },
  ]

  const projectCategories = [
    "All",
    "Education",
    "Community",
    "Technology",
    "Healthcare",
    "Environment",
    "Gender Equality",
    "Entrepreneurship",
    "Leadership",
  ]

  return (
    <>
      <HeroSection
        title="Our Projects"
        subtitle="Discover the various projects initiated by Creating Opportunities International to create positive impact and transform lives."
        backgroundColor="#121d3e"
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto">
              <TabsList className="grid grid-flow-col auto-cols-max gap-2">
                {projectCategories.map((category) => (
                  <TabsTrigger key={category} value={category.toLowerCase()}>
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...ongoingProjects, ...completedProjects].map((project) => (
                  <Card key={project.id} className="overflow-hidden">
                    <div className="h-48 relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-[#0e9aa7] text-white px-3 py-1 rounded-full text-xs">
                        {project.category}
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-500 text-sm flex items-center">
                          <Clock size={14} className="mr-1" />
                          {project.duration}
                        </span>
                        <span className="text-gray-500 text-sm flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {project.location}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Link href={`/events-projects/our-projects/${project.id}`} className="w-full">
                        <Button className="w-full bg-[#0e9aa7] hover:bg-[#0c8b98]">Learn More</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {projectCategories.slice(1).map((category) => (
              <TabsContent key={category} value={category.toLowerCase()}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[...ongoingProjects, ...completedProjects]
                    .filter((project) => project.category === category)
                    .map((project) => (
                      <Card key={project.id} className="overflow-hidden">
                        <div className="h-48 relative">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-500 text-sm flex items-center">
                              <Clock size={14} className="mr-1" />
                              {project.duration}
                            </span>
                            <span className="text-gray-500 text-sm flex items-center">
                              <MapPin size={14} className="mr-1" />
                              {project.location}
                            </span>
                          </div>
                          <CardTitle className="text-xl">{project.title}</CardTitle>
                          <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardFooter>
                          <Link href={`/events-projects/our-projects/${project.id}`} className="w-full">
                            <Button className="w-full bg-[#0e9aa7] hover:bg-[#0c8b98]">Learn More</Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#121d3e] mb-6">Our Project Approach</h2>
              <p className="text-gray-700 mb-4">
                At Creating Opportunities International, we take a comprehensive and sustainable approach to our
                projects. We believe in creating long-term impact through careful planning, implementation, and
                evaluation.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#121d3e]">Needs Assessment</h3>
                    <p className="text-gray-700">
                      We begin by identifying the needs and challenges of the communities we aim to serve.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#121d3e]">Project Design</h3>
                    <p className="text-gray-700">
                      We design projects that address these needs with clear objectives and measurable outcomes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#121d3e]">Implementation</h3>
                    <p className="text-gray-700">
                      We implement projects with a focus on quality, efficiency, and community involvement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#121d3e]">Monitoring & Evaluation</h3>
                    <p className="text-gray-700">
                      We continuously monitor and evaluate our projects to ensure they are achieving their intended
                      impact.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#121d3e]">Sustainability</h3>
                    <p className="text-gray-700">
                      We focus on creating sustainable solutions that continue to benefit communities long after the
                      project ends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Our Project Approach"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#121d3e] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Want to support our projects?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            We welcome support from individuals and organizations who share our vision and want to contribute to our
            projects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/get-involved/become-partner">
              <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white px-8 py-6 rounded font-bold text-lg">
                BECOME A PARTNER
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#121d3e] px-8 py-6 rounded font-bold text-lg"
              >
                CONTACT US
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
