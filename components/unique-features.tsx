import Image from "next/image"

const uniqueFeatures = [
  {
    iconImage: "/images/faetures/1.png",
    title: "ADAPT SOLUTIONS, RATHER THAN TEMPLATES",
    description:
      "Initially we understand our customers' concerns on their business goals, audience, and others; then after we progress with the channelled works that bring excellent results.",
    bgColor: "bg-[#EAF5FF]", // light blue 1
  },
  {
    iconImage: "/images/faetures/2.png",
    title: "END-TO-END SERVICES",
    description:
      "We offer a range of services—from social media posters to SEO, short videos, and reels. It's a one-stop solution for all your digital needs, tailored to help your brand stand out.",
    bgColor: "bg-white", // light blue 2
  },
  {
    iconImage: "/images/faetures/3.png",
    title: "TRACK RECORD SINCE INCEPTION",
    description:
      "With over two years of experience, we have successfully served 85+ happy clients across various industries, helping them grow and strengthen their online presence.",
    bgColor: "bg-[#EAF5FF]", // repeat color 1
  },
  {
    iconImage: "/images/faetures/4.png",
    title: "CUSTOMER SUPPORT",
    description:
      "With over two years of experience, we have successfully served 85+ happy clients across various industries, helping them grow and strengthen their online presence.",
    bgColor: "bg-white", // repeat color 2
  },
  {
    iconImage: "/images/faetures/5.png",
    title: "INNOVATION",
    description:
      "To stay ahead in a competitive market, we use the latest technologies in every stage of our work process, bringing innovation and efficiency to our services.",
    bgColor: "bg-[#EAF5FF]",
  },
  {
    iconImage: "/images/faetures/6.png",
    title: "AFFORDABILITY",
    description:
      "To stay ahead in a competitive market, we use the latest technologies in every stage of our work process, bringing innovation and efficiency to our services.",
    bgColor: "bg-white",
  },
]

export default function UniqueFeatures() {
  return (
    <section
      className="py-10 bg-cover bg-no-repeat bg-center font-inter bg-white" 

       // Replace with your real path
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold mb-3 bg-blue-50 text-[#084C6B] border-[#006D9F]">
            EXCEPTIONAL FEATURES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            WHAT MAKES AOW UNIQUE COMPARED TO OTHERS?
          </h2>
          <p className="text-black text-lg max-w-4xl leading-relaxed">
            We stand out blending with a team of experts working all together. Client-first approach and innovation
            makes us different from others. So here are a few points below:
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {uniqueFeatures.map((feature, index) => (
            <div
              key={index}
              className={`rounded-[24px] p-6 border border-[#006D9F] ${feature.bgColor} transition-all duration-300`}
            >
              {/* Icon */}
              <div className="w-10 h-10 bg-[#084C6B] rounded-full flex items-center justify-center mb-4">
                <Image
                  src={feature.iconImage}
                  alt={feature.title}
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain filter brightness-0 invert"
                />
              </div>

              {/* Title */}
              <h3 className="text-md font-bold text-black uppercase mb-2 leading-snug">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-black text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
