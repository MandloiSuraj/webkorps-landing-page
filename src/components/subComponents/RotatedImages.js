import React, { useEffect, useState } from 'react';

const RotatingImages = () => {
    const images = [
        { id: 1, name: 'Internet Of Things', icon: "https://webkorps-app.s3.us-east-1.amazonaws.com/iot.webp", isImage: true, altText: 'iot' },
        { id: 2, name: 'AI & ML', icon: "https://webkorps-app.s3.us-east-1.amazonaws.com/ai-and-ml.webp", isImage: true, altText: 'ai-and-ml' },
        { id: 3, name: 'Data Analytics', icon: "https://webkorps-app.s3.us-east-1.amazonaws.com/data-analytics.webp", isImage: true, altText: 'data-analytics' },
        { id: 4, name: 'Robotic Process Automation', icon: "https://webkorps-app.s3.us-east-1.amazonaws.com/robotic-process-automation.webp", isImage: true, altText: "robotic-process-automation" },
        { id: 5, name: 'Cyber Security', icon: "https://webkorps-app.s3.us-east-1.amazonaws.com/cyber-security.webp", isImage: true, altText: 'cyber-security' },
        { id: 6, name: 'Salesforce', icon: "https://webkorps-app.s3.us-east-1.amazonaws.com/salesforce.webp", isImage: true, altText: 'salesforce' },
        { id: 7, name: 'Blockchain', icon: "https://webkorps-app.s3.us-east-1.amazonaws.com/blockchain.webp", isImage: true, altText: 'blockchain' },
        { id: 8, name: 'SAP', icon: "https://webkorps-app.s3.us-east-1.amazonaws.com/sap.webp", isImage: true, altText: 'sap' }
    ];

    const [angle, setAngle] = useState(0);
    const [scale, setScale] = useState(1);
    const [shrink, setShrink] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setAngle((prev) => prev + 1);
        }, 100);
        const scaleInterval = setInterval(() => {
            setShrink((prev) => !prev);
        }, 1000);

        return () => {
            clearInterval(interval)
            clearInterval(scaleInterval);
        }
    }, []);

    return (
        <div className="relative w-full sm:w-[75%] md:w-[50%] h-[30rem] sm:h-[40rem] mx-auto">
            <div className="absolute inset-0 flex items-center justify-center">
                <img
                    width="800"
                    height="600"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    loading="lazy"
                    src="https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-logo.webp"
                    alt="webkorps-logo"
                    className="h-16 w-16 sm:h-24 sm:w-24"
                />
            </div>
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute flex items-center justify-center text-2xl sm:text-3xl transition-transform duration-200 ease-in-out`}
                    style={{
                        top: `${50 + 30 * Math.sin((angle + (index * 360) / images.length) * (Math.PI / 180))}%`,
                        left: `${50 + 30 * Math.cos((angle + (index * 360) / images.length) * (Math.PI / 180))}%`,
                        transform: `translate(-50%, -50%) scale(${shrink ? '0.4' : '0.8'})`
                    }}
                >
                    <img
                        width="800"
                        height="600"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        loading="lazy"
                        src={image.icon}
                        alt={image.alt || 'icon'}
                        className="h-10 w-10 sm:h-14 sm:w-14 fill-cyan-300 stroke-cyan-500"
                    />
                </div>
            ))}
        </div>
    );
};

export default RotatingImages;

