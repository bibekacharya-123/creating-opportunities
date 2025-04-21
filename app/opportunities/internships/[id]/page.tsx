"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { MapPin, Clock, Building, GraduationCap, ChevronLeft, Share2 } from "lucide-react"

export default function InternshipDetailPage({ params }: { params: { id: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleApplyNow = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const internship = {
    id: params.id,
    title: "Marketing Intern",
    company: "Global Solutions",
    location: "Remote",
    type: "Part-time",
    field: "Marketing",
    duration: "3 months",
    deadline: "April 30, 2025",
    stipend: "$500 per month",
    posted: "April 5, 2025",
    description: `
      <p>We are looking for an enthusiastic Marketing Intern to join our marketing department and provide creative ideas to help achieve our goals. You will have administrative duties in developing and implementing marketing strategies.</p>
      
      <h4>Responsibilities:</h4>
      <ul>
        <li>Assist in the creation of signage, directional copy, and other marketing material</li>
        <li>Assist in the preparation of promotional materials</li>
        <li>Help organize marketing events</li>
        <li>Conduct market research and analyze consumer ratings</li>
        <li>Maintain social media presence</li>
        <li>Help distribute marketing materials</li>
        <li>Manage and update company database and customer relationship management systems</li>
      </ul>
      
      <h4>Requirements:</h4>
      <ul>
        <li>Currently pursuing a Bachelor's degree in Marketing, Business, or related field</li>
        <li>Strong interest in marketing and social media</li>
        <li>Excellent verbal and written communication skills</li>
        <li>Proficiency in Microsoft Office and Google Workspace</li>
        <li>Creative and innovative thinking</li>
        <li>Ability to work independently and in a team</li>
      </ul>
      
      <h4>Learning Opportunities:</h4>
      <ul>
        <li>Gain hands-on experience in marketing strategies and campaigns</li>
        <li>Develop skills in social media management and content creation</li>
        <li>Learn about market research and data analysis</li>
        <li>Understand the principles of brand management</li>
        <li>Work with experienced marketing professionals</li>
      </ul>
    `,
    companyDescription:
      "Global Solutions is a dynamic company that provides innovative solutions to businesses worldwide. We are committed to excellence and continuous improvement in all aspects of our operations.",
  }

  return (
    <>
      <section className="bg-gradient-to-r from-[#121d3e] to-[#1e3a8a] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <Link
              href="/opportunities/internships"
              className="flex items-center text-white/80 hover:text-white mb-4 md:mb-0"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Internships
            </Link>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <Share2 className="mr-2 h-4 w-4" /> Share Internship
            </Button>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{internship.title}</h1>
          <div className="flex flex-wrap items-center text-white/80 gap-x-6 gap-y-2 mb-6">
            <div className="flex items-center">
              <Building className="mr-2 h-4 w-4" />
              <span>{internship.company}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4" />
              <span>{internship.location}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>
                {internship.type} • {internship.duration}
              </span>
            </div>
            <div className="flex items-center">
              <GraduationCap className="mr-2 h-4 w-4" />
              <span>{internship.field}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mb-8">
            <Badge className="bg-white text-[#121d3e]">{internship.field}</Badge>
            <Badge className="bg-[#0e9aa7]">Featured</Badge>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white px-8 py-6 rounded font-bold text-lg"
              onClick={handleApplyNow}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Internship Description</h2>
                  <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: internship.description }} />
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">About {internship.company}</h2>
                  <p className="text-gray-700 mb-6">{internship.companyDescription}</p>
                  <Button variant="outline">Visit Company Website</Button>
                </CardContent>
              </Card>
            </div>

            <div className="lg:w-1/3">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Internship Overview</h3>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Posted On:</span>
                      <span className="font-medium">{internship.posted}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Deadline:</span>
                      <span className="font-medium">{internship.deadline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Type:</span>
                      <span className="font-medium">{internship.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-medium">{internship.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Location:</span>
                      <span className="font-medium">{internship.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Field:</span>
                      <span className="font-medium">{internship.field}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Stipend:</span>
                      <span className="font-medium">{internship.stipend}</span>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <Button className="w-full bg-[#0e9aa7] hover:bg-[#0c8b98]" onClick={handleApplyNow}>
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Apply for {internship.title}</DialogTitle>
          </DialogHeader>
          <form>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#0e9aa7] focus:border-[#0e9aa7]"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#0e9aa7] focus:border-[#0e9aa7]"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#0e9aa7] focus:border-[#0e9aa7]"
                  placeholder="Enter a title for your application"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Optional Message</label>
                <textarea
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#0e9aa7] focus:border-[#0e9aa7]"
                  placeholder="Write an optional message for the employer"
                  rows={4}
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Resume</label>
                <input
                  type="file"
                  className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#0e9aa7] file:text-white hover:file:bg-[#0c8b98]"
                />
              </div>
            </div>
          </form>
          <DialogFooter>
            <Button variant="outline" onClick={closeModal}>
              Cancel
            </Button>
            <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98]" onClick={closeModal}>
              Submit Application
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#121d3e] mb-8">Similar Internships You Might Be Interested In</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: "social-media-intern",
                title: "Social Media Intern",
                company: "Digital Marketing Agency",
                location: "Remote",
                type: "Part-time",
                duration: "3 months",
              },
              {
                id: "content-writing-intern",
                title: "Content Writing Intern",
                company: "Media House",
                location: "Remote",
                type: "Part-time",
                duration: "3 months",
              },
              {
                id: "graphic-design-intern",
                title: "Graphic Design Intern",
                company: "Creative Studio",
                location: "Kathmandu, Nepal",
                type: "Part-time",
                duration: "3 months",
              },
            ].map((similarInternship) => (
              <Card key={similarInternship.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{similarInternship.title}</h3>
                  <p className="text-gray-500 mb-4">{similarInternship.company}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm">
                      <MapPin className="mr-2 h-4 w-4 text-gray-400" />
                      <span>{similarInternship.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4 text-gray-400" />
                      <span>
                        {similarInternship.type} • {similarInternship.duration}
                      </span>
                    </div>
                  </div>
                  <Link href={`/opportunities/internships/${similarInternship.id}`}>
                    <Button variant="outline" className="w-full">
                      View Internship
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
