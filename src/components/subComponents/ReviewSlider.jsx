import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React from "react";
import AboutBG from "../../assets/images/about-bg.jpg";
import WebkorpsImg from "../../assets/images/webkorps.jpg";
const reviews = [
    'https://webkorps-app.s3.us-east-1.amazonaws.com/employee-review-1.jpg',
    'https://webkorps-app.s3.us-east-1.amazonaws.com/employee-review-2.jpg',
    'https://webkorps-app.s3.us-east-1.amazonaws.com/employee-review-3.jpg',
    'https://webkorps-app.s3.us-east-1.amazonaws.com/employee-review-4.jpg',
    'https://webkorps-app.s3.us-east-1.amazonaws.com/employee-review-5.jpg',
    'https://webkorps-app.s3.us-east-1.amazonaws.com/employee-review-6.jpg',
    'https://webkorps-app.s3.us-east-1.amazonaws.com/employee-review-7.jpg',
    'https://webkorps-app.s3.us-east-1.amazonaws.com/employee-review-8.jpg',
    'https://webkorps-app.s3.us-east-1.amazonaws.com/employee-review-9.jpg',
    'https://webkorps-app.s3.us-east-1.amazonaws.com/employee-review-10.jpg',

];

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
    <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
        onClick={onClick}
    >
        <FaChevronLeft className="text-gray-600" />
    </button>
);

const NextArrow = ({ onClick }) => (
    <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
        onClick={onClick}
    >
        <FaChevronRight className="text-gray-600" />
    </button>
);

const ReviewSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className=" py-[4rem]  bg-white font-inter  relative  overflow-hidden">
            <div className="Clients  w-auto items-center justify-center text-center lg:text-left  mx-[7%] md:mx-[7%] xl:mx-[50px] ipad-pro:mx-[50px] justify-center  shadow-custom-lg rounded-[20px] bg-white px-[20px] py-[3rem]">
                <div className="w-full text-center mb-[30px]" data-aos="fade-left">
                    <h2 className=" font-bold text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem] text-[#061C3D]">
                        Real Stories, Real Experiences - Life at Webkorps in Their Words
                    </h2>
                    <p className=" font-normal text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] pt-[30px] text-[#061C3D]">
                        At Webkorps, our employees are at the heart of everything we do. Don’t just take our word for it - hear from our team about their experiences, growth, and what makes Webkorps a great place to work!
                    </p>
                </div>

                <Slider {...settings}>
                    {reviews.map((image, index) => (
                        <div key={index} className="p-4">
                            <div className="bg-white p-4 rounded-xl shadow-lg flex justify-center items-center border border-[#e5e2e2]">
                                <img
                                    width="800"
                                    height="600"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                    loading="lazy"
                                    src={image}
                                    alt={`employee review`}
                                    className="w-[370px] h-[240px]  rounded-lg"
                                />
                            </div>

                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ReviewSlider;
