import ResumeSubmissionForm from "@/components/forms/resume-submission-form"

export default function ResumeSubmissionFormPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Resume Submission Form Component</h1>
      <div className="border rounded-lg p-4">
        <ResumeSubmissionForm />
      </div>
    </div>
  )
}
