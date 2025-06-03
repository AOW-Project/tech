import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Star, Users, Award, Clock, Shield, Search, Layers, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "../components/ui/button"
import TrustedCompanies from "@/components/trusted-companies"
import AboutPage from "./about/page"
import UniqueFeatures from "@/components/unique-features"
import Portfolio from "@/components/portfolio"
import WhyChooseUs from "@/components/why-choose-us"
import ProcessPage from "./process/page"
import TeamSection from "@/components/team-section"
import ServicesPage from "./services/page"
import TestimonialsSection from "@/components/testimonial-slider"



export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-stretch overflow-hidden font-sans">
        {/* Left content */}
        <div className="relative z-10 w-full md:w-1/2 px-8 md:px-16 py-10 flex flex-col justify-center">
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
                <span className="w-2 h-2 bg-blue-600 rounded-full" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Form Box */}
          <div className="border border-blue-300 rounded-xl p-6 mt-6 max-w-md bg-white/90 shadow-md">
            <p className="uppercase text-[10px] text-gray-600 tracking-wider font-medium">
              Let’s create something extraordinary together!
            </p>
            <p className="text-blue-600 text-sm font-semibold mt-1">YOUR JOURNEY TOWARDS EXCELLENCE STARTS HERE</p>

            <div className="mt-4">
              <label className="text-sm font-medium text-gray-700">Services*</label>
              <select className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none">
                <option>Integrated Digital Marketing Agency</option>
                <option>UI/UX Strategy</option>
                <option>Wireframing</option>
                <option>Prototyping</option>
              </select>
            </div>

            <button className="mt-4 w-full bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold py-2 rounded-md transition">
              Next
            </button>
          </div>

          {/* Bottom Navigation */}
          <div className="flex justify-between items-center mt-6 text-sm text-blue-600 font-medium max-w-md">
            <span className="cursor-pointer hover:underline">View service ↗</span>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">01/05</span>
              <span className="text-lg text-blue-600">&rarr;</span>
            </div>
          </div>
        </div>

        {/* Right side background image */}
        <div className="absolute top-0 right-0 h-full w-full md:w-1/2">
          <img src="images/home page/slide 1.png" alt="UI/UX" className="w-full h-full object-cover" />
        </div>

        {/* Left gradient overlay to fade into white */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-0" />
      </div>

     <ServicesPage/>
    
     <TrustedCompanies />
      {/*about page*/}
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
     <UniqueFeatures/>
     
     <Portfolio />

    <WhyChooseUs/>
    <ProcessPage/>
    <TeamSection/>
    <TestimonialsSection/>
    </>
  )
}

