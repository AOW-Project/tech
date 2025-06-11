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

const HERO_IMAGE = "/images/about-services/Hero-section-imgg.png" // Updated hero image path

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
    <section className="relative w-full h-[720px] md:h-auto overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src={HERO_IMAGE} 
          alt="Business services hero banner" 
          fill 
          className="object-cover" 
          priority 
          sizes="100vw"
          style={{ objectPosition: 'top center' }}
          // style={{ objectPosition: 'center right' }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 container mx-auto h-full flex flex-col lg:flex-row items-start px-4 md:px-10 lg:px-16 pt-6 pb-4 lg:gap-[40px] lg:ml-[4.8%]">
        {/* Left Side: Heading + Form */}
        <div className="w-full lg:w-[45%] flex flex-col gap-3">
          <h1 className="text-[40px] font-extrabold leading-snug mt-12 font-nunito">
            <span className="block">
              <span className="text-[#006D9F]">SERVICES</span>
              <span className="text-black"> FOR YOUR</span>
            </span>
            <span className="block text-black">BUSINESS</span>
          </h1>
          
          {/* Form Container */}
          <div className="border border-[#006D9F] rounded-xl p-4 flex flex-col gap-4 mt-1 mb-20 w-full min-h-[293px]">
            <MultiStepForm />
          </div>
        </div>

        {/* Right Side: Reserved space */}
        <div className="hidden lg:block w-full lg:w-[55%] h-full"></div>
      </div>
    </section>
  )
}

export default MainSection 