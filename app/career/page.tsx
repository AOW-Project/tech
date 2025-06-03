"use client"
import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function CareerPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your form submission logic here
  }

  const jobs = [
    {
      title: "UI/UX Designer",
      tags: ["Remote, India", "Full time", "Design"],
      category: "Design",
    },
    {
      title: "Sales Manager",
      tags: ["Remote, India", "Full time", "Sales"],
      category: "Sales",
    },
    {
      title: "PR Manager",
      tags: ["Remote, India", "Full time", "Marketing"],
      category: "Marketing",
    },
    {
      title: "Web Developer",
      tags: ["Remote, India", "Full time", "Development"],
      category: "Development",
    },
  ]

  const categories = ["All", "Sales", "Design", "Development", "Marketing"]

  const filteredJobs = selectedCategory === "All" ? jobs : jobs.filter((job) => job.category === selectedCategory)

  const benefits = [
    {
      title: "FLEXIBLE HOURS",
      icon: "⏱️",
      description: "Work on your terms. Enjoy a schedule that allows for a healthy work-life balance.",
      list: ["Flexible start and end times", "Team-oriented team", "Subsidized support and tax coverage"],
    },
    {
      title: "CAREER GROWTH",
      icon: "📈",
      description:
        "We believe in your potential and provide opportunities for continuous learning and career advancement.",
      list: [
        "Personal development plans",
        "Mentorship and coaching opportunities",
        "Regular career reviews and discussions",
      ],
    },
    {
      title: "COMPETITIVE SALARY",
      icon: "💰",
      description: "We offer attractive compensation to reward your skills and hard work.",
      list: ["Above-market pay rates", "Annual salary reviews", "Competitive base salary with growth potential"],
    },
    {
      title: "HEALTH & WELL BEING",
      icon: "🏥",
      description: "Your health matters. We offer comprehensive health insurance and wellness programs.",
      list: ["Full health insurance", "Gym membership and wellness programs", "Mental health support and counseling"],
    },
    {
      title: "TEAM SPIRIT",
      icon: "👥",
      description: "Be part of a collaborative and supportive team that values teamwork and creativity.",
      list: ["Regular team building events", "Digital team-building activities", "Collaborative work culture"],
    },
    {
      title: "REMOTE WORK",
      icon: "🏠",
      description: "Work from anywhere. Enjoy the flexibility to work remotely and manage your time efficiently.",
      list: ["Full remote capabilities", "All needed collaboration tools", "Quiet hours and flexible response options"],
    },
  ]

  return (
    <div className="font-sans">
      {/* Header Section */}
      <section
        className="text-center py-20 bg-cover bg-center"
        style={{ backgroundImage: 'url("/career-header-bg.png")' }}
      >
        <h2 className="text-2xl md:text-3xl text-gray-600 font-medium tracking-wide">CAREER</h2>
        <h1 className="text-6xl md:text-7xl font-bold text-black mt-3">
          JOIN OUR <span className="text-[#0B6E99]">TEAM</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 mt-5 max-w-2xl mx-auto">
          Pave your career path with opportunities and innovation
        </p>
        <a href="#open-roles">
          <button className="mt-6 px-8 py-3 bg-[#0B6E99] hover:bg-[#095b7f] text-white rounded-full text-lg transition duration-300">
            See Open Roles
          </button>
        </a>
      </section>

      {/* Job Positions Section */}
      <section id="open-roles" className="py-20 bg-white">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-[#0B6E99]">OUR SERVICES</p>
          <h3 className="text-4xl md:text-5xl font-bold mt-2">
            EMPOWERING YOUR <span className="text-[#0B6E99]">DIGITAL</span> WORLD
          </h3>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
                selectedCategory === category ? "bg-[#0B6E99] text-white" : "bg-white text-[#0B6E99] border-[#0B6E99]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {filteredJobs.map((job, index) => (
            <div key={index} className="bg-white border rounded-2xl shadow-md p-6 flex justify-between items-center">
              <div>
                <h4 className="text-lg font-semibold mb-3 uppercase">{job.title}</h4>
                <div className="flex gap-2 flex-wrap">
                  {job.tags.map((tag, i) => (
                    <span key={i} className="bg-[#EAF6FB] text-[#0B6E99] text-xs font-medium px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                </div>
              <Link 
                href={`/vacancy?position=${encodeURIComponent(job.title)}`}
                className="bg-[#0B6E99] hover:bg-[#095b7f] text-white px-6 py-2 rounded-full flex items-center gap-1 transition"
              >
                Apply <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section - Styled to match the screenshot */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#0B6E99] uppercase">WHAT WE OFFER YOU</p>
            <h3 className="text-4xl font-bold mt-2">
              JOB <span className="text-[#0B6E99]">BENEFITS</span> YOU WILL APPRECIATE
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-[#0B6E99] rounded-md flex items-center justify-center text-white mr-3">
                    {benefit.icon}
                  </div>
                  <h4 className="font-bold text-lg">{benefit.title}</h4>
                </div>
                <p className="text-gray-600 text-sm mb-4">{benefit.description}</p>
                <ul className="space-y-1">
                  {benefit.list.map((item, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-start">
                      <span className="text-[#0B6E99] mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Styled to match the screenshot */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-12">
            <p className="text-sm font-semibold text-[#0B6E99] uppercase text-center">OUR CONTACTS</p>
            <h3 className="text-4xl font-bold mt-2 text-center">
              GET IN TOUCH <span className="text-[#0B6E99]">WITH US!</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div className="space-y-6">
              <p className="text-gray-700">
                If you have a question about Technology and Innovation, JUST INFORMATION TECHNOLOGY, it helps to
                elegantly solve clients and look for like-minded people who align with our values.
              </p>

              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-[#0B6E99] rounded-full flex items-center justify-center text-white mr-3">
                    <span className="text-xs">📞</span>
                  </div>
                  <span className="text-gray-700">+91 9873456789 INDIA</span>
                </div>

                <div className="flex items-center">
                  <div className="w-6 h-6 bg-[#0B6E99] rounded-full flex items-center justify-center text-white mr-3">
                    <span className="text-xs">✉️</span>
                  </div>
                  <span className="text-gray-700">careers@qwew.co.in</span>
                </div>
              </div>

              <div className="pt-6">
                <p className="font-medium mb-4">THE INTERESTED CANDIDATES CAN DROP THEIR RESUME TO:</p>
                <p className="text-[#0B6E99] font-medium">careers@qwew.co.in</p>
              </div>

              {/* Social Media Links - Styled to match the screenshot */}
              <div className="pt-6">
                <h4 className="font-bold text-gray-900 text-sm mb-6 uppercase">FOLLOW US ON SOCIAL MEDIA</h4>
                <div className="grid grid-cols-2 gap-x-4">
                  <div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-900 text-sm font-medium">TWITTER</span>
                      <Image src="/images/arrow.png" alt="Arrow" width={24} height={24} />
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-900 text-sm font-medium">WHATSAPP</span>
                      <Image src="/images/arrow.png" alt="Arrow" width={24} height={24} />
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-900 text-sm font-medium">YOUTUBE</span>
                      <Image src="/images/arrow.png" alt="Arrow" width={24} height={24} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-900 text-sm font-medium">INSTAGRAM</span>
                      <Image src="/images/arrow.png" alt="Arrow" width={24} height={24} />
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-900 text-sm font-medium">FACEBOOK</span>
                      <Image src="/images/arrow.png" alt="Arrow" width={24} height={24} />
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-900 text-sm font-medium">LINKEDIN</span>
                      <Image src="/images/arrow.png" alt="Arrow" width={24} height={24} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
              <h3 className="text-gray-800 text-base font-medium mb-6">
                WE ARE EXCITED TO LEARN MORE ABOUT YOU AND YOUR EXPERIENCE
              </h3>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="text-sm text-gray-600 mb-1 block">Name*</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600 mb-1 block">Email*</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600 mb-1 block">Attach your CV</label>
                  <div className="flex items-center space-x-2 border border-gray-200 rounded-md p-2">
                    <span className="text-sm text-gray-600">Drop a file</span>
                    <label className="cursor-pointer">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">+</span>
                      </div>
                      <input type="file" className="hidden" />
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0B6E99] hover:bg-[#095b7f] text-white py-2 px-4 rounded-md text-sm font-medium transition-colors"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
