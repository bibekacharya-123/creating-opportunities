"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Calendar, MapPin, Clock, Award, FileText, CheckCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ScholarshipDetailPage({ params }: { params: { id: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false) // State for modal visibility

  // In a real application, you would fetch the scholarship data based on the ID
  // This is mock data for demonstration purposes
  const scholarship = {
    id: params.id,
    title: "Global Excellence Scholarship 2024",
    provider: "International Education Foundation",
    amount: "$10,000",
    deadline: "June 30, 2024",
    location: "Global (Online Application)",
    duration: "1 year (renewable)",
    description:
      "The Global Excellence Scholarship is designed to support outstanding students pursuing undergraduate or graduate studies in any field. This prestigious scholarship recognizes academic excellence, leadership potential, and commitment to community service.",
    eligibility: [
      "Minimum GPA of 3.5 or equivalent",
      "Demonstrated leadership experience",
      "Community service involvement",
      "Financial need",
      "Acceptance to an accredited university",
    ],
    requirements: [
      "Completed application form",
      "Academic transcripts",
      "Two letters of recommendation",
      "Personal statement (500-750 words)",
      "Proof of acceptance to university",
      "Financial need documentation",
    ],
    applicationProcess: [
      "Complete the online application form",
      "Upload all required documents",
      "Submit by the application deadline",
      "Shortlisted candidates will be invited for an interview",
      "Final decisions will be announced within 4 weeks after the deadline",
    ],
    benefits: [
      "Financial support for tuition and fees",
      "Mentorship opportunities",
      "Networking events with alumni",
      "Professional development workshops",
      "Internship placement assistance",
    ],
    faqs: [
      {
        question: "Can I apply if I'm already enrolled in a university?",
        answer: "Yes, both incoming and current students are eligible to apply.",
      },
      {
        question: "Is the scholarship renewable?",
        answer:
          "Yes, the scholarship is renewable for up to 4 years for undergraduate students and 2 years for graduate students, subject to maintaining academic requirements.",
      },
      {
        question: "Are international students eligible?",
        answer: "Yes, the scholarship is open to students from all countries.",
      },
      {
        question: "When will I know if I've been selected?",
        answer: "Final decisions will be announced within 4 weeks after the application deadline.",
      },
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        program: "Computer Science, Stanford University",
        quote:
          "The Global Excellence Scholarship made my dream of studying abroad possible. Beyond the financial support, the mentorship and networking opportunities have been invaluable to my academic journey.",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Miguel Rodriguez",
        program: "Environmental Science, University of British Columbia",
        quote:
          "This scholarship changed my life. I've been able to focus on my studies without financial stress, and the professional development workshops have prepared me for my career.",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    contactInfo: {
      email: "scholarships@ief.org",
      phone: "+1-555-123-4567",
      website: "www.ief.org/scholarships",
    },
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{scholarship.title}</h1>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center">
                  <Award className="mr-2 h-5 w-5" />
                  <span>{scholarship.amount}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  <span>Deadline: {scholarship.deadline}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  <span>{scholarship.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  <span>{scholarship.duration}</span>
                </div>
              </div>
              <p className="text-lg mb-6">{scholarship.description}</p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                  onClick={() => setIsModalOpen(true)}
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Information */}
          <div className="lg:col-span-2">
            {/* Eligibility Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Eligibility Criteria</h2>
              <ul className="space-y-3">
                {scholarship.eligibility.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Application Requirements */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Application Requirements</h2>
              <ul className="space-y-3">
                {scholarship.requirements.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FileText className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Application Process */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Application Process</h2>
              <ol className="space-y-4">
                {scholarship.applicationProcess.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">
                      {index + 1}
                    </div>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Benefits */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Scholarship Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {scholarship.benefits.map((benefit, index) => (
                  <Card key={index} className="p-4 border-l-4 border-blue-500">
                    <p>{benefit}</p>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Info Card */}
            <Card className="p-6 mb-8 sticky top-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Quick Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Provider</p>
                  <p className="font-medium">{scholarship.provider}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Amount</p>
                  <p className="font-medium">{scholarship.amount}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Application Deadline</p>
                  <p className="font-medium">{scholarship.deadline}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-medium">{scholarship.duration}</p>
                </div>
              </div>

              <hr className="my-4" />

              <h3 className="text-xl font-bold mb-4 text-gray-800">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span>{scholarship.contactInfo.email}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span>{scholarship.contactInfo.phone}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <ExternalLink className="h-4 w-4 text-blue-600" />
                  </div>
                  <a
                    href={`https://${scholarship.contactInfo.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {scholarship.contactInfo.website}
                  </a>
                </div>
              </div>

              <div className="mt-6">
                <Button className="w-full" onClick={() => setIsModalOpen(true)}>
                  Apply Now
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
            <h2 className="text-xl font-bold mb-4">Apply for {scholarship.title}</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600"
                  placeholder="Enter the title"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div>
                <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                  Upload File
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  className="mt-1 block w-full text-gray-700"
                />
              </div>
            </form>
            <div className="mt-6 flex justify-end space-x-4">
              <Button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white"
              >
                Close
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Submit Application</Button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
