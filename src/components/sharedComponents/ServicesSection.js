import React from "react";
import { motion } from 'framer-motion';

export const ServiceCard = ({ icon, title, description }) => {
  const isImage = (icon) =>
    typeof icon === 'string' && /\.(jpg|jpeg|png|svg|webp|gif)$/i.test(icon);

  return (
    <div className="flex flex-col items-center Solutions-boxs group relative shadow-custom border-[0.8px] border-neutral-500 border-opacity-40 bg-white transition-all duration-500 ease-in-out hover:bg-[#061C3D] hover:text-white hover:border-transparent group-hover:text-white w-[23.5%] min-w-[278px] max-w-[378px] box-border">
      <div className="text-3xl mb-4 group-hover:text-white text-[#061C3D]">
        {typeof icon === 'string' && isImage(icon) ? (
          <img
            width="800"
            height="600"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            loading="lazy"
            src={icon}
            alt="icon"
            className="w-12 h-12 transition duration-500 ease-in-out group-hover:brightness-0 group-hover:invert"
          />
        ) : icon && icon.src ? (
          <img
            width="800"
            height="600"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            loading="lazy"
            src={icon.src}
            alt="icon"
            className="w-12 h-12 transition duration-500 ease-in-out group-hover:brightness-0 group-hover:invert"
          />
        ) : (
          <span className="text-4xl">{String(icon)}</span>
        )}
      </div>

      <h3
        className="font-inter text-[1rem] xl:text-[1.31rem] ipad-pro:text-[1.35rem] md:text-[1.5rem] leading-[1.9rem] font-semibold mb-2 group-hover:text-white text-[#061C3D] w-[107%]"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h3>

      <p className="font-inter text-[13px] xl:text-[16px] ipad-pro:text-[16px] md:text-[14px] leading-[22.6px] mb-4 group-hover:text-white text-gray-700">
        {description}
      </p>
    </div>
  );
};


export const BenefitCard = ({ icon, title, description, animation, width }) => {
  const isImage = (icon) =>
    typeof icon === 'string' && /\.(jpg|jpeg|png|svg|webp|gif)$/i.test(icon);

  return (
    <motion.div
      className={`flex flex-col items-center md:items-start border-yellow-400 border-[0.001px] p-[8px] pl-[14px] pt-[20px] pb-[20px] rounded-lg shadow-md ${width === '23.5%'
        ? 'xl:w-[23.5%] lg:w-[48%] md:w-[48%] sm:w-[48%]'
        : `w-[${width}]`
        }`}
      data-aos={animation}
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="text-3xl mb-4">
        {typeof icon === 'string' && isImage(icon) ? (
          <img
            src={icon}
            alt="icon"
            className="w-12 h-12 transition duration-500 ease-in-out group-hover:brightness-0 group-hover:invert"
          />
        ) : icon && icon.src ? (
          <img
            src={icon.src}
            alt="icon"
            className="w-12 h-12 transition duration-500 ease-in-out group-hover:brightness-0 group-hover:invert"
          />
        ) : (
          <span className="text-4xl">{String(icon)}</span>
        )}
      </div>
      <h4 className="text-[15px] xl:text-[20px] ipad-pro:text-[18px] md:text-[20px] font-semibold text-[#FFFFFF] mb-2 w-[103%]">
        {title}
      </h4>
      <p className="text-[13px] xl:text-[16px] ipad-pro:text-[16px] md:text-[16px] text-gray-300 mb-4">
        {description}
      </p>
    </motion.div>
  );
};



