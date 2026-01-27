import React, { useEffect } from 'react';
import Header from '../sharedComponents/Header';
import projectsData from './Project';
import { useParams } from 'react-router-dom';
import Footer from '../sharedComponents/footer';
import { Helmet } from 'react-helmet-async';
import NotFoundPage from '../subComponents/NotFoundPage';
import AOS from "aos";
import "aos/dist/aos.css";
const CaseStudyPages = () => {
    const { id } = useParams();
    const project = projectsData.find(
        (project) => project.id === id
    );
    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: "ease",
            once: true,
        });
    }, []);
    if (!project) {
        return <NotFoundPage />;
    }

    return (
        <>
            <Helmet>
                <title>{project?.metaTitle}</title>
                <meta
                    name="description"
                    content={project?.metaDescription}
                />
                <link rel="canonical" href={project.canonicalTag} />
            </Helmet>
            <Header />
            <div className="overflow-hidden font-inter">
                <div className="flex overflow-hidden items-center relative w-full h-[55rem] xl:h-[32rem] ipad-pro:h-[55rem] md:h-[55rem]  ">
                    <img
                        width="800"
                        height="600"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        loading="lazy"
                        src={'https://webkorps-app.s3.us-east-1.amazonaws.com/real-success-proven-results-explore-our-case-studies.jpg'}
                        alt={'case study'}
                        className="w-full h-full object-fill s"
                    />
                    <div className="absolute inset-0 flex  justify-center items-center xl:flex-row ipad-pro:flex-row flex-col gap-2    px-[5%] xl:px-[50px] ipad-pro:px-[50px] " >
                        <div className='flex xl:items-start ipad-pro:items-start items-center  justify-center xl:pt-[40px] xl:pb-[40px] ipad-pro:pt-[40px] ipad-pro:pt-[40px] pb-0 ipad-pro:pb-0 pt-[40px]  flex-col w-[100%]'>
                            <h1 className="text-[1.5625rem] xl:text-[3.3rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] xl:leading-[3.4rem] ipad-pro:leading-[3.4rem] leading-[2.4rem] text-white font-bold " data-aos="fade-left" dangerouslySetInnerHTML={{ __html: project.title }}></h1>
                            <p className="xl:text-left ipad-pro:text-left text-center text-white mt-[2.5rem]  text-[0.9375rem] xl:text-[1.1rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] font-inter w-[94%] " data-aos="fade-left">{project.description}</p>
                        </div>
                        <div
                            className="col-span-2 flex flex-wrap text-center text-white xl:w-[45%] ipad-pro:w-[45%] w-[100%] xl:h-[65%] ipad-pro:h-[45%] h-[15%] justify-center xl:pt-[40px] xl:pb-[40px] ipad-pro:pt-[40px] ipad-pro:pt-[40px] pb-0 ipad-pro:pb-0 pt-[40px] "
                        >
                            <div
                            >
                                <div className="col-span-1 sm:col-span-2 rounded-lg shadow-md overflow-hidden">
                                    <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"
                                        src={project.image}
                                        alt={project.altText}
                                        className={`h-[100%]  ${project.id === 'paypal' ? 'md:w-[60%] w-[100%]' : 'md:w-[100%] w-[100%]'} `}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <h3 className="text-4xl font-bold text-center mt-6 md:mt-24 xl:px-[160px] ipad-pro:px-[100px]">Challenges Faced</h3>
            <div className="flex justify-center   bg-white rounded-lg ">
                <div className="w-full p-5 pb-2 md:p-24 xl:px-[160px] ipad-pro:px-[100px]">
                    <ul className="grid grid-cols-1 items-center md:grid-cols-2 gap-6 md:gap-x-8 md:gap-y-6 text-gray-700">
                        {project.challenges.map((challenge, index) => (
                            <li
                                key={index}
                                className="flex flex-col p-6 bg-white rounded-lg shadow-2xl overflow-hidden content-center items-center text-center justify-center group z-10 hover:shadow-xl transition-shadow duration-300 h-[150px]"
                            >
                                <div className="flex items-center">
                                    <p className="ml-2 text-xl font-semibold">{challenge.title}</p>
                                    <p className="mt-2 text-gray-600 text-center">{challenge.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>


            <div className="flex xl:px-[160px] ipad-pro:px-[100px] mt-10 flex-col lg:flex-row items-center justify-center text-center lg:text-left mb-7 md:mb-12 p-6 bg-[#FAFAFA]">
                <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
                    <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy" src="https://webkorps-app.s3.us-east-1.amazonaws.com/solution.jpg" alt="solution " className="rounded-lg shadow-md w-full lg:w-3/4 max-w-md" />
                </div>
                <div className="lg:w-1/2">
                    <h1 className="text-4xl font-bold mx-auto max-w-2xl mt-6">Solution:</h1>

                    <h2 className="text-2xl font-medium text-[#072125] mt-2 mx-auto max-w-2xl">Unlock the Power of Mobility</h2>

                    <div className="text-[#072125] mt-4 mx-auto max-w-2xl">
                        {project.solution && project.solution.split('. ').map((item, index) => {
                            if (item.includes(':')) {
                                const [heading, description] = item.split(':');
                                return (
                                    <p key={index} className="mt-2">
                                        <strong>{heading}:</strong> {description && description.trim()}
                                    </p>
                                );
                            } else {
                                return (
                                    <p key={index} className="mt-2">
                                        {item.trim()}
                                    </p>
                                );
                            }
                        })}
                    </div>
                </div>

            </div>

            <div className="bg-white p-8 pt-0 rounded-lg shadow-md">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-4xl font-bold text-center mb-6">Tech Stacks</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-gray-700">
                        {project.techStacks.map((tech, index) => (
                            <li key={index} className="flex flex-col p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-center text-center justify-center">
                                    <p className="ml-2 text-xl font-semibold ">{tech}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default CaseStudyPages;