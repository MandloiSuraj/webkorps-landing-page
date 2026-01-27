import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";


const AchievementCardContainer = ({ bgColor, headingColor }) => {
  const awards = [
    {
      image: "https://webkorps-app.s3.us-east-1.amazonaws.com/iso-certificate-27001.webp",
      alt: "iso-certificate-27001"
    },
    {
      image: "https://webkorps-app.s3.us-east-1.amazonaws.com/achivement-startup-india.webp",
      alt: "achivement startup india"
    },
    {
      image: "https://webkorps-app.s3.us-east-1.amazonaws.com/achivement-appfutura.webp",
      alt: "achivement appfutura"
    },
    {
      image: "https://webkorps-app.s3.us-east-1.amazonaws.com/achivement-wadline.webp",
      alt: "achivement-wadline"
    },
    {
      image: "https://webkorps-app.s3.us-east-1.amazonaws.com/achivement-cmmi-level-three.webp",
      alt: "achivement cmmi level three"
    },
    {
      image: "https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-clutch-top-decentralized-finance-company.jpg",
      link: 'https://clutch.co/profile/webkorps-services',
      alt: "Webkorps clutch top decentralized finance company"
    },
    {
      image: "https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-goodfirms-top-software-development-company.jpg",
      link: 'https://www.goodfirms.co/company/webkorps-services-india-pvt-ltd',
      alt: "Webkorps goodfirms top software development company"
    },
    {
      image: "https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-software-suggest-top-mobile-app-development-company.jpg",
      link: 'https://www.softwaresuggest.com/services/webkorps-services',
      alt: "webkorps software suggest top mobile app development company"
    },
    {
      image: "https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-software-suggest-leading-blockchain-company.jpg",
      link: 'https://www.softwaresuggest.com/services/webkorps-services',
      alt: "Webkorps software suggest leading blockchain company"
    },
    {
      image: "https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-selected-firms-top-software-development-company.jpg",
      link: 'https://selectedfirms.co/agency/webkorps-services',
      alt: "Webkorps selected firms top software development company"
    },
    {
      image: "https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-tech-imply-top-software-development-company.jpg",
      link: 'https://www.techimply.com/profile/webkorps-services',
      alt: "Webkorps techimply top software development company"
    },
    {
      image: "https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-right-firms-top-service-provider.jpg",
      link: 'https://www.rightfirms.co/company/webkorps',
      alt: "Webkorps Right Firms Top Service Provider"
    },
    {
      image: "https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-software-world-top-rated-firm.jpg",
      link: 'https://www.softwareworld.co/service/webkorps-services-reviews/',
      alt: "Webkorps software world top rated firm"
    },
    {
      image: "https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-top-developers-top-software-developer.jpg",
      link: 'https://www.topdevelopers.co/profile/webkorps-services-india',
      alt: "Webkorps top developers top software developer"
    },
    {
      image: "https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-top-firms-top-web-development-company.jpg",
      link: 'https://topfirms.co/company-detail/4678/webkorps-services',
      alt: "Webkorps top firms top web development company"
    },
    {
      image: "https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-tech-behemoths.jpg",
      link: 'https://techbehemoths.com/company/webkorps-services',
      alt: "Webkorps tech behemoths"
    },
    {
      image: "https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-true-firms.jpg",
      link: 'https://www.truefirms.co/company/Webkorps-Services/2840',
      alt: "webkorps true firms"
    },
    {
      image: "https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-sem-firms-software-development.jpg",
      link: 'https://www.semfirms.com/profile/webkorps-services',
      alt: "Webkorps sem firms software development"
    },
  ];

  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollRef = useRef(null);
  const awardsLoop = [...awards, ...awards];

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

    const scrollContainer = scrollRef.current;

    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - scrollContainer.offsetLeft);
      setScrollLeft(scrollContainer.scrollLeft);
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2; // Adjust for drag speed
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => setIsDragging(false);
    scrollContainer.addEventListener("mousedown", handleMouseDown);
    scrollContainer.addEventListener("mousemove", handleMouseMove);
    scrollContainer.addEventListener("mouseup", handleMouseUp);
    scrollContainer.addEventListener("mouseleave", handleMouseUp);

    return () => {
      scrollContainer.removeEventListener("mousedown", handleMouseDown);
      scrollContainer.removeEventListener("mousemove", handleMouseMove);
      scrollContainer.removeEventListener("mouseup", handleMouseUp);
      scrollContainer.removeEventListener("mouseleave", handleMouseUp);
      clearInterval(scrollInterval);
    };
  }, [isPaused]);

  return (
    <div className={`py-[4rem] px-[7%] xl:px-[50px] ipad-pro:px-[40px] ${bgColor}`}>
      <div className={`bg-white   border border-gray-300 rounded-[30px] shadow-custom-lg py-12 px-[30px]`}>
        <h2
          className="font-bold text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem] text-center text-[#061C3D]"
          dangerouslySetInnerHTML={{
            __html:
              'Awards & Accolades:<span style="font-weight:700; color:#1887C9;"> A Testament to Our IT Expertise </span>',
          }}
        ></h2>
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") {
              scrollRef.current.scrollLeft += 50;
            } else if (e.key === "ArrowLeft") {
              scrollRef.current.scrollLeft -= 50;
            }
          }}
          className="w-full flex gap-[4rem] overflow-x-auto scrollbar-hidden h-[100%] pt-[30px]"
          tabIndex={0}
        >
          {awardsLoop.map((award, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center w-45 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {award.link ? (
                <a
                  href={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    width="800"
                    height="600"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    loading="lazy"
                    src={award.image}
                    alt={award.alt}
                    className="w-32 h-32 object-contain mb-4 rounded-2xl shadow-lg bg-white"
                  />
                </a>
              ) : (
                <img
                  width="800"
                  height="600"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  loading="lazy"
                  src={award.image}
                  alt={award.alt}
                  className="w-32 h-32 object-contain mb-4 rounded-2xl shadow-lg bg-white"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementCardContainer;
