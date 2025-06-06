"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "WEB",
    highlight: "DEVELOPMENT",
    subtitle: "",
    description:
      "Partnering with us for end-to-end mobile app development is easier. From concept to execution, we are aligned with your vision in building impactful applications that reach the right users to drive success.",
    features: ["Cross-Platform", "Scalable Solutions", "User-Centric Design", "Performance Optimized"],
    image: "/images/home page/1.png",
    service: "Mobile App Development",
  },
  {
    id: 2,
    title: "INTEGRATED DIGITAL",
    highlight: "MARKETING",
    subtitle: "AGENCY",
    description:
      "Partnering with us for end-to-end digital marketing services is easier. From strategies to execution, we are aligned with your vision in building impactful campaigns that reach the right audience to drive success.",
    features: ["For Startups", "Booming companies", "Upliftment of business organizations", "Comparative growth"],
    image: "/images/home page/2.jpg",
    service: "Integrated Digital Marketing Agency",
  },
  {
    id: 3,
    title: "UI/UX",
    highlight: "DESIGNING",
    subtitle: "SERVICES",
    description:
      "Partnering with us for comprehensive UI/UX design services is easier. From wireframes to execution, we are aligned with your vision in building impactful designs that reach the right users to drive engagement.",
    features: ["User Research", "Intuitive Interfaces", "Design Systems", "Accessibility Focus"],
    image: "/images/home page/3.png",
    service: "UI/UX Design Services",
  },
  {
    id: 4,
    title: "SEO",
    highlight: "SERVICES",
    subtitle: "",
    description:
      "Partnering with us for comprehensive SEO services is easier. From keyword research to execution, we are aligned with your vision in building impactful strategies that reach the right audience to drive organic growth.",
    features: ["Keyword Optimization", "Technical SEO", "Content Strategy", "Ranking Improvement"],
    image: "/images/home page/4.jpg",
    service: "SEO Optimization Services",
  },
  {
    id: 5,
    title: "PERFORMANCE",
    highlight: "MARKETING",
    subtitle: "",
    description:
      "Partnering with us for data-driven performance marketing is easier. From campaign setup to execution, we are aligned with your vision in building impactful strategies that reach the right audience to drive measurable ROI.",
    features: ["ROI Focused", "Data-Driven Insights", "Conversion Optimization", "Campaign Management"],
    image: "/images/home page/5.jpg",
    service: "Performance Marketing Services",
  },
]

export default function LetterCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const current = slides[currentSlide]

  return (
    <div className="w-full h-[600px] overflow-hidden font-sans flex relative">
      {/* Left Content Section - 45% width with gradient background */}
      <div className="w-[45%] bg-gradient-to-r from-white via-white/95 to-white/80 flex flex-col justify-center px-8 md:px-12 pl-16 md:pl-20 py-12 relative z-20">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-4">
            {current.title} <span className="text-blue-600">{current.highlight}</span>
            {current.subtitle && (
              <>
                <br />
                <span className="text-black">{current.subtitle}</span>
              </>
            )}
          </h1>

          <p className="text-sm text-gray-700 mb-5 leading-relaxed">{current.description}</p>

          {/* Features with tick mark placeholders */}
          <div className="grid grid-cols-2 gap-x-3 gap-y-2 mb-5">
            {current.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                {/* Tick mark placeholder */}
                <img
                  src="/images/about/check.png"
                  alt="tick mark"
                  className="w-4 h-4 flex-shrink-0"
                />
                <span className="text-xs text-gray-800">{feature}</span>
              </div>
            ))}
          </div>

          {/* Form Box */}
          <div className="border border-blue-300 rounded-xl p-4 bg-white/95 backdrop-blur-sm shadow-md mb-5">
            <p className="uppercase text-[8px] text-gray-600 tracking-wider font-medium mb-1">
              Let's create something extraordinary together!
            </p>
            <p className="text-blue-600 text-xs font-semibold mb-3">YOUR JOURNEY TOWARDS EXCELLENCE STARTS HERE</p>

            <div className="mb-3">
              <label className="text-xs font-medium text-gray-700 block mb-1">Services*</label>
              <select className="w-full border border-gray-300 rounded-md px-2 py-1.5 text-xs focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                <option>{current.service}</option>
                <option>UI/UX Strategy</option>
                <option>Wireframing</option>
                <option>Prototyping</option>
                <option>Mobile App Development</option>
                <option>SEO Optimization</option>
                <option>Performance Marketing</option>
              </select>
            </div>

            <button className="w-full bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold py-1.5 rounded-md transition">
              Next
            </button>
          </div>

          {/* Bottom Navigation */}
          <div className="flex justify-between items-center text-xs text-blue-600 font-medium">
            <span className="cursor-pointer hover:underline">View service ↗</span>
            <div className="flex items-center gap-3">
              <span className="text-gray-500">
                {String(currentSlide + 1).padStart(2, "0")}/{String(slides.length).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-1">
                <button onClick={prevSlide} className="p-1 hover:bg-blue-100 rounded transition-colors">
                  <ChevronLeft className="w-3 h-3 text-blue-600" />
                </button>
                <button onClick={nextSlide} className="p-1 hover:bg-blue-100 rounded transition-colors">
                  <ChevronRight className="w-3 h-3 text-blue-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex gap-1.5 mt-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Image Section - 55% width with NO overlays */}
      <div className="w-[55%] relative overflow-hidden">
        <Image
          src={current.image || "/placeholder.svg"}
          alt={`${current.title} ${current.highlight}`}
          fill
          className="object-cover"
          priority
          sizes="55vw"
          key={`slide-${currentSlide}`}
        />
      </div>
    </div>
  )
}