"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const testimonialSets = [
  [
    {
      quote:
        "We absolutely loved working with the team! The Skill Koala site turned out even better than we imagined — fun, modern, and super engaging. Huge thanks for bringing our vision to life! The UI is clean, and the UX is intuitive — exactly what we needed for interactive learning.",
      name: "Alice Rosenberg",
      title: "co-owner",
      logo: "/images/Author image.png", // Replace with your actual logo path
    },
    {
      quote:
        "We're very pleased with the website the team developed for Autorepair. It's clean, fast, and makes it easy for customers to find the parts they need. The user experience is smooth, and the backend is simple to manage. Excellent work and reliable communication throughout the project!",
      name: "John Carter",
      title: "Project Manager",
      logo: "/images/Author image.png", // Replace with your actual logo path
    },
  ],
  [
    {
      quote:
        "The team delivered an exceptional e-commerce platform that exceeded our expectations. Sales have increased by 40% since launch, and customer feedback has been overwhelmingly positive about the intuitive shopping experience.",
      name: "Sarah Johnson",
      title: "Marketing Director",
      logo: "/images/Author image.png", // Replace with your actual logo path
    },
    {
      quote:
        "Working with this team transformed our outdated website into a modern, responsive platform. Their attention to detail and understanding of our brand was impressive. The new site has significantly improved our conversion rates.",
      name: "Michael Chen",
      title: "CEO, TechSolutions",
      logo: "/images/Author image.png", // Replace with your actual logo path
    },
  ],
  [
    {
      quote:
        "The mobile app they developed for our healthcare service has streamlined patient communication and appointment scheduling. The interface is clean, accessible, and our staff required minimal training to use it effectively.",
      name: "Dr. Emily Rodriguez",
      title: "Medical Director",
      logo: "/images/Author image.png", // Replace with your actual logo path
    },
    {
      quote:
        "Our startup needed a distinctive brand identity and website to stand out in a competitive market. The team delivered a comprehensive solution that perfectly captured our vision while ensuring excellent user experience.",
      name: "David Park",
      title: "Founder, InnovateTech",
      logo: "/images/Author image.png", // Replace with your actual logo path
    },
  ],
]

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonialSets.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonialSets.length - 1 : prev - 1))
  }

  const progressPercentage = ((currentSlide + 1) / testimonialSets.length) * 100

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold mb-4 bg-blue-600 text-white border-blue-600">
              TESTIMONIALS
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              WHAT OUR <span className="text-blue-600">CLIENTS</span> SAY
            </h2>
          </div>

          <div className="relative">
            {/* Navigation Arrows */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 hidden lg:block">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-gray-400 text-white flex items-center justify-center hover:bg-gray-500 transition-colors shadow-lg"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 hidden lg:block">
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Testimonials */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {testimonialSets[currentSlide].map((testimonial, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
                  <div className="mb-4">
                    <p className="text-gray-800 text-base leading-relaxed">{testimonial.quote}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 mr-3 flex-shrink-0">
                      <Image
                        src={testimonial.logo || "/placeholder.svg?height=24&width=24"}
                        alt={`${testimonial.name} company logo`}
                        width={24}
                        height={24}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <div className="text-gray-900 font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="flex justify-center items-center mb-6 lg:hidden space-x-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-gray-400 text-white flex items-center justify-center hover:bg-gray-500 transition-colors"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="w-full max-w-md mx-auto">
              <div className="w-full bg-gray-300 rounded-full h-1">
                <div
                  className="bg-blue-600 h-1 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
