import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#042C33] text-white py-6 px-4 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">

        {/* Logo + Description */}
        <div>
          <Image src="/images/footer/footer logo.png" alt="Logo" width={100} height={30} className="mb-3" />
          <p className="text-[14px] text-gray-300 mb-3 leading-relaxed">
            Our social media marketing team crafts custom campaigns aligned with your business objectives.
          </p>
          <div className="flex space-x-2">
            <Image src="/images/vector (9).png" alt="Twitter" width={14} height={14} />
            <Image src="/images/linkdin.svg" alt="LinkedIn" width={14} height={14} />
            <Image src="/images/insta.svg" alt="Instagram" width={14} height={14} />
            <Image src="/images/facebook.svg" alt="Facebook" width={14} height={14} />
            <Image src="/images/youtube.svg" alt="YouTube" width={14} height={14} />
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-[14px] mb-2">OUR SERVICES</h4>
          <ul className="space-y-1 text-[12px] text-gray-300">
            <li>App Development</li>
            <li>Customer Support Services</li>
            <li>Digital Marketing</li>
            <li>Logo Designing</li>
            <li>SEO Services</li>
            <li>Social Media Marketing</li>
            <li>Social Media Poster Design</li>
            <li>Web Designing</li>
            <li>Web Development</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-[14px] mb-2">CONTACT US</h4>
          <div className="text-[12px] text-gray-300 space-y-2">
            <div>
              <span className="font-semibold text-white">E-mail</span><br />
              <span className="inline-flex items-center gap-1">
                <Image src="/images/footer/vector (2).png" alt="Support" width={12} height={12} />
                support@aow.co.in
              </span>
            </div>
            <div>
              <span className="font-semibold text-white">For Sales Queries</span><br />
              <span className="inline-flex items-center gap-1">
                <Image src="/images/footer/EnvelopeSimple.png" alt="Sales" width={12} height={12} />
                sales@aow.co.in
              </span>
            </div>
            <div>
              <span className="font-semibold text-white">Jobs & Careers Queries</span><br />
              <span className="inline-flex items-center gap-1">
                <Image src="/images/footer/SuitcaseSimple.png" alt="HR" width={12} height={12} />
                hr@aow.co.in
              </span>
            </div>
          </div>
        </div>

        {/* Get Quotation Form */}
        <div>
          <h4 className="text-[14px] font-semibold mb-2">GET QUOTATION</h4>
          <form className="border border-[#1B7B8E] rounded-md p-3 text-[12px] text-white space-y-3">
            <h5 className="text-[#00B8E0] font-medium text-[12px]">LET’S DISCUSS YOUR PROJECT!</h5>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Name*"
                className="w-1/2 p-2 rounded-md bg-transparent border border-gray-600 placeholder-gray-400 text-white text-[12px]"
              />
              <input
                type="text"
                placeholder="+91 (111) 123-1234"
                className="w-1/2 p-2 rounded-md bg-transparent border border-gray-600 placeholder-gray-400 text-white text-[12px]"
              />
            </div>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full p-2 rounded-md bg-transparent border border-gray-600 placeholder-gray-400 text-white text-[12px]"
            />
            <select className="w-full p-2 rounded-md bg-transparent border border-gray-600 text-white text-[12px]">
              <option>Choose service....</option>
            </select>
            <select className="w-full p-2 rounded-md bg-transparent border border-gray-600 text-white text-[12px]">
              <option>Choose subservice...</option>
            </select>
            <div className="text-[#00B8E0] text-[12px] underline cursor-pointer flex items-center space-x-1">
              <span>Drop a file</span>
              <Image src="/images/footer/load file.png" alt="info" width={12} height={12} />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#B9B9B9] text-black rounded-md text-[12px] font-medium"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="mt-6 text-center text-[12px] text-gray-400">
        © 2025 AOW Information of Worlds. All rights reserved.
      </div>
    </footer>
  )
}

