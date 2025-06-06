"use client"

import React from "react"
import Image from "next/image"

const accordionItems = [
  { title: "CUSTOM APP DEVELOPMENT", content: "We create fascinating websites that catch the attention of everyone while meeting business requirements, functionality, scalability, and seamless performance." },
  { title: "MAINTENANCE & UPDATES", content: "We ensure your app stays secure, fast, and up-to-date with regular maintenance, performance optimization and feature enhancements — so your business runs smoothly, always." },
  { title: "E-COMMERCE APPS", content: "We build powerful, user-friendly e-commerce apps that boost sales, simplify shopping, and provide a seamless experience across all devices — tailored to your brand and goals." },
  { title: "PROGRESSIVE WEB APPS (PWAs)", content: "We craft lightning-fast PWAs that combine the best of web and mobile — reliable, installable, and engaging experiences that work offline and feel like native apps." },
  { title: "UI/UX DESIGN", content: "We design intuitive and visually striking interfaces that elevate user experience, increase engagement, and bring your brand to life through smart, human-centered design." },
  { title: "API INTEGRATION", content: "We seamlessly connect your app with third-party services, tools, and platforms to extend functionality, automate workflows, and create a cohesive digital ecosystem." },
]

export default function ServiceV1Page() {
  return (
    <div className="w-full font-inter">
      {/* Top Section */}
      <div className="relative max-w-full lg:max-w-[2000px] mx-auto h-[520px] md:h-auto overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent z-10" />

        {/* Background Image */}
        <Image
          src="/images/home page/1.png"
          alt="App Development Background"
          fill
          className="object-cover"
          priority
        />

        {/* Foreground Content */}
        <div className="relative z-20 w-full h-full flex flex-col lg:flex-row items-start px-4 md:px-10 lg:px-16 pt-6 pb-4 lg:gap-[40px]">
          {/* Left Content */}
          <div className="w-full max-w-xl flex flex-col gap-3">
            <h2 className="text-[26px] font-bold leading-snug mt-1 mb-1">
              <span className="text-[#007CC2]">APP </span>
              <span className="text-black">DEVELOPMENT</span>
            </h2>

            <p className="text-[13.5px] text-black leading-normal mb-2">
              Our user-friendly and scalable apps are designed to provide a seamless experience.
              From ideation to launch, we build high-performing mobile-friendly platforms for all your business goals.
            </p>

            {/* Bullet Points */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-[13.5px]">
              {[
                "Comparative growth",
                "High-Performing Mobile-Friendly Apps",
                "Web Development",
                "Enticing engagement",
              ].map((text, index) => (
                <div key={index} className="flex items-start">
                  <Image src="/images/arrow.svg" alt="checkmark" width={16} height={16} className="mt-1 mr-2" />
                  <span className="text-black font-medium">{text}</span>
                </div>
              ))}
            </div>

            {/* Form Box */}
            <div className="border border-[#ADD8E6] rounded-md p-4 bg-white shadow-md flex flex-col gap-4 mt-3 w-full">
              {/* Progress Line */}
              <div className="flex justify-between w-full">
                <div className="h-[2px] w-1/3 bg-[#007CC2]"></div>
                <div className="h-[2px] w-1/3 bg-gray-300 mx-1"></div>
                <div className="h-[2px] w-1/3 bg-gray-300"></div>
              </div>

              {/* Title Text */}
              <div>
                <p className="text-[13px] font-semibold text-black">LET’S CREATE SOMETHING EXTRAORDINARY TOGETHER!</p>
                <p className="text-[13px] text-[#007CC2] font-semibold uppercase mt-1">
                  YOUR JOURNEY TOWARDS EXCELLENCE STARTS HERE
                </p>
              </div>

              {/* Form Fields */}
              <div className="flex flex-col gap-3">
                <div>
                  <label htmlFor="services-select" className="block text-[13px] font-medium mb-1 text-black">
                    Services<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="services-select"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-black"
                  >
                    <option>App Development</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subservices-select" className="block text-[13px] font-medium mb-1 text-black">
                    Subservices<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subservices-select"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-black"
                  >
                    <option>Choose subservice...</option>
                  </select>
                </div>

                <button className="bg-[#004C78] hover:bg-[#003B60] text-white px-6 py-2 rounded text-sm w-fit self-start transition duration-200">
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Right Image Placeholder (optional) */}
          <div className="hidden lg:block w-full lg:w-1/2 h-full flex items-center justify-center pointer-events-none">
            {/* Optional image or mockup can go here */}
          </div>
        </div>
      </div>

      {/* Bottom Services Section */}
      <div className="bg-white px-4 md:px-6 py-16 max-w-6xl mx-auto">
        <p className="text-[16px] font-semibold text-[#006D9F] uppercase tracking-wide mb-2">Innovative Digital Solutions</p>
        <h2 className="text-[38px] md:text-[48px] font-bold mb-8">
          Comprehensive <span className="text-[#006D9F]">Digital Solutions</span> for Your Business Growth
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
          {accordionItems.map((item, index) => (
            <div key={index} className="relative py-6 border-b border-gray-300">
              <div>
                <h3 className="font-bold text-black uppercase mb-1">{item.title}</h3>
                <p className="text-black text-[16px] leading-relaxed">{item.content}</p>
              </div>
              <div className="absolute top-6 right-0">
                <Image
                  src="/images/arrow.svg"
                  alt="Service checkmark"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
