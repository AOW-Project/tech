import React from "react";
import "@fontsource/nunito";
import "@fontsource/inter";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center w-full text-[#000]">
      {/* Hero Section */}
      <section 
        className="w-full py-16 text-center font-[Nunito] relative"
        style={{
          backgroundImage: 'url("/images/bg image.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
          <p className="text-3xl uppercase font-bold tracking-widest text-black">About Us</p>
          <h1 className="text-3xl md:text-5xl font-bold my-4 text-black">
            WHERE <span className="text-blue-600">IDEAS</span> TURN INTO IMPACT
          </h1>
          <p className="max-w-2xl mx-auto text-md md:text-lg text-black">
            We are a team of experts, creative thinkers and passionate builders. With a futuristic
            approach, we deliver digital solutions that create impact.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
            Explore solutions
          </button>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="w-full flex justify-center bg-white">
        <div className="w-full max-w-6xl px-4 py-20 font-[Inter]">
          <p className="text-sm text-blue-600 font-semibold uppercase mb-2">Who we are?</p>
          <h2 className="text-3xl font-bold mb-10 text-black">JOIN TO OUR TEAM</h2>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between md:gap-x-16 gap-y-8">
            <img
              src="/images/about/about logo.svg"
              alt="Company Logo"
              width={432}
              height={147}
              className="shrink-0"
            />
            
            <div className="text-base leading-relaxed max-w-2xl text-black">
              <p>
                AOW is a team of tech enthusiasts driven by a passion for innovation and digital excellence.
                Developers, UX/UI designers, analysts – we collaborate seamlessly to transform ideas into powerful,
                user-focused IT solutions.
              </p>
              <br />
              <p>
                We take pride in our teamwork, adaptability, and a forward-thinking mindset that fuels every project
                we take on. At AOW, it's not just about code – it's about creating smart, effective products that
                truly make a difference.
              </p>
              <br />
              <p>
                And guess what? We're always on the lookout for new talent! If you're searching for a company culture
                that values creativity, encourages growth, and thrives on fresh ideas, explore our open roles and see
                if AOW is the perfect place for your next career move.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        className="w-full flex justify-center py-20 font-[Inter] relative"
        style={{
          backgroundImage: 'url("/images/bg image.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="w-full max-w-6xl px-4 relative z-10">
          <p className="text-sm text-blue-600 font-semibold uppercase mb-2">Open Positions</p>
          <h2 className="text-3xl font-bold mb-10 text-black">
            BUILD THE <span className="text-blue-600">FUTURE</span> WITH US
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4">
            <ul className="space-y-4">
              <li className="flex justify-between border-b pb-2 text-black">
                APP DEVELOPMENT <img src="/images/arrow.svg" alt="icon" />
              </li>
              <li className="flex justify-between border-b pb-2 text-black">
                DIGITAL MARKETING SERVICES <img src="/images/arrow.svg" alt="icon" />
              </li>
              <li className="flex justify-between border-b pb-2 text-black">
                SOCIAL MEDIA MARKETING SERVICES <img src="/images/arrow.svg" alt="icon" />
              </li>
              <li className="flex justify-between border-b pb-2 text-black">
                WEB DEVELOPMENT SERVICES <img src="/images/arrow.svg" alt="icon" />
              </li>
              <li className="flex justify-between border-b pb-2 text-black">
                WEB DESIGNING SERVICES <img src="/images/arrow.svg" alt="icon" />
              </li>
            </ul>

            <ul className="space-y-4">
              <li className="flex justify-between border-b pb-2 text-black">
                SEO SERVICES <img src="/images/arrow.svg" alt="icon" />
              </li>
              <li className="flex justify-between border-b pb-2 text-black">
                CUSTOMER SUPPORT SERVICES <img src="/images/arrow.svg" alt="icon" />
              </li>
              <li className="flex justify-between border-b pb-2 text-black">
                SOCIAL MEDIA POSTER DESIGN <img src="/images/arrow.svg" alt="icon" />
              </li>
              <li className="flex justify-between border-b pb-2 text-black">
                LOGO DESIGNING SERVICES <img src="/images/arrow.svg" alt="icon" />
              </li>
            </ul>
          </div>

          <div className="text-right mt-6">
            <a href="#" className="text-sm text-blue-600 flex items-center justify-end gap-1">
              More about services <span>{/* Place your arrow icon here */}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full flex justify-center bg-white">
        <div className="w-full max-w-6xl px-4 py-20 font-[Inter]">
          <p className="text-sm text-blue-600 font-semibold uppercase mb-2">Our Mission</p>
          <h2 className="text-3xl font-bold mb-10 whitespace-nowrap text-black">
            MAKING YOUR BRAND SHINE IN THE DIGITAL WORLD
          </h2>
          
          <div className="flex flex-col md:flex-row items-stretch justify-between md:gap-x-16 gap-y-8">
            <div className="md:w-[432px] h-auto shrink-0 flex-shrink-0">
              <img
                src="/images/about/mission.png"
                alt="Mission"
                className="w-full h-full rounded-[24px] object-cover"
                style={{ minHeight: "100%" }}
              />
            </div>
            
            <div className="text-base leading-relaxed flex-1">
              <p className="text-black">
                We enhance brand presence by crafting digital solutions that are accessible, impactful, and tailored to every business. Whether you're a startup or an established company, our goal is to help you connect with your audience, stand out in the market, and grow with confidence in the digital space.
              </p>
              <br />
              <h3 className="text-lg font-bold text-black">What we offer:</h3>
              <ul className="space-y-3 mt-4">
                {[
                  "Tailored Digital Strategies – built around your unique goals and audience",
                  "End-to-End Development – from concept to launch and beyond",
                  "Creative UI/UX Design – intuitive, engaging, and user-focused",
                  "Scalable Solutions – ready to grow with your business",
                  "Ongoing Support – we're with you every step of the way",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-black text-base leading-relaxed"
                  >
                    <img 
                      src="/images/about/check.png" 
                      alt="checkmark" 
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="w-full flex justify-center bg-white">
        <div className="w-full max-w-6xl px-4 py-20 font-[Inter]">
          <p className="text-sm text-blue-600 font-semibold uppercase mb-2">Our Vision</p>
          <h2 className="text-3xl font-bold mb-10 whitespace-nowrap text-black">
            CREATIVE IMPACT, GLOBAL REACH
          </h2>
          
          <div className="flex flex-col md:flex-row items-stretch justify-between md:gap-x-16 gap-y-8">
            <div className="md:w-[432px] h-auto shrink-0 flex-shrink-0">
              <img
                src="/images/about/vision.jpg"
                alt="Vision"
                className="w-full h-full rounded-[24px] object-cover"
                style={{ minHeight: "100%" }}
              />
            </div>
            
            <div className="text-base leading-relaxed flex-1">
              <p className="text-black">
                We aim to become a global leader by offering innovative services that go beyond expectations. Our future is to empower brands worldwide with creative digital solutions, making a lasting impact through quality, accessibility, and bold ideas.
              </p>
              <br />
              <h3 className="text-lg font-bold text-black">What drives our vision:</h3>
              <ul className="space-y-3 mt-4">
                {[
                  "Innovation First – we strive to bring fresh ideas to every project",
                  "Creativity at Core – standing out means thinking differently",
                  "Proven Results – data-driven, tested, and trusted outcomes",
                  "Global Reach – solutions that speak to audiences everywhere",
                  "Client-Centered Approach – your success defines ours",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-black text-base leading-relaxed"
                  >
                    <img 
                      src="/images/about/check.png" 
                      alt="checkmark" 
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Client Results Section */}
      <section 
        className="w-full py-20 font-[Inter] relative"
        style={{
          backgroundImage: 'url("/images/bg image.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-blue-50/80"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <p className="text-sm text-blue-600 font-semibold uppercase mb-4 text-left">Our Clients</p>
          <h2 className="text-4xl font-bold mb-12 text-black text-left">
            REAL STORIES. REAL <span className="text-blue-600">RESULTS</span>
          </h2>
          
          <div className="relative flex items-center justify-center">
            {/* Left Arrow */}
            <div className="absolute left-0 z-10">
              <img 
                src="/images/left arrow.png" 
                alt="Previous testimonial" 
                className="w-12 h-12 cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
              />
            </div>
            
            {/* Testimonial Container */}
            <div className="max-w-4xl mx-auto px-16 relative">
              <div className="text-left">
                <div className="flex items-start gap-2">
                  <blockquote className="text-base text-black leading-relaxed max-w-2xl">
                    We absolutely loved working with this team! The Skill Kiwi site turned out even better than we imagined — fun, modern, and super engaging. Huge thanks for bringing our vision to life! The UI is clean, and the UX is intuitive — exactly what we needed for interactive learning.
                  </blockquote>
                  {/* Quote mark positioned after the text */}
                  <span className="text-4xl text-blue-600 font-bold ml-2 flex-shrink-0">"</span>
                </div>
                
                <div className="flex items-center gap-3 mt-6">
                  <p className="text-sm text-black font-semibold">
                    Alice Rosenberg, co-owner
                  </p>
                  {/* Logo placed after the owner name */}
                  <img 
                    src="/images/client logo.png" 
                    alt="Client company logo" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
            </div>
            
            {/* Right Arrow */}
            <div className="absolute right-0 z-10">
              <img 
                src="/images/right arrow.png" 
                alt="Next testimonial" 
                className="w-12 h-12 cursor-pointer text-blue-600 hover:opacity-80 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
          <section className="w-full bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 font-[Inter]">
          <p className="text-sm text-blue-600 font-semibold uppercase mb-2">Our Team</p>
          <h2 className="text-4xl font-bold mb-12 text-black">
            THE FACES OF <span className="text-blue-600">OUR</span> COMPANY
          </h2>

          {/* Top row: two images and text beside first image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <img
                src="/images/about/1.jpg"
                alt="Team collaboration in meeting room"
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-sm text-black mt-3 leading-relaxed">
                Meet the dedicated individuals behind our success.
                Each team member brings their unique skills, creativity,
                and passion to every project, ensuring that we deliver
                outstanding results. Together, we make things happen,
                and we’re proud of the work we do!
              </p>
            </div>

            <img
              src="/images/about/2.jpg"
              alt="Team members in office environment"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* Middle row: full-width image */}
          <div className="mb-6">
            <img
              src="/images/about/3.jpg"
              alt="Business handshake partnership"
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>

          {/* Bottom row: two images side by side, with text under the first */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src="/images/about/4.jpg"
                alt="Team meeting and discussion"
                className="w-full h-48 object-cover rounded-lg"
              />
              <p className="text-sm text-black mt-3 leading-relaxed">
                Our team is the heart of our company. With a diverse
                range of talents and experience, we work together to turn
                ideas into reality. Get to know the people who drive our
                vision forward and make every project a success. We're
                here to make a difference!
              </p>
            </div>

            <img
              src="/images/about/5.jpg"
              alt="Professional team members"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;