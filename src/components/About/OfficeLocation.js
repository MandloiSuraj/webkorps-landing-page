import React from "react";
import BangaloreOffice from "../../assets/images/banglore-office.jpg";
import puneOffice from "../../assets/images/pune-office.jpg";

export default function OfficeLocation() {
  const offices = [
    {
      location: "Indore, India (HQ)",
      address:
        "4th Floor, Winway World Offices,Vijay Nagar, Indore, Madhya Pradesh 452010",
      imgSrc: "https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-office-indore.webp",
      email: "hr@webkorps.com",
      region: "Asia Pacific",
      altText: "webkorps-office-indore"

    },
    {
      location: "Pune, India",
      address:
        "Trios Co-working, 3rd floor, Lalwani Icon, off New Airport Road, Sakore Nagar, Viman Nagar, Pune, Maharashtra 411014",
      imgSrc: puneOffice,
      email: "hr@webkorps.com",
      region: "Asia Pacific",
      altText: 'webkorps-office-pune'
    },
    {
      location: "Bangalore, India",
      address: "7th Floor, Commerce Mantri, 12, 1 & 2, Bannerghatta Road, BTM 2nd Stage, BTM Layout, Bengaluru, Karnataka 560076",
      imgSrc: BangaloreOffice,
      email: "hr@webkorps.com",
      region: "Asia Pacific",
      altText: 'webkorps-office-bangalore'
    },
    {
      location: "Frisco, TX",
      address:
        "6160 Warren Parkway,Suite 100 Frisco,<br/>  Texas 75034",
      imgSrc: "https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-office-usa.jpg",
      email: "hr@webkorps.com",
      region: "USA",
      altText: "webkorps-office-usa"
    },
    {
      location: "Sheridan, WY",
      address:
        "1309 Coffeen Ave,STE B1, Sheridan,<br/>  WY 82801",
      imgSrc: "https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-office-usa-sheridan.jpg",
      email: "hr@webkorps.com",
      region: "USA",
      altText: "webkorps-office-usa"
    },
  ];

  const groupedOffices = offices.reduce((acc, office) => {
    if (!acc[office.region]) {
      acc[office.region] = [];
    }
    acc[office.region].push(office);
    return acc;
  }, {});

  return <React.Fragment>
    <div className="relative w-full bg-gradient-to-r from-[#005baa] via-[#126eb7] to-[#4aa8dd] py-[4rem] px-[50px] font-inter">
      <div className="flex flex-col justify-center border border-gray-300 shadow-custom-lg bg-white rounded-[40px] py-[3rem] text-center">
        <div className=" w-full  px-[3%] xl:px-[30px] ipad-pro:px-[30px]">
          <h2 className="text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] font-bold  leading-[56.2px] text-black mb-3 ">Webkorps Across the Globe </h2>
        </div>
        <div className="gap-[3rem] flex flex-col xl:flex-row ipad-pro:flex-col px-[3%] xl:px-[30px] ipad-pro:px-[30px]"
        >
          {/* <div className="w-full hidden xl:block md:block">
            <div className="flex flex-row gap-6  justify-between w-[83%]">
              {['Asia Pacific', 'USA'].map((region) => (
                <p className="text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[56px] font-bold text-black sm:pl-2 md:pl-0 xl:pl-2">{region}</p>

              ))}
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-[1rem] overflow-x-auto py-4 xl:px-0 px-2 md:px-2">
              {offices.map((office, index) => (
                <div key={index} className="bg-white border border-gray-300 shadow-md overflow-hidden w-full md:w-[50%] min-h-[320px] rounded-xl">
                  <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy" src={office.imgSrc} alt={office.altText} className="w-full h-[10rem] " />
                  <div className="p-2 md:p-4">
                    <p className="text-[19px] leading-[26px] font-bold mb-2">{office.location}</p>
                    <div className="flex items-start gap-2">
                      <div className="w-[30px] flex-shrink-0">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 13.5C11.2583 13.5 10.5333 13.2801 9.91661 12.868C9.29993 12.456 8.81928 11.8703 8.53545 11.1851C8.25162 10.4998 8.17736 9.74584 8.32206 9.01841C8.46675 8.29098 8.8239 7.6228 9.34835 7.09835C9.8728 6.5739 10.541 6.21675 11.2684 6.07206C11.9958 5.92736 12.7498 6.00162 13.4351 6.28545C14.1203 6.56928 14.706 7.04993 15.118 7.66661C15.5301 8.2833 15.75 9.00832 15.75 9.75C15.7488 10.7442 15.3533 11.6973 14.6503 12.4003C13.9473 13.1033 12.9942 13.4988 12 13.5ZM12 7.5C11.555 7.5 11.12 7.63196 10.75 7.8792C10.38 8.12643 10.0916 8.47783 9.92127 8.88896C9.75098 9.3001 9.70642 9.7525 9.79323 10.189C9.88005 10.6254 10.0943 11.0263 10.409 11.341C10.7237 11.6557 11.1246 11.87 11.561 11.9568C11.9975 12.0436 12.4499 11.999 12.861 11.8287C13.2722 11.6584 13.6236 11.37 13.8708 11C14.118 10.63 14.25 10.195 14.25 9.75C14.2494 9.15345 14.0122 8.5815 13.5903 8.15967C13.1685 7.73784 12.5966 7.5006 12 7.5Z"
                            fill="#1887C9"
                          />
                          <path
                            d="M12 22.5L5.67301 15.0382C5.58509 14.9262 5.49809 14.8135 5.41201 14.7C4.33179 13.276 3.74799 11.5373 3.75001 9.75C3.75001 7.56196 4.6192 5.46354 6.16637 3.91637C7.71355 2.36919 9.81197 1.5 12 1.5C14.188 1.5 16.2865 2.36919 17.8336 3.91637C19.3808 5.46354 20.25 7.56196 20.25 9.75C20.2517 11.5365 19.6682 13.2743 18.5888 14.6978L18.588 14.7C18.588 14.7 18.363 14.9955 18.3293 15.0353L12 22.5ZM6.60975 13.7963C6.60975 13.7963 6.7845 14.0272 6.82425 14.0767L12 20.181L17.1825 14.0685C17.2155 14.0272 17.391 13.7948 17.3918 13.794C18.2747 12.6309 18.7518 11.2103 18.75 9.75C18.75 7.95979 18.0388 6.2429 16.773 4.97703C15.5071 3.71116 13.7902 3 12 3C10.2098 3 8.4929 3.71116 7.22703 4.97703C5.96116 6.2429 5.25001 7.95979 5.25001 9.75C5.24815 11.2112 5.72584 12.6327 6.60975 13.7963Z"
                            fill="#1887C9"
                          />
                        </svg>
                      </div>
                      <p
                        className="text-[13px] leading-[18px] text-gray-700  text-left flex-1"
                        dangerouslySetInnerHTML={{ __html: office.address }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* <div className=" gap-3 flex  flex-col block xl:hidden md:hidden mt-5">
            <div className="w-full xl:w-[70%] ipad-pro:w-full">
              <p className="text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[56px] font-bold text-black sm:pl-2 md:pl-0 xl:pl-2">Asia Pacific</p>
              <div className="flex flex-col md:flex-row gap-6 md:gap-0 md:space-x-4 overflow-x-auto">
                {groupedOffices["Asia Pacific"].map((office, index) => (
                  <div key={index} className="bg-white  shadow-md overflow-hidden w-full md:w-[50%] h-[350px] ">
                    <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy" src={office.imgSrc} alt={office.altText} className="w-full h-48 " />
                    <div className="p-2 md:p-4">
                      <p className="text-[19px] leading-[26px] font-bold mb-2">{office.location}</p>
                      <div className="flex flex-col md:flex-row text-center md:text-left items-center md:items-start gap-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 13.5C11.2583 13.5 10.5333 13.2801 9.91661 12.868C9.29993 12.456 8.81928 11.8703 8.53545 11.1851C8.25162 10.4998 8.17736 9.74584 8.32206 9.01841C8.46675 8.29098 8.8239 7.6228 9.34835 7.09835C9.8728 6.5739 10.541 6.21675 11.2684 6.07206C11.9958 5.92736 12.7498 6.00162 13.4351 6.28545C14.1203 6.56928 14.706 7.04993 15.118 7.66661C15.5301 8.2833 15.75 9.00832 15.75 9.75C15.7488 10.7442 15.3533 11.6973 14.6503 12.4003C13.9473 13.1033 12.9942 13.4988 12 13.5ZM12 7.5C11.555 7.5 11.12 7.63196 10.75 7.8792C10.38 8.12643 10.0916 8.47783 9.92127 8.88896C9.75098 9.3001 9.70642 9.7525 9.79323 10.189C9.88005 10.6254 10.0943 11.0263 10.409 11.341C10.7237 11.6557 11.1246 11.87 11.561 11.9568C11.9975 12.0436 12.4499 11.999 12.861 11.8287C13.2722 11.6584 13.6236 11.37 13.8708 11C14.118 10.63 14.25 10.195 14.25 9.75C14.2494 9.15345 14.0122 8.5815 13.5903 8.15967C13.1685 7.73784 12.5966 7.5006 12 7.5Z" fill="#1887C9" />
                        <path d="M12 22.5L5.67301 15.0382C5.58509 14.9262 5.49809 14.8135 5.41201 14.7C4.33179 13.276 3.74799 11.5373 3.75001 9.75C3.75001 7.56196 4.6192 5.46354 6.16637 3.91637C7.71355 2.36919 9.81197 1.5 12 1.5C14.188 1.5 16.2865 2.36919 17.8336 3.91637C19.3808 5.46354 20.25 7.56196 20.25 9.75C20.2517 11.5365 19.6682 13.2743 18.5888 14.6978L18.588 14.7C18.588 14.7 18.363 14.9955 18.3293 15.0353L12 22.5ZM6.60975 13.7963C6.60975 13.7963 6.7845 14.0272 6.82425 14.0767L12 20.181L17.1825 14.0685C17.2155 14.0272 17.391 13.7948 17.3918 13.794C18.2747 12.6309 18.7518 11.2103 18.75 9.75C18.75 7.95979 18.0388 6.2429 16.773 4.97703C15.5071 3.71116 13.7902 3 12 3C10.2098 3 8.4929 3.71116 7.22703 4.97703C5.96116 6.2429 5.25001 7.95979 5.25001 9.75C5.24815 11.2112 5.72584 12.6327 6.60975 13.7963Z" fill="#1887C9" />
                      </svg>
                        <p className="text-[13px] leading-[18px] text-gray-700  w-full md:w-[70%]">{office.address} </p></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full xl:w-[35%] ipad-pro:w-[50%] md:w-[50%]">
            <p className="text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[56px] font-bold text-black sm:pl-2 md:pl-0 xl:pl-2">USA</p>
              <div className="bg-white  shadow-md overflow-hidden h-[350px]">
                <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy" src={groupedOffices["USA"][0].imgSrc} alt={groupedOffices["USA"][0].altText} className="w-full h-48 " />
                <div className="p-2 md:p-4">
                  <p className="text-[19px] leading-[26px] font-bold mb-2">{groupedOffices["USA"][0].location}</p>
                  <div className="flex flex-col md:flex-row text-center items-center md:items-start  gap-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 13.5C11.2583 13.5 10.5333 13.2801 9.91661 12.868C9.29993 12.456 8.81928 11.8703 8.53545 11.1851C8.25162 10.4998 8.17736 9.74584 8.32206 9.01841C8.46675 8.29098 8.8239 7.6228 9.34835 7.09835C9.8728 6.5739 10.541 6.21675 11.2684 6.07206C11.9958 5.92736 12.7498 6.00162 13.4351 6.28545C14.1203 6.56928 14.706 7.04993 15.118 7.66661C15.5301 8.2833 15.75 9.00832 15.75 9.75C15.7488 10.7442 15.3533 11.6973 14.6503 12.4003C13.9473 13.1033 12.9942 13.4988 12 13.5ZM12 7.5C11.555 7.5 11.12 7.63196 10.75 7.8792C10.38 8.12643 10.0916 8.47783 9.92127 8.88896C9.75098 9.3001 9.70642 9.7525 9.79323 10.189C9.88005 10.6254 10.0943 11.0263 10.409 11.341C10.7237 11.6557 11.1246 11.87 11.561 11.9568C11.9975 12.0436 12.4499 11.999 12.861 11.8287C13.2722 11.6584 13.6236 11.37 13.8708 11C14.118 10.63 14.25 10.195 14.25 9.75C14.2494 9.15345 14.0122 8.5815 13.5903 8.15967C13.1685 7.73784 12.5966 7.5006 12 7.5Z" fill="#1887C9" />
                    <path d="M12 22.5L5.67301 15.0382C5.58509 14.9262 5.49809 14.8135 5.41201 14.7C4.33179 13.276 3.74799 11.5373 3.75001 9.75C3.75001 7.56196 4.6192 5.46354 6.16637 3.91637C7.71355 2.36919 9.81197 1.5 12 1.5C14.188 1.5 16.2865 2.36919 17.8336 3.91637C19.3808 5.46354 20.25 7.56196 20.25 9.75C20.2517 11.5365 19.6682 13.2743 18.5888 14.6978L18.588 14.7C18.588 14.7 18.363 14.9955 18.3293 15.0353L12 22.5ZM6.60975 13.7963C6.60975 13.7963 6.7845 14.0272 6.82425 14.0767L12 20.181L17.1825 14.0685C17.2155 14.0272 17.391 13.7948 17.3918 13.794C18.2747 12.6309 18.7518 11.2103 18.75 9.75C18.75 7.95979 18.0388 6.2429 16.773 4.97703C15.5071 3.71116 13.7902 3 12 3C10.2098 3 8.4929 3.71116 7.22703 4.97703C5.96116 6.2429 5.25001 7.95979 5.25001 9.75C5.24815 11.2112 5.72584 12.6327 6.60975 13.7963Z" fill="#1887C9" />
                  </svg><p className="text-[13px] leading-[18px] text-gray-700  text-left" dangerouslySetInnerHTML={{ __html: groupedOffices["USA"][0].address }} /></div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="relative  w-full pb-6 md:pb-10 md:pb-[50px] flex flex-col justify-center text-center items-center" >
            <div className="   gap-3 flex  flex-col xl:flex-col  ipad-pro:flex-col mt-5">
              <div className="w-full ">
                <p className="text-[36px] md:text-[40px] leading-[56px] font-bold  mb-3">India Offices</p>
                <div className="flex flex-col md:flex-row gap-6 md:gap-4 md:space-x-4 overflow-x-auto  justify-center text-center items-center">
                  {groupedOffices["Asia Pacific"].map((office, index) => (
                   <div key={index} className="bg-white border border-gray-300 shadow-md overflow-hidden w-full md:w-[31.6%] min-h-[320px] rounded-xl">
                   <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
          (max-width: 1280px) 50vw, 
          33vw" loading="lazy" src={office.imgSrc} alt={office.altText} className="w-full h-[10rem] " />
                   <div className="p-2 md:p-4">
                     <p className="text-[19px] leading-[26px] font-bold mb-2">{office.location}</p>
                     <div className="flex items-start gap-2">
                       <div className="w-[30px] flex-shrink-0">
                         <svg
                           width="24px"
                           height="24px"
                           viewBox="0 0 24 24"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                         >
                           <path
                             d="M12 13.5C11.2583 13.5 10.5333 13.2801 9.91661 12.868C9.29993 12.456 8.81928 11.8703 8.53545 11.1851C8.25162 10.4998 8.17736 9.74584 8.32206 9.01841C8.46675 8.29098 8.8239 7.6228 9.34835 7.09835C9.8728 6.5739 10.541 6.21675 11.2684 6.07206C11.9958 5.92736 12.7498 6.00162 13.4351 6.28545C14.1203 6.56928 14.706 7.04993 15.118 7.66661C15.5301 8.2833 15.75 9.00832 15.75 9.75C15.7488 10.7442 15.3533 11.6973 14.6503 12.4003C13.9473 13.1033 12.9942 13.4988 12 13.5ZM12 7.5C11.555 7.5 11.12 7.63196 10.75 7.8792C10.38 8.12643 10.0916 8.47783 9.92127 8.88896C9.75098 9.3001 9.70642 9.7525 9.79323 10.189C9.88005 10.6254 10.0943 11.0263 10.409 11.341C10.7237 11.6557 11.1246 11.87 11.561 11.9568C11.9975 12.0436 12.4499 11.999 12.861 11.8287C13.2722 11.6584 13.6236 11.37 13.8708 11C14.118 10.63 14.25 10.195 14.25 9.75C14.2494 9.15345 14.0122 8.5815 13.5903 8.15967C13.1685 7.73784 12.5966 7.5006 12 7.5Z"
                             fill="#1887C9"
                           />
                           <path
                             d="M12 22.5L5.67301 15.0382C5.58509 14.9262 5.49809 14.8135 5.41201 14.7C4.33179 13.276 3.74799 11.5373 3.75001 9.75C3.75001 7.56196 4.6192 5.46354 6.16637 3.91637C7.71355 2.36919 9.81197 1.5 12 1.5C14.188 1.5 16.2865 2.36919 17.8336 3.91637C19.3808 5.46354 20.25 7.56196 20.25 9.75C20.2517 11.5365 19.6682 13.2743 18.5888 14.6978L18.588 14.7C18.588 14.7 18.363 14.9955 18.3293 15.0353L12 22.5ZM6.60975 13.7963C6.60975 13.7963 6.7845 14.0272 6.82425 14.0767L12 20.181L17.1825 14.0685C17.2155 14.0272 17.391 13.7948 17.3918 13.794C18.2747 12.6309 18.7518 11.2103 18.75 9.75C18.75 7.95979 18.0388 6.2429 16.773 4.97703C15.5071 3.71116 13.7902 3 12 3C10.2098 3 8.4929 3.71116 7.22703 4.97703C5.96116 6.2429 5.25001 7.95979 5.25001 9.75C5.24815 11.2112 5.72584 12.6327 6.60975 13.7963Z"
                             fill="#1887C9"
                           />
                         </svg>
                       </div>
                       <p
                         className="text-[13px] leading-[18px] text-gray-700   flex-1"
                         dangerouslySetInnerHTML={{ __html: office.address }}
                       />
                     </div>
                   </div>
                 </div>
                  ))}
                </div>
              </div>
              <div className="w-full ">
                <p className="text-[36px] md:text-[40px] leading-[56px] font-bold  mb-3">USA Offices</p>
                <div className="flex flex-col md:flex-row gap-6 md:gap-4 md:space-x-4 overflow-x-auto  justify-center text-center items-center">
                  {groupedOffices["USA"].map((office, index) => (
                     <div key={index} className="bg-white border border-gray-300 shadow-md overflow-hidden w-full md:w-[31.6%] min-h-[320px] rounded-xl">
                     <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
            (max-width: 1280px) 50vw, 
            33vw" loading="lazy" src={office.imgSrc} alt={office.altText} className="w-full h-[10rem] " />
                     <div className="p-2 md:p-4">
                       <p className="text-[19px] leading-[26px] font-bold mb-2">{office.location}</p>
                       <div className="flex items-center justify-center text-center  gap-2">
                         <div className="w-[30px] flex-shrink-0">
                           <svg
                             width="24px"
                             height="24px"
                             viewBox="0 0 24 24"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg"
                           >
                             <path
                               d="M12 13.5C11.2583 13.5 10.5333 13.2801 9.91661 12.868C9.29993 12.456 8.81928 11.8703 8.53545 11.1851C8.25162 10.4998 8.17736 9.74584 8.32206 9.01841C8.46675 8.29098 8.8239 7.6228 9.34835 7.09835C9.8728 6.5739 10.541 6.21675 11.2684 6.07206C11.9958 5.92736 12.7498 6.00162 13.4351 6.28545C14.1203 6.56928 14.706 7.04993 15.118 7.66661C15.5301 8.2833 15.75 9.00832 15.75 9.75C15.7488 10.7442 15.3533 11.6973 14.6503 12.4003C13.9473 13.1033 12.9942 13.4988 12 13.5ZM12 7.5C11.555 7.5 11.12 7.63196 10.75 7.8792C10.38 8.12643 10.0916 8.47783 9.92127 8.88896C9.75098 9.3001 9.70642 9.7525 9.79323 10.189C9.88005 10.6254 10.0943 11.0263 10.409 11.341C10.7237 11.6557 11.1246 11.87 11.561 11.9568C11.9975 12.0436 12.4499 11.999 12.861 11.8287C13.2722 11.6584 13.6236 11.37 13.8708 11C14.118 10.63 14.25 10.195 14.25 9.75C14.2494 9.15345 14.0122 8.5815 13.5903 8.15967C13.1685 7.73784 12.5966 7.5006 12 7.5Z"
                               fill="#1887C9"
                             />
                             <path
                               d="M12 22.5L5.67301 15.0382C5.58509 14.9262 5.49809 14.8135 5.41201 14.7C4.33179 13.276 3.74799 11.5373 3.75001 9.75C3.75001 7.56196 4.6192 5.46354 6.16637 3.91637C7.71355 2.36919 9.81197 1.5 12 1.5C14.188 1.5 16.2865 2.36919 17.8336 3.91637C19.3808 5.46354 20.25 7.56196 20.25 9.75C20.2517 11.5365 19.6682 13.2743 18.5888 14.6978L18.588 14.7C18.588 14.7 18.363 14.9955 18.3293 15.0353L12 22.5ZM6.60975 13.7963C6.60975 13.7963 6.7845 14.0272 6.82425 14.0767L12 20.181L17.1825 14.0685C17.2155 14.0272 17.391 13.7948 17.3918 13.794C18.2747 12.6309 18.7518 11.2103 18.75 9.75C18.75 7.95979 18.0388 6.2429 16.773 4.97703C15.5071 3.71116 13.7902 3 12 3C10.2098 3 8.4929 3.71116 7.22703 4.97703C5.96116 6.2429 5.25001 7.95979 5.25001 9.75C5.24815 11.2112 5.72584 12.6327 6.60975 13.7963Z"
                               fill="#1887C9"
                             />
                           </svg>
                         </div>
                         <p
                           className="text-[13px] leading-[18px] text-gray-700   flex-1"
                           dangerouslySetInnerHTML={{ __html: office.address }}
                         />
                       </div>
                     </div>
                   </div>
                  ))}
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

    </div>
  </React.Fragment>
}