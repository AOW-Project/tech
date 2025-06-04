import Link from "next/link"

interface Service {
  title: string
  items: string[]
  image: string
}

const services: Service[] = [
  {
    title: "APP DEVELOPMENT",
    items: [
      "Custom App Development",
      "E-commerce Apps",
      "UI/UX Design",
      "Maintenance & Updates",
      "Progressive Web Apps (PWAs)",
      "API Integration",
    ],
    image: "/images/ser/app.png",
  },
  {
    title: "DIGITAL MARKETING SERVICES",
    items: [
      "Pay-Per-Click (PPC) Advertising",
      "Email Marketing",
      "Content Marketing",
      "Conversion Rate Optimization (CRO)",
      "Affiliate Marketing",
      "Marketing Automation",
    ],
    image: "/images/ser/digital.png",
  },
  {
    title: "WEB DEVELOPMENT SERVICES",
    items: [
      "Custom Website Development",
      "E-commerce Development",
      "Web Application Development",
      "CMS Development",
      "Third-party Integrations",
      "Website Maintenance",
    ],
    image: "/images/ser/web.png",
  },
  {
    title: "SOCIAL MEDIA MARKETING",
    items: [
      "Social Media Strategy",
      "Content Creation",
      "Social Media Advertising",
      "Community Management",
      "Social Media Analytics",
      "Influencer Marketing",
      "Reputation Management",
    ],
    image: "/images/ser/social media.png",
  },
  {
    title: "WEB DESIGNING SERVICES",
    items: [
      "UI/UX Design",
      "Responsive Design",
      "Prototyping and Wireframing",
      "Branding",
      "Landing Page Design",
      "Interactive Web Design",
    ],
    image: "/images/ser/design.png",
  },
  {
    title: "SEO SERVICES",
    items: ["On-Page SEO", "Off-Page SEO", "Technical SEO", "Local SEO", "E-commerce SEO", "SEO Audits"],
    image: "/images/ser/seo.png",
  },
  {
    title: "CUSTOMER SUPPORT SERVICES",
    items: [
      "Live Chat Support",
      "Email Support",
      "Call Center Services",
      "Technical Support",
      "24/7 Customer Service",
      "Multilingual Support",
    ],
    image: "/images/ser/customer.png",
  },
  {
    title: "SOCIAL MEDIA POSTER DESIGN",
    items: [
      "Custom Templates",
      "Event Posters",
      "Holiday Campaigns",
      "Infographics",
      "Video Posts",
      "Rebranding Assets",
    ],
    image: "/images/ser/media.png",
  },
  {
    title: "LOGO DESIGNING SERVICES",
    items: ["Logo Designing", "Stationery Designing"],
    image: "/images/ser/logo design.png",
  },
]

export default function Services(): JSX.Element {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 text-left">
          <p className="text-xs font-semibold text-[#1b8bf9] uppercase">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-1">
            Empowering Your <span className="text-[#1b8bf9]">Digital</span> World
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {services.map((service: Service, index: number) => (
            <div
              key={index}
              className="relative bg-white border border-gray-300 rounded-md p-5 flex flex-col shadow-sm h-56"
            >
              {/* Top-right icon */}
              <div className="absolute top-4 right-4">
                <div className="h-8 w-8 rounded-full flex items-center justify-center">
                  <img
                    src="/images/arrow.svg" // Placeholder for the new arrow image
                    alt="Arrow"
                    className="h-5 w-5"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-black uppercase tracking-tight mb-4">{service.title}</h3>

              {/* Content Area */}
              <div className="flex-1 relative">
                {/* Items List - positioned at top right */}
                <div className="absolute top-0 right-0 w-1/2">
                  <ul className="space-y-1">
                    {service.items.map((item: string, idx: number) => (
                      <li key={idx} className="text-sm text-gray-900 leading-snug">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image - positioned at bottom left */}
                <div className="absolute bottom-0 left-0">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title} icon`}
                    className="w-40 h-28 object-cover rounded-md"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-right">
          <Link
            href="/about-services"
            className="inline-flex items-center text-sm text-blue font-medium hover:underline"
          >
            More about services
            <img
              src="/images/arrow (1).png" // Placeholder for the new arrow image
              alt="Arrow"
              className="h-4 w-4 ml-1"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}