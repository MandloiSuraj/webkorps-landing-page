import React from "react";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { isValidTo } from "../../Utility/validTo";

const CTASection = ({ title, description, buttonText, bgColor, link, ctaImage, textColor }) => {
  return (
    <div className={`${bgColor} py-[4rem]`}>
      <div className="relative mx-[7%] md:mx-[7%] xl:mx-[50px] ipad-pro:mx-[50px] rounded-[30px] overflow-hidden">
        <div className="absolute inset-0 block md:hidden bg-gradient-to-br from-blue-500 to-cyan-400 rounded-[30px] z-0"></div>

        {/* 🖼️ Image Background for Desktop */}
        <img
          width="800"
          height="600"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          loading="lazy"
          src={ctaImage}
          alt="Website CTA"
          className="absolute inset-0 w-full h-full rounded-[30px] z-0 hidden md:block"
        />

        {/* Text Content Overlay */}
        <div className={`relative inset-0 flex flex-col md:flex-row md:w-full w-[70%] items-start md:items-center justify-start px-[10px] md:px-[30px] pt-4 pb-4 md:pt-[3rem] md:pb-[3rem] ${!textColor ? 'text-white' : 'text-black'}`}>
          <div className="flex md:justify-center justify-start flex-col  text-left md:text-left">
            <h2
              className="text-[1.25rem] md:text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] leading-[2rem] md:leading-[2.45rem] font-bold w-full md:w-[70%]"
              data-aos="fade-right"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h2>

            <p
              className={`mt-4 px-2 md:px-0 text-[0.875rem] md:text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] leading-[1.5rem] md:leading-[1.5875rem] w-full md:w-[60%] ${!textColor ? 'text-white' : 'text-gray-700'}`}
              data-aos="fade-right"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>

            <Link to={isValidTo(link) ? link : '/'}>
              <motion.button
                type="button"
                whileHover={{
                  backgroundColor: '#FFFFFF',
                  color: '#1887C9',
                  borderColor: '#1887C9',
                  transition: { duration: 0.1 },
                }}
                className="group relative overflow-hidden inline-flex items-center justify-center text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-base text-center md:text-lg px-3 md:px-4 py-3 sm:py-5 md:py-2 border-2 border-[#1887C9] bg-[#1887C9] transition-all duration-300 mt-[30px]"
              >
                {buttonText}
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CTASection;