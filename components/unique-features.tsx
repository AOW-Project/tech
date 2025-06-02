import Image from "next/image"

const uniqueFeatures = [
  {
    iconImage: "/images/faetures/1.png", // Replace with your actual image path
    title: "ADAPT SOLUTIONS, RATHER THAN TEMPLATES",
    description:
      "Initially we understand our customers' concerns and requirements, services, and others, then after we progress with the channeled works that help in excellent results.",
  },
  {
    iconImage: "/images/faetures/2.png", // Fixed: removed extra slash
    title: "END-TO-END SERVICES",
    description:
      "We offer services from social media posters to comprehensive digital marketing. We manage go for all your digital requirements. We ensure effective strategies that rely on success for the growth and upliftment of your business.",
  },
  {
    iconImage: "/images/faetures/3.png", // Replace with your actual image path
    title: "TRACK RECORD SINCE INCEPTION",
    description:
      "With a span of two years, we have served 85+ customers and still counting. We have worked with various streams proficiently in empowering businesses.",
  },
  {
    iconImage: "/images/faetures/4.png", // Replace with your actual image path
    title: "CUSTOMER SUPPORT",
    description:
      "We provide 24/7 support, ensuring our customers receive prompt assistance and a seamless experience at any time of the day.",
  },
  {
    iconImage: "/images/faetures/5.png", // Replace with your actual image path
    title: "INNOVATION",
    description: "To stay ahead in the competition, we use cutting-edge technologies for the process of our functions.",
  },
  {
    iconImage: "/images/faetures/6.png", // Replace with your actual image path
    title: "AFFORDABILITY",
    description:
      "Our pricing comforts the customers as we are concerned about making digital services available to everyone.",
  },
]

export default function UniqueFeatures() {
  return (
    <section className="py-8 md:py-10 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold mb-3 bg-blue-50 text-blue-600 border-blue-200">
            EXCEPTIONAL FEATURES
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            WHAT MAKES AOW UNIQUE COMPARED TO OTHERS?
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl leading-relaxed">
            We stand out blending with a team of experts working all together. Client-first approach and innovation
            makes us different from others. So here are a few points below:
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {uniqueFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors duration-300 p-2">
                <Image
                  src={feature.iconImage || "/placeholder.svg"}
                  alt={feature.title}
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain filter brightness-0 invert"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">{feature.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
