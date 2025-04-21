import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function EventsPage() {
  return (
    <>
      <section className="bg-[#121d3e] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Events & Projects</h1>
          <p className="max-w-3xl mx-auto text-lg">Explore our upcoming events and ongoing projects.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-12 text-center">Upcoming Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((event) => (
              <Card key={event} className="overflow-hidden">
                <div className="h-48 relative">
                  <Image
                    src={`/placeholder.svg?height=200&width=400`}
                    alt={`Event ${event}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-[#0e9aa7] text-white px-3 py-1 rounded-full text-sm">April 20, 2025</span>
                    <span className="text-gray-500 text-sm">Kathmandu, Nepal</span>
                  </div>
                  <CardTitle className="text-xl">Workshop: Career Development {event}</CardTitle>
                  <CardDescription>
                    A comprehensive workshop focused on enhancing your career prospects.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Join us for an interactive session with industry experts who will share insights on career growth,
                    skill development, and networking.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href={`/events/event-${event}`} className="w-full">
                    <Button className="w-full bg-[#0e9aa7] hover:bg-[#0c8b98]">Register Now</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-12 text-center">Our Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2, 3, 4].map((project) => (
              <div key={project} className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-md">
                <div className="md:w-1/3">
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=200&width=200`}
                      alt={`Project ${project}`}
                      width={200}
                      height={200}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2">Project Title {project}</h3>
                  <p className="text-gray-700 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                  <Link href={`/projects/project-${project}`}>
                    <Button
                      variant="outline"
                      className="text-[#0e9aa7] border-[#0e9aa7] hover:bg-[#0e9aa7] hover:text-white"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-8">Want to collaborate?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            We're always looking for partners to collaborate on impactful projects and events.
          </p>
          <Link href="/contact">
            <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white px-8 py-6 rounded font-bold text-lg">
              GET IN TOUCH
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
