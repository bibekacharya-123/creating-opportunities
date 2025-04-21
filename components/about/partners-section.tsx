import Image from "next/image"

export default function PartnersSection() {
  const partnerCategories = [
    {
      title: "Corporate Partners",
      partners: [
        { name: "Tech Innovations", logo: "/placeholder.svg?height=80&width=200" },
        { name: "Global Finance", logo: "/placeholder.svg?height=80&width=200" },
        { name: "Himalayan Industries", logo: "/placeholder.svg?height=80&width=200" },
        { name: "Nepal Telecom", logo: "/placeholder.svg?height=80&width=200" },
      ],
    },
    {
      title: "Educational Institutions",
      partners: [
        { name: "Kathmandu University", logo: "/placeholder.svg?height=80&width=200" },
        { name: "Tribhuvan University", logo: "/placeholder.svg?height=80&width=200" },
        { name: "Nepal Academy", logo: "/placeholder.svg?height=80&width=200" },
        { name: "International College", logo: "/placeholder.svg?height=80&width=200" },
      ],
    },
    {
      title: "Non-Profit Organizations",
      partners: [
        { name: "Nepal Foundation", logo: "/placeholder.svg?height=80&width=200" },
        { name: "Youth Development", logo: "/placeholder.svg?height=80&width=200" },
        { name: "Community Empowerment", logo: "/placeholder.svg?height=80&width=200" },
        { name: "Rural Initiatives", logo: "/placeholder.svg?height=80&width=200" },
      ],
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-4">Our Partners</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We collaborate with leading organizations across sectors to create valuable opportunities and drive positive
            change.
          </p>
        </div>

        <div className="space-y-12">
          {partnerCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-xl font-bold text-[#121d3e] mb-6 text-center">{category.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {category.partners.map((partner, partnerIndex) => (
                  <div
                    key={partnerIndex}
                    className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={200}
                      height={80}
                      className="max-h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
