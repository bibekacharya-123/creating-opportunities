import EventRegistrationForm from "@/components/forms/event-registration-form"

export default function EventRegistrationFormPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Event Registration Form Component</h1>
      <div className="border rounded-lg p-4">
        <EventRegistrationForm />
      </div>
    </div>
  )
}
