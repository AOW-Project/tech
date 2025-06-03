"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-10 w-10 hover:bg-gray-100"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg z-50 border-t">
          <div className="flex flex-col p-4 space-y-4">
            <Link href="/" className="text-sm font-medium hover:text-[#00647D] transition-colors" onClick={toggleMenu}>
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium hover:text-[#00647D] transition-colors"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-sm font-medium hover:text-[#00647D] transition-colors"
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
            <Link
              href="/process"
              className="text-sm font-medium hover:text-[#00647D] transition-colors"
              onClick={toggleMenu}
            >
              Process
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-[#00647D] transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/testimonials"
              className="text-sm font-medium hover:text-[#00647D] transition-colors"
              onClick={toggleMenu}
            >
              Testimonials
            </Link>
            <Link
              href="/career"
              className="text-sm font-medium hover:text-[#00647D] transition-colors"
              onClick={toggleMenu}
            >
              Career
            </Link>
            <Link
              href="/vacancy"
              className="text-sm font-medium hover:text-[#00647D] transition-colors"
              onClick={toggleMenu}
            >
              Vacancies
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-[#00647D] transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 bg-[#00647D] text-white hover:bg-[#004e63] w-full"
              onClick={toggleMenu}
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
