"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

// Define the interface for a portfolio item
interface PortfolioItem {
  title: string
  category: string
  imageSrc: string
}

const Portfolio = () => {
  // Define the three portfolio items with different images
  const portfolioItems: PortfolioItem[] = [
    {
      title: "AUTOSQUARE",
      category: "AUTO PARTS EXPERT",
      imageSrc: "/images/portfolio/card_portfolio.png",
    },
    {
      title: "BHARAT SPORTS FOUNDATION",
      category: "Sports Organization",
      imageSrc: "/images/portfolio/portfolio.png",
    },
    {
      title: "SKILL KWIZ",
      category: "Educational Platform",
      imageSrc: "/images/portfolio/card.png",
    },
  ]

  const [activeIndex, setActiveIndex] = React.useState(0)

  return (
    <section id="portfolio" className="py-8 md:py-10 bg-gray-50"
    style={{ backgroundImage: "url('/images/bg image.png')" }} >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold mb-3 bg-blue-50 text-[#084C6B] border-blue-200">
              PORTFOLIO
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              SHOWCASING <span className="text-[#084C6B]">EXCELLENCE</span>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="text-[#084C6B] text-sm font-medium hover:text-[#084C6B] transition-colors flex items-center mt-8"
          >
            More projects →
          </Link>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="w-full">
                <Image
                  src={item.imageSrc || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={280}
                  className="w-full h-full object-contain transition-transform group-hover:scale-105 duration-300"
                  style={{ aspectRatio: "auto" }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center">
          <div className="flex gap-2">
            {portfolioItems.map((_, index) => (
              <div
                key={index}
                className={`h-[8px]  rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-16 bg-[#084C6B]" : "w-[350px] bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
