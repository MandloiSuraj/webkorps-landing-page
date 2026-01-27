import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJava,
  faAndroid,
  faApple,
  faPython,
  faPhp,
  faReact,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";

import {
  faBriefcase, faUsers,
  faMobileAlt,
  faGem,
  faTruck,           // Logistics
  faHeartbeat,       // Healthcare
  // faChartLine,       // Asset Management
  faBuilding,        // Real Estate
  faStore,           // Retail
  faSuitcaseRolling, // Travel & Hospitality
  faWarehouse,        // Warehouse
  faLink,
  faBrain,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";
import {
  faMobileScreenButton, // Mobile App Development
  faGlobe,              // Web Development
  faLaptopCode,         // Custom Software Development
  faMicrochip,          // IoT Application Development
  faCloud,              // Cloud Application Development
  faCartShopping,       // E-Commerce Development
  faUsersGear,          // IT Staff Augmentation
  faScrewdriverWrench   // Managed IT Services
} from "@fortawesome/free-solid-svg-icons";
import { isValidTo } from '../../Utility/validTo';

const services = [
  {
    name: "Mobile App Development",
    path: "/mobile-app-development",
    subtitle: "Transforming Ideas into <br/>Powerful Mobile Solutions",
    icon: faMobileScreenButton,
  },
  {
    name: "Web Development",
    path: "/web-development",
    subtitle: "Creating Scalable, High<br/>Performance Web Solutions",
    icon: faGlobe,
  },
  {
    name: "Custom Software Development",
    path: "/custom-software-development",
    subtitle: "Custom Software Built for <br/>Your Business Goals",
    icon: faLaptopCode,
  },
  {
    name: "Blockchain Development",
    path: "/blockchain-development",
    subtitle: "Powering the Future of Industries  <br/>with Blockchain Solutions",
    icon: faLink,
  },
  {
    name: "Enterprise Software Development",
    path: "/enterprise-software-development",
    subtitle: "Driving Business Efficiency<br/>Through Enterprise Solutions",
    icon: faBuilding,
  },
  {
    name: "AI-ML Development",
    path: "/ai-ml-development",
    subtitle: "Unlock Business Potential <br/>Through AI-ML Solutions",
    icon: faBrain,
  },
  {
    name: "IoT Application Development",
    path: "/iot-application-development",
    subtitle: "Powering Automation with <br/>Custom IoT Solutions",
    icon: faMicrochip,
  },
  {
    name: "Cloud Application Development",
    path: "/cloud-application-development",
    subtitle: "Elevate Efficiency with Scalable &<br/> Secure Cloud Solutions",
    icon: faCloud,
  },
  {
    name: "E-Commerce Development",
    path: "/ecommerce-development",
    subtitle: "Empowering Online Stores with <br/>Scalable E-Commerce Solutions",
    icon: faCartShopping,
  },
  {
    name: "IT Staff Augmentation",
    path: "/it-staff-augmentation",
    subtitle: "Empower Your Projects with <br/>Skilled IT Professionals",
    icon: faUsersGear, // better than faUserGear for teams
  },
  {
    name: "Managed IT Services",
    path: "/managed-it-service",
    subtitle: "Reliable IT Management<br/> for Seamless Operations",
    icon: faScrewdriverWrench,
  },
];

const technologies = [
  {
    name: "RoR",
    path: "/technology/ruby-on-rails",
    subtitle: "Building Scalable and Robust<br/>Web Solutions Using RoR",
    icon: faGem, // Closest symbol for Ruby (Gem)
  },
  {
    name: "Java",
    path: "/technology/java",
    subtitle: "Unleashing the Power of <br/>Java for Enterprise Solutions",
    icon: faJava,
  },
  {
    name: "Android",
    path: "/technology/android",
    subtitle: "Building Seamless User <br/>Experiences with Android",
    icon: faAndroid,
  },
  {
    name: "IOS",
    path: "/technology/ios",
    subtitle: "Transforming Business Ideas<br/> into iOS App Solutions",
    icon: faApple,
  },
  {
    name: "Python",
    path: "/technology/python",
    subtitle: "Building Scalable and Efficient<br/>Applications with Python",
    icon: faPython,
  },
  {
    name: ".NET",
    path: "/technology/dot-net",
    subtitle: "Leveraging the Power of <br/>.NET for Enterprise Applications",
    icon: faMicrosoft,
  },
  {
    name: "React Native",
    path: "/technology/react-native",
    subtitle: "Accelerating Mobile App <br/>Development with React Native",
    icon: faReact,
  },
  {
    name: "PHP",
    path: "/technology/php",
    subtitle: "Maximizing Performance <br/>and Scalability with PHP",
    icon: faPhp,
  },
];
const industries = [
  {
    name: "Logistic Industry",
    path: "/industry/logistic",
    subtitle: "Driving Efficiency Through <br/>Smart Logistics Solutions",
    icon: faTruck,
  },
  {
    name: "HealthCare",
    path: "/industry/healthcare",
    subtitle: "Innovative Tech Solutions for<br/> Better Healthcare Outcomes",
    icon: faHeartbeat,
  },
  {
    name: "FinTech",
    path: "/industry/fintech",
    subtitle: "Secure and Scalable <br/>Fintech Solutions",
    icon: faBuildingColumns,
  },
  // {
  //   name: "Asset Management",
  //   path: "/industry/asset-management",
  //   subtitle: "Optimizing Assets with <br/>Intelligent Digital Tools",
  //   icon: faChartLine,
  // },
  {
    name: "Real Estate",
    path: "/industry/real-estate",
    subtitle: "Transforming Real Estate with<br/> Smart Tech Solutions",
    icon: faBuilding,
  },
  {
    name: "Retail",
    path: "/industry/retail",
    subtitle: "Empowering Retailers with<br/> Smart Technology",
    icon: faStore,
  },
  {
    name: "Travel and Hospitality",
    path: "/industry/travel-and-hospitality",
    subtitle: "Enhancing Experiences with<br/> Travel Tech Solutions",
    icon: faSuitcaseRolling,
  },
  {
    name: "Warehouse",
    path: "/industry/warehouse",
    subtitle: "Optimizing Warehouse Operations<br/> with Smart Solutions",
    icon: faWarehouse,
  },
];

const Insights = [
  { name: "Case Study", path: "/case-study", subtitle: "Explore our success stories and innovative solutions", icon: faBriefcase },
  { name: "Blogs", path: "/blog/", subtitle: "Insights and trends on <br/>modern  technologies", icon: faGlobe }
];


const Dropdown = ({ title, items, isOpen, setOpen }) => {
  const dropdownRef = useRef(null);

  const handleOpen = (newTitle) => {
    setOpen((prev) => (prev === newTitle ? '' : newTitle));
  };
  let timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    handleOpen(title);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen('');
    }, 200);
  };


  return (
    <div>
      <div className="relative"  >
        <Link
          className={`xl:text-lg ipad-pro:text-base md:text-sm  text-sm ${isOpen ? 'text-[#1887C9] border-b-2 border-[#1887C9]' : ''}`}
          onClick={() => handleOpen(title)}
          ref={dropdownRef}
          onMouseEnter={handleMouseEnter}
        >
          {title}
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute bg-white left-10 right-5 top-[80px] rounded-b-[20px] w-[95%] z-50 text-left overflow-hidden"
        style={{ boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)' }}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-row ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pl-2 p-2 pr-0 w-[100%]">
            {items.map(item => (
              item.name === 'Blogs' ? (
                <a
                  key={item.name}
                  href={item?.path}
                  className="block  py-2 text-gray-700"
                >
                  <div className="relative flex items-center pt-2 pl-1 text-black no-underline overflow-hidden group ">
                    <div className="bg-[#F4F5F6] group-hover:bg-white p-[10px] w-[45px] h-[45px] flex items-center justify-center rounded-full mr-[5px] flex-none relative z-10">
                      <FontAwesomeIcon icon={item.icon} className="text-[20px] text-gray-700 group-hover:text-[#167BB7]" />
                    </div>
                    <div className="relative z-10 leading-[19px]">
                      <p className="2xl:text-[15px] xl:text-[13px] text-[13px]  text-[#167BB7] w-[106%]">
                        {item.name}
                      </p>
                      <span className="text-gray-800 text-[11px] ">
                        <span
                          className="2xl:text-[13px] xl:text-[12px]"
                          dangerouslySetInnerHTML={{ __html: item.subtitle }}
                        />
                      </span>
                    </div>
                    <div className="absolute left-0 bottom-0 w-full h-0 bg-gray-200 transition-all group-hover:p-6 duration-300 ease-in-out group-hover:h-full"></div>
                  </div>
                </a>
              ) : (

                <Link
                  key={item.name}
                  to={isValidTo(item.path ) ? item.path  : '/'}
                  
                  onClick={() => setOpen('')}
                  className="block py-2 text-gray-700"
                >
                  <div className="relative flex items-center pt-2 pl-1 text-black no-underline overflow-hidden group ">
                    <div className="bg-[#F4F5F6] group-hover:bg-white p-[10px] w-[45px] h-[45px] flex items-center justify-center rounded-full mr-[5px] flex-none relative z-10">
                      <FontAwesomeIcon icon={item.icon} className="text-[20px] text-gray-700 group-hover:text-[#167BB7]" />
                    </div>
                    <div className="relative z-10 leading-[19px]">
                      <p className="2xl:text-[15px] xl:text-[13px] text-[13px]  text-[#167BB7] w-[106%]">
                        {item.name}
                      </p>
                      <span className="text-gray-800 text-[11px] ">
                        <span
                          className="2xl:text-[13px] xl:text-[12px]"
                          dangerouslySetInnerHTML={{ __html: item.subtitle }}
                        />
                      </span>
                    </div>
                    <div className="absolute left-0 bottom-0 w-full h-0 bg-gray-200 transition-all group-hover:p-6 duration-300 ease-in-out group-hover:h-full"></div>
                  </div>
                </Link>
              )
            ))}
          </div>
          <div className="p-6 bg-gray-200 w-[20%] pt-[2rem]">
            <ul className="space-y-4">
              <li className="flex items-start space-x-4">
                <FontAwesomeIcon icon={faBriefcase} className="text-2xl text-gray-700" />
                <div className='pl-4'>
                  <p className="font-bold text-lg">8+ Years</p>
                  <span className="text-sm text-gray-600">Experience</span>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <FontAwesomeIcon icon={faGlobe} className="text-2xl text-gray-700" />
                <div className='pl-4'>
                  <p className="font-bold text-lg">30+</p>
                  <span className="text-sm text-gray-600">Countries Served</span>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <FontAwesomeIcon icon={faUsers} className="text-2xl text-gray-700" />
                <div className='pl-4'>
                  <p className="font-bold text-lg">350+</p>
                  <span className="text-sm text-gray-600">Satisfied Clients</span>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <FontAwesomeIcon icon={faMobileAlt} className="text-2xl text-gray-700 pl-[10px]" />
                <div className='pl-4'>
                  <p className="font-bold text-lg">500+</p>
                  <span className="text-sm text-gray-600">Products Delivered</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] = useState(false);
  const [isMobileIndustiesDropdownOpen, setIsMobileIndustiesDropdownOpen] = useState(false);
  const [isMobileTechnologiesDropdownOpen, setIsMobileTechnologiesDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const location = useLocation();
  const currentPath = location.pathname;

  const [openDropdown, setOpenDropdown] = useState('');
  const sanitizePath = (path) => {
    if (typeof path === 'string') return path.trim();
    if (typeof path === 'object' && path !== null) {
      return path.url?.trim?.() || '/'; // if accidentally an object like { url: "/industry/logistic" }
    }
    return '/'; // default fallback
  };

  const sanitizedServices = services.map(item => ({
    ...item,
    path: sanitizePath(item.path),
  }));

  const sanitizedTechnologies = technologies.map(item => ({
    ...item,
    path: sanitizePath(item.path),
  }));

  const sanitizedIndustries = industries.map(item => ({
    ...item,
    path: sanitizePath(item.path),
  }));


  return (
    <header className="content w-full h-[80px] pr-[7%] sm:pr-[40px] md:pr-[20px] xl:pr-[20px] ipad-pro:pr-[20px]  pl-0  flex items-center justify-between z-50 bg-white shadow-lg fixed top-0 left-0 font-inter ">
      <div className="flex items-center  " style={{ padding: 'max(16px, 1vw)' }}      >
        <Link to="/"><img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy" src="https://webkorps-app.s3.us-east-1.amazonaws.com/Webkorps.svg" alt="webkorps-logo" className="h-16 w-[100%]" />
        </Link>
      </div>
      <div className="flex-grow hidden md:hidden ipad-pro:flex xl:flex gap-x-8 sm:gap-x-2 md:gap-x-3 lg:gap-x-4 xl:gap-x-[1rem] 2xl:gap-x-8 ipad-pro:gap-x-2 mr-[1.4rem] justify-end h-[80px] items-center">
        <Link
          to="/about-us"
          className={`xl:text-lg ipad-pro:text-base md:text-sm  text-sm  ${currentPath === "/about-us" && !openDropdown ? "text-[#1887C9] border-b-2 border-[#1887C9]" : ""} hover:text-[#1887C9] hover:border-b-2 hover:border-[#1887C9]`}
          onMouseEnter={() => setOpenDropdown('')}
        >
          About
        </Link>
        <Dropdown
          title="Services"
          items={sanitizedServices}
          isOpen={openDropdown === 'Services'}
          setOpen={setOpenDropdown}
        />
        <Dropdown
          title="Technology"
          items={sanitizedTechnologies}
          isOpen={openDropdown === 'Technology'}
          setOpen={setOpenDropdown}
        />
        <Dropdown
          title="Industries"
          items={sanitizedIndustries}
          isOpen={openDropdown === 'Industries'}
          setOpen={setOpenDropdown}
        />
        {/* <Dropdown
          title="Hire"
          items={developers}
          isOpen={openDropdown === 'Hire'}
          setOpen={setOpenDropdown}
        /> */}
        <Dropdown
          title="Insights"
          items={Insights}
          isOpen={openDropdown === 'Insights'}
          setOpen={setOpenDropdown}
        />

        {/* <Link
          to="/case-study"
          className={`xl:text-lg ipad-pro:text-base md:text-sm  text-sm   ${currentPath === "/case-study" && !openDropdown ? "text-[#1887C9] border-b-2 border-[#1887C9]" : ""} hover:text-[#1887C9] hover:border-b-2 hover:border-[#1887C9]`}
          onMouseEnter={() => setOpenDropdown('')}
        >
          Case Studies
        </Link> */}
        <Link
          to="/join-us"
          className={`xl:text-lg ipad-pro:text-base md:text-sm  text-sm   ${currentPath === "/join-us" && !openDropdown ? "text-[#1887C9] border-b-2 border-[#1887C9]" : ""} hover:text-[#1887C9] hover:border-b-2 hover:border-[#1887C9]`}
          onMouseEnter={() => setOpenDropdown('')}
        >
          Careers
        </Link>
      </div>
      <div className=" hidden  md:hidden ipad-pro:block xl:block   font-bold ">


        <Link to="/contact">
          <motion.p
            whileHover={{
              backgroundColor: '#FFFFFF',
              color: '#1887C9',
              borderColor: '#1887C9',
              transition: { duration: 0.1 },
            }}
            drag
            className="px-[0.7rem] py-[0.3rem] rounded-[20px]    text-center  font-bold border-2 border-[#1887C9] bg-[#1887C9] text-white  transition-all duration-100 text-[10px] xl:text-[15px] ipad-pro:text-[10px] "
          >
            Talk to Us
          </motion.p>
        </Link>
      </div>
      <button
        ref={buttonRef}
        className="block md:block ipad-pro:hidden xl:hidden flex items-center"
        onClick={handleToggle}
        aria-label="Toggle navigation"
      >
        <svg
          className="w-6 h-6 text-[#1887C9]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        ref={menuRef}
        className={`ipad-pro:hidden xl:hidden absolute top-16 z-50 right-0 w-48 bg-white border border-gray-300 shadow-lg ${isMenuOpen ? "block" : "hidden"
          } max-h-96 overflow-y-auto`}
      >
        <Link to="/about-us" className="block px-4 py-2 text-lg hover:bg-gray-200">
          About
        </Link>
        <div className="relative">
          <button
            className="block px-4 py-2 text-lg hover:bg-gray-200 w-full text-left"
            onClick={() => setIsMobileServicesDropdownOpen(!isMobileServicesDropdownOpen)}
          >
            Services
            <svg
              className={`w-4 h-4 inline-block ml-2 transform ${isMobileServicesDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isMobileServicesDropdownOpen && (
            <div className="bg-white border-t border-gray-300 max-h-60 overflow-y-auto z-50 ">
              {services.map((service) => (

                <Link 
                 to={isValidTo(service?.path ) ? service?.path   : '/'}
                  key={service.name}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                  {service.name}
                </Link>


              ))}
            </div>
          )}
        </div>
        <div className="relative">
          <button
            className="block px-4 py-2 text-lg hover:bg-gray-200 w-full text-left"
            onClick={() => setIsMobileTechnologiesDropdownOpen(!isMobileTechnologiesDropdownOpen)}
          >
            Technology
            <svg
              className={`w-4 h-4 inline-block ml-2 transform ${isMobileTechnologiesDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isMobileTechnologiesDropdownOpen && (
            <div className="bg-white border-t border-gray-300 max-h-60 overflow-y-auto z-50 ">
              {technologies.map((technology) => (
                <Link key={technology.name}
                                   to={isValidTo( technology?.path ) ? technology?.path   : '/'}

                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  {technology.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="relative">
          <button
            className="block px-4 py-2 text-lg hover:bg-gray-200 w-full text-left"
            onClick={() => setIsMobileIndustiesDropdownOpen(!isMobileIndustiesDropdownOpen)}
          >
            Industries
            <svg
              className={`w-4 h-4 inline-block ml-2 transform ${isMobileIndustiesDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isMobileIndustiesDropdownOpen && (
            <div className="bg-white border-t border-gray-300 max-h-60 overflow-y-auto z-50 ">
              {industries.map((industry) => (
                <Link  to={isValidTo( industry?.path ) ? industry?.path   : '/'}
                  key={industry.name}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                  {industry.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link to="/case-study" className="block px-4 py-2 text-lg hover:bg-gray-200">
          Case Studies
        </Link>
        <Link to="/join-us" className="block px-4 py-2 text-lg hover:bg-gray-200">
          Careers
        </Link>
        <Link
          to="/contact"
          className="block px-4 py-2 text-white rounded hover:bg-blue-600 bg-[#1887C9]"
        >
          Talk to Us
        </Link>
      </div>
    </header>
  );
};

export default Header;
