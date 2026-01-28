import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import dotImage from "../../assets/images/dotImage.png";

function ClientFeedback({ title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const feedbackTexts = [
    {
      quote: "Working with webkorps on our custom software project was a fantastic experience. They really took the time to understand our processes and built a solution that fits perfectly with our operations. The final product was reliable, user-friendly, and delivered on time. You can tell they genuinely care about the quality of their work.",
      author: "Chloe Martins, CEO ",
    },
    {
      quote:
        "We hired webkorps to develop a mobile app for our services, and the entire process was smooth from start to finish. The app looks amazing, runs flawlessly, and has already received great feedback from our users. Their team was proactive, communicative, and very detail-oriented",
      author: "Daniel Wong, CTO ",
    },
    {
      quote:
        "The team at webkorps revamped our website, and the results were beyond our expectations. The design is clean, the performance is excellent, and it truly reflects our brand. They were responsive to every request and incredibly easy to work with.",
      author: "Emily Nguyen , COO",
    },
    {
      quote:
        "We needed a secure and transparent blockchain solution, and webkorps delivered with professionalism and deep technical expertise. They guided us through every step, and the end product has added real value to our operations.",
      author: "Ethan Brook , VP",
    },
    {
      quote:
        "We needed a custom enterprise solution to manage our growing operations, and webkoprs built something truly tailored to our needs. It’s scalable, secure, and easy to use. Their attention to detail and understanding of our business stood out.",
      author: "Jason Carter , CEO",
    },
    {
      quote:
        "We brought webkorps on board to integrate AI into our existing systems, and it’s been a game changer. Their machine learning models are accurate and efficient, helping us make smarter business decisions. The technical know-how they bring to the table is impressive.",
      author: "Liam Thompson , COO",
    },

  ];

  const floatingImages = [
    { src: 'https://webkorps-app.s3.us-east-1.amazonaws.com/chloe-martins.jpg', alt: "Profile image of a person", position: "top-[-35px] right-[10px] md:top-[-10px] md:right-[-50px]", size: "w-[60px] h-[60px] md:w-[75px] md:h-[75px]" },
    { src: 'https://webkorps-app.s3.us-east-1.amazonaws.com/daniel-wong.jpeg', alt: "Profile image of a person", position: "top-[30%] right-[0px] transform -translate-y-1/2 md:right-[-100px]", size: "w-[40px] h-[40px] md:w-[50px] md:h-[50px]" },
    { src: 'https://webkorps-app.s3.us-east-1.amazonaws.com/emily-nguyen.jpeg', alt: "Profile image of a person", position: "bottom-[-20px] right-[10px] md:bottom-[-20px] md:right-[25px]", size: "w-[50px] h-[50px] md:w-[75px] md:h-[75px]" },
    { src: 'https://webkorps-app.s3.us-east-1.amazonaws.com/ethan-brooks.jpeg', alt: "Profile image of a person", position: "top-[-35px] left-[0px] md:top-[-10px] md:left-[-50px]", size: "w-[60px] h-[60px] md:w-[75px] md:h-[75px]" },
    { src: 'https://webkorps-app.s3.us-east-1.amazonaws.com/jason-carter.jpeg', alt: "Profile image of a person", position: "top-[30%] left-[0px] transform -translate-y-1/2 md:left-[-100px]", size: "w-[40px] h-[40px] md:w-[50px] md:h-[50px]" },
    { src: 'https://webkorps-app.s3.us-east-1.amazonaws.com/liam-thompson.jpeg', alt: "Profile image of a person", position: "top-[70%] right-[0px] transform -translate-y-1/2 md:right-[-100px]", size: "w-[40px] h-[40px] md:w-[50px] md:h-[50px]" },
    { src: 'https://webkorps-app.s3.us-east-1.amazonaws.com/leo-bennett.jpeg', alt: "Profile image of a person", position: "top-[70%] left-[10px] transform -translate-y-1/2 md:left-[-100px]", size: "w-[40px] h-[40px] md:w-[50px] md:h-[50px]" },
    { src: 'https://webkorps-app.s3.us-east-1.amazonaws.com/sophie-anderson.jpeg', alt: "Profile image of a person", position: "bottom-[-50px] left-[140px] md:bottom-[-50px] md:left-[60px]", size: "w-[50px] h-[50px] md:w-[75px] md:h-[75px]" },
  ];
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbackTexts.length);
  };

  const handlePrevious = () => {

    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + feedbackTexts.length) % feedbackTexts.length
    );
  };

  return (
    <div className=" py-[4rem]  font-inter text-center sm:text-center md:text-left  bg-[#11608F] lg:text-left h-auto ">
      <div className="bg-gradient-to-b from-[#EEF2FF] to-white  py-12 md:py-16 flex items-center justify-center relative mx-[7%] md:mx-[7%] xl:mx-[50px] ipad-pro:mx-[50px] justify-center p-12 px-[3%] xl:px-[30px] ipad-pro:px-[30px] shadow-custom-lg rounded-[20px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-r from-blue-300 to-blue-500 rounded-full opacity-30 blur-[400px] md:blur-[800px]"></div>
        </div>

        {/* Main Content */}
        <div className="text-center relative max-w-xl md:max-w-2xl mx-auto z-10 px-4 py-[4rem]">
          <h1 className="font-bold text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem] mb-6 md:mb-10" dangerouslySetInnerHTML={{ __html: title }}>
          </h1>

          {/* Dotted Pattern */}
          <div className="relative">
            <div className="absolute top-[10px] right-[-40px] md:top-[20px] md:right-[-69px] text-gray-700 opacity-90 z-0">
              <img width="800"
                height="600"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                loading="lazy" alt="Dotted pattern" className="w-40 md:w-72 h-20 md:h-36" src={dotImage?.src || dotImage} />
            </div>
            <div className="absolute bottom-[-16px] left-[-50px] md:bottom-[-26px] md:left-[-109px] text-gray-700 opacity-90 z-0">
              <img width="800"
                height="600"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                loading="lazy" alt="Dotted pattern" className="w-40 md:w-72 h-20 md:h-36" src={dotImage?.src || dotImage} />
            </div>

            {/* Extra Cards for Depth Effect */}
            <div className="absolute top-[5px] left-[5px] w-full h-[200px] md:w-[600px] md:h-[250px] bg-white rounded-2xl"></div>
            <div className="absolute top-[10px] left-[10px] w-full h-[200px] md:w-[600px] md:h-[250px] bg-white rounded-2xl"></div>

            {/* Main Testimonial Card */}
            <div className="relative bg-white p-6 md:p-8 rounded-2xl shadow-md w-full max-w-lg md:max-w-2xl h-auto md:h-[250px] mx-auto z-20">
              <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-3 md:mb-4">
                "{feedbackTexts[currentIndex].quote}"
              </p>
              <p className="font-bold text-gray-900" dangerouslySetInnerHTML={{ __html: feedbackTexts[currentIndex].author }}></p>
            </div>
          </div>

          {/* Floating Images */}
          {floatingImages.map((img, index) => {
            const isHighlighted = index === currentIndex % floatingImages.length;
            return (
              <div
                key={index}
                className={`absolute ${img.position}  floating transition-all duration-500 ease-in-out z-20`}
              >
                <img
                  width="800"
                  height="600"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  loading="lazy"
                  alt={img.alt}
                  src={img.src}
                  className={`rounded-full  shadow-lg transition-all ${img.size} duration-500 ease-in-out
          ${isHighlighted ? "grayscale-0 scale-110 shadow-2xl w-[90px] h-[90px] md:w-[90px] md:h-[90px]" : "grayscale scale-100 opacity-70"}
        `}
                />
              </div>
            );
          })}



          {/* Navigation Buttons */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-3 md:space-x-4">
            <button
              onClick={handlePrevious}
              className="rounded-full border border-gray-400 p-2 w-[35px] h-[35px] md:w-[40px] md:h-[40px] hover:bg-gray-200 transition"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              onClick={handleNext}
              className="rounded-full border border-gray-400 p-2 w-[35px] h-[35px] md:w-[40px] md:h-[40px] hover:bg-gray-200 transition"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientFeedback;
