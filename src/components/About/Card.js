import React, { useEffect, useState } from 'react';
const Icons1 = '/assets/Icons/customer-centric-approach.svg'
const Icons2 = '/assets/Icons/innovation-and-excellence.svg'
const Icons3 = '/assets/Icons/integrity-and-transparency.svg'
const Icons4 = '/assets/Icons/collaboration-and- teamwork.svg'
const Icons5 = '/assets/Icons/continuous-learning-and-growth.svg'
const Icons6 = '/assets/Icons/commitment-to-quality.svg'

const Card = ({ image, title, text, altText }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 200); // Simulates fade-in effect
  }, []);

  return (
    <div
      className={`relative w-full min-h-[265px] bg-white border border-gray-300 rounded-lg overflow-hidden flex flex-col items-center justify-between p-4 shadow-lg 
      transform transition duration-500 
      hover:bg-[#1887C9] group`}
    >
      <div className="flex flex-col items-start justify-center text-left flex-grow w-full">
        <div className='flex  items-center justify-center text-left gap-4'>
          <img
            width="800"
            height="600"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            loading="lazy"
            src={image}
            alt={altText}
            className="w-12 h-12 transition duration-500 ease-in-out group-hover:brightness-0 group-hover:invert"
          />
          <h3 className="text-xl font-inter font-bold mb-2 transition-colors duration-500 ease-in-out text-gray-700 group-hover:text-white">
            {title}
          </h3>
        </div>
        <p className="text-[0.9375rem] xl:text-[1.1rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] text-gray-700 font-inter transition-colors duration-500 ease-in-out group-hover:text-white">
          {text}
        </p>
      </div>
    </div>
  );
};

const CardContainer = () => {
  const cards = [
    {
      image: Icons1,
      title: 'Customer-Centric Approach',
      text: 'We prioritize our clients’ success by understanding their unique challenges and delivering tailored, high-impact solutions that drive long-term growth.',
      altText: 'Customer-Centric-Approach'
    },
    {
      image: Icons2,
      title: 'Innovation & Excellence',
      text: 'Embracing emerging technologies and industry best practices, we continuously push boundaries to create cutting-edge, scalable, and future-ready solutions.',
      altText: 'Innovation & Excellence'
    },
    {
      image: Icons3,
      title: 'Integrity & Transparency',
      text: 'Honesty, ethics, and openness guide our work, fostering trust, accountability, and lasting relationships with clients, partners, and stakeholders.',
      altText: 'Integrity & Transparency'
    },
    {
      image: Icons4,
      title: 'Collaboration & Teamwork',
      text: 'We thrive on teamwork, creating a supportive and inclusive environment where diverse ideas fuel innovation and creative problem-solving.',
      altText: 'Collaboration & Teamwork'
    },
    {
      image: Icons5,
      title: 'Continuous Learning & Growth',
      text: 'We invest in skill development, research, and technology, ensuring we stay ahead in an ever-evolving digital and business landscape.',
      altText: 'Continuous Learning & Growth'
    },
    {
      image: Icons6,
      title: 'Commitment to Quality',
      text: 'Excellence is at our core - we follow rigorous standards to deliver reliable, efficient, and impactful solutions that exceed expectations. ',
      altText: 'Commitment to Quality'
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 ">
      {cards.map((card, index) => (
        <Card key={index} image={card.image} title={card.title} text={card.text} altText={card.altText} />
      ))}
    </div>

  );
};
export default CardContainer;