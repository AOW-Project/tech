"use client"
import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Inter } from "next/font/google"
import { Phone, Mail } from "lucide-react"

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
    <div className="flex flex-col items-center w-full text-[#000] font-inter overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="w-full text-center font-[Nunito] relative bg-white"
        style={{
          paddingTop: "6rem",
          paddingBottom: "6rem",
          backgroundImage: 'url("/images/bg image.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 px-4">
          <p
            className="font-[Nunito] font-extrabold text-center uppercase text-black"
            style={{
              fontSize: "48px",
              fontWeight: 800,
              lineHeight: "140%",
              letterSpacing: "0%",
              height: "67px",
              margin: 0,
            }}
          >
            CAREER
          </p>
          <h1
            className="font-[Nunito] font-extrabold text-center uppercase text-black"
            style={{
              fontSize: "60px",
              fontWeight: 800,
              lineHeight: "140%",
              letterSpacing: "0%",
              width: "472px",
              height: "84px",
              marginTop: "8px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            JOIN OUR <span className="text-[#006D9F]">TEAM</span>
          </h1>
          <p
            className="text-center text-black"
            style={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "140%",
              letterSpacing: "0%",
              width: "800px",
              height: "22px",
              marginTop: "8px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Be part of a passionate team building meaningful digital products
          </p>
        </div>
      </section>

      {/* Job Positions Section */}
      <section
        id="open-roles"
        className="bg-white"
        style={{
          width: "100%",
          paddingTop: "140px",
          paddingBottom: "140px",
          paddingLeft: "80px", // ← Increased left padding
          paddingRight: "80px", // ← Increased right padding
          boxSizing: "border-box",
          margin: "0 auto",
        }}
      >
        <div>
          <div className="text-left mb-[40px]">
            <p
              className="uppercase text-[#0B6E99]"
              style={{
                fontFamily: "Nunito",
                fontWeight: 800,
                fontSize: "16px",
                lineHeight: "140%",
                width: "100%",
              }}
            >
              OUR SERVICES
            </p>
            <h3
              className="uppercase text-left"
              style={{
                fontFamily: "Nunito",
                fontWeight: 800,
                fontSize: "48px",
                lineHeight: "140%",
                marginTop: "8px",
              }}
            >
              EMPOWERING YOUR <span className="text-[#0B6E99]">DIGITAL</span> WORLD
            </h3>
          </div>

          {/* Category Filters */}
          <div className="flex justify-center gap-3 mb-[40px] flex-wrap">
            {["All", "Sales", "Design", "Development", "Marketing"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1 rounded-full border text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#0B6E99] text-white border-[#0B6E99]"
                    : "bg-white text-[#0B6E99] border-[#0B6E99]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="flex flex-col gap-[24px]">
            {[
              { title: "UI/UX DESIGNER", tags: ["Remote, India", "Full time", "Design"] },
              { title: "SALES MANAGER", tags: ["Remote, India", "Full time", "Sales"] },
              { title: "PR MANAGER", tags: ["Remote, India", "Full time", "Marketing"] },
              { title: "WEB DEVELOPER", tags: ["Remote, India", "Full time", "Development"] },
            ].map((job, index) => (
              <div
                key={index}
                style={{
                  width: "100%",
                  height: "100px",
                  background: "#FFFFFF",
                  borderRadius: "24px",
                  padding: "0 24px",
                  borderBottom: "1px solid #e5e7eb",
                  boxShadow: "0px 0px 10px 0px #0A23281F",
                  boxSizing: "border-box",
                }}
                className="flex justify-between items-center"
              >
                {/* Title left aligned */}
                <div className="flex-shrink-0" style={{ width: "200px" }}>
                  <h4 className="text-[16px] font-semibold uppercase text-black font-inter">{job.title}</h4>
                </div>

                {/* Tags centered */}
                <div className="flex-1 flex justify-center">
                  <div className="flex gap-2 flex-wrap  text-left justify-center">
                    {job.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-[#C5DEE9] text-[#0B6E99] text-[16px] font-medium  font-inter px-3 py-1 rounded-full "
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Apply button right */}
                <div className="pl-4">
                  <Link
                    href={`/vacancy?position=${encodeURIComponent(job.title)}`}
                    className="bg-[#003E5F] hover:bg-[#002c45] text-white px-6 py-2 rounded-full flex items-center gap-1 transition "
                  >
                    Apply <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        className="py-[140px] px-2 bg-cover bg-center font-inter"
        style={{ backgroundImage: 'url("/images/bg image.png")', width: "1920px", height: "894px" }}
      >
        <div className="container mx-auto px-4" style={{ width: "1344px", height: "614px" }}>
          <div className="mb-12">
            <p className="text-sm font-semibold text-[#006D9F] uppercase tracking-wide">WHAT WE OFFER YOU</p>
            <h3 className="text-4xl font-bold mt-2 text-black">
              JOB <span className="text-[#0B6E99]">BENEFITS</span> YOU WILL APPRECIATE
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "8px",
              width: "100%",
              paddingLeft: "8px",
              paddingRight: "8px",
            }}
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`${benefit.bgColor} rounded-[24px] p-[24px] border border-[#006D9F]`}
                style={{
                  height: "244px",
                  boxSizing: "border-box",
                }}
              >
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
      <section className="pt-[60px] pb-[60px] px-14 lg:px-[120px] min-h-[670px]">
        <div className="max-w-[1344px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-[24px] items-start">
            {/* Left Column */}
            <div className="w-full lg:w-[663px] flex flex-col gap-[24px]">
              <div className="text-[#084C6B] text-[16px] font-bold uppercase">OUR CONTACTS</div>
              <h2 className="font-nunito font-extrabold text-[44px] leading-[140%] uppercase text-black px-0">
                GET IN TOUCH <span className="text-[#006D9F]">WITH US </span>!
              </h2>
              <p className="text-sm font-medium leading-[140%] text-black text-left">
                If an individual is passionate about Technology and Innovation, AOW INFORMATION TECHNOLOGY's mission is
                to diligently serve clients and look for like-minded people who align with our criteria.
              </p>

              {/* Contact Details */}
              <div className="space-y-3">
                <div className="mb-3">
                  <h4 className="font-medium text-black text-sm uppercase mb-1">Don't want to wait? Call us now!</h4>
                  <div className="w-[663px] h-[24px] flex items-center gap-4">
                    <Phone className="w-4 h-4 text-[#006D9F]" />
                    <span className="text-black text-sm font-medium">+91 8073450249</span>
                    <span className="text-black text-sm font-medium">INDIA</span>
                  </div>
                </div>

                <div className="w-[660px] h-auto flex flex-col gap-2">
                  <h4 className="font-medium text-black text-sm uppercase mb-0">Don't want to wait? Call us now!</h4>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#006D9F]" />
                    <span className="text-gray-900 text-sm font-medium">support@aow.co.in</span>
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

            {/* Right Column - Contact Form */}
            <div
              className="bg-white rounded-[24px] border border-[#006D9F] py-[24px] px-0"
              style={{
                width: "530px",
                height: "380px",
              }}
            >
              <h3 className="text-[#006D9F] font-medium mb-6 text-left px-6">
                WE ARE EXCITED TO LEARN MORE ABOUT YOU AND YOUR EXPERIENCE
              </h3>

              <form className="space-y-[24px] px-[24px]" onSubmit={handleSubmit}>
                <div>
                  <label className="text-sm text-black mb-1 block">Name*</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 text-sm border border-gray-200 rounded-[25px] focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                    className="w-full px-4 py-2 text-sm border border-gray-200 rounded-[25px] focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-black mr-2">Attach your CV</span>
                    <div className="w-5 h-5 flex items-center justify-center text-black bg-[#006D9F] rounded-full">
                      <span className="text-white text-xs">
                        {" "}
                        <Image src="/images/load.png" alt="info" width={12} height={12} />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#006D9F] hover:bg-[#095b7f] text-white py-2 px-6 rounded-[25px] text-sm font-medium transition-colors"
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
