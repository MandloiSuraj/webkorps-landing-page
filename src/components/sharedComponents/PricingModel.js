import React from 'react';

function PricingModel({ heading, data, description, bgColor }) {
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

                <div className="grid grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  ipad-pro:grid-cols-3  justify-center gap-6 mt-[4rem]">
                    {data.map((item, index) => (
                        <div key={index} className=" shadow-custom  rounded-[20px]  text-left">
                            <div className={`p-5 ${item?.cardBgColor} rounded-tl-[20px] rounded-tr-[20px]`}>
                                <h3 className="text-xl font-semibold text-white  mb-2" dangerouslySetInnerHTML={{__html:item.title}}></h3>
                            </div>
                            <p className="text-gray-700 p-5">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PricingModel;
