"use client"

import React, { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Upload } from "lucide-react"

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
    <div className="flex flex-col items-center min-h-screen bg-[#F5F7FA] py-6 font-sans">
      <div className="w-full max-w-6xl ">
        {/* Header Section */}
        <div className="mb-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-1 text-left leading-tight">UI/UX DESIGNER</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[#E6F0FA] text-[#0B6E99] text-xs font-semibold px-3 py-1 rounded-full">Remote, India</span>
            <span className="bg-[#E6F0FA] text-[#0B6E99] text-xs font-semibold px-3 py-1 rounded-full">Full time</span>
            <span className="bg-[#E6F0FA] text-[#0B6E99] text-xs font-semibold px-3 py-1 rounded-full">Design</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          {/* Left: Job Description */}
          <div className="lg:col-span-3 w-full text-gray-800 text-[15px] space-y-4">
            <div>
              <p className="mb-3 text-gray-700">
                Are you passionate about creating user-centered, visually compelling designs? Do you want to work with international clients and startups while making a real impact? Join our team as a UI/UX Designer and become an integral part of our projects!
              </p>
              <p className="mb-3 text-gray-700">
                We are looking for someone who thrives in a collaborative environment and is eager to continue doing meaningful work that enhances user experiences. If you are ready to bring your design skills to the next level and work with a dynamic, open-minded team, this opportunity is for you.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1 uppercase">Requirements:</h3>
              <ul className="list-disc list-inside space-y-0.5 text-gray-700">
                <li>1.5+ years of experience in UI/UX design, particularly in an outsourcing company</li>
                <li>Excellent proficiency in Figma, Photoshop, Illustrator</li>
                <li>English at B2 level</li>
                <li>Experience in creating design systems from scratch</li>
                <li>Experience working with CRM systems, SaaS, web and mobile applications</li>
                <li>Portfolio with work examples: Behance</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1 uppercase">Responsibilities:</h3>
              <ul className="list-disc list-inside space-y-0.5 text-gray-700">
                <li>Creating high-quality designs for various services</li>
                <li>Communicating directly with clients</li>
                <li>Developing user flows, wireframes, prototypes, clickable prototypes and mobile adaptive designs</li>
                <li>Evaluating projects according to the technical task</li>
                <li>Collaborating with the design team</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1 uppercase">Will be a plus:</h3>
              <ul className="list-disc list-inside space-y-0.5 text-gray-700">
                <li>Completed additional courses in animations, web applications, and product design</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1 uppercase">What we offer:</h3>
              <ul className="list-disc list-inside space-y-0.5 text-gray-700">
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
          <div className="lg:col-span-2 w-full">
            <form
              className="flex flex-col gap-3 w-full bg-[#F5F7FA] border border-[#74aee9] p-4 rounded-lg sticky top-4"
              onSubmit={handleSubmit}
            >
              <h3 className="text-[#0B6E99] text-sm font-semibold mb-1 uppercase">
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
                  className="w-full bg-transparent border-0 border-b border-[#A7BDCB] focus:border-b-2 focus:border-blue-500 focus:ring-0 text-gray-900 placeholder-gray-400"
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
                  className="w-full bg-transparent border-0 border-b border-[#A7BDCB] focus:border-b-2 focus:border-blue-500 focus:ring-0 text-gray-900 placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-0.5">Attach your CV</label>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleFileButtonClick}
                    className="flex items-center justify-center w-8 h-8 text-[#0B6E99] focus:outline-none"
                    aria-label="Attach CV"
                  >
                    <Upload size={16} />
                  </button>
                  <span className="text-xs text-gray-600">
                    {formData.resume ? formData.resume.name : "No file chosen"}
                  </span>
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
                className="w-24 self-end rounded-md bg-[#0B6E99] hover:bg-[#095b7f] text-white text-sm font-semibold py-1.5 px-3 mt-1"
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