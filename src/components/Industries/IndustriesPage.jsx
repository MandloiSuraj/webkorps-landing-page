import React from 'react';
import { motion } from 'framer-motion';
import ProgressSection from '../sharedComponents/ProgressSection';
import Technologies from '../sharedComponents/technologies';
import FAQSection from '../sharedComponents/FAQSection';
import CTASection from '../sharedComponents/CTASection';
import { Features, IndustryChallenges, OfferingsSection } from '../sharedComponents/IndustryChallenges'
import StakingCard from '../sharedComponents/StackingCards';
import HeroSectionUI from '../sharedComponents/HeroSectionUI';
import websiteCTAImage from "../../assets/images/website-cta-4.jpg";
import { ServiceCard } from '../sharedComponents/ServicesSection';

import ChooseImage from "../../assets/images/why-choose-webkorps.jpg";



const IndustriesPage = ({
    title,
    subtitle,
    description,
    image,
    imageAlt,
    buttonText,
    link,
    overviewData,
    features,
    offeringData,
    featureData,
    assetType,
    ProcessData,
    techStack,
    industries,
    faqData,
    ctaData,
    challenges,
    agileBenefit

}) => {
    return (
        <div className="w-full text-center xl:text-left ipad-pro:text-left md:text-center  pt-[80px]">
            <HeroSectionUI title={title}
                subtitle={subtitle}
                description={description}
                image={image}
                imageAlt={imageAlt}
                buttonText={buttonText}
                link={link}
                leftSection={true}
                agileBenefit={agileBenefit}
            />
            {overviewData &&
                <div className="py-[4rem]  bg-white font-inter ">
                    <div className="flex flex-col overflow-hidden md:flex-col ipad-pro:flex-row xl:flex-row items-center px-[3%] xl:px-[30px] ipad-pro:px-[30px] justify-center text-center lg:text-left  mx-[7%] md:mx-[7%] xl:mx-[50px] ipad-pro:mx-[50px] justify-center p-12 shadow-custom-lg rounded-[20px] bg-white gap-[80px]">

                        <div className="content flex flex-col">
                            <h2
                                className="font-inter text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem] font-bold text-center xl:text-left ipad-pro:text-left text-[#072125] w-full"
                                data-aos="fade-right"
                                dangerouslySetInnerHTML={{ __html: overviewData?.heading }}
                            >
                            </h2>
                            {overviewData?.data.map((des, index) => (
                                <p
                                    className="text-gray-700 mt-[2rem] text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] font-inter"
                                    data-aos="fade-right"
                                >
                                    {des.para}
                                </p>
                            )
                            )}
                        </div>

                        <div className="content mt-6 xl:mt-0 ipad-pro:mt-6 md:mt-6 w-full flex flex-col items-center xl:items-end ipad-pro:items-end md:items-center">
                            <img
                                width="800"
                                height="600"
                                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                loading="lazy"
                                src={overviewData?.image?.src || overviewData?.image}
                                alt="leading-web-development-company"
                                className="rounded-lg shadow-md w-full lg:w-[385px] lg:h-[415px] max-w-md"
                                data-aos="fade-left"
                            />
                        </div>
                    </div>
                </div>}

            {challenges &&
                <IndustryChallenges challenges={challenges?.challengesData} description={challenges?.description} heading={challenges.heading} bgColor={'bg-[#061C3D]'} hiring={false} />
            }

            {features &&
                <div className=" py-[4rem]   bg-white font-inter  relative  xl:overflow-visible ipad-pro:overflow-visible overflow-hidden">
                    <div className="bg-white mx-[7%] md:mx-[7%] xl:mx-[50px] ipad-pro:mx-[50px] justify-center  shadow-custom-lg rounded-[20px] z-10 font-inter xl:overflow-visible ipad-pro:overflow-visible overflow-hidden">
                        <div className="w-full text-center px-[3%] xl:px-[30px] ipad-pro:px-[30px]" data-aos="fade-right">
                            <h2 className=" font-bold text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem] pt-[4rem] text-[#061C3D]"
                                dangerouslySetInnerHTML={{ __html: features?.title }}
                            >
                            </h2>
                            <p className=" font-normal text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] pt-[30px] text-gray-700">
                                {features?.description}
                            </p>
                        </div>
                        <div className="flex xl:flex-row md:flex-col ipad-pro:flex-col flex-col items-start gap-x-[45px] px-[3%] xl:px-[30px] ipad-pro:px-[30px]  py-[4rem]">
                            <div className="flex flex-col 2xl:w-[60%] xl:w-[50%] md:w-[100%] ipad-pro:w-[100%] w-[100%]">
                                <div className="flex flex-col space-y-6 ">
                                    <motion.ul
                                        className="space-y-4"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        {features?.data.map((feature, index) => {
                                            const [heading, description] = feature.split(": ");
                                            return (
                                                <motion.li
                                                    key={index}
                                                    className="flex items-start"
                                                    initial={{ x: -20, opacity: 0 }}
                                                    whileInView={{ x: 0, opacity: 1 }}
                                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <img width="800" height="600" sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" loading="lazy" src="https://webkorps-app.s3.us-east-1.amazonaws.com/arrow-check-icon.svg" alt="arrow" className="h-5 w-5 mr-2 mt-[4px]" />
                                                    <span className='text-[14px] xl:text-[18px] ipad-pro:text-[16px] md:text-[16px] text-gray-700'>
                                                        <b className='text-black'>{heading}:</b> {description}
                                                    </span>
                                                </motion.li>
                                            );
                                        })}
                                    </motion.ul>
                                </div>
                            </div>

                            <div className="side-sticky self-start sticky top-[4rem]  xl:overflow-visible ipad-pro:overflow-visible overflow-visible">
                                <div className="relative flex justify-center items-center w-full">
                                    <div className="relative w-full">
                                        <img
                                            width="800"
                                            height="600"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                            loading="lazy"
                                            src={ChooseImage?.src || ChooseImage}
                                            alt="Main"
                                            className="w-full h-auto rounded-[20px] mb-[30px] object-contain"
                                        />

                                        {/* {features?.stats.map((stat, index) => (
                                            <div
                                                key={index}
                                                className={`absolute ${stat?.position} bg-${stat?.color} text-white text-center rounded-full flex flex-col justify-center items-center shadow-lg w-[5rem] h-[5rem] md:w-[6rem] md:h-[6rem] xl:w-[7rem] xl:h-[7rem] ipad-pro:w-[6.5rem] ipad-pro:h-[6.5rem] `}
                                            >
                                                <span className="xl:text-xl ipad-pro:text-xl text-base font-bold">
                                                    {stat?.value}
                                                </span>
                                                <span className="xl:text-sm ipad-pro:text-sm text-xs">
                                                    {stat.label}
                                                </span>
                                            </div>
                                        ))} */}
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            }
            {
                offeringData &&
                <OfferingsSection tabsData={offeringData?.tabsData} description={offeringData?.description} heading={offeringData.heading} bgColor='bg-custom-blue-gradient' CardBgColor='bg-white' services={false} />
            }
            {featureData && <Features heading={featureData.heading} features={featureData.features} description={featureData.description} bgColor='bg-white' />}
            {assetType &&
                <div className=" py-[4rem]  font-inter  relative  overflow-hidden bg-[#EBEDEE]">
                    <div className="Clients  w-auto items-center justify-center text-center lg:text-left  mx-[7%] md:mx-[7%] xl:mx-[50px] ipad-pro:mx-[50px] justify-center  shadow-custom-lg rounded-[20px] bg-white ">
                        <div className="w-full text-center px-[3%] xl:px-[30px] ipad-pro:px-[30px] pt-[3rem]" data-aos="fade-up">
                            <h2 className="font-inter font-bold text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem]  text-[#061C3D]"
                                dangerouslySetInnerHTML={{ __html: assetType?.title }}
                            >
                            </h2>
                            <p className="font-inter font-normal text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] pt-[30px] text-gray-700">
                                {assetType?.description}
                            </p>
                        </div>

                        <div className="relative px-[3%] xl:px-[30px] ipad-pro:px-[30px] text-center flex pb-[3rem] pt-[4rem]">
                            <div className=" px-0 w-full text-center">
                                <div className="flex flex-wrap justify-center  2xl:gap-[1.5rem] xl:gap-[0.8rem] ipad-pro:[0.8rem] w-full" data-aos="fade-up">
                                    {assetType?.data.map((assets, index) => (
                                        <ServiceCard key={index} icon={assets.icon} title={assets.title} description={assets.content} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {ProcessData && <ProgressSection steps={ProcessData?.steps} steps1={ProcessData?.steps1} title={ProcessData?.title} subtitle={ProcessData?.subtitle} description={ProcessData?.description} centerHeading={true} bgColor='bg-custom-blue-gradient' processImage={ProcessData?.Processimage} />}

            {industries && industries.data && (
                <StakingCard
                    heading={industries.title}
                    description={industries.description}
                    features={industries.data}
                    image={industries.image}
                />

            )}
            {techStack &&
                <Technologies
                    heading={techStack?.heading}
                    description={techStack?.description}
                    techStack={techStack?.data}
                    centerHeading={true}
                />}
            {ctaData && <CTASection link={ctaData?.link} title={ctaData?.title} description={ctaData?.description} buttonText={ctaData?.buttonText} bgColor='bg-[#EBEDEE]' ctaImage={websiteCTAImage} />}
            {faqData && <FAQSection title={faqData?.title} faqData={faqData?.data} />}
        </div>
    );
};

export default IndustriesPage;
