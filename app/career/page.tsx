"use client";
import React, { useState } from "react";


export default function CareerPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const jobs = [
    {
      title: "UI/UX Designer",
      tags: ["Remote, India", "Full time", "Design"],
      category: "Design",
    },
    {
      title: "Sales Manager",
      tags: ["Remote, India", "Full time", "Sales"],
      category: "Sales",
    },
    {
      title: "PR Manager",
      tags: ["Remote, India", "Full time", "Marketing"],
      category: "Marketing",
    },
    {
      title: "Web Developer",
      tags: ["Remote, India", "Full time", "Development"],
      category: "Development",
    },
  ];

  const categories = ["All", "Sales", "Design", "Development", "Marketing"];

  const filteredJobs =
    selectedCategory === "All"
      ? jobs
      : jobs.filter((job) => job.category === selectedCategory);

  return (
    <div className="font-sans">
      {/* Header Section */}
      <section
        className="text-center py-20 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/bg image.png")' }}
      >
        <h2 className="text-2xl md:text-3xl text-gray-600 font-medium tracking-wide">
          CAREER
        </h2>
        <h1 className="text-6xl md:text-7xl font-bold text-black mt-3">
          JOIN OUR <span className="text-[#0B6E99]">TEAM</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 mt-5 max-w-2xl mx-auto">
          Pave your career path with opportunities and innovation
        </p>
        <button className="mt-6 px-8 py-3 bg-[#0B6E99] hover:bg-[#095b7f] text-white rounded-full text-lg transition duration-300">
          See Open Roles
        </button>
      </section>

      {/* Job Positions Section */}
      <section className="py-20 bg-white">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-[#0B6E99]">OUR SERVICES</p>
          <h3 className="text-4xl md:text-5xl font-bold mt-2">
            EMPOWERING YOUR <span className="text-[#0B6E99]">DIGITAL</span> WORLD
          </h3>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#0B6E99] text-white"
                  : "bg-white text-[#0B6E99] border-[#0B6E99]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {filteredJobs.map((job, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl shadow-md p-6 flex justify-between items-center"
            >
              <div>
                <h4 className="text-lg font-semibold mb-3 uppercase">
                  {job.title}
                </h4>
                <div className="flex gap-2 flex-wrap">
                  {job.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#EAF6FB] text-[#0B6E99] text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button className="bg-[#0B6E99] hover:bg-[#095b7f] text-white px-6 py-2 rounded-full flex items-center gap-1 transition">
                Apply <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section
        className="py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/bg image.png")' }}
      >
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-semibold">
            JOB <span className="text-[#0B6E99]">BENEFITS</span> YOU WILL APPRECIATE
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Work-life balance",
            "Career growth",
            "Flexible schedule",
            "Collaborative culture",
            "Training support",
            "Remote option",
          ].map((benefit, i) => (
            <div key={i} className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-2xl font-semibold mb-3">{benefit}</h4>
              <p className="text-md text-gray-600">
                Short description of benefit goes here to highlight what candidates can expect.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-semibold">
            GET IN TOUCH <span className="text-[#0B6E99]">WITH US!</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-5 text-xl text-gray-600">
            <p>Phone: +91-12345-67890</p>
            <p>Email: hr@aow.co.in</p>
            <p>Location: Mumbai, India</p>
          </div>

          {/* Contact Form */}
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-4 rounded-lg text-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-4 rounded-lg text-lg"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full border p-4 rounded-lg text-lg"
            />
            <button
              type="submit"
              className="bg-[#0B6E99] hover:bg-[#095b7f] text-white px-8 py-4 rounded-full text-lg transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

   
    </div>
  );
}
