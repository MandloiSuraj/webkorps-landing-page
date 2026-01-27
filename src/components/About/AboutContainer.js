import React, { useEffect, useRef, useState } from "react";
import Header from "../sharedComponents/Header";
import CardContainer from "./Card";
import AchievementCardContainer from "./AchievementCard";
import Footer from "../sharedComponents/footer";
import LeadersCardContainer from "./LeadersCard";
import { Helmet } from 'react-helmet-async';
import EngagementModels from "./EngagementModel";
import GuaranteePage from "./GuaranteePage";
import Timeline from "./TimelineSection";
import WebkorpsImg from "../../assets/images/webkorps.jpg";
import { AnimatePresence, motion } from "framer-motion";
import OfficeLocation from "./OfficeLocation";
import { useNavigate } from "react-router-dom";
import CompanyStatsSection from "../sharedComponents/CompanyStatsSection";
import ClientCard from "../sharedComponents/ClientCard";
import ClientFeedback from "../sharedComponents/clientFeedback";
import CTASection from "../sharedComponents/CTASection";
import AOS from 'aos';
import HeroSectionUI from "../sharedComponents/HeroSectionUI";
import websiteCTAImage from "../../assets/images/website-cta-5.jpg";
import websiteCTAImage2 from "../../assets/images/website-cta-1.jpg";
import websiteCTAImage3 from "../../assets/images/website-cta-3.jpg";
import websiteCTAImage4 from "../../assets/images/website-cta-2.jpg";

const visionData = {
  data: [
    "Global IT Leader: Striving to be a global pioneer in innovative IT solutions for digital success.",
    "Empowering Businesses : Helping businesses leverage technology for efficiency, growth, and sustainability.",
    "Innovation & Excellence: Fostering a culture of creativity, collaboration, and technological excellence.",
    "Client & Employee Success : Ensuring success through happy clients and empowered employees.",
    "Long-Term Partnerships : Building lasting relationships with scalable, future-ready solutions."
  ]
}
const missionData = {
  data: [
    "Empowering Businesses: Delivering innovative and scalable IT solutions for long-term success.",
    "Commitment to Excellence: Leveraging cutting-edge technology to drive efficiency and growth.",
    "Customer-Centric Approach: Prioritizing client needs with tailored, results-driven solutions.",
    "Innovation & Growth: Continuously evolving to stay ahead in the digital landscape.",
    "Quality & Reliability: Ensuring high standards in every solution for seamless digital transformation."
  ]

}
const AboutContainer = () => {
  const partners = [
    {
      img: "https://webkorps-app.s3.us-east-1.amazonaws.com/our-official-partners-adobe.webp",
      alt: "our official partners adobe",
      width: 84,
      height: 22,
    },
    {
      img: "https://webkorps-app.s3.us-east-1.amazonaws.com/our-official-partners-manageengine.webp",
      alt: "our official partners manageengine",
      width: 83,
      height: 46,
    },
    {
      img: "https://webkorps-app.s3.us-east-1.amazonaws.com/our-official-partners-microsoft.webp",
      alt: "our official partners microsoft",
      width: 28,
      height: 28,
      text: "Microsoft",
    },
    {
      img: "https://webkorps-app.s3.us-east-1.amazonaws.com/our-official-partners-hubspot.webp",
      alt: "our official partners hubspot",
      width: 74,
      height: 21,
    },
  ];
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const fadeInFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  const imageVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.8, ease: "easeInOut" } },
  };
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
      transition: { duration: 0.6 },
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      position: "absolute",
      transition: { duration: 0.6 },
    }),
  };
  const images = [
    {
      src: "https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-team-1.jpg",
      alt: "webkorps team 1"
    },
    {
      src: "https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-team-2.jpg",
      alt: "Webkorps Team 2"
    },
    {
      src: "https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-team-3.jpg",
      alt: "Webkorps Team 3"
    },
    {
      src: "https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-team-4.jpg",
      alt: "Webkorps Team 4"
    }
  ];


  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const speed = 2; // Adjust speed as needed

    function startScrolling() {
      if (!scrollContainer) return;
      scrollAmount += speed;
      if (scrollAmount >= 950) {
        // Reset when half the scroll is complete
        scrollAmount = 0;
      }
      scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;
      requestAnimationFrame(startScrolling);
    }

    requestAnimationFrame(startScrolling);
  }, []);
  const delay = 3000
  useEffect(() => {
    AOS.init({
      duration: 500, easing: "ease",
      once: true,
    });
  }, []);


  const [[current, direction], setCurrent] = useState([0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(([prev]) => [
        (prev + 1) % images.length,
        1,
      ]);
    }, delay);
    return () => clearInterval(interval);
  }, [images.length, delay]);
  return (
    <div className="overflow-hidden font-inter">
      <Helmet>
        <title>About Webkorps | Best IT Solutions and IT Services Provider</title>
        <meta
          name="description"
          content="Leading IT solutions provider with 8+ years of experience, offering custom software, web and mobile app development, IT consulting, and digital transformation services to drive business growth and efficiency."
        />


        <meta property="og:url" content="https://www.webkorps.com/about-us" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Webkorps | Best IT Solutions and IT Services Provider" />
        <meta property="og:description" content="Leading IT solutions provider with 8+ years of experience, offering custom software, web and mobile app development, IT consulting, and digital transformation services to drive business growth and efficiency." />
        <meta property="og:image" content="https://webkorps-app.s3.us-east-1.amazonaws.com/about-webkorps.webp" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="webkorps.com" />
        <meta property="twitter:url" content="https://www.webkorps.com/about-us" />
        <meta name="twitter:title" content="About Webkorps | Best IT Solutions and IT Services Provider" />
        <meta name="twitter:description" content="Leading IT solutions provider with 8+ years of experience, offering custom software, web and mobile app development, IT consulting, and digital transformation services to drive business growth and efficiency." />
        <meta name="twitter:image" content="https://webkorps-app.s3.us-east-1.amazonaws.com/about-webkorps.webp" />
        <link rel="canonical" href="https://www.webkorps.com/about-us" />
      </Helmet>
      <Header />
      <div className="w-full overflow-hidden">
        <div className="w-full text-center xl:text-left ipad-pro:text-left md:text-center  pt-[80px]">
          <HeroSectionUI title={'The Webkorps Story'}
            subtitle={'Driving Innovation, Delivering Excellence'}
            description={'At Webkorps, we transform ideas into reality through our innovative technology solutions. With over 8+ years of expertise, we help businesses scale, innovate, and stay ahead in the digital landscape. Our customer-centric approach, technical excellence, and commitment to quality make us a trusted partner for businesses worldwide.'}
            image={'https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-story-about-us.jpg'}
            buttonText={'Get Started Now !'}
            imageAlt={"webkorps story about us"}
            link={'/contact'}
            rightSliderImages={true}
            height={'h-[65rem]'} />
        </div>

        <section className="flex justify-center bg-cover bg-white bg-no-repeat py-[4rem] px-6 xl:px-12" data-aos="fade-left">
          <motion.div
            className="w-full bg-white border border-gray-300 rounded-[40px] shadow-custom-lg px-[3%] xl:px-[1.875rem] ipad-pro:px-[1.875rem] p-12 flex flex-col xl:flex-row-reverse gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Slideshow Image Section with Fixed Size */}
            <div className="w-full xl:w-1/2 flex justify-center xl:justify-end relative overflow-hidden">
              <div className="relative w-[100%] max-w-2xl h-[365px]">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.img
                    key={current}
                    src={images[current].src}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    alt={images[current].alt}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    width="800"
                    height="365"
                    loading="lazy"
                  />
                </AnimatePresence>
              </div>
            </div>

            {/* Text Content with Animation */}
            <motion.div className="w-full xl:w-1/2" variants={imageVariants} data-aos="fade-right">
              <h2 className="text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] text-black font-inter font-bold leading-[46.2px] text-center xl:text-left">
                The Webkorps Story
              </h2>
              <div className="mt-4 space-y-5">
                <p className="text-[0.9375rem] xl:text-[1.1rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] font-inter text-gray-700 leading-relaxed text-center xl:text-left">
                  Founded in 2016 with a vision to empower businesses, Webkorps has grown from a team of two passionate problem-solvers into a powerhouse of 250+ tech experts. We specialize in delivering customized, scalable, and high-performance IT solutions that drive innovation and sustainable growth.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed text-center xl:text-left">
                  Our journey is built on adaptability, excellence, and a customer-centric approach. By fostering strong partnerships and leveraging cutting-edge technology, we help businesses navigate digital complexities with confidence. At Webkorps, technology meets reliability-because our clients' success is our commitment.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>
        <div className="bg-gradient-to-t from-[#001833] to-[#001833] z-10 font-inter overflow-hidden">
          <CompanyStatsSection bgColor='bg-white' title='Empowering Businesses with Excellence' para1={'With over eight years of industry expertise, Webkorps has established itself as a leader in delivering innovative, high-quality software solutions. Our team of more than 250 seasoned professionals has completed over 500 projects across a wide range of industries, empowering businesses to achieve digital transformation and operational excellence.'} para2={'Our global reach spans more than 30 countries, allowing us to serve diverse clients with tailored solutions that boost efficiency and drive growth. With a remarkable 98% client satisfaction rate, we are dedicated to delivering exceptional results, forging lasting partnerships, and continually pushing the boundaries of technology innovation.'} />
        </div>
        <div className="max-w-full my-[4rem] mx-[7%] md:mx-[7%] xl:mx-[50px] ipad-pro:mx-[50px]" >
          <div className="flex flex-col lg:flex-row items-start lg:items-center border border-gray-300 rounded-[30px] shadow-custom-lg  px-[3%] xl:px-[1.875rem] ipad-pro:px-[1.875rem] p-[30px] gap-[3.125rem] justify-center" data-aos="fade-left">
            <h2 className="text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] text-black font-inter font-bold whitespace-nowrap ">
              Our Technology Partners
            </h2>
            <div className="w-full  bg-white ">
              <div className="relative flex justify-center">
                <div className="flex flex-wrap justify-center lg:justify-start gap-12">
                  {partners?.map((partner, index) => (
                    <div
                      key={index}
                      className="w-full sm:w-[110px] md:w-[130px] h-[60px] p-2 border border-neutral-500  bg-white rounded-[15px] flex justify-center items-center shadow-lg"
                    >
                      <img
                        src={partner.img}
                        alt={partner.alt}
                        className="max-w-full max-h-full"
                        width={partner.width}
                        height={partner.height}
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        loading="lazy"
                      />
                      {partner.text && (
                        <p className="ml-1 font-medium text-[10px] text-black">
                          {partner.text}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>


        <CTASection title={'Leverage the Power of Our Tech Partnerships!'} description={'With the right technology and strategic partnerships, we deliver world-class IT solutions. Let’s harness innovation together to build scalable and future-proof digital products!'} buttonText={'Connect With Us!'} bgColor='bg-[#11608F]' link={'/contact'} ctaImage={websiteCTAImage} textColor={true} />
        <section className="flex justify-center bg-white bg-no-repeat py-16 px-4 md:px-8 xl:px-12">
          <motion.div
            className="w-full bg-white border border-gray-300 rounded-[40px] shadow-custom-lg px-[3%] xl:px-[30px] ipad-pro:px-[30px] p-12 flex flex-col xl:flex-row gap-6 xl:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Image Section */}
            <div className="w-full xl:w-1/3 flex justify-center xl:justify-start relative max-h-[450px]">
              <div className="relative w-full max-w-[320px] md:max-w-[400px] xl:max-w-[450px]">
                <img
                  className="w-[28rem] h-[28rem]  rounded-lg shadow-lg"
                  src="https://webkorps-app.s3.us-east-1.amazonaws.com/vision-image.jpg"
                  alt="Our vision"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  loading="lazy"
                  width="800"
                  height="600"
                />
                {/* Overlay Image - Fixed Positioning for Small Screens */}
                <img
                  className="w-[60%] md:w-[50%] h-auto  absolute top-[22%] right-[20%] md:right-[-5%] xl:right-[-10%] rounded-lg shadow-lg border-4 border-white"
                  src="/assets/our-vision-image.jpg"
                  alt="our-vision-image"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>
            </div>

            {/* Text Content */}
            <motion.div className="w-full xl:w-2/3 text-center xl:text-left" variants={fadeInFromBottom}>
              <h2 className="text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] text-black font-inter font-bold leading-snug">
                Our Vision
              </h2>
              <p className=" mt-4 text-[0.9375rem] xl:text-[1.1rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] text-gray-700 leading-relaxed">
                At Webkorps, our vision is to be a global leader in innovative IT solutions, empowering businesses to thrive in the digital age. We foster a culture of collaboration, innovation, and excellence, where happy clients and empowered employees drive success. By delivering cutting-edge, scalable solutions, we help businesses harness technology to achieve their strategic goals, ensuring lasting partnerships, efficiency, and sustainable growth.
              </p>
              <div className="flex flex-col mt-3 ">
                <motion.ul
                  className="space-y-2 list-disc pl-5 marker:text-gray-700"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {visionData?.data.map((feature, index) => {
                    const [heading, description] = feature.split(": ");
                    return (
                      <motion.li
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className='text-[14px] xl:text-[16px] ipad-pro:text-[16px] md:text-[16px] text-gray-700'>
                          <b>{heading}:</b> {description}
                        </span>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </div>

            </motion.div>
          </motion.div>
        </section>

        {/* Mission Section */}
        <section className="flex justify-center bg-cover bg-[#11608F] bg-no-repeat py-[4rem] px-6 xl:px-12">
          <motion.div
            className="w-full bg-white border border-gray-300 rounded-[40px] shadow-custom-lg px-[3%] xl:px-[30px] ipad-pro:px-[30px] p-12 flex flex-col xl:flex-row-reverse gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="w-full xl:w-1/3 flex justify-center xl:justify-end relative max-h-[500px] overflow-visible">
              <div className="relative">
                <img
                  className="w-[28rem] h-[28rem]  rounded-lg shadow-lg"
                  src="/assets/our-mission.jpg"
                  alt="Our mission"
                  width="800"
                  height="600"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  loading="lazy"

                />
                <img
                  className="w-[70%] md:w-[60%] xl:w-[50%] h-auto  absolute top-[20%] left-[15%] md:left-[-5%] xl:left-[-10%] rounded-lg shadow-lg border-4 border-white"
                  src="https://webkorps-app.s3.us-east-1.amazonaws.com/our-misson.jpg"
                  alt="our-misson"
                  width="800"
                  height="600"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
            </div>


            <motion.div className="w-full xl:w-2/3 text-center xl:text-left" variants={fadeInFromBottom}>
              <h2 className="font-inter text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem]  text-black font-bold leading-snug ">
                Our Mission
              </h2>
              <p className="mt-4 text-[0.9375rem] xl:text-[1.1rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] text-gray-700 leading-relaxed">
                At Webkorps, our mission is to empower businesses with innovative, scalable, and reliable IT solutions. We are committed to delivering excellence through cutting-edge technology, customer-centric strategies, and a passion for continuous growth. By fostering strong partnerships, embracing innovation, and maintaining the highest standards of quality, we help businesses navigate digital transformation, enhance efficiency, and achieve long-term success.
              </p>
              <div className="flex flex-col mt-3 ">
                <motion.ul
                  className="space-y-2 list-disc pl-5 marker:text-gray-700"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {missionData?.data.map((feature, index) => {
                    const [heading, description] = feature.split(": ");
                    return (
                      <motion.li
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className='text-[14px] xl:text-[16px] ipad-pro:text-[16px] md:text-[16px] text-gray-700'>
                          <b>{heading}:</b> {description}
                        </span>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <CTASection title={'Turn Your Vision Into Reality With Us!'} description={'Our mission and vision are centered around your success. Let’s collaborate to build cutting-edge digital solutions that drive your business forward.'} buttonText={'Let’s Talk Strategy!'} bgColor='bg-white' link={'/contact'} ctaImage={websiteCTAImage2} />

        <div className="flex flex-col justify-center items-center py-[4rem] px-[5%] xl:px-[50px] ipad-pro:px-[40px] bg-custom-blue-gradient">
          {/* Bordered Section */}
          <div className="w-full bg-white border border-gray-300 rounded-[40px] shadow-custom-lg px-[3%] xl:px-[30px] ipad-pro:px-[30px] p-12 flex flex-col items-center">

            {/* Centered Heading */}
            <p className="w-full text-center text-[1.75rem] xl:text-[2.5rem] ipad-pro:text-[2.2rem] md:text-[2.3rem] text-black font-inter font-bold leading-[1.2] mb-8">
              Our Values, Our Foundation
            </p>

            {/* Card Section */}
            <CardContainer />
          </div>
        </div>

        <AchievementCardContainer bgColor='bg-white' headingColor='text-black' />
        <CTASection title={'Work With an Award-Winning IT Partner!'} description={'Recognized for excellence, trusted by businesses worldwide. Partner with Webkorps for reliable, scalable, and innovative IT solutions that set you apart.'} buttonText={'Get in Touch!'} bgColor='bg-custom-blue-gradient' link={'/contact'} ctaImage={websiteCTAImage} textColor={true} />

        <EngagementModels />
        <CTASection title={'Choose a Flexible Engagement Model That Suits You!'} description={'We understand that every business has unique needs. Pick from our flexible engagement models and get tailored IT solutions that match your vision and budget.'} buttonText={'Explore Engagement Models!'} bgColor='bg-custom-blue-gradient' link={'/contact'} ctaImage={websiteCTAImage3} />
        <GuaranteePage />
        <Timeline />
        <div className="flex justify-center bg-cover bg-white bg-no-repeat py-[4rem] px-[7%] xl:px-[50px] ipad-pro:px-[40px]">
          <LeadersCardContainer />
        </div>
        <CTASection title={'Innovate with the Best Minds in IT!'} description={'Our leadership team drives innovation, excellence, and customer satisfaction. Let’s work together and create future-ready solutions for your business.'} buttonText={'Meet Our Experts Now!'} bgColor='bg-custom-blue-gradient' link={'/contact'} ctaImage={websiteCTAImage} textColor={true} />

        <ClientCard bgColor="bg-white" heading={'Trusted by Leading Brands for Innovative IT Solutions'} description={'We are proud to partner with top global brands and industry leaders, delivering cutting-edge IT solutions that drive success. Our dedication to excellence and customer satisfaction has earned the trust of businesses across diverse industries, helping them achieve digital transformation and long-term growth.'} />

        {/* <ClientFeedback title={'Client Testimonials<br/> Success Stories That Inspire'} /> */}
        <CTASection title={'Your Success Story Starts Here!'} description={'Our clients’ success speaks for itself. Let’s create your success story with tailored IT solutions that drive business growth!'} buttonText={'Let’s Talk!'} bgColor='bg-[#EBEDEE]' link={'/contact'} ctaImage={websiteCTAImage4} />
        <OfficeLocation />
      </div>

      <Footer />
    </div>
  );
};
export default AboutContainer;
