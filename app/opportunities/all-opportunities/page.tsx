import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CalendarDays,
  MapPin,
  Search,
  Filter,
  Users,
  GraduationCap,
  Award,
  Sparkles,
  Clock,
  ExternalLink,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AllOpportunitiesPage() {
  return (
    <>
      <div className="relative w-full h-[300px] md:h-[400px] bg-gradient-to-r from-[#121d3e] to-[#1e3a8a] text-white">
        <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full md:w-3/4 lg:w-2/3">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Opportunities</h1>
          <p className="text-lg mb-8 max-w-3xl">
            Explore all available opportunities including fellowships, scholarships, competitions, workshops, and more.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/opportunities">
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Opportunities Home
              </Button>
            </Link>
            <Link href="/opportunities/post">
              <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white">Post an Opportunity</Button>
            </Link>
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <h2 className="text-xl font-semibold text-[#121d3e]">Filter Opportunities</h2>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter size={16} /> Advanced Filters
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input placeholder="Search opportunities..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Opportunity Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="fellowship">Fellowships</SelectItem>
                  <SelectItem value="scholarship">Scholarships</SelectItem>
                  <SelectItem value="competition">Competitions</SelectItem>
                  <SelectItem value="workshop">Workshops</SelectItem>
                  <SelectItem value="miscellaneous">Miscellaneous</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="nepal">Nepal</SelectItem>
                  <SelectItem value="international">International</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Duration</SelectItem>
                  <SelectItem value="short">Short-term (&lt; 3 months)</SelectItem>
                  <SelectItem value="medium">Medium-term (3-6 months)</SelectItem>
                  <SelectItem value="long">Long-term (&gt; 6 months)</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Deadline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Deadlines</SelectItem>
                  <SelectItem value="week">Within a Week</SelectItem>
                  <SelectItem value="month">Within a Month</SelectItem>
                  <SelectItem value="quarter">Within 3 Months</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="deadline">Deadline (Soonest)</SelectItem>
                  <SelectItem value="featured">Featured</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-6 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="fellowships">Fellowships</TabsTrigger>
              <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
              <TabsTrigger value="competitions">Competitions</TabsTrigger>
              <TabsTrigger value="workshops">Workshops</TabsTrigger>
              <TabsTrigger value="misc">Miscellaneous</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#121d3e] mb-6">Featured Opportunities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FeaturedOpportunityCard
                    title="Global Leadership Fellowship"
                    organization="International Development Institute"
                    location="Multiple Locations"
                    type="Fellowship"
                    duration="1 Year"
                    deadline="June 30, 2025"
                    icon={<Users className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/fellowships/global-leadership"
                  />
                  <FeaturedOpportunityCard
                    title="International Graduate Scholarship"
                    organization="Global University"
                    location="United States"
                    type="Scholarship"
                    duration="Full Tuition"
                    deadline="August 15, 2025"
                    icon={<GraduationCap className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/scholarships/international-graduate"
                  />
                  <FeaturedOpportunityCard
                    title="Innovation Challenge 2025"
                    organization="Tech for Change"
                    location="Virtual"
                    type="Competition"
                    duration="$10,000 Prize"
                    deadline="July 15, 2025"
                    icon={<Award className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/competitions/innovation-challenge"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#121d3e] mb-6">All Opportunities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Fellowships */}
                  <OpportunityCard
                    title="Research Fellowship"
                    organization="Science Foundation"
                    location="Kathmandu, Nepal"
                    type="Fellowship"
                    duration="2 Years"
                    deadline="May 25, 2025"
                    icon={<Users className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/fellowships/research-fellowship"
                  />
                  <OpportunityCard
                    title="Community Development Fellowship"
                    organization="Social Impact Organization"
                    location="Rural Nepal"
                    type="Fellowship"
                    duration="1 Year"
                    deadline="July 10, 2025"
                    icon={<Users className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/fellowships/community-development"
                  />

                  {/* Scholarships */}
                  <OpportunityCard
                    title="Engineering Scholarship"
                    organization="Technical University"
                    location="Kathmandu, Nepal"
                    type="Scholarship"
                    duration="Undergraduate"
                    deadline="July 5, 2025"
                    icon={<GraduationCap className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/scholarships/engineering"
                  />
                  <OpportunityCard
                    title="Future Leaders Scholarship"
                    organization="Business School"
                    location="Multiple Campuses"
                    type="Scholarship"
                    duration="MBA"
                    deadline="June 15, 2025"
                    icon={<GraduationCap className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/scholarships/future-leaders"
                  />

                  {/* Competitions */}
                  <OpportunityCard
                    title="Hackathon for Social Good"
                    organization="Tech Community"
                    location="Kathmandu, Nepal"
                    type="Competition"
                    duration="Technology"
                    deadline="June 20, 2025"
                    icon={<Award className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/competitions/hackathon-social-good"
                  />
                  <OpportunityCard
                    title="Design Challenge"
                    organization="Creative Association"
                    location="Virtual"
                    type="Competition"
                    duration="Design"
                    deadline="July 10, 2025"
                    icon={<Award className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/competitions/design-challenge"
                  />

                  {/* Workshops */}
                  <OpportunityCard
                    title="Data Analysis with Python"
                    organization="Tech Institute"
                    location="Virtual"
                    type="Workshop"
                    duration="4 Days"
                    deadline="May 25, 2025"
                    icon={<Sparkles className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/workshops/data-analysis"
                  />
                  <OpportunityCard
                    title="Public Speaking Workshop"
                    organization="Communication Skills Center"
                    location="Kathmandu, Nepal"
                    type="Workshop"
                    duration="1 Day"
                    deadline="May 15, 2025"
                    icon={<Sparkles className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/workshops/public-speaking"
                  />

                  {/* Miscellaneous */}
                  <OpportunityCard
                    title="Environmental Conservation Volunteer"
                    organization="Green Earth Initiative"
                    location="Chitwan, Nepal"
                    type="Volunteer"
                    duration="3-6 Months"
                    deadline="June 10, 2025"
                    icon={<Clock className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/miscellaneous/environmental-conservation"
                  />
                  <OpportunityCard
                    title="Youth Leadership Program"
                    organization="Youth Development Center"
                    location="Kathmandu, Nepal"
                    type="Training Program"
                    duration="6 Weeks"
                    deadline="July 5, 2025"
                    icon={<Clock className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/miscellaneous/youth-leadership"
                  />
                  <OpportunityCard
                    title="Research Assistant Opportunity"
                    organization="Social Research Institute"
                    location="Remote"
                    type="Research"
                    duration="6 Months"
                    deadline="May 30, 2025"
                    icon={<Clock className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/miscellaneous/research-assistant"
                  />
                  <OpportunityCard
                    title="Study Tour to Singapore"
                    organization="Educational Tours"
                    location="Singapore"
                    type="Educational Tour"
                    duration="2 Weeks"
                    deadline="August 15, 2025"
                    icon={<Clock className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/miscellaneous/singapore-tour"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="fellowships">
              <div>
                <h2 className="text-2xl font-bold text-[#121d3e] mb-6">Fellowship Opportunities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FeaturedOpportunityCard
                    title="Global Leadership Fellowship"
                    organization="International Development Institute"
                    location="Multiple Locations"
                    type="Fellowship"
                    duration="1 Year"
                    deadline="June 30, 2025"
                    icon={<Users className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/fellowships/global-leadership"
                  />
                  <OpportunityCard
                    title="Research Fellowship"
                    organization="Science Foundation"
                    location="Kathmandu, Nepal"
                    type="Fellowship"
                    duration="2 Years"
                    deadline="May 25, 2025"
                    icon={<Users className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/fellowships/research-fellowship"
                  />
                  <OpportunityCard
                    title="Community Development Fellowship"
                    organization="Social Impact Organization"
                    location="Rural Nepal"
                    type="Fellowship"
                    duration="1 Year"
                    deadline="July 10, 2025"
                    icon={<Users className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/fellowships/community-development"
                  />
                  <OpportunityCard
                    title="Policy Research Fellowship"
                    organization="Public Policy Institute"
                    location="Kathmandu, Nepal"
                    type="Fellowship"
                    duration="9 Months"
                    deadline="June 15, 2025"
                    icon={<Users className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/fellowships/policy-research"
                  />
                  <OpportunityCard
                    title="Youth Leadership Fellowship"
                    organization="Youth Empowerment Network"
                    location="Multiple Cities in Nepal"
                    type="Fellowship"
                    duration="6 Months"
                    deadline="May 30, 2025"
                    icon={<Users className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/fellowships/youth-leadership"
                  />
                  <OpportunityCard
                    title="Digital Innovation Fellowship"
                    organization="Tech for Good"
                    location="Remote"
                    type="Fellowship"
                    duration="1 Year"
                    deadline="July 25, 2025"
                    icon={<Users className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/fellowships/digital-innovation"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="scholarships">
              <div>
                <h2 className="text-2xl font-bold text-[#121d3e] mb-6">Scholarship Opportunities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FeaturedOpportunityCard
                    title="International Graduate Scholarship"
                    organization="Global University"
                    location="United States"
                    type="Scholarship"
                    duration="Full Tuition"
                    deadline="August 15, 2025"
                    icon={<GraduationCap className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/scholarships/international-graduate"
                  />
                  <OpportunityCard
                    title="Engineering Scholarship"
                    organization="Technical University"
                    location="Kathmandu, Nepal"
                    type="Scholarship"
                    duration="Undergraduate"
                    deadline="July 5, 2025"
                    icon={<GraduationCap className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/scholarships/engineering"
                  />
                  <OpportunityCard
                    title="Future Leaders Scholarship"
                    organization="Business School"
                    location="Multiple Campuses"
                    type="Scholarship"
                    duration="MBA"
                    deadline="June 15, 2025"
                    icon={<GraduationCap className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/scholarships/future-leaders"
                  />
                  <OpportunityCard
                    title="Creative Arts Scholarship"
                    organization="Arts Institute"
                    location="Kathmandu, Nepal"
                    type="Scholarship"
                    duration="Undergraduate"
                    deadline="May 30, 2025"
                    icon={<GraduationCap className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/scholarships/creative-arts"
                  />
                  <OpportunityCard
                    title="Medical Studies Scholarship"
                    organization="Health Sciences University"
                    location="Kathmandu, Nepal"
                    type="Scholarship"
                    duration="MBBS"
                    deadline="July 20, 2025"
                    icon={<GraduationCap className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/scholarships/medical-studies"
                  />
                  <OpportunityCard
                    title="Environmental Research Scholarship"
                    organization="Environmental Institute"
                    location="Multiple Locations"
                    type="Scholarship"
                    duration="PhD"
                    deadline="August 10, 2025"
                    icon={<GraduationCap className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/scholarships/environmental-research"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="competitions">
              <div>
                <h2 className="text-2xl font-bold text-[#121d3e] mb-6">Competition Opportunities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FeaturedOpportunityCard
                    title="Innovation Challenge 2025"
                    organization="Tech for Change"
                    location="Virtual"
                    type="Competition"
                    duration="$10,000 Prize"
                    deadline="July 15, 2025"
                    icon={<Award className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/competitions/innovation-challenge"
                  />
                  <OpportunityCard
                    title="Hackathon for Social Good"
                    organization="Tech Community"
                    location="Kathmandu, Nepal"
                    type="Competition"
                    duration="Technology"
                    deadline="June 20, 2025"
                    icon={<Award className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/competitions/hackathon-social-good"
                  />
                  <OpportunityCard
                    title="Design Challenge"
                    organization="Creative Association"
                    location="Virtual"
                    type="Competition"
                    duration="Design"
                    deadline="July 10, 2025"
                    icon={<Award className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/competitions/design-challenge"
                  />
                  <OpportunityCard
                    title="Scientific Research Competition"
                    organization="Science Academy"
                    location="Multiple Locations"
                    type="Competition"
                    duration="Science"
                    deadline="August 15, 2025"
                    icon={<Award className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/competitions/scientific-research"
                  />
                  <OpportunityCard
                    title="Mobile App Development Contest"
                    organization="Tech Innovators"
                    location="Online"
                    type="Competition"
                    duration="Technology"
                    deadline="July 25, 2025"
                    icon={<Award className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/competitions/mobile-app-development"
                  />
                  <OpportunityCard
                    title="Social Entrepreneurship Challenge"
                    organization="Impact Ventures"
                    location="Kathmandu, Nepal"
                    type="Competition"
                    duration="Social Impact"
                    deadline="June 30, 2025"
                    icon={<Award className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/competitions/social-entrepreneurship"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="workshops">
              <div>
                <h2 className="text-2xl font-bold text-[#121d3e] mb-6">Workshop Opportunities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FeaturedOpportunityCard
                    title="Digital Marketing Masterclass"
                    organization="Marketing Academy"
                    location="Kathmandu, Nepal"
                    type="Workshop"
                    duration="2 Days"
                    deadline="May 20, 2025"
                    icon={<Sparkles className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/workshops/digital-marketing"
                  />
                  <OpportunityCard
                    title="Data Analysis with Python"
                    organization="Tech Institute"
                    location="Virtual"
                    type="Workshop"
                    duration="4 Days"
                    deadline="May 25, 2025"
                    icon={<Sparkles className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/workshops/data-analysis"
                  />
                  <OpportunityCard
                    title="Public Speaking Workshop"
                    organization="Communication Skills Center"
                    location="Kathmandu, Nepal"
                    type="Workshop"
                    duration="1 Day"
                    deadline="May 15, 2025"
                    icon={<Sparkles className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/workshops/public-speaking"
                  />
                  <OpportunityCard
                    title="UX/UI Design Fundamentals"
                    organization="Design Academy"
                    location="Hybrid"
                    type="Workshop"
                    duration="3 Days"
                    deadline="June 15, 2025"
                    icon={<Sparkles className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/workshops/ux-ui-design"
                  />
                  <OpportunityCard
                    title="Financial Planning Workshop"
                    organization="Finance Institute"
                    location="Kathmandu, Nepal"
                    type="Workshop"
                    duration="2 Days"
                    deadline="May 30, 2025"
                    icon={<Sparkles className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/workshops/financial-planning"
                  />
                  <OpportunityCard
                    title="Content Creation Masterclass"
                    organization="Media Academy"
                    location="Virtual"
                    type="Workshop"
                    duration="2 Days"
                    deadline="June 20, 2025"
                    icon={<Sparkles className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/workshops/content-creation"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="misc">
              <div>
                <h2 className="text-2xl font-bold text-[#121d3e] mb-6">Miscellaneous Opportunities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FeaturedOpportunityCard
                    title="Community Volunteer Program"
                    organization="Social Impact NGO"
                    location="Multiple Locations in Nepal"
                    type="Volunteer"
                    duration="3-6 Months"
                    deadline="June 15, 2025"
                    icon={<Clock className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/miscellaneous/community-volunteer"
                  />
                  <OpportunityCard
                    title="Environmental Conservation Volunteer"
                    organization="Green Earth Initiative"
                    location="Chitwan, Nepal"
                    type="Volunteer"
                    duration="3-6 Months"
                    deadline="June 10, 2025"
                    icon={<Clock className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/miscellaneous/environmental-conservation"
                  />
                  <OpportunityCard
                    title="Youth Leadership Program"
                    organization="Youth Development Center"
                    location="Kathmandu, Nepal"
                    type="Training Program"
                    duration="6 Weeks"
                    deadline="July 5, 2025"
                    icon={<Clock className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/miscellaneous/youth-leadership"
                  />
                  <OpportunityCard
                    title="Research Assistant Opportunity"
                    organization="Social Research Institute"
                    location="Remote"
                    type="Research"
                    duration="6 Months"
                    deadline="May 30, 2025"
                    icon={<Clock className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/miscellaneous/research-assistant"
                  />
                  <OpportunityCard
                    title="Study Tour to Singapore"
                    organization="Educational Tours"
                    location="Singapore"
                    type="Educational Tour"
                    duration="2 Weeks"
                    deadline="August 15, 2025"
                    icon={<Clock className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/miscellaneous/singapore-tour"
                  />
                  <OpportunityCard
                    title="Peer Counseling Program"
                    organization="Mental Health Initiative"
                    location="Multiple Locations"
                    type="Volunteer"
                    duration="Flexible"
                    deadline="June 20, 2025"
                    icon={<Clock className="h-4 w-4 mr-2 text-gray-500" />}
                    link="/opportunities/miscellaneous/peer-counseling"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-10 text-center">
            <Button variant="outline" className="px-6">
              Load More
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-8">Looking for Something Specific?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            If you can't find what you're looking for, you can set up alerts to be notified when new opportunities
            matching your criteria are posted.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white">Set Up Alerts</Button>
            <Button variant="outline">Contact Our Team</Button>
          </div>
        </div>
      </section>
    </>
  )
}

interface OpportunityCardProps {
  title: string
  organization: string
  location: string
  type: string
  duration: string
  deadline: string
  icon: React.ReactNode
  link: string
}

function OpportunityCard({
  title,
  organization,
  location,
  type,
  duration,
  deadline,
  icon,
  link,
}: OpportunityCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{organization}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-3 text-sm">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-gray-500" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            {icon}
            <span>{type}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-gray-500" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-2 text-gray-500" />
            <span>Deadline: {deadline}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={link} className="w-full">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

interface FeaturedOpportunityCardProps {
  title: string
  organization: string
  location: string
  type: string
  duration: string
  deadline: string
  icon: React.ReactNode
  link: string
}

function FeaturedOpportunityCard({
  title,
  organization,
  location,
  type,
  duration,
  deadline,
  icon,
  link,
}: FeaturedOpportunityCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 relative overflow-hidden border-2 border-[#0e9aa7]">
      <div className="absolute top-0 right-0">
        <Badge className="bg-[#0e9aa7] text-white m-2">Featured</Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{organization}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-3 text-sm">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-gray-500" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            {icon}
            <span>{type}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-gray-500" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-2 text-gray-500" />
            <span>Deadline: {deadline}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={link} className="w-full">
          <Button className="w-full bg-[#0e9aa7] hover:bg-[#0c8b98]">
            Apply Now <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
