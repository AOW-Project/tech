import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MessageCircle, AtSign } from "lucide-react"
import Image from "next/image"

export default function GetQuotePage() {
  return (
    <div className="min-h-screen relative">
      {/* Full Background Image */}
      <Image src="/images/contact us.jpg" alt="Communication background" fill className="object-cover" priority />

      {/* White to Transparent Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-white/80 to-transparent" />

      {/* Floating Icons Overlay - positioned on the right side */}
      <div className="absolute inset-0">
        {/* Phone Icons */}
        <Phone className="absolute top-16 right-20 w-12 h-12 text-white/60 animate-pulse" />
        <Phone className="absolute bottom-32 right-32 w-8 h-8 text-white/40" />

        {/* Email Icons */}
        <Mail className="absolute top-32 right-[25%] w-10 h-10 text-white/50" />
        <AtSign className="absolute top-48 right-32 w-14 h-14 text-white/30" />
        <AtSign className="absolute bottom-48 right-24 w-10 h-10 text-white/50" />

        {/* Message Icons */}
        <MessageCircle className="absolute bottom-20 right-40 w-12 h-12 text-white/40" />
        <MessageCircle className="absolute top-40 right-[35%] w-8 h-8 text-white/60" />

        {/* Additional decorative elements */}
        <div className="absolute top-24 right-[30%] w-4 h-4 bg-white/20 rounded-full animate-bounce" />
        <div className="absolute bottom-40 right-[45%] w-6 h-6 bg-white/15 rounded-full" />
        <div className="absolute top-56 right-16 w-3 h-3 bg-white/25 rounded-full animate-pulse" />
      </div>

      {/* Form Content */}
      <div className="relative z-10 flex items-center justify-start min-h-screen py-16">
        <div className="ml-16 lg:ml-20 p-6" style={{ width: "580px" }}>
          <div className="mb-6">
            <h1 className="text-lg font-bold text-gray-900">LET'S DISCUSS YOUR PROJECT!</h1>
          </div>

          <form className="space-y-4">
            {/* Name and Phone in same row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Name*
                </Label>
                <Input
                  id="name"
                  placeholder="Name"
                  className="w-full bg-white border-gray-300 h-10 text-sm rounded-3xl"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone*
                </Label>
                <Input
                  id="phone"
                  placeholder="+1 (111) 111-1234"
                  className="w-full bg-white border-gray-300 h-10 text-sm rounded-3xl"
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
                placeholder="example@email.com"
                className="w-full bg-white border-gray-300 h-10 text-sm rounded-3xl"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                Company Name
              </Label>
              <Input
                id="company"
                placeholder="Company Name"
                className="w-full bg-white border-gray-300 h-10 text-sm rounded-3xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service" className="text-sm font-medium text-gray-700">
                Service*
              </Label>
              <Select required>
                <SelectTrigger className="w-full bg-white border-gray-300 h-10 text-sm rounded-3xl">
                  <SelectValue placeholder="Choose service..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web-development">Web Development</SelectItem>
                  <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                  <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                  <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                  <SelectItem value="consulting">Consulting</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-sm font-medium text-gray-700">
                Description*
              </Label>
              <Textarea
                id="description"
                placeholder="Describe requirements..."
                className="w-full min-h-[60px] resize-none bg-gray-100 border-gray-300 text-sm rounded-3xl"
              />
            </div>

            <div className="py-2">
              <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
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
                className="bg-gray-600 hover:bg-gray-700 text-white px-16 py-2.5 text-sm rounded-full"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
