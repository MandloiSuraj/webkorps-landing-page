import React, { useEffect, } from 'react';
import Header from '../sharedComponents/Header';
import Footer from '../sharedComponents/footer';
import { Helmet } from 'react-helmet-async';
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams } from 'react-router-dom';
import ServiceSection from './ServicesPage';
import ServicesData from './servicesData';
import NotFoundPage from '../subComponents/NotFoundPage';
function Services() {
    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: "ease",
            once: true,
        });
    }, []);
    const { id } = useParams();
    const services = ServicesData.find((data) => data?.id === id);
    if (!services) {
        return <NotFoundPage />;
    }
    const service = {
        title: services?.title,
        subtitle: services?.subtitle,
        description: services?.description,
        image: services?.image,
        imageAlt:services?.imageAlt,
        buttonText: services?.buttonText,
        link: services?.link,
        overviewData: services?.overviewData,
        benefits: services?.benefitsData,
        agileBenefit: services?.aligeBenefit,
        services: services?.services,
        contactCTA: services?.ContactCTA,
        features: services?.features,
        ProcessData: services?.ProcessData,
        modalData: services?.modalData,
        ITServices: services?.ITServices,
        techStack: services?.techStack,
        modalItData: services?.modalItData,
        priceModalData: services?.priceModalData,
        industries: services?.industries,
        ctaData: services?.ctaData,
        faqData: services?.faqData
    };



    return (
        <div >
            {services ? (
                <Helmet key={id}>
                    <title>{services.metaTitle || services.title || "WebKorps Services"}</title>
                    <meta name="description" content={services.metaDescription || services.description || ""} />

                    <meta
                        property="og:url"
                        content={typeof services?.metaUrl === 'string' ? services.metaUrl : window.location.href}
                    />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={services.OGTitle || services.metaTitle || ""} />
                    <meta property="og:description" content={services.OGDescription || services.metaDescription || ""} />
                    <meta property="og:image" content={services.OGImage || ""} />

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta property="twitter:domain" content="webkorps.com" />
                    <meta property="twitter:url" content={services.twitterUrl || services.metaUrl || ""} />
                    <meta name="twitter:title" content={services.twitterTitle || services.metaTitle || ""} />
                    <meta name="twitter:description" content={services.twitterDescription || services.metaDescription || ""} />
                    <meta name="twitter:image" content={services.twitterImage || ""} />
                    <link rel="canonical" href={services.canonical || ""} />
                </Helmet>
            ) : null}

            <Header />
            <ServiceSection {...service} />
            <Footer />
        </div>
    );
}

export default Services;