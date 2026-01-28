"use client";
import React from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../Utility/AuthContext";

export default function Footer() {
  const { isAuthenticated } = useAuth(); // Assuming useAuth provides these
  const offices = [
    {
      location: "Indore, India (HQ)",
      address:
        "4th Floor, Winway World Offices, Vijay Nagar, Indore, \n Madhya Pradesh 452010",
    },
    {
      location: "Pune, India",
      address:
        "Trios Co-working, 3rd floor, Lalwani Icon, off New Airport Road, Sakore Nagar, Viman Nagar, Pune, Maharashtra 411014",
    },
    {
      location: "Bengaluru, India",
      address: "7th Floor, Commerce Mantri, 12, 1 & 2, Bannerghatta Road, BTM 2nd Stage, BTM Layout, Bengaluru, Karnataka 560076",
    },
    {
      location: "Frisco, TX",
      address: "6160 Warren Parkway, Suite 100 Frisco, Texas 75034",
    },
    {
      location: "Sheridan, WY",
      address:
        "1309 Coffeen Ave,STE B1, Sheridan, WY 82801",

    },
  ];

  return (
    <footer className="bg-[#11608F] text-white font-inter ">
      <div className="w-full px-[3%] xl:px-[30px] ipad-pro:px-[30px] pb-2 pt-[30px]">
        <div className="flex xl:flex-row ipad-pro:flex-col flex-col text-white">
          <div className="text-center md:text-left xl:text-left xl:w-[300px] ipad-pro:w-[400px] w-full">
            <img
              width="800"
              height="600"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              loading="lazy"
              src="/assets/webkorps.svg"
              alt="webkorps-logo"
              className="w-full max-w-[100%]"
            />
            <p className="text-sm font-light mt-4 pl-[5px]">
              Our dedicated team delivers unified insights and intelligent solutions
              for your business. Your trust is our commitment.
            </p>
          </div>
          <div className="text-center md:text-left xl:text-left xl:pl-[65px] pt-[10px] xl:w-[300px] ipad-pro:w-[400px] w-full">
            <p className="text-[18px] font-bold mb-8">Company</p>
            <ul className="text-sm font-light">
              <li className="mb-5">
                <Link to="/about-us" className="hover:text-[#64AFDB]">About Us</Link>
              </li>
              <li className="mb-5">
                <Link to="/join-us" className="hover:text-[#64AFDB]">Careers</Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left xl:text-left xl:pl-[30px] pt-[10px] xl:w-[300px] ipad-pro:w-[400px] w-full">
            <p className="text-[18px] font-bold mb-8">Events</p>
            <ul className="text-sm font-light">
              <li className="mb-5"><Link to="/event/ces" className="hover:text-[#64AFDB]">CES</Link></li>
              <li className="mb-5"><Link to="/event/indiasoft" className="hover:text-[#64AFDB]">IndiaSoft</Link></li>
              <li className="mb-5"><Link to="/event/inbound" className="hover:text-[#64AFDB]">Inbound</Link></li>
              <li className="mb-5"><Link to="/event/gitex-dubai" className="hover:text-[#64AFDB]">Gitex Dubai</Link></li>
              <li className="mb-5"><Link to="/event/mwc" className="hover:text-[#64AFDB]">MWC</Link></li>
            </ul>
          </div>
          <div className="text-center md:text-left xl:text-left pt-[10px] xl:w-[300px] ipad-pro:w-[400px] w-full">
            <p className="text-[18px] font-bold mb-8">Services</p>
            <ul className="text-sm font-light">
              <li className="mb-5"><Link to="/mobile-app-development" className="hover:text-[#64AFDB]">Mobile Development</Link></li>
              <li className="mb-5"><Link to="/web-development" className="hover:text-[#64AFDB]">Web Development</Link></li>
              <li className="mb-5"><Link to="/cloud-application-development" className="hover:text-[#64AFDB]">Cloud Solutions</Link></li>
              <li className="mb-5"><Link to="/ecommerce-development" className="hover:text-[#64AFDB]">E-Commerce Development</Link></li>
              <li className="mb-5"><Link to="/ai-ml-development" className="hover:text-[#64AFDB]">AI&ML services</Link></li>
            </ul>
          </div>
          <div className="text-center md:text-left xl:text-left xl:pl-[50px] pt-[10px] xl:w-[300px] ipad-pro:w-[400px] w-full">
            <p className="text-[18px] font-bold mb-8">Technology</p>
            <ul className="text-sm font-light">
              <li className="mb-5"><Link to="/technology/ruby-on-rails" className="hover:text-[#64AFDB]">RoR</Link></li>
              <li className="mb-5"><Link to="/technology/java" className="hover:text-[#64AFDB]">JAVA</Link></li>
              <li className="mb-5"><Link to="/technology/android" className="hover:text-[#64AFDB]">Android</Link></li>
              <li className="mb-5"><Link to="/technology/python" className="hover:text-[#64AFDB]">Python</Link></li>
              <li className="mb-5"><Link to="/technology/ios" className="hover:text-[#64AFDB]">IOS</Link></li>
            </ul>
          </div>
          <div className="text-center md:text-left xl:text-left pt-[10px] xl:w-[300px] ipad-pro:w-[400px] w-full xl:pl-[40px]">
            <p className="text-[18px] font-bold mb-8">Industry</p>
            <ul className="text-sm font-light">
              <li className="mb-5"><Link to="/industry/logistic" className="hover:text-[#64AFDB]">Logistic Industry</Link></li>
              <li className="mb-5"><Link to="/industry/healthcare" className="hover:text-[#64AFDB]">HealthCare</Link></li>
              <li className="mb-5"><Link to="/industry/fintech" className="hover:text-[#64AFDB]">FinTech</Link></li>
              <li className="mb-5"><Link to="/industry/real-estate" className="hover:text-[#64AFDB]">Real Estate</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-[#2E4E73] mt-[2rem] mb-6"></div>

        <div className="flex flex-row text-center md:text-left xl:text-left pt-[10px] w-full">
          <div className="text-center md:text-left xl:text-left ">
            <div className="flex xl:flex-row ipad-pro:flex-col flex-col text-center md:text-left xl:text-left">
              <p className="text-[25px] font-bold mb-8 xl:w-[22%] ipad-pro:w-[22%] w-full">
                <span className="text-[43px] leading-[42px]">Webkorps</span> <br /> Across the Globe
              </p>
              <div className="flex flex-wrap justify-between text-center md:text-left xl:text-left w-full">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className={`w-full sm:w-1/2 lg:w-[20%] px-3 ${index !== offices.length - 1 ? "border-r border-white" : ""}`}
                  >
                    <h3 className="text-lg font-bold uppercase">{office.location}</h3>
                    <p className="text-sm font-light mt-2">{office.address}</p>
                    <p className="text-sm font-light mt-2">{office.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-[#2E4E73] mt-[2rem] mb-2"></div>

        <div className="text-white flex flex-col xl:flex-row ipad-pro:flex-row md:flex-col gap-5 items-center justify-between">
          <div className="text-center text-white">
            <ul className="font-medium">
              <li className="mb-2 text-center block md:inline pr-0 md:pr-9">
                <a
                  href="https://www.termsfeed.com/live/721358c0-4ce0-42ca-86b9-9d7dd9029291"
                  className="hover:underline font-extralight text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms & privacy
                </a>
              </li>
              <li className="mb-2 block md:inline pr-0 md:pr-9">
                {isAuthenticated ? (
                  <Link to="/job-openings" className="hover:underline font-extralight text-white">
                    Admin Login
                  </Link>
                ) : (
                  <Link to="/login" className="hover:underline font-extralight text-white">
                    Admin Login
                  </Link>
                )}
              </li>
              <li className="mb-2 text-center block pr-0 md:pr-9 md:inline">
                <a
                  onClick={(e) => e.preventDefault()}
                  title="coming soon"
                  className="font-extralight text-white cursor-default"
                >
                  ©2025 Webkorps.
                </a>
              </li>
            </ul>
          </div>

          <div className="flex justify-center text-center items-center space-x-7">
            <a href="https://www.facebook.com/WebKorps/" className="text-white" target="_blank" rel="noopener noreferrer">
              <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.12935 7.30639C2.08237 7.30639 1.04872 7.30639 0.578886 7.30639C0.328306 7.30639 0.25 7.21242 0.25 6.9775C0.25 6.35105 0.25 5.70894 0.25 5.08249C0.25 4.83191 0.343968 4.7536 0.578886 4.7536H2.12935C2.12935 4.70662 2.12935 3.79827 2.12935 3.37541C2.12935 2.74896 2.23898 2.15384 2.5522 1.60569C2.88109 1.04189 3.35093 0.666018 3.94606 0.44676C4.33759 0.305809 4.72912 0.243164 5.15197 0.243164H6.68677C6.90603 0.243164 7 0.337132 7 0.556389V2.34177C7 2.56103 6.90603 2.655 6.68677 2.655C6.26392 2.655 5.84107 2.655 5.41821 2.67066C4.99536 2.67066 4.7761 2.87425 4.7761 3.31277C4.76044 3.78261 4.7761 4.23678 4.7761 4.72228H6.59281C6.84339 4.72228 6.93735 4.81625 6.93735 5.06683V6.96184C6.93735 7.21242 6.85905 7.29073 6.59281 7.29073C6.029 7.29073 4.82309 7.29073 4.7761 7.29073V12.3963C4.7761 12.6625 4.6978 12.7565 4.41589 12.7565C3.75812 12.7565 3.11601 12.7565 2.45824 12.7565C2.22332 12.7565 2.12935 12.6625 2.12935 12.4276C2.12935 10.7832 2.12935 7.35337 2.12935 7.30639Z" fill="#F7F7EE" />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="https://www.linkedin.com/company/webkorps" className="text-white" target="_blank" rel="noopener noreferrer">
              <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9971 12.1248V12.1243H11.9999V7.98539C11.9999 5.96061 11.5684 4.40088 9.22517 4.40088C8.0987 4.40088 7.34275 5.02534 7.03413 5.61735H7.00155V4.58991H4.77979V12.1243H7.09325V8.39354C7.09325 7.41125 7.27758 6.4614 8.48179 6.4614C9.66832 6.4614 9.686 7.58241 9.686 8.45655V12.1248H11.9971Z" fill="#F7F7EE" />
                <path d="M0.917969 4.56934H3.26871V11.9574H0.917969V4.56934Z" fill="#F7F7EE" />
                <path d="M2.09328 0.875C1.35173 0.875 0.75 1.47392 0.75 2.21202C0.75 2.95012 1.35173 3.56157 2.09328 3.56157C2.83484 3.56157 3.43657 2.95012 3.43657 2.21202C3.4361 1.47392 2.83437 0.875 2.09328 0.875V0.875Z" fill="#F7F7EE" />
              </svg>
              <span className="sr-only">LinkedIn page</span>
            </a>
            <a href="https://x.com/webkorpsllc" className="text-white" target="_blank" rel="noopener noreferrer">
              <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.75 1.5467C12.2759 1.75469 11.7706 1.89255 11.2439 1.95948C11.7858 1.63595 12.1994 1.12755 12.3938 0.51475C11.8886 0.815969 11.3308 1.02873 10.7363 1.14747C10.2566 0.636672 9.57286 0.320312 8.82698 0.320312C7.37986 0.320312 6.21483 1.49491 6.21483 2.93486C6.21483 3.14205 6.23236 3.34127 6.27539 3.53092C4.10231 3.42494 2.17945 2.38342 0.887719 0.796844C0.662203 1.18811 0.529922 1.63595 0.529922 2.11806C0.529922 3.02331 0.996094 3.82577 1.69097 4.29034C1.27102 4.28237 0.859031 4.16045 0.51 3.96841C0.51 3.97638 0.51 3.98673 0.51 3.99709C0.51 5.26731 1.41605 6.32237 2.60419 6.56542C2.39142 6.62359 2.15953 6.65148 1.91887 6.65148C1.75153 6.65148 1.58259 6.64192 1.42402 6.60686C1.76269 7.642 2.72372 8.40302 3.86644 8.42772C2.97713 9.12339 1.84795 9.54255 0.625547 9.54255C0.411188 9.54255 0.205594 9.53298 0 9.50669C1.15786 10.2534 2.53008 10.6797 4.00987 10.6797C8.81981 10.6797 11.4495 6.69531 11.4495 3.24166C11.4495 3.12611 11.4455 3.01455 11.4399 2.90378C11.9587 2.53562 12.3946 2.07583 12.75 1.5467Z" fill="#F7F7EE" />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="https://www.instagram.com/webkorps" className="text-white" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.9989 8.75354C12.4387 8.75354 8.75831 12.4339 8.75831 16.9942C8.75831 21.5544 12.4387 25.2348 16.9989 25.2348C21.5592 25.2348 25.2396 21.5544 25.2396 16.9942C25.2396 12.4339 21.5592 8.75354 16.9989 8.75354ZM16.9989 22.35C14.0498 22.35 11.6431 19.9433 11.6431 16.9942C11.6431 14.0451 14.0498 11.6384 16.9989 11.6384C19.948 11.6384 22.3547 14.0451 22.3547 16.9942C22.3547 19.9433 19.948 22.35 16.9989 22.35ZM25.5771 6.4955C24.5123 6.4955 23.6525 7.35532 23.6525 8.42006C23.6525 9.48479 24.5123 10.3446 25.5771 10.3446C26.6418 10.3446 27.5016 9.48881 27.5016 8.42006C27.5019 8.16723 27.4524 7.91683 27.3558 7.68319C27.2592 7.44955 27.1174 7.23726 26.9386 7.05848C26.7599 6.87971 26.5476 6.73796 26.3139 6.64135C26.0803 6.54475 25.8299 6.49519 25.5771 6.4955ZM33.0623 16.9942C33.0623 14.7763 33.0824 12.5785 32.9579 10.3647C32.8333 7.79327 32.2467 5.51113 30.3664 3.63077C28.482 1.7464 26.2038 1.16381 23.6324 1.03925C21.4146 0.914699 19.2168 0.934789 17.003 0.934789C14.7851 0.934789 12.5873 0.914699 10.3735 1.03925C7.80206 1.16381 5.51992 1.75041 3.63956 3.63077C1.75519 5.51515 1.1726 7.79327 1.04804 10.3647C0.923489 12.5826 0.943578 14.7803 0.943578 16.9942C0.943578 19.208 0.923489 21.4098 1.04804 23.6236C1.1726 26.1951 1.7592 28.4772 3.63956 30.3576C5.52394 32.2419 7.80206 32.8245 10.3735 32.9491C12.5913 33.0736 14.7891 33.0535 17.003 33.0535C19.2208 33.0535 21.4186 33.0736 23.6324 32.9491C26.2038 32.8245 28.486 32.2379 30.3664 30.3576C32.2507 28.4732 32.8333 26.1951 32.9579 23.6236C33.0864 21.4098 33.0623 19.212 33.0623 16.9942ZM29.5266 26.4683C29.2333 27.1995 28.8797 27.7459 28.3132 28.3084C27.7467 28.875 27.2043 29.2285 26.473 29.5218C24.3597 30.3616 19.3413 30.1727 16.9989 30.1727C14.6565 30.1727 9.6342 30.3616 7.52081 29.5259C6.78956 29.2326 6.24313 28.879 5.68063 28.3125C5.11411 27.7459 4.76054 27.2035 4.46724 26.4723C3.63153 24.3549 3.82036 19.3366 3.82036 16.9942C3.82036 14.6518 3.63153 9.62943 4.46724 7.51604C4.76054 6.78479 5.11411 6.23836 5.68063 5.67586C6.24715 5.11336 6.78956 4.75577 7.52081 4.46247C9.6342 3.62675 14.6565 3.81559 16.9989 3.81559C19.3413 3.81559 24.3637 3.62675 26.4771 4.46247C27.2083 4.75577 27.7547 5.10934 28.3172 5.67586C28.8838 6.24238 29.2373 6.78479 29.5306 7.51604C30.3664 9.62943 30.1775 14.6518 30.1775 16.9942C30.1775 19.3366 30.3664 24.3549 29.5266 26.4683Z" fill="white" fillOpacity="0.85" />
              </svg>
              <span className="sr-only">Instagram page</span>
            </a>
            <a href="https://www.youtube.com/@webkorps" className="text-white" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36 13.8898C36 13.8014 36 13.7009 35.996 13.5844C35.992 13.259 35.9839 12.8933 35.9759 12.5036C35.9438 11.3826 35.8875 10.2657 35.7991 9.21297C35.6786 7.76253 35.5018 6.55315 35.2607 5.64512C35.0063 4.6975 34.5077 3.83326 33.8146 3.13876C33.1215 2.44427 32.2583 1.94385 31.3112 1.68753C30.1741 1.38217 27.9482 1.19333 24.8143 1.07681C23.3237 1.02056 21.7286 0.984403 20.1335 0.964313C19.575 0.956278 19.0567 0.95226 18.5906 0.948242H17.4094C16.9433 0.95226 16.425 0.956278 15.8665 0.964313C14.2714 0.984403 12.6763 1.02056 11.1857 1.07681C8.05179 1.19735 5.82187 1.38619 4.68884 1.68753C3.74143 1.94322 2.87787 2.44343 2.18469 3.13802C1.4915 3.83261 0.993054 4.69719 0.739286 5.64512C0.494196 6.55315 0.321429 7.76253 0.200893 9.21297C0.1125 10.2657 0.0562499 11.3826 0.0241071 12.5036C0.0120535 12.8933 0.00803565 13.259 0.0040178 13.5844C0.0040178 13.7009 0 13.8014 0 13.8898V14.1148C0 14.2032 -6.13675e-08 14.3036 0.0040178 14.4201C0.00803565 14.7456 0.0160714 15.1112 0.0241071 15.5009C0.0562499 16.6219 0.1125 17.7389 0.200893 18.7915C0.321429 20.242 0.498214 21.4514 0.739286 22.3594C1.25357 24.284 2.76429 25.8027 4.68884 26.317C5.82187 26.6224 8.05179 26.8112 11.1857 26.9277C12.6763 26.984 14.2714 27.0201 15.8665 27.0402C16.425 27.0482 16.9433 27.0523 17.4094 27.0563H18.5906C19.0567 27.0523 19.575 27.0482 20.1335 27.0402C21.7286 27.0201 23.3237 26.984 24.8143 26.9277C27.9482 26.8072 30.1781 26.6183 31.3112 26.317C33.2357 25.8027 34.7464 24.288 35.2607 22.3594C35.5058 21.4514 35.6786 20.242 35.7991 18.7915C35.8875 17.7389 35.9438 16.6219 35.9759 15.5009C35.9879 15.1112 35.992 14.7456 35.996 14.4201C35.996 14.3036 36 14.2032 36 14.1148V13.8898ZM33.1071 14.0987C33.1071 14.1831 33.1071 14.2755 33.1031 14.384C33.0991 14.6974 33.0911 15.0429 33.083 15.4165C33.0549 16.4853 32.9987 17.554 32.9143 18.5465C32.8058 19.8402 32.6531 20.9009 32.4643 21.6121C32.2152 22.5402 31.4839 23.2755 30.5598 23.5206C29.7161 23.7456 27.5906 23.9264 24.7018 24.0349C23.2393 24.0911 21.6643 24.1273 20.0933 24.1474C19.5429 24.1554 19.0326 24.1594 18.5746 24.1594H17.4254L15.9067 24.1474C14.3357 24.1273 12.7647 24.0911 11.2982 24.0349C8.40938 23.9223 6.27991 23.7456 5.44018 23.5206C4.51607 23.2715 3.78482 22.5402 3.53571 21.6121C3.34687 20.9009 3.1942 19.8402 3.08571 18.5465C3.00134 17.554 2.94911 16.4853 2.91696 15.4165C2.90491 15.0429 2.90089 14.6933 2.89688 14.384C2.89688 14.2755 2.89286 14.179 2.89286 14.0987V13.9058C2.89286 13.8215 2.89286 13.729 2.89688 13.6206C2.90089 13.3072 2.90893 12.9616 2.91696 12.588C2.94509 11.5192 3.00134 10.4505 3.08571 9.45806C3.1942 8.16431 3.34687 7.1036 3.53571 6.39244C3.78482 5.46431 4.51607 4.72905 5.44018 4.48396C6.28393 4.25896 8.40938 4.07815 11.2982 3.96967C12.7607 3.91342 14.3357 3.87726 15.9067 3.85717C16.4571 3.84913 16.9674 3.84512 17.4254 3.84512H18.5746L20.0933 3.85717C21.6643 3.87726 23.2353 3.91342 24.7018 3.96967C27.5906 4.08217 29.7201 4.25896 30.5598 4.48396C31.4839 4.73306 32.2152 5.46431 32.4643 6.39244C32.6531 7.1036 32.8058 8.16431 32.9143 9.45806C32.9987 10.4505 33.0509 11.5192 33.083 12.588C33.0951 12.9616 33.0991 13.3112 33.1031 13.6206C33.1031 13.729 33.1071 13.8255 33.1071 13.9058V14.0987ZM14.4241 19.3862L23.7455 13.9621L14.4241 8.61833V19.3862Z" fill="white" fillOpacity="0.85" />
              </svg>
              <span className="sr-only">Youtube page</span>
            </a>
            <a href="https://in.pinterest.com/webkorps" className="text-white" target="_blank" rel="noopener noreferrer">
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="18" height="28" viewBox="0 0 900 920" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0,920) scale(0.1,-0.1)" fill="white" stroke="none">
                  <path d="M4330 8423 c-424 -29 -657 -72 -991 -179 -1127 -363 -2036 -1271 -2403 -2399 -140 -432 -194 -798 -183 -1255 10 -420 66 -740 197 -1125 304 -893 958 -1655 1795 -2090 133 -70 150 -73 202 -39 55 35 58 49 64 329 8 341 -2 280 210 1180 28 121 57 245 64 275 7 30 27 116 45 190 83 347 108 471 121 608 14 144 7 303 -21 487 -33 209 -32 433 3 580 46 198 121 348 226 455 128 130 249 188 411 197 353 20 569 -243 530 -645 -16 -169 -40 -270 -158 -662 -179 -596 -196 -680 -169 -815 9 -42 30 -106 46 -142 58 -123 206 -247 353 -296 75 -24 275 -29 373 -8 314 65 569 259 765 581 199 328 296 689 307 1153 7 291 -18 474 -96 684 -157 425 -490 754 -917 906 -465 166 -1059 131 -1493 -87 -444 -224 -766 -633 -890 -1131 -116 -465 -30 -946 234 -1319 24 -33 35 -59 35 -83 0 -52 -110 -491 -127 -508 -71 -71 -373 145 -546 392 -151 215 -269 503 -328 803 -20 100 -23 146 -23 355 -1 187 3 264 18 350 66 400 205 743 419 1034 92 126 335 366 467 463 351 256 732 402 1230 474 228 33 600 37 805 9 300 -40 562 -118 820 -245 536 -262 929 -686 1132 -1220 101 -266 144 -510 144 -821 0 -728 -255 -1394 -706 -1845 -347 -347 -743 -531 -1210 -564 -347 -24 -662 72 -888 269 -50 43 -64 51 -99 51 -33 0 -46 -6 -72 -33 -26 -28 -37 -58 -70 -183 -206 -798 -209 -806 -377 -1152 -103 -212 -114 -250 -84 -296 21 -31 46 -40 187 -70 662 -142 1349 -102 1963 114 611 214 1183 600 1610 1085 414 471 706 1021 854 1610 118 468 134 1016 45 1515 -72 400 -209 788 -401 1130 -124 222 -191 323 -209 316 -8 -3 -11 0 -8 9 7 18 -27 71 -136 205 -113 139 -220 251 -233 243 -6 -3 -7 -2 -4 4 3 5 -7 26 -24 46 -38 46 -237 222 -350 310 -83 64 -108 79 -94 57 3 -6 -1 -7 -9 -4 -9 3 -16 14 -16 24 0 23 -113 103 -127 89 -11 -11 -56 18 -48 31 3 5 0 12 -6 16 -8 4 -9 3 -5 -4 12 -20 -13 -13 -55 15 -26 17 -36 29 -28 34 8 5 5 10 -10 18 -17 10 -21 9 -21 -4 0 -23 -38 0 -50 30 -5 14 -32 35 -72 54 -35 17 -54 25 -44 16 23 -17 5 -20 -26 -4 -14 7 -17 14 -9 18 6 4 -9 16 -37 29 -26 12 -38 16 -28 7 25 -19 16 -19 -33 1 -21 8 -41 23 -44 33 -3 12 -48 35 -135 69 -72 29 -134 52 -138 52 -3 0 -4 -7 0 -15 3 -8 1 -15 -4 -15 -6 0 -10 9 -10 19 0 16 -21 26 -107 55 -160 53 -462 126 -519 126 -15 0 -24 -6 -24 -15 0 -8 -5 -15 -11 -15 -6 0 -9 8 -6 19 4 16 -7 20 -117 35 -229 30 -457 41 -626 29z m710 -64 c0 -5 -12 -7 -27 -4 -16 2 -49 7 -75 10 -27 4 -48 9 -48 13 0 4 34 3 75 -2 41 -5 75 -13 75 -17z m1105 -339 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m-715 -320 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z" />
                </g>
              </svg>
              <span className="sr-only">Pinterest page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}