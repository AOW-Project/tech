"use client"
import React from "react"
import Image from "next/image"
import Accordion, { AccordionItem } from "./Accordion"
import { useRouter } from "next/navigation"

interface ServiceBlockProps {
  title: string
  imageSrc: string
  accordionItems: AccordionItem[]
  reverse?: boolean
}

const ServiceBlock: React.FC<ServiceBlockProps> = ({
  title,
  imageSrc,
  accordionItems,
  reverse,
}) => {
  const router = useRouter()

  const handleSeeMore = () => {
    if (title === "App Development") {
      router.push("/sub-services/service-v1")
    }
  }

  return (
    <section
      className={`my-12 mx-2 md:mx-8 lg:mx-16 flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-start gap-8`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 flex-shrink-0 flex items-start group">
        <Image
          src={imageSrc}
          alt={`${title} illustration`}
          width={400}
          height={400}
          className="w-full h-[320px] md:h-[400px] object-cover rounded-lg shadow-md aspect-square transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Text & Accordion */}
      <div className="w-full md:w-1/2 flex flex-col justify-start">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">{title}</h2>
        <Accordion items={accordionItems} />

        {/* See More Button (static for all, navigates only for App Development) */}
        <div className={`mt-6 flex ${reverse ? "justify-start" : "justify-end"}`}>
          <button
            onClick={handleSeeMore}
            className="bg-[#004e63] text-white rounded-full px-6 py-2 font-semibold text-base shadow hover:bg-[#003b4e] transition-colors"
            type="button"
          >
            See more
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServiceBlock
