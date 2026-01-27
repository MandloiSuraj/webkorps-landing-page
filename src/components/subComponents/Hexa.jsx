import React from "react";
const Hexagon = ({ imageSrc, text,altText }) => {
  return (
    <div className="relative  font-inter w-[35.4vw] mt-6 sm:mt-0 md:mt-0 lg:mt-0 ipad-sum:mt-5  h-[35.4vw] md:w-[11.4vw] md:h-[11.4vw] group">
      {/* Hexagon Shape */}
      <div className="absolute inset-0 flex items-center justify-center drop-shadow ">
        <div className="clip-path-hexagon group-hover:border-green-500 relative overflow-hidden transition-transform duration-300 transform hover:scale-105 w-full h-full bg-white flex items-center justify-center group-hover:animate-none animate-hexagon-reset shadow-custom-lg">
          {/* Image */}
          <img width="800" height="600"  sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"
            src={imageSrc}
            alt={altText}
            
            className=" w-[10vw] h-[10vw] md:w-[5vw] md:h-[5vw] icon-image  transition-opacity duration-300 ease-in-out group-hover:translate-y-4 group-hover:rotate-12 group-hover:opacity-0" // Added rotate and translate on hover
          />
          {/* Text Overlay */}
          <div className="text-[4.4vw] md:text-[1.4vw] inset-0 flex items-center justify-center text-black text-center font-bold transition-opacity duration-300 ease-in-out group-hover:opacity-100 opacity-0 transform ">
            {text}
          </div>
        </div>
      </div>
      {/* Custom Hexagon Shape */}
      <style jsx>{`
        .clip-path-hexagon {
          width: 100%;
          height: 100%;
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
          position: relative;
          background-color: white;
          transition: background-color 0.3s ease-in-out;
        }

        /* Custom background color for hover-out */
        .animate-hexagon-reset {
          animation: hexagon-out 0.8s forwards;
        }

        @keyframes hexagon-out {
          0% {
            background-color: white;
          }
          10% {
            background-color: #1887c9; /* Updated background color */
          }
          100% {
            background-color: white;
          }
        }
      `}</style>
    </div>
  );
};
export default Hexagon;
