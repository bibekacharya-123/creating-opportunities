import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, ArrowRight, Building } from "lucide-react"
import HeroSection from "@/components/hero-section"

export default function CollaborativeEventsPage() {
  const events = [
    {
      id: 4,
      title: "Entrepreneurship Conference",
      date: "August 5-6, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Kathmandu, Nepal",
      image: "/placeholder.svg?height=200&width=300",
      partners: ["Startup Nepal", "Business Incubator", "Chamber of Commerce"],
      category: "Conference",
    },
  ]

  return (
    <>
      <HeroSection
        title="Collaborative Events"
        subtitle="Discover events organized in collaboration with our partners to create greater impact and reach."
        backgroundColor="#121d3e"
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto">
              <TabsList className="grid grid-flow-col auto-cols-max gap-2">
                <TabsTrigger value="all">All</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#121d3e] mb-6">Events</h3>
                  <div className="space-y-6">
                    {events.map((event) => (
                      <div key={event.id} className="flex bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="w-1/3 relative">
                          <Image
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="w-2/3 p-4">
                          <div className="text-xs text-white bg-[#0e9aa7] inline-block px-2 py-1 rounded-full mb-2">
                            {event.category}
                          </div>
                          <h4 className="font-bold text-lg mb-1">{event.title}</h4>
                          <div className="text-gray-500 text-sm flex items-center mb-1">
                            <Calendar size={14} className="mr-1" />
                            {event.date}
                          </div>
                          <div className="text-gray-500 text-sm flex items-center mb-1">
                            <Clock size={14} className="mr-1" />
                            {event.time}
                          </div>
                          <div className="text-gray-500 text-sm flex items-center mb-2">
                            <MapPin size={14} className="mr-1" />
                            {event.location}
                          </div>
                          <div className="text-sm mb-2">
                            <span className="font-medium text-gray-700">Partners: </span>
                            <span className="text-gray-600">{event.partners.join(", ")}</span>
                          </div>
                          <Link
                            href={`/events-projects/collaborative-events/${event.id}`}
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

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#121d3e] mb-6">Our Collaborative Approach</h2>
              <p className="text-gray-700 mb-4">
                At Creating Opportunities International, we believe in the power of collaboration. By working together
                with like-minded organizations, we can create greater impact and reach more individuals with our events
                and initiatives.
              </p>
              <p className="text-gray-700 mb-4">
                Our collaborative events bring together diverse perspectives, resources, and expertise to address
                complex challenges and create innovative solutions. We partner with a wide range of organizations,
                including:
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Building className="text-[#0e9aa7] mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">
                    <span className="font-bold">Non-profit Organizations</span> - Working together to create social
                    impact
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Building className="text-[#0e9aa7] mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">
                    <span className="font-bold">Educational Institutions</span> - Collaborating on knowledge sharing and
                    skill development
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Building className="text-[#0e9aa7] mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">
                    <span className="font-bold">Government Agencies</span> - Partnering on policy and public service
                    initiatives
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Building className="text-[#0e9aa7] mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">
                    <span className="font-bold">Businesses</span> - Engaging with the private sector for sustainable
                    development
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Building className="text-[#0e9aa7] mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">
                    <span className="font-bold">Community Groups</span> - Working with local communities for grassroots
                    impact
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Collaborative Events"
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
          <h2 className="text-3xl font-bold mb-8">Interested in collaborating?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            We're always looking for partners to collaborate on impactful events and initiatives. If you're interested
            in partnering with us, we'd love to hear from you.
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
