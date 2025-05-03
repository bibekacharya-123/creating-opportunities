export default function AboutHeroSection() {
  return (
    <section className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/about.jpg')" }}></div>

      {/* Content */}
      <div className="relative z-10 text-white py-32 bg-black bg-opacity-50">
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
