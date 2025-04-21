import JobApplicationForm from "@/components/forms/job-application-form"

export default function JobApplicationFormPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Job Application Form Component</h1>
      <div className="border rounded-lg p-4">
        <JobApplicationForm />
      </div>
    </div>
  )
}
