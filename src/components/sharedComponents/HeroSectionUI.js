import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import AgileBenefitsGrid from './AgileBenefitsGrid';
import { isValidTo } from '../../Utility/validTo';

function HeroSectionUI({
    title,
    subtitle,
    description,
    image,
    imageAlt,
    buttonText,
    link,
    leftSection,
    rightImage,
    rightImageSrc,
    rightSliderImages,
    agileBenefit,
    height
}) {
    return (
        <div className="overflow-hidden font-inter">
            <div
                className={`flex overflow-hidden items-center relative w-full 
    ${height ? `${height}` : 'h-[55rem]'} 
    xl:h-[33rem] ipad-pro:h-[55rem] md:h-[55rem]`}
            >
                <img
                    width="800"
                    height="600"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    loading="lazy"
                    src={image?.src || image}
                    alt={imageAlt}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex  justify-center items-center xl:flex-row ipad-pro:flex-row flex-col gap-2    px-[5%] xl:px-[50px] ipad-pro:px-[50px] " >
                    <div className='flex xl:items-start ipad-pro:items-start items-center  justify-center xl:pt-[40px] xl:pb-[40px] ipad-pro:pt-[40px] ipad-pro:pt-[40px] pb-0 ipad-pro:pb-0 pt-[40px]  flex-col w-[100%]'>
                        <h1 className="text-[1.5625rem] xl:text-[3.3rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] xl:leading-[3.4rem] ipad-pro:leading-[3.4rem] leading-[2.4rem] text-white font-bold " data-aos="fade-left" dangerouslySetInnerHTML={{ __html: title }}></h1>
                        <h3 className="text-[1rem] xl:text-[1.3rem] ipad-pro:text-[1.35rem] md:text-[1.5rem]  text-white font-semibold  mt-[1.2rem] w-[95%]" data-aos="fade-left">{subtitle}</h3>
                        <p className="xl:text-left ipad-pro:text-left text-center text-white mt-[2.5rem]  text-[0.9375rem] xl:text-[1.1rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] font-inter w-[94%] " data-aos="fade-left">{description}</p>
                        {buttonText && (
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
                        )}
                    </div>
                    {leftSection && <AgileBenefitsGrid benefits={agileBenefit && agileBenefit.length > 0 ? agileBenefit : undefined} />
                    }
                    {rightImage &&
                        <div
                            className="col-span-2 flex flex-wrap text-center text-white xl:w-[45%] ipad-pro:w-[45%] w-[100%] xl:h-[65%] ipad-pro:h-[45%] h-[15%] justify-center"
                        >
                            <div
                            >
                                <div className="col-span-1 sm:col-span-2 rounded-lg shadow-md overflow-hidden">
                                    <img
                                        width="800"
                                        height="600"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                        loading="lazy"
                                        src={rightImageSrc?.src || rightImageSrc}
                                        alt="Updated Contact Us"
                                        className="w-full h-[215px] xl:h-auto ipad-pro:h-auto  md:max-h-[350px] object-contain"
                                    />
                                </div>
                            </div>
                        </div>}
                    {
                        rightSliderImages &&
                        <div className="relative z-10 w-full md:w-[75%] flex justify-center md:justify-end p-4 md:p-8" data-aos="fade-right">
                            <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="rounded-lg shadow-md overflow-hidden glow-img">
                                    <img
                                        width="800"
                                        height="600"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                        loading="lazy"
                                        src="https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-office-pune.webp"
                                        alt="Webkorps office pune"
                                        className="w-full h-auto max-h-[180px] aspect-[4/3]  glow-img"
                                    />
                                </div>
                                <div className="rounded-lg shadow-md overflow-hidden glow-img">
                                    <img
                                        width="800"
                                        height="600"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                        loading="lazy"
                                        src="https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-office-indore.webp"
                                        alt="webkorps-office-indore"
                                        className="w-full h-auto max-h-[180px] aspect-[4/3]  glow-img"
                                    />
                                </div>
                                <div className="col-span-1 sm:col-span-2 rounded-lg shadow-md overflow-hidden glow-img">
                                    <img
                                        width="800"
                                        height="600"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                        loading="lazy"
                                        src="https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-office-usa.webp"
                                        alt="Webkorps office usa"
                                        className="w-full h-auto max-h-[220px] aspect-[16/9]  glow-img"
                                    />
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default HeroSectionUI