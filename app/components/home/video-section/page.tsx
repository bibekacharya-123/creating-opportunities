import VideoSection from "@/components/home/video-section"

export default function VideoSectionPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Video Section Component</h1>
      <div className="border rounded-lg p-4">
        <VideoSection />
      </div>
    </div>
  )
}
