import Image from "next/image"

export default function AboutPage() {
  return (
    <>
      {/* About Us Section - Matching Screenshot */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            {/* Left Column: Logo */}
            <div className="flex justify-center md:justify-start">
              <Image
                src="/images/about logo.svg" // Replace with actual logo path
                alt="AOW Logo"
                width={300}
                height={100}
                className="h-auto w-auto"
              />
            </div>

            {/* Right Column: Text Content */}
            <div>
              <h2 className="text-sm font-semibold text-[#00647D] uppercase mb-2">Who We Are?</h2>
              <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
                Let Us Tell You About Ourselves
              </h1>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Welcome to AOW Information Technology Pvt. Ltd., we are here in this era to transform digital
                solutions for every business. Our result-oriented solutions make the business appealing and stand
                out from the rest. In just two years, we have not only served 83+ clients but are still counting on
                happy approaches from our clients.
              </p>

              <div className="mb-4">
                <h3 className="font-semibold text-black mb-1">OUR MISSION</h3>
                <p className="text-gray-700">
                  Enhancing the brand’s presence with our digital solutions available to one and all.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-black mb-1">OUR VISION</h3>
                <p className="text-gray-700">
                  Having said that the best of our innovative services is to be more creative than any, we wish to
                  be the global leader in expanding our reach to more people with our successful proven results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
