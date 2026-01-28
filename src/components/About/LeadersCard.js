import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const LinkedInIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.25 2.25C14.6478 2.25 15.0294 2.40804 15.3107 2.68934C15.592 2.97064 15.75 3.35218 15.75 3.75V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H14.25ZM13.875 13.875V9.9C13.875 9.25155 13.6174 8.62965 13.1589 8.17112C12.7003 7.7126 12.0785 7.455 11.43 7.455C10.7925 7.455 10.05 7.845 9.69 8.43V7.5975H7.5975V13.875H9.69V10.1775C9.69 9.6 10.155 9.1275 10.7325 9.1275C11.011 9.1275 11.278 9.23812 11.475 9.43504C11.6719 9.63195 11.7825 9.89902 11.7825 10.1775V13.875H13.875ZM5.16 6.42C5.49417 6.42 5.81466 6.28725 6.05095 6.05095C6.28725 5.81466 6.42 5.49417 6.42 5.16C6.42 4.4625 5.8575 3.8925 5.16 3.8925C4.82384 3.8925 4.50144 4.02604 4.26374 4.26374C4.02604 4.50144 3.8925 4.82384 3.8925 5.16C3.8925 5.8575 4.4625 6.42 5.16 6.42ZM6.2025 13.875V7.5975H4.125V13.875H6.2025Z"
      fill="currentColor"
    />
  </svg>
);
const Card = ({ image, name, position, linkedIn, altText }) => {
  const hasLinkedIn = linkedIn?.trim().length > 0;

  return (
    <div className="bg-white overflow-hidden text-center transition-all duration-300 shadow-2xl group w-full rounded-[25px] flex flex-col">
      {/* Profile Image Container with Equal Padding */}
      <div className="p-5">
        <div className="relative w-full aspect-square overflow-hidden rounded-2xl shadow-md">
          <img
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={image}
            alt={altText || name}
            width="400"
            height="400"
          />
        </div>
      </div>

      <div className="bg-white px-5 pb-5 pt-0 flex-grow flex flex-col justify-center">
        <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{name}</h3>
        <p className="text-gray-500 text-sm line-clamp-2 min-h-[40px] flex items-center justify-center">
          {position}
        </p>

        <div className="flex justify-center mt-3">
          {hasLinkedIn ? (
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              aria-label={`${name} LinkedIn`}
            >
              <LinkedInIcon />
            </a>
          ) : (
            <span
              className="text-gray-400 cursor-not-allowed"
              title="LinkedIn not available"
            >
              <LinkedInIcon />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};


const LeadersCardContainer = () => {
  const cards = [
    { image: "https://webkorps-app.s3.us-east-1.amazonaws.com/chirag-agrwal-ceo-and-founder.jpg", name: "Chirag Agrawal", position: "CEO & Founder", linkedIn: "https://www.linkedin.com/in/chirag-a-8a2a58a0/", altText: 'Chirag Agrwal CEO and Founder' },
    { image: "https://webkorps-app.s3.us-east-1.amazonaws.com/amul-choudhary-coo-and-co-founder.jpg", name: "Amul Choudhary", position: "COO & Co-Founder", linkedIn: "https://www.linkedin.com/in/amul-c-044070a1/", altText: 'amul-choudhary-coo-and-co-founder' },
    { image: "https://webkorps-app.s3.us-east-1.amazonaws.com/vikas-dameriya-vice-president-of-business.jpg", name: "Vikas Dameriya", position: "Vice President of Business", linkedIn: "https://www.linkedin.com/in/vikas-dameriya-878526b1/", altText: 'Vikas Dameriya Vice President of Business' },
    { image: "https://webkorps-app.s3.us-east-1.amazonaws.com/parakh-garg-cto.jpg", name: "Parakh Garg", position: "CTO", linkedIn: "https://www.linkedin.com/in/parakhgarg/", altText: 'Parakh Garg CTO' },
    { image: "https://webkorps-app.s3.us-east-1.amazonaws.com/akash-chandrawade-principal-consultant.jpg", name: "Akash Chandrawade", position: "Vice President - People, Strategy & Delivery", linkedIn: "https://www.linkedin.com/in/akash-chandrawade-67206ba1/", altText: 'akash-chandrawade-principal-consultant' },
    { image: "https://webkorps-app.s3.us-east-1.amazonaws.com/ankur-singhal-chief-growth-officer.jpg", name: "Ankur Singhal", position: "Chief Growth Officer", linkedIn: "", altText: 'ankur-singhal-chief-growth-officer' },
    { image: "https://webkorps-app.s3.us-east-1.amazonaws.com/swapnil-bhosle-vice-president-of-engineering.jpg", name: "Swapnil Bhosle", position: "Vice President of Engineering", linkedIn: "https://www.linkedin.com/in/swapnil-bhosale-7534b4138/", altText: 'swapnil-bhosle-vice-president-of-engineering' },
    { image: 'https://webkorps-app.s3.us-east-1.amazonaws.com/mehul-shah-head-of-operations-pune.jpg', name: "Mehul Shah", position: "Head of Operations (Pune)", linkedIn: "https://www.linkedin.com/in/mehul-s-01837146/", altText: 'mehul-shah-head-of-operations-pune' },
    { image: "/assets/images/ajay-thakur-head-of-recruitment.jpg", name: "Ajay Thakur", position: "Head Of Recruitment", linkedIn: "https://www.linkedin.com/in/ajay-thakur-535929226/", altText: 'ajay-thakur-head-of-recruitment' },
  ];
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [countries, setCountries] = useState(0);
  const sectionRef = useRef(null);
  const [hasCounted, setHasCounted] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasCounted) {
        setHasCounted(true);
        const increment = (setter, target, step) => {
          const interval = setInterval(() => {
            setter((prev) => {
              if (prev < target) {
                const next = prev + step;
                return next > target ? target : next;
              } else {
                clearInterval(interval);
                return target;
              }
            });
          }, 50);
        };

        increment(setYears, 8, 1);
        increment(setProjects, 500, 10);
        increment(setClients, 250, 5);
        increment(setCountries, 30, 1);
      }
    }, { threshold: 0.5 });

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [hasCounted]);
  const isMobileOrTablet = typeof window !== 'undefined' && window.innerWidth <= 1024;
  const TeamImg = !isMobileOrTablet ? "/assets/images/webkorps-team.jpg" : "/assets/images/webkorps.jpg"
  return (
    <div className="content text-center items-center border border-gray-300 rounded-[30px] shadow-custom-lg px-[3%] xl:px-[30px] ipad-pro:px-[30px] p-12 w-full bg-white">
      <section className="flex justify-center bg-cover bg-white bg-right bg-no-repeat w-full ">
        <div className="w-full flex justify-center relative">
          <div className="relative w-full">
            <img
              className="w-full h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px]  rounded-lg shadow-lg"
              src={TeamImg}
              alt="Webkorps Leadership Team"
              width="800"
              height="600"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              loading="lazy"
            />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative md:top-[-10%] md:left-[5%] transform -translate-x-1/2 w-[100%] md:w-[90%] lg:w-[90%] bg-white bg-opacity-50 backdrop-blur-md shadow-xl border border-gray-300 rounded-xl p-6 md:transform-none"
            >
              <div className="w-full flex flex-col ipad-pro:flex-col xl:flex-row ">
                <motion.div className="lg:w-[50%] w-full ipad-pro:w-full md:w-full">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] text-black font-inter font-bold leading-[32px] md:leading-[36px] text-start"
                  >
                    Meet Our Visionary Leadership Team
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="text-gray-700 mt-3 text-start
                   text-lg md:text-base leading-relaxed text-gray-700"
                  >
                    Our leadership team at Webkorps is a dynamic group of industry experts dedicated to driving innovation, growth, and success. With a wealth of experience in technology and business strategy, they lead with vision, passion, and a commitment to excellence. Their strategic insights and customer-centric approach empower our teams to deliver cutting-edge solutions that help businesses thrive in the digital era.
                  </motion.p>

                </motion.div>

                <div ref={sectionRef} className="lg:w-[50%] w-full ipad-pro:w-full md:w-full grid grid-cols-2 xl:gap-y-8 ipad-pro:gap-y-8 gap-y-0  gap-x-8 mt-8 lg:mt-0">
                  <div className="flex flex-col items-center  relative">
                    <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1887C9]">
                      {years}+
                    </p>
                    <p className="text-base sm:text-xl text-gray-700 mt-2">
                      Years <br /> in Business
                    </p>

                    <hr className="absolute right-0 top-0 h-[90%] border-gray-300 border-r" />
                    <hr className="absolute bottom-0 left-0 w-[90%] border-gray-300" />
                  </div>

                  <div className="flex flex-col items-center relative">
                    <p className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#1887C9]">{projects}+</p>
                    <p className="text-base sm:text-xl text-gray-700 mt-2">Projects Delivered</p>
                    <hr className="absolute bottom-0 left-0 w-full border-gray-300" />
                  </div>

                  <div className="flex flex-col items-center justify-center relative">
                    <p className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#1887C9]">{clients}+</p>
                    <p className="text-base sm:text-xl text-gray-700 mt-2">Professional Development Team</p>
                    <hr className="absolute right-0 top-0 h-full border-gray-300 border-r" />
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <p className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#1887C9]">{countries}+</p>
                    <p className="text-base sm:text-xl text-gray-700 mt-2">Countries Served</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="flex flex-wrap justify-center w-full gap-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-[48%] md:w-[48%] xl:w-[23%] ipad-pro:w-[48%] flex justify-center"
          >
            <Card
              image={card.image}
              name={card.name}
              position={card.position}
              linkedIn={card.linkedIn}
              altText={card.altText}
            />
          </div>
        ))}
      </div>

    </div>
  );
};
export default LeadersCardContainer;