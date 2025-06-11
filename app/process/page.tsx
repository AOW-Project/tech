import Link from "next/link";

export const metadata = {
  title: "Our Process - NOW UI/UX Design Agency",
  description: "Learn about our proven UI/UX design process that delivers exceptional results for our clients.",
};

export default function ProcessPage() {
  return (
    <>
<section
  className="pt-[120px] pr-[75px] pb-[30px] pl-[35px] bg-gradient-to-br from-blue-50 to-blue-100 bg-cover bg-center"
  style={{ backgroundImage: "url('/images/bg.png')" }}
>

  <div className="container mx-auto max-w-[1344px] font-nunito">
    {/* Title Section */}
    <div className="mb-6 text-left">
      <h2 className="font-extrabold text-[16px] leading-[140%] uppercase mb-2 text-[#006D9F] tracking-normal">
        NEXT PROCESS
      </h2>
      <h3 className="font-extrabold text-[48px] leading-[140%] tracking-normal text-gray-900 uppercase">
        OUR STEP-BY-STEP <span className="text-[#006D9F]">PROCESS</span>
      </h3>
    </div>

    {/* Grid of Steps */}
    <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-[40px] w-full max-w-[1344px] h-[457px] font-inter">
      {processSteps.map((step, index) => (
        <div className="flex items-start space-x-4" key={index}>
          <div className="text-4xl md:text-5xl font-bold text-[#084C6B] leading-none">
            {index + 1}
          </div>
          <div className="flex-1 pt-2">
            <h3 className="font-inter font-bold text-[22px] leading-[120%] uppercase tracking-normal text-black mb-2 w-[386px] h-[29px]">
              {step.title}
            </h3>
            <p className="font-inter font-medium text-[16px] leading-[140%] tracking-normal text-black w-[386px] h-[44px]">
              {step.description}
            </p>

            {index === 0 && (
              <div className="mt-4">
                <Link
                  href="/submit-request"
                  className="inline-flex items-center justify-center bg-[#084C6B] font-medium 
                            w-[240px] h-[48px] px-[24px] py-[8px] rounded-[24px] gap-[8px] text-white"
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
    title: "INNOVATION & EXECUTION",
    description: "Our expertise professionals give life to creativity and technical brilliance in every project.",
  },
  {
    title: "CLIENT APPROACH",
    description: "We customize the requirements of a business organization and meet the client's needs.",
  },
  {
    title: "SUPPORT",
    description: "End-to-end support is provided from our end enabling round-the-clock availability of customer support over the phone or live chat.",
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
