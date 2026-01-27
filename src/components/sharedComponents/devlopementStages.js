import React, { useState } from 'react';

function DevelopmentStages() {
  const [active, setActive] = useState(null); // Track hovered or clicked card

  const allCards = [
    { id: 1, label: 'Front-End Development', details: 'Captivating and intuitive user interfaces combine visual appeal with easy navigation, enhancing user satisfaction.' },
    { id: 2, label: 'Back-End Development', details: 'Details about Back-End Development.' },
    { id: 3, label: 'Full-Stack Development', details: 'Combining front-end and back-end development, ensuring seamless integration and efficient performance of web applications.' },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6">
      {allCards.map((card, index) => {
        // Determine whether to show the card based on hover state
        const isVisible = active === null || active === card.id || active === allCards[(index + 1) % allCards.length].id;

        return (
          <div
            key={card.id}
            className={`w-[25%] h-48 p-6 mb-6 bg-blue-200 rounded-lg shadow-md transition-all duration-300 ease-in-out items-center justify-center flex flex-col
              ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
              ${active === card.id ? 'bg-blue-100 scale-105' : 'hover:bg-blue-300'}`}
            onMouseEnter={() => setActive(card.id)}
            onMouseLeave={() => setActive(null)}
          >
            <h2 className="text-xl font-semibold">{card.label}</h2>
            <div
              className={`mt-2 transition-opacity duration-300
                ${active === card.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              <p>{card.details}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DevelopmentStages;
