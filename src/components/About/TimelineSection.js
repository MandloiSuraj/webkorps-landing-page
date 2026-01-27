import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const timelineData = [
  { year: 2016, title: "Company Start", content: "Two founders left their jobs to disrupt the IT services industry, starting Webkorps in a small 500 sq ft office." },
  // { year: 2017, content: "Launched new services, catering to international clients. From an initial team of 10, we have now 30 members who share our vision of pushing boundaries and exceeding expectations. The demand for our services soared, and so did our team. We brought on board more talented individuals." },
  { year: 2018, title: "Early Growth", content: "Webkorps started with a strong foundation of 50 talented employees, paving the way for its future growth." },
  { year: 2019, title: "Expanding Services", content: "Expanding its portfolio, Webkorps introduced new services like Digital Analytics (DA) and Cloud Solutions, positioning itself as a forward-thinking leader in the tech industry" },
  // { year: 2020, content: "Adapted to remote work and increased global client base. From an initial team of 10, we have now 30 members who share our vision of pushing boundaries and exceeding expectations. The demand for our services soared, and so did our team. We brought on board more talented individuals." },
  // { year: 2021, content: "Scaled operations with AI and blockchain-based solutions. From an initial team of 10, we have now 30 members who share our vision of pushing boundaries and exceeding expectations. The demand for our services soared, and so did our team. We brought on board more talented individuals." },
  { year: 2022, title: 'Revenue Breakthrough', content: "The company achieved a major milestone by crossing $10 million in revenue and inaugurated its Pune branch, reflecting its rapid growth and success." },
  { year: 2023, title: "New Office", content: "Webkorps continued its upward trajectory, moving into a state-of-the-art 12,000 sq. ft. office, designed to foster innovation and collaboration." },
  { year: 2024, title: "Team Growth", content: "Reaching a significant milestone, the team grew to 300 employees, driving global impact. In the last quarter, Webkorps expanded further by opening a new office in Bengaluru, marking another step toward a brighter future." },
];

const Timeline = () => {
  const currentYear = new Date().getFullYear();
  const defaultYear = timelineData.some((item) => item.year === currentYear) ? currentYear : 2016;

  const [selectedYear, setSelectedYear] = useState(defaultYear);

  return (
    <div className="bg-[#061C3D] px-[5%] xl:px-[50px] ipad-pro:px-[40px] py-[4rem]">
      <div className=" px-[3%] xl:px-[30px] ipad-pro:px-[30px]  text-center lg:text-left   justify-center p-12 shadow-[0px_0px_3px_#707070] rounded-[20px] border-black border-[0.0001px]">
        <h2 className="text-center text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem]  text-white font-inter font-semibold mb-[30px]">Growth of the company</h2>

        {/* Timeline */}

        <div className="w-full flex flex-col items-center">
          {/* Timeline years */}
          <div className="flex flex-wrap xl:gap-[5rem] ipad-pro:gap-[4rem] gap-[2.7rem] justify-center ">
            {timelineData.map((item) => (
              <div
                key={item.year}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => setSelectedYear(item.year)}
              >
                <span
                  className={`text-lg mb-2 transition-all duration-300 ${selectedYear === item.year
                      ? "text-yellow-400 font-bold"
                      : "text-gray-400"
                    }`}
                >
                  {item.year}
                </span>
                <motion.div
                  layout
                  className={`xl:w-[5.96rem] ipad-pro:w-[5.2rem] h-[1.65rem] w-[5.96rem] rounded-full transition-all duration-300 ${selectedYear === item.year
                      ? "bg-yellow-400"
                      : "border border-gray-400"
                    }`}
                />
              </div>
            ))}
          </div>

          {/* Content block - match the same width container */}
          <div className="w-full flex justify-center mt-6">
            <div className=" w-full flex xl:flex-row ipad-pro:flex-row flex-col justify-center items-center xl:text-left ipad-pro:text-left text-center min-h-[25vh] gap-[3rem]">
              {/* Title */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={selectedYear}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-[100px] md:text-[100px] font-bold text-yellow-400"
                >
                  {selectedYear}
                </motion.p>
              </AnimatePresence>

              {/* Description */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedYear + "-content"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg text-gray-300 w-full xl:w-[60%]"
                >
                  <p className="font-bold  mb-2">
                    {timelineData.find((item) => item.year === selectedYear)?.title}
                  </p>
                  <p>{timelineData.find((item) => item.year === selectedYear)?.content}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Timeline;
