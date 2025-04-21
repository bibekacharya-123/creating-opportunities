import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HeroSection from "@/components/hero-section"

export default function GalleryPage() {
  return (
    <>
      <HeroSection
        title="Our Gallery"
        subtitle="Explore our visual journey through impactful events, projects, and collaborations."
        backgroundColor="#0e9aa7" // Using dark-teal color
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="people">People</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                  <GalleryItem
                    key={item}
                    title={`Gallery Image ${item}`}
                    category={item % 3 === 0 ? "Event" : item % 3 === 1 ? "Project" : "People"}
                    image={`/placeholder.svg?height=600&width=800`}
                    description="This image showcases one of our impactful moments. Each photograph in our gallery tells a story of collaboration, innovation, and community engagement."
                    date="June 15, 2023"
                    location="San Francisco, CA"
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="events">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[3, 6, 9].map((item) => (
                  <GalleryItem
                    key={item}
                    title={`Event Image ${item}`}
                    category="Event"
                    image={`/placeholder.svg?height=600&width=800`}
                    description="Our events bring together industry leaders, innovators, and community members to create meaningful connections and drive positive change."
                    date="May 22, 2023"
                    location="New York, NY"
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="projects">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 4, 7].map((item) => (
                  <GalleryItem
                    key={item}
                    title={`Project Image ${item}`}
                    category="Project"
                    image={`/placeholder.svg?height=600&width=800`}
                    description="Our projects demonstrate our commitment to innovation and excellence. Each initiative is designed to create lasting impact and meaningful change."
                    date="April 10, 2023"
                    location="Chicago, IL"
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="people">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[2, 5, 8].map((item) => (
                  <GalleryItem
                    key={item}
                    title={`People Image ${item}`}
                    category="People"
                    image={`/placeholder.svg?height=600&width=800`}
                    description="The heart of our organization is our people. These images celebrate the diverse talents, perspectives, and contributions of our team members and community."
                    date="March 5, 2023"
                    location="Austin, TX"
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-light-teal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-dark-teal mb-8">Featured Collections</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Annual Conference 2023"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-dark-teal">Annual Conference 2023</h3>
                <p className="text-medium-teal mb-4">
                  Highlights from our flagship event bringing together industry leaders and innovators.
                </p>
                <span className="text-dark-teal font-medium">24 Photos</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Community Outreach Program"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-dark-teal">Community Outreach Program</h3>
                <p className="text-medium-teal mb-4">
                  Our initiatives to support and empower local communities through various programs.
                </p>
                <span className="text-dark-teal font-medium">36 Photos</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Team Building Retreat"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-dark-teal">Team Building Retreat</h3>
                <p className="text-medium-teal mb-4">
                  Moments from our annual team retreat focused on collaboration and innovation.
                </p>
                <span className="text-dark-teal font-medium">18 Photos</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function GalleryItem({
  title,
  category,
  image,
  description,
  date,
  location,
}: {
  title: string
  category: string
  image: string
  description: string
  date: string
  location: string
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative aspect-[4/3]">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-dark-teal">{title}</h3>
          <span className="inline-block bg-dark-teal px-3 py-1 rounded-full text-xs text-white">{category}</span>
        </div>
        <p className="text-medium-teal mb-4">{description}</p>
        <div className="flex flex-wrap gap-4 text-sm text-medium-teal-alt">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {date}
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {location}
          </div>
        </div>
      </div>
    </div>
  )
}
