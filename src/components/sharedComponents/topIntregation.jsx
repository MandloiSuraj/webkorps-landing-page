import React from 'react';
import Hexa from '../subComponents/Hexa';

const icons = [
    { id: 1, name: 'Internet Of Things', icon: "https://webkorps-app.s3.us-east-1.amazonaws.com/iot.webp", isImage: true, altText: 'iot' },
    { id: 2, name: 'AI & ML', icon: "https://webkorps-app.s3.us-east-1.amazonaws.com/ai-and-ml.webp", isImage: true, altText: 'ai-and-ml' },
    { id: 3, name: 'Data Analytics', icon: "https://webkorps-app.s3.us-east-1.amazonaws.com/data-analytics.webp", isImage: true, altText: 'data-analytics' },
    { id: 4, name: 'Robotic Process Automation', icon: "https://webkorps-app.s3.us-east-1.amazonaws.com/robotic-process-automation.webp", isImage: true, altText: "robotic-process-automation" },
    { id: 5, name: 'Cyber Security', icon: "https://webkorps-app.s3.us-east-1.amazonaws.com/cyber-security.webp", isImage: true, altText: 'cyber-security' },
    { id: 6, name: 'Salesforce', icon: "https://webkorps-app.s3.us-east-1.amazonaws.com/salesforce.webp", isImage: true, altText: 'salesforce' },
    { id: 7, name: 'Blockchain', icon: "https://webkorps-app.s3.us-east-1.amazonaws.com/blockchain.webp", isImage: true, altText: 'blockchain' },
    { id: 8, name: 'SAP', icon: "https://webkorps-app.s3.us-east-1.amazonaws.com/sap.webp", isImage: true, altText: 'sap' }
];


const App = () => {
    return (
        <div className="relative w-[100vw] font-inter h-auto overflow-hidden ">
            <div className="flex font-inter flex-col mt-16 mb-16  items-center overflow-hidden mx-[7%] md:mx-[7%] xl:mx-[50px] ipad-pro:mx-[50px]  justify-center  shadow-custom-lg rounded-[20px] bg-white">
                <div className="relative px-[3%] xl:px-[30px] ipad-pro:px-[30px] w-full py-[3rem]">
                    <div className="w-full text-center text-white" data-aos="fade-left">
                        <h2
                            className="font-bold text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem] text-[#061C3D]"
                            dangerouslySetInnerHTML={{
                                __html:
                                    "Our Seamless Integrations to Enhance Your Digital Ecosystem",
                            }}
                        />
                        <p className="font-normal text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] pt-[30px] text-gray-700">
                        Enhance your digital ecosystem with seamless integration services, including Blockchain, AI/ML, IoT, Data Analytics, RPA, Cybersecurity, Salesforce, and SAP. We empower businesses with secure, intelligent, and automated solutions that improve efficiency, scalability, and innovation.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center md:mt-12 mt-0 mb-7">
                        <div className="w-full sm:w-[90%] lg:w-[75%]">
                            <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center">
                                {icons.slice(0, 4).map((icon) => (
                                    <Hexa
                                        key={icon.id}
                                        imageSrc={icon.icon}
                                        text={icon.name}
                                        altText={icon.altText}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="w-full ml-0 md:ml-[10%] sm:w-[90%] lg:w-[75%] md:mt-0 mt-0">
                            <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center">
                                {icons.slice(4).map((icon) => (
                                    <Hexa
                                        key={icon.id}
                                        imageSrc={icon.icon}
                                        text={icon.name}
                                        altText={icon.altText}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
