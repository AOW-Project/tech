import Image from "next/image";

const trustedCompanies = [
  { name: "Zoom", logo: "/images/trusted/zoom 1.png" },
  { name: "AWS", logo: "/images/trusted/aws 1.png" },
  { name: "Apple", logo: "/images/trusted/apple 1.png" },
  { name: "Microsoft Azure", logo: "/images/trusted/microsoft_azure 1.png" },
  { name: "Amazon", logo: "/images/trusted/amazon 1.png" },
];

export default function TrustedCompanies() {
  return (
    <section
      className="bg-no-repeat bg-cover bg-center py-[24px] "
      style={{ backgroundImage: 'url("/images/bg image.png")' }}
    >
      <div className="max-w-[1440px] h-[148px] mx-auto px-[24px]">
        <div className="flex items-center justify-start h-[100px] gap-x-[160px]">
          {trustedCompanies.map((company, index) => {
            let customWidth = 100;
            let customHeight = 100;

            if (company.name === "Apple") {
              customWidth = 140;
              customHeight = 110;
            } else if (company.name === "Microsoft Azure") {
              customWidth = 150;
              customHeight = 110;
            } else if (company.name === "Amazon") {
              customWidth = 140;
              customHeight = 110;
            }

            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-black"
                style={{ width: `${customWidth}px`, height: `${customHeight}px` }}
              >
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  width={customWidth}
                  height={customHeight}
                  className="object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
