import React from 'react'
import { AchievementCard } from './Card';
import AchievementCardContainer from './AchievementCard';

const CardContainer = () => {
    const cards = [
      './assets/clients/SVGImage/AchievementImage1.svg',
      './assets/clients/SVGImage/AchievementImage2.svg',
      './assets/clients/SVGImage/AchievementImage3.svg',
      './assets/clients/SVGImage/AchievementImage4.svg',
    ];
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {cards.map((image, index) => (
          <AchievementCardContainer key={index} image={image} bgColor="bg-gradient-to-r from-[#005baa] via-[#126eb7] to-[#4aa8dd] text-white" />
        ))}
      </div>
    );
  };
  
  export default CardContainer;
  