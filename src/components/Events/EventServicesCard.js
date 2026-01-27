import React from "react";

const Card = ({ image, name, position, id }) => {
  return (
    <div
      className="relative xl:w-[384px]  md:w-[100%] ipad-pro:w-[100%] h-[335px] overflow-hidden bg-black group"
      onClick={() => {
        window.open(`/case-study/${id}`, "_blank");
      }}
    >
      <div className="card-image-container relative w-full h-full transition-transform duration-300">
        <img
          width="800"
          height="600"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          loading="lazy"
          src={image}
          alt="card background"
          className="xl:w-[384px]  md:w-[100%] ipad-pro:w-[100%] h-[247px] transition-transform duration-300"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-[#1887C9] text-white p-4 h-[88px] flex items-center justify-between opacity-100 shadow-lg">
        <div className="text-left">
          <p className="text-white font-quicksand font-bold text-[16px] leading-[20px]">
            {name}
          </p>
          <p className="text-white font-quicksand text-[14px] leading-[18px]">
            {position}
          </p>
        </div>
      </div>
    </div>
  );
};

const EventServicesCard = ({ event, currentPage, setCurrentPage }) => {
  const itemsPerPage = 4;

  const totalPages = Math.ceil(event.length / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleCards = event.slice(startIndex, startIndex + itemsPerPage);

  const filledCards = [...visibleCards];
  while (filledCards.length < itemsPerPage) {
    filledCards.push(null); // Add placeholder objects
  }

  return (
    <div className="content text-center items-center w-full xl:w-full xxl:w-full ipad-pro:w-[107%] md:w-[107%] ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 ipad-pro:grid-cols-2 gap-10 w-full">
        {filledCards.map((card, index) =>
          card ? (
            <Card
              key={index}
              image={card.image}
              name={card.title}
              position={card.industry}
              id={card.id}
            />
          ) : (
            <div
              key={index}
              className="relative w-full h-[335px] flex items-center justify-center"
            ></div>
          )
        )}
      </div>
      <div className="flex gap-[5px] xl:gap-[33px] xxl:gap-[70px]   items-center mt-6">
        <button
          onClick={handlePrevious}
          className={`w-[295px] h-[64px] bg-[#292E3D] text-white text-[16px] leading-[21px] ${
            currentPage === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#292E3D]"
          }`}
          disabled={currentPage === 0}
        >
        <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy" className="ms-1 inline-flex w-[10.5px] h-[10.5px]"
                      src="https://webkorps-app.s3.us-east-1.amazonaws.com/left-arrow.webp" alt="left-arrow" />   Back  
        </button>
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              className={`w-[16px] h-[16px] rounded-full ${
                index === currentPage ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
        <button
          onClick={handleNext}
          className={`w-[295px] h-[64px] bg-[#292E3D] text-white   text-[16px] leading-[21px] ${
            currentPage === totalPages - 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-[#292E3D]"
          }`}
          disabled={currentPage === totalPages - 1}
        >
          Next   <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy" className="ms-1 inline-flex w-[10.5px] h-[10.5px]"
                      src="https://webkorps-app.s3.us-east-1.amazonaws.com/right-arrow.webp" alt="right-arrow" />
        </button>
      </div>
    </div>
  );
};

export default EventServicesCard;
