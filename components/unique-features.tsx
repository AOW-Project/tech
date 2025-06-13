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
   <section className="bg-white font-inter pt-0 pb-[140px]">
  <div className="max-w-[1344px] mx-auto px-[20px]">
    {/* Header */}
    <div className="mb-10">
      <div className="text-[#084C6B] text-[16px] font-bold uppercase mb-2">
        EXCEPTIONAL FEATURES
      </div>

      <h1 className="text-[48px] font-extrabold leading-[140%] uppercase text-black font-nunito mb-8">
              WHAT MAKES AOW UNIQUE COMPARED TO OTHERS?
       </h1>

      
      <p className="max-w-[774px] text-[16px] font-medium text-black leading-[140%]">
        We stand out blending with a team of experts working all together. Client-first approach and innovation
        makes us different from others. So here are a few points below:
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
      {uniqueFeatures.map((feature, index) => (
        <div
          key={index}
          className="w-full p-[24px] rounded-[24px] border border-[#006D9F] flex flex-col gap-[6px]"
        >
          {/* Icon + Title */}
          <div className="flex items-center gap-[2px] mb-2">
            <div className="w-[40px] h-[40px] rounded-[10px] bg-[#084C6B] flex items-center justify-center">
              <Image
                src={feature.iconImage}
                alt={feature.title}
                width={20}
                height={20}
                className="w-5 h-5 object-contain filter brightness-0 invert"
              />
            </div>
            <h3 className="font-inter font-bold text-[16px] leading-[1.2] uppercase text-black">
              {feature.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-black font-inter font-medium text-[16px] leading-[1.4]">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


  )
}
