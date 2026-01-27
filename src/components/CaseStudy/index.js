import React, { useEffect, useState } from 'react';
import Header from '../sharedComponents/Header';
import Footer from '../sharedComponents/footer';
import { Link, useNavigate } from 'react-router-dom';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Helmet } from 'react-helmet-async';
import HeroSectionUI from '../sharedComponents/HeroSectionUI';
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export const cardsData = [

  {
    id: 2,
    imageSrc: "https://webkorps-app.s3.us-east-1.amazonaws.com/cloudshim-cloud-management-and-cost-optimization-tool.webp",
    bgColor: 'bg-orange-500',
    altText: 'cloudshim-cloud-management-and-cost-optimization-tool',
    page: 'cloudshim',
    description: 'Cloudshim is a platform that allows to easily user to visualize, track, and map their AWS cloud resources. The platform is self-serve and has a rich set of features to ensure customers are running lean on the cloud.',
    title: 'Cloudshim',
    isMobile: false

  },
  {
    id: 3,
    imageSrc: "https://webkorps-app.s3.us-east-1.amazonaws.com/abb-digital-transformation-enhancing-efficiency-with-iot-integration.webp",
    bgColor: 'bg-red-500',
    altText: 'abb-digital-transformation-enhancing-efficiency-with-iot-integration',
    page: 'abb',
    description: `ABB is a global engineering company that provides solutions to make the future more sustainable and resource-efficient. ABB's electrification business enables the intelligent and efficient use of electricity from substation to socket.`,
    title: 'ABB',
    isMobile: false

  },
  // {
  //   imageSrc: "https://webkorps-app.s3.us-east-1.amazonaws.com/asset-panda-asset-tracking-and-management-platform.webp",
  //   bgColor: 'bg-blue-500',
  //   altText: 'asset-panda-asset-ttracking-and-management-platform',
  //   description: `Asset Panda's asset inventory management tool works on the devices you already have with you all the time – smartphones, tablets and computers – so there's no need to learn something entirely new. No matter where you are, you'll know when items are missing, depreciating, or need to be replaced.`,
  //   title: 'Asset Panda',
  //   page: 'assetpanda',
  //   isMobile: true
  // },

  {
    id: 4,
    imageSrc: "https://webkorps-app.s3.us-east-1.amazonaws.com/cryoport-temperature-controlled-logistics-and-supply-chain-solution.webp",
    bgColor: 'bg-blue-500',
    altText: 'cryoport-temperature-controlled-logistics-and-supply-chain-solution',
    page: 'cryoport',
    description: 'Cryoport Systems is a market leader in globally integrated temperature-controlled supply chain support for critical, irreplaceable products and materials in the life sciences industry. We are the proud single provider that supports all aspects of the life sciences supply chain.',
    title: 'Cryoport',
    isMobile: false

  },

  {
    id: 5,
    imageSrc: "https://webkorps-app.s3.us-east-1.amazonaws.com/cigna-healthcare-platform.webp",
    bgColor: 'bg-[#003FF5]',
    altText: 'cigna-healthcare-platform',
    title: 'Cigna',
    description: 'Cigna is a Fortune 15 global healthcare and insurance company founded in 1982, serving over 175 million customers worldwide. With a workforce of more than 70,000 employees, Cigna offers a diversified portfolio that includes health, life, accident insurance, and Medicare and Medicaid products.',
    page: 'cigna',
    isMobile: false
  },
  {
    id: 6,
    imageSrc: "https://webkorps-app.s3.us-east-1.amazonaws.com/cryoport-temperature-controlled-logistics-and-supply-chain-solution.webp",
    bgColor: 'bg-red-500',
    altText: 'cryoport-temperature-controlled-logistics-and-supply-chain-solution',
    title: 'E-Learning App',
    description: 'Webkorps successfully developed a confidential e-learning application designed to provide a comprehensive and engaging learning experience for users.',
    page: 'elearningapp',
    isMobile: false
  }, {
    id: 7,
    imageSrc: "https://webkorps-app.s3.us-east-1.amazonaws.com/abp-news-mobile-application-for-prominent-media-organization.webp",
    bgColor: 'bg-[#A11F15]',
    altText: 'abp-news-mobile-application-for-prominent-media-organization',
    title: 'ABP News',
    description: 'ABP News is a prominent media organization in India, delivering timely news and updates across various platforms. ',
    page: 'abpnews',
    isMobile: false
  }, {
    id: 8,
    imageSrc: "https://webkorps-app.s3.us-east-1.amazonaws.com/verizon-rpa-powered-hr-management-automation-tool.webp",
    bgColor: 'bg-[#EC3D26]',
    altText: 'verizon-rpa-powered-hr-management-automation-tool',
    title: 'Verizon',
    description: 'Verizon has initiated a project to enhance its Human Resource Management Automation (HRMA) by integrating Robotic Process Automation (RPA) into its HR operations.',
    page: 'verizon',
    isMobile: false
  }, {
    id: 9,
    imageSrc: "https://webkorps-app.s3.us-east-1.amazonaws.com/inkind-customer-loyalty-and-rewards-management-software-for-restaurant.jpg",
    bgColor: 'bg-[#E0B95E]',
    altText: 'inkind-customer-loyalty-and-rewards-management-software-for-restaurant',
    title: 'inKind',
    description: 'inKind is an innovative platform designed to reward loyal customers while supporting local restaurants. Founded by Johann Moonesinghe, inKind allows diners to earn cash back and exclusive rewards every time they dine at participating restaurants.',
    page: 'inkind',
    isMobile: false
  },
  //  {
  //   id: 10,
  //   imageSrc: "https://webkorps-app.s3.us-east-1.amazonaws.com/owens-corning-advanced-analytics-and-supply-chain-optimization-platforms.webp",
  //   bgColor: 'bg-[#C3307B]',
  //   altText: 'owens-corning-advanced-analytics-and-supply-chain-optimization-platforms',
  //   title: 'Owens Corning',
  //   description: 'Owens Corning is a leading American company specializing in the development and production of insulation, roofing, and fiberglass composites.',
  //   page: 'owenscorning',
  //   isMobile: false
  // },
   {
    id: 11,
    imageSrc: "https://webkorps-app.s3.us-east-1.amazonaws.com/cardinalhire-online-recruiting-software-and-hiring-platform.webp",
    bgColor: 'bg-blue-800',
    altText: 'cardinalhire-online-recruiting-software-and-hiring-platform',
    title: 'Cardinal Hire',
    description: 'CardinalHire is a dynamic platform designed to bridge the gap between top tech talent and leading tech companies.',
    page: 'cardinalhire',
    isMobile: false
  }, {
    id: 12,
    imageSrc: "https://webkorps-app.s3.us-east-1.amazonaws.com/scoutr-talent-management-system-with-advanced-matching-algorithms.webp",
    bgColor: 'bg-[#2E4488]',
    altText: 'scoutr-talent-management-system-with-advanced-matching-algorithms',
    title: 'Scoutr',
    description: 'Scoutr is an innovative platform designed to transform talent management by connecting organizations with both internal employees and external candidates.',
    page: 'scoutr',
    isMobile: false
  },
  {
    id: 13,
    imageSrc: "https://webkorps-app.s3.us-east-1.amazonaws.com/acima-lease-to-own-solutions-by-webkorps.jpg",
    bgColor: 'bg-[#020441]',
    altText: 'acima-lease-to-own-solutions-by-webkorps',
    title: 'ACIMA',
    description: 'Acima is a prominent lease-to-own service that allows customers to acquire items without the need for traditional credit or loans.',
    page: 'acima',
    isMobile: false
  }, {
    id: 14,
    imageSrc: "https://webkorps-app.s3.us-east-1.amazonaws.com/styla-streamlining-e-commerce-with-pwas-and-no-code-solutions.jpg",
    bgColor: 'bg-[#4A33CC]',
    altText: 'styla-streamlining-e-commerce-with-pwas-and-no-code-solutions',
    title: 'Styla',
    description: 'Styla is a cutting-edge storefront technology company that provides five integrated technologies designed for e-commerce platforms such as BigCommerce and Shopware.',
    page: 'styla',
    isMobile: false
  },
  {
    id: 15,
    imageSrc: "https://webkorps-app.s3.us-east-1.amazonaws.com/pebble-custom-mobile-app-for-pebble-smartwatches.webp",
    bgColor: 'bg-red-500',
    altText: 'pebble-custom-mobile-app-for-pebble-smartwatches',
    title: 'Pebble',
    description: 'Pebble is a renowned smartwatch brand known for its innovative features and user-friendly interface',
    page: 'pebble',
    isMobile: true
  },
  {
    id: 16,
    imageSrc: "https://webkorps-app.s3.us-east-1.amazonaws.com/sonic-healthcare-ai-driven-platform-for-diagnostic-servicesn.webp",
    bgColor: 'bg-blue-900',
    altText: 'sonic-healthcare-ai-driven-platform-for-diagnostic-services',
    title: 'Sonic Healthcare',
    description: 'Sonic Healthcare is a prominent global healthcare company that specializes in providing high-quality diagnostic services.',
    page: 'sonichealthcare',
    isMobile: true
  },
  {

    id: 17,
    imageSrc: "https://webkorps-app.s3.us-east-1.amazonaws.com/paypal-payment-platform-for-merchants.webp",
    bgColor: 'bg-orange-500',
    altText: 'paypal-payment-platform-for-merchants',
    description: 'PayPal recognized the need to improve its existing features to meet the evolving demands of merchants and consumers. Users sought a more integrated and customizable checkout experience that would allow them to tailor payment forms according to their branding.',
    title: 'PayPal',
    page: 'paypal',
    isMobile: false
  }, {
    id: 18,
    imageSrc: "https://webkorps-app.s3.us-east-1.amazonaws.com/digikagaz-document-automation-for-legal-professionals.webp",
    bgColor: 'bg-blue-800',
    altText: 'digikagaz-document-automation-for-legal-professionals',
    title: 'Digikagaz',
    description: 'DigiKagaz was conceived with the vision of revolutionizing the way legal professionals and individuals handle document automation.',
    page: 'digikagaz',
    isMobile: false
  },
  {
    id: 20,
    imageSrc: "https://webkorps-app.s3.us-east-1.amazonaws.com/bhaibhandhu.webp",
    bgColor: 'bg-purple-500',
    altText: 'bhai-bandhu-mobile-and-web-app-b2b-marketplace',
    title: 'Bhai Bandhu',
    description: 'Bhai Bandhu is an innovative B2B marketplace specifically designed for Indian ethnic wear, providing a platform that connects wholesalers with retailers and agents.',
    page: 'bhaibandhu',
    isMobile: true
  }, {
    id: 21,
    imageSrc: "https://webkorps-app.s3.us-east-1.amazonaws.com/the-fragrances-shop-mobile-app-to-enhancing-customer-engagement-and-loyalty.webp",
    bgColor: 'bg-blue-900',
    altText: 'the-fragrances-shop-mobile-app-to-enhancing-customer-engagement-and-loyalty',
    title: 'The Fragrance Shop',
    description: `The Fragrance Shop (TFS) is the UK's largest independent retailer of fragrances and beauty products, boasting over 200 stores nationwide and a comprehensive online presence.`,
    page: 'thefragranceshop',
    isMobile: true
  },
  {
    id: 22,
    imageSrc: "https://webkorps-app.s3.us-east-1.amazonaws.com/my-kia-app-mobile-app-for-integrated-sales-and-service.webp",
    bgColor: 'bg-gray-500',
    altText: 'my-kia-app-mobile-app-for-integrated-sales-and-service',
    description: `Standalone mobile app for Kia owners, integrating sales, service management, and loyalty programs to streamline the ownership experience.`,
    title: 'My Kia APP',
    page: 'mykiaapp',
    isMobile: true
  },
  {
    id: 23,
    imageSrc: "https://webkorps-app.s3.us-east-1.amazonaws.com/puravankara.webp",
    bgColor: 'bg-blue-800',
    altText: 'puravankara-email-solution-for-enhanced-communication-and-engagement',
    title: 'Purvankara',
    description: `Puravankara Limited is one of India's most admired and trusted real estate players, headquartered in Bengaluru. `,
    page: 'purvankara',
    isMobile: false
  },
  {
    id: 24,
    imageSrc: "https://webkorps-app.s3.us-east-1.amazonaws.com/canopie-mobile-app-for-maternal-mental-health.webp",
    bgColor: 'bg-blue-100',
    altText: 'canopie-mobile-app-for-maternal-mental-health',
    description: 'Canopie is a pioneering mobile application designed to enhance maternal health by providing accessible, evidence-based preventative mental health care for new and expecting mothers.',
    title: 'Canopie',
    page: 'canopie',
    isMobile: false

  },
  {
    id: 25,
    imageSrc: "https://webkorps-app.s3.us-east-1.amazonaws.com/shree-laxmi-sheels-crm-system-with-customizable-dashboards.webp",
    bgColor: 'bg-b-800',
    altText: 'shree-laxmi-sheels-crm-system-with-customizable-dashboards',
    title: 'Shree Laxmi Steels',
    description: 'Shree Laxmi Steels is a prominent Indian steel manufacturing brand committed to delivering high-quality steel products.',
    page: 'shreelaxmisteels',
    isMobile: false
  },
  {
    id: 26,
    imageSrc: "https://webkorps-app.s3.us-east-1.amazonaws.com/property-finder-buyer-centric-real-estate-platform.webp",
    bgColor: 'bg-blue-800',
    altText: 'property-finder-buyer-centric-real-estate-platform',
    title: 'Property Finder',
    description: 'Property Finder is a specialized platform designed to connect buyers with the right properties, acting as a bridge between clients and the real estate market. By representing buyers in property transactions.',
    page: 'propertyfinder',
    isMobile: false
  },
  {

    id: 28,
    imageSrc: "https://webkorps-app.s3.us-east-1.amazonaws.com/tonik.webp",
    bgColor: 'bg-blue-800',
    altText: 'tonik-bank-mobile-app-for-enhanced-ui/ux-and-scalability',
    title: 'Tonik',
    description: 'Tonik Bank is a pioneering digital-only bank in the Philippines, offering a range of banking products and services through its innovative mobile application.',
    page: 'tonik',
    isMobile: true
  },
  {
    id: 27,
    imageSrc: "https://webkorps-app.s3.us-east-1.amazonaws.com/wazir-performance-security-and-feature-upgrades-for-a-leading-crypto-app.webp",
    bgColor: 'bg-white-800',
    altText: 'wazir-performance-security-and-feature-upgrades-for-a-leading-crypto-app',
    title: 'Wazir',
    description: 'Wazir is a leading cryptocurrency trading application that enables users to buy, sell, and trade various cryptocurrencies.',
    page: 'wazir',
    isMobile: true
  }, {
    id: 29,
    imageSrc: "https://webkorps-app.s3.us-east-1.amazonaws.com/ethmeme-simplifying-crypto-token-creation.webp",
    bgColor: 'bg-blue-800',
    altText: 'ethmeme-simplifying-crypto-token-creation',
    title: 'EtheMEME',
    description: 'Ethmeme.fun is an innovative platform designed to simplify the process of creating and trading cryptocurrency tokens.',
    page: 'ethememe',
    isMobile: false
  }, {
    id: 30,
    imageSrc: "https://webkorps-app.s3.us-east-1.amazonaws.com/wendy-digital-ordering-solutions-for-food-industry.webp",
    bgColor: 'bg-blue-800',
    altText: 'wendy-digital-ordering-solutions-for-food-industry',
    title: `Wendy's`,
    description: `Wendy's, a leading fast-food chain, has recently introduced several innovative features aimed at enhancing customer experience and operational efficiency.`,
    page: 'wendy',
    isMobile: false
  },

];
const CaseStudy = () => {
  const [activeTab, setActiveTab] = useState("All");
  const navigate = useNavigate()
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
      once: true,
    });
  }, []);
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredData = cardsData.filter(card => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Mobile') return card.isMobile === true;
    if (activeTab === 'Web') return card.isMobile === false;
  });
  return (
    <>
      <Helmet>
        <title>Our Work and Case Study | Webkorps</title>
        <meta
          name="description"
          content="Explore our latest work and case studies across various technologies and industries. See how Webkorps delivers innovative IT solutions and services that drive business growth and efficiency."
        />


        <meta property="og:url" content="https://www.webkorps.com/case-study" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Our Work and Case Study | Webkorps" />
        <meta property="og:description" content="Explore our latest work and case studies across various technologies and industries. See how Webkorps delivers innovative IT solutions and services that drive business growth and efficiency." />
        <meta property="og:image" content="" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="webkorps.com" />
        <meta property="twitter:url" content="https://www.webkorps.com/case-study" />
        <meta name="twitter:title" content="Our Work and Case Study | Webkorps" />
        <meta name="twitter:description" content="Explore our latest work and case studies across various technologies and industries. See how Webkorps delivers innovative IT solutions and services that drive business growth and efficiency." />
        <meta name="twitter:image" content="" />
        <link rel="canonical" href="https://www.webkorps.com/case-study" />
      </Helmet>
      <Header />
      <div className="bg-gray-100 w-full text-center md:text-left pt-[80px]">
        <HeroSectionUI
          title={'Real Success, Proven Results: Explore Our Case Studies'}
          subtitle={'See how our expertise transforms business challenges into success'}
          description={'At Webkorps, we deliver tailored IT solutions and services that drive innovation, efficiency, and growth. Our case studies showcase real-world success stories where businesses have leveraged our expertise in software development, mobile app development, web development, blockchain solutions, managed IT services, cloud solutions, enterprise solutions, and more. Explore how we’ve helped organizations optimize operations, enhance security, and accelerate digital transformation.'}
          image={'https://webkorps-app.s3.us-east-1.amazonaws.com/real-success-proven-results-explore-our-case-studies.jpg'}
           imageAlt={'case study'}
          leftSection={false}
        />
      </div>
      {/* <div className="flex w-full px-[5%] md:px-[5%] xl:px-[50px] ipad-pro:px-[50px] justify-start mt-8   bg-white  overflow-hidden">
        <ul className="flex text-center items-center w-full sm:w-[100%] md:w-[100%] lg:w-[100%] md:space-x-3 font-semibold bg-gray-100 rounded-full p-1 justify-between px-4 md:px-6">
          <li
            className={`px-2 sm:px-6 md:px-8 py-2 sm:py-2 text-center md:py-2 rounded-full text-[13px] lg:text-[20px] sm:text-[13px] md:text-[20px] leading-[28px] cursor-pointer font-bold ${activeTab === 'All' ? 'bg-white text-black' : 'bg-gray-100 text-gray-800 hover:bg-white hover:text-black'
              }`}
            onClick={() => setActiveTab('All')}
          >
            All
          </li>
          <li
            className={`px-2 sm:px-6 md:px-8 md:py-2 py-2 rounded-full text-[13px] lg:text-[20px] sm:text-[13px] md:text-[20px] leading-[18px] cursor-pointer font-bold ${activeTab === 'Mobile' ? 'bg-white text-black' : 'bg-gray-100 text-gray-800 hover:bg-white hover:text-black'
              }`}
            onClick={() => setActiveTab('Mobile')}
          >
            Mobile Application
          </li>
          <li
            className={`px-2 sm:px-6 md:px-8 md:py-2 py-2  rounded-full text-[13px] lg:text-[20px] sm:text-[13px] md:text-[20px] leading-[18px] cursor-pointer font-bold ${activeTab === 'Web' ? 'bg-white text-black' : 'bg-gray-100 text-gray-800 hover:bg-white hover:text-black'
              }`}
            onClick={() => setActiveTab('Web')}
          >
            Web Application
          </li>
        </ul>
      </div> */}

      <div className="w-full  mt-3   px-[5%] md:px-[5%] xl:px-[50px] ipad-pro:px-[50px] relative z-0 overflow-hidden ">
        <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 ipad-pro:grid-cols-2 gap-8 xl:gap-8 ipad-pro:gap-8 mt-6 mb-8 ipad-sum:justify-items-center">
          {filteredData.map((card, index) => (
            <div
              key={index}
              className="relative w-[352px] xl:w-[352px] ipad-pro:w-[352px] md:w-[330px]  h-[328px] rounded-lg shadow-2xl overflow-hidden group z-10 "
              onClick={() => {
                navigate(`/case-study/${card.page}`);
              }}
            >
              <div className="absolute inset-0 bg-white clip-triangle"></div>
              <div className={`absolute inset-0 ${card.bgColor} clip-triangle-reverse`}></div>

              <motion.div className="relative z-10 flex items-center justify-center h-full" key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => {
                  setHoveredCard(card.id);
                }}
                onMouseLeave={() => {
                  setHoveredCard(null);
                }}>
                <Link to={`/case-study/${card.page}`}>
                  <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy" src={card.imageSrc} alt={card.altText} className="max-w-full" />
                  <div className="absolute w-full bottom-0 left-0 text-white bg-black bg-opacity-[0.8] p-4 shadow-[0px_0px_30px_10px_rgba(0,0,0,0.7)]">
                    <p className="text-[1rem] xl:text-[1.5rem] ipad-pro:text-[1.35rem] md:text-[1.5rem] leading-[1.9rem] font-semibold">
                      {card.title}
                    </p>
                    {hoveredCard === card.id && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm break-words whitespace-normal text-[13px] xl:text-[16px] ipad-pro:text-[16px] md:text-[14px] leading-[22.6px] pt-[15px]"
                      >
                        {card.description}
                      </motion.p>
                    )}
                  </div>
                </Link>


              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CaseStudy;