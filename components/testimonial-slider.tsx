"use client"

import { useState } from "react"
import Image from "next/image"

const testimonialSets = [
  [
    {
      quote:
        "We absolutely loved working with the team! The Skill Kwiz site turned out even better than we imagined — fun, modern, and super engaging. Huge thanks for bringing our vision to life! The UI is clean, and the UX is intuitive — exactly what we needed for interactive learning.",
      name: "Alice Rosenberg",
      title: "co-owner",
      logo: "/images/Authorimage.png",
    },
    {
      quote:
        "We're very pleased with the website the team developed for Autorepair. It's clean, fast, and makes it easy for customers to find the parts they need. The user experience is smooth, and the backend is simple to manage. Excellent work and reliable communication throughout the project!",
      name: "John Carter",
      title: "Project Manager",
      logo: "/images/Authorimage.png",
    },
  ],
  [
    {
      quote:
        "The team delivered an exceptional e-commerce platform that exceeded our expectations. Sales have increased by 40% since launch, and customer feedback has been overwhelmingly positive about the intuitive shopping experience.",
      name: "Sarah Johnson",
      title: "Marketing Director",
      logo: "/images/Authorimage.png",
    },
    {
      quote:
        "Working with this team transformed our outdated website into a modern, responsive platform. Their attention to detail and understanding of our brand was impressive. The new site has significantly improved our conversion rates.",
      name: "Michael Chen",
      title: "CEO, TechSolutions",
      logo: "/images/Authorimage.png",
    },
  ],
  [
    {
      quote:
        "The mobile app they developed for our healthcare service has streamlined patient communication and appointment scheduling. The interface is clean, accessible, and our staff required minimal training to use it effectively.",
      name: "Dr. Emily Rodriguez",
      title: "Medical Director",
      logo: "/images/Authorimage.png",
    },
    {
      quote:
        "Our startup needed a distinctive brand identity and website to stand out in a competitive market. The team delivered a comprehensive solution that perfectly captured our vision while ensuring excellent user experience.",
      name: "David Park",
      title: "Founder, InnovateTech",
      logo: "/images/Authorimage.png",
    },
  ],
]

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= testimonialSets.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? testimonialSets.length - 1 : prev - 1))
  }

  const progressPercentage = ((currentSlide + 1) / testimonialSets.length) * 100

  // Defensive: safely access current testimonial set
  const currentTestimonials = testimonialSets[currentSlide] ?? []

  return (
    <section
      className="mx-auto bg-gradient-to-r from-white via-blue-50 to-blue-100 overflow-hidden"
      style={{
        width: "1440px",
        height: "629px",
        paddingTop: "140px",
        paddingRight: "8px",
        paddingBottom: "140px",
        paddingLeft: "8px",
        backgroundImage: "url('/images/bg.png')",
      }}
    >
      <div className="relative mx-auto px-6 font-nunito h-full flex flex-col">
        {/* Header Container */}
        <div className="mb-12">
          <div className="text-[#006D9F] text-[16px] font-bold uppercase mb-2">
           TESTIMONIALS
          </div>

         <h2 className="font-nunito font-extrabold text-[48px] leading-[140%] tracking-normal uppercase text-black w-[1344px] h-[67px] mb-6">
            WHAT OUR <span className="text-[#006D9F]">CLIENTS </span>SAY
          </h2>
        </div>

        {/* Testimonials and Arrows Container */}
        <div
          className="flex items-start mb-12 flex-1"
          style={{
            width: "1632px",
            height: "212px",
            gap: "272px",
          }}
        >
          {/* Arrows */}
         <div
              className="flex mt-2 pl-4"
              style={{
                width: "200px",
                height: "200px",
                gap: "24px",
              }}
            >
              <button
                onClick={prevSlide}
                aria-label="Previous testimonials"
                className="flex items-center justify-center w-20 h-20 transition" // 80x80px
              >
                <Image src="/images/left arrow.png" alt="Previous" width={64} height={64} />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next testimonials"
                className="flex items-center justify-center w-20 h-20 transition"
              >
                <Image src="/images/right arrow.png" alt="Next" width={64} height={64} />
              </button>
            </div>


          {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 flex-1">
            {currentTestimonials.map((testimonial, index) => (
    <div
      key={index}
      className="flex flex-col justify-between p-0"
      style={{
        width: "546px",
        height: "180px",
        minHeight: "180px",
        borderRadius: "16px",
      }}
    >
      <p className="text-black text-[16px] font-semibold leading-relaxed relative font-nunito" >
          <span className="text-[#006D9F] text-2xl mr-2 align-top">“</span>
          {testimonial.quote}
          <span className="text-[#006D9F] text-2xl ml-2 align-bottom">”</span>
        </p>

      <div className="mt-4 flex items-center">
        <Image
          src={testimonial.logo}
          alt={testimonial.name}
          width={32}
          height={32}
          className="rounded-full mr-3"
        />
        <div className="flex gap-2 items-center">
          <p className="text-[16px] font-bold text-gray-900">{testimonial.name}</p>
          <p className="text-[16px] font-bold text-black">{testimonial.title}</p>
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
              className="h-1 rounded-full transition-all duration-300 ease-out bg-gradient-to-r from-[#006D9F] via-[#006D9F] to-[#006D9F]"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
