import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'


function Card({ icon, title, description, bgColor }) {
    return (
        <div
            className={`flex flex-col items-start group relative text-left justify-start pt-[15px] px-[1rem] pb-[15px] border-[0.8px] border-neutral-500 border-opacity-40 ${bgColor} transition-all duration-500 ease-in-out hover:shadow-custom-lg shadow-lg rounded-[20px_20px] w-full box-border h-auto`}
        >
            <div className="flex flex-col">
                <div>
                    <FontAwesomeIcon icon={icon} className={`text-3xl mb-2 ${bgColor === 'bg-white' ? 'text-[#42526B]' : 'text-white'}`} />
                </div>
                <h3
                    className={`font-inter text-[0.8rem] xl:text-[1.13rem] ipad-pro:text-[0.9rem] md:text-[1rem] leading-[1.2rem] font-semibold mb-2 ${bgColor === 'bg-white' ? 'text-[#1887C9]' : 'text-white'} w-[105%]`}
                    dangerouslySetInnerHTML={{ __html: title }}
                ></h3>
            </div>

            <p className={`font-inter  text-[13px] xl:text-[16px] ipad-pro:text-[16px] md:text-[14px] leading-[22.6px] ${bgColor === 'bg-white' ? 'text-[#42526B]' : 'text-white'}`}>
                {description}
            </p>
        </div>

    );
}

function ModalCards({ heading, features, description, bgColor }) {
    return (
        <div className={`py-[4rem]   ${bgColor} font-inter  relative  overflow-hidden`} >
            <div className="Clients  w-auto items-center justify-center text-center lg:text-left  mx-[7%] md:mx-[7%] xl:mx-[50px] ipad-pro:mx-[50px] justify-center  shadow-custom-lg rounded-[20px] bg-white px-[3%] xl:px-[30px] ipad-pro:px-[30px] py-[3rem]">
                <div className="w-full text-center " data-aos="fade-left">
                    <h2 className=" font-bold text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem] text-[#061C3D]"
                        dangerouslySetInnerHTML={{ __html: heading }}
                    >
                    </h2>
                    <p className=" font-normal text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem]  leading-[1.5875rem] pt-[30px] text-[#061C3D]">
                        {description}
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  ipad-pro:grid-cols-3 gap-4 justify-center mt-[4rem]">
                    {features.map((feature, index) => (
                        <Card key={index} icon={feature.icon} title={feature.title} description={feature.description} bgColor='bg-white' />

                    ))}
                </div>

            </div>
        </div>
    )
}

export default ModalCards