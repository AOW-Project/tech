/**
 * About Services Page
 * - Uses Navbar (Header) and Footer for layout consistency.
 * - Renders MainSection (hero, form, carousel) and 9 ServiceBlocks in a zig-zag layout.
 * - ServiceBlock uses Accordion for subservices. Images and text match project styles.
 * - Zig-zag layout: reverse={idx % 2 === 1} for alternating blocks.
 * - Maintainers: Reuse Navbar/Footer and global styles for consistency.
 */
import MainSection from "../../components/MainSection"
import ServiceBlock from "../../components/ServiceBlock"

// 9 services data for ServiceBlock
const SERVICES_DATA = [
  {
    title: "App Development",
    imageSrc: "/images/about-services/app-dev.jpg",
    accordionItems: [
      { title: "Custom App Development", content: "Tailored mobile and web apps for your business needs." },
      { title: "E-commerce Apps", content: "Robust e-commerce solutions for seamless online sales." },
      { title: "UI/UX Design", content: "Modern, user-friendly interfaces for maximum engagement." },
      { title: "Maintenance & Updates", content: "Continuous support and updates for reliability." },
      { title: "Progressive Web Apps (PWAs)", content: "Fast, installable web apps for all devices." },
      { title: "API Integration", content: "Seamless integration with third-party services." },
    ]
  },
  {
    title: "Digital Marketing Services",
    imageSrc: "/images/about-services/digital-marketing.jpg",
    accordionItems: [
      { title: "Pay-Per-Click (PPC) Advertising", content: "Drive targeted traffic with optimized PPC campaigns." },
      { title: "Email Marketing", content: "Engage your audience with effective email strategies." },
      { title: "Content Marketing", content: "Build authority and trust with valuable content." },
      { title: "Conversion Rate Optimization (CRO)", content: "Maximize conversions with data-driven improvements." },
      { title: "Affiliate Marketing", content: "Expand reach through affiliate partnerships." },
      { title: "Marketing Automation", content: "Automate campaigns for efficiency and scale." },
    ]
  },
  {
    title: "Web Development Services",
    imageSrc: "/images/about-services/web-dev.jpg",
    accordionItems: [
      { title: "Custom Website Development", content: "Unique, scalable websites tailored to your brand." },
      { title: "E-commerce Development", content: "Secure, high-converting online stores." },
      { title: "Web Application Development", content: "Powerful web apps for business operations." },
      { title: "CMS Development", content: "Easy-to-manage content systems for your team." },
      { title: "Third-party Integrations", content: "Connect with essential business tools." },
      { title: "Website Maintenance", content: "Ongoing support for peak performance." },
    ]
  },
  {
    title: "Social Media Marketing",
    imageSrc: "/images/about-services/social-media-marketing.jpg",
    accordionItems: [
      { title: "Social Media Strategy", content: "Custom strategies to grow your online presence." },
      { title: "Content Creation", content: "Engaging posts and campaigns for your brand." },
      { title: "Social Media Advertising", content: "Targeted ads to reach your ideal audience." },
      { title: "Community Management", content: "Active engagement and reputation management." },
      { title: "Social Media Analytics", content: "Insights to optimize your social efforts." },
      { title: "Influencer Marketing", content: "Leverage influencers for greater reach." },
      { title: "Reputation Management", content: "Protect and enhance your brand image." },
    ]
  },
  {
    title: "Web Designing Services",
    imageSrc: "/images/about-services/web-designing-services.jpg",
    accordionItems: [
      { title: "UI/UX Design", content: "Intuitive, visually appealing designs." },
      { title: "Responsive Design", content: "Seamless experience on all devices." },
      { title: "Prototyping and Wireframing", content: "Visualize ideas before development." },
      { title: "Branding", content: "Distinctive brand identity and assets." },
      { title: "Landing Page Design", content: "High-converting landing pages." },
      { title: "Interactive Web Design", content: "Engaging, interactive user experiences." },
    ]
  },
  {
    title: "SEO Services",
    imageSrc: "/images/about-services/seo-services.jpg",
    accordionItems: [
      { title: "On-Page SEO", content: "Optimize content and structure for search engines." },
      { title: "Off-Page SEO", content: "Build authority with quality backlinks." },
      { title: "Technical SEO", content: "Enhance site speed, security, and crawlability." },
      { title: "Local SEO", content: "Boost visibility in local search results." },
      { title: "E-commerce SEO", content: "Drive traffic to your online store." },
      { title: "SEO Audits", content: "Comprehensive analysis for improvement." },
    ]
  },
  {
    title: "Customer Support Services",
    imageSrc: "/images/about-services/customer-support.jpg",
    accordionItems: [
      { title: "Live Chat Support", content: "Instant help for your customers online." },
      { title: "Email Support", content: "Efficient, professional email responses." },
      { title: "Call Center Services", content: "Voice support for customer queries." },
      { title: "Technical Support", content: "Expert help for technical issues." },
      { title: "24/7 Customer Service", content: "Round-the-clock support availability." },
      { title: "Multilingual Support", content: "Assistance in multiple languages." },
    ]
  },
  {
    title: "Social Media Poster Design",
    imageSrc: "/images/about-services/social-media.png",
    accordionItems: [
      { title: "Custom Templates", content: "Branded templates for consistent visuals." },
      { title: "Event Posters", content: "Eye-catching designs for special events." },
      { title: "Holiday Campaigns", content: "Festive graphics for seasonal promotions." },
      { title: "Infographics", content: "Informative, shareable visual content." },
      { title: "Video Posts", content: "Dynamic video content for engagement." },
      { title: "Rebranding Assets", content: "Fresh visuals for brand updates." },
    ]
  },
  {
    title: "Logo Designing Services",
    imageSrc: "/images/about-services/logo-design.jpg",
    accordionItems: [
      { title: "Logo Designing", content: "Unique, memorable logos for your brand." },
      { title: "Stationery Designing", content: "Professional business cards, letterheads, and more." },
    ]
  },
]

export default function AboutServicesPage() {
  return (
    <>
      <MainSection />
      <div className="container mx-auto px-4 mt-12">
        {/* Section Header for all ServiceBlocks */}
        <div className="mb-10 mx-2 md:mx-8 lg:mx-16 lg:pl-[58px]">
          <div className="text-xs font-extrabold font-nunito text-[#006D9F] uppercase mb-1 tracking-wider">Innovative Digital Solutions</div>
          <h2 className="text-2xl font-extrabold md:text-3xl font-nunito mb-2">
            <span className="text-black">COMPREHENSIVE</span>{" "}
            <span className="text-[#006D9F]">DIGITAL SOLUTION</span>{" "}
            <span className="text-black">FOR YOUR</span>
            <br />
            <span className="text-black">BUSINESS GROWTH</span>
          </h2>
        </div>
        {/* Service Blocks in zig-zag layout: reverse={idx % 2 === 1} */}
        <div className="mx-2 md:mx-8 lg:mx-16">
          {SERVICES_DATA.map((service, idx) => (
            <ServiceBlock
              key={service.title}
              title={service.title}
              imageSrc={service.imageSrc}
              accordionItems={service.accordionItems}
              reverse={idx % 2 === 1}
            />
          ))}
        </div>
      </div>
    </>
  )
}
