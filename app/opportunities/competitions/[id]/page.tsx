"use client"
import { useState } from "react";
import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, Clock, Trophy, CheckCircle, ExternalLink, Target, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CompetitionDetailPage({ params }: { params: { id: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const competition = {
    id: params.id,
    title: "Global Innovation Challenge 2024",
    organizer: "Tech Innovators Alliance",
    prize: "$25,000 + Mentorship",
    deadline: "August 15, 2024",
    location: "Virtual (Final Round in San Francisco)",
    duration: "3 months (June - August 2024)",
    description:
      "The Global Innovation Challenge is an international competition that brings together creative minds to solve pressing global problems through technology. Participants will develop innovative solutions addressing sustainability, healthcare, education, or financial inclusion.",
    eligibility: [
      "Open to individuals and teams of up to 4 members",
      "Participants must be 18 years or older",
      "No geographical restrictions",
      "Both students and professionals are welcome",
      "Previous projects can be submitted if they meet the innovation criteria",
    ],
    categories: ["Sustainable Development", "Healthcare Innovation", "EdTech Solutions", "Financial Inclusion"],
    timeline: [
      {
        phase: "Registration",
        dates: "May 1 - June 15, 2024",
        description: "Submit your team information and project concept",
      },
      {
        phase: "Development Phase",
        dates: "June 16 - July 31, 2024",
        description: "Work on your project with access to mentors and resources",
      },
      {
        phase: "Submission Deadline",
        dates: "August 15, 2024",
        description: "Submit your final project with documentation",
      },
      {
        phase: "Finalist Announcement",
        dates: "August 30, 2024",
        description: "Top 10 teams announced",
      },
      {
        phase: "Final Pitch Event",
        dates: "September 15, 2024",
        description: "Finalists present to judges in San Francisco (travel expenses covered)",
      },
    ],
    prizes: [
      {
        place: "1st Place",
        reward: "$25,000 + 6 months mentorship + incubation opportunity",
      },
      {
        place: "2nd Place",
        reward: "$15,000 + 3 months mentorship",
      },
      {
        place: "3rd Place",
        reward: "$10,000 + 3 months mentorship",
      },
      {
        place: "Category Winners",
        reward: "$5,000 each + product development support",
      },
      {
        place: "People's Choice",
        reward: "$3,000 + media exposure",
      },
    ],
    judges: [
      {
        name: "Dr. Sarah Chen",
        title: "CTO, Future Technologies Inc.",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Michael Rodriguez",
        title: "Founder & CEO, GreenSolutions",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Aisha Patel",
        title: "Partner, Venture Capital Innovations",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Dr. James Wilson",
        title: "Director of Innovation, Global Health Initiative",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    faqs: [
      {
        question: "Can I participate as an individual?",
        answer: "Yes, both individuals and teams of up to 4 members can participate.",
      },
      {
        question: "Is there an application fee?",
        answer: "No, participation in the Global Innovation Challenge is completely free.",
      },
      {
        question: "Do I need to have a working prototype?",
        answer:
          "For the initial submission, a concept with detailed plans is sufficient. Finalists will be expected to have a working prototype or MVP for the final pitch.",
      },
      {
        question: "Who retains intellectual property rights?",
        answer:
          "Participants retain all IP rights to their innovations. The organizers may request a non-exclusive license to showcase the projects.",
      },
    ],
    pastWinners: [
      {
        year: "2023",
        project: "EcoTrack",
        team: "GreenTech Solutions",
        description: "A blockchain-based supply chain tracking system for sustainable products",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        year: "2022",
        project: "MediConnect",
        team: "HealthBridge",
        description: "AI-powered telemedicine platform for rural communities",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    sponsors: [
      "Tech Innovators Alliance",
      "Global Sustainability Fund",
      "Future Technologies Inc.",
      "Venture Capital Innovations",
      "Digital Transformation Institute",
    ],
    contactInfo: {
      email: "challenge@techinnovators.org",
      phone: "+1-555-789-0123",
      website: "www.globalinnovationchallenge.org",
    },
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{competition.title}</h1>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center">
                  <Trophy className="mr-2 h-5 w-5" />
                  <span>{competition.prize}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  <span>Deadline: {competition.deadline}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  <span>{competition.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  <span>{competition.duration}</span>
                </div>
              </div>
              <p className="text-lg mb-6">{competition.description}</p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100"
                  onClick={handleRegisterClick}
                >
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-1 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Main Information */}
              <div className="lg:col-span-2">
                {/* Categories Section */}
                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Competition Categories</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {competition.categories.map((category, index) => (
                      <Card key={index} className="p-4 border-l-4 border-purple-500">
                        <div className="flex items-center">
                          <Target className="h-5 w-5 text-purple-500 mr-2" />
                          <p className="font-medium">{category}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </section>

                {/* Eligibility Section */}
                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Eligibility Criteria</h2>
                  <ul className="space-y-3">
                    {competition.eligibility.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Sponsors Section */}
                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Our Sponsors</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {competition.sponsors.map((sponsor, index) => (
                      <Card key={index} className="p-4 flex items-center justify-center h-24">
                        <p className="text-center font-medium">{sponsor}</p>
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
                      <p className="text-sm text-gray-600">Organizer</p>
                      <p className="font-medium">{competition.organizer}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Grand Prize</p>
                      <p className="font-medium">{competition.prize}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Registration Deadline</p>
                      <p className="font-medium">{competition.deadline}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-medium">{competition.duration}</p>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <h3 className="text-xl font-bold mb-4 text-gray-800">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-purple-600"
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
                      <span>{competition.contactInfo.email}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-purple-600"
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
                      <span>{competition.contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <ExternalLink className="h-4 w-4 text-purple-600" />
                      </div>
                      <a
                        href={`https://${competition.contactInfo.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:underline"
                      >
                        {competition.contactInfo.website}
                      </a>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button
                      className="w-full bg-purple-600 hover:bg-purple-700"
                      onClick={handleRegisterClick}
                    >
                      Register Now
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={(open) => setIsModalOpen(open)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Register for the Competition</DialogTitle>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // Add form submission logic here
              setIsModalOpen(false); // Close modal after submission
            }}
          >
            <div className="space-y-4">
              <Input placeholder="Name" required />
              <Input type="email" placeholder="Email" required />
              <Input placeholder="Title" required />
              <Input type="tel" placeholder="Phone Number" required />
              <Textarea placeholder="Message" rows={4} />
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                Submit
              </Button>
              <Button variant="outline" onClick={handleCloseModal}>
                Cancel
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </main>
  );
}
