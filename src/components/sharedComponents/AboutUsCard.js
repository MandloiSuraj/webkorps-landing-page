import React from 'react';
import WebkorpsImg from "../../assets/images/webkorps.jpg";

const images = [
  {
    src: 'https://webkorps-app.s3.us-east-1.amazonaws.com/chirag-agarwal-ceo-and-founder.jpg',
    alt: 'Chirag Agarwal CEO and Founder'
  },
  {
    src: 'https://webkorps-app.s3.us-east-1.amazonaws.com/amul-choudhary-coo-and-co-founder.jpg',
    alt: 'Amul Choudhary COO and Co Founder'
  },
  {
    src: 'https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-team-at-indiasoft-event.jpg',
    alt: 'Webkorps team at indiasoft event'
  },
  {
    src: 'https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-team-at-cio-event.jpg',
    alt: 'Webkorps team at cio event'
  },
  {
    src: WebkorpsImg,
    alt: 'Webkorps Logo'
  }
];

const AboutUsCard = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-4  pt-0 xl:w-[45%] ipad-pro:w-[45%] w-full h-[45rem] ">
      {images.map((image, index) => (
        <div key={index} className={`relative items-center overflow-hidden  ${index === 0 ? 'col-span-2 row-span-2' : 'col-span-2 row-span-1'}`}>
          <img  width="800"
                  height="600"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  loading="lazy" src={image.src} alt={image.alt} className=" w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
};

export default AboutUsCard;