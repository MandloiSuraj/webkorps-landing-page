import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ServiceCard } from '../sharedComponents/ServicesSection';
import Technologies from '../sharedComponents/technologies';
import IndustrySection from '../sharedComponents/IndustrySection';
import CTASection from '../sharedComponents/CTASection';
import FAQSection from '../sharedComponents/FAQSection';
import DevTeamSection from '../sharedComponents/DevTeamSection';
import { isValidTo } from '../../Utility/validTo';


function Card({ title, description }) {
    return (
        <div
            className="flex flex-col items-start group relative text-left justify-center px-[2rem] border-[0.8px] border-neutral-500 border-opacity-40 bg-white transition-all duration-500 ease-in-out hover:shadow-custom-lg hover:bg-[#1887C9] hover:text-white rounded-[20px_20px] w-full box-border xl:h-[225px] ipad-pro:h-[250px] h-[250px] "
        >
            <div className='flex flex-col'>
                <h3
                    className="font-inter text-[1rem] xl:text-[1.31rem] ipad-pro:text-[1.35rem] md:text-[1.5rem] leading-[1.9rem] font-semibold mb-2 text-[#061C3D] group-hover:text-white w-[105%]"
                    dangerouslySetInnerHTML={{ __html: title }}
                ></h3>
            </div>

            <p className="font-inter text-[13px] xl:text-[16px] ipad-pro:text-[16px] md:text-[14px] leading-[22.6px] mb-4 text-[#42526B] group-hover:text-white">
                {description}
            </p>
        </div>

    );
}

const DevloperPage = ({
    title,
    subtitle,
    shortContent,
    description,
    image,
    buttonText,
    link,
    expertise,
    services,
    features,
    devTeam,
    ProcessData,
    techStack,
    industries,
    benefits,
    faqData,
    ctaData,
}) => {

    const stepVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: (index) => ({
            opacity: 1,
            x: 0,
            transition: { delay: index * 0.1 }
        })
    };
    return (
        <div className="w-full text-center xl:text-left ipad-pro:text-left md:text-center  pt-[80px]">
            <div className="overflow-hidden font-inter">
                <div className="flex overflow-hidden items-center relative w-full h-[45rem] xl:h-[38rem] ipad-pro:h-[30rem] md:h-[30rem]  ">
                    <img
                        width="800"
                        height="600"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        loading="lazy"
                        src={image}
                        alt={title}
                        className="w-full h-full object-fill opacity-70"
                    />
                    <div className="absolute inset-0 flex  justify-center items-center xl:flex-row ipad-pro:flex-row flex-col  bg-gradient-to-t from-[#001833] to-[#001833] opacity-[0.85]  px-[5%] xl:px-[50px] ipad-pro:px-[50px] " >
                        <div className='flex xl:items-start ipad-pro:items-start items-center  justify-center pt-[40px] pb-[40px] flex-col w-[100%]'>
                            <h1 className="text-[1.5625rem] xl:text-[3.3rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] xl:leading-[3.4rem] ipad-pro:leading-[3.4rem] leading-[2.4rem] text-white font-bold " data-aos="fade-right" dangerouslySetInnerHTML={{ __html: title }}></h1>
                            <h3 className="text-[1rem] xl:text-[1.3rem] ipad-pro:text-[1.35rem] md:text-[1.5rem]  text-white font-semibold  mt-[1.2rem] w-[95%]" data-aos="fade-right">{subtitle}</h3>
                            <p className="xl:text-left ipad-pro:text-left text-center text-white mt-[2.5rem]  text-[0.9375rem] xl:text-[1.1rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] font-inter w-[90%] " data-aos="fade-right">{description}</p>
                            <motion.ul
                                className="space-y-1 text-white mt-[1.5rem]"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                {description.map((feature, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-start"
                                        initial={{ x: -20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <img
                                            width="800"
                                            height="600"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                            loading="lazy"
                                            src="https://webkorps-app.s3.us-east-1.amazonaws.com/arrow-check-icon.svg"
                                            alt="arrow"
                                            className="h-5 w-5 mr-2 mt-[4px]"
                                        />
                                        <span className=' text-[0.9375rem] xl:text-[1.1rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] font-inter'>
                                            {feature}
                                        </span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                            {buttonText && (
                                <Link to={isValidTo(link) ? link : '/'}>
                                    <motion.p
                                        whileHover={{
                                            backgroundColor: '#FFFFFF',
                                            color: '#1887C9',
                                            borderColor: '#1887C9',
                                            transition: { duration: 0.1 },
                                        }}
                                        drag
                                        className="px-4 py-2 rounded-[30px] xl:min-w-[400px] ipad-pro:min-w-[400px] min-w-[350px]  xl:h-[60px] ipad-pro:h-[60px] h-[50px]  mt-[2rem]  text-center xl:text-[20px] ipad-pro:text-[20px] text-[16px]  xl:leading-[40px] ipad-pro:leading-[40px] leading-[25px] font-bold border-2 border-[#1887C9] bg-[#1887C9] text-white  transition-all duration-100"
                                        data-aos="zoom-in"
                                    >
                                        {buttonText}
                                    </motion.p>
                                </Link>
                            )}
                        </div>
                        <motion.div
                            className="w-full md:w-[45%] flex justify-center mt-6 md:mt-0"
                            data-aos="zoom-in"
                        >
                            <img
                                width="800"
                                height="600"
                                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                loading="lazy"
                                src="https://webkorps-app.s3.us-east-1.amazonaws.com/ruby-graphics-image.gif"
                                alt="Blockchain Technology Graphics"
                                className="w-[70%] md:w-[100%]"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
            {expertise &&
                <section className="py-16 bg-[#EBEDEE] px-[5%] xl:px-[50px] ipad-pro:px-[5%] w-full font-inter overflow-hidden">
                    <div className="w-full text-center " >
                        <h2 className=" font-bold text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem] text-[#061C3D]"
                            dangerouslySetInnerHTML={{ __html: expertise.heading }}
                            data-aos="fade-left"
                        >
                        </h2>
                        <p className=" font-normal text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] pt-[30px] text-[#061C3D]" data-aos="fade-left">
                            {expertise.description}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center mt-[4rem]" data-aos="fade-right">
                        {expertise.features.map((feature, index) => (
                            <div
                                key={index}
                                className={`w-full sm:w-1/2 md:w-[30%] ${expertise.features.length % 3 === 1 && index === expertise.features.length - 1
                                    ? 'md:w-1/3 flex justify-center'
                                    : ''
                                    }`}
                            >
                                <Card title={feature.title} description={feature.description} />
                            </div>
                        ))}
                    </div>


                </section>}
            {features &&
                <div className="bg-gradient-to-b from-[#E8F3FA] to-[#EEEFFB] z-10 font-inter xl:overflow-visible ipad-pro:overflow-visible overflow-hidden">
                    <div className="w-full text-center px-[5%] xl:px-[50px] ipad-pro:px-[5%]" data-aos="fade-right">
                        <h2 className=" font-bold text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem] pt-[4rem] text-[#061C3D]"
                            dangerouslySetInnerHTML={{ __html: features?.title }}
                        >
                        </h2>
                        <p className=" font-normal text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] pt-[30px] text-[#061C3D]">
                            {features?.description}
                        </p>
                    </div>
                    <div className="flex xl:flex-row md:flex-row ipad-pro:flex-col flex-col items-start gap-x-[90px] px-[5%] xl:px-[50px] ipad-pro:px-[5%]  py-[4rem]">
                        <div className="flex flex-col xl:w-[50%] md:w-[50%] ipad-pro:w-[100%] w-[100%]">
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
                                                <span className='text-[14px] xl:text-[18px] ipad-pro:text-[16px] md:text-[16px]'>
                                                    <b>{heading}:</b> {description}
                                                </span>
                                            </motion.li>
                                        );
                                    })}
                                </motion.ul>
                            </div>
                        </div>

                        <div className="side-sticky self-start sticky top-[4rem] p-6 xl:overflow-visible ipad-pro:overflow-visible overflow-hidden">
                            <div className="relative flex justify-center items-center">
                                <div className="flex flex-row space-x-4 relative">
                                    {features?.images.map((image, index) => (
                                        <img
                                            width="800"
                                            height="600"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                            loading="lazy"
                                            key={index}
                                            src={image.src}
                                            alt={image.alt}
                                            style={{ borderRadius: "20px" }}
                                            className="xl:w-[300px] md:w-[300px] ipad-pro:w-[300px] w-[145px] mb-[30px]"
                                        />
                                    ))}
                                    {features?.stats.map((stat, index) => (
                                        <div
                                            key={index}
                                            className={`absolute ${stat?.position} bg-${stat?.color} text-white text-center rounded-full xl:w-30 xl:h-30 md:w-30 md:h-30 ipad-pro:w-35 ipad-pro:w-30 w-[5rem] h-[5rem] flex flex-col justify-center items-center shadow-lg`}
                                        >
                                            <span className="xl:text-xl ipad-pro:text-xl text-[12px] font-bold">{stat?.value}</span>
                                            <span className="xl:text-sm ipad-pro:text-sm text-[8px]  ">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {techStack &&
                <Technologies
                    heading={techStack?.heading}
                    description={techStack?.description}
                    techStack={techStack?.data}
                    centerHeading={true}
                />}
            {services &&
                <div className="relative font-inter overflow-hidden">
                    <div className="Clients bg-[#F6F8F7] w-auto">
                        <div className="w-full text-center px-[5%] xl:px-[50px] ipad-pro:px-[5%] pt-[4rem]" data-aos="fade-right">
                            <h2 className="font-inter font-bold text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem]  text-[#061C3D]"
                                dangerouslySetInnerHTML={{ __html: services?.heading }}
                            >
                            </h2>
                            <p className="font-inter font-normal text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] pt-[30px] text-[#061C3D]">
                                {services?.subheading}
                            </p>
                        </div>

                        <div className="relative px-[5%] xl:px-[50px] ipad-pro:px-[5%] text-center flex pb-[4rem] pt-[4rem]">
                            <div className=" px-0 w-full text-center">
                                <div className="flex flex-wrap justify-center gap-[1.5rem] w-full" data-aos="fade-right">
                                    {services?.data.map((service, index) => (
                                        <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {devTeam && <DevTeamSection title={devTeam?.title} description={devTeam?.description} teamMembers={devTeam?.teamMembers} team={devTeam?.team} />}
            {benefits &&
                <div className="px-[5%] xl:px-[50px] ipad-pro:px-[50px] py-[4rem] font-inter bg-gray-100">
                    <div className="w-full text-center px-[5%] xl:px-[50px] ipad-pro:px-[5%] pb-[4rem]" data-aos="fade-left">
                        <h2 className="font-inter font-bold text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem]  text-[#061C3D]"
                            dangerouslySetInnerHTML={{ __html: benefits?.title }}
                        >
                        </h2>
                        <p className="font-inter font-normal text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] pt-[30px] text-[#061C3D]">
                            {benefits?.description}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" data-aos="fade-right">
                        {benefits?.data.map((feature, index) => (
                            <div key={index} className="">
                                <div className="h-1 w-full bg-gradient-to-r from-[#E8F3FA] to-[#1887C9] mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            }
            {ProcessData &&
                <div className="rounded-[10px] py-[4rem] relative font-inter px-[7%] xl:px-[50px] overflow-hidden ipad-pro:px-[50px] bg-[#E8F3FA]">
                    <div className="relative">
                        <div className="w-full text-center ">
                            <h2 className=" font-bold text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem]  text-[#061C3D]"
                                dangerouslySetInnerHTML={{ __html: ProcessData?.title }}
                                data-aos="fade-left"
                            >
                            </h2>
                            <p className=" font-normal text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] pt-[30px] text-[#061C3D]" data-aos="fade-left">
                                {ProcessData?.description}
                            </p>
                        </div>

                        <div className="flex flex-col items-center w-full relative pt-[4rem] font-inter">
                            <div className="flex flex-col md:flex-row justify-center items-center gap-4 xl:gap-0 ipad-pro:gap-0" data-aos="fade-right">
                                {ProcessData?.steps.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center"
                                        custom={index}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={stepVariants}
                                    >
                                        <div className="bg-white shadow-md transition-all duration-500 ease-in-out hover:shadow-custom-lg rounded-lg p-6 text-left xl:w-[280px] xl:h-[235px] ipad-pro:w-[205px] ipad-pro:h-[225px] w-[205px] h-[225px]   flex flex-col justify-between">
                                            <span className="text-3xl text-[#1887C9] font-bold">{step.number}</span>
                                            <h3 className="xl:text-lg  ipad-pro:text-[1rem] text-[1rem] font-semibold mt-2">{step.title}</h3>
                                            <p className="text-gray-600 text-[10px] ipad-pro:text-[12px] xl:text-[14px] mt-2">{step.description}</p>
                                        </div>
                                        {index < ProcessData?.steps.length - 1 && (
                                            <div className="hidden md:block text-[#1887C9] text-[18px] mx-[3px]">{"--->"}</div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            }
            {industries && <IndustrySection title={industries?.title} description={industries.description} industries={industries.data} centerHeading={true} bgColor='bg-[#EBEDEE]' />}
            {ctaData && <CTASection title={ctaData?.title} description={ctaData?.description} buttonText={ctaData?.buttonText} bgColor='bg-custom-blue-gradient'
            />}
            {faqData && <FAQSection title={faqData?.title} faqData={faqData?.data} />}
        </div>
    );
};

export default DevloperPage;
