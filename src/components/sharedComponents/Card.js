import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const Card = ({ image, title, descriptions, tag, altText }) => {
  return (
    <div className="relative font-inter  w-full  sm:w-[90%] md:w-[100%] lg:w-[95%] h-[100%] rounded-[7%] overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300 mx-auto">
      <div className="card-image-container relative w-full h-[250px] md:h-[295px] transition-transform duration-300 cursor-pointer">
        <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"

          src={image?.src || image}
          alt={altText}
          className="w-full h-[100%]  transition-transform duration-300 hover:scale-110"
        />

      </div>
      <div className="absolute inset-0 flex flex-col items-start justify-end bg-black bg-opacity-60 backdrop-blur-sm text-white opacity-100 hover:opacity-0 transition-opacity duration-300 p-3  top-[75%]">
        {tag && (
          <p className="bg-gray-200 text-gray-700 rounded-full px-3  text-sm font-semibold  py-[2px]">
            {tag}
          </p>
        )}
        <p className="text-white font-bold text-[16px] md:text-[20px] lg:text-[22px] leading-[20px] md:leading-[25px] mt-1 lg:leading-[25px]">
          {title}
        </p>

      </div>
      <div className="absolute inset-0 flex flex-col items-start justify-end bg-black bg-opacity-60 backdrop-blur-sm text-white opacity-0 hover:opacity-100 transition-opacity duration-300 p-4">
        {tag && (
          <p className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mb-2">
            {tag}
          </p>
        )}
        <p className="text-white font-bold text-[16px] md:text-[20px] lg:text-[24px] leading-[20px] md:leading-[28px] lg:leading-[32px]">
          {title}
        </p>
        <p className="text-white text-[12px] md:text-[13px] leading-[18px] md:leading-[20px] mt-1">
          {descriptions}
        </p>
      </div>
    </div>
  );
};


const CardContainer = () => {
  const webcards = [
    // { image: "https://webkorps-app.s3.us-east-1.amazonaws.com/asset-panda.webp", title: "Asset Panda", descriptions: `Asset Panda's asset inventory management tool works on smartphones, tablets, and computers, so you always know the status of your assets.`, tag: "Asset Tracking & Management", altText: 'asset-panda' },
    { image: "https://webkorps-app.s3.us-east-1.amazonaws.com/cryoport.webp", title: "Cryoport", descriptions: `Cryoport Systems offers integrated temperature-controlled supply chain solutions.`, tag: "Supply Chain & Logistic", altText: 'cryoport' },
    { image: "https://webkorps-app.s3.us-east-1.amazonaws.com/paypal-app.webp", title: "PayPal", descriptions: `PayPal is a secure platform that simplifies global money transactions.`, tag: "FinTech Services", altText: 'paypal-app' },
    { image: "https://webkorps-app.s3.us-east-1.amazonaws.com/sonic-healthcare.webp", title: "Sonic Healthcare", descriptions: `Sonic Healthcare provides medical diagnostics and lab services worldwide.`, tag: "Hospitality Services", altText: 'sonic-healthcare' },
    { image: "https://webkorps-app.s3.us-east-1.amazonaws.com/wendy-digital-ordering-solutions-for-food-industry.webp", title: "Wendy’s", descriptions: `Wendy's is a fast-food chain known for fresh beef and square burgers.`, tag: "Hospitality & Food", altText: 'wendy-digital-ordering-solutions-for-food-industry' },
    {
      image: "https://webkorps-app.s3.us-east-1.amazonaws.com/abp-news-mobile-application.webp", title: "ABP News", descriptions: `ABP News is a leading Indian media organization that delivers news and updates through multiple platforms. The company offers a mobile app that provides real-time news, personalized content, and interactive features for users.`, tag: "Telecommunication", altText: 'abp-news-mobile-application'
    },
    {
      image: "https://webkorps-app.s3.us-east-1.amazonaws.com/scoutr-talent-management-system.webp", title: "Scoutr", descriptions: `Scoutr is a talent management platform that connects job seekers with positions based on their skills and aspirations. The platform uses a sophisticated algorithm to match candidates with roles, streamlining the hiring process for companies.`, tag: "Information & Technology", altText: "scoutr-talent-management-system"
    },
    {
      image: "https://webkorps-app.s3.us-east-1.amazonaws.com/cloudshim.webp", title: "Cloudshim", descriptions: `CloudShim is a cloud management platform that helps organizations optimize their cloud resources and manage costs. The platform provides real-time insights into cloud usage, allowing businesses to identify inefficiencies and improve operations.`, tag: "Cloud-based", altText: "cloudshim"
    },
    { image: "https://webkorps-app.s3.us-east-1.amazonaws.com/rocketscreen.webp", title: "Rocketscreens", descriptions: `RocketScreens`, tag: "Information & Technology", altText: 'rocketscreen' },
    {
      image: "https://webkorps-app.s3.us-east-1.amazonaws.com/verizon-hr-management-automation-tool.webp", title: "Verizon", descriptions: `Verizon is a global telecommunications leader, providing wireless, broadband, and media services. The company is focused on integrating advanced technologies like 5G and IoT to enhance connectivity and operational efficiency.`, tag: "FinTech Services", altText: "verizon-hr-management-automation-tool"
    },
    {
      image: "https://webkorps-app.s3.us-east-1.amazonaws.com/cardinal-hire.webp", title: "Cardinal Hire", descriptions: `CardinalHire is a recruitment platform that bridges the gap between tech talent and innovative companies. The platform facilitates faster placements for roles like software engineers, designers, and product managers.`, tag: "Information Technology", altText: "cardinal-hire"
    },
    {
      image: "https://webkorps-app.s3.us-east-1.amazonaws.com/cigna-healthcare-global.jpg", title: "Cigna", descriptions: `Cigna is a Fortune 15 global healthcare and insurance company serving over 175 million customers worldwide. They offer a broad portfolio of health, life, accident insurance, and Medicare/Medicaid products.`, tag: "Healthcare", altText: "cigna-healthcare-global"
    },
  ];

  const mobcards = [
    { image: "https://webkorps-app.s3.us-east-1.amazonaws.com/pebble-custom-mobile-app-for-pebble-smartwatches.webp", title: "Pebble", descriptions: `Pebble makes smartwatches with long battery life and user-friendly interfaces.`, tag: "E-Commerce", altText: 'pebble-custom-mobile-app-for-pebble-smartwatches' },
    { image: "https://webkorps-app.s3.us-east-1.amazonaws.com/my-kia-app.webp", title: "My Kia", descriptions: `MyKia enhances the experience of Kia owners by providing personalized services.`, tag: "Automotive & Manufacturing", altText: 'my-kia-app' },
    { image: "https://webkorps-app.s3.us-east-1.amazonaws.com/footino.webp", title: "Footino", descriptions: `Footino is a platform offering real-time football match updates and insights.`, tag: "Sports & Fitness", altText: 'footino' },
    { image: "https://webkorps-app.s3.us-east-1.amazonaws.com/fast-home.webp", title: "Fast Home", descriptions: `Fast Home delivers meals from local restaurants to your door quickly and reliably.`, tag: "Hospitality & Food", altText: 'fast-home' },
    { image: "https://webkorps-app.s3.us-east-1.amazonaws.com/tonik-bank.webp", title: "tonik-bank", descriptions: `Tonik is a digital bank offering easy, instant banking solutions.`, tag: "FinTech Services", altText: "tonik-bank" },
    { image: "https://webkorps-app.s3.us-east-1.amazonaws.com/cannopie.webp", title: "Cannopie", descriptions: `Cannopie offers support and resources for pregnant women.`, tag: "Healthcare", altText: "canopie" },
    {
      image: "https://webkorps-app.s3.us-east-1.amazonaws.com/bhai-bandhu.jpg", title: "Bhai Bandhu", descriptions: `Bhai Bandhu is a B2B marketplace that connects wholesalers and retailers in the Indian ethnic wear market. The platform allows wholesalers to create product catalogs, manage orders, and streamline communication with retailers.`, tag: "E-Commerce", altText: 'bhai-bandhu'
    },
    // {
    //   image: "https://webkorps-app.s3.us-east-1.amazonaws.com/owens-corning.webp", title: "Owens Corning", descriptions: `Owens Corning is a global leader in insulation, roofing, and fiberglass composites manufacturing. The company focuses on innovation and sustainability, adapting to environmental regulations and market demands.`, tag: "Real state", altText: "owens-corning"
    // },
    {
      image: "https://webkorps-app.s3.us-east-1.amazonaws.com/e-learning-platform-with-ai-personalization-and-enhanced-security.webp", title: "ACIMA", descriptions: `Acima is a lease-to-own service provider that allows customers to purchase items without traditional credit. The platform offers flexible payment options, making it easier for customers to lease products from a variety of retailers.`, tag: "Fintech", altText: "e-learning-platform-with-ai-personalization-and-enhanced-security",
    },
    {
      image: "https://webkorps-app.s3.us-east-1.amazonaws.com/abb.webp", title: "ABB", descriptions: `ABB is a global leader in electrification and automation technologies, serving industries around the world. They focus on integrating IoT technologies to enhance operational efficiency and drive performance across their business sectors.`, tag: "AI & IoT", altText: 'abb'
    },
    {
      image: "https://webkorps-app.s3.us-east-1.amazonaws.com/inkind-software.webp", title: "InKind", descriptions: `inKind is a platform that rewards loyal customers while supporting local restaurants with cashback and exclusive offers. The app simplifies the process of earning and redeeming rewards for diners, encouraging repeat visits to participating restaurants.`, tag: "Hospitality & Food", altText: 'inkind-software'
    },
    {
      image: "https://webkorps-app.s3.us-east-1.amazonaws.com/styla-e-commerce-solutions.jpg", title: "Styla", descriptions: `Styla is a storefront technology company offering solutions for e-commerce platforms like BigCommerce and Shopware. Their key products include a Progressive Web App (PWA) storefront, no-code page builder, and image optimization tools.`, tag: "E-Commerce", altText: 'styla-e-commerce-solutions'
    },
  ];

  const [isPaused, setIsPaused] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const webScrollRef = useRef(null);
  const mobScrollRef = useRef(null);


  const webcardsLoop = [...webcards, ...webcards];
  const mobcardsLoop = [...mobcards, ...mobcards];
  const handleScroll = () => {
    if (webScrollRef.current.scrollLeft <= webScrollRef.current.scrollWidth / 2) {
      webScrollRef.current.scrollLeft = webScrollRef.current.scrollWidth;
    }
  };
  const handleMobScroll = () => {
    if (mobScrollRef.current.scrollLeft >= mobScrollRef.current.scrollWidth / 2) {
      mobScrollRef.current.scrollLeft = 0;
    }
  };

  useEffect(() => {
    const scrollContainer = webScrollRef.current;

    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [])
  useEffect(() => {
    const mobContainer = mobScrollRef.current;

    if (mobContainer) {
      mobContainer.addEventListener('scroll', handleMobScroll);
    }

    return () => {
      if (mobContainer) {
        mobContainer.removeEventListener('scroll', handleMobScroll);
      }
    };
  }, []);
  useEffect(() => {
    let webScrollInterval;
    let mobScrollInterval;

    if (!isPaused) {
      if (webScrollRef.current && webScrollRef.current.scrollWidth > webScrollRef.current.clientWidth) {
        webScrollInterval = setInterval(() => {
          if (webScrollRef.current.scrollLeft <= 0) {
            webScrollRef.current.scrollLeft = webScrollRef.current.scrollWidth; // Reset to rightmost position
          } else {
            webScrollRef.current.scrollLeft -= 2; // Move right to left
          }
        }, 50);
      }

      if (mobScrollRef.current && mobScrollRef.current.scrollWidth > mobScrollRef.current.clientWidth) {
        mobScrollInterval = setInterval(() => {
          if (mobScrollRef.current.scrollLeft >= mobScrollRef.current.scrollWidth - mobScrollRef.current.clientWidth) {
            mobScrollRef.current.scrollLeft = 0; // Reset to leftmost position
          } else {
            mobScrollRef.current.scrollLeft += 2; // Move left to right
          }
        }, 50);
      }
    }

    return () => {
      clearInterval(webScrollInterval);
      clearInterval(mobScrollInterval);
    };
  }, [isPaused]);




  return (
    <div className=" py-[4rem] w-full font-inter text-center sm:text-center md:text-left bg-white lg:text-left h-auto ">
      <div className="flex font-inter flex-col items-center overflow-hidden mx-[7%] md:mx-[7%] xl:mx-[50px] ipad-pro:mx-[50px] justify-center p-12 px-[3%] xl:px-[30px] ipad-pro:px-[30px] shadow-custom-lg rounded-[20px] bg-white">

        <div className="w-full text-center   " data-aos="fade-left">
          <h2 className=" font-bold text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem]  text-[#061C3D]"
            dangerouslySetInnerHTML={{ __html: 'Transforming Ideas into Reality' }}
          >
          </h2>
          <h2 className=" font-bold text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem]  text-[#1887C9]"
            dangerouslySetInnerHTML={{ __html: 'Our Portfolio of Successful IT Projects' }}
          >
          </h2>
          <p className=" font-normal text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] pt-[30px] text-gray-700">
            {'Discover our portfolio of successful IT solutions, where innovation meets impact. We offer a range of services, including custom software development, enterprise applications, AI-driven solutions, and blockchain integrations. Our case studies demonstrate how we empower businesses with scalable, secure, and high-performance technology tailored to meet their unique needs.'}
          </p>
        </div>
        <div
          ref={webScrollRef}
          className="w-full flex gap-[1.5rem] overflow-x-auto scrollbar-hidden h-[100%] py-[30px]"
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight') webScrollRef.current.scrollLeft += 50;
            if (e.key === 'ArrowLeft') webScrollRef.current.scrollLeft -= 50;
          }}
          tabIndex={0}
        >
          {webcardsLoop.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative min-w-full sm:min-w-[50%] md:min-w-[33%] lg:min-w-[25%] max-w-full sm:max-w-[50%] md:max-w-[33%] lg:max-w-[25%] h-auto cursor-pointer overflow-hidden"
              onMouseEnter={() => {
                setIsPaused(true);
                setHoveredCard(card.id);
              }}
              onMouseLeave={() => {
                setIsPaused(false);
                setHoveredCard(null);
              }}
            >
              <Card {...card} />
            </motion.div>
          ))}
        </div>
        <div
          ref={mobScrollRef}
          className="w-full flex gap-[1.5rem] mt-[10px] overflow-x-auto scrollbar-hidden h-[100%] pt-[30px]"
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight') mobScrollRef.current.scrollLeft += 50;
            if (e.key === 'ArrowLeft') mobScrollRef.current.scrollLeft -= 50;
          }}
          tabIndex={0}
        >
          {mobcardsLoop.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative min-w-full sm:min-w-[50%] md:min-w-[33%] lg:min-w-[25%] max-w-full sm:max-w-[50%] md:max-w-[33%] lg:max-w-[25%] h-auto cursor-pointer overflow-hidden"
              onMouseEnter={() => {
                setIsPaused(true);
                setHoveredCard(card.id);
              }}
              onMouseLeave={() => {
                setIsPaused(false);
                setHoveredCard(null);
              }}
            >
              <Card {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;