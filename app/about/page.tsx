import "@fontsource/nunito"
import "@fontsource/inter"
import Link from "next/link"

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center w-full text-[#000] font-inter">
      {/* Hero Section */}
      <section
        className="w-full text-center font-[Nunito] relative bg-white"
        style={{
          paddingTop: "6rem",
          paddingBottom: "6rem",
          backgroundImage: 'url("/images/bg image.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Optional: Add a semi-transparent overlay if needed */}
        {/* <div className="absolute inset-0 bg-black opacity-50 z-0"></div> */}

        {/* Content Layer */}
        <div className="relative z-10 px-4">
         <p className="font-[Nunito] font-extrabold text-[48px] leading-[140%] tracking-normal text-center uppercase text-black">
            About Us
          </p>

          <h1 className="font-[Nunito] font-extrabold text-[60px] leading-[140%] tracking-normal text-center uppercase text-black my-4">
            WHERE <span className="text-[#006D9F]">IDEAS</span> TURN INTO IMPACT
          </h1>

         <p className="font-[Inter] font-medium text-[16px] leading-[140%] tracking-normal text-center text-black max-w-3xl mx-auto ">
              We are a team of experienced professionals dedicated to delivering impactful digital solutions.
               With a focus on quality, innovation, and client success, we turn ideas into scalable results.
          </p>

          <button className="mt-6 bg-[#084C6B] text-white px-6 py-2 rounded-full ">
            See open position
          </button>
        </div>
      </section>


      {/* Join Our Team */}
    <section className="w-full flex justify-center bg-white px-8 md:px-12 lg:px-16">
   <div className="w-full max-w-[1344px] pt-[140px] pb-[140px] font-[Inter] flex flex-col gap-[80px]">
    <div>
      <p className="text-base text-[#006D9F] font-extrabold uppercase mb-2 font-[Nunito] leading-[1.4]">
        Who we are?
      </p>

      <h2 className="text-[48px] font-extrabold leading-[1.4] text-black text-center md:text-left font-[Nunito] uppercase">
        JOIN TO OUR TEAM
      </h2>
    </div>

    <div className="w-full h-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-[40px]">
      <img
        src="/images/about/about logo.svg"
        alt="Company Logo"
        width={432}
        height={147}
        className="shrink-0 mr-10"
      />

      <div className="font-[Inter] font-medium text-[16px] leading-[1.4] tracking-[0] text-black text-justify max-w-[775px]">
        <p>
          AOW is a team of tech enthusiasts driven by a passion for innovation and digital excellence. Developers,
          UX/UI designers, analysts – we collaborate seamlessly to transform ideas into powerful, user-focused IT
          solutions.
        </p>
        <br />
        <p>
          We take pride in our teamwork, adaptability, and a forward-thinking mindset that fuels every project we
          take on. At AOW, it's not just about code – it's about creating smart, effective products that truly
          make a difference.
        </p>
        <br />
        <p>
          And guess what? We're always on the lookout for new talent! If you're searching for a company culture
          that values creativity, encourages growth, and thrives on fresh ideas, explore our open roles and see if
          AOW is the perfect place for your next career move.
        </p>
      </div>
    </div>
  </div>
</section>




      {/* Services Section */}
      <section
        className="w-full flex justify-center font-[Inter] relative bg-white px-12"
        style={{
          backgroundImage: 'url("/images/bg image.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          paddingTop: "140px",
          paddingBottom: "140px",
        }}
      >

  {/* Content */}
  <div className="w-full max-w-[1920px] px-4 relative z-10">
    <p
        className="text-[#006D9F] uppercase mb-2"
        style={{
          fontFamily: 'Nunito',
          fontWeight: 800,
          fontSize: '16px',
          lineHeight: '140%',
          letterSpacing: '0%',
        }}
      >
        Open Positions
      </p>

    <h2
        className="mb-10 text-black uppercase"
        style={{
          fontFamily: 'Nunito',
          fontWeight: 800,
          fontSize: '48px',
          lineHeight: '140%',
          letterSpacing: '0%',
        }}
      >
        BUILD THE <span className="text-[#006D9F]">FUTURE</span> WITH US
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4">
        <ul className="space-y-4">
          <li className="flex justify-between items-center border-b border-[#A7BDCB] pb-2 pt-2 text-black text-base font-bold uppercase leading-[1.2]">
            APP DEVELOPMENT <img src="/images/arrow.svg" alt="icon" />
          </li>
          <li className="flex justify-between items-center border-b border-[#A7BDCB] pb-2 pt-2 text-black text-base font-bold uppercase leading-[1.2]">
            DIGITAL MARKETING SERVICES <img src="/images/arrow.svg" alt="icon" />
          </li>
          <li className="flex justify-between items-center border-b border-[#A7BDCB] pb-2 pt-2 text-black text-base font-bold uppercase leading-[1.2]">
            SOCIAL MEDIA MARKETING SERVICES <img src="/images/arrow.svg" alt="icon" />
          </li>
          <li className="flex justify-between items-center border-b border-[#A7BDCB] pb-2 pt-2 text-black text-base font-bold uppercase leading-[1.2]">
            WEB DEVELOPMENT SERVICES <img src="/images/arrow.svg" alt="icon" />
          </li>
          <li className="flex justify-between items-center border-b border-[#A7BDCB] pb-2 pt-2 text-black text-base font-bold uppercase leading-[1.2]">
            WEB DESIGNING SERVICES <img src="/images/arrow.svg" alt="icon" />
          </li>
        </ul>

        <ul className="space-y-4">
          <li className="flex justify-between items-center border-b border-[#A7BDCB] pb-2 pt-2 text-black text-base font-bold uppercase leading-[1.2]">
            SEO SERVICES <img src="/images/arrow.svg" alt="icon" />
          </li>
          <li className="flex justify-between items-center border-b border-[#A7BDCB] pb-2 pt-2 text-black text-base font-bold uppercase leading-[1.2]">
            CUSTOMER SUPPORT SERVICES <img src="/images/arrow.svg" alt="icon" />
          </li>
          <li className="flex justify-between items-center border-b border-[#A7BDCB] pb-2 pt-2 text-black text-base font-bold uppercase leading-[1.2]">
            SOCIAL MEDIA POSTER DESIGN <img src="/images/arrow.svg" alt="icon" />
          </li>
          <li className="flex justify-between items-center border-b border-[#A7BDCB] pb-2 pt-2 text-black text-base font-bold uppercase leading-[1.2]">
            LOGO DESIGNING SERVICES <img src="/images/arrow.svg" alt="icon" />
          </li>
        </ul>
      </div>
      <div className="mt-8 text-right">
          <Link
            href="/about-services"
            className="inline-flex items-center text-sm text-[#084C6B] font-medium hover:underline"
          >
            More about services
            <img src="/images/arrow (1).png" alt="Arrow" className="h-2 w-2 ml-1" />
          </Link>
        </div>
     </div>
  </section>

      {/* Mission Section */}
    <section className="w-full flex justify-center bg-white px-20">
     <div className="w-full max-w-[1344px] py-[140px] gap-[40px] font-[Inter]">
     <p
        className="text-[#006D9F] uppercase mb-2"
        style={{
          fontFamily: 'Nunito',
          fontWeight: 800,
          fontSize: '16px',
          lineHeight: '140%',
          letterSpacing: '0%',
        }}
      >
        Our Mission
      </p>
     <h2
        className="mb-10 text-black uppercase"
        style={{
          fontFamily: 'Nunito',
          fontWeight: 800,
          fontSize: '46px',
          lineHeight: '140%',
          letterSpacing: '0%',
        }}
      >
         MAKING YOUR BRAND SHINE IN THE DIGITAL WORLD
      </h2>
 
    <div className="flex flex-col md:flex-row items-stretch justify-between md:gap-x-16 gap-y-8">
      <div className="md:w-[500px] h-auto shrink-0 flex-shrink-0">
        <img
          src="/images/about/mission.png"
          alt="Mission"
          className="w-full h-full rounded-[24px] object-cover"
          style={{ minHeight: "100%" }}
        />
      </div>

    <div className="flex-1 font-[Inter] font-medium text-base leading-[1.4] text-black  ">
      <p>
        We enhance brand presence by crafting digital solutions that are accessible, impactful, and tailored to
        every business. Whether you're a startup or an established company, our goal is to help you connect with
        your audience, stand out in the market, and grow with confidence in the digital space.
      </p>

      <br />

      <h3 className="text-lg font-bold">What we offer:</h3>
      <ul className="space-y-3 mt-4">
        {[
          "Tailored Digital Strategies - built around your unique goals and audience",
          "End-to-End Development - from concept to launch and beyond",
          "Creative UI/UX Design - intuitive, engaging, and user-focused",
          "Scalable Solutions - ready to grow with your business",
          "Ongoing Support - we're with you every step of the way",
        ].map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <img src="/images/about/check.png" alt="checkmark" className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

        </div>
      </div>
    </section>


      {/* Vision Section */}
      <section className="w-full flex justify-center bg-white px-20">
          <div className="w-full max-w-[1344px] pt-[30px] pb-[140px] font-[Inter]">
            {/* Title and Heading */}
            <p
              className="text-[#006D9F] uppercase mb-2"
              style={{
                fontFamily: 'Nunito',
                fontWeight: 800,
                fontSize: '16px',
                lineHeight: '140%',
                letterSpacing: '0%',
              }}
            >
              Our Vision
            </p>
            <h2
              className="mb-10 text-black uppercase"
              style={{
                fontFamily: 'Nunito',
                fontWeight: 800,
                fontSize: '46px',
                lineHeight: '140%',
                letterSpacing: '0%',
              }}
            >
              CREATIVE IMPACT, GLOBAL REACH
            </h2>

            {/* Flex Row */}
            <div className="flex flex-col md:flex-row items-stretch justify-between gap-[40px]">
              {/* Left: Text Content */}
              <div className="w-[660px] h-[320px] flex flex-col gap-4 text-black font-[Inter] font-medium text-base leading-[1.4]">
                <p>
                  We aim to become a global leader by offering innovative services that go beyond expectations. Our future
                  is to empower brands worldwide with creative digital solutions, making a lasting impact through quality,
                  accessibility, and bold ideas.
                </p>
                <h3 className="text-lg font-bold text-black mt-2">What drives our vision:</h3>
                <ul className="space-y-3">
                  {[
                    "Innovation First - we strive to bring fresh ideas to every project",
                    "Creativity at Core - standing out means thinking differently",
                    "Proven Results - data-driven, tested, and trusted outcomes",
                    "Global Reach - solutions that speak to audiences everywhere",
                    "Client-Centered Approach - your success defines ours",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-base leading-relaxed">
                      <img src="/images/about/check.png" alt="checkmark" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Image */}
              <div className="w-[500px] h-[340px] shrink-0 flex-shrink-0">
                <img
                  src="/images/about/vision.jpg"
                  alt="Vision"
                  className="w-full h-full rounded-[24px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>



      {/* Client Results Section */}
    <section
        className="w-full font-[Inter] relative bg-white px-14"
        style={{
          backgroundImage: 'url("/images/bg image.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          paddingTop: "140px",
          paddingBottom: "140px",
        }}
      >
        <div className="max-w-[1920px] w-full mx-auto relative z-10">
          <p className="text-[16px] text-[#006D9F] font-semibold uppercase mb-4 text-left">
            Our Clients
          </p>
          <h2 className="text-4xl font-bold mb-12 text-black text-left">
            REAL STORIES. REAL <span className="text-[#006D9F]">RESULTS</span>
          </h2>

          <div className="relative flex items-center justify-between">
            {/* Left Arrow */}
            <div className="z-10">
              <img
                src="/images/left arrow.png"
                alt="Previous testimonial"
                className="w-[80px] h-[80px] cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Testimonial */}
            <div className="max-w-4xl mx-auto px-16 relative pt-10">
              <div className="text-left">
                <div className="flex items-start gap-2">
                  <blockquote className="text-base text-black leading-relaxed max-w-2xl">
                    We absolutely loved working with this team! The Skill Kwiz site turned out even better than we imagined —
                    fun, modern, and super engaging. Huge thanks for bringing our vision to life! The UI is clean, and the UX
                    is intuitive — exactly what we needed for interactive learning.
                  </blockquote>
                  <span className="text-4xl text-[#006D9F] font-bold ml-2 flex-shrink-0">"</span>
                </div>
          

                <div className="flex items-center gap-3 pt-5">
                  <img
                    src="/images/client logo.png"
                    
                    alt="Client company logo"
                    className="w-[48px] h-[48px] object-contain"
                  />
                  <p className="text-[16px] text-black font-semibold">
                    Alice Rosenberg, co-owner
                  </p>
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <div className="z-10">
              <img
                src="/images/right arrow.png"
                alt="Next testimonial"
                className="w-[80px] h-[80px] cursor-pointer text-[#006D9F] hover:opacity-80 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
 
    <section className="w-full flex justify-center bg-white">
    <div className="w-full max-w-[1344px] pl-[45px] pr-10 pt-[90px] pb-[90px] font-[Inter] space-y-10">
    <div>
       <p
            className="text-[#006D9F] uppercase mb-2"
              style={{
                  fontFamily: 'Nunito',
                  fontWeight: 800,
                  fontSize: '16px',
                  lineHeight: '140%',
                  letterSpacing: '0%',
                }}
              >
                OUR TEAM
              </p>
      <h2
        className="mb-10 text-black uppercase"
        style={{
          fontFamily: 'Nunito',
          fontWeight: 800,
          fontSize: '48px',
          lineHeight: '140%',
          letterSpacing: '0%',
        }}
      >
        THE FACES OF <span className="text-[#006D9F]">OUR</span> COMPANY
      </h2>
    </div>

      {/* Top row: image - text - image */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
      <img
        src="/images/about/1.jpg"
        alt="Team meeting"
        className="w-full rounded-xl object-cover h-[300px]"
      />
      <div className="flex items-center justify-center min-h-[300px]">
        <p className="text-sm text-left">
          Meet the dedicated individuals behind our success. Each team member brings their unique skills, creativity,
          and passion to every project, ensuring that we deliver outstanding results. Together, we make things happen,
          and we're proud of the work we do!
        </p>
      </div>
      <img
        src="/images/about/2.jpg"
        alt="Team standing"
        className="w-full rounded-xl object-cover h-[300px]"
      />
    </div>

    {/* Middle and Bottom combined row */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
      {/* Left side: 3rd image (wide) */}
      <div className="md:col-span-2 space-y-6">
        <img
          src="/images/about/3.jpg"
          alt="Team collaboration"
          className="w-full rounded-xl object-cover h-[300px]"
        />
        {/* Bottom section within the same width as 3rd image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center justify-center min-h-[300px]">
            <p className="text-sm">
              Our team is the heart of our company. With a diverse range of talents and expertise, we work together to
              turn ideas into reality. Get to know the people who drive our vision forward and make every project a
              success. We're here to make a difference!
            </p>
          </div>
          <img
            src="/images/about/5.jpg"
            alt="Team celebration"
            className="w-full rounded-xl object-cover h-[300px]"
          />
        </div>
      </div>

      {/* Right side: 4th image (full height) */}
      <img
        src="/images/about/4.jpg"
        alt="Team working together"
        className="w-full rounded-xl object-cover hidden md:block h-[636px]"
      />
    </div>
  </div>
</section>
    </div>
  )
}

export default AboutPage
