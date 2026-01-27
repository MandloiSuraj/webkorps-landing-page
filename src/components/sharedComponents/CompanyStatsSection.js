import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
function CompanyStatsSection({ bgColor, title ,para1,para2}) {
    const [years, setYears] = useState(0);
    const [projects, setProjects] = useState(0);
    const [clients, setClients] = useState(0);
    const [countries, setCountries] = useState(0);

    const sectionRef = useRef(null);
    const [hasCounted, setHasCounted] = useState(false);

    const words = ["Transforming Ideas into Reality", "Driving Digital Excellence Globally", "Crafting Future-Ready Solutions", "Crafting Future-Ready Solutions"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[currentWordIndex];
        let timeout;

        if (isDeleting) {
            timeout = setTimeout(() => {
                setDisplayedText(displayedText.slice(0, -1));
                if (displayedText === '') {
                    setIsDeleting(false);
                    setCurrentWordIndex((currentWordIndex + 1) % words.length);
                }
            }, 100);
        } else {
            timeout = setTimeout(() => {
                setDisplayedText(currentWord.slice(0, displayedText.length + 1));
                if (displayedText === currentWord) {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            }, 50);
        }

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, currentWordIndex]);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasCounted) {
                setHasCounted(true);
                const increment = (setter, target, step) => {
                    const interval = setInterval(() => {
                        setter((prev) => {
                            if (prev < target) {
                                const next = prev + step;
                                return next > target ? target : next;
                            } else {
                                clearInterval(interval);
                                return target;
                            }
                        });
                    }, 50);
                };

                increment(setYears, 8, 1);
                increment(setProjects, 500, 10);
                increment(setClients, 250, 5);
                increment(setCountries, 30, 1);
            }
        }, { threshold: 0.5 });

        const currentSection = sectionRef.current;
        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, [hasCounted]);
    return (
        <div className={`border border-gray-300 ${bgColor} rounded-[40px] p-12 px-[3%] xl:px-[30px] ipad-pro:px-[30px] mt-[4rem] mb-[4rem]  py-[2rem] mx-[5%] xl:mx-[50px] ipad-pro:mx-[5%] shadow-custom-lg`}>
            <div className="text-center ">
                <div className="text-4xl font-bold text-center">
                    Webkorps:  <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#6FC9FF] to-[#1887C9]">{displayedText}</span>
                    <span className="inline-block w-1 h-9 bg-gradient-to-b from-[#6FC9FF] to-[#1887C9] animate-blink" />
                </div>
                <h2 className="text-[2rem] font-semibold text-black mt-4">
                    {title}
                </h2>
            </div>
            <div ref={sectionRef} className="flex flex-col lg:flex-row justify-between  items-center ipad-pro:items-center xl:items-start mt-[30px]">

                <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-right">
                    <p className="text-lg text-gray-700 mt-4">
                        {para1}
                    </p>
                    <p className="text-lg text-gray-700 mt-[20px]">
                        {para2}
                           </p>
                    <Link to={'/contact'}>
                        <motion.button
                            type="button"
                            whileHover={{
                                backgroundColor: '#FFFFFF',
                                color: '#1887C9',
                                borderColor: '#1887C9',
                                transition: { duration: 0.1 },
                            }}
                            className="group relative overflow-hidden inline-flex items-center justify-center text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-base text-center md:text-lg px-3 md:px-4 py-3 sm:py-5 md:py-2 border-2 border-[#1887C9] bg-[#1887C9] transition-all duration-300 mt-[30px]"
                        > Get a Free Consultation Now !
                        </motion.button>
                    </Link>
                </div>

                <div className="lg:w-[45%] grid grid-cols-2 gap-y-8 gap-x-8 mt-8 lg:mt-0 text-center">
                    <div className="flex flex-col justify-center items-center p-8 relative">
                        <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1887C9]">
                            {years}+
                        </p>
                        <p className="text-base sm:text-xl text-gray-700 mt-2">
                            Years <br /> in Business
                        </p>


                        <hr className="absolute right-0 top-0 h-[90%] border-gray-300 border-r" />
                        <hr className="absolute bottom-0 left-0 w-[90%] border-gray-300" />
                    </div>

                    <div className="flex flex-col justify-center items-center p-8 relative">
                        <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1887C9]">{projects}+</p>
                        <p className="text-base sm:text-xl text-gray-700 mt-2">Projects <br />Delivered</p>
                        <hr className="absolute bottom-0 left-0 w-full border-gray-300" />
                    </div>

                    <div className="flex flex-col justify-center items-center p-8 relative">
                        <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1887C9]">{clients}+</p>
                        <p className="text-base sm:text-xl text-gray-700 mt-2">Professional <br />Development Team</p>
                        <hr className="absolute right-0 top-0 h-full border-gray-300 border-r" />
                    </div>

                    <div className="flex flex-col justify-center items-center p-8">
                        <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1887C9]">{countries}+</p>
                        <p className="text-base sm:text-xl text-gray-700 mt-2">Countries <br /> Served</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyStatsSection