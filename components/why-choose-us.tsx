import React from "react";
import Image from "next/image";

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50 font-inter">
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
            WHY CHOOSE US? <br />
            <span className="text-[#006D9F]">THE BEST EVER CHOICE</span>
          </h2>
        </div>

        {/* Main Content: Graph + Text */}
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Left: Graph Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/whychoose.png" // Placeholder path; replace with your image path
              alt="Growth Graph"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right: Key Points */}
          <div className="w-full lg:w-1/2 space-y-0"> {/* Changed space-y-8 to space-y-0, we'll manage spacing with padding */}

            {/* Innovation & Execution */}
            {/* Added py-6 (for vertical padding) and border-b border-gray-300 */}
            <div className="py-6 border-b border-gray-300">
              <div className="flex items-center mb-2"> {/* Added mb-2 for space between line/title and paragraph */}
                <div className="h-[2px] w-8 bg-black mr-4"></div>
                <h3 className="text-base font-semibold text-black uppercase tracking-wider">
                  INNOVATION & EXECUTION
                </h3>
              </div>
              <p className="text-black text-[16px]"> {/* Removed mt-2, spacing is now handled by mb-2 above */}
                Our expertise professionals give life to creativity and technical brilliance in every project.
              </p>
            </div>

            {/* Client Approach */}
            {/* Added py-6 and border-b border-gray-300 */}
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
            {/* Added py-6. No border-b here as it's the last item */}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;