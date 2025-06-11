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
      <section
  id="portfolio"
  className="pt-[140px] pb-[140px] bg-gray-50"
  style={{ backgroundImage: "url('/images/b.png')" }}
>
  <div className="max-w-[1344px] mx-auto px-4 md:px-6">
    {/* Header */}
    <div className="flex justify-between items-start mb-8">
      <div>
        <div className="inline-flex items-center  px-1 py-0.5 mb-3  text-[#084C6B] uppercase font-nunito font-extrabold text-[16px] leading-[140%]">
        PORTFOLIO
      </div>

       <h2 className="font-nunito font-extrabold text-[48px] leading-[140%] uppercase text-black">
          SHOWCASING <span className="text-[#084C6B]">EXCELLENCE</span>
        </h2>

      </div>
      <Link
        href="/portfolio"
        className="text-[#084C6B] text-sm font-medium transition-colors flex items-center mt-8"
      >
        More projects →
      </Link>
    </div>

    {/* Portfolio Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] mb-6">
  {portfolioItems.map((item, index) => (
    <div
      key={index}
      className="w-[546px] h-[500px] p-[24px] rounded-[24px] bg-white flex items-center justify-center overflow-hidden"
    >
      <Image
        src={item.imageSrc || "/placeholder.svg"}
        alt={item.title}
        width={400}
        height={400}
        className="w-full h-full object-contain"
      />
    </div>
  ))}
</div>





    {/* Progress Indicator */}
    <div className="flex justify-center">
      <div className="flex gap-2">
        {portfolioItems.map((_, index) => (
          <div
            key={index}
            className={`h-[8px] rounded-full transition-all duration-300 ${
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
