import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, ArrowRight, Calendar } from "lucide-react"
import HeroSection from "@/components/hero-section"

export default function OurInitiativesPage() {
  const currentInitiatives = [
    {
      id: 4,
      title: "Career Mentorship Program",
      schedule: "Ongoing",
      location: "Online & In-person",
      image: "/placeholder.svg?height=200&width=300",
      description: "Connecting professionals with mentees for career guidance and development.",
      category: "Career Development",
    },
    {
      id: 5,
      title: "Community Volunteer Network",
      schedule: "Ongoing",
      location: "Nationwide",
      image: "/placeholder.svg?height=200&width=300",
      description: "Mobilizing volunteers for community service and development projects.",
      category: "Community Service",
    },
    {
      id: 6,
      title: "Educational Scholarship Program",
      schedule: "Annual, Applications open in January",
      location: "Nationwide",
      image: "/placeholder.svg?height=200&width=300",
      description: "Providing scholarships to deserving students for higher education.",
      category: "Education",
    },
    {
      id: 7,
      title: "Women in Tech Initiative",
      schedule: "Ongoing",
      location: "Various Locations",
      image: "/placeholder.svg?height=200&width=300",
      description: "Supporting and encouraging women to pursue careers in technology.",
      category: "Gender Equality",
    },
    {
      id: 8,
      title: "Rural Entrepreneurship Support",
      schedule: "Ongoing",
      location: "Rural Nepal",
      image: "/placeholder.svg?height=200&width=300",
      description: "Supporting rural entrepreneurs with resources, training, and market access.",
      category: "Entrepreneurship",
    },
    {
      id: 9,
      title: "Youth Innovation Challenge",
      schedule: "Annual, May-July",
      location: "Nationwide",
      image: "/placeholder.svg?height=200&width=300",
      description: "Challenging young innovators to develop solutions for pressing social issues.",
      category: "Innovation",
    },
  ]

  const upcomingInitiatives = [
    {
      id: 10,
      title: "Digital Literacy for Seniors",
      launchDate: "June 2025",
      location: "Various Locations",
      image: "/placeholder.svg?height=200&width=300",
      description: "An initiative to improve digital literacy among senior citizens.",
      category: "Digital Inclusion",
    },
    {
      id: 11,
      title: "Green Skills Development",
      launchDate: "July 2025",
      location: "Nationwide",
      image: "/placeholder.svg?height=200&width=300",
      description: "Developing skills for the green economy and sustainable development.",
      category: "Sustainability",
    },
    {
      id: 12,
      title: "Mental Health Awareness Campaign",
      launchDate: "September 2025",
      location: "Nationwide",
      image: "/placeholder.svg?height=200&width=300",
      description: "Raising awareness about mental health issues and providing resources for support.",
      category: "Health & Wellness",
    },
  ]

  const initiativeCategories = [
    "All",
    "Skills Development",
    "Leadership",
    "Entrepreneurship",
    "Career Development",
    "Education",
    "Community Service",
    "Gender Equality",
    "Innovation",
    "Digital Inclusion",
    "Sustainability",
    "Health & Wellness",
  ]

  return (
    <>
      <HeroSection
        title="Our Initiatives"
        subtitle="Discover the various initiatives launched by Creating Opportunities International to address specific needs and create positive impact."
        backgroundColor="#121d3e"
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto">
              <TabsList className="grid grid-flow-col auto-cols-max gap-2">
                {initiativeCategories.slice(0, 8).map((category) => (
                  <TabsTrigger key={category} value={category.toLowerCase().replace(/\s+/g, "-")}>
                    {category}
                  </TabsTrigger>
                ))}
                <TabsTrigger value="more">More</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#121d3e] mb-6">Current Initiatives</h3>
                  <div className="space-y-6">
                    {currentInitiatives.map((initiative) => (
                      <div key={initiative.id} className="flex bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="w-1/3 relative">
                          <Image
                            src={initiative.image || "/placeholder.svg"}
                            alt={initiative.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="w-2/3 p-4">
                          <div className="text-xs text-white bg-[#0e9aa7] inline-block px-2 py-1 rounded-full mb-2">
                            {initiative.category}
                          </div>
                          <h4 className="font-bold text-lg mb-1">{initiative.title}</h4>
                          <div className="text-gray-500 text-sm flex items-center mb-1">
                            <Calendar size={14} className="mr-1" />
                            {initiative.schedule}
                          </div>
                          <div className="text-gray-500 text-sm flex items-center mb-2">
                            <MapPin size={14} className="mr-1" />
                            {initiative.location}
                          </div>
                          <p className="text-gray-600 text-sm mb-2 line-clamp-2">{initiative.description}</p>
                          <Link
                            href={`/events-projects/our-initiatives/${initiative.id}`}
                            className="text-[#0e9aa7] font-medium hover:underline flex items-center"
                          >
                            View Details
                            <ArrowRight size={14} className="ml-1" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#121d3e] mb-6">Upcoming Initiatives</h3>
                  <div className="space-y-6">
                    {upcomingInitiatives.map((initiative) => (
                      <div key={initiative.id} className="flex bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="w-1/3 relative">
                          <Image
                            src={initiative.image || "/placeholder.svg"}
                            alt={initiative.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="w-2/3 p-4">
                          <div className="text-xs text-white bg-[#0e9aa7] inline-block px-2 py-1 rounded-full mb-2">
                            {initiative.category}
                          </div>
                          <h4 className="font-bold text-lg mb-1">{initiative.title}</h4>
                          <div className="text-gray-500 text-sm flex items-center mb-1">
                            <Calendar size={14} className="mr-1" />
                            Launch: {initiative.launchDate}
                          </div>
                          <div className="text-gray-500 text-sm flex items-center mb-2">
                            <MapPin size={14} className="mr-1" />
                            {initiative.location}
                          </div>
                          <p className="text-gray-600 text-sm mb-2 line-clamp-2">{initiative.description}</p>
                          <Link
                            href={`/events-projects/our-initiatives/${initiative.id}`}
                            className="text-[#0e9aa7] font-medium hover:underline flex items-center"
                          >
                            View Details
                            <ArrowRight size={14} className="ml-1" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {initiativeCategories.slice(1).map((category) => (
              <TabsContent key={category} value={category.toLowerCase().replace(/\s+/g, "-")}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[...currentInitiatives, ...upcomingInitiatives]
                    .filter((initiative) => initiative.category === category)
                    .map((initiative) => (
                      <Card key={initiative.id} className="overflow-hidden">
                        <div className="h-48 relative">
                          <Image
                            src={initiative.image || "/placeholder.svg"}
                            alt={initiative.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-500 text-sm flex items-center">
                              <Calendar size={14} className="mr-1" />
                              {initiative.schedule || `Launch: ${initiative.launchDate}`}
                            </span>
                            <span className="text-gray-500 text-sm flex items-center">
                              <MapPin size={14} className="mr-1" />
                              {initiative.location}
                            </span>
                          </div>
                          <CardTitle className="text-xl">{initiative.title}</CardTitle>
                          <CardDescription>{initiative.description}</CardDescription>
                        </CardHeader>
                        <CardFooter>
                          <Link href={`/events-projects/our-initiatives/${initiative.id}`} className="w-full">
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
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Our Initiatives"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#121d3e] mb-6">How Our Initiatives Work</h2>
              <p className="text-gray-700 mb-4">
                Our initiatives are designed to address specific needs and create targeted impact. Each initiative
                follows a structured process to ensure effectiveness and sustainability.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#121d3e]">Identification</h3>
                    <p className="text-gray-700">
                      We identify specific needs or opportunities that align with our mission and vision.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#121d3e]">Design</h3>
                    <p className="text-gray-700">
                      We design initiatives with clear objectives, target audiences, and implementation strategies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#121d3e]">Pilot</h3>
                    <p className="text-gray-700">
                      We pilot initiatives on a small scale to test their effectiveness and make necessary adjustments.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#121d3e]">Scale</h3>
                    <p className="text-gray-700">
                      We scale successful initiatives to reach more beneficiaries and create greater impact.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#121d3e]">Evaluate & Improve</h3>
                    <p className="text-gray-700">
                      We continuously evaluate our initiatives and make improvements to enhance their impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#121d3e] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Want to get involved?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            There are various ways you can get involved with our initiatives, from participation to partnership.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/get-involved/become-member">
              <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white px-8 py-6 rounded font-bold text-lg">
                BECOME A MEMBER
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
