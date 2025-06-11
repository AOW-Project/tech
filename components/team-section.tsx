import Image from "next/image"

const teamContent = [
  {
    image: "/images/team/team1.png",
    description:
      "We are passionate about creativity, always exploring new ideas, embracing challenges, and turning trends into results.",
    size: "large",
  },
  {
    image: "/images/team/team2.png",
    description:
      "Our team thrives on innovation—testing, learning, and growing to bring the best solutions to life.",
    size: "small",
  },
  {
    image: "/images/team/team3.png",
    description:
      "We love what we do: experimenting, creating, and pushing boundaries to achieve meaningful results.",
    size: "large",
  },
]

export default function TeamSection() {
  return (
    <section
      className="py-[140px] bg-white font-inter"
      style={{ height: "984px" }}
    >
      <div className="max-w-[1344px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12">
          <div
            className="inline-flex items-center px-1 py-0.5 
                text-[#006D9F]
                      font-nunito font-extrabold text-[16px] leading-[140%] 
                      tracking-normal uppercase w-[1344px] h-[22px]">
            OUR TEAM
          </div>

          <h2 className="font-nunito font-extrabold text-[48px] leading-[140%] tracking-normal uppercase text-black w-[1344px] h-[67px] mb-6">
            LET'S GET <span className="text-[#006D9F]">ACQUAINTED</span>
          </h2>

        </div>

        {/* Grid */}
     <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px] items-start h-full">
      {/* Left Large Image + Text */}
      <div className="lg:col-span-5 flex flex-col justify-between h-[max-content]">
        <div className="relative group">
          <div className="w-full max-w-[546px] h-[364px] overflow-hidden rounded-[24px]">
            <Image
              src={teamContent[0].image}
              alt="Team working on creativity"
              width={546}
              height={364}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-inter font-medium text-[16px] leading-[140%] tracking-normal text-black mt-4 max-w-md">
            {teamContent[0].description}
          </p>
        </div>
      </div>
        {/* Center Larger & Elongated Image + Text */}
        <div className="lg:col-span-2 flex flex-col items-center text-center justify-between h-[550px]">
          <p className="font-inter font-medium text-[16px] leading-[140%] tracking-normal text-black mb-4 max-w-[450px]">
            {teamContent[1].description}
          </p>
          <div className="relative group w-full max-w-[832px] h-[520px] overflow-hidden rounded-[24px]">
            <Image
              src={teamContent[1].image}
              alt="Team innovation"
              fill
              className="object-cover rounded-[24px]"
            />
          </div>
        </div>



      {/* Right Large Image + Text */}
      <div className="lg:col-span-5 flex flex-col justify-between h-[max-content]">
        <div className="relative group">
          <div className="w-full max-w-[500px] h-[400px] overflow-hidden rounded-[24px]">
            <Image
              src={teamContent[2].image}
              alt="Team collaboration"
              width={500}
              height={400}
              className="w-full h-full object-cover  rounded-[24px]"
            />
          </div>
          <p className="font-inter font-medium text-[16px] leading-[140%] tracking-normal text-black mt-4 max-w-md">
            {teamContent[2].description}
          </p>
        </div>
      </div>
    </div>


       
      </div>
    </section>
  )
}
