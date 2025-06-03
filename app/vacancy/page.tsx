"use client"

import React, { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"

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
    <div className="flex flex-col items-center min-h-screen bg-[#F8FAFB] py-12 font-sans">
      <div className="w-full max-w-6xl px-8 md:px-16 py-12 mt-8 mb-8">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left: Heading, Pills, Job Description */}
          <div className="md:w-3/5 w-full text-gray-800 text-[15px] space-y-6 flex flex-col justify-start">
            <h1 className="text-4xl font-bold text-gray-900 mb-2 text-left leading-tight">UI/UX DESIGNER</h1>
            <div className="flex gap-3 mb-6 text-left">
              <span className="bg-[#EAF6FB] text-[#0B6E99] text-xs font-semibold px-4 py-1 rounded-full">Remote, India</span>
              <span className="bg-[#EAF6FB] text-[#0B6E99] text-xs font-semibold px-4 py-1 rounded-full">Full time</span>
              <span className="bg-[#EAF6FB] text-[#0B6E99] text-xs font-semibold px-4 py-1 rounded-full">Design</span>
            </div>
            <div>
              <p className="mb-4 text-gray-700">
                Are you passionate about creating user-centered, visually compelling designs? Do you want to work with international clients and startups while making a real impact? Join our team as a UI/UX Designer and become an integral part of our projects!
              </p>
              <p className="mb-4 text-gray-700">
                We are looking for someone who thrives in a collaborative environment and is eager to continue doing meaningful work that enhances user experiences. If you are ready to bring your design skills to the next level and work with a dynamic, open-minded team, this opportunity is for you.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">REQUIREMENTS:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>1.5+ years of experience in UI/UX design, particularly in an outsourcing company</li>
                <li>Excellent proficiency in Figma, Photoshop, Illustrator</li>
                <li>English at B2 level</li>
                <li>Experience in creating design systems from scratch</li>
                <li>Experience working with CRM systems, SaaS, web and mobile applications</li>
                <li>Portfolio with work examples: Behance</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">RESPONSIBILITIES:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Creating high-quality designs for various services</li>
                <li>Communicating directly with clients</li>
                <li>Developing user flows, wireframes, prototypes, clickable prototypes and mobile adaptive designs</li>
                <li>Evaluating projects according to the technical task</li>
                <li>Collaborating with the design team</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">WILL BE A PLUS:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Completed additional courses in animations, web applications, and product design</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">WHAT WE OFFER:</h3>
              <ul className="list-disc list-inside space-y-1">
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
          <div className="md:w-2/5 w-full flex flex-col justify-start items-start md:items-center mt-0">
            <form
              className="flex flex-col gap-4 w-full max-w-xs md:max-w-sm bg-white border border-[#0B6E99] p-6 mt-0"
              onSubmit={handleSubmit}
              style={{ minHeight: 340, borderRadius: 12, boxShadow: 'none' }}
            >
              <h3 className="text-[#0B6E99] text-sm font-semibold mb-2 mt-0">WE ARE EXCITED TO LEARN MORE ABOUT YOU AND YOUR EXPERIENCE</h3>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Name*</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Name"
                  className="rounded-full"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Email*</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@gmail.com"
                  className="rounded-full"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Attach your CV</label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleFileButtonClick}
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0B6E99] hover:bg-[#095b7f] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Attach CV"
                  >
                    <Plus size={20} />
                  </button>
                  <span className="text-xs text-gray-600">
                    {formData.resume ? formData.resume.name : "No file chosen"}
                  </span>
                  <input
                    ref={fileInputRef}
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    className="hidden"
                  />
                </div>
              </div>
              <Button
                type="submit"
                size="sm"
                className="w-24 self-end rounded-full bg-[#0B6E99] hover:bg-[#095b7f] text-white text-sm font-semibold py-2 px-0 mt-2"
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
