import React from "react";
import Image from "next/image";

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="flex items-center mb-12">
          <span className="text-blue-600 font-bold text-lg mr-2"></span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            WHY CHOOSE US? <br />
            <span className="text-blue-600">THE BEST EVER CHOICE</span>
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
          <div className="w-full lg:w-1/2 space-y-8">
            {/* Innovation & Execution */}
            <div>
              <div className="flex items-center">
                <div className="h-[2px] w-8 bg-gray-800 mr-4"></div>
                <h3 className="text-base font-semibold text-gray-800 uppercase tracking-wider">
                  INNOVATION & EXECUTION
                </h3>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                Our experts polkecelant give life to creativity and technical brilliance in every project.
              </p>
            </div>

            {/* Client Approach */}
            <div>
              <div className="flex items-center">
                <div className="h-[2px] w-8 bg-gray-800 mr-4"></div>
                <h3 className="text-base font-semibold text-gray-800 uppercase tracking-wider">
                  CLIENT APPROACH
                </h3>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                We customize the requirements of a business organization and meet the client's needs.
              </p>
            </div>

            {/* Support */}
            <div>
              <div className="flex items-center">
                <div className="h-[2px] w-8 bg-gray-800 mr-4"></div>
                <h3 className="text-base font-semibold text-gray-800 uppercase tracking-wider">
                  SUPPORT
                </h3>
              </div>
              <p className="text-gray-600 text-sm mt-2">
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