import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const IndustrySection = ({ title, description, industries, centerHeading, bgColor }) => {
    const [isPaused, setIsPaused] = useState(false);

    const scrollRef = useRef(null);
    const awardsLoop = [...industries, ...industries];
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleScroll = () => {
        if (scrollRef.current && scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
            scrollRef.current.scrollLeft = 0;
        }
    };

    useEffect(() => {
        const scrollContainer = scrollRef.current;

        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);
    useEffect(() => {
        let scrollInterval;

        const startScrolling = () => {
            if (!isPaused && scrollRef.current) {
                scrollInterval = setInterval(() => {
                    scrollRef.current.scrollLeft += 1;
                }, 50);
            }
        };
        startScrolling();
        return () => {
            clearInterval(scrollInterval);
        };
    }, [isPaused]);

    return (
        <div className={`py-[4rem]   overflow-hidden ${bgColor}`}>
            <div className="flex font-inter flex-col items-center overflow-hidden mx-[7%] md:mx-[7%] xl:mx-[50px] ipad-pro:mx-[50px] justify-center p-12  px-[3%] xl:px-[30px] ipad-pro:px-[30px] shadow-custom-lg rounded-[20px] bg-white">

                {!centerHeading ?
                    <div
                        className={` w-full items-center flex-col xl:flex-row ipad-pro:flex-col md:items-start xl:flex  hidden  ipad-pro:hidden  pb-[4rem] md:gap-8 lg:gap-8`}
                    >
                        <h2
                            className={`text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem] font-bold leading-[1.4] text-center md:text-left w-[45%]`}
                            data-aos="fade-right"
                            dangerouslySetInnerHTML={{ __html: title }}
                        ></h2>
                        <div className="w-[2px] bg-[#909090] flex-shrink-0 self-stretch"></div>
                        <div
                            data-aos="fade-left"
                            className={`w-[70%] md:text-left`}
                        >
                            <p className="text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] text-gray-700 leading-relaxed">
                                {description}
                            </p>
                        </div>
                    </div> :
                    <div className="w-full text-center pb-[4rem] " data-aos="fade-left">
                        <h2 className=" font-bold text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem]  text-[#061C3D]"
                            dangerouslySetInnerHTML={{ __html: title }}
                        >
                        </h2>
                        <p className=" font-normal text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] pt-[30px] text-gray-700">
                            {description}
                        </p>
                    </div>}
                {!centerHeading && <div className="w-full text-center pb-[4rem] xl:hidden  block  ipad-pro:block " data-aos="fade-left">
                    <h2 className=" font-bold text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem]  text-[#061C3D]"
                        dangerouslySetInnerHTML={{ __html: title }}
                    >
                    </h2>
                    <p className=" font-normal text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] pt-[30px] text-gray-700">
                        {description}
                    </p>
                </div>}

                {/* Cards Section */}
                <div
                    ref={scrollRef}
                    className="w-full flex gap-[1.5rem]  overflow-x-auto scrollbar-hidden"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >

                    {awardsLoop.map((card) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="relative min-w-[280px] h-[325px] rounded-lg shadow-lg cursor-pointer overflow-hidden"
                            onMouseEnter={() => {
                                setHoveredCard(card.id);
                            }}
                            onMouseLeave={() => {
                                setHoveredCard(null);
                            }}
                        >
                            <img
                                width="800"
                                height="600"
                                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                loading="lazy"
                                src={card.image?.src || card.image}
                                alt={card.alt}
                                className="w-full h-full "
                            />
                            <div className="absolute w-full bottom-0 left-0 text-white bg-black bg-opacity-[0.8] p-4 shadow-[0px_0px_30px_10px_rgba(0,0,0,0.7)]">
                                <p className="text-[1rem] xl:text-[1.5rem] ipad-pro:text-[1.35rem] md:text-[1.5rem] leading-[1.9rem] font-semibold">
                                    {card.title}
                                </p>

                                {hoveredCard === card.id && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-sm break-words whitespace-normal text-[13px] xl:text-[16px] ipad-pro:text-[16px] md:text-[14px] leading-[22.6px] pt-[15px]"
                                    >
                                        {card.descriptions}
                                    </motion.p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IndustrySection;
