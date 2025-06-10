import Image from "next/image"
import TrustedCompanies from "@/components/trusted-companies"
import UniqueFeatures from "@/components/unique-features"
import Portfolio from "@/components/portfolio"
import WhyChooseUs from "@/components/why-choose-us"
import ProcessPage from "./process/page"
import TeamSection from "@/components/team-section"
import ServicesPage from "./services/page"
import TestimonialsSection from "@/components/testimonial-slider"
import HomeHero from "@/components/home-hero"

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <HomeHero />

      <ServicesPage />

      <TrustedCompanies />
      <section className="bg-white pt-[100px] pb-[100px]">
        <div className="max-w-[1344px] mx-auto px-4 md:px-6">
          {/* Top Titles */}
          <div className="mb-2">
            <h2 className="text-sm font-semibold text-[#006D9F] uppercase font-inter mb-2">
              Who We Are?
            </h2>
            <h1 className="text-[48px] font-extrabold leading-[1.4] uppercase text-black font-nunito mb-8">
              Let Us Tell You About Ourselves
            </h1>
          </div>

          {/* Logo + Text Content */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-[140px]">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/images/about logo.svg"
                alt="AOW Logo"
                width={432}
                height={147}
                className="w-full max-w-[432px] h-auto"
              />
            </div>

            {/* Content */}
            <div className="w-full lg:w-[772px] font-inter text-[16px] text-black leading-relaxed">
              <p className="mb-4">
                Welcome to AOW Information Technology Pvt. Ltd., we are here in this era to transform digital
                solutions for every business. Our result-oriented solutions make the business appealing and
                stand out from the rest. In just two years, we have not only served 89+ clients but are still
                counting on happy approaches from our clients.
              </p>

              <div className="mb-3">
                <h3 className="font-bold text-[#00455E] mb-1 uppercase">Our Mission</h3>
                <p>
                  Enhancing the brand's presence with our digital solutions available to one and all.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#00455E] mb-1 uppercase">Our Vision</h3>
                <p>
                  Having said that the best of our innovative services is to be more creative than any, we wish
                  to be the global leader in expanding our reach to more people with our successful proven results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <UniqueFeatures />
      <Portfolio />
      <WhyChooseUs />
      <ProcessPage />
      <TeamSection />
      <TestimonialsSection />
    </div>
  )
}
