import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { faCode, faServer, faMobileAlt, faTools, faBug, faDatabase, faPaintBrush, faCloud, faPlug } from '@fortawesome/free-solid-svg-icons';
const PrevArrow = ({ onClick }) => (
    <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2  z-10"
        onClick={onClick}
    >
        <FaChevronLeft className="text-gray-600" />
    </button>
);

const NextArrow = ({ onClick }) => (
    <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2  z-10"
        onClick={onClick}
    >
        <FaChevronRight className="text-gray-600" />
    </button>
);
const Technologies = ({ heading, description, techStack = [], centerHeading }) => {
    const defaultTechStack = [
        {
            category: 'Frontend \n Technologies',
            technologies: [
                { name: 'CSS', logo: 'https://webkorps-app.s3.us-east-1.amazonaws.com/css-3.png', altText: 'css' },
                { name: 'HTML', logo: 'https://webkorps-app.s3.us-east-1.amazonaws.com/html-5.png', altText: 'html' },
                { name: 'Javascript', logo: 'https://webkorps-app.s3.us-east-1.amazonaws.com/javascript.svg', altText: 'javascript' },
                { name: 'React', logo: 'https://webkorps-app.s3.us-east-1.amazonaws.com/react.svg', altText: 'react' },
                { name: 'Angular', logo: 'https://webkorps-app.s3.us-east-1.amazonaws.com/angular.svg', altText: 'angular' },
                { name: 'Vue.js', logo: 'https://webkorps-app.s3.us-east-1.amazonaws.com/vue-js.svg', altText: 'vue-js' },
                { name: 'Nextjs', logo: 'https://webkorps-app.s3.us-east-1.amazonaws.com/nextjs.svg', altText: 'nextjs' },
                { name: 'TezJS', logo: 'https://webkorps-app.s3.us-east-1.amazonaws.com/tezjs.jpeg', altText: 'TezJS' },
                { name: 'TypeScript', logo: 'https://webkorps-app.s3.us-east-1.amazonaws.com/typescript.png', altText: 'type-script' },
                { name: 'Bootstrap', logo: 'https://webkorps-app.s3.us-east-1.amazonaws.com/bootstrap.png', altText: 'bootstrap' },
                { name: 'Ember', logo: 'https://webkorps-app.s3.us-east-1.amazonaws.com/ember.svg', altText: 'ember' },
                { name: 'MeteorJS', logo: 'https://webkorps-app.s3.us-east-1.amazonaws.com/meteor.svg', altText: 'meteor' }
            ],
            icon: faCode
        },
        {
            category: 'Backend \n Technologies',
            technologies: [
                { name: 'Node.js', logo: 'https://webkorps-app.s3.us-east-1.amazonaws.com/angular.svg', altText: 'angular' },
                { name: 'Python', logo: "https://webkorps-app.s3.us-east-1.amazonaws.com/python.svg", altText: 'python' },
                { name: 'PHP', logo: "https://webkorps-app.s3.us-east-1.amazonaws.com/php.svg", altText: 'php' },
                { name: 'Vue.js', logo: 'https://webkorps-app.s3.us-east-1.amazonaws.com/vue-js.svg', altText: 'vue-js' },
                { name: 'Nextjs', logo: 'https://webkorps-app.s3.us-east-1.amazonaws.com/nextjs.svg', altText: 'nextjs' },
            ],
            icon: faServer
        },
        {
            category: 'Mobile Development \n Platforms',
            technologies: [
                { name: 'Android', logo: "https://webkorps-app.s3.us-east-1.amazonaws.com/kotlin.svg", altText: 'kotlin' },
                { name: 'Flutter', logo: "https://webkorps-app.s3.us-east-1.amazonaws.com/flutter.svg", altText: 'flutter' },
                { name: 'Ionic', logo: "https://webkorps-app.s3.us-east-1.amazonaws.com/ionic.svg", altText: 'ionic' },
                { name: 'Xamarin', logo: "https://webkorps-app.s3.us-east-1.amazonaws.com/Xamarin.svg", altText: 'xamarin' },
                { name: 'React Native', logo: "https://webkorps-app.s3.us-east-1.amazonaws.com/react.svg",altText: 'react' },
                { name: 'Swift', logo: "https://webkorps-app.s3.us-east-1.amazonaws.com/swift.svg", altText: 'swift' },
                { name: 'PWA', logo: "https://webkorps-app.s3.us-east-1.amazonaws.com/pwa.svg", altText: 'pwa' },
                { name: 'Cordova', logo: "https://webkorps-app.s3.us-east-1.amazonaws.com/apache-cordova.svg",altText: 'Apache Cordova' },
            ],
            icon: faMobileAlt
        },
        {
            category: 'Development \n Tools',
            technologies: [
                { name: 'Apache Cordova', logo: "https://webkorps-app.s3.us-east-1.amazonaws.com/Apache.svg", altText: 'apache-cordova' },
                { name: 'WidgetPad', logo: 'https://webkorps-app.s3.us-east-1.amazonaws.com/react.svg', altText: 'react' },
                { name: 'Solar2D', logo: 'https://webkorps-app.s3.us-east-1.amazonaws.com/vue-js.svg', altText: 'vue-js' },
                { name: 'Android Studio', logo: "https://webkorps-app.s3.us-east-1.amazonaws.com/Android-Studio.svg", altText: 'android-studio' },
                { name: 'Xcode', logo: "https://webkorps-app.s3.us-east-1.amazonaws.com/Xcode.svg", altText: 'xcode' },
                { name: 'iOS SDK', logo: 'https://webkorps-app.s3.us-east-1.amazonaws.com/Xamarin.svg',  altText: 'xamarin' }
            ],
            icon: faTools
        },
        {
            category: 'Quality Assurance \n Tools',
            technologies: [
                { name: 'TestFlight', logo: "https://webkorps-app.s3.us-east-1.amazonaws.com/testflight.png", altText: 'testflight' },
                { name: 'XCTest', logo: "https://webkorps-app.s3.us-east-1.amazonaws.com/xctest.png", altText: 'XCTest' },
                { name: 'Detox', logo: "https://webkorps-app.s3.us-east-1.amazonaws.com/detox-img.png", altText: 'detox' },
                { name: 'App Center', logo: "https://webkorps-app.s3.us-east-1.amazonaws.com/app-center.jpeg", altText: 'app-center' }
            ],
            icon: faBug
        },
        {
            category: 'Database \n Solutions',
            technologies: [
                { name: 'MySQL', logo: "https://webkorps-app.s3.us-east-1.amazonaws.com/MySQL.svg", altText: 'mysql' },
                { name: 'MongoDB', logo: "https://webkorps-app.s3.us-east-1.amazonaws.com/mongodb.svg", altText: 'mongodb' },
                { name: 'PostgreSQL', logo: "https://webkorps-app.s3.us-east-1.amazonaws.com/postgresql.svg", altText: 'postgresql' },
                { name: 'Vue.js', logo: 'https://webkorps-app.s3.us-east-1.amazonaws.com/vue-js.svg', altText: 'vue-js' },
                { name: 'Nextjs', logo: 'https://webkorps-app.s3.us-east-1.amazonaws.com/nextjs.svg', altText: 'vue-js' }

            ],
            icon: faDatabase
        },
        {
            category: 'UI/UX \n Design',
            technologies: [
                { name: 'Figma', logo: "https://webkorps-app.s3.us-east-1.amazonaws.com/figma.svg", altText: 'figma' }
            ],
            icon: faPaintBrush
        },
        {
            category: 'Cloud \n  Solutions',
            technologies: [
                { name: 'AWS', logo: "https://webkorps-app.s3.us-east-1.amazonaws.com/aws.svg", altText: 'aws' },
                { name: 'Azure', logo: "https://webkorps-app.s3.us-east-1.amazonaws.com/azure.svg", altText: 'azure' },
                { name: 'Google Cloud', logo: "https://webkorps-app.s3.us-east-1.amazonaws.com/Google-Cloud.svg", altText: 'google cloud' }
            ],
            icon: faCloud
        },
        {
            category: 'Integration \n Capabilities',
            technologies: [
                { name: 'Payment Gateways', logo: "https://webkorps-app.s3.us-east-1.amazonaws.com/payment-gateway.png", altText: 'payment-gateways' },
                { name: 'Live and Video Streaming', logo: "https://webkorps-app.s3.us-east-1.amazonaws.com/game.png", altText: 'game' },
                { name: 'Chat Functionalities', logo: "https://webkorps-app.s3.us-east-1.amazonaws.com/chat.png", altText: 'chat-functionalities' },
                { name: 'Audio and Video Services', logo: "https://webkorps-app.s3.us-east-1.amazonaws.com/audio-and-video.png", altText: 'audio-video-services' },
                { name: 'In-App Purchases', logo: "https://webkorps-app.s3.us-east-1.amazonaws.com/Google-Cloud.svg",altText: 'google cloud' },
                { name: 'AR and VR Integration', logo: "https://webkorps-app.s3.us-east-1.amazonaws.com/vr.png", altText: 'ar-vr-integration' }
            ],
            icon: faPlug
        }
    ];
    const [isPaused, setIsPaused] = useState(false);

    const scrollRef = useRef(null);
    const awardsLoop = [...defaultTechStack, ...defaultTechStack];

 
  const handleScroll = () => {
    if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
      scrollRef.current.scrollLeft = 0;
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);
    useEffect(() => {
        let scrollInterval;

        const startScrolling = () => {
            if (!isPaused && scrollRef.current) {
                scrollInterval = setInterval(() => {
                    scrollRef.current.scrollLeft += 1;
                }, 50);
            }
        };
        startScrolling();
        return () => {
            clearInterval(scrollInterval);
        };
    }, [isPaused]);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4, // Adjust number of visible slides
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 768, // Mobile screens
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // Smaller screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className=" py-[4rem] bg-[#1887C9]">
            <div className="flex font-inter flex-col items-center overflow-hidden mx-[7%] md:mx-[7%] xl:mx-[50px] ipad-pro:mx-[50px] justify-center p-12 px-[3%] xl:px-[30px] ipad-pro:px-[30px] shadow-custom-lg rounded-[20px] bg-white">
                {!centerHeading ? <div
                    className={` w-full items-center flex-col xl:flex-row ipad-pro:flex-col md:items-start md:gap-8 lg:gap-8 xl:flex  hidden  ipad-pro:hidden`}
                >
                    <h2
                        className={`text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem] font-bold leading-[1.4] text-center md:text-left w-[45%]`}
                        data-aos="fade-right"
                        dangerouslySetInnerHTML={{ __html: heading }}
                    ></h2>
                    <div className="w-[2px] bg-[#909090] flex-shrink-0 self-stretch"></div>
                    <div
                        data-aos="fade-left"
                        className={`w-[70%] md:text-left`}
                    >
                        <p className="text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] text-gray-700 leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div> :
                    <div className="w-full text-center " data-aos="fade-left">
                        <h2 className=" font-bold text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem]  text-[#061C3D]"
                            dangerouslySetInnerHTML={{ __html: heading }}
                        >
                        </h2>
                        <p className=" font-normal text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] pt-[30px] text-gray-700">
                            {description}
                        </p>
                    </div>}
                {/* heading for ipad and mobile view  */}
                {!centerHeading && <div className="w-full text-center xl:hidden  block  ipad-pro:block" data-aos="fade-left">
                    <h2 className=" font-bold text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem]  text-[#061C3D]"
                        dangerouslySetInnerHTML={{ __html: heading }}
                    >
                    </h2>
                    <p className=" font-normal text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] pt-[30px] text-gray-700">
                        {description}
                    </p>
                </div>
                }
                <div className="flex flex-col md:flex-row w-full  mt-[4rem]">
                    <div
                        ref={scrollRef}
                        className="w-full flex gap-4  overflow-x-auto scrollbar-hidden  py-[30px]"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onKeyDown={(e) => {
                            if (e.key === "ArrowRight") {
                                scrollRef.current.scrollLeft += 50;
                            } else if (e.key === "ArrowLeft") {
                                scrollRef.current.scrollLeft -= 50;
                            }
                        }}
                    >
                        {awardsLoop.map((stack) => (
                            <div
                                key={stack.category}
                                className="ipad-pro:min-w-[35%] min-w-[85%] xl:min-w-[35%] max-w-[85%] xl:max-w-[35%] ipad-pro:max-w-[35%] flex flex-col justify-center pl-[20px] transition-all duration-500 ease-in-out shadow-lg hover:shadow-custom-lg rounded-xl bg-white border-[1px]  p-4"
                            >
                                <h3 className="text-xl font-bold">{stack.category}</h3>
                                <Slider {...settings}>

                                    {stack.technologies.map((tech, index) => (<ul className="flex gap-4">
                                        <li
                                            key={tech.name}
                                            className="flex flex-col items-center justify-center text-center p-2 w-full"
                                        >
                                            {tech.logo && <img  width="800"
                  height="600"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  loading="lazy" src={tech.logo} alt={tech.altText} className="w-12 h-12" />}
                                            <span className="text-[0.825rem] w-full mt-[8px]">{tech.name}</span>
                                        </li>
                                    </ul>
                                    ))}
                                </Slider>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technologies;
