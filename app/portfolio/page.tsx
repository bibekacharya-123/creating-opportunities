import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HeroSection from "@/components/hero-section"
import { AnimatedSection } from "@/components/ui/animated-section"

export default function PortfolioPage() {
  return (
    <>
      <AnimatedSection animation="fade-in">
        <HeroSection
          title="Our Portfolio"
          subtitle="Explore our past projects and success stories."
          backgroundColor="#121d3e"
        />
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={0.2}>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="events">Events</TabsTrigger>
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <PortfolioItem
                      key={item}
                      title={`Portfolio Item ${item}`}
                      category={item % 2 === 0 ? "Event" : "Project"}
                      image={`/placeholder.svg?height=300&width=400`}
                      link={`/portfolio/item-${item}`}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="events">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[2, 4, 6].map((item) => (
                    <PortfolioItem
                      key={item}
                      title={`Event ${item}`}
                      category="Event"
                      image={`/placeholder.svg?height=300&width=400`}
                      link={`/portfolio/item-${item}`}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="projects">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 3, 5].map((item) => (
                    <PortfolioItem
                      key={item}
                      title={`Project ${item}`}
                      category="Project"
                      image={`/placeholder.svg?height=300&width=400`}
                      link={`/portfolio/item-${item}`}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection animation="slide-in-left" delay={0.3}>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#121d3e] mb-8">Our Impact</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-[#0e9aa7] mb-2">50+</div>
                <p className="text-gray-700">Projects Completed</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-[#0e9aa7] mb-2">100+</div>
                <p className="text-gray-700">Events Organized</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-[#0e9aa7] mb-2">1000+</div>
                <p className="text-gray-700">People Impacted</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-[#0e9aa7] mb-2">20+</div>
                <p className="text-gray-700">Partner Organizations</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={0.2}>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#121d3e] mb-4">Explore More</h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                Discover our gallery of images and read our latest blog posts to learn more about our work and impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image src="/placeholder.svg?height=600&width=800" alt="Our Gallery" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">Photo Gallery</h3>
                      <p className="mb-4">Browse our collection of images from events, projects, and more.</p>
                      <Link href="/portfolio/gallery">
                        <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white">View Gallery</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image src="/placeholder.svg?height=600&width=800" alt="Our Blog" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">Blog & News</h3>
                      <p className="mb-4">Read our latest articles, insights, and updates.</p>
                      <Link href="/portfolio/blog">
                        <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white">Read Blog</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection animation="fade-in" delay={0.3}>
        <section className="py-16 bg-[#121d3e] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to start your project?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg">
              Let's collaborate to bring your vision to life. Contact us today to discuss your project.
            </p>
            <Link href="/contact">
              <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white px-8 py-6 rounded font-bold text-lg">
                START A PROJECT
              </Button>
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </>
  )
}

function PortfolioItem({
  title,
  category,
  image,
  link,
}: {
  title: string
  category: string
  image: string
  link: string
}) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md">
      <div className="relative h-64 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <span className="inline-block bg-[#0e9aa7] px-3 py-1 rounded-full text-xs mb-2">{category}</span>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <Link href={link}>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[#121d3e]">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  )
}
