"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden bg-gradient-to-r from-[#0e6e8c] to-[#0a5a75]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
        </div>

        <motion.div
          className="container relative z-20 mx-auto h-full flex flex-col justify-center px-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover how we can help you achieve your goals with our comprehensive range of professional services
          </motion.p>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <div className="w-24 h-1 bg-[#0e6e8c] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of services designed to meet your business needs and help you succeed in today's
              competitive landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-24">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function ServiceCard({ service, index }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 * index }}
      viewport={{ once: true, margin: "-100px" }}
      className="group"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}
      >
        <div className={`relative ${!isEven ? "lg:order-2" : ""}`}>
          <motion.div
            className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden rounded-xl shadow-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white text-sm font-medium tracking-wider">{service.subtitle}</p>
            </div>
          </motion.div>

          <motion.div
            className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-[#0e6e8c] text-white flex items-center justify-center shadow-lg"
            whileHover={{ scale: 1.1, rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronRight size={24} />
          </motion.div>
        </div>

        <div className={`${!isEven ? "lg:order-1" : ""}`}>
          <motion.div
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>

            <motion.div
              className="w-16 h-1 bg-[#0e6e8c] mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            />

            <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>

            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
         
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

const services = [
  {
    slug: "logistics-management",
    title: "LOGISTICS MANAGEMENT",
    subtitle: "STREAMLINING SUPPLY CHAINS FOR EFFICIENT & TIMELY OPERATIONS",
    description:
      "Streamlining the flow of goods, services, and information across the supply chain, our logistics management services ensure timely delivery, cost-effectiveness, and operational efficiency.",
    image: "/assets/services/logi.jpg",
    link: "/services/logistics-management",
  },
  {
    slug: "vendor-management",
    title: "VENDOR MANAGEMENT",
    subtitle: "OPTIMIZING PROCUREMENT FOR QUALITY SUPPLY CHAIN PARTNERSHIPS",
    description:
      "Our vendor management service helps you build and maintain quality partnerships throughout your supply chain. We assist with vendor selection, contract negotiation, performance evaluation, and relationship management to ensure you get the best value from your suppliers.",
    image: "/assets/services/vendor.jpg",
    link: "/services/vendor-management",
  },
  {
    slug: "event-management",
    title: "Human Resource Management",
    subtitle: "CREATING MEMORABLE EXPERIENCES WITH FLAWLESS EXECUTION",
    description: "Services related to the management of personnel, including recruitment, training, and development.",
    image: "/assets/services/human.jpg",
    link: "/services/event-management",
  },
  {
    slug: "career-development",
    title: "Training & Event Management",
    subtitle: "EMPOWERING INDIVIDUALS TO ACHIEVE PROFESSIONAL EXCELLENCE",
    description:
      "Our career development service provides guidance and resources to help individuals advance in their professional journey. We offer career counseling, skills assessment, resume building, interview preparation, and personalized action plans for career growth.",
    image: "/assets/services/traning.jpg",
    link: "/services/career-development",
  },
  {
    slug: "digital-marketing",
    title: "Corporate Events & Strategic Business Projects",
    subtitle: "ENHANCING YOUR ONLINE PRESENCE FOR MAXIMUM IMPACT",
    description:
      "Our digital marketing service helps you establish and grow your online presence. We provide strategies for social media management, content creation, SEO optimization, email marketing, and analytics to increase your visibility and engagement with your target audience.",
    image: "/assets/services/corpo.jpg",
    link: "/services/digital-marketing",
  },
  {
    slug: "consulting-services",
    title: "Advancing Professional Development & Learning",
    subtitle: "EXPERT GUIDANCE FOR ORGANIZATIONAL GROWTH AND TRANSFORMATION",
    description:
      "Our consulting services offer expert advice and solutions for various business challenges. We provide strategic planning, process improvement, change management, and performance optimization to help your organization achieve its goals and overcome obstacles.",
    image: "/assets/services/adv.jpg",
    link: "/services/consulting-services",
  },
  {
    slug: "merchandise",
    title: "Opportunity Matching & Application Support",
    subtitle: "HIGH-QUALITY PRODUCTS THAT REPRESENT OUR MISSION AND VALUES",
    description:
      "Our merchandise collection is designed to inspire and empower. Each purchase supports our mission to create opportunities for individuals and communities around the world. From apparel to accessories, our products are made with quality materials and ethical manufacturing practices.",
    image: "/assets/services/opp.jpg",
    link: "/services/merchandise",
  },
  {
    slug: "extended-services",
    title: "Career Development & Technical Partnership",
    subtitle: "SPECIALIZED SOLUTIONS TO MEET YOUR UNIQUE NEEDS",
    description:
      "Our extended services offer specialized solutions including event management & conferences, academic ECA calendar, event management toolkit, professional development workshops, and educational consulting to address your specific challenges and requirements.",
    image: "/assets/services/career.jpg",
    link: "/services/extended-services",
  },
]
