"use client"

import React, { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Upload } from "lucide-react"
import Image from "next/image"

export default function VacancyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null as File | null,
  })
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target
    if (name === "resume" && files) {
      setFormData((prev) => ({ ...prev, resume: files[0] }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleFileButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Submission logic here
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#F5F7FA] py-6 px-20  mx-auto">
      <div className="w-full max-w-full ">
        {/* Header Section */}
        <div className="mb-4">
          <h1 className="text-5xl mt-3 font-extrabold font-nunito text-gray-900 mb-1 text-left leading-tight">UI/UX DESIGNER</h1>
          <div className="flex flex-wrap gap-2 mb-5 mt-3 ">
            <span className="bg-[#C5DEE9] text-[#0B6E99] text-xs font-semibold px-4 py-2 rounded-full">Remote, India</span>
            <span className="bg-[#C5DEE9] text-[#0B6E99] text-xs font-semibold px-4 py-2 rounded-full">Full time</span>
            <span className="bg-[#C5DEE9] text-[#0B6E99] text-xs font-semibold px-4 py-2 rounded-full">Design</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 font-inter gap-6 items-start mb-20">
          {/* Left: Job Description */}
          <div className="lg:col-span-3 w-full text-gray-800 text-[16px] space-y-1">
            <div>
              <p className="mb-3 text-[#000000]  font-medium font-inter">
                Are you passionate about creating user-centered, visually compelling designs? Do you want to work with international clients and startups while making a real impact? Join our team as a UI/UX Designer and become an integral part of our projects!
              </p>
              <p className="mb-7 text-[#000000]  font-medium font-inter">
                We are looking for someone who thrives in a collaborative environment and is eager to continue doing meaningful work that enhances user experiences. If you are ready to bring your design skills to the next level and work with a dynamic, open-minded team, this opportunity is for you.
              </p>
            </div>
            <div>
              <h3 className="text-xl  text-[#000000] font-inter font-bold mb-3 uppercase">Requirements:</h3>
              <ul className="list-disc list-inside  text-[#000000]  font-medium">
                <li>1.5+ years of experience in UI/UX design, particularly in an outsourcing company</li>
                <li>Excellent proficiency in Figma, Photoshop, Illustrator</li>
                <li>English at B2 level</li>
                <li>Experience in creating design systems from scratch</li>
                <li>Experience working with CRM systems, SaaS, web and mobile applications</li>
                <li>Portfolio with work examples: Behance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl  text-[#000000] font-inter font-bold mb-3 uppercase mt-3 ">Responsibilities:</h3>
              <ul className="list-disc list-inside  text-[#000000]  font-medium">
                <li>Creating high-quality designs for various services</li>
                <li>Communicating directly with clients</li>
                <li>Developing user flows, wireframes, prototypes, clickable prototypes and mobile adaptive designs</li>
                <li>Evaluating projects according to the technical task</li>
                <li>Collaborating with the design team</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl  text-[#000000] font-inter font-bold mb-3 uppercase mt-4 ">Will be a plus:</h3>
              <ul className="list-disc list-inside  text-[#000000] font-medium">
                <li>Completed additional courses in animations, web applications, and product design</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl  text-[#000000] font-inter font-bold mb-3 uppercase mt-6 ">What we offer:</h3>
              <ul className="list-disc list-inside  text-[#000000]  font-medium">
                <li>Fixed salary + bonuses</li>
                <li>Flexible working hours: start between 9:00–11:00 and finish between 18:00–20:00</li>
                <li>Subscriptions to all services for convenient work: Figma, Illustrator, Photoshop</li>
                <li>Access to generative services: GPT, MidJourney</li>
                <li>Providing equipment for work</li>
                <li>Accounting support and full tax compensation</li>
                <li>Compensation from 50% to 100% for training and English language courses</li>
                <li>12 sick days and 12 days off per year at the company's expense</li>
                <li>Super open-minded team</li>
                <li>Online team activities</li>
                <li>Continuous learning: conferences, meetups, and courses for professional development</li>
                <li>Team buildings several times a year</li>
              </ul>
            </div>
          </div>
          {/* Right: Application Form */}
          <div className="lg:col-span-2 w-full -ml-5">
            <form
              className="flex flex-col gap-2 w-full bg-[#F5F7FA] border border-[#006D9F] p-3 rounded-xl sticky top-4"
              onSubmit={handleSubmit}
            >
              <h3 className="text-[#006D9F]  text-[12px] font-nunito font-weight:500 uppercase">
                We are excited to learn more about you and your experience
              </h3>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-0.5">Name*</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Name"
                  className="w-full bg-transparent border border-[#A7BDCB] rounded-full px-4 focus:border-[#1b8bf9] focus:ring-2 focus:ring-[#1b8bf9] text-gray-900 placeholder-gray-400 h-8"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-0.5">Email*</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@gmail.com"
                  className="w-full bg-transparent border border-[#A7BDCB] rounded-full px-4 focus:border-[#1b8bf9] focus:ring-2 focus:ring-[#1b8bf9] text-gray-900 placeholder-gray-400 h-8"
                />
              </div>
              <div>
                <label className="block text-xs font-inter font-medium text-[#084C6B] mb-0.5 flex items-center gap-2">Attach your CV
                <Image
                    src="/images/footer/load file.png"
                    alt="Upload file icon"
                    width={19}
                    height={19}
                    className="w-4 h-4"
                  />
                </label>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleFileButtonClick}
                    className="flex items-center justify-center w-8 h-8 text-[#0B6E99] focus:outline-none"
                    aria-label="Attach CV"
                  >
                    <Upload size={16} />
                  </button>
                  
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  className="hidden"
                />
              </div>
              <Button
                type="submit"
                size="sm"
                className="w-24 self-end rounded-full bg-[#084C6B] hover:bg-[#095b7f] text-white text-sm font-semibold py-1.5 px-15 mt-1"
              >
                Next
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}