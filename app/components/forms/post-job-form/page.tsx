import PostJobForm from "@/components/forms/post-job-form"

export default function PostJobFormPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Post Job Form Component</h1>
      <div className="border rounded-lg p-4">
        <PostJobForm />
      </div>
    </div>
  )
}
