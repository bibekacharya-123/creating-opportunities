import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, ArrowRight, Calendar } from "lucide-react"
import HeroSection from "@/components/hero-section"

export default function OurInitiativesPage() {
  const initiatives = [
    {
      id: 4,
      title: "Career Mentorship Program",
      schedule: "Ongoing",
      location: "Online & In-person",
      image: "/placeholder.svg?height=200&width=300",
      description: "Connecting professionals with mentees for career guidance and development.",
      category: "Career Development",
    },
  ]

  const initiativeCategories = ["All"]

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
                {initiativeCategories.map((category) => (
                  <TabsTrigger key={category} value={category.toLowerCase().replace(/\s+/g, "-")}>
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#121d3e] mb-6">Our Initiatives</h3>
                  <div className="space-y-6">
                    {initiatives.map((initiative) => (
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
              </div>
            </TabsContent>
          </Tabs>
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
