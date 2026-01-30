import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Main from "./main";
import TopIntregation from "./topIntregation";
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import '../../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import {
  faBrain,
  faBuilding,
  faLink,

} from '@fortawesome/free-solid-svg-icons';
import { OfferingsSection } from "./IndustryChallenges";
import CompanyStatsSection from "./CompanyStatsSection";
import AboutUsCard from "./AboutUsCard";
import CTASection from "./CTASection";
const websiteCTAImage = "/assets/images/website-cta-5.jpg";
import {
  faMobileScreenButton, // Mobile App Development
  faGlobe,              // Web Development
  faLaptopCode,         // Custom Software Development
  faMicrochip,          // IoT Application Development
  faCartShopping,       // E-Commerce Development
  faUsersGear,          // IT Staff Augmentation
  faScrewdriverWrench   // Managed IT Services
} from "@fortawesome/free-solid-svg-icons";

const features = {
  title: `<span style="font-weight:700; color:#1887C9;">Webkorps</span>: A Trusted IT Solutions Provider Empowering Businesses Worldwide`,
  description: "At Webkorps, we create innovative IT solutions for businesses to help them thrive in the digital age. As a trusted IT solutions provider, we specialize in customized technology for businesses of all sizes, from startups to enterprises. Our aim is to empower businesses with technology that enhances efficiency, drives growth, and makes a lasting impact.",
  data: [
    "We are an ISO 9001:2015 & ISO 27001 Certified IT Solutions Provider ensuring top-quality standards and security.",
    "8+ years of industry expertise delivering cutting-edge business IT solutions for diverse industries.",
    "Strong team of 250+ skilled developers driving digital transformation.",
    "Successfully delivered 500+ projects across diverse industries.",
    "We serve clients in 30+ countries, empowering businesses globally.",
    "Recognized and ranked on leading platforms like Clutch, GoodFirms, Techbehemoths, TopDevelopers, and many more.",
    "Trusted by startups, SMBs, and enterprise businesses for scalable IT solutions.",
    "Commitment to innovation, reliability, and client success."
  ]
}
const offeringData = {
  heading: `Empower Your Business with Our Reliable and Cutting-Edge <br/>IT Services and Solutions`,
  description: "Supercharge your business with our innovative IT services designed for success. We specialize in custom software development, mobile and web app solutions, blockchain development, and AI/ML technologies. As a trusted IT solutions provider, we deliver scalable, secure, and future-ready solutions that drive growth, efficiency, and digital transformation for businesses around the world.",
  tabsData: [
    {
      id: 'tab-one1',
      title: 'Mobile App Development',
      icon: faMobileScreenButton,
      content: 'Elevate your ideas into impactful, user-friendly mobile applications with our mobile app development services. We specialize in iOS, Android, and cross-platform apps, delivering secure, scalable, and high-performance solutions that boost user engagement and promote business growth. Our top mobile app development services are:',
      features: [
        'Android App Development',
        'iOS App Development',
        'Cross-Platform App Development',
        'Enterprise App Development',
        'On-Demand App Development'
      ]
    },
    {
      id: 'tab-two2',
      title: 'Web Development',
      icon: faGlobe,
      content: 'Build dynamic, responsive, and high-performing web solutions with our expert web development services. Whether it’s a corporate site, web app, or e-commerce platform, we create SEO-friendly, scalable, and secure web solutions tailored to your business needs. Our top web development services are:',
      features: [
        'Web Application Development',
        'Web Portal Development',
        'Progressive Web Applications Development',
        'Enterprise Web Development',
        'Website Development'
      ]
    },
    {
      id: 'tab-three3',
      title: 'Custom Software Development',
      icon: faLaptopCode,
      content: 'Enhance your business with our custom software solutions designed to meet your unique needs. From ERP and CRM systems to automation tools, our custom software solutions improve efficiency, streamline operations, and foster innovation. Our top custom software development services are:',
      features: [
        'Web Development',
        'Mobile App Development',
        'Product Development',
        'E-Commerce Development',
        'Dedicated Development Team',
      ]
    },
    {
      id: 'tab-four4',
      title: 'Enterprise Software Development',
      icon: faBuilding,
      content: 'Optimize your business operations with our enterprise-grade software solutions designed for scalability and security. Our enterprise software development services help businesses integrate, automate, and streamline processes, ensuring efficiency and long-term growth. Our top enterprise software development services are:',
      features: [
        'Custom Enterprise Software Development',
        'Enterprise Mobile Application Development',
        'Enterprise Web Development',
        'Legacy Application Modernization',
        'Software Integration Services'
      ]
    },
    {
      id: 'tab-five5',
      title: 'Blockchain Solutions',
      icon: faLink,
      content: 'Leverage the power of blockchain technology for enhanced security, transparency, and efficiency. At Webkorps, we develop custom blockchain solutions, including smart contracts, decentralized applications (DApps), and NFT marketplaces, ensuring next-gen business innovation. Our top Blockchain development services are:',
      features: [
        'Custom Blockchain Application Development',
        'Blockchain Protocol Development',
        'Enterprise Blockchain Solutions',
        'DAO Implementation and Development',
        'NFT Marketplace Development'
      ]
    },
    {
      id: 'tab-six6',
      title: 'AI-ML Solutions',
      icon: faBrain,
      content: 'Unlock new opportunities with our AI and machine learning solutions that promote automation, facilitate data-driven decision-making, and enhance predictive analytics. From chatbots to deep learning models, we incorporate AI to improve efficiency and business intelligence. Our top AI-ML development services are:',
      features: [
        'Machine Learning Model Development',
        'Natural Language Processing Solutions',
        'AI Product Development & Integration',
        'AI-Powered Chatbots & Virtual Assistants',
        'AI-ML Powered Cybersecurity Solutions'
      ]
    },
    {
      id: 'tab-seven7',
      title: 'IoT Development',
      icon: faMicrochip,
      content: 'Connect devices, data, and systems with our IoT development services. We develop smart, data-driven IoT solutions for industries such as healthcare, manufacturing, and smart homes, enabling real-time monitoring and automation. Our top IoT development services are:',
      features: [
        'IoT Software Development',
        'IoT Mobile Application Development',
        'IoT Web Application Development',
        'IoT Wearable App Development Services',
        'Industrial IoT Services and Solutions'
      ]
    },
    {
      id: 'tab-eight8',
      title: 'IT Staff Augmentation',
      icon: faUsersGear,
      content: 'Enhance your team with top-notch IT talent through our IT staff augmentation services. Whether you require developers, designers, or technology experts, we provide skilled IT professionals who will seamlessly integrate with your in-house team. Our top IT Staff Augmentation services are:',
      features: [
        'On-Demand Staff Augmentation',
        'Dedicated Development Team',
        'Short-Term & Long-Term IT Staffing',
        'Remote & On-Site IT Staffing Solutions',
        'Full-Time & Part-Time IT Professionals'
      ]
    },
    {
      id: 'tab-nine9',
      title: 'E-Commerce Development',
      icon: faCartShopping,
      content: 'Launch and scale your online store using our e-commerce development services. We create secure, scalable, and feature-rich e-commerce platforms that integrate seamless payment gateways, product catalogs, and personalized shopping experiences. Our top E-Commerce development services are:',
      features: [
        'E-Commerce Mobile App Development',
        'E-Commerce Website Design and Development',
        'E-Commerce Integration',
        'E-Commerce Migration and Upgrades',
        'Platform-Based Development'
      ]
    },
    {
      id: 'tab-ten10',
      title: 'Managed IT Services',
      icon: faScrewdriverWrench,
      content: 'Ensure 24/7 IT support, security, and maintenance with our managed IT services. From cloud solutions to cybersecurity management, we provide end-to-end IT support, keeping your systems optimized, secure, and running smoothly. Our top managed IT services are:',
      features: [
        'Cloud Management',
        'IT Compliance Management',
        'Data Backup & Disaster Recovery',
        'Server Management',
        'Cybersecurity Services'
      ]
    }
  ]
}
const Home = () => {
  const navigate = useNavigate();
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);
  const partners = [
    {
      img: "https://webkorps-app.s3.us-east-1.amazonaws.com/adobe.webp",
      alt: "our official OEM Partners adobe",
      width: 100,
      height: 50,
    },
    {
      img: "https://webkorps-app.s3.us-east-1.amazonaws.com/fortinet.webp",
      alt: "our official OEM Partners fortinet",
      width: 100,
      height: 50,
    },

    {
      img: "https://webkorps-app.s3.us-east-1.amazonaws.com/cisco.webp",
      alt: "our official OEM Partners cisco",
      width: 100,
      height: 50,
    },
    {
      img: "https://webkorps-app.s3.us-east-1.amazonaws.com/f5.webp",
      alt: "our official OEM Partners f5",
      width: 100,
      height: 50,
    },
    {
      img: "https://webkorps-app.s3.us-east-1.amazonaws.com/hubspot.webp",
      alt: "our official OEM Partners hubspot",
      width: 100,
      height: 50,
    },
    {
      img: "https://webkorps-app.s3.us-east-1.amazonaws.com/juniper.webp",
      alt: "our official OEM Partners juniper",
      width: 100,
      height: 50,
    },
    {
      img: "https://webkorps-app.s3.us-east-1.amazonaws.com/manage+engine.webp",
      alt: "our official OEM Partners manage engine",
      width: 100,
      height: 50,
    },
    {
      img: "https://webkorps-app.s3.us-east-1.amazonaws.com/microsoft.webp",
      alt: "our official OEM Partners microsoft",
      width: 100,
      height: 50,
    },
    {
      img: "https://webkorps-app.s3.us-east-1.amazonaws.com/salesforce.webp",
      alt: "our official OEM Partners salesforce",
      width: 100,
      height: 50,
    },
    {
      img: "https://webkorps-app.s3.us-east-1.amazonaws.com/sophos.webp",
      alt: "our official OEM Partners sophos",
      width: 100,
      height: 50,
    },
    {
      img: "https://webkorps-app.s3.us-east-1.amazonaws.com/sysdig.webp",
      alt: "our official OEM Partners sysdig",
      width: 100,
      height: 50,
    },
    {
      img: "https://webkorps-app.s3.us-east-1.amazonaws.com/trellix.webp",
      alt: "our official OEM Partners trellix",
      width: 100,
      height: 50,
    },
    {
      img: "https://webkorps-app.s3.us-east-1.amazonaws.com/cloudsek.webp",
      alt: "our official OEM Partners cloudsek",
      width: 100,
      height: 50,
    },
    {
      img: "https://webkorps-app.s3.us-east-1.amazonaws.com/aws.webp",
      alt: "our official OEM Partners aws",
      width: 100,
      height: 50,
    }
  ];
  const partnersLoop = [...partners, ...partners];

  const settings = {
    dots: false,
    infinite: false, // Prevents looping when there's only one slide
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnDotsHover: false,
  };
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobileOrTablet(window.innerWidth <= 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);


  const slides = [
    {
      img: isMobileOrTablet
        ? 'https://webkorps-app.s3.us-east-1.amazonaws.com/leading-it-solutions-and%2Bit-services-provider-for-mobile.jpg'
        : 'https://webkorps-app.s3.us-east-1.amazonaws.com/leading-it-solutions-and-it-services-provider.jpg',
      title: 'We Code Solutions, Not Just Software ',
      subtitle: 'Step Into The Digital Age With Our Cutting-Edge IT Solutions! ',
      description:
        "Transform your business with innovative, scalable, and future-ready IT solutions. As a prominent IT solutions provider, we deliver customized business IT solutions to enhance growth, efficiency, and success in the digital era.",
    },
    // {
    //   img: 'https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-at-indiasoft-2025.webp',
    //   title: 'Meet Webkorps at INDIASOFT 2025 ',
    //   description: 'Experience the impact of innovation and collaboration firsthand. Visit Webkorps at INDIASOFT 2025 to explore groundbreaking ideas, build strategic connections, and shape the future of technology together.',
    //   eventDetails: {
    //     booth: 'P102',
    //     hall: '1',
    //     dates: 'March 19-21, 2025',
    //     location: 'Bharat Mandapam, New Delhi, India'
    //   }
    // },
  ];

  useEffect(() => {
    AOS.init({
      duration: 500, easing: "ease",
      once: true,
    });
  }, []);

  const handleScroll = () => {
    if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
      scrollRef.current.scrollLeft = 0;
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    let scrollInterval;

    const startScrolling = () => {
      if (!isPaused && scrollRef.current) {
        scrollInterval = setInterval(() => {
          scrollRef.current.scrollLeft += 1;
        }, 50);
      }
    };
    startScrolling();
    return () => {
      clearInterval(scrollInterval);
    };
  }, [isPaused]);

  return (
    <div className="overflow-hidden " >
      <Helmet>
        <title>Leading IT Solutions and IT Services Provider | Webkorps</title>
        <meta
          name="description"
          content="Discover innovative IT solutions with Webkorps, a trusted IT service provider offering scalable and secure IT services to drive your digital transformation and business growth."
        />


        <meta property="og:url" content="https://www.webkorps.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Leading IT Solutions and IT Services Provider | Webkorps" />
        <meta property="og:description" content="Discover innovative IT solutions with Webkorps, a trusted IT service provider offering scalable and secure IT services to drive your digital transformation and business growth." />
        <meta property="og:image" content="https://webkorps-app.s3.us-east-1.amazonaws.com/it-solutions-and-it-services-provider.webp" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="webkorps.com" />
        <meta property="twitter:url" content="https://www.webkorps.com" />
        <meta name="twitter:title" content="Leading IT Solutions and IT Services Provider | Webkorps" />
        <meta name="twitter:description" content="Discover innovative IT solutions with Webkorps, a trusted IT service provider offering scalable and secure IT services to drive your digital transformation and business growth." />
        <meta name="twitter:image" content="https://webkorps-app.s3.us-east-1.amazonaws.com/it-solutions-and-it-services-provider.webp" />

        <link rel="canonical" href="https://www.webkorps.com/" />
        <link rel="preload" href="https://webkorps-app.s3.us-east-1.amazonaws.com/it-solutions-and-it-services-provider.webp" as="image" />
      </Helmet>
      <Header />

      <div className="w-full h-auto  font-inter pt-[80px]">
        <div className="w-full  content">
          <Slider {...settings} >
            {slides.map((slide, index) => (
              <div key={index} className="relative w-full  2xl:h-[45rem]   w-full h-[55rem] xl:h-[33rem] ipad-pro:h-[35rem] md:h-[35rem]">
                <img
                  width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"
                  src={slide.img}
                  alt="leading IT solutions and IT services provider"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex justify-center ipad-pro:items-start items-center xl:items-start xl:text-left  ipad-pro:text-left text-center flex-col  px-[5%] xl:px-[50px]  ipad-pro:px-[50px]">
                  <h1
                    className="text-3xl xl:text-5xl text-white font-bold"
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                  ></h1>
                  {slide.subtitle && <h3 className="text-xl text-white font-semibold mt-4">{slide.subtitle}</h3>}
                  <p className="xl:text-left ipad-pro:text-left text-center text-white mt-[2.5rem]  text-[0.9375rem] xl:text-[1.1rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] font-inter w-[50%] ">{slide.description}</p>
                  {slide.eventDetails && (
                    <div className="text-white mt-6 xl:text-left  ipad-pro:text-left text-center">
                      <p className="text-lg font-bold flex xl:flex-row ipad-pro:flex-row flex-col  items-center"> <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"
                        src="/assets/ticket-office.png"
                        alt="Icon"
                        className="w-[6%] h-[10%] mr-[12px] md:w-[2%] md:h-[10%] ipad-pro:h-[10%] ipad-pro:w-[2%] invert"
                      />Booth Number: {slide.eventDetails.booth} | Hall: {slide.eventDetails.hall}</p>
                      <p className="text-lg font-medium flex items-center xl:flex-row ipad-pro:flex-row flex-col"><img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"
                        src="/assets/gps.png"
                        alt="Icon"
                        className="w-[6%] h-[10%] mr-[12px] md:w-[2%] md:h-[10%] ipad-pro:h-[10%] ipad-pro:w-[2%] invert"
                      /> {slide.eventDetails.dates}</p>
                      <p className="text-lg font-medium flex items-center xl:flex-row ipad-pro:flex-row flex-col"><img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"
                        src="/assets/calendar.png"
                        alt="Icon"
                        className="w-[6%] h-[10%] mr-[12px] md:w-[2%] md:h-[10%] ipad-pro:h-[10%] ipad-pro:w-[2%] invert"
                      /> {slide.eventDetails.location}</p>
                    </div>
                  )}
                  {!slide.eventDetails && <div className=" w-full text-white  xl:mt-5 2xl:mt-10 md:mt-10 mt-14  flex flex-col items-center sm:items-center md:items-start lg:items-start gap-6  ">
                    <p
                      className="font-bold text-[22px] md:text-[22px] lg:text-[25px] leading-6 md:leading-7 lg:leading-[30px] "
                    >
                      Our Official Partners
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 xl:gap-6 md:gap-4 ipad-pro:gap-4 ">
                      <div className="w-[110px] sm:w-[110px] md:w-[115px] h-[55px] p-2 border-[0.63px] shadow-custom border-[0.8px] border-neutral-500 border-opacity-40 bg-white rounded-[15px]  flex justify-center items-center shadow-lg">
                        <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"

                          src="https://webkorps-app.s3.us-east-1.amazonaws.com/our-official-partners-adobe.webp"
                          alt="our official partners adobe"
                          className="max-w-full max-h-full w-[84px] h-[22px]"
                        />
                      </div>
                      <div className="w-[110px] sm:w-[110px] md:w-[115px] h-[55px] border-[0.63px] shadow-custom border-[0.8px] border-neutral-500 border-opacity-40 bg-white rounded-[15px] p-2 flex justify-center items-center shadow-lg">
                        <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"

                          src="https://webkorps-app.s3.us-east-1.amazonaws.com/our-official-partners-manageengine.webp"
                          alt="our official partners manageengine"
                          className="max-w-full max-h-full w-[83px] h-[46px]"
                        />
                      </div>
                      <div className="w-[110px] sm:w-[110px]  md:w-[115px] h-[55px] border-[0.63px] shadow-custom border-[0.8px] border-neutral-500 border-opacity-40 bg-white rounded-[15px]  p-2 flex justify-center items-center shadow-lg">
                        <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"

                          src="https://webkorps-app.s3.us-east-1.amazonaws.com/our-official-partners-microsoft.webp"
                          alt="our official partners microsoft"
                          className="h-5 max-w-full w-[28px] h-[28px]"
                        />
                        <p className="sm:ml-1 md:ml-1 lg:ml-1 font-medium text-[10px] leading-[11px] sm:text-[10px] xl:text-[10px] xl:leading-[11px] text-black">Microsoft</p>
                      </div>

                      <div className="w-[110px] sm:w-[110px] md:w-[115px] h-[55px] border-[0.63px] shadow-custom border-[0.8px] border-neutral-500 border-opacity-40 bg-white rounded-[15px]  p-2 flex justify-center items-center shadow-lg">
                        <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"

                          src="https://webkorps-app.s3.us-east-1.amazonaws.com/our-official-partners-hubspot.webp"
                          alt="our official partners hubspot"
                          className="max-w-full  w-[74px] h-[21px]"
                        />
                      </div>
                    </div>
                  </div>}
                  {!slide.eventDetails && <Link to={'/contact'} className="flex xl:w-[30%] ipad-pro:w-full w-full  flex-col md:flex-row ipad-pro:flex-row xl:flex-row items-center justify-center md:justify-start ipad-pro:items-start  ipad-pro:justify-start gap-6  md:gap-9 xl:gap-9 ipad-pro:gap-6 mt-[30px] sm:flex-col sm:mt-8 md:mt-10 xl:mt-10 2xl:mt-16  ipad-pro:mt-10">
                    <motion.button
                      type="button"
                      whileHover={{
                        backgroundColor: '#FFFFFF',
                        color: '#1887C9',
                        borderColor: '#1887C9',
                        transition: { duration: 0.1 },
                      }}
                      className="group relative overflow-hidden inline-flex items-center justify-center text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-base text-center md:text-lg px-3 md:px-4 py-3 sm:py-5 md:py-2 border-2 border-[#1887C9] bg-[#1887C9] transition-all duration-300"
                    >
                      <img
                        width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"
                        src="https://webkorps-app.s3.us-east-1.amazonaws.com/schedule-a-call.webp"
                        alt="schedule-a-call"
                        className="w-5 h-5 mr-2 md:w-5 md:h-5 transition-all duration-300 group-hover:invert"
                      />
                      Schedule a Call Now!
                    </motion.button>
                  </Link>}

                  {/* {slide.eventDetails &&
                    <div className="flex xl:w-[40%] ipad-pro:w-[40%] w-full flex-col md:flex-row ipad-pro:flex-row xl:flex-row items-center justify-center md:justify-start ipad-pro:items-start ipad-pro:justify-start gap-6 md:gap-9 xl:gap-9 ipad-pro:gap-6 mt-[30px] sm:flex-col sm:mt-8 md:mt-12 xl:mt-10 2xl:mt-16 ipad-pro:mt-10">

                      <motion.button
                        whileHover={{
                          backgroundColor: '#FFFFFF',
                          color: '#1887C9',
                          borderColor: '#1887C9',
                          transition: { duration: 0.1 },
                        }}
                        className="group relative overflow-hidden inline-flex items-center justify-center text-white focus:outline-none focus:ring-4 focus:ring-blue-300 text-[18px] md:text-[20px] leading-[36px] md:leading-[40px] font-bold border-2 border-[#1887C9] bg-[#1887C9] transition-all duration-300 rounded-[30px] h-[50px] md:h-[60px] px-4 py-2 "
                        data-aos="zoom-in"
                        onClick={() => window.open('https://www.webkorps.com/event/indiasoft', '_blank')}
                      >
                        Know More!
                      </motion.button>

                      <motion.button
                        type="button"
                        whileHover={{
                          backgroundColor: '#FFFFFF',
                          color: '#1887C9',
                          borderColor: '#1887C9',
                          transition: { duration: 0.1 },
                        }}
                        className="group relative overflow-hidden inline-flex items-center justify-center text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-base text-center md:text-lg px-3 md:px-4 py-3 sm:py-5 md:py-2 border-2 border-[#1887C9] bg-[#1887C9] transition-all duration-300"
                        onClick={() => window.open('https://calendly.com/webkorpsservices/indiasoft', '_blank')}
                      >
                        <img
                          width="800" height="600" loading="lazy"
                          src="https://webkorps-app.s3.us-east-1.amazonaws.com/schedule-a-call.webp"
                          alt="schedule-a-call"
                          className="w-5 h-5 mr-2 md:w-5 md:h-5 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                        />
                        Schedule a Call Now!
                      </motion.button>

                    </div>
                  } */}
                </div>
              </div>

            ))}
          </Slider>
        </div>
        <div className=" my-[4rem] mx-[7%] md:mx-[7%] xl:mx-[50px] ipad-pro:mx-[50px]" >
          <div className="flex flex-col lg:flex-row items-start lg:items-center border border-gray-300 rounded-[30px] shadow-custom-lg   px-[3%] xl:px-[1.875rem] ipad-pro:px-[1.875rem]  p-[30px] gap-[3.125rem] justify-center" data-aos="fade-left">
            <h2 className=" w-[30%] text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] text-black font-inter font-bold whitespace-nowrap ">
              Our OEM Partners
            </h2>
            <div className="w-[70%]  bg-white ">
              <div className="relative">
                <div
                  ref={scrollRef}
                  className="flex gap-12 overflow-x-auto scrollbar-hidden"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  {partnersLoop?.map((partner, index) => (
                    <div
                      key={index}
                      className="w-[110px] sm:w-[110px] md:w-[130px] h-[60px] p-2 border border-neutral-500  bg-white rounded-[15px] flex justify-center items-center shadow-lg"
                    >

                      <img
                        src={partner.img}
                        alt={partner.alt}
                        width={partner.width}
                        height={partner.height}
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <CompanyStatsSection bgColor='bg-white' title={'Powering Businesses with Proven Excellence'} para1={'With over 8 years of industry expertise, Webkorps has been at the forefront of delivering innovative and high-quality software solutions. Backed by a team of 250+ skilled professional developers, we have successfully executed 500+ projects across diverse industries, helping businesses achieve digital transformation and operational excellence.'} para2={'Our global presence spans 30+ countries, enabling us to cater to a wide range of clients with customized solutions that drive efficiency and growth. With a 98% client satisfaction rate, we remain committed to delivering exceptional results, fostering long-term partnerships, and pushing the boundaries of technology innovation.'} />
        {features &&
          <div className="bg-gradient-to-t from-[#001833] to-[#001833]  z-10 font-inter overflow-hidden">
            <div className=" px-[5%] xl:px-[50px] ipad-pro:px-[50px]">
              <div className="flex xl:flex-row md:flex-row ipad-pro:flex-col flex-col items-stretch gap-x-[30px] mt-[4rem] 2xl:mt-[4rem] xl:mt-[4rem] ipad-pro:mt-[4rem] md:mt-[4rem] mb-[4rem]   shadow-custom-lg  bg-white rounded-[20px] px-[3%] xl:px-[30px] ipad-pro:px-[20px] py-[2rem] 2xl:py-[3rem] xl:py-[3rem] ipad-pro:py-[3rem] md:py-[3rem] ">
                <AboutUsCard />
                <div className="flex flex-col xl:w-[55%] md:w-[55%] ipad-pro:w-[100%] w-[100%]">
                  <div className="w-full xl:text-left ipad-pro:text-left text-center" data-aos="fade-right">
                    <h2 className="font-bold text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem] text-gray-700 "
                      dangerouslySetInnerHTML={{ __html: features?.title }}>
                    </h2>
                    <p className="font-normal text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] pt-[30px] text-gray-700 ">
                      {features?.description}
                    </p>
                  </div>
                  <div className="flex flex-col mt-[30px] w-full">
                    <motion.ul
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                      {features?.data.map((feature, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start space-x-3"
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <img
                            width="800"
                            height="600"
                            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                            loading="lazy"
                            src="https://webkorps-app.s3.us-east-1.amazonaws.com/arrow-check-icon.svg"
                            alt="arrow"
                            className="h-4 w-4 mt-[5px]"
                          />
                          <span className="text-[14px] xl:text-[16px] ipad-pro:text-[16px] md:text-[16px] text-gray-700 ">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        {
          offeringData &&
          <OfferingsSection tabsData={offeringData?.tabsData} description={offeringData?.description} heading={offeringData.heading} bgColor={'bg-white'} CardBgColor='bg-custom-blue-gradient' services={true} />
        }
        <CTASection title={'Transform Your Vision into Reality with Our Expert IT Services!'} description={'From software development to AI-driven solutions, we deliver innovative, scalable, and secure services tailored to your business needs. Partner with us to accelerate growth and stay ahead in the digital era.'} buttonText={'Get Started Today!'} bgColor='bg-custom-blue-gradient' link={'/contact'} ctaImage={websiteCTAImage} textColor={"black"} />

      </div>
      <TopIntregation />
      <Main />
    </div>
  );
};
export default Home;
