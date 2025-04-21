import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Calendar, MapPin, Users, CheckCircle, Download, Share2 } from "lucide-react"

export default function InitiativeDetailPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the initiative data based on the ID
  // For this example, we'll use hardcoded data
  const initiative = {
    id: params.id,
    title: "Digital Skills Workshop Series",
    schedule: "Monthly, Starting May 2025",
    location: "Various Locations across Nepal",
    category: "Skills Development",
    status: "Upcoming",
    image: "/placeholder.svg?height=400&width=800",
    description: "A series of workshops focused on developing essential digital skills for the modern workplace.",
    longDescription: `The Digital Skills Workshop Series is a flagship initiative of Creating Opportunities International, 
    designed to address the growing digital skills gap in Nepal. In today's rapidly evolving digital landscape, 
    proficiency in digital tools and technologies is essential for success in the modern workplace.
    
    Our workshops cover a wide range of digital skills, from basic computer literacy to advanced topics such as 
    digital marketing, web development, data analysis, and more. Each workshop is designed to be practical, 
    hands-on, and relevant to the current job market demands.
    
    The initiative targets individuals of all ages and backgrounds, with a focus on youth, women, and those from 
    underserved communities who have limited access to digital education and resources.`,
    objectives: [
      "Enhance digital literacy and skills among participants",
      "Bridge the digital divide by providing access to digital education",
      "Improve employability through relevant digital skills training",
      "Foster innovation and entrepreneurship in the digital space",
      "Create a community of digitally skilled individuals",
      "Prepare participants for the demands of the digital economy",
    ],
    workshops: [
      {
        title: "Introduction to Digital Literacy",
        date: "First Saturday of every month",
        description: "A foundational workshop covering basic computer skills, internet usage, and digital safety.",
      },
      {
        title: "Digital Marketing Essentials",
        date: "Second Saturday of every month",
        description: "Learn the fundamentals of digital marketing, including social media, content creation, and SEO.",
      },
      {
        title: "Web Development Basics",
        date: "Third Saturday of every month",
        description: "Introduction to HTML, CSS, and basic JavaScript for creating simple websites.",
      },
      {
        title: "Data Analysis with Excel",
        date: "Fourth Saturday of every month",
        description: "Learn how to use Excel for data analysis, visualization, and reporting.",
      },
      {
        title: "Mobile App Development",
        date: "Special workshop (quarterly)",
        description: "Introduction to mobile app development using user-friendly platforms.",
      },
      {
        title: "E-commerce and Online Business",
        date: "Special workshop (quarterly)",
        description: "Learn how to set up and manage an online business or e-commerce store.",
      },
    ],
    impact: {
      participants: "Expected 2,000+ participants annually",
      workshops: "48+ workshops per year",
      locations: "12+ locations across Nepal",
      employment: "70% of past participants reported improved job prospects",
      businesses: "100+ online businesses launched by past participants",
    },
    partners: ["Tech Nepal Association", "Digital Skills Academy", "Ministry of Education", "Local Tech Companies"],
    facilitators: [
      {
        name: "Bikash Shrestha",
        expertise: "Digital Marketing Specialist",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Nisha Maharjan",
        expertise: "Web Developer",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Sunil Poudel",
        expertise: "Data Analyst",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Meera Tamang",
        expertise: "E-commerce Consultant",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    testimonials: [
      {
        quote:
          "The digital marketing workshop completely changed my career path. I now work as a social media manager for a local company.",
        author: "Rajan, 26, Past Participant",
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        quote:
          "I had no computer skills before attending these workshops. Now I run my own online shop selling handmade products.",
        author: "Sarita, 32, Past Participant",
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    resources: [
      {
        title: "Workshop Schedule 2025",
        type: "PDF",
        size: "1.2 MB",
      },
      {
        title: "Digital Skills Handbook",
        type: "PDF",
        size: "3.5 MB",
      },
      {
        title: "Registration Form",
        type: "PDF",
        size: "0.8 MB",
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
            href="/events-projects/our-initiatives"
            className="inline-flex items-center text-white/80 hover:text-white mb-6"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Initiatives
          </Link>
          <div className="flex flex-wrap items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{initiative.title}</h1>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {initiative.schedule}
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  {initiative.location}
                </div>
                <div className="flex items-center">
                  <Users size={16} className="mr-2" />
                  {initiative.impact.participants}
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="bg-[#0e9aa7] text-white px-4 py-2 rounded-full text-sm font-medium">
                {initiative.status}
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
                  src={initiative.image || "/placeholder.svg"}
                  alt={initiative.title}
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </div>

              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="workshops">Workshops</TabsTrigger>
             
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-4">Initiative Overview</h2>
                      <p className="mb-6 text-gray-700">{initiative.longDescription}</p>

                      <h3 className="text-lg font-bold mt-6 mb-3">Initiative Objectives</h3>
                      <ul className="space-y-2">
                        {initiative.objectives.map((objective, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="text-[#0e9aa7] mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                            <span>{objective}</span>
                          </li>
                        ))}
                      </ul>

                      <h3 className="text-lg font-bold mt-6 mb-3">Initiative Partners</h3>
                      <div className="flex flex-wrap gap-2">
                        {initiative.partners.map((partner, index) => (
                          <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                            {partner}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-lg font-bold mt-6 mb-3">Workshop Facilitators</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                        {initiative.facilitators.map((facilitator, index) => (
                          <div key={index} className="text-center">
                            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-2">
                              <Image
                                src={facilitator.image || "/placeholder.svg"}
                                alt={facilitator.name}
                                width={80}
                                height={80}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <h4 className="font-semibold">{facilitator.name}</h4>
                            <p className="text-sm text-gray-600">{facilitator.expertise}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="workshops" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-6">Workshop Schedule</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {initiative.workshops.map((workshop, index) => (
                          <div key={index} className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-bold text-[#0e9aa7] mb-2">{workshop.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">{workshop.date}</p>
                            <p className="text-gray-700">{workshop.description}</p>
                          </div>
                        ))}
                      </div>

                      
                     
                    </CardContent>
                  </Card>
                </TabsContent>
         
                <TabsContent value="gallery" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-6">Workshop Gallery</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {initiative.gallery.map((image, index) => (
                          <div key={index} className="rounded-lg overflow-hidden">
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`Workshop image ${index + 1}`}
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
                  <h2 className="text-xl font-bold mb-4">Initiative Details</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-700">Category</h3>
                      <p>{initiative.category}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">Schedule</h3>
                      <p>{initiative.schedule}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">Location</h3>
                      <p>{initiative.location}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">Status</h3>
                      <p>{initiative.status}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">Target Audience</h3>
                      <p>Individuals of all ages, with focus on youth, women, and underserved communities</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

       



  

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                  <p className="text-gray-600 mb-4">For any inquiries about this initiative, please contact:</p>
                  <div className="space-y-2">
                    <p>
                      <span className="font-semibold">Email:</span> digitalskills@creatingoppo.com
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
          <h2 className="text-3xl font-bold text-[#121d3e] mb-8">Support This Initiative</h2>
          <p className="max-w-2xl mx-auto text-gray-700 mb-8">
            Your support can help us expand this initiative and reach more individuals across Nepal. There are several
            ways you can contribute to the Digital Skills Workshop Series.
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
