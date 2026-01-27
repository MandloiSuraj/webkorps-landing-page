import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, AnimatePresence } from 'framer-motion';

const tabVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 }
};
export const IndustryChallenges = ({ heading, description, challenges, bgColor, hiring }) => {
  return (
    <div
      className={`grid gap-6 md:gap-y-0 grid-cols-1 md:grid-cols-2 px-[5%] xl:px-[50px] ipad-pro:px-[50px] pt-0 pb-[4rem] ipad-pro:py-[4rem] xl:py-[4rem] xl:overflow-visible ipad-pro:overflow-visible overflow-hidden font-inter  ${bgColor}`}
    >
      <div className="side-sticky self-start sticky top-[90px] bg-white p-6 rounded-lg shadow-custom-lg xl:overflow-visible ipad-pro:overflow-visible overflow-hidden" data-aos="fade-right">
        <div className="md:cont-padding flex flex-col items-start justify-center">
          <h2 className="text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem] font-bold" dangerouslySetInnerHTML={{ __html: heading }}></h2>
          <p className="text-gray-700 mt-[2rem] text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem]">{description}</p>
          {/* {!hiring && <motion.div
            className="px-4 py-2 rounded-[30px] font-bold text-white transition-all duration-300 w-[35%] flex justify-center flex-col items-center"
            data-aos="zoom-in"
          >
            <img
              src="https://webkorps-app.s3.us-east-1.amazonaws.com/blockchainGIF.gif"
              alt="Blockchain Technology Graphics"
              style={{ display: 'block', width: '100%' }}
            />
          </motion.div>} */}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-6 mt-[5rem] xl:mt-0 ipad-pro:mt-0" >
        {challenges.map((service, index) => (
          <div key={index} className="boxed bg-[#FAFAFA] p-6 rounded-lg shadow-md">
            <h3 className="text-[15px] xl:text-[23px] ipad-pro:text-[18px] md:text-[20px] font-semibold text-[#1887C9]">{service.title}</h3>
            <p className="mt-2 text-[13px] xl:text-[18px] ipad-pro:text-[16px] md:text-[16px] text-gray-700 ">{service.content}</p>
          </div>
        ))}
      </div>

    </div>
  );
};



export function OfferingsSection({ tabsData, description, heading, bgColor, CardBgColor, services }) {
  const [activeTab, setActiveTab] = useState(tabsData[0]?.id);

  return (
    <div className={`${bgColor} z-10 font-inter xl:overflow-visible ipad-pro:overflow-visible overflow-hidden py-[4rem]`}>

      <div className={` p-[3rem] px-[3%] xl:px-[30px] ipad-pro:px-[30px]  ${CardBgColor} h-auto shadow-custom-lg justify-center  font-inter mx-[7%] md:mx-[7%] xl:mx-[50px] rounded-[30px] ipad-pro:mx-[50px]`}
      >
        <div className={`w-full text-center ${CardBgColor === 'bg-custom-blue-gradient' ? "text-white" : 'text-black'} `} data-aos="fade-left">
          <h2 className=" font-bold text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem]  "
            dangerouslySetInnerHTML={{ __html: heading }}
          >
          </h2>
          <p className={`${CardBgColor === 'bg-custom-blue-gradient' ? "text-white" : 'text-gray-700'}  font-normal text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] pt-[30px]`}>
            {description}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-[2rem]   justify-center mt-[4rem] font-inter" data-aos="fade-left">

          <ul className={`flex flex-col lg:w-[45%] border-r p-4 border-gray-300 shadow-custom-lg rounded-[20px] text-left ${!services ? 'bg-custom-blue-gradient text-black' : 'bg-white'} justify-center`}>
            <div className="overflow-y-auto max-h-[400px]">
              {tabsData.map((tab) => (
                <motion.li
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`cursor-pointer p-4 m-[5px] mb-[10px] font-bold shadow-md rounded-[10px] ${activeTab === tab.id ? 'bg-custom-blue-gradient text-white shadow-[0px_0px_3px_#707070]  border-white border-[0.0001px]' : services ? 'bg-gray-200' : 'bg-white'}`}
                >
                  <FontAwesomeIcon
                    icon={tab.icon}
                    className={`mr-2 ${activeTab === tab.id ? 'text-white' : 'text-black'}`}
                  />
                  {tab.title}
                </motion.li>

              ))}
            </div>
          </ul>


          <div className={`lg:w-[60%] ${CardBgColor === 'bg-custom-blue-gradient' ? "text-white" : 'text-black'}  flex flex-col items-start side-sticky self-start sticky top-[4rem]  xl:overflow-visible ipad-pro:overflow-visible overflow-hidden`}>
            <AnimatePresence mode="wait">
              {tabsData.map((tab) => (
                activeTab === tab.id && (
                  <motion.div
                    key={tab.id}
                    variants={tabVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-center items-start"
                  >
                    <h3 className="text-[14px] xl:text-[1.8rem] ipad-pro:text-[1.4rem] md:text-[1rem] font-bold ">{tab.title}</h3>
                    <p className={`mb-4 text-[14px] xl:text-[16px] ipad-pro:text-[15px] md:text-[15px] mt-3 ${CardBgColor === 'bg-custom-blue-gradient' ? "text-white" : 'text-gray-700'} `}>{tab.content}</p>
                    <div className={`flex ${services ? 'flex-col' : 'space-x-8 flex-row'}  ${CardBgColor === 'bg-custom-blue-gradient' ? "text-white" : 'text-gray-700'}  ml-6`}>
                      <ul className="list-disc">
                        {tab.features.slice(0, Math.ceil(tab.features.length / 2)).map((feature, index) => (
                          <li key={index} className='mb-[0.7rem]'>{feature}</li>
                        ))}
                      </ul>
                      <ul className="list-disc">
                        {tab.features.slice(Math.ceil(tab.features.length / 2)).map((feature, index) => (
                          <li key={index} className='mb-[0.7rem]'>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}


function Card({ icon, title, description, bgColor, features }) {
  const isImage = (icon) =>
    typeof icon === 'string' && /\.(jpg|jpeg|png|svg|webp|gif)$/i.test(icon);

  return (
    <div
      className={`flex flex-col items-start group relative text-left justify-start pt-[15px] px-[1rem] pb-[15px] border-[0.8px] border-neutral-500 border-opacity-40 ${bgColor} transition-all duration-500 ease-in-out hover:shadow-custom-lg shadow-lg rounded-[20px_20px] ${features ? "w-[23.5%] min-w-[278px] max-w-[378px]" : ""}  box-border h-auto`}
    >
      <div className="flex flex-col">
        <div className={`text-3xl mb-2 ${bgColor === 'bg-white' ? 'text-[#061C3D]' : 'text-white'}`}>
          {typeof icon === 'string' && isImage(icon) ? (
            <img
              src={icon}
              alt="icon"
              className="w-12 h-12"
            />
          ) : icon && icon.src ? (
            <img
              src={icon.src}
              alt="icon"
              className="w-12 h-12"
            />
          ) : (
            icon
          )}
        </div>
        <h3
          className={`font-inter text-[0.8rem] xl:text-[1.18rem] ipad-pro:text-[0.9rem] md:text-[1rem] leading-[1.2rem] font-semibold mb-2 ${bgColor === 'bg-white' ? 'text-[#061C3D]' : 'text-white'} w-[105%]`}
          dangerouslySetInnerHTML={{ __html: title }}
        ></h3>
      </div>

      <p className={`font-inter text-[13px] xl:text-[16px] ipad-pro:text-[16px] md:text-[14px] leading-[22.6px] ${bgColor === 'bg-white' ? 'text-gray-700' : 'text-white'}`}>
        {description}
      </p>
    </div>
  );
}


export function Features({ heading, features, description, bgColor }) {
  return (
    <div className={`py-[4rem]   ${bgColor} font-inter  relative  overflow-hidden`} >
      <div className="Clients  w-auto items-center justify-center text-center lg:text-left  mx-[7%] md:mx-[7%] xl:mx-[50px] ipad-pro:mx-[50px] justify-center  shadow-custom-lg rounded-[20px] bg-white px-[3%] xl:px-[30px] ipad-pro:px-[30px] py-[3rem]">
        <div className="w-full text-center " data-aos="fade-left">
          <h2 className=" font-bold text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem] text-[#061C3D]"
            dangerouslySetInnerHTML={{ __html: heading }}
          >
          </h2>
          <p className=" font-normal text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem]  leading-[1.5875rem] pt-[30px] text-gray-700">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap justify-center  2xl:gap-[1.5rem] xl:gap-[0.8rem] ipad-pro:[0.8rem] mt-[4rem]  w-full" data-aos="fade-up">
          {features.map((feature, index) => (
            <Card
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              bgColor="bg-white"
              features={true}
            />
          ))}
        </div>


      </div>
    </div>
  );
}



export function CoreValuesCards({ heading, features, description }) {
  return (
    <div className=" py-[4rem]  bg-custom-blue-gradient font-inter  relative  overflow-hidden">
      <div className="Clients  w-auto items-center justify-center text-center lg:text-left  mx-[7%] md:mx-[7%] xl:mx-[50px] ipad-pro:mx-[50px] justify-center  shadow-custom-lg rounded-[20px] bg-white px-[3%] xl:px-[30px] ipad-pro:px-[30px] py-[3rem]">
        <div className="w-full text-center " data-aos="fade-left">
          <h2 className=" font-bold text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem] text-[#061C3D]"
            dangerouslySetInnerHTML={{ __html: heading }}
          >
          </h2>
          <p className=" font-normal text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] pt-[30px] text-[#061C3D]">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  ipad-pro:grid-cols-3 gap-4 justify-center mt-[4rem]">
          {features.map((feature, index) => (
            <Card key={index} icon={feature.icon} title={feature.title} description={feature.description} bgColor='bg-custom-blue-gradient' features={false} />

          ))}
        </div>

      </div>
    </div>
  );
}