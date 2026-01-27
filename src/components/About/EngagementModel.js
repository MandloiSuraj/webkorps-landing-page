import React, { useState } from "react";
import Icons1 from '../../assets/Icons/fixed-cost.svg'
import Icons2 from '../../assets/Icons/on-hire.svg'
import Icons3 from '../../assets/Icons/hourly.svg'
import Icons4 from '../../assets/Icons/bucket-hours.svg'
import Icons5 from '../../assets/Icons/discovery-phase.svg'
const engagementModels = [
    {
        title: "Fixed Cost",
        icon: Icons1,
        description: "Best for well-defined projects with clear requirements, ensuring on-time delivery within a predetermined budget, offering cost predictability, and minimizing financial risk.",
    },
    {
        title: "On Hire",
        icon: Icons2,
        description: "Get dedicated professionals tailored to your project needs, ensuring flexibility, scalability, and complete control over resources for seamless development and execution.",
    },
    {
        title: "Hourly",
        icon: Icons3,
        description: "Ideal for dynamic projects, providing flexibility to scale resources as needed while paying only for actual development hours, optimizing cost and efficiency.",
    },
    {
        title: "Bucket Hours",
        icon: Icons4,
        description: "Purchase a set number of development hours in advance, offering a cost-effective and flexible solution for ongoing maintenance, support, and minor enhancements.",
    },
    {
        title: "Discovery Phase",
        icon: Icons5,
        description: "A strategic approach to project planning, ensuring in-depth analysis, requirement gathering, and roadmap creation to mitigate risks and optimize project execution.",
    },
];

const EngagementModels = () => {
    return (
        <div className="w-full px-[5%] xl:px-[50px] ipad-pro:px-[40px] py-[4rem] bg-white">
            <div className="bg-white  border border-gray-300 rounded-[40px] shadow-custom-lg px-[3%] xl:px-[30px] ipad-pro:px-[30px] p-12 flex flex-col items-center">
                <h2 className="text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] text-black font-inter font-bold text-center">
                    Flexible <span className="font-bold text-[#005baa]">Engagement Models</span> Tailored to Your Needs
                </h2>

                <div className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                        {engagementModels.slice(0, engagementModels.length - (engagementModels.length % 3)).map((model, index) => (
                            <div key={index} className={`flex flex-col items-start group relative text-left justify-start pt-[30px] px-[1rem] pb-2 border-[0.8px] border-neutral-500 border-opacity-40 bg-white transition-all duration-500 ease-in-out hover:shadow-custom-lg shadow-lg rounded-[20px_20px] w-full box-border h-auto`}>
                                <div className='flex  items-center justify-center text-left gap-4'>
                                    <img src={model.icon} alt={model.title} className="w-12 h-12" width="800"
                                        height="600"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                        loading="lazy" /> {/* Adjust the width and height as needed */}
                                    <h3 className="text-xl font-bold text-[#005baa] text-center">
                                        {model.title}
                                    </h3>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed mt-2 text-left">{model.description}</p>
                            </div>
                        ))}
                    </div>

                    {engagementModels.length % 3 !== 0 && (
                        <div className="flex flex-wrap justify-center gap-6 mt-6">
                            {engagementModels.slice(- (engagementModels.length % 3)).map((model, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col items-start group relative text-left justify-start pt-[30px] px-[1rem] pb-2 border-[0.8px] border-neutral-500 border-opacity-40 bg-white transition-all duration-500 ease-in-out hover:shadow-custom-lg shadow-lg rounded-[20px_20px] w-full box-border h-auto w-full sm:w-[48%] md:w-[30%]`}
                                >
                                    <div className='flex  items-center justify-center text-left gap-4'>
                                        <img src={model.icon} alt={model.title} className="w-12 h-12"
                                            width="800"
                                            height="600"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                            loading="lazy" /> {/* Adjust the width and height as needed */}
                                        <h3 className="text-xl font-bold  text-[#005baa] text-center">
                                            {model.title}
                                        </h3>
                                    </div>

                                    <p className="text-lg text-gray-700 leading-relaxed mt-2 text-left">{model.description}</p>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default EngagementModels;
