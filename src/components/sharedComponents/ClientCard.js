import React, { useEffect, useRef, useState } from 'react'
import { ClientsImg, ClientsImg2 } from './clinetsImage';
function ClientCard({bgColor, heading ,description}) {

  const [isPaused, setIsPaused] = useState(false);
  const webScrollRef = useRef(null);
  const mobScrollRef = useRef(null);


  const ClientsImgLoop = [...ClientsImg, ...ClientsImg];
  const ClientsImg2Loop = [...ClientsImg2, ...ClientsImg2];
  const handleScroll = () => {
    if (webScrollRef.current.scrollLeft <= webScrollRef.current.scrollWidth / 2) {
      webScrollRef.current.scrollLeft =  webScrollRef.current.scrollWidth;
    }
  };
const handleMobScroll = () => {
  if (mobScrollRef.current.scrollLeft >= mobScrollRef.current.scrollWidth / 2) {
    mobScrollRef.current.scrollLeft = 0;
  }
};

  useEffect(() => {
    const scrollContainer = webScrollRef.current;

    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [])
  useEffect(() => {
  const mobContainer = mobScrollRef.current;

  if (mobContainer) {
    mobContainer.addEventListener('scroll', handleMobScroll);
  }

  return () => {
    if (mobContainer) {
      mobContainer.removeEventListener('scroll', handleMobScroll);
    }
  };
}, []);
  useEffect(() => {
    let webScrollInterval;
    let mobScrollInterval;

    if (!isPaused) {
      if (webScrollRef.current && webScrollRef.current.scrollWidth > webScrollRef.current.clientWidth) {
        webScrollInterval = setInterval(() => {
          if (webScrollRef.current.scrollLeft <= 0) {
            webScrollRef.current.scrollLeft = webScrollRef.current.scrollWidth; // Reset to rightmost position
          } else {
            webScrollRef.current.scrollLeft -= 2; // Move right to left
          }
        }, 50);
      }

      if (mobScrollRef.current && mobScrollRef.current.scrollWidth > mobScrollRef.current.clientWidth) {
        mobScrollInterval = setInterval(() => {
          if (mobScrollRef.current.scrollLeft >= mobScrollRef.current.scrollWidth - mobScrollRef.current.clientWidth) {
            mobScrollRef.current.scrollLeft = 0; // Reset to leftmost position
          } else {
            mobScrollRef.current.scrollLeft += 2; // Move left to right
          }
        }, 50);
      }
    }

    return () => {
      clearInterval(webScrollInterval);
      clearInterval(mobScrollInterval);
    };
  }, [isPaused]);
  return (
    <div className={`w-auto h-auto py-[4rem] ${bgColor}`}>
      <div className="font-inter overflow-hidden mx-[7%] md:mx-[7%] xl:mx-[50px] ipad-pro:mx-[50px] justify-center pt-16 shadow-custom-lg rounded-[20px] bg-white">
        <div className="content  w-full text-center text-black ">
          <div className="w-full text-center px-[3%] xl:px-[30px] ipad-pro:px-[30px]" data-aos="fade-left">
            <h2 className=" font-bold text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem]  text-[#061C3D]"
              dangerouslySetInnerHTML={{ __html: heading }}
            >
            </h2>
            <p className=" font-normal text-[0.9375rem] xl:text-[1.15rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] pt-[30px] text-gray-700">
              {description}
            </p>
          </div>
        </div>
        <div className="content  xl:px-[30px]  ipad-pro:px-[30px] px-[3%] text-center flex flex-col    ">
            <div
              ref={webScrollRef}
              className="w-full flex gap-[1.5rem] overflow-x-auto scrollbar-hidden h-[100%] pt-[30px]"
              onKeyDown={(e) => {
                if (e.key === 'ArrowRight') webScrollRef.current.scrollLeft += 50;
                if (e.key === 'ArrowLeft') webScrollRef.current.scrollLeft -= 50;
              }}
              tabIndex={0}
            >
              {ClientsImgLoop.map((image) => (
                <div key={image.id} className="flex justify-center justify-items-center" onMouseEnter={() => {
                  setIsPaused(true);
                }}
                  onMouseLeave={() => {
                    setIsPaused(false);
                  }}>
                  <div className="w-[200px] h-[95px]  xl:h-[120px] md:h-[120px] ipad-pro:h-[120px] ipad-sum:h-[120px]  rounded-lg   flex justify-center items-center">
                    <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"
                      src={image.src}
                      alt={image.alt}
                      className={`h-auto w-auto max-w-[100%]  ${image.fill ? 'filter invert' : ''}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div
              ref={mobScrollRef}
              className="w-full flex gap-[1.5rem]  overflow-x-auto scrollbar-hidden h-[100%] pb-[30px]"
              onKeyDown={(e) => {
                if (e.key === 'ArrowRight') mobScrollRef.current.scrollLeft += 50;
                if (e.key === 'ArrowLeft') mobScrollRef.current.scrollLeft -= 50;
              }}
              tabIndex={0}
            >              {ClientsImg2Loop.map((image) => (
              <div key={image.id} className="flex justify-center justify-items-center " onMouseEnter={() => {
                setIsPaused(true);
              }}
                onMouseLeave={() => {
                  setIsPaused(false);
                }}>
                <div className="w-[200px] h-[95px]  xl:h-[120px] md:h-[120px] ipad-pro:h-[120px] ipad-sum:h-[120px]  rounded-lg  flex justify-center items-center ">
                  <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"
                    src={image.src}
                    alt={image.alt}
                    className={`h-auto w-auto max-w-[100%] ${image.fill ? 'filter invert' : ''}`}
                  />
                </div>
              </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default ClientCard