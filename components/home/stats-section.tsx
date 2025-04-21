import { Card, CardContent } from "@/components/ui/card"

export default function StatsSection() {
  const stats = [
    { value: "500+", label: "Opportunities Created" },
    { value: "1000+", label: "Professionals Trained" },
    { value: "50+", label: "Partner Organizations" },
    { value: "100+", label: "Events Organized" },
  ]

  return (
    <section className="py-16 bg-[#121d3e] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
          <p className="max-w-2xl mx-auto text-white/80">
            We're proud of the difference we've made in the lives of individuals and organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 border-none">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-[#0e9aa7] mb-2">{stat.value}</div>
                <p className="text-white/90">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
