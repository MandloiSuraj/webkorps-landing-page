import React, { useEffect, useState, useRef } from 'react';
import Header from '../sharedComponents/Header';
import Footer from '../sharedComponents/footer';
import { Helmet } from 'react-helmet-async';
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams } from 'react-router-dom';
import DevloperPage from './DevloperPage';
import DeveloperData from './DeveloperData';

function DevloperHire() {
    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: "ease",
            once: true,
        });
    }, []);
    const { id } = useParams();
    const dev = DeveloperData.find(
        (dev) => dev.id === id
    );
    const devData = {
        title: dev.title,
        subtitle: dev.subtitle,
        shortContent: dev.shortContent,
        description: dev.description,
        image: dev.image,
        buttonText: dev.buttonText,
        link: dev.link,
        expertise: dev.expertise,
        features: dev.features,
        techStack: dev.techStack,
        services: dev.service,
        devTeam: dev.devTeam,
        ProcessData:dev.ProcessData,
        benefits:dev.benefitsData,
        industries: dev.industries,
        challenges: dev.challenges,
        ctaData: dev.ctaData,
        faqData: dev.faqData
    };

    return (
        <div >
            <Helmet>
                <title>Leading Web Development Company | Custom Web Solutions</title>
                <meta
                    name="description"
                    content="Transform your business with our expert web development services. As a leading web development company, we build custom and high-performing web applications tailored to meet your business goals."
                />
                <meta property="og:url" content="https://www.webkorps.com/web-development" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Leading Web Development Company | Custom Web Solutions" />
                <meta property="og:description" content="Transform your business with our expert web development services. As a leading web development company, we build custom and high-performing web applications tailored to meet your business goals." />
                <meta property="og:image" content="https://webkorps-app.s3.us-east-1.amazonaws.com/Web+Development+Company.webp" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="webkorps.com" />
                <meta property="twitter:url" content="https://www.webkorps.com/web-development" />
                <meta name="twitter:title" content="Leading Web Development Company | Custom Web Solutions" />
                <meta name="twitter:description" content="Transform your business with our expert web development services. As a leading web development company, we build custom and high-performing web applications tailored to meet your business goals." />
                <meta name="twitter:image" content="https://webkorps-app.s3.us-east-1.amazonaws.com/Web+Development+Company.webp" />
                <link rel="canonical" href="https://www.webkorps.com/web-development" />

            </Helmet>
            <Header />
            <DevloperPage {...devData} />
            <Footer />
        </div>
    );
}

export default DevloperHire;