import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { isValidTo } from '../../Utility/validTo';

function EventHeroSectionUI({
    title,
    subtitle,
    date,
    image,
    imageAlt,
    buttonText,
    link,
    height,
    location,
    timer
}) {
    return (
        <div className="overflow-hidden font-inter ">
            <div
                className={`flex overflow-hidden items-center relative w-full 
    ${height ? `${height}` : 'h-[55rem]'} 
    xl:h-[35rem] ipad-pro:h-[55rem] md:h-[55rem]`}
            >
                <img
                    width="800"
                    height="800"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    loading="lazy"
                    src={image}
                    alt={imageAlt}
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex  justify-center items-center xl:flex-row ipad-pro:flex-row flex-col gap-2    px-[5%] xl:px-[50px] ipad-pro:px-[50px] " >
                    <div className="flex flex-col items-center justify-center w-full h-full text-center px-4">
                        <h1 className="text-[1.5625rem] xl:text-[3.3rem] ipad-pro:textf-[1.875rem] md:text-[2.1875rem] xl:leading-[3.4rem] ipad-pro:leading-[3.4rem] leading-[2.4rem] text-white font-bold " data-aos="fade-left" dangerouslySetInnerHTML={{ __html: title }}></h1>
                        <h3 className="text-[1rem] xl:text-[1.6rem] ipad-pro:text-[1.5rem] md:text-[1.6rem]  text-white font-semibold  mt-[1.2rem] " data-aos="fade-left">{subtitle}</h3>
                        <div className="flex justify-center gap-[4rem] mt-[2.5rem]">
                            <div className="flex items-center flex-row gap-2">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                    <img
                                        src="https://webkorps-app.s3.us-east-1.amazonaws.com/calendarIcon.webp"
                                        alt="Calendar Icon"
                                        className="w-5 h-5"
                                        loading="lazy"
                                    />
                                </div>
                                <p className="text-white text-[0.9375rem] xl:text-[1.5rem] ipad-pro:text-[1.125rem] md:text-[1.2rem] leading-[1.5875rem] font-inter" data-aos="fade-left">
                                    {date}
                                </p>
                            </div>

                            <div className="flex items-center flex-row gap-2">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                    <img
                                        src="https://webkorps-app.s3.us-east-1.amazonaws.com/locationIcon.webp"
                                        alt="Location Icon"
                                        className="w-5 h-7"
                                        loading="lazy"
                                    />
                                </div>
                                <p className="text-white text-[0.9375rem] xl:text-[1.5rem] ipad-pro:text-[1.125rem] md:text-[1.2rem] leading-[1.5875rem] font-inter" data-aos="fade-left">
                                    {location}
                                </p>
                            </div>
                        </div>

                        {buttonText && (
                            <a
                                href={isValidTo(link) ? link : '/'}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
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
                            </a>
                        )}

                        {timer && (
                            <div className="flex flex-col justify-center items-center text-center mt-4">
                                <p className="outlined-text xl:text-[90px] ipad-pro:text-[60px] text-[30px] font-bold xl:leading-[130px] ipad-pro:leading-[90px] leading-[40px] text-white">{timer}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventHeroSectionUI