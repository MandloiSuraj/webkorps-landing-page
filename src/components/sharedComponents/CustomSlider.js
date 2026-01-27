import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  const slides = [
    {
      img: 'https://webkorps-app.s3.us-east-1.amazonaws.com/join-us.webp',
      title: 'We Code Solutions, Not Just Software',
      subtitle: 'Step Into The Digital Age With Our Cutting-Edge IT Solutions!'
    },
    {
        img: 'https://webkorps-app.s3.us-east-1.amazonaws.com/join-us.webp',
        title: 'We Code Solutions, Not text 1 Software',
        subtitle: 'Step Into The Digital Age With Our Cutting-Edge IT Solutions!'
      },
      {
        img: 'https://webkorps-app.s3.us-east-1.amazonaws.com/join-us.webp',
        title: 'We Code Solutions, Not text 2 Software',
        subtitle: 'Step Into The Digital Age With Our Cutting-Edge IT Solutions!'
      },
      {
        img: 'https://webkorps-app.s3.us-east-1.amazonaws.com/join-us.webp',
        title: 'We Code Solutions, Not textv Software',
        subtitle: 'Step Into The Digital Age With Our Cutting-Edge IT Solutions!'
      }
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="relative w-full h-[55rem] xl:h-[32rem] ipad-pro:h-[30rem] md:h-[30rem]">
          <img
           width="800"
                  height="600"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  loading="lazy"
            src={slide.img}
            alt="home image"
            className="w-full h-full object-fill opacity-70"
          />
          <div className="absolute inset-0 flex justify-center items-center flex-col bg-gradient-to-t from-[#001833] to-[#001833] opacity-85 px-5">
            <h1
              className="text-3xl xl:text-5xl text-white font-bold"
              dangerouslySetInnerHTML={{ __html: slide.title }}
            ></h1>
            <h3 className="text-xl text-white font-semibold mt-4">{slide.subtitle}</h3>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CustomSlider;