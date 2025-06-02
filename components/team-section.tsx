import Image from "next/image"

const teamContent = [
  {
    image: "/images/team/team1.png", // Replace with your actual image path
    description:
      "We are passionate about creativity, always exploring new ideas, embracing challenges, and turning trends into results.",
    size: "large",
  },
  {
    image: "/images/team/team2.png", // Replace with your actual image path
    description: "Our team thrives on innovation—testing, learning, and growing to bring the best solutions to life.",
    size: "small",
  },
  {
    image: "/images/team/team3.png", // Replace with your actual image path
    description: "We love what we do: experimenting, creating, and pushing boundaries to achieve meaningful results.",
    size: "large",
  },
]

export default function TeamSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold mb-4 bg-blue-50 text-blue-600 border-blue-200">
            OUR TEAM
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            LET'S GET <span className="text-blue-600">ACQUAINTED</span>
          </h2>
        </div>

        {/* Team Images Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
          {/* Left Large Image */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={teamContent[0].image || "/placeholder.svg?height=400&width=500&text=Team+Creativity"}
                  alt="Team working on creativity"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mt-4 max-w-md">{teamContent[0].description}</p>
            </div>
          </div>

          {/* Center Small Image */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="relative group">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src={teamContent[1].image || "/placeholder.svg?height=300&width=250&text=Team+Innovation"}
                  alt="Team innovation"
                  width={250}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mt-4 text-center">{teamContent[1].description}</p>
            </div>
          </div>

          {/* Right Large Image */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={teamContent[2].image || "/placeholder.svg?height=400&width=500&text=Team+Collaboration"}
                  alt="Team collaboration"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mt-4 max-w-md">{teamContent[2].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
