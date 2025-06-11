import Link from "next/link";

interface Service {
  title: string;
  items: string[];
  image: string;
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
    image: "/images/ser/digital.png", // Corrected image path as per previous versions
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
    items: [
      "On-Page SEO",
      "Off-Page SEO",
      "Technical SEO",
      "Local SEO",
      "E-commerce SEO",
      "SEO Audits",
    ],
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
];

export default function Services(): JSX.Element {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-[1344px]">
        {/* These elements will inherit Nunito from the global setting */}
        <div className="mb-10  font-nunito text-left">
<<<<<<< HEAD
         <p className="font-nunito font-extrabold text-[16px] leading-[140%] text-[#084C6B] uppercase">
         Our Services
        </p>

          <h2 className="font-nunito font-extrabold text-[48px] leading-[140%] uppercase text-black mt-1">
            Empowering Your <span className="text-[#006D9F]">Digital</span> World
=======
          <p className="text-base font-extrabold text-[#006D9F] uppercase">
            Our Services
          </p>
          <h2 className="text-48px md:text-4xl font-bold text-black mt-1">
            Empowering Your <span className="text-[#006D9F]">Digital</span>{" "}
            World
>>>>>>> 67b8a9f26268e0d4661a0f8720a01d07f6d6fe63
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-6 justify-center">
          {services.map((service: Service, index: number) => (
            <div
              key={index}
              // Add font-inter to the card container
              className="relative bg-white font-inter border border-[#084C6B] rounded-[24px] p-6 flex flex-col sm:flex-row shadow-sm h-[256px] min-h-[250px] gap-6 w-full font-inter" 
            >
              {/* Top-right icon */}
              <div className="absolute top-6 right-6">
            <div className="w-[60px] h-[60px] flex items-center justify-center">
              <img src="/images/arrow.svg" alt="Arrow" className="w-[48px] h-[48px]" />
            </div>
          </div>

              {/* Left side: Title and Image */}
            <div className="flex flex-col justify-between w-[260px] h-[208px]">
          <h3 className="font-inter font-bold text-[24px] leading-[100%] uppercase w-[260px] h-[29px] text-black">
            {service.title}
           </h3>

                  <img
            src={service.image || "/placeholder.svg"}
            alt={`${service.title} icon`}
            className="w-[260px] h-[100px] rounded-[16px] object-cover"
          />
          </div>
              {/* Right side: Items list */}
        <div className="w-[264px] flex flex-col gap-[8px]">
      <ul className="flex flex-col gap-[4px]">
        {service.items.map((item: string, idx: number) => (
          <li
            key={idx}
            className="font-inter font-medium text-[14px] leading-[140%] text-black h-[22px]"
          >
            {item}
          </li>
        ))}
      </ul>
            </div>
            </div>
          ))}
        </div>

        {/* This link will also inherit Nunito from the global setting */}
        <div className="mt-8 text-right">
          <Link
            href="/about-services"
            className="inline-flex items-center text-sm text-[#084C6B] font-medium hover:underline"
          >
            More about services
            <img src="/images/arrow (1).png" alt="Arrow" className="h-2 w-2 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}