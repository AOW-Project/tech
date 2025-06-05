import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export const metadata = {
  title: "Portfolio - NOW UI/UX Design Agency",
  description: "Explore our portfolio of UI/UX design projects that showcase our expertise and creativity.",
}

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold mb-4 bg-[#e6f3f7] text-[#084C6B]">
              Our Work
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#084C6B] mb-6">OUR PORTFOLIO</h1>
            <p className="text-black text-lg leading-relaxed">
              Explore our latest projects and see how we've helped businesses transform their digital experiences
              through exceptional UI/UX design.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg shadow-lg mb-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform group-hover:scale-110 duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                      <p className="text-white/80 text-sm">{item.category}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-[#e6f3f7] text-[#084C6B] px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="text-[#084C6B] text-sm font-medium flex items-center hover:underline"
                  >
                    View Case Study <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#e6f3f7]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#00647D] mb-6">
              READY TO CREATE YOUR SUCCESS STORY?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Let's work together to create a UI/UX design that helps your business achieve its goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-12 px-8 bg-[#084C6B] text-white hover:bg-[#004e63]"
            >
              Start Your Project
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

const portfolioItems = [
  {
    title: "SKILL WIND",
    slug: "skill-wind",
    category: "E-learning Platform",
    description: "A comprehensive e-learning platform with intuitive navigation and engaging user interface.",
    image: "/placeholder.svg?height=400&width=600&text=SKILL+WIND",
    tags: ["UI Design", "UX Design", "Web App"],
  },
  {
    title: "SMART SPORTS",
    slug: "smart-sports",
    category: "Sports Analytics App",
    description: "A data-driven sports analytics application with real-time statistics and interactive dashboards.",
    image: "/placeholder.svg?height=400&width=600&text=SMART+SPORTS",
    tags: ["Mobile App", "Dashboard", "Data Visualization"],
  },
  {
    title: "BRIGHT SPORTS",
    slug: "bright-sports",
    category: "Fitness Tracking App",
    description: "A fitness tracking application that helps users monitor their progress and achieve their goals.",
    image: "/placeholder.svg?height=400&width=600&text=BRIGHT+SPORTS",
    tags: ["Mobile App", "UI Design", "UX Research"],
  },
  {
    title: "FINANCE PRO",
    slug: "finance-pro",
    category: "Financial Management Platform",
    description: "A comprehensive financial management platform for personal and business finance tracking.",
    image: "/placeholder.svg?height=400&width=600&text=FINANCE+PRO",
    tags: ["Web App", "Dashboard", "UI Design"],
  },
  {
    title: "TRAVEL BUDDY",
    slug: "travel-buddy",
    category: "Travel Planning App",
    description: "A travel planning application that helps users discover, plan, and book their perfect vacation.",
    image: "/placeholder.svg?height=400&width=600&text=TRAVEL+BUDDY",
    tags: ["Mobile App", "UI Design", "UX Design"],
  },
  {
    title: "HEALTH CONNECT",
    slug: "health-connect",
    category: "Healthcare Platform",
    description:
      "A healthcare platform connecting patients with doctors for virtual consultations and appointment booking.",
    image: "/placeholder.svg?height=400&width=600&text=HEALTH+CONNECT",
    tags: ["Web App", "Mobile App", "UI/UX Design"],
  },
]
