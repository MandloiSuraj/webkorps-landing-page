import React, { useEffect, useState, useRef } from 'react';
import Header from '../sharedComponents/Header';
import Footer from '../sharedComponents/footer';
import { Helmet } from 'react-helmet-async';
import AOS from "aos";
import "aos/dist/aos.css";
import IndustryPage from './IndustriesPage';
import IndustryData from './IndustriData';
import { useParams } from 'react-router-dom';
import NotFoundPage from '../subComponents/NotFoundPage';

function Industries() {
    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: "ease",
            once: true,
        });
    }, []);
    const { id } = useParams();
    const Industry = IndustryData.find(
        (data) => data?.id === id
    );

    if (!Industry) {
        return <NotFoundPage />;
    }
    const serviceData = {
        title: Industry?.title,
        subtitle: Industry?.subtitle,
        description: Industry?.description,
        image: Industry?.image,
        imageAlt: Industry?.imageAlt,
        buttonText: Industry?.buttonText,
        link: Industry?.link,
        overviewData: Industry?.overviewData,
        agileBenefit: Industry?.aligeBenefit,
        challenges: Industry?.challenges,
        features: Industry?.features,
        offeringData: Industry?.offeringData,
        featureData: Industry?.featureData,
        assetType: Industry?.assetType,
        ProcessData: Industry?.ProcessData,
        industries: Industry?.industries,
        techStack: Industry?.techStack,
        ctaData: Industry?.ctaData,
        faqData: Industry?.faqData
    };


    return (
        <div >
            <Helmet>
                <title>{Industry?.metaTitle}</title>
                <meta
                    name="description"
                    content={Industry?.metaDescription}
                />
                <meta
                    property="og:url"
                    content={typeof Industry?.metaUrl === 'string' ? Industry.metaUrl : window.location.href}
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={Industry?.OGTitle || Industry?.metaTitle || ""} />
                <meta property="og:description" content={Industry?.OGDescription || Industry?.metaDescription || ""} />
                <meta property="og:image" content={Industry?.OGImage || ""} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="webkorps.com" />
                <meta property="twitter:url" content={Industry?.twitterUrl || Industry?.metaUrl || ""} />
                <meta name="twitter:title" content={Industry?.twitterTitle || Industry?.metaTitle || ""} />
                <meta name="twitter:description" content={Industry?.twitterDescription || Industry?.metaDescription || ""} />
                <meta name="twitter:image" content={Industry?.twitterImage || ""} />
                <link rel="canonical" href={Industry.canonical || ""} />
            </Helmet>
            <Header />
            <IndustryPage {...serviceData} />
            <Footer />
        </div>
    );
}

export default Industries;
