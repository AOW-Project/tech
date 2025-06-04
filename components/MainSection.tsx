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
import MultiStepForm from './MultiStepForm';

export const SERVICES = [
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

const HERO_IMAGE = "/images/services/hero-img-mainSection.jpg" // Updated hero image path

const MainSection: React.FC = () => {
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
    <section className="min-h-screen relative">
      {/* Full Background Image */}
      <Image 
        src={HERO_IMAGE} 
        alt="Business services hero banner" 
        fill 
        className="object-cover" 
        priority 
      />

      {/* White to Transparent Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-white/80 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8 min-h-screen items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold text-black mb-8 ml-12">
              <span className="text-[#1b8bf9]">SERVICES</span> FOR YOUR BUSINESS
            </h1>
            <MultiStepForm />
          </div>
          <div className="w-full md:w-2/3 flex justify-center h-full">
            {/* Remove the Image component here since we're using it as background */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainSection 