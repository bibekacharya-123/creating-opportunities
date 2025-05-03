import Image from "next/image"
import { AnimatedSection } from "@/components/ui/animated-section"

export default function PartnersSection() {
  const partners = [
    { name: "YFC-KU ", logo: "/assets/yfc.jpg" },
    { name: "Scholostic Foundation", logo: "/assets/sf.jpg" },
    { name: "DELIGHT", logo: "/assets/delight.jpg" },
    { name: "Language Of Liberty", logo: "/assets/liberty.jpg" },
    { name: "FountED", logo: "/assets/fount.jpg" },
    { name: "AVIXANTA", logo: "/assets/avainta.jpg" },
    { name: "BAN", logo: "/assets/ban.jpeg" },
    { name: "Coding Olynpics Nepal", logo: "/assets/coding.png" },
    { name: "Rotaract", logo: "/assets/rotract.png" },
    { name: "jaya Nepal", logo: "/assets/jaya.jpg" },
    { name: "lola", logo: "/assets/lola.jpg" },

 

  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-light-teal/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-light-teal/10 to-transparent"></div>

      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-light-teal/20 text-dark-teal rounded-full text-sm font-medium mb-3">
              Trusted Partners
            </span>
            <h2 className="text-4xl font-bold text-dark-teal mb-4">Our Partners</h2>
            <p className="text-medium-teal max-w-2xl mx-auto">
              We collaborate with leading organizations to create valuable opportunities and drive meaningful change.
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-30 h-30 bg-light-teal/10 rounded-full"></div>
          <div className="absolute -right-10 top-1/3 transform -translate-y-1/2 w-20 h-20 bg-light-teal/20 rounded-full"></div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <AnimatedSection
                key={index}
                animation="zoom-in"
                delay={0.1 * index}
                className="flex items-center justify-center"
              >
                <div className="group relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-32 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-light-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={200}
                    height={80}
                    className="max-h-16 w-auto grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-2 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-medium text-dark-teal">{partner.name}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection animation="fade-up" delay={0.4} className="mt-12 text-center">
          <a href="#" className="inline-flex items-center text-dark-teal hover:text-medium-teal-alt font-medium">
            <span>View all partners</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
