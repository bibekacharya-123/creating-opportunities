import PostInternshipForm from "@/components/forms/post-internship-form"

export default function PostInternshipFormPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Post Internship Form Component</h1>
      <div className="border rounded-lg p-4">
        <PostInternshipForm />
      </div>
    </div>
  )
}
