import React from "react";
import Image from "next/image";

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50 ">
      <div className="container mx-auto px-1 md:px-0">
        {/* Heading */}
        <div className="mb-8 text-left ">
            <h2
                className="text-[#006D9F] uppercase mb-2"
                style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '140%',
                  letterSpacing: '0%',
                }}
              >
                WHY CHOOSE US?
              </h2>

            <h3
              className="text-gray-900 uppercase mb-0"
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '140%',
                letterSpacing: '0%',
              }}
            >
              THE BEST EVER <span style={{ color: '#006D9F' }}>CHOICE</span>
            </h3>


          </div>

        {/* Main Content: Graph + Text */}
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Left: Graph Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/whychoose.png" // Placeholder path; replace with your image path
              alt="Growth Graph"
              width={570}
              height={250}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right: Key Points */}
        <div className="w-full lg:w-1/2 space-y-0 -mt-24"> {/* Add -mt-6 to move it up */}

        {/* Top Horizontal Line */}
        <div className="border-t border-gray-300 w-full mb-4"></div>

        {/* Innovation & Execution */}
        <div className="py-6 border-b border-gray-300">
          <div className="flex items-center mb-2">
            <div className="h-[2px] w-8 bg-black mr-4"></div>
            <h3 className="text-base font-semibold text-black uppercase tracking-wider">
              INNOVATION & EXECUTION
            </h3>
          </div>
          <p className="text-black text-[16px]">
            Our expertise professionals give life to creativity and technical brilliance in every project.
          </p>
        </div>

        {/* Client Approach */}
        <div className="py-6 border-b border-gray-300">
          <div className="flex items-center mb-2">
            <div className="h-[2px] w-8 bg-black mr-4"></div>
            <h3 className="text-base font-semibold text-black uppercase tracking-wider">
              CLIENT APPROACH
            </h3>
          </div>
          <p className="text-black text-[16px]">
            We customize the requirements of a business organization and meet the client's needs.
          </p>
        </div>

        {/* Support */}
        <div className="py-6">
          <div className="flex items-center mb-2">
            <div className="h-[2px] w-8 bg-black mr-4"></div>
            <h3 className="text-base font-semibold text-black uppercase tracking-wider">
              SUPPORT
            </h3>
          </div>
          <p className="text-black text-[16px]">
            End-to-end support provided from our end enabling round-the-clock availability of customer support over the phone or live chat.
          </p>
        </div>

        {/* Bottom Horizontal Line */}
        <div className="border-t border-gray-300 w-full mt-4"></div>
      </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;