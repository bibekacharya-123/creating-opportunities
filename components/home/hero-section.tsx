"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: "/placeholder.svg?height=1080&width=1920",
      title: "Creating Opportunities International",
      description: "Nepal's foremost platform for educational and professional opportunities.",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=1080&width=1920",
      title: "Empowering Dreams",
      description: "We connect talented individuals with life-changing opportunities.",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=1080&width=1920",
      title: "Your Path to Success",
      description: "Discover scholarships, fellowships, jobs, and more.",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen w-full overflow-hidden">
      {/* Slider */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Add a gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
            </div>
          </div>
        ))}

        {/* Content positioned at bottom left */}
        <div className="absolute bottom-10 left-4 z-10 max-w-xl text-left sm:bottom-16 md:bottom-24 md:left-8 lg:bottom-32 lg:left-16">
          <h1 className="mb-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-lg">
            {slides[currentSlide].title}
          </h1>
          <p className="mb-4 text-base text-white/90 sm:text-lg md:mb-6">{slides[currentSlide].description}</p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Link href="/opportunities">
              <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white px-4 py-2 sm:px-6 sm:py-5 rounded-md font-semibold text-sm sm:text-base md:text-lg transition transform hover:scale-105">
                Explore Opportunities
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white/10 px-4 py-2 sm:px-6 sm:py-5 rounded-md font-semibold text-sm sm:text-base md:text-lg transition transform hover:scale-105"
              >
                About Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-1 sm:bottom-8 sm:space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 w-6 rounded-full transition-all duration-200 sm:h-2 sm:w-10 ${
                index === currentSlide ? "bg-white" : "bg-white/40 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}