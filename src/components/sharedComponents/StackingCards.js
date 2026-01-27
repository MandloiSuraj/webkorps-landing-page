import React from "react";
const StakingCard = ({ heading, description, features, image }) => {

    return (
        <div className="py-12   bg-white font-inter  relative  xl:overflow-visible ipad-pro:overflow-visible overflow-hidden">
            <div className="bg-white mx-[7%] md:mx-[7%] xl:mx-[50px] ipad-pro:mx-[50px] py-[2rem] px-[3%] xl:px-[30px] ipad-pro:px-[30px]  justify-center  shadow-custom-lg rounded-[20px] z-10 font-inter xl:overflow-visible ipad-pro:overflow-visible overflow-hidden">
                <div className="w-full text-center" data-aos="fade-right">
                    <h2 className=" font-bold text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem]  text-[#061C3D]"
                        dangerouslySetInnerHTML={{ __html: heading }}
                    >
                    </h2>
                    <p className=" font-normal text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] pt-[30px] text-[#061C3D]">
                        {description}
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row  pt-16 ">
                    <div className="lg:w-5/12 flex flex-col items-start side-sticky self-start sticky top-[90px]   xl:overflow-visible ipad-pro:overflow-visible overflow-hidden">
                        <img
                            width="800"
                            height="600"
                            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                            loading="lazy"
                            src={image?.src || image}
                            alt="Healthcare Transformation"
                            className="w-full ipad-pro:w-[85%] xl:w-[85%]  rounded-lg shadow-custom-lg"
                        />
                    </div>
                    <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 lg:mt-0">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-2xl shadow-custom flex flex-col justify-center ${feature.bg} 
                     ${index % 2 === 0 ? 'min-h-[250px]' : 'min-h-[300px]'} 
                     ${index % 2 === 0 ? 'mt-0 mb-8' : 'mt-8 mb-0'}`}
                            >
                                <h3 className="xl:text-2xl ipad-pro:text-[1.2rem] text-[1rem] font-bold mb-4">{feature.title}</h3>
                                <p className="text-base">{feature.description}</p>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StakingCard;