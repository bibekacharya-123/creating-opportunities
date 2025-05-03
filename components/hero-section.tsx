interface HeroSectionProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  backgroundColor?: string
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  backgroundColor = "#121d3e",
}: HeroSectionProps) {
  return (
    <section
      className="relative w-full h-[500px] md:h-[400px]"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundColor: !backgroundImage ? backgroundColor : "transparent",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for text readability if using background image */}
      {backgroundImage && <div className="absolute inset-0 bg-black/40"></div>}

      <div className="container mx-auto h-full relative">
        <div className="absolute bottom-12 left-4 md:left-6 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">{title}</h1>
          {subtitle && <p className="text-lg md:text-xl max-w-2xl">{subtitle}</p>}
        </div>
      </div>
    </section>
  )
}
