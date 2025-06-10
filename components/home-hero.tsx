"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import MultiStepForm from './MultiStepForm'

// Service slides data
const slides = [
  {
    id: 1,
    title: "APP",
    highlight: "DEVELOPMENT",
    subtitle: "",
    description: "Partnering with us for end-to-end app development is easier. From concept to execution, we are aligned with your vision in building impactful applications that reach the right users to drive success.",
    features: ["Cross-Platform", "Scalable Solutions", "User-Centric Design", "Performance Optimized"],
    image: "/images/home page/with_gradiant/app-dev.png",
    service: "App Development Services"
  },
  {
    id: 2,
    title: "DIGITAL",
    highlight: "MARKETING",
    subtitle: "SERVICES",
    description: "Partnering with us for end-to-end digital marketing services is easier. From strategies to execution, we are aligned with your vision in building impactful campaigns that reach the right audience to drive success.",
    features: ["For Startups", "Booming companies", "Upliftment of business organizations", "Comparative growth"],
    image: "/images/home page/with_gradiant/Digital-marketing.png",
    service: "Digital Marketing Services"
  },
  {
    id: 3,
    title: "UI/UX",
    highlight: "DESIGNING",
    subtitle: "SERVICES",
    description: "Partnering with us for comprehensive UI/UX design services is easier. From wireframes to execution, we are aligned with your vision in building impactful designs that reach the right users to drive engagement.",
    features: ["User Research", "Intuitive Interfaces", "Design Systems", "Accessibility Focus"],
    image: "/images/home page/with_gradiant/UI-UX.png",
    service: "UI/UX Design Services"
  },
  {
    id: 4,
    title: "SEO",
    highlight: "SERVICES",
    subtitle: "",
    description: "Partnering with us for comprehensive SEO services is easier. From keyword research to execution, we are aligned with your vision in building impactful strategies that reach the right audience to drive organic growth.",
    features: ["Keyword Optimization", "Technical SEO", "Content Strategy", "Ranking Improvement"],
    image: "/images/home page/with_gradiant/seo.png",
    service: "SEO Services"
  },
  {
    id: 5,
    title: "PERFORMANCE",
    highlight: "MARKETING",
    subtitle: "",
    description: "Partnering with us for data-driven performance marketing is easier. From campaign setup to execution, we are aligned with your vision in building impactful strategies that reach the right audience to drive measurable ROI.",
    features: ["ROI Focused", "Data-Driven Insights", "Conversion Optimization", "Campaign Management"],
    image: "/images/home page/with_gradiant/performance-marketing.png",
    service: "Performance Marketing Services"
  }
]

export default function HomeHero() {
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
    <section className="relative w-full h-[720px] md:h-auto overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src={current.image}
          alt={`${current.title} ${current.highlight}`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          style={{ objectPosition: 'top center' }}
        />
      </div>

      {/* Content Container - Updated container classes */}
      <div className="relative z-20 max-w-[1344px] mx-auto h-full flex flex-col lg:flex-row items-start px-4 md:px-6 lg:px-8 pt-6 pb-4 lg:gap-8">
        {/* Left Side: Content + Form - Updated width and padding */}
        <div className="w-full lg:w-[45%] flex flex-col gap-3">
          <h1 className="text-[40px] font-extrabold leading-snug mt-12 font-nunito">
            <span className="block">
              <span className="text-[#006D9F]">{current.title}</span>
              <span className="text-black"> {current.highlight}</span>
            </span>
            {current.subtitle && (
              <span className="block text-black">{current.subtitle}</span>
            )}
          </h1>

          <p className="text-sm text-gray-700 mb-5 leading-relaxed max-w-[90%]">{current.description}</p>

          {/* Features with tick marks */}
          <div className="grid grid-cols-2 gap-x-3 gap-y-2 mb-5">
            {current.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <img
                  src="/images/about/check.png"
                  alt="tick mark"
                  className="w-4 h-4 flex-shrink-0"
                />
                <span className="text-xs text-gray-800">{feature}</span>
              </div>
            ))}
          </div>

          {/* Form Container */}
          <div className="border border-[#ADD8E6] rounded-md p-4 flex flex-col gap-4 mt-1 mb-20 w-full min-h-[287px]">
            <MultiStepForm />
          </div>

          {/* Bottom Navigation */}
          <div className="flex justify-between items-center text-xs text-[#006D9F] font-inter">
            <span className="cursor-pointer hover:underline">View service ↗</span>
            <div className="flex items-center gap-3">
              <span className="text-gray-500">
                {String(currentSlide + 1).padStart(2, "0")}/{String(slides.length).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-1">
                <button onClick={prevSlide} className="p-1 hover:bg-blue-100 rounded transition-colors">
                  <ChevronLeft className="w-3 h-3 text-[#006D9F]" />
                </button>
                <button onClick={nextSlide} className="p-1 hover:bg-blue-100 rounded transition-colors">
                  <ChevronRight className="w-3 h-3 text-[#006D9F]" />
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
                  index === currentSlide ? "bg-[#006D9F]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Reserved space */}
        <div className="hidden lg:block w-[55%] h-full"></div>
      </div>
    </section>
  )
} 