import React from 'react';
import Footer from './footer';
import './style.css';
import Technologies from './technologies';
import IndustrySection from './IndustrySection';
import CardContainer from './Card';
import ClientFeedback from './clientFeedback';
import AchievementCardContainer from '../About/AchievementCard';
import ClientCard from './ClientCard';
import CTASection from './CTASection';
import websiteCTAImage2 from "../../assets/images/website-cta-2.jpg";
import websiteCTAImage from "../../assets/images/website-cta-1.jpg";
import FAQSection from './FAQSection';

const industries = {
  title: `Empowering Industries with Secure, Scalable, and Smart <span style="font-weight:700; color:#1887C9;">IT Solutions</span>`,
  description: "At Webkorps, we deliver industry-specific IT solutions designed to drive innovation, efficiency, and business growth. From healthcare, finance, and e-commerce to logistics, manufacturing, and retail, our secure, scalable, and high-performance solutions empower businesses to stay ahead in the digital era.",
  data: [
    // {
    //   "id": "01",
    //   "title": "Asset Management",
    //   "image": "https://webkorps-app.s3.us-east-1.amazonaws.com/asset-management.webp",
    //   "descriptions": "Optimize portfolio tracking and automate financial reporting with our IT solutions & services. Enhance security, ensure seamless transactions, and enable real-time data insights for smarter asset management.",
    //    "alt": "Asset Management"
    // },
    {
      "id": "02",
      "title": "Logistics",
      "image": "https://webkorps-app.s3.us-east-1.amazonaws.com/logistics.webp",
      "descriptions": "Improve supply chain operations with our IT solutions, featuring AI-driven route optimization, real-time tracking, and automated logistics management to boost efficiency and reduce operational costs.",
      "alt": "Logistics"
    },
    {
      "id": "03",
      "title": "Healthcare",
      "image": "https://webkorps-app.s3.us-east-1.amazonaws.com/healthcare.webp",
      "descriptions": "Revolutionize patient care with our IT solutions - secure telemedicine platforms, AI-powered diagnostics, and seamless EHR integration to enhance healthcare efficiency and data privacy.",
      "alt": "Healthcare"
    },
    {
      "id": "04",
      "title": "Fintech",
      "image": "https://webkorps-app.s3.us-east-1.amazonaws.com/fintech.webp",
      "descriptions": "Secure transactions, prevent fraud, and streamline financial operations with our fintech IT solutions, integrating blockchain, AI, and automation for greater trust and efficiency.",
      "alt": "Fintech"
    },
    {
      "id": "05",
      "title": "Real Estate",
      "image": "https://webkorps-app.s3.us-east-1.amazonaws.com/real-estate.webp",
      "descriptions": "Transform property transactions with IT solutions like AI-powered property valuation, smart contracts, and virtual property tours, ensuring efficiency, transparency, and security.",
      "alt": "Real Estate"
    },
    {
      "id": "06",
      "title": "Retail",
      "image": "https://webkorps-app.s3.us-east-1.amazonaws.com/retail.webp",
      "descriptions": "Enhance customer engagement and sales with IT solutions that offer AI-driven personalization, omnichannel integration, and secure digital payment systems for a seamless shopping experience.",
      "alt": "Retail"
    },
    {
      "id": "07",
      "title": "Fitness & Wellness",
      "image": "https://webkorps-app.s3.us-east-1.amazonaws.com/fitness-and-welness.webp",
      "alt": "fitness and welness",
      "descriptions": "Empower users with IT solutions integrating AI, IoT, and blockchain for secure health data storage, personalized fitness tracking, and smart wearables connectivity."
    },
    {
      "id": "08",
      "title": "Travel",
      "image": "https://webkorps-app.s3.us-east-1.amazonaws.com/travel.webp",
      "alt": "Travel and Hospitality",
      "descriptions": "Optimize travel experiences with our IT solutions, featuring AI-driven itinerary planning, blockchain-based identity verification, and automated booking systems for secure, seamless journeys."
    },
    {
      "id": "09",
      "title": "Agriculture",
      "image": "https://webkorps-app.s3.us-east-1.amazonaws.com/agriculture.webp",
      "descriptions": "Increase farming efficiency with IT solutions such as IoT-based precision agriculture, AI-driven crop analytics, and blockchain-powered food traceability for a sustainable supply chain.",
      "alt": "Agriculture"
    },
    {
      "id": "10",
      "title": "Warehouse Management",
      "image": "https://webkorps-app.s3.us-east-1.amazonaws.com/warehouse-management.webp",
      "alt": "Warehouse Management",
      "descriptions": "Streamline inventory operations with our IT solutions, offering real-time tracking, AI-powered demand forecasting, and automated workflows to enhance warehouse efficiency."
    },
    {
      "id": "11",
      "title": "Entertainment",
      "image": "https://webkorps-app.s3.us-east-1.amazonaws.com/entertainment.webp",
      "descriptions": "Innovate in the entertainment industry with IT solutions like blockchain-secured digital rights management, AI-powered content recommendations, and immersive AR/VR experiences.",
      "alt": "Entertainment"
    },
    {
      "id": "12",
      "title": "Gaming",
      "image": "https://webkorps-app.s3.us-east-1.amazonaws.com/gaming.webp",
      "descriptions": "Revolutionize gaming with IT solutions that power blockchain-based NFTs, AI-driven game mechanics, and secure digital asset transactions for immersive and monetized gameplay.",
      "alt": "Gaming"
    }
  ]
}

const faqData = {
  title: `Everything You Need to Know: <span style="font-weight:700; color:#1887C9;">Webkorps IT Services FAQs</span>`,
  description: "Find answers to commonly asked questions about our services, process, and how we can help your business thrive with innovative IT solutions.",
  data: [
    {
      "title": "What services does Webkorps provide?",
      "content": "Webkorps offers a comprehensive range of IT services including Mobile App Development, Web Development, Custom Software Development, Cloud Solutions, AI & ML Services, Blockchain Development, and IT Staff Augmentation."
    },
    {
      "title": "How can I start a project with Webkorps?",
      "content": "Starting a project is easy! You can reach out to us via our contact form, email us at info@webkorps.com, or schedule a free consultation through our website. Our team will get back to you within 24-48 hours."
    },
    {
      "title": "Does Webkorps offer custom software development?",
      "content": "Yes, we specialize in building tailored software solutions. We work closely with our clients to understand their unique business requirements and deliver scalable, secure, and efficient software."
    },
    {
      "title": "Why should I choose Webkorps as my IT partner?",
      "content": "Webkorps combines technical excellence with a client-centric approach. With 8+ years of experience, a global presence, and a team of 100+ experts, we ensure high-quality delivery, transparency, and innovative solutions tailored to your success."
    },
    {
      "title": "What industries do you serve?",
      "content": "We serve a wide array of industries including Healthcare, Fintech, Logistics, Real Estate, Retail, E-commerce, Agriculture, and Entertainment, providing sector-specific expertise for every project."
    }
  ]
}
export default function Main() {



  return (
    <div className='font-inter '>
      <Technologies
        heading={`Our Expertise in Emerging Technologies for Scalable and Secure <span style="font-weight:700; color:#1887C9;">IT Solutions</span>`}
        description={"At Webkorps, we specialize in emerging technologies to deliver scalable, secure, and future-ready IT solutions. With expertise in AI-ML, Blockchain, IoT, Data Analytics, RPA, Cybersecurity, Salesforce, and SAP, we craft innovative, high-performance IT solutions that drive business growth, enhance security, and optimize operations across industries."}
      />
      <CTASection title={'Leverage the Power of Advanced Technologies<br/> for Your Business Success! '} description={'Harness our expertise in cutting-edge technologies to build secure, scalable, and high-performance IT solutions. Stay ahead of the competition with innovative digital transformation.'} buttonText={'Let’s Innovate Together!'} bgColor='bg-white' link={'/contact'} ctaImage={websiteCTAImage2} />
      {industries && <IndustrySection title={industries?.title} description={industries.description} industries={industries.data} bgColor='bg-[#EBEDEE]' />}
      <CardContainer />
      <AchievementCardContainer bgColor='bg-gradient-to-r from-[#005baa] via-[#126eb7] to-[#4aa8dd]' headingColor='text-black' />
      <ClientCard bgColor="bg-white" heading={'Leading Brands That Trust Our <span style="font-weight:700; color:#1887C9;">IT Solutions & Services</span>'} description={'We take pride in collaborating with leading global brands and industry experts to deliver innovative IT solutions that promote success. Our commitment to excellence and customer satisfaction has earned us the trust of businesses across various sectors, enabling them to achieve digital transformation and sustainable growth.'} />
      {/* <ClientFeedback  title={'Trusted by Businesses Worldwide <br/><span className="text-[#1887C9]">Words from Our Clients</span>'}/> */}
      <CTASection title={'Partner with Us for Your Success!'} description={'Join the growing list of satisfied clients who trust our expertise and innovative IT solutions. Let’s collaborate to turn your vision into reality with technology-driven excellence.'} buttonText={'Get in Touch Today!'} bgColor='bg-[#EBEDEE]' link={'/contact'} ctaImage={websiteCTAImage} />
      <FAQSection title={faqData.title} faqData={faqData.data} description={faqData.description} />
      <Footer />
    </div>
  );
}
