"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = ({ title, faqData, description, content }) => {
    // Split data into two columns
    const middleIndex = Math.ceil(faqData.length / 2);
    const firstColumn = faqData.slice(0, middleIndex);
    const secondColumn = faqData.slice(middleIndex);

    const [showAll, setShowAll] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);
    const formatContent = (content) => {
        let formattedContent = content
            .split("\n")
            .map(line => line.startsWith("- ") ? `<li style="margin-left:25px;">${line.substring(2)}</li>` : line.startsWith("-- ") ? `<br></br>${line.substring(2)}` : line)
            .join("");

        return `<ul style="list-style-type: disc;  ">${formattedContent}</ul>`;
    };


    return (
        <div className="w-full py-[4rem] px-[5%] xl:px-[50px] ipad-pro:px-[50px] overflow-hidden font-inter bg-white" data-aos="fade-right"
            data-aos-duration="1000">
            <div className="w-full bg-white rounded-[28px] shadow-custom-lg p-6" data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="500">
                <h2 className="text-center font-bold text-[25px] xl:text-[30px] ipad-pro:text-[28px] md:text-[25px] leading-[42px] mb-6" dangerouslySetInnerHTML={{ __html: title }}></h2>
                {description && <p className=" font-normal text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] text-center md:text-[1.15rem] leading-[1.5875rem] pt-[30px] text-[#061C3D]">
                    {description}
                </p>}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    {[firstColumn, secondColumn].map((column, colIndex) => (
                        <div key={colIndex} className="space-y-4">
                            {column.slice(0, showAll ? column.length : 3).map((item, index) => {
                                const uniqueIndex = `${colIndex}-${index}`;

                                return (
                                    <div key={uniqueIndex} className="rounded-xl overflow-hidden shadow-lg mb-4">
                                        <div
                                            className={`text-lg font-semibold px-6 py-4 flex justify-between items-center cursor-pointer rounded-t-xl ${openIndex === uniqueIndex ? 'bg-[#1887C9] text-white h-[100px]' : 'bg-white text-[#1887C9] h-[100px]'}`}
                                            onClick={() => setOpenIndex(openIndex === uniqueIndex ? null : uniqueIndex)}
                                        >
                                            <span>{item.title}</span>
                                            <button className="text-xl">{openIndex === uniqueIndex ? "✕" : "+"}</button>
                                        </div>

                                        <AnimatePresence>
                                            {openIndex === uniqueIndex && (
                                                <motion.div
                                                    key={uniqueIndex}
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }}
                                                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                                                    style={{ overflow: 'hidden' }}
                                                >
                                                    <div className="bg-[#F4F7FB] px-6 py-4  text-gray-700 text-[18px] rounded-b-xl whitespace-pre-line " dangerouslySetInnerHTML={{
                                                        __html: formatContent(item.content)
                                                    }}></div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
                {content && <p className=" font-normal text-[0.9375rem]  text-center xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] pt-[30px] text-[#061C3D]" dangerouslySetInnerHTML={{ __html: content }}></p>}
                {/* Show More / Show Less Button */}
                <motion.div className="text-center mt-6">
                    <motion.button
                        onClick={() => setShowAll(!showAll)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2  text-white font-semibold rounded-lg transition duration-300 "
                    >
                        {!showAll ? (
                            <img width="800"
                                height="600"
                                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                loading="lazy" src="https://webkorps-app.s3.us-east-1.amazonaws.com/down-arrow.png" alt="down-arrow" className="h-6 w-6" />
                        ) : (
                            <img width="800"
                                height="600"
                                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                loading="lazy" src="https://webkorps-app.s3.us-east-1.amazonaws.com/up-arrows.png" alt="Show More" className="h-6 w-6" />
                        )}
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default FAQSection;
