import React from "react";

const ProgressSection = ({ title, description, steps1, centerHeading, bgColor, processImage, ProcessAlt }) => {
    return (
        <div className={`py-[4rem] ${bgColor}  font-inter `}>
            <div className="flex flex-col overflow-hidden md:flex-col ipad-pro:flex-row xl:flex-row items-center px-[3%] xl:px-[30px] ipad-pro:px-[30px] justify-center text-center lg:text-left  mx-[7%] md:mx-[7%] xl:mx-[50px] ipad-pro:mx-[50px] justify-center p-12 shadow-custom-lg rounded-[20px] bg-white ">
                <div className="relative">
                    {!centerHeading ?
                        <div
                            className={` w-full xl:flex  hidden  ipad-pro:hidden items-center flex-row  md:items-start  md:gap-8 lg:gap-8`}
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
                                <p className="text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem]  text-gray-700 leading-relaxed">
                                    {description}
                                </p>
                            </div>
                        </div>
                        :
                        <div className="w-full text-center " data-aos="fade-left">
                            <h2 className=" font-bold text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem]  text-[#061C3D]"
                                dangerouslySetInnerHTML={{ __html: title }}
                            >
                            </h2>
                            <p className=" font-normal text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] pt-[30px]  text-gray-700">
                                {description}
                            </p>
                        </div>}
                    {!centerHeading && <div className="w-full text-center xl:hidden  block  ipad-pro:block " data-aos="fade-left">
                        <h2 className=" font-bold text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem]  text-[#061C3D]"
                            dangerouslySetInnerHTML={{ __html: title }}
                        >
                        </h2>
                        <p className=" font-normal text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] pt-[30px]  text-gray-700">
                            {description}
                        </p>
                    </div>}
                    <div className="relative w-[85%] mx-auto flex justify-center items-center mt-[3rem] xl:block hidden" data-aos="fade-up">

                        <img
                            src={processImage?.src || processImage || "https://webkorps-app.s3.us-east-1.amazonaws.com/process.svg"}
                            alt={processImage ? ProcessAlt : "process"}
                            className="w-full"
                            width="800"
                            height="600"
                            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                            loading="lazy"
                        />
                        {steps1.map((step, index) => (
                            <div
                                key={index}
                                className="absolute text-center h-[20%]"
                                style={{ top: step.top, left: step.left, bottom: step.bottom, transform: "translate(-50%, -50%)" }}
                            >
                                <div className="flex space-x-2 justify-center text-center " >
                                    <h3 className="text-sm md:text-xs lg:text-[1.13rem] leading-[1.1rem] lg:leading-[1.17rem] font-semibold text-[#1887C9] whitespace-pre-line text-center">
                                        <span>{step.title}. </span>
                                        <span dangerouslySetInnerHTML={{ __html: step.heading }} />
                                    </h3>
                                </div>
                                <p className="text-xs md:text-[10px] lg:text-[0.85rem]  text-gray-700 w-[60px] sm:w-[80px] md:w-[100px] lg:w-[250px] mt-3" >
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="relative w-full mx-auto mt-[3rem] overflow-x-auto flex flex-col items-center space-y-6 xl:hidden block scrollbar max-h-[400px] scrollbar-custom">

                        {steps1.map((step, index) => (
                            <div key={index} className=" p-4 flex flex-col items-center text-center bg-white shadow-custom rounded-lg border-[0.8px] border-neutral-500 border-opacity-40">
                                <img src={step.icon?.src || step.icon} alt={step.alt} className="w-16 h-16"
                                    width="800"
                                    height="600"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                    loading="lazy" />
                                <h3 className="text-sm md:text-xs lg:text-[1.13rem] leading-[1.1rem] lg:leading-[1.17rem] font-semibold text-[#1887C9] whitespace-pre-line text-center">
                                    <span>{step.title}. </span>
                                    <span dangerouslySetInnerHTML={{ __html: step.heading }} />
                                </h3>

                                <p className="text-sm  text-gray-700 mt-2">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProgressSection;
