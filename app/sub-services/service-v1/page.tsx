"use client"

import React from 'react'
import ServiceBlock from '../../../components/ServiceBlock'

const serviceData = {
  title: "App Development",
  imageSrc: "/images/ser/app.png",
  accordionItems: [
    { title: "Custom App Development", content: "Tailored mobile and web apps for your business needs." },
    { title: "E-commerce Apps", content: "Robust e-commerce solutions for seamless online sales." },
    { title: "UI/UX Design", content: "Modern, user-friendly interfaces for maximum engagement." },
    { title: "Maintenance & Updates", content: "Continuous support and updates for reliability." },
    { title: "Progressive Web Apps (PWAs)", content: "Fast, installable web apps for all devices." },
    { title: "API Integration", content: "Seamless integration with third-party services." },
  ]
}

export default function ServiceV1Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10">
        <div className="text-xs font-semibold text-[#1b8bf9] uppercase mb-1 tracking-wider">Service Details</div>
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">App Development Services</h1>
      </div>
      <ServiceBlock
        title={serviceData.title}
        imageSrc={serviceData.imageSrc}
        accordionItems={serviceData.accordionItems}
      />
    </div>
  )
}


