import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import EventServicesCard from './EventServicesCard';
import { Helmet } from 'react-helmet-async';
import projectsData from '../CaseStudy/Project';
import { AnimatePresence, motion } from 'framer-motion';
import AOS from 'aos';
const Card = ({ image, alt }) => {
    return (
        <div className="relative w-[100%] md:w-[100%] ipad-pro:w-[412px] xl:w-[412px] h-[545px] overflow-hidden  group">
            <div className="card-image-container relative w-full h-full transition-transform duration-300">
                <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"
                    src={image}
                    alt={alt}
                    className="w-full h-full  transition-transform duration-300"
                />
            </div>
            <div className="absolute bottom-0 left-0 w-[350px]  ipad-pro:ml-[30px] ml-[10px] md-ml-[10px] xl:ml-[30px] mb-[20px] rounded-[20px] text-white p-4 flex items-center justify-between opacity-100  shadow-lg">
                <div className="text-left">
                    <p className="text-black font-quicksand font-bold text-[16px] leading-[20px]">Chirag Agrawal</p>
                    <p className="text-black font-quicksand text-[14px] leading-[18px]">Founder and CEO</p>
                </div>
            </div>
        </div>
    );
};
function EventIdiaSoft() {
    const endDate = "2025-03-07T23:59:59";
    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const endTime = new Date(endDate).getTime();
        const difference = endTime - now;

        if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        if (
            timeLeft.days === 0 &&
            timeLeft.hours === 0 &&
            timeLeft.minutes === 0 &&
            timeLeft.seconds === 0
        ) {
            return; // Stop the timer when it reaches 0
        }

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); // Clean up the interval
    }, [timeLeft]);
    const [activeIndex, setActiveIndex] = useState(0);
    const data = [
        {
            title: "Precision and Purpose",
            content: "Webkorps delivers tailored solutions that solve complex challenges and drive meaningful impact.",
        },
        {
            title: "Strategic Partnerships",
            content: "Our collaborations create opportunities for mutual growth and deliver value that lasts.",
        },
        {
            title: "Future-Focused Expertise",
            content: "With insights into emerging trends, we empower businesses to adapt and thrive in an evolving landscape.",
        },
        {
            title: "Proven Excellence",
            content: "Our experience underscores a track record of transforming challenges into opportunities with innovative approaches.",
        },
        {
            title: "Collaborative Growth",
            content: "We foster meaningful relationships, enabling innovation and success through shared goals.",
        },
    ]
    const [openIndex, setOpenIndex] = useState(null);
    const [showAll, setShowAll] = useState(false);
    useEffect(() => {
        AOS.init({
            duration: 500, easing: "ease",
            once: true,
        });
    }, []);
    // Split data into two columns
    const middleIndex = Math.ceil(data.length / 2);
    const firstColumn = data.slice(0, middleIndex);
    const secondColumn = data.slice(middleIndex);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [endDate]);

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    const industries = ["All", "Healthcare", "E-commerce", "Hospitality & Food", "Fintech", "Blockchain", "Manufacturing, Automotive, & IoT", "Logistics & Supply chain", "HRMS"];

    const filteredEvents =
        industries[selectedIndex] === "All"
            ? projectsData
            : projectsData.filter(event => event.industry === industries[selectedIndex]);

    const handleSelect = (index) => {
        setSelectedIndex(index);
        setCurrentPage(0); // Reset to the first page when filter changes
    };
    const cards = [
        { image: "https://webkorps-app.s3.us-east-1.amazonaws.com/chirag-agrwal-ceo-and-founder.webp", alt: "Chirag Agrwal CEO and Founder" },
    ];
    const servicecards = [
        { image: 'https://webkorps-app.s3.us-east-1.amazonaws.com/web-and-mobile-development.svg', altText: "web-and-mobile-development" },
        { image: 'https://webkorps-app.s3.us-east-1.amazonaws.com/custom-software-solutions.svg', altText: "custom-software-solutions" },
        { image: 'https://webkorps-app.s3.us-east-1.amazonaws.com/ai-ml-iot.svg', altText: "ai-ml-iot" },
        { image: 'https://webkorps-app.s3.us-east-1.amazonaws.com/blockchain.svg', altText: "blockchain" },
        { image: 'https://webkorps-app.s3.us-east-1.amazonaws.com/manage-engines.svg', altText: "manage-engines" },
        { image: 'https://webkorps-app.s3.us-east-1.amazonaws.com/saas-solutions.svg', altText: "saas-solutions" },
    ];

    return (
        <div className="overflow-hidden font-inter" >
            <Helmet>
                <title>Meet Webkorps at INDIASOFT 2025 </title>
                <meta
                    name="description"
                    content="Experience the impact of innovation and collaboration firsthand. Visit Webkorps at INDIASOFT 2025 to explore groundbreaking ideas, build strategic connections, and shape the future of technology together."
                />
                <meta property="og:url" content="https://www.webkorps.com/event/indiasoft" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Meet Webkorps at INDIASOFT 2025" />
                <meta property="og:description" content="Experience the impact of innovation and collaboration firsthand. Visit Webkorps at INDIASOFT 2025 to explore groundbreaking ideas, build strategic connections, and shape the future of technology together." />
                <meta property="og:image" content="https://webkorps-app.s3.us-east-1.amazonaws.com/meet-webkorps-at-indiasoft.webp" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="webkorps.com" />
                <meta property="twitter:url" content="https://www.webkorps.com/event/indiasoft" />
                <meta name="twitter:title" content="Meet Webkorps at INDIASOFT 2025" />
                <meta name="twitter:description" content="Experience the impact of innovation and collaboration firsthand. Visit Webkorps at INDIASOFT 2025 to explore groundbreaking ideas, build strategic connections, and shape the future of technology together." />
                <meta name="twitter:image" content="https://webkorps-app.s3.us-east-1.amazonaws.com/meet-webkorps-at-indiasoft.webp" />

                <link data-rh="true" rel="canonical" href="https://www.webkorps.com/event/indiasoft" />
            </Helmet>

            <header className="content w-full h-[112px] px-[7%] md:px-[5%] sm:px-[40px] md:px-[20px] xl:px-[50px] ipad-pro:px-[50px] pt-5 pb-5 flex items-center justify-between z-10">
                <div className="flex items-center space-x-4 ">
                    <Link to="/"><img width="800" height="600" sizes="(max-width: 640px) 100vw, 
                            (max-width: 1280px) 50vw, 
                            33vw" loading="lazy" src="https://webkorps-app.s3.us-east-1.amazonaws.com/Webkorps.svg" alt="webkorps-logo" className="h-16 w-[100%]" />
                    </Link>
                </div>
            </header>

            <div className="w-full h-auto md:block mt-[25px]">
                <div className="w-full px-[5%] xl:px-[50px]  md:px-[50px] ipad-pro:px-[50px] content">
                    <div className="flex overflow-hidden flex-col ipad-pro:flex-row-reverse md:flex-row-reverse   xl:flex-row-reverse items-start md:items-start ">
                        <div className='w-[100%] xl:w-[80%] flex flex-col'>
                            <div className="relative grid grid-cols-2 gap-4">
                                <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"
                                    src="https://webkorps-app.s3.us-east-1.amazonaws.com/eventpage2.webp"
                                    alt="Overlapping Image"
                                    className="absolute h-[137.5px] xl:h-[137.5px] ipad-pro:h-[137.5px] w-[151.5px] xl:w-[151.5px] top-[110px] ipad-pro:right-[300px]  xl:right-[380px] xxl:right-[480px] z-10"
                                />
                                <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"
                                    src="https://webkorps-app.s3.us-east-1.amazonaws.com/international-ict-exhibition-and-conferences.webp"
                                    alt="international-ict-exhibition-and-conferences"
                                    className="h-[275px] xl:h-[275px] ipad-pro:h-[275px] ipad-pro:w-[100%] md:w-[100%] ipad-sum:w-[100%] w-[100%] xl:w-[303px]"
                                />
                                <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"
                                    src="https://webkorps-app.s3.us-east-1.amazonaws.com/eventpage3.webp"
                                    alt="Demo 2"
                                    className=" h-[275px] xl:h-[281px] ipad-pro:h-[275px] ipad-pro:w-[100%] md:w-[100%] ipad-sum:w-[100%] w-[100%] xl:w-[259px]"
                                />
                            </div>
                            <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"
                                src="https://webkorps-app.s3.us-east-1.amazonaws.com/eventpage1.webp"
                                alt="Demo 3"
                                className="h-[275px] xl:h-[216px] ipad-pro:h-[275px] ipad-pro:w-[100%] md:w-[100%] ipad-sum:w-[100%] w-[100%] xl:w-[588px] mt-[35px]"
                            />
                        </div>


                        <div className="w-[100%] md:w-[100%]   overflow-hidden ">
                            <h1 className="  font-semibold text-[20px] mt-[20px] xl:mt-0 ipad-pro:mt-0 md:mt-0  leading-[25px] md:text-[23px] xl:text-[64px]  ipad-pro:text-[25px] md:text-[36px] leading-[40px] md:leading-[40px] xl:leading-[79px] xl:w-[100%] ipad-pro:w-[100%] md:w-[100%] w-[100%] text-center xl:text-left md:text-left ipad-pro:text-left "
                            >Webkorps Unlocks New Horizons at INDIASOFT 2025</h1>
                            <div className=" xl:text-left ipad-pro:text-left md:text-left text-center ">
                                <h3
                                    className=" font-bold text-[20px] text-[#000000] md:text-[24px] xl:text-[24px]  ipad-pro:text-[24px]  leading-[30px] md:leading-[43px] xl:leading-[43px] mt-[40px]"
                                >
                                    Redefining Innovation, Inspiring Progress
                                </h3>
                                <p
                                    className="  text-[#1E1E1E] font-medium text-[18px] md:text-[22px] xl:text-[20px] ipad-pro:text-[20px]   leading-[22px] md:leading-[25px] xl:leading-[28px] ipad-pro:leading-[22px] mt-[29px] xl:w-[557px]  md:w-[100%] w-[100%] ipad-pro:w-[435px]  "
                                >
                                    Webkorps stands as a driving force at INDIASOFT 2025, redefining technological possibilities with strategic foresight and transformative ideas. Our participation underscores a mission to impact industries and inspire future growth.                              </p>
                            </div>
                            <div className="flex flex-col md:flex-row ipad-pro:flex-row xl:flex-row items-center justify-center md:justify-start ipad-pro:items-start  ipad-pro:justify-start gap-6  md:gap-9 xl:gap-9 ipad-pro:gap-6 mt-6 sm:flex-col sm:mt-8 md:mt-12 xl:mt-16 ipad-pro:mt-10">


                                <p className="flex items-center  font-medium text-[15px] ipad-pro:text-[16px] md:text-[16px] leading-[20px] md:leading-[25px] xl:text-[26px] xl:leading-[46px]">
                                    <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"
                                        src="https://webkorps-app.s3.us-east-1.amazonaws.com/calendarIcon.webp"
                                        alt="calendar Icon"
                                        className="w-[10%] h-[10%] mr-[12px] md:w-[10%] md:h-[10%] ipad-pro:h-[10%] ipad-pro:w-[10%]"
                                    />
                                    19<sup>th</sup> March - 21<sup>st</sup> March
                                </p>


                                {/* <p className="flex items-center  font-medium text-[15px] ipad-pro:text-[16px] md:text-[16px] leading-[20px] md:leading-[25px] xl:text-[26px] xl:leading-[46px]">
                                    <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"

                                        src="https://webkorps-app.s3.us-east-1.amazonaws.com/locationIcon.webp"

                                        alt="Icon"
                                        className="w-[10%] h-[10%] mr-[12px] md:w-[10%]  md:h-[10%] ipad-pro:h-[10%] ipad-pro:w-[10%]"
                                    />
                                    LVCC, North Hall - 8267
                                </p> */}
                            </div>
                            <div className="flex flex-col md:flex-col ipad-pro:flex-row xl:flex-row items-center justify-center md:justify-start  md:items-start ipad-pro:items-center  ipad-pro:justify-start gap-6  md:gap-9 xl:gap-[56px] ipad-pro:gap-6 mt-6 sm:flex-col sm:mt-8 md:mt-12 xl:mt-16 ipad-pro:mt-10">


                                <a
                                    href='https://calendly.com/webkorpsservices/indiasoft'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center align-center justify-center text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-base text-center md:text-lg  w-[220px] md:w-[233px] xl:w-[233px] ipad-pro:w-[233px]  h-[56px] bg-[#1887C9]"
                                >

                                    Schedule A Meeting
                                    <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"

                                        src="https://webkorps-app.s3.us-east-1.amazonaws.com/right-arrow.webp"

                                        alt="right-arrow"
                                        className="w-[24px] h-[24px] ml-2 md:w-[24px] md:h-[24px]"
                                    />
                                </a>
                                <Link
                                    to="/case-study"
                                    target="_blank"
                                    className="font-semibold text-[16px] xl:text-[16px] w-[130px] md:w-[130px] xl:w-[175px] ipad-pro:w-[130px] text-center underline text-[#000000] bg-transparent leading-[28px] "
                                >
                                    View Case Study
                                </Link>

                            </div>

                        </div>



                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center xl:mt-[117px] ipad-pro:mt-[117px] md:mt-[117px] mt-[20px]">
                <p className="xl:text-[72px] xl:leading-[79.2px] ipad-pro:text-[50px] text-[40px] font-semibold uppercase text-gray-800 ">
                    Time Left
                </p>
                <p className="outlined-text xl:text-[120px] ipad-pro:text-[80px] text-[30px] font-bold xl:leading-[146px] ipad-pro:leading-[90px] leading-[40px]">
                    {String(timeLeft.days).padStart(2, "0")}d :{" "}
                    {String(timeLeft.hours).padStart(2, "0")}h :{" "}
                    {String(timeLeft.minutes).padStart(2, "0")}m :{" "}
                    {String(timeLeft.seconds).padStart(2, "0")}s
                </p>
            </div>
            <div className="w-full px-[5%] xl:px-[50px] xl:pl-0   md:pr-[50px] md:pl-0 ipad-pro:pr-[50px] ipad-pro:pl-0 content mt-[35px]">
                <div className="flex overflow-hidden flex-col ipad-pro:flex-row  md:flex-col xxl:gap-[10%] xl:gap-[125px] md:gap-[30px]  xl:flex-row items-start md:items-start ">
                    <div className="relative  flex justify-center items-center xl:pt-[66px] xl:pl-[54px] ipad-pro:pt-[66px] xl:pr-0 ipad-pro:pr-0 ipad-pro:pt-[66px] pt-[35px] pl-[35px] pr-[35px] ">
                        <div
                            className="absolute top-0 left-0 w-full h-full z-[-1] rounded-tr-[30px]"
                            style={{ clipPath: 'inset(0px 25% 50px 0)' }}
                        ></div>

                        <img width="800" height="600"
                            sizes="(max-width: 640px) 100vw, 
    (max-width: 1280px) 50vw, 
    33vw"
                            loading="lazy"
                            src="https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-at-indiasoft-2025.webp"
                            alt="webkorps-at-indiasoft-2025"
                            className="h-auto max-h-full w-auto max-w-full w-[303px] xl:w-[629px] ipad-pro:w-[303px] h-[275px] xl:h-[445px] ipad-pro:h-[275px] rounded-[30px]"
                        />
                    </div>



                    <div className="  overflow-hidden mt-[70px]" >
                        <h2 className="  font-normal text-[#1887C9] text-[18px] md:text-[18px] xl:text-[18px]  ipad-pro:text-[18px]  leading-[22.2px] md:leading-[22.2px] xl:leading-[22px] xl:w-[219px] ipad-pro:w-[219px] md:w-[100%] w-[100%] h-[23px] uppercase text-center xl:text-left ipad-pro:text-left md:text-left md:ml-[45px] ml-0 ipad-pro:ml-0 xl:ml-0   mt-[20px] xl:mt-0 ipad-pro:mt-0 md:mt-0"
                        >About INDIASOFT 2025</h2>
                        <div className="mt-6 xl:text-left ipad-pro:text-left md:text-left md:ml-[45px] ml-0 ipad-pro:ml-0 xl:ml-0  text-center ">
                            <h3
                                className=" font-bold text-[20px] md:text-[33px] xl:text-[40px]  ipad-pro:text-[37px] md:text-[36px] leading-7 md:leading-[46.2px] xl:leading-[50px] text-[#000000]"
                            >
                                Shaping the Future at IndiaSoft 2025
                            </h3>
                            <p
                                className="  text-[#1E1E1E]  text-[16px] md:text-[16px] xl:text-[20px] ipad-pro:text-[16px] font-normal  leading-[29.3px] md:leading-[29.3px] xl:leading-[29.3px] ipad-pro:leading-[29.3px] mt-4 xl:w-[604px] ipad-pro:w-[604px] md:w-[100%] w-[100%] xxl:w-[690px] "
                            >
                                INDIASOFT 2025 is more than a technology showcase; it’s a confluence of ideas, innovation, and industry leaders shaping the future of IT. With cutting-edge advancements and transformative discussions, the event offers a platform to explore emerging trends, foster strategic partnerships, and redefine the boundaries of technological potential.                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row ipad-pro:flex-row xl:flex-row items-center  md:items-start justify-center md:justify-start ipad-pro:items-start  ipad-pro:justify-start mt-[34px] md:ml-[45px] ml-0 ipad-pro:ml-0 xl:ml-0">


                            <a
                                href='https://calendly.com/webkorpsservices/indiasoft'
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center align-center justify-center text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-base text-center md:text-lg  w-[233px] md:w-[233px] xl:w-[233px] ipad-pro:w-[233px]  h-[56px] bg-[#1887C9]"
                            >

                                Schedule A Meeting
                                <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"

                                    src="https://webkorps-app.s3.us-east-1.amazonaws.com/right-arrow.webp"

                                    alt="right-arrow"
                                    className="w-[24px] h-[24px] ml-2 md:w-[24px] md:h-[24px]"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full px-[5%] xl:pl-[81px]  xl:pr-0 md:px-[5%] ipad-pro:pl-[5%] ipad-pro:pr-0 content xl:mt-[119px] md:mt-[30px] ipad-pro:mt-[119px] mt-[30px] ">
                <div className="flex overflow-hidden flex-col ipad-pro:flex-row-reverse md:flex-row-reverse  xl:flex-row-reverse items-start md:items-start ">
                    <div className="w-[100%] flex xl:flex-row ipad-pro:flex-row md:flex-col flex-col gap-4">
                        <div className='flex-col flex w-[100%] xl:w-[50%] ipad-pro:w-[50%]'>
                            <img
                                width="800" height="600"
                                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                loading="lazy"
                                src="https://webkorps-app.s3.us-east-1.amazonaws.com/indiasoft-exhibition.webp"
                                alt="indiasoft-exhibition"
                                className="h-[229px] xl:h-[229px] ipad-pro:h-[229px] w-full rounded-[20px] object-cover"
                            />

                            <img
                                width="800" height="600"
                                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                loading="lazy"
                                src="https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-at-indiasoft-2025.webp"
                                alt="indiasoft-exhibitor"
                                className="h-[338px] xl:h-[338px] ipad-pro:h-[338px] w-full mt-[20px] rounded-[20px] object-cover"
                            />
                        </div>
                        <div className="relative flex justify-center items-center w-[100%] xl:w-[50%] ipad-pro:w-[50%]">
                            <div
                                className="absolute top-0 left-0 w-full h-full z-[-1] rounded-tr-[30px]"
                                style={{ clipPath: 'inset(0px 0% 0px 30%)' }}
                            ></div>
                            <img
                                width="800"
                                height="600"
                                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                loading="lazy"
                                src="https://webkorps-app.s3.us-east-1.amazonaws.com/indiasoft-2025.webp"
                                alt="indiasoft-2025"
                                className="h-[445px] xl:h-[500px] ipad-pro:h-[445px] w-full mt-0 rounded-tl-[20px] rounded-bl-[20px] object-cover"
                            />
                        </div>

                    </div>

                    <div className="w-[100%] md:w-[100%] overflow-hidden max-w-[95%]">
                        <div className="mt-[34px] xl:text-left text-center ipad-pro:text-left md:text-left  ">
                            <h3
                                className=" text-[#1E1E1E] font-bold text-[40px] md:text-[40px] xl:text-[40px]  ipad-pro:text-[40px]  leading-[50px] md:leading-[50px] xl:leading-[50px]"
                            >
                                The Value Webkorps Brings to INDIASOFT 2025
                            </h3>
                            <ul className=" text-[#1E1E1E] text-[16px] md:text-[16px] xl:text-[20px] ipad-pro:text-[16px] leading-[29.3px] md:leading-[29.2px] xl:leading-[29.3px] ipad-pro:leading-[29.7px] mt-[34px]  w-[100%] ipad-pro:w-[435px] md:w-[100%] xl:w-[557px] xl:w-[557px] font-normal list-disc pl-5 ">
                                <li><b className='font-bold '>Tailored Solutions for Unique Challenges</b>: Webkorps specializes in crafting solutions designed for real-world applications and long-term value.</li>
                                <li><b className='font-bold '>Collaborative Engagements</b>: Our expertise fosters partnerships that amplify innovation and ensure sustainable growth.</li>
                                <li><b className='font-bold '>Visionary Insights</b>: Webkorps empowers businesses to lead in a rapidly evolving tech landscape by combining strategic foresight with actionable solutions.</li>
                                <li><b className='font-bold '>A Global Footprint</b>: Expertise presented at GITEX, CIO News Tech Events, and GACC.</li>
                                <li><b className='font-bold '>Excellence in Every Step</b>: Future-ready technologies empower growth and deliver sustainable success.</li>
                            </ul>

                        </div>
                    </div>



                </div>
            </div>
            {/* //service */}
            <div className="Clients bg-[#F6F8F7] w-auto h-auto">
                <div className="content mx-auto w-full max-w-screen-xl text-center text-[#292E3D] mt-7 md:mt-[4rem]">
                    <p className=" font-bold text-[36px] xl:text-[36px] md:text-[36px] leading-[45.39px] pt-6 md:pt-12">Services</p>
                </div>
                <div className="content relative px-[5%] xl:px-[50px] ipad-pro:px-[50px] text-center flex  pb-10  md:pb-0">
                    {/* Sliders */}
                    <div className=" pb-10  px-0 ipad-pro:px-[11%] xl:px-[11%] w-full">
                        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  xl:grid-cols-3 ipad-pro:grid-cols-3    gap-5 w-[100%]">
                            {servicecards.map((image, index) => (
                                <div key={index} className="flex justify-center">
                                    <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"
                                        src={image.image}
                                        alt={image.altText}
                                        className={`w-full h-full `}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            {/* ready with us  */}
            <div className='bg-gradient-to-r from-[#020609] via-[#1887C9] to-[#020609] xl:h-[235px] md:h-[150px] h-[195px] ipad-pro:h-[195px] rounded-[20px] mx-[10px] content-center'>
                <div className="flex flex-col md:flex-row ipad-pro:flex-row xl:flex-row items-center align-center justify-center md:justify-center ipad-pro:items-center xl:justify-between xl:px-[80px] ipad-pro:justify-center gap-6 md:gap-9 xl:gap-9 ipad-pro:gap-6 sm:flex-col">
                    <div>
                        <p className=" text-[#FFFFFF] font-bold text-[19px] leading-[25px] text-center xl:text-left md:text-[25px] md:leading-[30px] xl:text-[37px] ipad-pro:text-[30px] ipad-pro:leading-[46px] leading-[104px] xl:leading-[50px] ipad-pro:w-[670px] xl:w-[839px] xxl:w-[839px] md:w-[500px] w-[300px]">
                            Schedule a meeting with our experts to explore innovative solutions and opportunities.
                        </p>
                        <p className=' text-[#FFFFFF] font-bold text-[19px] text-center xl:text-left md:text-[25px] md:leading-[30px] xl:text-[37px] ipad-pro:text-[30px] ipad-pro:leading-[46px] leading-[23px] xl:leading-[50px]'>
                            Let’s Connect at INDIASOFT 2025!
                        </p>
                    </div>

                    <a
                        href='https://calendly.com/webkorpsservices/indiasoft'
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center align-center justify-center text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-base text-center md:text-lg w-[75%] md:w-[233px] xl:w-[219px] ipad-pro:w-[233px] h-[56px] bg-[#1887C9]"
                    >
                        Schedule A Meeting
                        <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"

                            src="https://webkorps-app.s3.us-east-1.amazonaws.com/right-arrow.webp"

                            alt="right-arrow"
                            className="w-[24px] h-[24px] ml-2 md:w-[24px] md:h-[24px]"
                        />
                    </a>
                </div>
            </div>

            {/*  */}
            <p className='xl:text-[36px] ipad-pro:text-[30px] text-[23px]  leading-[42px] font-bold mt-[88px]  px-[5%] xl:px-[50px] ipad-pro:px-[50px] md:px-[50px] mb-[40px] text-center xl:text-left md:text-center ipad-pro:text-left '>Industries & Case Studies </p>

            <div className="grid grid-cols-1 xl:grid-cols-[30%_67%] md:grid-cols-[25%_70%] ipad-pro:grid-cols-[25%_63%] h-[20%] ipad-pro:gap-10 gap-6 xxl:gap-[10%] xl:gap-6  px-[5%]  xl:px-[50px] ipad-pro:px-[50px] md:px-[50px]">

                {/* Industry Selector */}
                <ul className="basic-black text-[24px] leading-[30.4px] font-bold md:top-0 md:right-10 justify-center md:justify-items-start font-bold line-height-1 space-y-2 text-center xl:text-left md:text-left ipad-pro:text-left ">
                    {industries.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelect(index)}
                            className={`cursor-pointer pb-5 font-bold rounded ${selectedIndex === index ? "text-[#2947A9]" : "text-[#C2C7D6]"
                                }`}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
                <EventServicesCard
                    event={filteredEvents}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
            <div className='bg-[#F3F3F3]  mt-10 p-[16px]'>
                {/* <div className="flex flex-col md:flex-row  xl:flex-row ipad-pro:flex-row items-start pt-[66px] bg-white rounded-[28px]  ipad-pro:h-[506px] h-[100%] md:h-[100%] xl:h-[506px]  ipad-pro:px-[50px] md:px-[50px] px-[5%] xl:px-[50px]">
                    <div className="w-[100%] gap-4">
                        <h2 className=" font-semibold text-[20px] ipad-pro:text-[48px] ipad-pro:leading-[62px] xl:text-[48px] leading-[25px] xl:leading-[62px] text-[#010205] text-center xl:text-left md:text-center ipad-pro:text-left">
                            Why Webkorps Wins
                        </h2>
                        <p className="mt-4  text-[#1E1E1E] text-[16px] md:text-[16px] xl:text-[20px] ipad-pro:text-[16px] leading-[28px] ipad-pro:w-[557px] md:w-[100%] w-[100%] xl:w-[557px] mt-[48px] text-center xl:text-left md:text-center ipad-pro:text-left">
                            At Webkorps, we blend innovation, expertise, and a relentless focus on quality to deliver solutions that truly make a difference. Our tailored approach, industry experience, and commitment to your success ensure every project drives meaningful results. Together, we don’t just achieve goals - we redefine possibilities.                        </p>
                        <div className="flex flex-col items-center md:flex-row gap-4 mt-[48px] xl:items-start ipad-pro:items-start md:items-center">
                            <a
                                href='https://calendly.com/webkorpsservices/indiasoft'
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center align-center justify-center text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-base text-center md:text-lg  w-[233px] md:w-[233px] xl:w-[233px] ipad-pro:w-[233px]  h-[56px] bg-[#1887C9]"
                            >

                                Schedule A Meeting
                                <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"

                                    src="https://webkorps-app.s3.us-east-1.amazonaws.com/right-arrow.webp"

                                    alt="right-arrow"
                                    className="w-[24px] h-[24px] ml-2 md:w-[24px] md:h-[24px]"
                                />
                            </a>
                        </div>
                    </div>

                    <div className="w-[100%] mt-10 xl:mt-0 xl:ml-8">
                        <div className="space-y-4">
                            {data.map((item, index) => (
                                <div
                                    key={index}
                                    className={`border-b border-[#000000] pb-4 cursor-pointer ${index === 0 ? "border-t border-[#000000]" : ""
                                        }`}
                                >
                                    <div
                                        className="flex justify-between items-center"
                                        onClick={() => handleToggle(index)}
                                    >
                                        <p className=" font-bold  text-[16px] md:text-[16px] xl:text-[20px] ipad-pro:text-[16px] text-[#000000]">
                                            {item.title}
                                        </p>
                                        <span className="text-[20px] font-bold">
                                            {activeIndex === index ? "-" : "+"}
                                        </span>
                                    </div>
                                    {activeIndex === index && (
                                        <p className="mt-2   text-[#1E1E1E] text-[16px] md:text-[16px] xl:text-[20px] ipad-pro:text-[16px]">
                                            {item.content}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}
                <div className="w-full py-[4rem] px-[5%] xl:px-[50px] ipad-pro:px-[50px] overflow-hidden font-inter flex flex-col md:flex-row  xl:flex-row ipad-pro:flex-row items-starbg-white rounded-[28px]  bg-white rounded-[28px] shadow-custom-lg p-6 gap-[30px]" data-aos="fade-right"
                    data-aos-duration="1000">
                    <div className="xl:w-[50%] ipad-pro:w-[50%] w-full" data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="500">
                        <h2 className=" font-semibold text-[20px] ipad-pro:text-[48px] ipad-pro:leading-[62px] xl:text-[48px] leading-[25px] xl:leading-[62px] text-[#010205] text-center xl:text-left md:text-center ipad-pro:text-left">
                            Why Webkorps Wins
                        </h2>
                        <p className="mt-4  text-[#1E1E1E] text-[16px] md:text-[16px] xl:text-[20px] ipad-pro:text-[16px] leading-[28px] ipad-pro:w-[557px] md:w-[100%] w-[100%] xl:w-[557px] mt-[48px] text-center xl:text-left md:text-center ipad-pro:text-left">
                            At Webkorps, we blend innovation, expertise, and a relentless focus on quality to deliver solutions that truly make a difference. Our tailored approach, industry experience, and commitment to your success ensure every project drives meaningful results. Together, we don’t just achieve goals - we redefine possibilities.                        </p>
                        <div className="flex flex-col items-center md:flex-row gap-4 mt-[48px] xl:items-start ipad-pro:items-start md:items-center">
                            <a
                                href='https://calendly.com/webkorpsservices/indiasoft'
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center align-center justify-center text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-base text-center md:text-lg  w-[233px] md:w-[233px] xl:w-[233px] ipad-pro:w-[233px]  h-[56px] bg-[#1887C9]"
                            >

                                Schedule A Meeting
                                <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"

                                    src="https://webkorps-app.s3.us-east-1.amazonaws.com/right-arrow.webp"

                                    alt="right-arrow"
                                    className="w-[24px] h-[24px] ml-2 md:w-[24px] md:h-[24px]"
                                />
                            </a>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:w-[75%] ipad-pro:w-[75%] w-full">
                        {[firstColumn, secondColumn].map((column, colIndex) => (
                            column.length > 0 ? (
                                <div key={colIndex} className="space-y-4">
                                    {column.slice(0, showAll ? column.length : 3).map((item, index) => {
                                        const uniqueIndex = `${colIndex}-${index}`;
                                        return (
                                            <div key={uniqueIndex} className="rounded-xl overflow-hidden shadow-lg mb-4">
                                                <div
                                                    className={`text-lg font-semibold px-6 py-4 flex justify-between items-center cursor-pointer rounded-t-xl ${openIndex === uniqueIndex ? 'bg-[#1887C9] text-white h-[100px]' : 'bg-white text-[#1887C9] h-[100px]'}`}
                                                    onClick={() => setOpenIndex(openIndex === uniqueIndex ? null : uniqueIndex)}
                                                >
                                                    <span>{item.title}</span>
                                                    <button className="text-xl">{openIndex === uniqueIndex ? "✕" : "+"}</button>
                                                </div>

                                                <AnimatePresence>
                                                    {openIndex === uniqueIndex && (
                                                        <motion.div
                                                            key={uniqueIndex}
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }}
                                                            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                                                            style={{ overflow: 'hidden' }}
                                                        >
                                                            <div className="bg-[#F4F7FB] px-6 py-4 text-[#434A54] text-[18px] rounded-b-xl whitespace-pre-line">
                                                                {item.content}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : null
                        ))}

                    </div>
                </div>

                {/* Show More / Show Less Button */}
                {/* <motion.div className="text-center mt-6">
                            <motion.button
                                onClick={() => setShowAll(!showAll)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-2  text-white font-semibold rounded-lg transition duration-300 "
                            >
                                {!showAll ? (
                                    <img src="https://webkorps-app.s3.us-east-1.amazonaws.com/down-arrow.png" alt="Show Less" className="h-6 w-6" />
                                ) : (
                                    <img src="https://webkorps-app.s3.us-east-1.amazonaws.com/up-arrows.png" alt="Show More" className="h-6 w-6" />
                                )}
                            </motion.button>
                        </motion.div> */}

            </div >
            <div className="Clients  w-auto h-auto">
                <div className="content mx-auto w-full max-w-screen-xl text-center text-black mt-[16px]  md:mt-[4rem]">
                    <h2 className=" font-bold text-[32px] md:text-[36px] lg:text-[48px] line-height-1  ">Meet Our CEO at INDIASOFT 2025</h2>
                </div>
                <div className="pb-10 xl:pl-[81px] px-[5%]  md:pl-[5%] ">
                    <div className="mt-5 flex max-w-full justify-center flex-wrap gap-4">
                        {cards.slice(0, 1).map((card, index) => (
                            <div key={index} className="flex justify-center">
                                <Card image={card.image} alt={card.alt} />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <div className='bg-gradient-to-r from-[#020609] via-[#1887C9] to-[#020609] h-[195px] md:h-[195px] xl:h-[235px] ipad-pro:h-[195px] rounded-[20px]  mx-[10px]  content-center'>
                <div className="flex flex-col md:flex-row ipad-pro:flex-row xl:flex-row items-center align-center justify-center  md:justify-center ipad-pro:items-center  xl:justify-between xl:px-[80px] ipad-pro:justify-center gap-6  md:gap-9 xl:gap-9 ipad-pro:gap-6 sm:flex-col ">
                    <div>
                        <p className=" text-[#FFFFFF] font-bold text-[22px] text-center  xl:text-left md:text-[25px] md:leading-[30px] xl:text-[37px]  ipad-pro:text-[30px]  ipad-pro:leading-[46px] leading-[25px] xl:leading-[50px] ipad-pro:w-[670px] xl:w-[839px] xxl:w-[839px] md:w-[500px] w-[300px]"
                        >Schedule a meeting and explore cutting-edge solutions designed for your success.</p>
                    </div>



                    <a
                        href='https://calendly.com/webkorpsservices/indiasoft'
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center align-center justify-center text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-base text-center md:text-lg  w-[233px] md:w-[233px] xl:w-[233px] ipad-pro:w-[233px]  h-[56px] bg-[#1887C9]"
                    >

                        Schedule A Meeting
                        <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"

                            src="https://webkorps-app.s3.us-east-1.amazonaws.com/right-arrow.webp"

                            alt="right-arrow"
                            className="w-[24px] h-[24px] ml-2 md:w-[24px] md:h-[24px]"
                        />
                    </a>
                </div>
            </div>
            <div>
                <footer className="bg-[#626D78] text-white ">
                    <div className="w-full  px-[6%] xl:px-[160px] ipad-pro:px-[100px]     mt-6  py-5  ">
                        {/* Footer Bottom */}
                        <div className="border-t-2 border-[#FFFFFF] mt-[2rem] mb-6"></div>
                        <div className=" text-white flex flex-col xl:flex-row ipad-pro:flex-row md:flex-col gap-5  items-center justify-between ">
                            <div className="text-center  text-white">
                                <ul className="font-medium">
                                    <li className="mb-2  text-center block md:inline pr-0 md:pr-9">
                                        <a
                                            href="https://www.termsfeed.com/live/721358c0-4ce0-42ca-86b9-9d7dd9029291"
                                            className="hover:underline font-extralight text-white"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Terms & privacy
                                        </a>
                                    </li>
                                    <li className="mb-2  text-center block pr-0 md:pr-9 md:inline ">
                                        <a

                                            onClick={(e) => e.preventDefault()}
                                            title="commig soon"
                                            className=" font-extralight text-white cursor-default"
                                        >
                                            ©2024 Webkorps.
                                        </a>
                                    </li>

                                </ul>
                            </div>

                            <div className="flex justify-center text-center items-center  space-x-7">
                                <a
                                    href="https://www.facebook.com/WebKorps/"
                                    className="text-white"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.12935 7.30639C2.08237 7.30639 1.04872 7.30639 0.578886 7.30639C0.328306 7.30639 0.25 7.21242 0.25 6.9775C0.25 6.35105 0.25 5.70894 0.25 5.08249C0.25 4.83191 0.343968 4.7536 0.578886 4.7536H2.12935C2.12935 4.70662 2.12935 3.79827 2.12935 3.37541C2.12935 2.74896 2.23898 2.15384 2.5522 1.60569C2.88109 1.04189 3.35093 0.666018 3.94606 0.44676C4.33759 0.305809 4.72912 0.243164 5.15197 0.243164H6.68677C6.90603 0.243164 7 0.337132 7 0.556389V2.34177C7 2.56103 6.90603 2.655 6.68677 2.655C6.26392 2.655 5.84107 2.655 5.41821 2.67066C4.99536 2.67066 4.7761 2.87425 4.7761 3.31277C4.76044 3.78261 4.7761 4.23678 4.7761 4.72228H6.59281C6.84339 4.72228 6.93735 4.81625 6.93735 5.06683V6.96184C6.93735 7.21242 6.85905 7.29073 6.59281 7.29073C6.029 7.29073 4.82309 7.29073 4.7761 7.29073V12.3963C4.7761 12.6625 4.6978 12.7565 4.41589 12.7565C3.75812 12.7565 3.11601 12.7565 2.45824 12.7565C2.22332 12.7565 2.12935 12.6625 2.12935 12.4276C2.12935 10.7832 2.12935 7.35337 2.12935 7.30639Z" fill="#F7F7EE" />
                                    </svg>

                                    <span className="sr-only">Facebook page</span>
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/webkorps"
                                    className="text-white"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9971 12.1248V12.1243H11.9999V7.98539C11.9999 5.96061 11.5684 4.40088 9.22517 4.40088C8.0987 4.40088 7.34275 5.02534 7.03413 5.61735H7.00155V4.58991H4.77979V12.1243H7.09325V8.39354C7.09325 7.41125 7.27758 6.4614 8.48179 6.4614C9.66832 6.4614 9.686 7.58241 9.686 8.45655V12.1248H11.9971Z" fill="#F7F7EE" />
                                        <path d="M0.917969 4.56934H3.26871V11.9574H0.917969V4.56934Z" fill="#F7F7EE" />
                                        <path d="M2.09328 0.875C1.35173 0.875 0.75 1.47392 0.75 2.21202C0.75 2.95012 1.35173 3.56157 2.09328 3.56157C2.83484 3.56157 3.43657 2.95012 3.43657 2.21202C3.4361 1.47392 2.83437 0.875 2.09328 0.875V0.875Z" fill="#F7F7EE" />
                                    </svg>

                                    <span className="sr-only">LinkedIn page</span>
                                </a>
                                <a
                                    href="https://x.com/webkorpsllc"
                                    className="text-white"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.75 1.5467C12.2759 1.75469 11.7706 1.89255 11.2439 1.95948C11.7858 1.63595 12.1994 1.12755 12.3938 0.51475C11.8886 0.815969 11.3308 1.02873 10.7363 1.14747C10.2566 0.636672 9.57286 0.320312 8.82698 0.320312C7.37986 0.320312 6.21483 1.49491 6.21483 2.93486C6.21483 3.14205 6.23236 3.34127 6.27539 3.53092C4.10231 3.42494 2.17945 2.38342 0.887719 0.796844C0.662203 1.18811 0.529922 1.63595 0.529922 2.11806C0.529922 3.02331 0.996094 3.82577 1.69097 4.29034C1.27102 4.28237 0.859031 4.16045 0.51 3.96841C0.51 3.97638 0.51 3.98673 0.51 3.99709C0.51 5.26731 1.41605 6.32237 2.60419 6.56542C2.39142 6.62359 2.15953 6.65148 1.91887 6.65148C1.75153 6.65148 1.58259 6.64192 1.42402 6.60686C1.76269 7.642 2.72372 8.40302 3.86644 8.42772C2.97713 9.12339 1.84795 9.54255 0.625547 9.54255C0.411188 9.54255 0.205594 9.53298 0 9.50669C1.15786 10.2534 2.53008 10.6797 4.00987 10.6797C8.81981 10.6797 11.4495 6.69531 11.4495 3.24166C11.4495 3.12611 11.4455 3.01455 11.4399 2.90378C11.9587 2.53562 12.3946 2.07583 12.75 1.5467Z" fill="#F7F7EE" />
                                    </svg>
                                    <span className="sr-only">Twitter page</span>
                                </a>
                                <a
                                    href="https://www.instagram.com/webkorps"
                                    className="text-white"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg width="16" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.9989 8.75354C12.4387 8.75354 8.75831 12.4339 8.75831 16.9942C8.75831 21.5544 12.4387 25.2348 16.9989 25.2348C21.5592 25.2348 25.2396 21.5544 25.2396 16.9942C25.2396 12.4339 21.5592 8.75354 16.9989 8.75354ZM16.9989 22.35C14.0498 22.35 11.6431 19.9433 11.6431 16.9942C11.6431 14.0451 14.0498 11.6384 16.9989 11.6384C19.948 11.6384 22.3547 14.0451 22.3547 16.9942C22.3547 19.9433 19.948 22.35 16.9989 22.35ZM25.5771 6.4955C24.5123 6.4955 23.6525 7.35532 23.6525 8.42006C23.6525 9.48479 24.5123 10.3446 25.5771 10.3446C26.6418 10.3446 27.5016 9.48881 27.5016 8.42006C27.5019 8.16723 27.4524 7.91683 27.3558 7.68319C27.2592 7.44955 27.1174 7.23726 26.9386 7.05848C26.7599 6.87971 26.5476 6.73796 26.3139 6.64135C26.0803 6.54475 25.8299 6.49519 25.5771 6.4955ZM33.0623 16.9942C33.0623 14.7763 33.0824 12.5785 32.9579 10.3647C32.8333 7.79327 32.2467 5.51113 30.3664 3.63077C28.482 1.7464 26.2038 1.16381 23.6324 1.03925C21.4146 0.914699 19.2168 0.934789 17.003 0.934789C14.7851 0.934789 12.5873 0.914699 10.3735 1.03925C7.80206 1.16381 5.51992 1.75041 3.63956 3.63077C1.75519 5.51515 1.1726 7.79327 1.04804 10.3647C0.923489 12.5826 0.943578 14.7803 0.943578 16.9942C0.943578 19.208 0.923489 21.4098 1.04804 23.6236C1.1726 26.1951 1.7592 28.4772 3.63956 30.3576C5.52394 32.2419 7.80206 32.8245 10.3735 32.9491C12.5913 33.0736 14.7891 33.0535 17.003 33.0535C19.2208 33.0535 21.4186 33.0736 23.6324 32.9491C26.2038 32.8245 28.486 32.2379 30.3664 30.3576C32.2507 28.4732 32.8333 26.1951 32.9579 23.6236C33.0864 21.4098 33.0623 19.212 33.0623 16.9942ZM29.5266 26.4683C29.2333 27.1995 28.8797 27.7459 28.3132 28.3084C27.7467 28.875 27.2043 29.2285 26.473 29.5218C24.3597 30.3616 19.3413 30.1727 16.9989 30.1727C14.6565 30.1727 9.6342 30.3616 7.52081 29.5259C6.78956 29.2326 6.24313 28.879 5.68063 28.3125C5.11411 27.7459 4.76054 27.2035 4.46724 26.4723C3.63153 24.3549 3.82036 19.3366 3.82036 16.9942C3.82036 14.6518 3.63153 9.62943 4.46724 7.51604C4.76054 6.78479 5.11411 6.23836 5.68063 5.67586C6.24715 5.11336 6.78956 4.75577 7.52081 4.46247C9.6342 3.62675 14.6565 3.81559 16.9989 3.81559C19.3413 3.81559 24.3637 3.62675 26.4771 4.46247C27.2083 4.75577 27.7547 5.10934 28.3172 5.67586C28.8838 6.24238 29.2373 6.78479 29.5306 7.51604C30.3664 9.62943 30.1775 14.6518 30.1775 16.9942C30.1775 19.3366 30.3664 24.3549 29.5266 26.4683Z" fill="white" fill-opacity="0.85" />
                                    </svg>
                                    <span className="sr-only">Instagram page</span>
                                </a>

                                <a
                                    href="https://www.youtube.com/@webkorps"
                                    className="text-white"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg width="16" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M36 13.8898C36 13.8014 36 13.7009 35.996 13.5844C35.992 13.259 35.9839 12.8933 35.9759 12.5036C35.9438 11.3826 35.8875 10.2657 35.7991 9.21297C35.6786 7.76253 35.5018 6.55315 35.2607 5.64512C35.0063 4.6975 34.5077 3.83326 33.8146 3.13876C33.1215 2.44427 32.2583 1.94385 31.3112 1.68753C30.1741 1.38217 27.9482 1.19333 24.8143 1.07681C23.3237 1.02056 21.7286 0.984403 20.1335 0.964313C19.575 0.956278 19.0567 0.95226 18.5906 0.948242H17.4094C16.9433 0.95226 16.425 0.956278 15.8665 0.964313C14.2714 0.984403 12.6763 1.02056 11.1857 1.07681C8.05179 1.19735 5.82187 1.38619 4.68884 1.68753C3.74143 1.94322 2.87787 2.44343 2.18469 3.13802C1.4915 3.83261 0.993054 4.69719 0.739286 5.64512C0.494196 6.55315 0.321429 7.76253 0.200893 9.21297C0.1125 10.2657 0.0562499 11.3826 0.0241071 12.5036C0.0120535 12.8933 0.00803565 13.259 0.0040178 13.5844C0.0040178 13.7009 0 13.8014 0 13.8898V14.1148C0 14.2032 -6.13675e-08 14.3036 0.0040178 14.4201C0.00803565 14.7456 0.0160714 15.1112 0.0241071 15.5009C0.0562499 16.6219 0.1125 17.7389 0.200893 18.7915C0.321429 20.242 0.498214 21.4514 0.739286 22.3594C1.25357 24.284 2.76429 25.8027 4.68884 26.317C5.82187 26.6224 8.05179 26.8112 11.1857 26.9277C12.6763 26.984 14.2714 27.0201 15.8665 27.0402C16.425 27.0482 16.9433 27.0523 17.4094 27.0563H18.5906C19.0567 27.0523 19.575 27.0482 20.1335 27.0402C21.7286 27.0201 23.3237 26.984 24.8143 26.9277C27.9482 26.8072 30.1781 26.6183 31.3112 26.317C33.2357 25.8027 34.7464 24.288 35.2607 22.3594C35.5058 21.4514 35.6786 20.242 35.7991 18.7915C35.8875 17.7389 35.9438 16.6219 35.9759 15.5009C35.9879 15.1112 35.992 14.7456 35.996 14.4201C35.996 14.3036 36 14.2032 36 14.1148V13.8898ZM33.1071 14.0987C33.1071 14.1831 33.1071 14.2755 33.1031 14.384C33.0991 14.6974 33.0911 15.0429 33.083 15.4165C33.0549 16.4853 32.9987 17.554 32.9143 18.5465C32.8058 19.8402 32.6531 20.9009 32.4643 21.6121C32.2152 22.5402 31.4839 23.2755 30.5598 23.5206C29.7161 23.7456 27.5906 23.9264 24.7018 24.0349C23.2393 24.0911 21.6643 24.1273 20.0933 24.1474C19.5429 24.1554 19.0326 24.1594 18.5746 24.1594H17.4254L15.9067 24.1474C14.3357 24.1273 12.7647 24.0911 11.2982 24.0349C8.40938 23.9223 6.27991 23.7456 5.44018 23.5206C4.51607 23.2715 3.78482 22.5402 3.53571 21.6121C3.34687 20.9009 3.1942 19.8402 3.08571 18.5465C3.00134 17.554 2.94911 16.4853 2.91696 15.4165C2.90491 15.0429 2.90089 14.6933 2.89688 14.384C2.89688 14.2755 2.89286 14.179 2.89286 14.0987V13.9058C2.89286 13.8215 2.89286 13.729 2.89688 13.6206C2.90089 13.3072 2.90893 12.9616 2.91696 12.588C2.94509 11.5192 3.00134 10.4505 3.08571 9.45806C3.1942 8.16431 3.34687 7.1036 3.53571 6.39244C3.78482 5.46431 4.51607 4.72905 5.44018 4.48396C6.28393 4.25896 8.40938 4.07815 11.2982 3.96967C12.7607 3.91342 14.3357 3.87726 15.9067 3.85717C16.4571 3.84913 16.9674 3.84512 17.4254 3.84512H18.5746L20.0933 3.85717C21.6643 3.87726 23.2353 3.91342 24.7018 3.96967C27.5906 4.08217 29.7201 4.25896 30.5598 4.48396C31.4839 4.73306 32.2152 5.46431 32.4643 6.39244C32.6531 7.1036 32.8058 8.16431 32.9143 9.45806C32.9987 10.4505 33.0509 11.5192 33.083 12.588C33.0951 12.9616 33.0991 13.3112 33.1031 13.6206C33.1031 13.729 33.1071 13.8255 33.1071 13.9058V14.0987ZM14.4241 19.3862L23.7455 13.9621L14.4241 8.61833V19.3862Z" fill="white" fill-opacity="0.85" />
                                    </svg>
                                    <span className="sr-only">Youtube page</span>
                                </a>
                                <a
                                    href="https://in.pinterest.com/webkorps"
                                    className="text-white"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg
                                        version="1.0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="28"
                                        viewBox="0 0 900 920"
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <g transform="translate(0,920) scale(0.1,-0.1)" fill="white" stroke="none">
                                            <path d="M4330 8423 c-424 -29 -657 -72 -991 -179 -1127 -363 -2036 -1271 -2403 -2399 -140 -432 -194 -798 -183 -1255 10 -420 66 -740 197 -1125 304 -893 958 -1655 1795 -2090 133 -70 150 -73 202 -39 55 35 58 49 64 329 8 341 -2 280 210 1180 28 121 57 245 64 275 7 30 27 116 45 190 83 347 108 471 121 608 14 144 7 303 -21 487 -33 209 -32 433 3 580 46 198 121 348 226 455 128 130 249 188 411 197 353 20 569 -243 530 -645 -16 -169 -40 -270 -158 -662 -179 -596 -196 -680 -169 -815 9 -42 30 -106 46 -142 58 -123 206 -247 353 -296 75 -24 275 -29 373 -8 314 65 569 259 765 581 199 328 296 689 307 1153 7 291 -18 474 -96 684 -157 425 -490 754 -917 906 -465 166 -1059 131 -1493 -87 -444 -224 -766 -633 -890 -1131 -116 -465 -30 -946 234 -1319 24 -33 35 -59 35 -83 0 -52 -110 -491 -127 -508 -71 -71 -373 145 -546 392 -151 215 -269 503 -328 803 -20 100 -23 146 -23 355 -1 187 3 264 18 350 66 400 205 743 419 1034 92 126 335 366 467 463 351 256 732 402 1230 474 228 33 600 37 805 9 300 -40 562 -118 820 -245 536 -262 929 -686 1132 -1220 101 -266 144 -510 144 -821 0 -728 -255 -1394 -706 -1845 -347 -347 -743 -531 -1210 -564 -347 -24 -662 72 -888 269 -50 43 -64 51 -99 51 -33 0 -46 -6 -72 -33 -26 -28 -37 -58 -70 -183 -206 -798 -209 -806 -377 -1152 -103 -212 -114 -250 -84 -296 21 -31 46 -40 187 -70 662 -142 1349 -102 1963 114 611 214 1183 600 1610 1085 414 471 706 1021 854 1610 118 468 134 1016 45 1515 -72 400 -209 788 -401 1130 -124 222 -191 323 -209 316 -8 -3 -11 0 -8 9 7 18 -27 71 -136 205 -113 139 -220 251 -233 243 -6 -3 -7 -2 -4 4 3 5 -7 26 -24 46 -38 46 -237 222 -350 310 -83 64 -108 79 -94 57 3 -6 -1 -7 -9 -4 -9 3 -16 14 -16 24 0 23 -113 103 -127 89 -11 -11 -56 18 -48 31 3 5 0 12 -6 16 -8 4 -9 3 -5 -4 12 -20 -13 -13 -55 15 -26 17 -36 29 -28 34 8 5 5 10 -10 18 -17 10 -21 9 -21 -4 0 -23 -38 0 -50 30 -5 14 -32 35 -72 54 -35 17 -54 25 -44 16 23 -17 5 -20 -26 -4 -14 7 -17 14 -9 18 6 4 -9 16 -37 29 -26 12 -38 16 -28 7 25 -19 16 -19 -33 1 -21 8 -41 23 -44 33 -3 12 -48 35 -135 69 -72 29 -134 52 -138 52 -3 0 -4 -7 0 -15 3 -8 1 -15 -4 -15 -6 0 -10 9 -10 19 0 16 -21 26 -107 55 -160 53 -462 126 -519 126 -15 0 -24 -6 -24 -15 0 -8 -5 -15 -11 -15 -6 0 -9 8 -6 19 4 16 -7 20 -117 35 -229 30 -457 41 -626 29z m710 -64 c0 -5 -12 -7 -27 -4 -16 2 -49 7 -75 10 -27 4 -48 9 -48 13 0 4 34 3 75 -2 41 -5 75 -13 75 -17z m1105 -339 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m-715 -320 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z" />
                                        </g>
                                    </svg>
                                    <span className="sr-only">Youtube page</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div >
    )
}

export default EventIdiaSoft