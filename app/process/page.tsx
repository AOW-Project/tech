import Link from "next/link"

export const metadata = {
  title: "Our Process - NOW UI/UX Design Agency",
  description: "Learn about our proven UI/UX design process that delivers exceptional results for our clients.",
}

export default function ProcessPage() {
  return (
    <>
      {/* Process Steps */}
      <section className="py-8 md:py-10 lg:py-12 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="mb-8 text-left">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">NEXT PROCESS</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 uppercase">
              OUR STEP-BY-STEP <span className="text-blue-600">PROCESS</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-x-8 gap-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-5xl md:text-6xl font-bold text-blue-600 leading-none">{index + 1}</div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    {index === 0 && (
                      <div className="mt-4">
                        <Link
                          href="/submit-request"
                          className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors h-10 px-6 bg-blue-600 text-white hover:bg-blue-700"
                        >
                          Submit Request
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

const processSteps = [
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
  {
    title: "APPROVE THE PLAN",
    description: "Once you're happy with the proposal, we proceed to finalize the plan.",
  },
  {
    title: "IMPLEMENTATION & DELIVERY",
    description: "Our team begins working on your solution, ensuring timely delivery.",
  },
  {
    title: "POST-IMPLEMENTATION SUPPORT",
    description: "After delivery, we offer ongoing support to ensure everything runs smoothly.",
  },
]
