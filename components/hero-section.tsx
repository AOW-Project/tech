import Link from "next/link"

export default function HeroSection() {
  return (
    <>
      {/* Navigation */}
      <nav className="relative z-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-gray-900">AOW</div>
            </div>

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-1">
                <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Tech</span>
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Digital</span>
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Content</span>
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <Link href="/about" className="text-gray-700 hover:text-gray-900">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900">
                Contact Us
              </Link>
              <Link href="/career" className="text-gray-700 hover:text-gray-900">
                Career
              </Link>
            </div>

            {/* Get Quote Button */}
            <div className="flex items-center">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-stretch overflow-hidden font-sans">
        {/* Left content */}
        <div className="relative z-10 w-full md:w-1/2 px-8 md:px-16 py-10 flex flex-col justify-center bg-white">
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            UI/UX <span className="text-blue-600">DESIGNING</span> <br /> SERVICES
          </h1>

          <p className="text-sm text-gray-700 mt-4 max-w-md">
            Captivate the attention of users and drive prolific results with our UI/UX experts specialized in creativity
            to ensure all the functions are channeled in a strategic manner
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-gray-800 mt-4">
            {["Ease to use", "Appealing Designs", "Fascinating reach"].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Form Box */}
          <div className="border-2 border-blue-300 rounded-lg p-6 mt-6 max-w-md bg-white shadow-sm">
            <p className="uppercase text-[10px] text-gray-600 tracking-wider font-medium">
              LET'S CREATE SOMETHING EXTRAORDINARY TOGETHER
            </p>
            <p className="text-blue-600 text-sm font-semibold mt-1">YOUR JOURNEY TOWARDS EXCELLENCE STARTS HERE</p>

            <div className="mt-4">
              <label className="text-sm font-medium text-gray-700">Services*</label>
              <select className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                <option>Integrated Digital Marketing Agency</option>
                <option>UI/UX Strategy</option>
                <option>Wireframing</option>
                <option>Prototyping</option>
              </select>
            </div>

            <button className="mt-4 w-full bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold py-2.5 rounded-full transition-colors">
              Next
            </button>
          </div>

          {/* Bottom Navigation */}
          <div className="flex justify-between items-center mt-6 text-sm font-medium max-w-md">
            <Link href="/services" className="text-blue-600 hover:underline flex items-center gap-1">
              View service
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-gray-500">01/05</span>
              <button className="text-blue-600 hover:text-blue-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right side background image */}
        <div className="absolute top-0 right-0 h-full w-full md:w-1/2">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WabaMreMieQDRUK3ykwH70Yq9zjlxA.png"
            alt="UI/UX Design Interface"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  )
}
