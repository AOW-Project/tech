"use client"

import { useState } from "react"
import Image from "next/image"

const testimonialSets = [
  [
    {
      quote:
        "We absolutely loved working with the team! The Skill Koala site turned out even better than we imagined — fun, modern, and super engaging. Huge thanks for bringing our vision to life! The UI is clean, and the UX is intuitive — exactly what we needed for interactive learning.",
      name: "Alice Rosenberg",
      title: "co-owner",
      logo: "/images/Author image.png",
    },
    {
      quote:
        "We're very pleased with the website the team developed for Autorepair. It's clean, fast, and makes it easy for customers to find the parts they need. The user experience is smooth, and the backend is simple to manage. Excellent work and reliable communication throughout the project!",
      name: "John Carter",
      title: "Project Manager",
      logo: "/images/Author image.png",
    },
  ],
  [
    {
      quote:
        "The team delivered an exceptional e-commerce platform that exceeded our expectations. Sales have increased by 40% since launch, and customer feedback has been overwhelmingly positive about the intuitive shopping experience.",
      name: "Sarah Johnson",
      title: "Marketing Director",
      logo: "/images/Author image.png",
    },
    {
      quote:
        "Working with this team transformed our outdated website into a modern, responsive platform. Their attention to detail and understanding of our brand was impressive. The new site has significantly improved our conversion rates.",
      name: "Michael Chen",
      title: "CEO, TechSolutions",
      logo: "/images/Author image.png",
    },
  ],
  [
    {
      quote:
        "The mobile app they developed for our healthcare service has streamlined patient communication and appointment scheduling. The interface is clean, accessible, and our staff required minimal training to use it effectively.",
      name: "Dr. Emily Rodriguez",
      title: "Medical Director",
      logo: "/images/Author image.png",
    },
    {
      quote:
        "Our startup needed a distinctive brand identity and website to stand out in a competitive market. The team delivered a comprehensive solution that perfectly captured our vision while ensuring excellent user experience.",
      name: "David Park",
      title: "Founder, InnovateTech",
      logo: "/images/Author image.png",
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
    <section className="py-16 md:py-20 bg-gradient-to-r from-white via-blue-50 to-blue-100 overflow-hidden">
      <div className="relative max-w-screen-xl mx-auto px-6">
        {/* Header Container */}
        <div className="mb-12">
          <p className="text-xs font-bold uppercase text-blue-600 tracking-wide">TESTIMONIALS</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            WHAT OUR <span className="text-gray-900">CLIENTS</span> SAY
          </h2>
        </div>

        {/* Testimonials and Arrows Container */}
        <div className="flex items-start gap-6 mb-12">
          {/* Arrows */}
          <div className="flex gap-3 mt-2">
            <button
              onClick={prevSlide}
              aria-label="Previous testimonials"
              className="flex items-center justify-center w-9 h-9 transition"
            >
              <Image src="/images/left arrow.png" alt="Previous" width={36} height={36} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next testimonials"
              className="flex items-center justify-center w-9 h-9 transition"
            >
              <Image src="/images/right arrow.png" alt="Next" width={36} height={36} />
            </button>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
            {testimonialSets[currentSlide].map((testimonial, index) => (
              <div key={index} className="flex flex-col justify-between h-full">
                <p className="text-gray-800 text-sm leading-relaxed relative">
                  <span className="text-blue-600 text-2xl mr-2 align-top">“</span>
                  {testimonial.quote}
                  <span className="text-blue-600 text-2xl ml-2 align-bottom">”</span>
                </p>
                <div className="mt-6 flex items-center">
                  <Image
                    src={testimonial.logo}
                    alt={testimonial.name}
                    width={32}
                    height={32}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-md mx-auto">
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div
              className="h-1 rounded-full transition-all duration-300 ease-out bg-gradient-to-r from-blue-600 via-purple-500 to-red-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}