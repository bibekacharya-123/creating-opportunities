import { Users, Globe, LayoutGrid, Trophy, Clock } from "lucide-react"

export default function FactsSection() {
  const facts = [
    {
      icon: Users,
      value: "200000+",
      label: "Reach",
    },
    {
      icon: Globe,
      value: "50+",
      label: "Countries",
    },
    {
      icon: LayoutGrid,
      value: "10+",
      label: "Projects",
    },
    {
      icon: Trophy,
      value: "20+",
      label: "Awards",
    },
    {
      icon: Clock,
      value: "1500+",
      label: "Monthly Beneficiaries",
    },
  ]

  return (
    <section className="py-16 bg-[#121d3e] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Facts About Us</h2>
          <p className="max-w-3xl mx-auto">
            Key statistics that highlight our impact and reach in creating opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {facts.map((fact, index) => (
            <div key={index} className="text-center">
              <fact.icon className="mx-auto mb-4 text-gray-400" size={40} />
              <div className="text-4xl font-bold text-white mb-2">{fact.value}</div>
              <p className="text-gray-300">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
