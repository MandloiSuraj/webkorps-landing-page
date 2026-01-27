import React from "react";
import { motion } from 'framer-motion';
const ProfileCard = ({ member }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-4 xl:w-48 ipad-pro:w-[15rem] w-48 text-center">
            <img
             width="800"
                  height="600"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  loading="lazy"
                src={member.image}
                alt={member.name}
                className="rounded-lg w-full xl:h-40 ipad-pro:h-[15rem] h-40 "
            />
            <p className="mt-2 text-gray-700 font-semibold">{member.name}</p>
        </div>
    );
};
const DevTeamSection = ({ title, description, teamMembers, team }) => {
    return (
        <div className="rounded-[10px] py-[4rem] relative font-inter px-[7%] xl:px-[50px] overflow-hidden ipad-pro:px-[50px]">
            <div className="relative">
                <div className="w-full text-center " data-aos="fade-left">
                    <h2 className=" font-bold text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2rem]  text-[#061C3D]"
                        dangerouslySetInnerHTML={{ __html: title }}
                    >
                    </h2>
                    <p className=" font-normal text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] pt-[30px] text-[#061C3D]">
                        {description}
                    </p>
                </div>
            </div>
            <div className="flex flex-col xl:flex-row ipad-pro:flex-col lg:flex-row items-center mt-[30px] gap-[20px]">
                <div className="xl:w-full ipad-pro:w-full mt-10 ipad-pro:mt-10 xl:mt-0   w-full grid grid-cols-1 md:grid-cols-4 gap-6">
                    {teamMembers.map((member) => (
                        <div key={member.title} className="bg-white p-4 rounded-2xl shadow-lg ">
                            <h3 className="text-xl font-bold mb-2">{member.title}</h3>
                            <div className="flex items-center mb-1">
                                <img src="https://webkorps-app.s3.us-east-1.amazonaws.com/arrow-check-icon.svg" alt="arrow" className="w-5 h-5 mr-2" />
                                <span>{member.experience}</span>
                            </div>
                            <div className="flex items-center mb-1">
                                <img src="https://webkorps-app.s3.us-east-1.amazonaws.com/arrow-check-icon.svg" alt="arrow" className="w-5 h-5 mr-2" />
                                <span>{member.projects}</span>
                            </div>
                            <div className="flex items-center mb-1">
                                <img src="https://webkorps-app.s3.us-east-1.amazonaws.com/arrow-check-icon.svg" alt="arrow" className="w-5 h-5 mr-2" />
                                <span>{member.hours}</span>
                            </div>
                            <div className="flex items-center mb-2">
                                <img src="https://webkorps-app.s3.us-east-1.amazonaws.com/arrow-check-icon.svg" alt="arrow" className="w-5 h-5 mr-2" />
                                <span>{member.suitability}</span>
                            </div>
                            <button
                                onClick={() => alert("coming soon")}
                                title="Request CV"
                                className="mt-4 w-full py-2 bg-gray-300 text-[#1887C9] text-center rounded-lg hover:bg-[#1887C9] hover:text-white transition"
                            >
                                Request CV
                            </button>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default DevTeamSection;
