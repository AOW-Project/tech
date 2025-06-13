'use client';

import React from "react";
import Image from 'next/image';
import { useState } from 'react';
import { CheckCircle, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import MultiStepForm from "@/components/MultiStepForm"; 
import {Mail, Phone} from 'lucide-react';

import { Users, Zap, Shield, HeadphonesIcon } from "lucide-react"


export default function ServiceV1Page() {
  const [email, setEmail] = useState('');

  const benefits = [
    {
      iconImage: "/images/v1/1.png",
      title: "TAILORED TO YOUR BUSINESS",
      description:
        "Your app is built from scratch to meet your exact business needs — not forced into a pre-made mold. Every detail reflects your goals, operations, and customer expectations. ",
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
      
              <div className="relative z-20 w-full h-full flex flex-col lg:flex-row items-start px-4 md:px-10 lg:px-16 pt-6 pb-4 lg:gap-[40px] ml-7">
                <div className="w-full max-w-xl flex flex-col gap-3">
                  <h2 className="text-[40px] text-[#000000] font-extrabold leading-snug mt-12 font-nunito mt-1 ">
                    <span >CUSTOM APP </span>
                    <span >DEVELOPMENT</span>
                  </h2>
      
                  <p className="text-sm text-[#000000] font-inter  leading-relaxed max-w-[90%] font-medium">
                    Our user-friendly custom-built apps are designed to provide a seamless experience.
                    From an idea to innovation, we deliver solutions indulged with your business goals in enhancing engagement
                  </p>
      
                  <div className="flex flex-wrap gap-x-[0.10rem] gap-y-2 text-[13.5px]">
                    {[
                      "Comparative growth",
                      "High-Performing Mobile-Friendly Apps",
                      "Web Development",
                      "Enticing engagement",
                    ].map((text, index) => (
                      <div key={index} className="w-[35%] flex items-start">
                        <Image
                          src="/images/arrow.svg"
                          alt="checkmark"
                          width={16}
                          height={16}
                          className="mt-1 mr-2"
                        />
                        <span className="text-black font-medium whitespace-nowrap">{text}</span>
                      </div>
                    ))}
                  </div>
      
                  <div className="border border-[#006D9F] rounded-xl p-4 flex flex-col gap-4 mt-1 mb-20 w-full min-h-[293px]">
                    <MultiStepForm />
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
                In today's fast-paced digital world, a website alone is no longer enough. Mobile applications are becoming essential tools for business growth and customer engagement. We develop custom apps that match your goals and bring real value to your company — no matter the industry.
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
        <section className="py-[140px] px-6 md:px-24 flex justify-center bg-gray-50" 
        style={{ backgroundImage: 'url("/images/bg.png")' }}>
        <div className="w-[1344px] h-[464px] flex flex-col lg:flex-row items-start gap-[24px]">
            {/* Left Side: Title and Image */}
            <div className="w-full lg:w-1/2 h-full flex flex-col">
            {/* Title Section */}
            <div className="mb-6">
                <h2 className="text-sm font-bold text-[#006D9F]

                 uppercase mb-4">WHY CHOOSE US?</h2>
                <h3 className="text-4xl font-bold text-[#1F2937]">
                WHY WE'RE <span className="text-[#006D9F]
                ">DIFFERENT</span>
                </h3>
            </div>
            {/* Image Section */}
            <div className="flex-1 flex justify-center items-center">
                <Image
                src="/images/v1/why-choose.png" // Ensure this path is correct
                alt="Magnifying glass over code interface"
                width={660} // Image width
                height={464} // Image height
                className="rounded-[24px] w-full h-auto object-contain max-w-[660px]  transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
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

     <section className="bg-white py-[120px] px-6 md:px-24 flex justify-center">
        <div className="max-w-[1344px] w-full flex flex-col ">
            <div className="text-center md:text-left mb-4">
            <p className="text-sm font-bold text-[#006D9F] uppercase mb-1">RECENT WORKS</p>
            <h2 className="text-4xl font-nunito font-extrabold text-[#1F2937]">
                OUR LATEST <span className="text-[#006D9F]">PROJECTS </span>IN ACTION
            </h2>
            </div>

            {/* Project 1: AUTOSQUARE ECOMMERCE WEBSITE */}
            <div className="flex flex-col lg:flex-row items-center gap-[40px]">
            <div className="w-full lg:w-1/2 flex justify-center mt-5">
                <Image
                src="/images/v1/auto.png"
                alt="Autosquare E-commerce Website"
                width={672}
                height={470}
                className="w-full h-auto object-contain transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                />
            </div>
            <div className="w-full lg:w-1/2 font-inter flex flex-col gap-3 mt-4">
                <p className="text-xs font-bold text-gray-600 uppercase">UI/UX DESIGN FOR A TECH STARTUP WEBSITE</p>
                <h3 className="text-2xl font-nunito font-extrabold tick-[#1F2937] ">AUTOSQUARE ECOMMERCE WEBSITE</h3>
                <p className="text-black font-inter text-base mb-2">
                We revamped the website of a growing tech startup, focusing on usability and visual aesthetics. By conducting in-depth UI/UX research, we optimized the user journey, ensuring seamless navigation and higher engagement. Our redesign boosted brand identity while maintaining a clean and functional layout.
                </p>
                <p className="font-semibold text-black -mt-3">What We Did:</p>
                <ul className="list-none space-y-1">
                <li className="flex items-start gap-2 text-black">
                    <Image src="/images/about/check.png" alt="check" width={20} height={20} className="flex-shrink-0 mt-1" />
                    Conducted UX research and competitor analysis
                </li>
                <li className="flex items-start gap-2 text-black">
                    <Image src="/images/about/check.png" alt="check" width={20} height={20} className="flex-shrink-0 mt-1" />
                    Created wireframes and interactive prototypes
                </li>
                <li className="flex items-start gap-2 text-black">
                    <Image src="/images/about/check.png" alt="check" width={20} height={20} className="flex-shrink-0 mt-1" />
                    Redesigned the UI with a modern, clean aesthetic
                </li>
                <li className="flex items-start gap-2 text-black">
                    <Image src="/images/about/check.png" alt="check" width={20} height={20} className="flex-shrink-0 mt-1" />
                    Optimized the user journey for better engagement
                </li>
                <li className="flex items-start gap-2 text-black">
                    <Image src="/images/about/check.png" alt="check" width={20} height={20} className="flex-shrink-0 mt-1" />
                    Implemented a mobile-first approach for responsiveness
                </li>
                </ul>
                <p className="text-black text-base ">
                **Results:** Increased session duration by 10% and reduced bounce rates by 35%.
                </p>
                <p className="text-black text-base -mt-3 mb-3">
                Go to site: <a href="https://www.autosquare.com" target="_blank" rel="noopener noreferrer" className="text-[#007BFF] underline">www.autosquare.com</a>
                </p>
            </div>
            </div>

            {/* Project 2: BHARAT SPORTS FOUNDATION */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-[40px] mt-4">
            <div className="w-full lg:w-1/2 flex justify-center mt-8">
                <Image
                src="/images/v1/sports.png"
                alt="Bharat Sports Foundation"
                width={672}
                height={464}
                className="w-full h-auto object-contain transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-3">
                <p className="text-xs font-bold text-gray-600 uppercase font-nunito mt-6">INTEGRATED DIGITAL MARKETING FOR AN E-COMMERCE BRAND</p>
                <h3 className="text-2xl font-nunito font-extrabold text-black mb-2 -mt-2">BHARAT SPORTS FOUNDATION</h3>
                <p className="text-black text-base mb-1">
                We developed and executed a comprehensive digital marketing strategy for an online retail company. This included SEO optimization, targeted social media campaigns, and performance-driven PPC advertising. As a result, we boosted website traffic by 40% and significantly increased conversion rates.
                </p>
                <p className="font-semibold text-black">What We Did:</p>
                <ul className="list-none space-y-1">
                <li className="flex items-start gap-2 text-black">
                    <Image src="/images/about/check.png" alt="check" width={20} height={20} className="flex-shrink-0 mt-1" />
                    Developed a full-funnel digital marketing strategy
                </li>
                <li className="flex items-start gap-2 text-black">
                    <Image src="/images/about/check.png" alt="check" width={20} height={20} className="flex-shrink-0 mt-1" />
                    Improved SEO and optimized website content
                </li>
                <li className="flex items-start gap-2 text-black">
                    <Image src="/images/about/check.png" alt="check" width={20} height={20} className="flex-shrink-0 mt-1" />
                    Launched targeted social media campaigns (Facebook, Instagram, TikTok)
                </li>
                <li className="flex items-start gap-2 text-black">
                    <Image src="/images/about/check.png" alt="check" width={20} height={20} className="flex-shrink-0 mt-1" />
                    Set up Google Ads & retargeting strategies
                </li>
                <li className="flex items-start gap-2 text-black">
                    <Image src="/images/about/check.png" alt="check" width={20} height={20} className="flex-shrink-0 mt-1" />
                    Implemented email marketing automation for abandoned carts
                </li>
                </ul>
                <p className="text-black text-base ">
                **Results:** 40% increase in organic traffic and a 25% boost in conversion rates.
                </p>
                {/* <Link
                href="/projects/bharat-sports"
                className="inline-flex items-center gap-2 text-[#007BFF] hover:text-[#0056b3] transition-colors"
                >
                View Case Study
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7417 8.00004L6.0417 3.30004L7 2.34171L13.6667 8.00004L7 13.6584L6.0417 12.7L10.7417 8.00004Z" fill="currentColor"/>
                </svg>
                </Link> */}
            </div>
            </div>
        </div>
       </section>

        {/*faq section*/}

    <div className="flex items-center justify-center w-full overflow-x-auto">
      <section
      className="flex items-center justify-center w-full max-w-[2500px] h-[566px] 
                py-[100px] px-[8px] gap-2
                bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/bg.png")' }}
    >
    <div className="flex flex-col items-center justify-center" style={{ width: '1300px', height: '286px', gap: '24px' }}>
      {/* Heading Section */}
      <div className="text-center">
        <p className="font-nunito font-extrabold text-[16px] leading-[140%] tracking-normal uppercase text-[#006D9F] text-left mb-2 w-[1076px] h-[22px]">
          FAQ
        </p>
        <h2 className="font-nunito font-extrabold text-[48px] leading-[140%] tracking-normal uppercase text-gray-900 w-[1076px] h-[67px] text-left">
          GOT QUESTIONS? WE'VE GOT <span className="text-[#006D9F]">ANSWERS</span>
        </h2>
      </div>

      {/* Grid Section for FAQ Items */}
      <div className="grid md:grid-cols-2 gap-5 w-[1076px] h-[168px]">
        <div
          className="flex justify-between items-center w-[528px] h-[56px] gap-6 pt-4 pb-4 pl-4 pr-4 border-b"
          style={{ borderColor: '#A7BDCB' }}
        >
          <p className="font-inter font-bold text-[16px] leading-[120%] tracking-normal uppercase text-gray-900 text-left">
            HOW LONG DOES IT TAKE TO BUILD A CUSTOM APP?
          </p>
          <Image
            src="/images/plus.png"
            alt="Expand"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>

        <div
          className="flex justify-between items-center w-[528px] h-[56px] gap-6 pt-4 pb-4 pl-4 pr-4 border-b"
          style={{ borderColor: '#A7BDCB' }}
        >
          <p className="font-inter font-bold text-[16px] leading-[120%] tracking-normal uppercase text-gray-900 text-left">
            DO YOU OFFER SUPPORT AFTER THE APP IS LAUNCHED?
          </p>
          <Image
            src="/images/plus.png"
            alt="Expand"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>

        <div
          className="flex justify-between items-center w-[528px] h-[56px] gap-6 pt-4 pb-4 pl-4 pr-4 border-b"
          style={{ borderColor: '#A7BDCB' }}
        >
          <p className="font-inter font-bold text-[16px] leading-[120%] tracking-normal uppercase text-gray-900 text-left">
            HOW MUCH DOES CUSTOM APP DEVELOPMENT COST?
          </p>
          <Image
            src="/images/plus.png"
            alt="Expand"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>

        <div
          className="flex justify-between items-center w-[528px] h-[56px] gap-6 pt-4 pb-4 pl-4 pr-4 border-b"
          style={{ borderColor: '#A7BDCB' }}
        >
          <p className="font-inter font-bold text-[16px] leading-[120%] tracking-normal uppercase text-gray-900 text-left">
            WILL I OWN THE SOURCE CODE?
          </p>
          <Image
            src="/images/plus.png"
            alt="Expand"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>

        <div
          className="flex justify-between items-center w-[528px] h-[56px] gap-6 pt-4 pb-4 pl-4 pr-4 border-b"
          style={{ borderColor: '#A7BDCB' }}
        >
          <p className="font-inter font-bold text-[16px] leading-[120%] tracking-normal uppercase text-gray-900 text-left">
            CAN YOU WORK WITH MY EXISTING SYSTEM OR SOFTWARE?
          </p>
          <Image
            src="/images/plus.png"
            alt="Expand"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>

        <div
          className="flex justify-between items-center w-[528px] h-[56px] gap-6 pt-4 pb-4 pl-4 pr-4 border-b"
          style={{ borderColor: '#A7BDCB' }}
        >
          <p className="font-inter font-bold text-[16px] leading-[120%] tracking-normal uppercase text-gray-900 text-left">
            CAN YOU HELP WITH DESIGN AND UX TOO?
          </p>
          <Image
            src="/images/plus.png"
            alt="Expand"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  </section>
</div>



{/*contact*/}
<div className="w-full overflow-x-auto">
  <section
    className="bg-white"
    style={{
      maxWidth: '1920px',
      width: '100%',
      height: '500px',
      padding: '80px 96px 0px', // Increased left and right padding from 64px to 96px
    }}
  >
    <div className="w-full mx-auto">
      <div
        className="grid lg:grid-cols-2 gap-6 items-start"
        style={{
          maxWidth: '1344px',
          width: '100%',
          height: '401px',
        }}
      >
        {/* Left Column */}
        <div>
          <div className="mb-8">
            <p className="text-[16px] font-medium text-[#006D9F] mb-2">CONTACT US</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              GET IN TOUCH <span className="text-[#006D9F]">WITH US!</span>
            </h2>
          </div>

          <div className="mb-8">
            <p className="text-black leading-relaxed">
              Post your project request, information about the project details, etc., by filling in the form. We
              will get in touch to get the respective team and revert to you within a couple of minutes.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-[#006D9F]" />
                    <span className="text-black text-sm font-bold">+91 8073450249</span>
                    <span className="text-black text-sm font-medium">INDIA</span>
            </div>
            <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#006D9F]" />
                  <span className="text-gray-900 text-sm font-bold">support@aow.co.in</span>
                </div>

            <div className="flex space-x-4 mt-4">
              <div className="w-8 h-8 rounded flex items-center justify-center">
                <Image
                  src="/images/form/1.png"
                  alt="Twitter"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <div className="w-8 h-8 rounded flex items-center justify-center">
                <Image
                  src="/images/form/2.png"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <div className="w-8 h-8 rounded flex items-center justify-center">
                <Image
                  src="/images/form/3.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <div className="w-8 h-8 rounded flex items-center justify-center">
                <Image
                  src="/images/form/4.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <div className="w-8 h-8 rounded flex items-center justify-center">
                <Image
                  src="/images/form/5.png"
                  alt="YouTube"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <div className="w-8 h-8 rounded flex items-center justify-center">
                <Image
                  src="/images/form/6.png"
                  alt="Whatsapp"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div
          className="bg-white border border-gray-300 rounded-[14px] p-6"
          style={{
            width: '600px',
            height: '300px',
            gap: '24px',
          }}
        >
          <MultiStepForm />
        </div>
      </div>
    </div>
  </section>
</div>
    </div>
  )
}
