"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Phone, Mail, ChevronDown, Upload } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    companyName: "",
    subservice: "",
    description: "",
    file: null as File | null,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, file: e.target.files![0] }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">CONTACT US</h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            YOUR NEEDS, OUR <span className="text-blue-600">RESOLUTIONS</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-base leading-relaxed">
            We not only offer a variety of services but also provide/technorated solutions to cross the hurdles of
            challenges in identifying the gaps, analyze/the overall refocused work on it, and many others
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Left Column - Contact Info */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <span className="text-blue-600 text-xs font-bold uppercase tracking-wider">OUR CONTACTS</span>
                  <h3 className="text-3xl font-bold text-gray-900 mt-3 mb-4">
                    GET IN TOUCH <span className="text-blue-600">WITH US!</span>
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    "Reach out via phone, email, or social media. Send us your project details or inquiries
                    <br />— and we'll respond shortly."
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-4 uppercase">CONTACT US</h4>
                    <div className="flex items-center space-x-3 mb-3">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-900 text-sm font-bold">+91 8073450249</span>
                      <span className="text-gray-600 text-sm font-medium">INDIA</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-900 text-sm font-bold">support@aow.co.in</span>
                    </div>
                  </div>
                </div>

                {/* Social Media with arrow links and separator lines - Exact match to screenshot */}
                <div className="pt-6">
                  <h4 className="font-bold text-gray-900 text-sm mb-6 uppercase">FOLLOW US ON SOCIAL MEDIA</h4>
                  <div className="grid grid-cols-2 gap-x-4">
                    <div>
                      <div className="flex items-center justify-between py-3 border-b border-gray-200">
                        <span className="text-gray-900 text-sm font-medium">TWITTER</span>
                        <Image src="/images/arrow.svg" alt="Arrow" width={24} height={24} />
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-gray-200">
                        <span className="text-gray-900 text-sm font-medium">WHATSAPP</span>
                        <Image src="/images/arrow.svg" alt="Arrow" width={24} height={24} />
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-gray-200">
                        <span className="text-gray-900 text-sm font-medium">YOUTUBE</span>
                        <Image src="/images/arrow.svg" alt="Arrow" width={24} height={24} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between py-3 border-b border-gray-200">
                        <span className="text-gray-900 text-sm font-medium">INSTAGRAM</span>
                        <Image src="/images/arrow.svg" alt="Arrow" width={24} height={24} />
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-gray-200">
                        <span className="text-gray-900 text-sm font-medium">FACEBOOK</span>
                        <Image src="/images/arrow.svg" alt="Arrow" width={24} height={24} />
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-gray-200">
                        <span className="text-gray-900 text-sm font-medium">LINKEDIN</span>
                        <Image src="/images/arrow.svg" alt="Arrow" width={24} height={24} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Tech Image */}
              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <div className="bg-gray-900 rounded-lg overflow-hidden">
                  <Image
                    src="/images/contact/contact 1.jpg"
                    alt="Technology and Security"
                    width={480}
                    height={480}
                    className="rounded-lg"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Left Column - Question Section */}
              <div className="lg:w-1/2">
                <div className="mb-8">
                  <span className="text-blue-600 text-xs font-bold uppercase tracking-wider">LET'S TALK</span>
                  <h3 className="text-3xl font-bold text-gray-900 mt-3 mb-4">
                    HAVE A QUESTION
                    <br />
                    OR A PROJECT IN <span className="text-blue-600">MIND?</span>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Post your project request, information about the project details, etc., by filling in the form on
                    our official website so that the respective team will revert to you within a couple of minutes.
                  </p>
                </div>

                {/* Bottom Tech Image */}
                <div className="flex justify-start">
                  <Image
                    src="/images/contact/contact 2.jpg"
                    alt="Digital Communication"
                    width={400}
                    height={300}
                    className="rounded-lg"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="lg:w-1/2">
                <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
                  <h3 className="text-blue-600 text-base font-medium mb-6">LET'S DISCUSS YOUR PROJECT!</h3>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <input
                          name="name"
                          type="text"
                          placeholder="Name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <input
                          name="phone"
                          type="tel"
                          placeholder="+91 (111) 123-1234"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-500"
                        required
                      >
                        <option value="" disabled>
                          Select service...
                        </option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-app">Mobile App Development</option>
                        <option value="consulting">IT Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <input
                        name="companyName"
                        type="text"
                        placeholder="Company Name"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <div className="relative">
                      <select
                        name="subservice"
                        value={formData.subservice}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="" disabled>
                          Choose service...
                        </option>
                        <option value="service1">Service 1</option>
                        <option value="service2">Service 2</option>
                        <option value="service3">Service 3</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 pointer-events-none text-gray-400" />
                    </div>

                    <div>
                      <label className="text-xs text-gray-500 mb-1 block">Subservice?</label>
                      <textarea
                        name="description"
                        placeholder="Describe in Details"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md min-h-[80px] focus:outline-none focus:ring-1 focus:ring-blue-500"
                      ></textarea>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">Drop a file</span>
                      <label className="cursor-pointer">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                          <Upload className="h-3 w-3 text-white" />
                        </div>
                        <input type="file" className="hidden" onChange={handleFileChange} />
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
