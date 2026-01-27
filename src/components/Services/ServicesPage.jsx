import React from 'react';
import { motion } from 'framer-motion';
import { BenefitCard, ServiceCard } from '../sharedComponents/ServicesSection';
import ProgressSection from '../sharedComponents/ProgressSection';
import Technologies from '../sharedComponents/technologies';
import IndustrySection from '../sharedComponents/IndustrySection';
import FAQSection from '../sharedComponents/FAQSection';
import CTASection from '../sharedComponents/CTASection';
import HeroSectionUI from '../sharedComponents/HeroSectionUI';
import ModalCards from '../sharedComponents/ModalCards';
import { Features } from '../sharedComponents/IndustryChallenges';
import PricingModel from '../sharedComponents/PricingModel';
import websiteCTAImage from "../../assets/images/website-cta-5.jpg";
import ChooseImage from "../../assets/images/why-choose-webkorps.jpg";
import websiteCTAImage2 from "../../assets/images/website-cta-1.jpg";

const ServiceSection = ({
    title,
    subtitle,
    description,
    image,
    imageAlt,
    buttonText,
    link,
    overviewData,
    benefits,
    services,
    contactCTA,
    agileBenefit,
    features,
    ProcessData,
    modalData,
    ITServices,
    modalItData,
    priceModalData,
    techStack,
    industries,
    faqData,
    ctaData
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
                height={contactCTA && 'h-[65rem]'}
            />
            {overviewData &&
                <div className="py-[4rem]  bg-white font-inter ">
                    <div className="flex flex-col overflow-hidden md:flex-col ipad-pro:flex-row xl:flex-row items-center xl:items-stretch px-[3%] xl:px-[30px] ipad-pro:px-[30px] justify-center text-center lg:text-left  mx-[7%] md:mx-[7%] xl:mx-[50px] ipad-pro:mx-[50px] justify-center p-12 shadow-custom-lg rounded-[20px] bg-white gap-[80px]">

                        <div className="content flex flex-col">
                            <h2
                                className="font-inter text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem] font-bold text-center xl:text-left ipad-pro:text-left text-[#072125] w-full"
                                data-aos="fade-right"
                                dangerouslySetInnerHTML={{ __html: overviewData?.heading }}
                            >
                            </h2>
                            {overviewData?.data.map((des, index) => (
                                <p
                                    className=" text-gray-700 mt-[2rem] text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] font-inter"
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
                                src={overviewData?.image}
                                alt="leading-web-development-company"
                                className="rounded-lg shadow-md w-full lg:w-[385px] h-full max-w-md"
                                data-aos="fade-left"
                            />
                        </div>
                    </div>
                </div>}

            {benefits &&
                <div className=" py-[4rem] bg-[#061C3D] font-inter">
                    <div className="flex flex-col overflow-hidden md:flex-col ipad-pro:flex-row xl:flex-row items-center px-[3%] xl:px-[30px] ipad-pro:px-[30px] justify-center text-center lg:text-left  mx-[7%] md:mx-[7%] xl:mx-[50px] ipad-pro:mx-[50px] justify-center p-12 shadow-[0px_0px_3px_#707070] rounded-[20px] border-black border-[0.0001px]">
                        <div className="w-full">
                            <div className="flex flex-wrap gap-[1.4rem] mb-6 w-[100%] ipda-pro:flex-row " data-aos="fade-up">
                                <div className="flex flex-col items-center md:items-start text-[#FFFFFF]  rounded-lg xl:w-[48.9%] ipad-pro:w-[100%%] w-[100%]" data-aos="flip-left">
                                    <h2 className="text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem] font-bold text-[#FFFFFF]  mb-4" dangerouslySetInnerHTML={{ __html: benefits?.title }}>

                                    </h2>
                                    <p className=" text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] text-[#FFFFFF] pt-[1.5rem]">
                                        {benefits?.description}
                                    </p>
                                </div>
                                {benefits?.data.slice(0, 2).map((benefit, index) => (
                                    <BenefitCard key={index} {...benefit} width={typeof window !== 'undefined' && window.innerWidth >= 1024 ? '23.5%' : '48%'}
                                    />
                                ))}
                            </div>
                            <div className="grid grid-cols-1 ipad-pro:grid-cols-2 xl:grid-cols-4 gap-[1.5rem]" data-aos="fade-up">
                                {benefits?.data.slice(2).map((benefit, index) => (
                                    <BenefitCard key={index} {...benefit} width={'100%'} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            }
            {services &&
                <div className=" py-[4rem]  bg-white font-inter  relative  overflow-hidden">
                    <div className="Clients  w-auto items-center justify-center text-center lg:text-left  mx-[7%] md:mx-[7%] xl:mx-[50px] ipad-pro:mx-[50px] justify-center  shadow-custom-lg rounded-[20px] bg-white ">
                        <div className="w-full text-center px-[3%] xl:px-[30px] ipad-pro:px-[30px] pt-[3rem]" data-aos="fade-up">
                            <h2 className="font-inter font-bold text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem]  text-[#061C3D]"
                                dangerouslySetInnerHTML={{ __html: services?.heading }}
                            >
                            </h2>
                            <p className="font-inter font-normal text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] pt-[30px]  text-gray-700">
                                {services?.subheading}
                            </p>
                        </div>

                        <div className="relative px-[3%] xl:px-[30px] ipad-pro:px-[30px] text-center flex pb-[3rem] pt-[4rem]">
                            <div className=" px-0 w-full text-center">
                                <div className="flex flex-wrap justify-center  2xl:gap-[1.5rem] xl:gap-[0.8rem] ipad-pro:[0.8rem] w-full" data-aos="fade-up">
                                    {services?.data.map((service, index) => (
                                        <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {contactCTA && <CTASection link={contactCTA?.link} title={contactCTA?.title} description={contactCTA?.description} buttonText={contactCTA?.buttonText} bgColor='bg-[#EBEDEE]' ctaImage={websiteCTAImage2} />}

            {features &&
                <div className=" py-[4rem]   bg-custom-blue-gradient font-inter  relative  xl:overflow-visible ipad-pro:overflow-visible overflow-hidden">
                    <div className="bg-white mx-[7%] md:mx-[7%] xl:mx-[50px] ipad-pro:mx-[50px] justify-center  shadow-custom-lg rounded-[20px] z-10 font-inter xl:overflow-visible ipad-pro:overflow-visible overflow-hidden">
                        <div className="w-full text-center px-[3%] xl:px-[30px] ipad-pro:px-[30px]" data-aos="fade-right">
                            <h2 className=" font-bold text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem] pt-[3rem] text-[#061C3D]"
                                dangerouslySetInnerHTML={{ __html: features?.title }}
                            >
                            </h2>
                            <p className=" font-normal text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] pt-[30px]  text-gray-700">
                                {features?.description}
                            </p>
                        </div>
                        <div className="flex xl:flex-row md:flex-row ipad-pro:flex-col flex-col items-start gap-x-[45px] px-[3%] xl:px-[30px] ipad-pro:px-[30px]  py-[3rem]">
                            <div className="flex flex-col 2xl:w-[60%] xl:w-[50%] md:w-[50%] ipad-pro:w-[100%] w-[100%]">
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
                                                    <span className='text-[14px] xl:text-[18px] ipad-pro:text-[16px] md:text-[16px]  text-gray-700'>
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
                                            src={ChooseImage}
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
            {ProcessData && <ProgressSection steps={ProcessData?.steps} steps1={ProcessData?.steps1} title={ProcessData?.title} subtitle={ProcessData?.subtitle} description={ProcessData?.description} bgColor='bg-white' processImage={ProcessData?.Processimage} ProcessAlt={ProcessData?.ProcessAlt} />}
            {modalData && <ModalCards heading={modalData.heading} features={modalData?.data} description={modalData?.description} bgColor={'bg-[#EBEDEE]'} />}
            {ITServices && <Features heading={ITServices.heading} features={ITServices.data} description={ITServices.description} bgColor='bg-[#EBEDEE]' />}
            {techStack &&
                <Technologies
                    heading={techStack?.heading}
                    description={techStack?.description}
                    techStack={techStack?.data}
                />}
            {modalItData && <ModalCards heading={modalItData.heading} features={modalItData?.data} description={modalItData?.description} bgColor={'bg-[#EBEDEE]'} />}
            {priceModalData && <PricingModel heading={priceModalData?.heading} description={priceModalData?.description} data={priceModalData?.data} bgColor='bg-custom-blue-gradient' />}
            {industries && <IndustrySection title={industries?.title} description={industries.description} industries={industries.data} bgColor='bg-white' />}
            {ctaData && <CTASection link={ctaData?.link} title={ctaData?.title} description={ctaData?.description} buttonText={ctaData?.buttonText} bgColor='bg-custom-blue-gradient' ctaImage={websiteCTAImage} textColor={true} />}
            {faqData && <FAQSection title={faqData?.title} faqData={faqData?.data} />}
        </div>
    );
};

export default ServiceSection;
