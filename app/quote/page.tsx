import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MessageCircle, AtSign } from "lucide-react"
import Image from "next/image"

export default function GetQuotePage() {
  return (
    <section className="relative w-full" style={{ aspectRatio: '826/434' }}>
      {/* Full Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="/images/contact us-2.jpg" 
          alt="Communication background" 
          fill 
          className="object-contain" 
          priority 
          sizes="100vw"
        />
      </div>

      {/* White to Transparent Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent z-10" />

      {/* Floating Icons Overlay */}
      {/* <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4">
          <Phone className="w-8 h-8 text-[#1b8bf9] opacity-20" />
        </div>
        <div className="absolute top-1/3 right-1/4">
          <Mail className="w-8 h-8 text-[#1b8bf9] opacity-20" />
        </div>
        <div className="absolute bottom-1/4 left-1/3">
          <MessageCircle className="w-8 h-8 text-[#1b8bf9] opacity-20" />
        </div>
        <div className="absolute bottom-1/3 right-1/3">
          <AtSign className="w-8 h-8 text-[#1b8bf9] opacity-20" />
        </div>
      </div> */}

      {/* Content Container */}
      <div className="relative z-20 container mx-auto h-full flex flex-col lg:flex-row items-start px-4 md:px-10 lg:px-16 pt-0 pb-4 lg:gap-[40px] lg:ml-[4.8%]">
        {/* Left Side: Form */}
        <div className="w-full lg:w-[45%] flex flex-col gap-3">
          <div className="flex flex-col gap-4 mt-6 mb-10 w-full">
            <div className="mt-7 font-bold">
              <h1 className="mt-5 text-lg font-nunito text-[#006D9F]">LET'S DISCUSS YOUR PROJECT!</h1>
            </div>

            <form className="space-y-3">
              {/* Name and Phone in same row */}
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Name*
                  </Label>
                  <Input
                    id="name"
                    placeholder="   Name"
                    className="w-full border border-gray-300 rounded-full p-1 text-gray-900 focus:ring-2 focus:ring-[#1b8bf9] h-10 text-sm"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone*
                  </Label>
                  <Input
                    id="phone"
                    placeholder="   +1 (111) 111-1234"
                    className="w-full border border-gray-300 rounded-full p-1 text-gray-900 focus:ring-2 focus:ring-[#1b8bf9] h-10 text-sm"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email*
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="   example@email.com"
                  className="w-full border border-gray-300 rounded-full p-1 text-gray-900 focus:ring-2 focus:ring-[#1b8bf9] h-10 text-sm"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                  Company Name
                </Label>
                <Input
                  id="company"
                  placeholder="  Company Name"
                  className="w-full border border-gray-300 rounded-full p-1 text-gray-900 focus:ring-2 focus:ring-[#1b8bf9] h-10 text-sm"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service" className="text-sm font-medium text-gray-700">
                  Service*
                </Label>
                <select
                  id="service"
                  name="service"
                  className="w-full border border-gray-300 rounded-full p-1 text-gray-900 focus:ring-2 focus:ring-[#1b8bf9] h-10 text-sm"
                  required
                >
                  <option value="">   Choose service...</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-sm font-medium text-[#95ABB9]">
                  Subservice*
                </Label>
                <Input
                  id="description"
                  placeholder="  Choose subservice..."
                  className="bg-gray-100 w-full border border-[#95ABB9] rounded-full p-1 text-gray-900 focus:ring-2 focus:ring-[#1b8bf9] h-10 text-sm"
                />
              </div>

              <div className="py-2">
                <Label className="-mt-2 text-sm font-medium text-[#084C6B] flex items-center gap-2">
                  Drop a file
                  <Image
                    src="/images/footer/load file.png"
                    alt="Upload file icon"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </Label>
              </div>

              <div className="pt-6 flex justify-end">
                <Button
                  type="submit"
                  className="-mt-10 bg-gray-600 hover:bg-gray-700 text-white px-16 py-2.5 text-sm rounded-full"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side: Reserved space */}
        <div className="hidden lg:block w-full lg:w-[55%] h-full"></div>
      </div>
    </section>
  )
}
