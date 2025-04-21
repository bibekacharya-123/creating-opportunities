import FeedbackForm from "@/components/forms/feedback-form"

export default function FeedbackFormPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Feedback Form Component</h1>
      <div className="border rounded-lg p-4">
        <FeedbackForm />
      </div>
    </div>
  )
}
