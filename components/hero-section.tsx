"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useMotionValue, useSpring, useTransform } from "framer-motion"

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
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const controls = useAnimation()

  // Mouse parallax effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothMouseX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  const moveX = useTransform(smoothMouseX, [-500, 500], [-15, 15])
  const moveY = useTransform(smoothMouseY, [-500, 500], [-15, 15])

  // Scroll parallax effect
  const [scrollY, setScrollY] = useState(0)
  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  // Advanced particle system
  const [particles, setParticles] = useState<
    Array<{
      x: number
      y: number
      size: number
      speed: number
      opacity: number
      color: string
      direction: number
    }>
  >([])

  // 3D objects rotation state
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 })

  useEffect(() => {
    // Initialize advanced particles with varied behaviors
    const newParticles = Array.from({ length: 80 }, () => {
      const colorChoice = Math.random()
      let color

      if (colorChoice < 0.3) {
        color = "#4a5f9d" // Blue accent
      } else if (colorChoice < 0.6) {
        color = "#8a6fbd" // Purple accent
      } else if (colorChoice < 0.9) {
        color = "#6a7fbd" // Light blue accent
      } else {
        color = "#ffffff" // White
      }

      return {
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 5 + 1,
        speed: Math.random() * 0.4 + 0.1,
        opacity: Math.random() * 0.7 + 0.2,
        color,
        direction: Math.random() > 0.5 ? 1 : -1,
      }
    })
    setParticles(newParticles)

    // Handle mouse move for parallax
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const rect = sectionRef.current?.getBoundingClientRect()
      if (rect) {
        mouseX.set(clientX - rect.left - rect.width / 2)
        mouseY.set(clientY - rect.top - rect.height / 2)

        // Update 3D object rotation based on mouse position
        const rotX = (clientY - rect.top - rect.height / 2) / 20
        const rotY = (clientX - rect.left - rect.width / 2) / 20
        setRotation({ x: rotX, y: rotY, z: 0 })
      }
    }

    // Animate particles with varied behaviors
    let animationFrameId: number
    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => ({
          ...particle,
          x: particle.x + Math.sin(Date.now() * 0.001) * 0.1 * particle.direction,
          y: (particle.y - particle.speed) % 100,
        })),
      )
      animationFrameId = requestAnimationFrame(animateParticles)
    }

    // Start animations
    setIsVisible(true)
    controls.start("visible")
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)
    animationFrameId = requestAnimationFrame(animateParticles)

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(animationFrameId)
    }
  }, [mouseX, mouseY, controls])

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* Noise texture overlay */}
      <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none noise-texture"></div>

      {/* Background with parallax effect */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
          backgroundColor: !backgroundImage ? backgroundColor : "transparent",
          backgroundSize: "cover",
          backgroundPosition: "center",
          translateY: scrollY * 0.3,
          x: moveX,
          y: moveY,
        }}
      />

      {/* Advanced gradient overlay with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a5c]/40 via-[#121d3e]/30 to-[#0a1128]/50"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#2a1a5c]/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-[#0a1a38]/30"></div>

      {/* Radial glow effect */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full radial-glow opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-[300px] h-[300px] rounded-full radial-glow-accent opacity-15 blur-2xl"></div>

      {/* Advanced particles system */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, index) => (
          <div
            key={index}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              opacity: particle.opacity,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
              filter: `blur(${particle.size > 3 ? 1 : 0}px)`,
            }}
          />
        ))}
      </div>

      {/* 3D geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating 3D cube */}
        <motion.div
          className="absolute top-1/4 right-[15%] w-40 h-40 md:w-60 md:h-60 hidden md:block"
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
            className="relative w-full h-full"
            style={{
              transformStyle: "preserve-3d",
              rotateX: rotation.x,
              rotateY: rotation.y,
              rotateZ: rotation.z,
            }}
            animate={{
              rotateY: [0, 360],
              rotateX: [15, 30, 15],
            }}
            transition={{
              rotateY: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              rotateX: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", repeatType: "reverse" },
            }}
          >
            {/* Cube faces */}
            <div className="absolute w-full h-full bg-gradient-to-br from-[#4a5f9d]/20 to-[#8a6fbd]/10 backdrop-blur-sm border border-white/10 transform-style-3d transform translate-z-[30px]"></div>
            <div className="absolute w-full h-full bg-gradient-to-br from-[#4a5f9d]/20 to-[#8a6fbd]/10 backdrop-blur-sm border border-white/10 transform-style-3d transform -translate-z-[30px]"></div>
            <div className="absolute w-full h-full bg-gradient-to-br from-[#4a5f9d]/20 to-[#8a6fbd]/10 backdrop-blur-sm border border-white/10 transform-style-3d transform rotate-y-90 translate-z-[30px]"></div>
            <div className="absolute w-full h-full bg-gradient-to-br from-[#4a5f9d]/20 to-[#8a6fbd]/10 backdrop-blur-sm border border-white/10 transform-style-3d transform rotate-y-90 -translate-z-[30px]"></div>
            <div className="absolute w-full h-full bg-gradient-to-br from-[#4a5f9d]/20 to-[#8a6fbd]/10 backdrop-blur-sm border border-white/10 transform-style-3d transform rotate-x-90 translate-z-[30px]"></div>
            <div className="absolute w-full h-full bg-gradient-to-br from-[#4a5f9d]/20 to-[#8a6fbd]/10 backdrop-blur-sm border border-white/10 transform-style-3d transform rotate-x-90 -translate-z-[30px]"></div>
          </motion.div>
        </motion.div>

        {/* Floating pyramid */}
        <motion.div
          className="absolute bottom-1/3 left-[10%] w-32 h-32 md:w-48 md:h-48 hidden md:block"
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
            className="relative w-full h-full"
            style={{
              transformStyle: "preserve-3d",
              rotateX: rotation.x * 0.7,
              rotateY: rotation.y * 0.7,
              rotateZ: rotation.z,
            }}
            animate={{
              rotateY: [0, -360],
              rotateX: [15, 25, 15],
            }}
            transition={{
              rotateY: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              rotateX: { duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", repeatType: "reverse" },
            }}
          >
            {/* Pyramid faces */}
            <div className="absolute left-0 top-0 w-full h-full border-t-0 border-l-[24px] border-r-[24px] border-b-[48px] border-l-transparent border-r-transparent border-b-[#6a7fbd]/20 transform-style-3d transform -translate-y-1/2"></div>
            <div className="absolute left-0 top-0 w-full h-full border-t-0 border-l-[24px] border-r-[24px] border-b-[48px] border-l-transparent border-r-transparent border-b-[#6a7fbd]/20 transform-style-3d transform -translate-y-1/2 rotate-y-90"></div>
            <div className="absolute left-0 top-0 w-full h-full border-t-0 border-l-[24px] border-r-[24px] border-b-[48px] border-l-transparent border-r-transparent border-b-[#6a7fbd]/20 transform-style-3d transform -translate-y-1/2 rotate-y-180"></div>
            <div className="absolute left-0 top-0 w-full h-full border-t-0 border-l-[24px] border-r-[24px] border-b-[48px] border-l-transparent border-r-transparent border-b-[#6a7fbd]/20 transform-style-3d transform -translate-y-1/2 rotate-y-270"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="container mx-auto h-full relative z-20 flex flex-col justify-center px-4 md:px-6">
        <div className="max-w-4xl">
          {/* Single-line title with animation */}
          <div className="overflow-hidden mb-6 relative">
            <div className="absolute -left-8 top-1/2 w-6 h-[2px] bg-gradient-to-r from-[#4a5f9d] to-transparent"></div>

            {/* Title on a single line with reveal animation */}
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-7xl font-bold text-white whitespace-nowrap overflow-hidden"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
              >
                {title}
              </motion.h1>

              {/* Animated underline */}
              <motion.div
                className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#8a6fbd] to-[#4a5f9d]"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, delay: 0.3 }}
              />
            </motion.div>

            <div className="absolute -right-8 top-1/2 w-6 h-[2px] bg-gradient-to-l from-[#4a5f9d] to-transparent"></div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -bottom-4 left-0 w-20 h-1 bg-gradient-to-r from-[#8a6fbd] to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "5rem" }}
              transition={{ duration: 1, delay: 1 }}
            />
            <motion.div
              className="absolute -bottom-4 left-24 w-40 h-1 bg-gradient-to-r from-[#4a5f9d] to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "10rem" }}
              transition={{ duration: 1.2, delay: 1.2 }}
            />
          </div>

          {/* Stylized subtitle with reveal animation */}
          {subtitle && (
            <div className="overflow-hidden relative">
              <motion.div
                className="absolute -left-4 top-1/2 w-3 h-3 rounded-full bg-[#8a6fbd]"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.7 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              />
              <motion.p
                className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed pl-2 backdrop-blur-sm bg-[#121d3e]/10 rounded-md p-4 border-l-2 border-[#4a5f9d]"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {subtitle}
              </motion.p>
            </div>
          )}

          {/* Enhanced CTA buttons */}
          <motion.div
            className="mt-10 flex flex-wrap gap-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              className="px-10 py-4 rounded-md bg-gradient-to-r from-[#2a3f7d] to-[#4a5f9d] text-white font-medium relative overflow-hidden group shadow-lg shadow-[#2a3f7d]/20"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(42, 63, 125, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                <motion.span
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.2 }}
                  className="mr-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </motion.span>
                Get Started
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#4a5f9d] to-[#2a3f7d]"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
              <motion.span
                className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100 blur-md bg-gradient-to-r from-[#4a5f9d] to-[#2a3f7d] transition-all duration-500"
                style={{ zIndex: -1 }}
              />
            </motion.button>

            <motion.button
              className="px-10 py-4 rounded-md bg-transparent border border-white/30 text-white font-medium backdrop-blur-sm relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                <motion.span
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.3 }}
                  className="mr-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    ></path>
                  </svg>
                </motion.span>
                Learn More
              </span>
              <motion.span
                className="absolute inset-0 bg-white/10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-white/70 text-sm mb-2 tracking-widest uppercase text-xs">Explore</span>
        <motion.div
          className="w-8 h-14 border-2 border-white/30 rounded-full flex justify-center p-1 relative overflow-hidden"
          animate={{
            boxShadow: [
              "0 0 0px rgba(255,255,255,0.3)",
              "0 0 10px rgba(255,255,255,0.5)",
              "0 0 0px rgba(255,255,255,0.3)",
            ],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full relative z-10"
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4a5f9d]/30 to-transparent"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
