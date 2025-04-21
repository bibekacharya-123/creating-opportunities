import Image from "next/image"

export default function AboutHeroSection() {
  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=600&width=1600"
          alt="About Us Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#121d3e]/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Learn more about Creating Opportunities International and our mission to empower dreams.
          </p>
        </div>
      </div>
    </section>
  )
}
