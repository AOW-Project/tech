"use client"
import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] })

export default function CareerPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      icon: "/images/career/1.png",
      description: "Work on your terms. Enjoy a schedule that allows for a healthy work-life balance.",
      list: ["Flexible 40-hour working week", "Open-minded team", "Accountant support and tax coverage"],
      bgColor: "bg-[#EBF5FA]",
    },
    {
      title: "CAREER GROWTH",
      icon: "/images/career/2.png",
      description:
        "We believe in your potential and provide opportunities for continuous learning and career advancement.",
      list: [
        "Personal development plans",
        "Access to training and certifications",
        "Regular career reviews and mentorship",
      ],
      bgColor: "bg-white",
    },
    {
      title: "COMPETITIVE SALARY",
      icon: "/images/career/3.png",
      description: "We offer attractive compensation to reward your skills and hard work.",
      list: ["Performance-based bonuses", "Annual salary reviews", "Competitive base salary with growth potential"],
      bgColor: "bg-[#EBF5FA]",
    },
    {
      title: "HEALTH & WELL-BEING",
      icon: "/images/career/4.png",
      description: "Your health matters. We offer comprehensive health insurance and wellness programs.",
      list: [
        "Full health insurance coverage",
        "Gym membership and wellness programs",
        "Mental health support and counseling",
      ],
      bgColor: "bg-white",
    },
    {
      title: "TEAM SPIRIT",
      icon: "/images/career/5.png",
      description: "Be part of a collaborative and supportive team that values teamwork and creativity.",
      list: ["Open-minded team", "Regular team-building activities", "Collaborative work culture"],
      bgColor: "bg-[#EBF5FA]",
    },
    {
      title: "REMOTE WORK",
      icon: "/images/career/6.png",
      description: "Work from anywhere. Enjoy the flexibility to work remotely and manage your time efficiently.",
      list: ["Work from home options", "Full remote collaboration tools", "Global team and flexible timezone options"],
      bgColor: "bg-white",
    },
  ]

  return (
    <div className={inter.className}>
      {/* Header Section */}
      <section
        className="text-center py-20 bg-cover bg-center font-inter"
        style={{ backgroundImage: 'url("/images/bg image.png")' }}
      >
        <h2 className="text-2xl md:text-3xl text-black font-medium tracking-wide">CAREER</h2>
        <h1 className="text-5xl md:text-5xl font-bold text-black mt-3">
          JOIN OUR <span className="text-[#0B6E99]">TEAM</span>
        </h1>
        <p className="text-xl md:text-2xl text-black mt-5 max-w-2xl mx-auto">
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
                    <span key={i} className="bg-[#EAF6FB] text-[#0B6E99] text-xs font-medium px-3 py-1 rounded-full align-center">
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

      {/* Benefits Section */}
      <section className="py-16 bg-cover bg-center font-inter" style={{ backgroundImage: 'url("/images/bg image.png")' }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-12">
            <p className="text-sm font-semibold text-[#006D9F] uppercase tracking-wide">WHAT WE OFFER YOU</p>
            <h3 className="text-4xl font-bold mt-2 text-black">
              JOB <span className="text-[#0B6E99]">BENEFITS</span> YOU WILL APPRECIATE
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className={`${benefit.bgColor} rounded-lg p-6 border-2 border-[#0B6E99]`}>
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 mr-3 flex-shrink-0">
                    <Image
                      src={benefit.icon || "/placeholder.svg"}
                      alt={benefit.title}
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="font-bold text-base text-black leading-tight">{benefit.title}</h4>
                </div>
                <p className="text-black text-sm mb-4 leading-relaxed">{benefit.description}</p>
                <ul className="space-y-1">
                  {benefit.list.map((item, i) => (
                    <li key={i} className="text-sm text-black flex items-start leading-relaxed">
                      <span className="text-black mr-2 flex-shrink-0">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white font-inter">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div className="space-y-6">
              <div className="mb-6">
                <p className="text-sm font-semibold text-[#006D9F] uppercase">OUR CONTACTS</p>
                <h3 className="text-4xl font-bold mt-2">
                  GET IN TOUCH <span className="text-[#006D9F]">WITH US!</span>
                </h3>
              </div>

              <p className="text-black">
                If an individual is passionate about Technology and Innovation, AOW INFORMATION TECHNOLOGY's mission is
                to diligently serve clients and look for like-minded people who align with our criteria.
              </p>

              <div className="pt-4">
                <p className="font-medium mb-2">DON'T WANT TO WAIT? CALL US NOW!</p>
                <div className="flex items-center">
                  <Image src="/images/career/Phone Icon.png" alt="Phone" width={16} height={16} className="mr-2" />
                  <span className="text-black">+91 8073450249     INDIA</span>
                </div>
              </div>

              <div className="pt-4">
                <p className="font-medium mb-2">THE INTERESTED CANDIDATES CAN DROP THEIR RESUME TO</p>
                <div className="flex items-center">
                  <Image src="/images/career/message.png" alt="Email" width={16} height={16} className="mr-2" />
                  <span className="text-[#006D9F] font-medium">support@aow.co.in</span>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-6">
                <p className="font-bold text-gray-900 mb-4">FOLLOW US ON SOCIAL MEDIA</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-900 font-medium">TWITTER</span>
                    <Image src="/images/arrow.svg" alt="Twitter" width={16} height={16} />
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-900 font-medium">INSTAGRAM</span>
                    <Image src="/images/arrow.svg" alt="Instagram" width={16} height={16} />
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-900 font-medium">WHATSAPP</span>
                    <Image src="/images/arrow.svg" alt="WhatsApp" width={16} height={16} />
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-900 font-medium">FACEBOOK</span>
                    <Image src="/images/arrow.svg" alt="Facebook" width={16} height={16} />
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-900 font-medium">YOUTUBE</span>
                    <Image src="/images/arrow.svg" alt="YouTube" width={16} height={16} />
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-900 font-medium">LINKEDIN</span>
                    <Image src="/images/arrow.svg" alt="LinkedIn" width={16} height={16} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 font-inter">
              <h3 className="text-[#006D9F] font-medium mb-6 text-center">
                WE ARE EXCITED TO LEARN MORE ABOUT YOU AND YOUR EXPERIENCE
              </h3>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="text-sm text-black mb-1 block">Name*</label>
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
                  <label className="text-sm text-black mb-1 block">Email*</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="ex.ample@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-black mr-2">Attach your CV</span>
                    <div className="w-5 h-5 flex items-center justify-center text-black">
                      <span className="text-black text-xs">
                        <img src="/images/footer/load file.png" alt="Upload" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#006D9F] hover:bg-[#095b7f] text-white py-2 px-4 rounded-xl text-sm font-medium transition-colors"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}