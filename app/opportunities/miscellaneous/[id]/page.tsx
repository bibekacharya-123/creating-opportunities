"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Clock, CheckCircle, ExternalLink, Bookmark, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function MiscellaneousOpportunityDetailPage({ params }: { params: { id: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const opportunity = {
    id: params.id,
    title: "Virtual Cultural Exchange Program",
    provider: "Global Connections Initiative",
    category: "Cultural Exchange",
    deadline: "July 30, 2024",
    location: "Virtual (Global Participation)",
    duration: "8 weeks (August - September 2024)",
    description:
      "The Virtual Cultural Exchange Program connects participants from around the world in a digital environment to foster cross-cultural understanding, develop global competencies, and build international networks. Through structured activities, discussions, and collaborative projects, participants will gain insights into diverse cultures while developing valuable skills for the global marketplace.",
    eligibility: [
      "Open to individuals aged 18-30",
      "Proficient in English (additional languages are a plus)",
      "Access to reliable internet connection",
      "Commitment to attend at least 80% of program sessions",
      "Interest in cross-cultural communication and global issues",
    ],
    benefits: [
      "Develop cross-cultural communication skills",
      "Build an international network of contacts",
      "Gain digital collaboration experience",
      "Receive a certificate of completion",
      "Access to alumni network and future opportunities",
      "Potential for in-person exchange opportunities in the future",
    ],
    programComponents: [
      {
        title: "Cultural Dialogue Sessions",
        description: "Weekly facilitated discussions on cultural topics, traditions, and global issues",
      },
      {
        title: "Virtual Cultural Tours",
        description: "Participant-led tours of their communities and cultural landmarks",
      },
      {
        title: "Collaborative Projects",
        description: "Small group work addressing shared global challenges",
      },
      {
        title: "Language Exchange",
        description: "Optional language learning partnerships between participants",
      },
      {
        title: "Guest Speaker Series",
        description: "Talks from experts in international relations, cultural studies, and global careers",
      },
    ],
    schedule: [
      {
        week: "Week 1",
        theme: "Orientation & Introductions",
        activities: "Program overview, icebreakers, cultural identity exploration",
      },
      {
        week: "Week 2-3",
        theme: "Cultural Foundations",
        activities: "Cultural values, traditions, and expressions across societies",
      },
      {
        week: "Week 4-5",
        theme: "Global Challenges & Perspectives",
        activities: "Examining global issues through different cultural lenses",
      },
      {
        week: "Week 6-7",
        theme: "Collaborative Project Work",
        activities: "Small group projects addressing shared challenges",
      },
      {
        week: "Week 8",
        theme: "Presentations & Conclusion",
        activities: "Project presentations, reflection, and future connections",
      },
    ],
    applicationProcess: [
      "Complete the online application form",
      "Submit a motivation statement (300-500 words)",
      "Provide a brief video introduction (2 minutes)",
      "Participate in a virtual interview if shortlisted",
      "Receive notification of acceptance",
    ],
    testimonials: [
      {
        name: "Maya Patel",
        country: "India",
        quote:
          "The Virtual Cultural Exchange opened my eyes to perspectives I never would have encountered otherwise. The connections I made continue to enrich my personal and professional life.",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Carlos Rodriguez",
        country: "Mexico",
        quote:
          "This program helped me develop cross-cultural communication skills that have been invaluable in my international business career. The virtual format made it accessible while still creating meaningful connections.",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    faqs: [
      {
        question: "How much time should I commit weekly?",
        answer:
          "Participants should expect to commit 4-6 hours per week, including synchronous sessions and asynchronous activities.",
      },
      {
        question: "Are there participation costs?",
        answer:
          "The program is offered free of charge to selected participants. You only need to ensure you have reliable internet access.",
      },
      {
        question: "Will sessions accommodate different time zones?",
        answer:
          "Yes, participants will be placed in cohorts with compatible time zones, and some activities will be asynchronous to ensure global accessibility.",
      },
      {
        question: "Is this program only for students?",
        answer:
          "No, the program is open to both students and young professionals aged 18-30 who are interested in cross-cultural exchange.",
      },
    ],
    relatedOpportunities: [
      {
        title: "Digital Storytelling Workshop",
        category: "Skill Development",
        deadline: "August 15, 2024",
        id: "1",
      },
      {
        title: "Global Leadership Academy",
        category: "Leadership",
        deadline: "September 1, 2024",
        id: "2",
      },
      {
        title: "Environmental Advocacy Network",
        category: "Volunteering",
        deadline: "Ongoing",
        id: "3",
      },
    ],
    contactInfo: {
      email: "exchange@globalconnections.org",
      phone: "+1-555-456-7890",
      website: "www.globalconnections.org/exchange",
    },
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Apply for {opportunity.title}</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Contact</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Enter your contact number"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <Button
                  variant="outline"
                  className="bg-gray-200 text-gray-700"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button className="bg-teal-600 text-white">Submit</Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-emerald-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3">
              <div className="mb-4">
                <Badge className="bg-white text-teal-700 hover:bg-gray-100">{opportunity.category}</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{opportunity.title}</h1>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  <span>Deadline: {opportunity.deadline}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  <span>{opportunity.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  <span>{opportunity.duration}</span>
                </div>
              </div>
              <p className="text-lg mb-6">{opportunity.description}</p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-white text-teal-600 hover:bg-gray-100"
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
            {/* Program Components Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Program Components</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {opportunity.programComponents.map((component, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="font-bold text-teal-700 mb-2">{component.title}</h3>
                    <p className="text-gray-600">{component.description}</p>
                  </Card>
                ))}
              </div>
            </section>

            {/* Eligibility Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Eligibility Criteria</h2>
              <ul className="space-y-3">
                {opportunity.eligibility.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Benefits Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Program Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {opportunity.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-teal-100 rounded-full p-1 mr-3 mt-1">
                      <ArrowRight className="h-4 w-4 text-teal-600" />
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Application Process */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Application Process</h2>
              <ol className="space-y-4">
                {opportunity.applicationProcess.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 bg-teal-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">
                      {index + 1}
                    </div>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
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
                  <p className="font-medium">{opportunity.provider}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Category</p>
                  <p className="font-medium">{opportunity.category}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Application Deadline</p>
                  <p className="font-medium">{opportunity.deadline}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-medium">{opportunity.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-medium">{opportunity.location}</p>
                </div>
              </div>

              <hr className="my-4" />

              <h3 className="text-xl font-bold mb-4 text-gray-800">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-teal-600"
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
                  <span>{opportunity.contactInfo.email}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-teal-600"
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
                  <span>{opportunity.contactInfo.phone}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                    <ExternalLink className="h-4 w-4 text-teal-600" />
                  </div>
                  <a
                    href={`https://${opportunity.contactInfo.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:underline"
                  >
                    {opportunity.contactInfo.website}
                  </a>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Button
                  className="w-full bg-teal-600 hover:bg-teal-700"
                  onClick={() => setIsModalOpen(true)}
                >
                  Apply Now
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
