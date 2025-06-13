"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import MultiStepForm from "@/components/MultiStepForm";

const accordionItems = [
  {
    title: "CUSTOM APP DEVELOPMENT",
    content:
      "We create fascinating websites that catch the attention of everyone while meeting business requirements, functionality, scalability, and seamless performance.",
  },
  {
    title: "MAINTENANCE & UPDATES",
    content:
      "We ensure your app stays secure, fast, and up-to-date with regular maintenance, performance optimization and feature enhancements — so your business runs smoothly, always.",
  },
  {
    title: "E-COMMERCE APPS",
    content:
      "We build powerful, user-friendly e-commerce apps that boost sales, simplify shopping, and provide a seamless experience across all devices — tailored to your brand and goals.",
  },
  {
    title: "PROGRESSIVE WEB APPS (PWAs)",
    content:
      "We craft lightning-fast PWAs that combine the best of web and mobile — reliable, installable, and engaging experiences that work offline and feel like native apps.",
  },
  {
    title: "UI/UX DESIGN",
    content:
      "We design intuitive and visually striking interfaces that elevate user experience, increase engagement, and bring your brand to life through smart, human-centered design.",
  },
  {
    title: "API INTEGRATION",
    content:
      "We seamlessly connect your app with third-party services, tools, and platforms to extend functionality, automate workflows, and create a cohesive digital ecosystem.",
  },
];

export default function ServiceV1Page() {
  return (
    <div className="w-full font-inter">
      {/* Top Section */}
      <div className="relative max-w-full lg:max-w-[2000px] mx-auto h-[520px] md:h-auto overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent z-10" />
        <Image
          src="/images/home page/1.png"
          alt="App Development Background"
          fill
          className="object-cover"
          priority
        />

        <div className="relative z-20 w-full h-full flex flex-col lg:flex-row items-start px-4 md:px-10 lg:px-16 pt-6 pb-4 lg:gap-[40px]">
          <div className="w-full max-w-xl flex flex-col gap-3">
            <h2 className="text-[45px] font-nunito font-extrabold leading-snug mt-7 ">
              <span className="text-[#007CC2]">APP </span>
              <span className="text-black">DEVELOPMENT</span>
            </h2>

            <p className="text-sm text-[#000000] font-inter leading-normal font-medium ">
              Our user-friendly and scalable apps are designed to provide a
              seamless experience. From ideation to launch, we build
              high-performing mobile-friendly platforms for all your business
              goals.
            </p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-[13.5px]">
              {[
                "Comparative growth",
                "High-Performing Mobile-Friendly Apps",
                "Web Development",
                "Enticing engagement",
              ].map((text, index) => (
                <div key={index} className="flex items-start">
                  <Image
                    src="/images/arrow.svg"
                    alt="checkmark"
                    width={16}
                    height={16}
                    className="mt-1 mr-2"
                  />
                  <span className="text-black font-medium">{text}</span>
                </div>
              ))}
            </div>

            <div className="border border-[#006D9F] rounded-xl p-4 flex flex-col gap-4 mt-1 mb-20 w-full min-h-[293px]">
              <MultiStepForm />
            </div>

          </div>

          <div className="hidden lg:block w-full lg:w-1/2 h-full flex items-center justify-center pointer-events-none">
            {/* Optional image here */}
          </div>
        </div>
      </div>

      {/* Bottom Services Section */}
      <div className="bg-white py-24 px-6 max-w-7xl mx-auto">
        <p className="text-[16px] font-semibold text-[#006D9F] uppercase tracking-wide mb-2">
          Innovative Digital Solutions
        </p>
        <h2 className="text-[38px] md:text-[48px] font-bold mb-8">
          Comprehensive <span className="text-[#006D9F]">Digital Solutions</span> for Your Business Growth
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
          {accordionItems.map((item, index) => {
            const content = (
              <div className="relative py-6 border-b border-gray-300 cursor-pointer hover:bg-gray-50 transition">
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
            );

            return index === 0 ? (
              <Link href="/sub-services/service-v1/" key={index}>
                {content}
              </Link>
            ) : (
              <div key={index}>{content}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
