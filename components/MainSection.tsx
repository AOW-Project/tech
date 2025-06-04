/**
 * MainSection component for the About Services hero area.
 * Includes heading, text carousel, responsive form with dynamic subservices, and hero image.
 * Accessible and styled to match the project.
 * Subservices dropdown updates based on selected service.
 */
"use client"
import React, { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const SLIDES = [
  "Custom digital solutions for every business need.",
  "Seamless integration, innovative design, and reliable support.",
  "Empowering your brand with technology and creativity.",
  "From web to mobile, marketing to support—one partner for all.",
  "Grow your business with our expert team and proven strategies."
]

const SERVICES = [
  {
    label: "App Development",
    value: "app-development",
    sub: [
      "Custom App Development",
      "E-commerce Apps",
      "UI/UX Design",
      "Maintenance & Updates",
      "Progressive Web Apps (PWAs)",
      "API Integration"
    ]
  },
  {
    label: "Digital Marketing Services",
    value: "digital-marketing",
    sub: [
      "Pay-Per-Click (PPC) Advertising",
      "Email Marketing",
      "Content Marketing",
      "Conversion Rate Optimization (CRO)",
      "Affiliate Marketing",
      "Marketing Automation"
    ]
  },
  {
    label: "Web Development Services",
    value: "web-development",
    sub: [
      "Custom Website Development",
      "E-commerce Development",
      "Web Application Development",
      "CMS Development",
      "Third-party Integrations",
      "Website Maintenance"
    ]
  },
  {
    label: "Social Media Marketing",
    value: "social-media-marketing",
    sub: [
      "Social Media Strategy",
      "Content Creation",
      "Social Media Advertising",
      "Community Management",
      "Social Media Analytics",
      "Influencer Marketing",
      "Reputation Management"
    ]
  },
  {
    label: "Web Designing Services",
    value: "web-designing",
    sub: [
      "UI/UX Design",
      "Responsive Design",
      "Prototyping and Wireframing",
      "Branding",
      "Landing Page Design",
      "Interactive Web Design"
    ]
  },
  {
    label: "SEO Services",
    value: "seo-services",
    sub: [
      "On-Page SEO",
      "Off-Page SEO",
      "Technical SEO",
      "Local SEO",
      "E-commerce SEO",
      "SEO Audits"
    ]
  },
  {
    label: "Customer Support Services",
    value: "customer-support",
    sub: [
      "Live Chat Support",
      "Email Support",
      "Call Center Services",
      "Technical Support",
      "24/7 Customer Service",
      "Multilingual Support"
    ]
  },
  {
    label: "Social Media Poster Design",
    value: "poster-design",
    sub: [
      "Custom Templates",
      "Event Posters",
      "Holiday Campaigns",
      "Infographics",
      "Video Posts",
      "Rebranding Assets"
    ]
  },
  {
    label: "Logo Designing Services",
    value: "logo-designing",
    sub: [
      "Logo Designing",
      "Stationery Designing"
    ]
  }
]

const HERO_IMAGE = "/images/bg image.png" // fallback if hero-banner.jpg not found

const MainSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [serviceIdx, setServiceIdx] = useState(0)
  const [subIdx, setSubIdx] = useState(0)
  const router = useRouter()

  // Dynamic subservices logic
  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setServiceIdx(Number(e.target.value))
    setSubIdx(0)
  }

  const handleSubChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSubIdx(Number(e.target.value))
  }

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault()
    const service = SERVICES[serviceIdx].value
    const sub = SERVICES[serviceIdx].sub[subIdx]
    router.push(`/get-quote?service=${encodeURIComponent(service)}&sub=${encodeURIComponent(sub)}`)
  }

  return (
    <section className="bg-white py-10 md:py-16 border-b">
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-2">
          <span className="text-[#1b8bf9]">SERVICES</span> FOR YOUR BUSINESS
        </h1>
        {/* Carousel */}
        <div className="flex items-center gap-4 mb-8">
          <button
            aria-label="Previous slide"
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1))}
            className="rounded-full bg-gray-200 hover:bg-blue-100 p-2 text-[#1b8bf9] transition-colors"
            type="button"
          >
            &#8592;
          </button>
          <div className="flex-1 text-lg md:text-2xl font-medium text-gray-700 text-center min-h-[2.5rem]">
            {SLIDES[currentSlide]}
          </div>
          <button
            aria-label="Next slide"
            onClick={() => setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1))}
            className="rounded-full bg-gray-200 hover:bg-blue-100 p-2 text-[#1b8bf9] transition-colors"
            type="button"
          >
            &#8594;
          </button>
        </div>
        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left: Form */}
          <form
            className="w-full md:w-1/2 bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-6 md:mb-0"
            onSubmit={handleNext}
            aria-label="Service selection form"
          >
            <div className="mb-4">
              <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1">
                Services
              </label>
              <select
                id="service"
                name="service"
                className="w-full border border-gray-300 rounded-md p-2 text-gray-900 focus:ring-2 focus:ring-[#1b8bf9]"
                value={serviceIdx}
                onChange={handleServiceChange}
                required
              >
                {SERVICES.map((s, idx) => (
                  <option value={idx} key={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="subservice" className="block text-sm font-semibold text-gray-700 mb-1">
                Subservices
              </label>
              <select
                id="subservice"
                name="subservice"
                className="w-full border border-gray-300 rounded-md p-2 text-gray-900 focus:ring-2 focus:ring-[#1b8bf9]"
                value={subIdx}
                onChange={handleSubChange}
                required
              >
                {SERVICES[serviceIdx].sub.map((sub, idx) => (
                  <option value={idx} key={sub}>
                    {sub}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#1b8bf9] text-white rounded-md font-semibold text-base hover:bg-[#00647D] transition-colors"
            >
              Next
            </button>
          </form>
          {/* Right: Hero Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={HERO_IMAGE}
              alt="Business services hero banner"
              width={600}
              height={400}
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainSection 