"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Phone, Mail, ChevronDown } from "lucide-react"

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
    <div className="flex flex-col items-center w-full text-[#000] font-inter overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="w-full text-center font-[Nunito] relative bg-white"
        style={{
          paddingTop: "7rem",
          paddingBottom: "7rem",
          backgroundImage: 'url("/images/bg image.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 ">
          <p className="font-[Nunito] font-extrabold text-[48px] leading-[140%] text-center uppercase text-black">
            CONTACT US
          </p>
          <h1 className="font-[Nunito] font-extrabold text-[60px] leading-[140%] text-center uppercase text-black my-4">
            YOUR NEEDS, OUR <span className="text-[#006D9F]">RESOLUTIONS</span>
          </h1>
          <p className="font-[Inter] font-medium text-[16px] leading-[140%] text-center text-black max-w-3xl mx-auto">
            We not only offer a variety of services but also provide channeled solutions to cross the hurdles of
            challenges in identifying the gaps, analyze the overall ratios and work on it, and many others.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="pt-14 pb-[60px] px-14 lg:px-[120px] min-h-[670px]">
        <div className="max-w-[1344px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-[24px] items-start">
            {/* Left Column */}
            <div className="w-full lg:w-[663px] flex flex-col gap-[24px]">
              <div className="text-[#084C6B] text-[16px] font-bold uppercase">OUR CONTACTS</div>
              <h2 className="font-nunito font-extrabold text-[44px] leading-[140%] uppercase text-black px-0">
                GET IN TOUCH <span className="text-[#006D9F]">WITH US </span>!
              </h2>
              <p className="text-sm font-medium leading-[140%] text-black text-left">
                Reach out via phone, email, or social media. Send us your project details or inquiries — and we'll
                respond shortly.
              </p>

              {/* Contact Details */}
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-gray-900 text-sm uppercase mb-1">CONTACT US</h4>
                  <div className="w-[663px] h-[24px] flex items-center gap-4">
                    <Phone className="w-4 h-4 text-[#006D9F]" />
                    <span className="text-black text-sm font-bold">+91 8073450249</span>
                    <span className="text-black text-sm font-medium">INDIA</span>
                  </div>

                  <div className="w-[663px] h-[24px] flex items-center gap-4">
                    <Mail className="w-4 h-4 text-[#006D9F]" />
                    <span className="text-gray-900 text-sm font-bold">support@aow.co.in</span>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <h4 className="text-black text-sm mb-6 uppercase tracking-wide">FOLLOW US ON SOCIAL MEDIA</h4>
                <div className="grid grid-cols-2 gap-x-4">
                  <div>
                    {["TWITTER", "WHATSAPP", "YOUTUBE"].map((label) => (
                      <div
                        key={label}
                        className="flex items-center justify-between py-3 border-b font-bold border-[#A7BDCB]"
                      >
                        <span className="text-black text-sm font-bold">{label}</span>
                        <Image src="/images/arrow.svg" alt="Arrow" width={24} height={24} />
                      </div>
                    ))}
                  </div>
                  <div>
                    {["INSTAGRAM", "FACEBOOK", "LINKEDIN"].map((label) => (
                      <div
                        key={label}
                        className="flex items-center justify-between py-3 font-bold border-b border-[#A7BDCB]"
                      >
                        <span className="text-black text-sm font-bold">{label}</span>
                        <Image src="/images/arrow.svg" alt="Arrow" width={24} height={24} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="w-[550px] h-[484px] rounded-[24px] overflow-hidden">
                <Image
                  src="/images/contact/contact 1.jpg"
                  alt="Technology and Security"
                  width={550}
                  height={484}
                  className="object-cover object-center w-full h-full rounded-[24px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section - Contact Form */}
      <section
        className="
      pb-[50px] px-8 lg:px-[60px] min-h-[670px]"
      >
        <div className="max-w-[1350px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Column - Description */}
            <div className="lg:w-1/2">
              <div className="mb-8">
                <h4 className="font-bold text-[#006D9F] text-sm uppercase mb-1"> LET'S TALK </h4>
                <h2 className="font-nunito font-extrabold text-[44px] leading-[140%] uppercase text-black">
                  HAVE A QUESTION
                  <br />
                  OR A PROJECT IN <span className="text-[#006D9F]">MIND</span>?
                </h2>
                <p className="text-sm font-medium leading-[140%] text-black text-left">
                  Post your project request, information about the project details, etc., by filling in the form on our
                  official website so that the respective team will revert to you within a couple of minutes.
                </p>
              </div>
              <div className="flex justify-start">
                <Image
                  src="/images/contact/contact 2.jpg"
                  alt="Digital Communication"
                  width={660}
                  height={370}
                  className="rounded-[24px] object-cover object-center"
                />
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-lg border border-[#006D9F] shadow-sm p-6">
                <h3
                  className="text-[#006D9F] text-[16px] font-extrabold leading-[140%] uppercase mb-6"
                  style={{ fontFamily: "Nunito" }}
                >
                  LET'S DISCUSS YOUR PROJECT!
                </h3>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      name="name"
                      type="text"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-[24px] focus:outline-none focus:ring-1 focus:ring-blue-500"
                      required
                    />
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+91 (111) 123-1234"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-[24px] focus:outline-none focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-[24px] focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-500"
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

                  <input
                    name="companyName"
                    type="text"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-[24px] focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />

                  <div className="relative">
                    <select
                      name="subservice"
                      value={formData.subservice}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-[24px] appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500"
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

                  <label className="text-[16px] text-gray-500 mb-1 block">Subservice?</label>
                  <div className="w-[560px] h-[78px]">
                    <select
                      name="subservice"
                      value={formData.subservice}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-[24px] appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="" disabled>
                        Choose subservice...
                      </option>
                      <option value="service1">Service 1</option>
                      <option value="service2">Service 2</option>
                      <option value="service3">Service 3</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 pointer-events-none text-gray-400" />
                  </div>
                  <div
                    className="text-[#084C6B] text-[16px] underline cursor-pointer flex items-center space-x-1"
                    style={{ width: 612, height: 24, paddingTop: "1px" }}
                  >
                    <span>Drop a file</span>
                    <Image src="/images/load.png" alt="info" width={12} height={12} />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-[24px] text-sm font-medium transition-colors w-[200px] h-[48px]"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
