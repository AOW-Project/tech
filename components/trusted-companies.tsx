import Image from "next/image"

const trustedCompanies = [
  { name: "Zoom", logo: "/images/trusted/zoom 1.png" },
  { name: "AWS", logo: "/images/trusted/aws 1.png" },
  { name: "Apple", logo: "/images/trusted/apple 1.png" },
  { name: "Microsoft Azure", logo: "/images/trusted/microsoft_azure 1.png" },
  { name: "Amazon", logo: "/images/trusted/amazon 1.png" },
]

export default function TrustedCompanies() {
  return (
    <section className=" bg-gray-50"> {/* Reduced top padding */}
      <div className="container mx-auto px-2 md:px-6 w-[1920px] h-[148px]">
        {/* Optional heading */}
      
        {/* Logo row - evenly distributed across the width with more spacing */}
        <div className="flex justify-between items-center max-w-6xl mx-auto w-[2000px] h-[100px]">
          {trustedCompanies.map((company, index) => (
            <div key={index} className="flex items-center justify-center transition-all duration-300 hover:scale-105">
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} logo`}
                width={120}
                height={40}
                className="h-10 md:h-12 lg:h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                priority={index < 3} // Prioritize first 3 logos for faster loading
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
