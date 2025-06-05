import Link from "next/link";

export const metadata = {
  title: "Our Process - NOW UI/UX Design Agency",
  description: "Learn about our proven UI/UX design process that delivers exceptional results for our clients.",
};

export default function ProcessPage() {
  return (
    <>
      {/* Process Steps */}
      <section
        className="py-8 md:py-10 lg:py-12 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div
          className="container mx-auto px-4 md:px-6 max-w-[1344px] h-[454px] flex flex-col justify-between"
        >
          {/* Top Title Section - Nunito Font */}
          <div className="mb-8 text-left font-nunito">
            <h2 className="text-sm font-semibold text-[#006D9F] uppercase tracking-wider mb-2">NEXT PROCESS</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 uppercase">
              OUR STEP-BY-STEP <span className="text-[#006D9F]">PROCESS</span>
            </h3>
          </div>

          {/* Process Steps Grid - Inter Font */}
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-x-10 gap-y-12 font-inter">
            {processSteps.map((step, index) => (
              // Add padding-y and border-bottom/top here
              
                <div className="flex items-start space-x-4">
                  <div className="text-5xl md:text-6xl font-bold text-[#084C6B] leading-none">{index + 1}</div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-[22px] font-bold text-black uppercase tracking-wide mb-2">{step.title}</h3>
                    <p className="text-black text-[16px] leading-relaxed">{step.description}</p>
                    {index === 0 && (
                      <div className="mt-4">
                        <Link
                          href="/submit-request"
                          className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors h-10 px-6 bg-[#006D9F] text-white hover:bg-[#084C6B]"
                        >
                          Submit Request
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const processSteps = [
  {
    title: "INNOVATION & EXECUTION", // Updated title
    description: "Our expertise professionals give life to creativity and technical brilliance in every project.", // Updated description
  },
  {
    title: "CLIENT APPROACH", // Updated title
    description: "We customize the requirements of a business organization and meet the client's needs.", // Updated description
  },
  {
    title: "SUPPORT", // Updated title
    description: "End-to-end support is provided from our end enabling round-the-clock availability of customer support over the phone or live chat.", // Updated description
  },
  {
    title: "ORDER A CONSULTATION",
    description: "This is the first step where the client can schedule a consultation to discuss their needs.",
  },
  {
    title: "DISCUSS YOUR REQUIREMENTS",
    description: "In this stage, we will analyze your needs and customize a solution.",
  },
  {
    title: "RECEIVE A TAILORED PROPOSAL",
    description: "Based on your requirements, we provide a detailed proposal.",
  },
];