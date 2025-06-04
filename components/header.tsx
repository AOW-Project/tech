import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import MobileMenu from "./mobile-menu"
import { ChevronDown } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.svg" alt="NOW Logo" width={100} height={30} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {/* Dropdowns */}
          <div className="relative group">
            <button className="flex items-center text-sm font-medium hover:text-[#00647D] transition-colors">
              Tech <ChevronDown size={14} className="ml-1" />
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-md p-2 min-w-[150px]">
              <Link href="/tech/web" className="block px-3 py-1 text-sm hover:bg-gray-100">
                Web
              </Link>
              <Link href="/tech/mobile" className="block px-3 py-1 text-sm hover:bg-gray-100">
                Mobile
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center text-sm font-medium hover:text-[#00647D] transition-colors">
              Digital <ChevronDown size={14} className="ml-1" />
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-md p-2 min-w-[150px]">
              <Link href="/digital/marketing" className="block px-3 py-1 text-sm hover:bg-gray-100">
                Marketing
              </Link>
              <Link href="/digital/strategy" className="block px-3 py-1 text-sm hover:bg-gray-100">
                Strategy
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center text-sm font-medium hover:text-[#00647D] transition-colors">
              Content <ChevronDown size={14} className="ml-1" />
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-md p-2 min-w-[150px]">
              <Link href="/content/writing" className="block px-3 py-1 text-sm hover:bg-gray-100">
                Writing
              </Link>
              <Link href="/content/design" className="block px-3 py-1 text-sm hover:bg-gray-100">
                Design
              </Link>
            </div>
          </div>

          {/* Static links */}
          <Link href="/about" className="text-sm font-medium hover:text-[#00647D] transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-[#00647D] transition-colors">
            Contact Us
          </Link>
          <Link href="/career" className="text-sm font-medium hover:text-[#00647D] transition-colors">
            Career
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <Link href="/quote">
          <Button className="bg-[#004e63] text-white hover:bg-[#003b4e] px-6 rounded-full hidden md:inline-flex">
            Get Quote
          </Button>
        </Link>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
