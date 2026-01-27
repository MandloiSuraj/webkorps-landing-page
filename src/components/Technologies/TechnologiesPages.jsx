import React, { useEffect, useState, useRef } from 'react';
import Header from '../sharedComponents/Header';
import Footer from '../sharedComponents/footer';
import { Helmet } from 'react-helmet-async';
import AOS from "aos";
import "aos/dist/aos.css";
import TechData from './TechData';
import { useParams } from 'react-router-dom';
import TechnologyPage from './TechnologyPage';

function TechnologiesPages() {
    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: "ease",
            once: true,
        });
    }, []);
    const { id } = useParams();
    const Tech = TechData.find(
        (Tech) => Tech.id === id
    );
    const techData = {
        title: Tech?.title,
        subtitle: Tech?.subtitle,
        description: Tech?.description,
        image: Tech?.image,
        imageAlt: Tech?.imageAlt,
        buttonText: Tech?.buttonText,
        link: Tech?.link,
        overviewData: Tech?.overviewData,
        features: Tech?.features,
        services: Tech?.service,
        techStack: Tech?.techStack,
        ProcessData: Tech?.ProcessData,
        industries: Tech?.industries,
        challenges: Tech?.challenges,
        ctaData: Tech?.ctaData,
        faqData: Tech?.faqData
    };

    return (
        <div >
            <Helmet>
                <title>{Tech?.metaTitle}</title>
                <meta name="description" content={Tech?.metaDescription} />

                {/* Open Graph */}
                <meta property="og:url" content={Tech?.metaUrl || ""} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={Tech?.OGTitle || ""} />
                <meta property="og:description" content={Tech?.OGDescription || ""} />
                <meta property="og:image" content={Tech?.OGImage || ""} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="webkorps.com" />
                <meta property="twitter:url" content={Tech?.twitterUrl || ""} />
                <meta name="twitter:title" content={Tech?.twitterTitle || ""} />
                <meta name="twitter:description" content={Tech?.twitterDescription || ""} />
                <meta name="twitter:image" content={Tech?.twitterImage || ""} />
                <link rel="canonical" href={Tech?.canonical || ""} />

            </Helmet>
            <Header />
            <TechnologyPage {...techData} />
            <Footer />
        </div>
    );
}

export default TechnologiesPages;