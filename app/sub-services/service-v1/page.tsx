'use client';

import Image from 'next/image';
import { useState } from 'react';
import { CheckCircle, ChevronRight } from 'lucide-react';
import Link from 'next/link';


import { Users, Zap, Shield, HeadphonesIcon } from "lucide-react"

export default function ServiceV1Page() {
  const [email, setEmail] = useState('');

  const benefits = [
    {
      iconImage: "/images/v1/1.png",
      title: "TAILORED TO YOUR BUSINESS",
      description:
        "Your app is built from scratch to meet your exact business needs — not forced into a pre-made mold. Every detail reflects your goals, operations, and customer expectations.",
      bgColor: "bg-white",
    },
    {
      iconImage: "/images/v1/2.png",
      title: "INCREASED EFFICIENCY",
      description:
        "Automate repetitive tasks, streamline processes, and reduce human errors. Custom software helps your team work smarter, not harder.",
      bgColor: "bg-[#F4FBFF]",
    },
    {
      iconImage: "/images/v1/3.png",
      title: "USER-CENTERED DESIGN",
      description:
        "We focus on intuitive, easy-to-use interfaces that improve the user experience. Happy users mean higher engagement and better results.",
      bgColor: "bg-white",
    },
    {
      iconImage: "/images/v1/4.png",
      title: "SCALABILITY & SECURITY",
      description:
        "Your app is built to grow with you — from MVP to enterprise level. We use secure architectures and best practices to keep your data safe.",
      bgColor: "bg-[#F4FBFF]",
    },
    {
      iconImage: "/images/v1/5.png",
      title: "SEAMLESS INTEGRATIONS",
      description:
        "Connect your app with your existing tools — CRMs, ERPs, analytics platforms, payment gateways, and more. Everything works together in one smooth ecosystem.",
      bgColor: "bg-white",
    },
    {
      iconImage: "/images/v1/6.png",
      title: "FULL CONTROL & FLEXIBILITY",
      description:
        "You decide how your app looks, functions, and evolves. We keep you involved at every step, so the final product is exactly what you need.",
      bgColor: "bg-[#F4FBFF]",
    },
  ];
 
  const whyDifferentPoints = [
    {
      title: 'EXPERIENCED TEAM',
      description: 'Our developers, designers, and project managers bring years of hands-on experience in building successful digital products across industries.'
    },
    {
      title: 'FAST TURNAROUND',
      description: 'We deliver projects quickly without compromising quality — thanks to streamlined processes and agile development.'
    },
    {
      title: 'QUALITY GUARANTEE',
      description: 'Clean code, thoughtful design, and thorough testing ensure your product is reliable, scalable, and ready for real users.'
    },
    {
      title: 'POST-LAUNCH SUPPORT',
      description: 'We\'re here even after launch — offering updates, maintenance, and improvements to keep your app running smoothly.'
    },
  ];

  return (
    <div className="font-inter text-[#1F2937]">

      {/* Hero Section */}

        <div className="relative max-w-full lg:max-w-[2000px] mx-auto h-[520px] md:h-auto overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent z-10" />
              <Image
                src="/images/home page/1.png"
                alt="App Development Background"
                fill
                className="object-cover"
                priority
              />
      
              <div className="relative z-20 w-full h-full flex flex-col lg:flex-row items-start px-4 md:px-10 lg:px-16 pt-6 pb-4 lg:gap-[40px]">
                <div className="w-full max-w-xl flex flex-col gap-3">
                  <h2 className="text-[26px] font-bold leading-snug mt-1 mb-1">
                    <span className="text-[#007CC2]">APP </span>
                    <span className="text-black">DEVELOPMENT</span>
                  </h2>
      
                  <p className="text-[13.5px] text-black leading-normal mb-2">
                    Our user-friendly and scalable apps are designed to provide a
                    seamless experience. From ideation to launch, we build
                    high-performing mobile-friendly platforms for all your business
                    goals.
                  </p>
      
                  <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-[13.5px]">
                    {[
                      "Comparative growth",
                      "High-Performing Mobile-Friendly Apps",
                      "Web Development",
                      "Enticing engagement",
                    ].map((text, index) => (
                      <div key={index} className="flex items-start">
                        <Image
                          src="/images/arrow.svg"
                          alt="checkmark"
                          width={16}
                          height={16}
                          className="mt-1 mr-2"
                        />
                        <span className="text-black font-medium">{text}</span>
                      </div>
                    ))}
                  </div>
      
                  <div className="border border-[#ADD8E6] rounded-md p-4 bg-white shadow-md flex flex-col gap-4 mt-3 w-full">
                    <div className="flex justify-between w-full">
                      <div className="h-[2px] w-1/3 bg-[#007CC2]"></div>
                      <div className="h-[2px] w-1/3 bg-gray-300 mx-1"></div>
                      <div className="h-[2px] w-1/3 bg-gray-300"></div>
                    </div>
      
                    <div>
                      <p className="text-[13px] font-semibold text-black">
                        LET’S CREATE SOMETHING EXTRAORDINARY TOGETHER!
                      </p>
                      <p className="text-[13px] text-[#007CC2] font-semibold uppercase mt-1">
                        YOUR JOURNEY TOWARDS EXCELLENCE STARTS HERE
                      </p>
                    </div>
      
                    <div className="flex flex-col gap-3">
                      <div>
                        <label
                          htmlFor="services-select"
                          className="block text-[13px] font-medium mb-1 text-black"
                        >
                          Services<span className="text-red-500">*</span>
                        </label>
                        <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-black">
                          <option>App Development</option>
                        </select>
                      </div>
      
                      <div>
                        <label
                          htmlFor="subservices-select"
                          className="block text-[13px] font-medium mb-1 text-black"
                        >
                          Subservices<span className="text-red-500">*</span>
                        </label>
                        <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-black">
                          <option>Choose subservice...</option>
                        </select>
                      </div>
      
                      <button className="bg-[#004C78] hover:bg-[#003B60] text-white px-6 py-2 rounded text-sm w-fit self-start transition duration-200">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
      
                <div className="hidden lg:block w-full lg:w-1/2 h-full flex items-center justify-center pointer-events-none">
                  {/* Optional image here */}
                </div>
              </div>
        </div>

      {/* Benefits Section */}
      <section className="w-full flex justify-center bg-white py-[100px] font-inter">
        <div className="w-[1344px] px-4 md:px-24 flex flex-col gap-[40px]">

          {/* Top Content */}
          <div className="flex flex-col gap-[24px] w-full h-[231px] font-nunito">
            <p className="text-xs font-semibold px-3 py-1 w-fit bg-blue-50 border border-[#006D9F] text-[#084C6B] rounded-full uppercase">
              CUSTOM APP DEVELOPMENT
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug">
              WHAT YOU GET WITH CUSTOM APP DEVELOPMENT
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-black text-base leading-relaxed">
              <p>
                In today’s fast-paced digital world, a website alone is no longer enough. Mobile applications are becoming essential tools for business growth and customer engagement. We develop custom apps that match your goals and bring real value to your company — no matter the industry.
              </p>
              <p>
                With a mobile app, you can enhance communication with clients and streamline internal workflows. Our team of experienced developers ensures your app is secure, scalable, and intuitive — built for your long-term success.
              </p>
            </div>
          </div>

          {/* Benefit Cards */}
          <div className="w-full h-[436px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {benefits.map((item, index) => (
              <div
                key={index}
                className={`rounded-[24px] p-6 border border-[#006D9F]  ${item.bgColor} transition-all duration-300`}
              >
                {/* Icon and Title in a single line */}
                <div className="flex items-center gap-2 mb-4"> {/* Added flex container */}
                  {/* Icon */}
                  <div className="w-10 h-10 relative">
                    <Image
                      src={item.iconImage}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {/* Title */}
                  <h3 className="text-md font-bold text-black uppercase leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-black text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Workflow Section */}
     <section className="bg-white py-16 px-6 md:px-24" 
      style={{ backgroundImage: "url('/images/bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="max-w-7xl mx-auto font-nunito">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-sm font-bold text-[#006D9F]  uppercase mb-4">OUR WORKFLOW</h2>
            <h3 className="text-[48px] font-bold text-[#1F2937]">FROM IDEA TO RESULT</h3>
          </div>

          {/* Workflow Steps Container */}
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-16 w-full font-inter font-[16px]">
            {/* Horizontal Timeline Line (Desktop Only) */}
            <div className="absolute hidden md:block w-full h-1 bg-[#E0E0E0] bottom-0 left-0 right-0">
                {/* Active part of the line */}
                <div className="absolute top-0 left-0 h-full w-1/2 bg-[#006D9F]"></div> {/* Covers 2 steps out of 4 */}
            </div>

            {[
              {
                number: 1,
                title: 'DISCOVERY',
                description: 'We dive into your goals, audience, and challenges to understand what truly matters.',
                active: true,
              },
              {
                number: 2,
                title: 'STRATEGY & PLANNING',
                description: 'We craft a focused plan with priorities, timelines, and clear direction.',
                active: true,
              },
              {
                number: 3,
                title: 'EXECUTION',
                description: 'Our team brings the plan to life — through design, development, or marketing.',
                active: false,
              },
              {
                number: 4,
                title: 'SUPPORT & GROWTH',
                description: 'After launch, we stay with you — optimizing and scaling as your needs evolve.',
                active: false,
              },
            ].map((step, index) => (
              <div key={step.number} className="flex flex-col items-start text-left w-full relative pb-8 md:pb-12">
                {/* Number */}
                <h4 className={`text-6xl font-bold mb-4 md:mb-2 
                                 ${step.active ? 'text-[#1F2937]' : 'text-[#D9D9D9]'}`}>
                  {step.number}
                </h4>
                {/* Title */}
                <p className={`text-xl font-semibold mb-2 
                               ${step.active ? 'text-[#1F2937]' : 'text-[#A0AEC0]'}`}>
                  {step.title}
                </p>
                {/* Description */}
                <p className={`text-base 
                               ${step.active ? 'text-gray-600' : 'text-gray-500'}`}>
                  {step.description}
                </p>

                {/* Timeline Dot positioned at the very bottom, relative to the step container for alignment */}
                <div className={`absolute hidden md:block w-5 h-5 rounded-full border-4 -bottom-[10px] 
                                  ${step.active ? 'border-[#006D9F]  bg-white' : 'border-[#D9D9D9] bg-white'} 
                                  ${index === 0 && 'left-0 transform -translate-x-1/2'} 
                                  ${index === 1 && 'left-full transform -translate-x-1/2'} 
                                  ${index === 2 && 'left-full transform -translate-x-1/2'} 
                                  ${index === 3 && 'left-full transform -translate-x-1/2'}`}>
                </div>

                {/* Vertical Line for mobile (positioned relative to the step container, top-left) */}
                <div className="absolute md:hidden left-0 top-0 w-0.5 h-full bg-[#BFDBFE]"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/*technologies*/}
      <section className="bg-white py-[140px] px-6 md:px-24"> {/* Adjusted padding-left and padding-right */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row" style={{ gap: '40px' }}> {/* Removed fixed height, adjusted gap */}
          {/* Left Column for Text Content */}
          <div className="flex flex-col items-start text-left w-full md:w-1/2">
            <h2 className="text-sm font-bold text-[#006D9F]  uppercase mb-4">TECHNOLOGIES</h2>
            <h3 className="text-4xl font-bold text-[#1F2937] mb-6">BUILDING WITH <span className="text-[#006D9F] ">THE BEST TOOLS</span></h3>
            <p className="text-black text-lg">
              We use a wide range of cutting-edge technologies to ensure your project adheres to the highest standards. From mobile app
              development to robust backend systems, our team selects the best tools for each specific need, guaranteeing top-notch
              performance, flexibility, and future scalability. By choosing the right technologies, we ensure your product is delivered
              efficiently and effectively. With our expertise, we turn your ideas into impactful, high-quality digital products.
            </p>
          </div>

          {/* Right Column for Technology Icons */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                { src: '/images/v1/react.png', alt: 'React' },
                { src: '/images/v1/swift.png', alt: 'Swift' },
                { src: '/images/v1/larvel.png', alt: 'Laravel' },
                { src: '/images/v1/kotlin.png', alt: 'Kotlin' },
                { src: '/images/v1/flutter.png', alt: 'Flutter' },
                { src: '/images/v1/db.png', alt: 'Django' },
                { src: '/images/v1/mongo.png', alt: 'MongoDB' },
                { src: '/images/v1/sql.png', alt: 'PostgreSQL' },
              ].map((tech, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-4">
                  <Image src={tech.src} alt={tech.alt} width={60} height={60} className="mb-2" />
                  <p className="text-gray-700 text-sm font-semibold">{tech.alt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*why choose us*/}
        <section className="py-[140px] px-6 md:px-24 flex justify-center bg-gray-50">
        <div className="w-[1344px] h-[464px] flex flex-col lg:flex-row items-start gap-[24px]">
            {/* Left Side: Title and Image */}
            <div className="w-full lg:w-1/2 h-full flex flex-col">
            {/* Title Section */}
            <div className="mb-6">
                <h2 className="text-sm font-bold text-[#007BFF] uppercase mb-4">WHY CHOOSE US?</h2>
                <h3 className="text-4xl font-bold text-[#1F2937]">
                WHY WE'RE <span className="text-[#007BFF]">DIFFERENT</span>
                </h3>
            </div>
            {/* Image Section */}
            <div className="flex-1 flex justify-center items-center">
                <Image
                src="/images/v1/why-choose.png" // Ensure this path is correct
                alt="Magnifying glass over code interface"
                width={660} // Image width
                height={464} // Image height
                className="rounded-[24px] w-full h-auto object-cover max-w-[660px]"
                />
            </div>
            </div>

            {/* Right Side: Key Points with 5 Horizontal Lines */}
            <div className="w-full lg:w-1/2 h-full flex flex-col justify-center">
            {whyDifferentPoints.map((point, index) => (
                <div
                key={index}
                className={`py-3 ${index < whyDifferentPoints.length - 1 ? 'border-b border-gray-300' : ''}`}
                >
                <div className="flex items-center mb-2">
                    <div className="h-[2px] w-8 bg-black mr-4"></div> {/* Horizontal line */}
                    <h4 className="text-base font-semibold text-black uppercase tracking-wider">{point.title}</h4>
                </div>
                <p className="text-black text-[14px] leading-relaxed">{point.description}</p>
                </div>
            ))}
            </div>
        </div>
        </section>
      {/* RECENT WORKS Section */}

     <section className="bg-white py-[140px] px-6 md:px-24 flex justify-center">
        <div className="max-w-[1344px] w-full flex flex-col gap-[80px]">
            <div className="text-center md:text-left">
            <p className="text-sm font-bold text-[#006D9F] uppercase mb-4">RECENT WORKS</p>
            <h2 className="text-4xl font-bold text-[#1F2937]">
                OUR LATEST <span className="text-[#006D9F]">PROJECTS IN ACTION</span>
            </h2>
            </div>

            {/* Project 1: AUTOSQUARE ECOMMERCE WEBSITE */}
            <div className="flex flex-col lg:flex-row items-center gap-[40px]">
            <div className="w-full lg:w-1/2 flex justify-center">
                <Image
                src="/images/v1/auto.png"
                alt="Autosquare E-commerce Website"
                width={672}
                height={464}
                className="w-full h-auto object-contain"
                />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <p className="text-xs font-bold text-gray-600 uppercase">UI/UX DESIGN FOR A TECH STARTUP WEBSITE</p>
                <h3 className="text-2xl font-bold tick-[#1F2937] mb-2">AUTOSQUARE ECOMMERCE WEBSITE</h3>
                <p className="text-black text-base mb-4">
                We revamped the website of a growing tech startup, focusing on usability and visual aesthetics. By conducting in-depth UI/UX research, we optimized the user journey, ensuring seamless navigation and higher engagement. Our redesign boosted brand identity while maintaining a clean and functional layout.
                </p>
                <p className="font-semibold text-black">What We Did:</p>
                <ul className="list-none space-y-2">
                <li className="flex items-start gap-2 text-black">
                    <span className="flex-shrink-0 mt-1">•</span> {/* Placeholder for your arrow */}
                    Conducted UX research and competitor analysis
                </li>
                <li className="flex items-start gap-2 text-black">
                    <span className="flex-shrink-0 mt-1">•</span> {/* Placeholder for your arrow */}
                    Created wireframes and interactive prototypes
                </li>
                <li className="flex items-start gap-2 text-black">
                    <span className="flex-shrink-0 mt-1">•</span> {/* Placeholder for your arrow */}
                    Redesigned the UI with a modern, clean aesthetic
                </li>
                <li className="flex items-start gap-2 text-black">
                    <span className="flex-shrink-0 mt-1">•</span> {/* Placeholder for your arrow */}
                    Optimized the user journey for better engagement
                </li>
                <li className="flex items-start gap-2 text-black">
                    <span className="flex-shrink-0 mt-1">•</span> {/* Placeholder for your arrow */}
                    Implemented a mobile-first approach for responsiveness
                </li>
                </ul>
                <p className="text-black text-base mt-4">
                **Results:** Increased session duration by 10% and reduced bounce rates by 35%.
                </p>
                <p className="text-black text-base">
                Go to site: <a href="https://www.autosquare.com" target="_blank" rel="noopener noreferrer" className="text-[#007BFF] underline">www.autosquare.com</a>
                </p>
            </div>
            </div>

            {/* Project 2: BHARAT SPORTS FOUNDATION */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-[40px]">
            <div className="w-full lg:w-1/2 flex justify-center">
                <Image
                src="/images/v1/sports.png"
                alt="Bharat Sports Foundation"
                width={672}
                height={464}
                className="w-full h-auto object-contain"
                />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <p className="text-xs font-bold text-gray-600 uppercase">INTEGRATED DIGITAL MARKETING FOR AN E-COMMERCE BRAND</p>
                <h3 className="text-2xl font-bold text-black mb-2">BHARAT SPORTS FOUNDATION</h3>
                <p className="text-black text-base mb-4">
                We developed and executed a comprehensive digital marketing strategy for an online retail company. This included SEO optimization, targeted social media campaigns, and performance-driven PPC advertising. As a result, we boosted website traffic by 40% and significantly increased conversion rates.
                </p>
                <p className="font-semibold text-black">What We Did:</p>
                <ul className="list-none space-y-2">
                <li className="flex items-start gap-2 text-black">
                    <span className="flex-shrink-0 mt-1">•</span> {/* Placeholder for your arrow */}
                    Developed a full-funnel digital marketing strategy
                </li>
                <li className="flex items-start gap-2 text-black">
                    <span className="flex-shrink-0 mt-1">•</span> {/* Placeholder for your arrow */}
                    Improved SEO and optimized website content
                </li>
                <li className="flex items-start gap-2 text-black">
                    <span className="flex-shrink-0 mt-1">•</span> {/* Placeholder for your arrow */}
                    Launched targeted social media campaigns (Facebook, Instagram, TikTok)
                </li>
                <li className="flex items-start gap-2 text-black">
                    <span className="flex-shrink-0 mt-1">•</span> {/* Placeholder for your arrow */}
                    Set up Google Ads & retargeting strategies
                </li>
                <li className="flex items-start gap-2 text-black">
                    <span className="flex-shrink-0 mt-1">•</span> {/* Placeholder for your arrow */}
                    Implemented email marketing automation for abandoned carts
                </li>
                </ul>
                <p className="text-black text-base mt-4">
                **Results:** 40% increase in organic traffic and a 25% boost in conversion rates.
                </p>
                <Link
                href="/projects/bharat-sports"
                className="inline-flex items-center gap-2 text-[#007BFF] hover:text-[#0056b3] transition-colors"
                >
                View Case Study
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7417 8.00004L6.0417 3.30004L7 2.34171L13.6667 8.00004L7 13.6584L6.0417 12.7L10.7417 8.00004Z" fill="currentColor"/>
                </svg>
                </Link>
            </div>
            </div>
        </div>
        </section>
      {/* FAQ Section */}
       <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-blue-600 mb-2">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              GOT QUESTIONS? WE'VE GOT <span className="text-blue-600">ANSWERS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900 pr-4">HOW LONG DOES IT TAKE TO BUILD A CUSTOM APP?</p>
                <span className="text-gray-400 text-xl">+</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900 pr-4">
                  DO YOU OFFER SUPPORT AFTER THE APP IS LAUNCHED?
                </p>
                <span className="text-gray-400 text-xl">+</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900 pr-4">HOW MUCH DOES CUSTOM APP DEVELOPMENT COST?</p>
                <span className="text-gray-400 text-xl">+</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900 pr-4">WILL I OWN THE SOURCE CODE?</p>
                <span className="text-gray-400 text-xl">+</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900 pr-4">
                  CAN YOU WORK WITH MY EXISTING SYSTEM OR SOFTWARE?
                </p>
                <span className="text-gray-400 text-xl">+</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900 pr-4">CAN YOU HELP WITH DESIGN AND UX TOO?</p>
                <span className="text-gray-400 text-xl">+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div>
              <div className="mb-8">
                <p className="text-sm font-medium text-blue-600 mb-2">CONTACT US</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  GET IN TOUCH <span className="text-blue-600">WITH US!</span>
                </h2>
              </div>

              <div className="mb-8">
                <p className="text-gray-600 leading-relaxed">
                  Post your project request, information about the project details, etc., by filling in the form. We
                  will get in touch to get the respective team and revert to you within a couple of minutes.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-gray-900 font-medium">📞 +91 8074849248</span>
                  <span className="text-gray-400">INDIA</span>
                </div>
                <div>
                  <span className="text-blue-600">✉️ support@auxo.in</span>
                </div>
                <div className="flex space-x-4 mt-4">
                  <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                    <span className="text-blue-600 text-sm">f</span>
                  </div>
                  <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                    <span className="text-blue-600 text-sm">in</span>
                  </div>
                  <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                    <span className="text-blue-600 text-sm">@</span>
                  </div>
                  <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                    <span className="text-blue-600 text-sm">ig</span>
                  </div>
                  <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                    <span className="text-blue-600 text-sm">yt</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">LET'S CREATE SOMETHING EXTRAORDINARY TOGETHER!</h3>
                <p className="text-blue-600 font-medium text-sm">YOUR JOURNEY TOWARDS EXCELLENCE STARTS HERE</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Services*</label>
                  <div className="w-full p-3 border border-gray-300 rounded-md bg-white flex justify-between items-center">
                    <span className="text-gray-900">App Development</span>
                    <span className="text-gray-400">▼</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subcategory*</label>
                  <div className="w-full p-3 border border-gray-300 rounded-md bg-white flex justify-between items-center">
                    <span className="text-gray-400">Choose subcategory...</span>
                    <span className="text-gray-400">▼</span>
                  </div>
                </div>

                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-md font-medium">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </div>
  )
}
