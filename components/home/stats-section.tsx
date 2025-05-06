"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation, useMotionValue, useSpring } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

// Counter animation component
const Counter = ({ value, duration = 2 }: { value: string; duration?: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.5 })

  // Extract the numeric part
  const numericValue = Number.parseInt(value.replace(/\D/g, ""))
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration, stiffness: 100, damping: 10 })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue)
    }
    const unsubscribe = springValue.onChange((v) => setDisplayValue(Math.floor(v)))
    return () => unsubscribe()
  }, [isInView, motionValue, springValue, numericValue])

  return (
    <div className="relative">
      <motion.div
        ref={ref}
        className="text-6xl font-bold bg-gradient-to-r from-[#4a9eff] to-[#9ee8ff] bg-clip-text text-transparent relative z-10"
      >
        {displayValue}
        {value.includes("+") && "+"}
      </motion.div>
      <motion.div
        className="absolute -inset-4 rounded-full bg-[#121d3e]/40 blur-xl z-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
        transition={{ delay: 0.3, duration: 1 }}
      />
    </div>
  )
}

export default function StatsSection() {
  const stats = [
    {
      value: "500+",
      label: "Opportunities Created",
      icon: "✨",
      description: "New doors opened for professionals",
    },
    {
      value: "1000+",
      label: "Professionals Trained",
      icon: "🎓",
      description: "Skilled individuals ready for success",
    },
    {
      value: "50+",
      label: "Partner Organizations",
      icon: "🤝",
      description: "Strong alliances driving change",
    },
    {
      value: "100+",
      label: "Events Organized",
      icon: "🎯",
      description: "Impactful gatherings and workshops",
    },
  ]

  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, amount: 0.5 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  }

  const titleText = "Our Impact"

  return (
    <section
      className="py-24 text-white relative overflow-hidden"
      style={{
        backgroundColor: "#121d3e",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#4a9eff" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#121d3e" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="#121d3e" />
          <circle cx="10%" cy="20%" r="30%" fill="url(#grad1)" />
          <circle cx="80%" cy="60%" r="40%" fill="url(#grad1)" />
        </svg>

        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              className="absolute h-px w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              style={{ top: `${i * 10}%` }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent"
              style={{ left: `${i * 10}%` }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(${74 + Math.random() * 80}, ${158 + Math.random() * 40}, ${255}, ${0.2 + Math.random() * 0.3})`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={titleRef}
          variants={titleVariants}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-2">
            {titleText.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#4a9eff] to-[#9ee8ff] bg-clip-text text-transparent inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>

          <motion.p
            className="max-w-2xl mx-auto text-blue-200/80 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            We're proud of the difference we've made in the lives of individuals and organizations.
          </motion.p>

          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-[#4a9eff] to-[#9ee8ff] mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            animate={titleInView ? { width: 96 } : { width: 0 }}
            transition={{ delay: 1, duration: 1 }}
          />
        </motion.div>

        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Card className="bg-[#1a2754]/50 backdrop-blur-md border border-blue-500/20 overflow-hidden group h-full hover:shadow-[0_0_30px_rgba(74,158,255,0.15)] transition-all duration-500 rounded-xl">
                <CardContent className="p-8 text-center relative h-full flex flex-col items-center justify-center">
                  {/* Decorative elements */}
                  <motion.div
                    className="absolute -right-6 -top-6 text-5xl opacity-10 group-hover:opacity-20 transition-opacity"
                    animate={{
                      rotate: [0, 10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    {stat.icon}
                  </motion.div>

                  <motion.div
                    className="absolute -left-10 -bottom-10 w-20 h-20 rounded-full bg-blue-500/10"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  />

                  <Counter value={stat.value} duration={2.5} />

                  <motion.h3
                    className="text-white mt-6 text-xl font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                  >
                    {stat.label}
                  </motion.h3>

                  <motion.p
                    className="text-blue-200/60 mt-2 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.2, duration: 0.8 }}
                  >
                    {stat.description}
                  </motion.p>

                  <motion.div
                    className="w-12 h-1 bg-gradient-to-r from-[#4a9eff] to-[#9ee8ff] mx-auto mt-6 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "3rem" }}
                    transition={{ delay: 0.9 + index * 0.2, duration: 0.8 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
