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
            {/* Tech Dropdown Content - Updated to match image_c64217.png*/}
            <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md p-6 min-w-[750px] left-1/2 transform -translate-x-1/2"> {/* Increased padding, min-width, and centered positioning */}
              <div className="grid grid-cols-3 gap-x-10"> {/* Three-column layout with gap */}

                {/* Column 1: APP DEVELOPMENT */}
                <div className="flex flex-col space-y-2 pr-4 border-r border-gray-200"> {/* Added border-r for separator */}
                  <h4 className="text-sm font-bold uppercase text-black mb-2">APP DEVELOPMENT</h4>
                  <Link href="#" className="block text-sm text-black  hover:text-[#00647D]">Custom App Development</Link>
                  <Link href="#" className="block text-sm text-black hover:text-[#00647D]">E-commerce Apps</Link>
                  <Link href="#" className="block text-sm text-black hover:text-[#00647D]">UI/UX Design</Link>
                  <Link href="#" className="block text-sm text-black hover:text-[#00647D]">Maintenance & Updates</Link>
                  <Link href="#" className="block text-sm text-black hover:text-[#00647D]">Progressive Web Apps (PWAs)</Link>
                  <Link href="#" className="block text-sm text-black hover:text-[#00647D]">API Integration</Link>
                </div>

                {/* Column 2: WEB DEVELOPMENT */}
                <div className="flex flex-col space-y-2 px-4 border-r border-gray-200"> {/* Added border-r for separator */}
                  <h4 className="text-sm font-bold uppercase text-black mb-2">WEB DEVELOPMENT</h4>
                  <Link href="#" className="block text-sm text-black hover:text-[#00647D]">Custom Website Development</Link>
                  <Link href="#" className="block text-sm text-black hover:text-[#00647D]">E-commerce Development</Link>
                  <Link href="#" className="block text-sm text-black hover:text-[#00647D]">Web Application Development</Link>
                  <Link href="#" className="block text-sm text-black hover:text-[#00647D]">CMS Development</Link>
                  <Link href="#" className="block text-sm text-black hover:text-[#00647D]">Third-party Integrations</Link>
                  <Link href="#" className="block text-sm text-black hover:text-[#00647D]">Website Maintenance</Link>
                </div>

                {/* Column 3: CUSTOMER SUPPORT */}
                <div className="flex flex-col space-y-2 pl-4">
                  <h4 className="text-sm font-bold uppercase text-black mb-2">CUSTOMER SUPPORT</h4>
                  <Link href="#" className="block text-sm text-black hover:text-[#00647D]">Live Chat Support</Link>
                  <Link href="#" className="block text-sm text-black hover:text-[#00647D]">Email Support</Link>
                  <Link href="#" className="block text-sm text-black hover:text-[#00647D]">Call Center Services</Link>
                  <Link href="#" className="block text-sm text-black hover:text-[#00647D]">Technical Support</Link>
                  <Link href="#" className="block text-sm text-black hover:text-[#00647D]">24/7 Customer Service</Link>
                  <Link href="#" className="block text-sm text-black hover:text-[#00647D]">Multilingual Support</Link>
                </div>

              </div>
            </div>
          </div>

          {/* Digital Dropdown (remains unchanged) */}
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

          {/* Content Dropdown (remains unchanged) */}
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