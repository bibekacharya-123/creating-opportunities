import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ContactForm from "@/components/forms/contact-form"
import JobApplicationForm from "@/components/forms/job-application-form"
import EventRegistrationForm from "@/components/forms/event-registration-form"
import ResumeSubmissionForm from "@/components/forms/resume-submission-form"
import FeedbackForm from "@/components/forms/feedback-form"
import NewsletterForm from "@/components/forms/newsletter-form"

export default function FormsPage() {
  return (
    <>
      <section className="bg-[#121d3e] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Forms</h1>
          <p className="max-w-3xl mx-auto text-lg">All the forms available on the Creating Opportunities website.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="contact" className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto">
              <TabsList className="grid grid-cols-6 w-full max-w-4xl">
                <TabsTrigger value="contact">Contact</TabsTrigger>
                <TabsTrigger value="job">Job Application</TabsTrigger>
                <TabsTrigger value="event">Event Registration</TabsTrigger>
                <TabsTrigger value="resume">Resume Submission</TabsTrigger>
                <TabsTrigger value="feedback">Feedback</TabsTrigger>
                <TabsTrigger value="newsletter">Newsletter</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="contact" className="max-w-4xl mx-auto">
              <ContactForm />
            </TabsContent>

            <TabsContent value="job" className="max-w-4xl mx-auto">
              <JobApplicationForm jobTitle="Marketing Manager" />
            </TabsContent>

            <TabsContent value="event" className="max-w-4xl mx-auto">
              <EventRegistrationForm eventTitle="Career Development Workshop" eventDate="April 20, 2025" />
            </TabsContent>

            <TabsContent value="resume" className="max-w-4xl mx-auto">
              <ResumeSubmissionForm />
            </TabsContent>

            <TabsContent value="feedback" className="max-w-4xl mx-auto">
              <FeedbackForm />
            </TabsContent>

            <TabsContent value="newsletter" className="max-w-4xl mx-auto">
              <NewsletterForm />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
}
