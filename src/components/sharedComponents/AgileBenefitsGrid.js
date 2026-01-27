import React from "react";
import { icons } from '../../constants/techIconmports';

const defaultBenefits = [
    {
        icon: icons.androidAgileIcon1,
        text: 'Flexibility with Agile Methodology'
    },
    {
        icon: icons.androidAgileIcon2,
        text: 'High-Privacy <br/> with NDA'
    },
    {
        icon: icons.androidAgileIcon3,
        text: 'Time-Zone Aligned Development'
    },
    {
        icon: icons.androidAgileIcon4,
        text: 'Quick Onboarding <br/>within 48 hours'
    }
];

const isImage = (icon) => {
    return typeof icon === 'string' && /\.(jpg|jpeg|png|svg|webp|gif)$/i.test(icon);
};


const AgileBenefitsGrid = ({ benefits }) => {
    const effectiveBenefits = benefits && benefits.length ? benefits : defaultBenefits;

    return (
        <div className="col-span-2 flex flex-wrap text-center text-white xl:w-[45%] ipad-pro:w-[45%] w-[100%] xl:h-[65%] ipad-pro:h-[65%] h-[35%] justify-center">
            {effectiveBenefits.map((benefit, index) => (
                <div
                    key={index}
                    className={`boxed w-1/2 flex-col flex justify-center items-center border-secondary ${index % 2 === 0 ? 'border-r' : ''} ${index < 2 ? 'border-b' : ''}`}
                >
                    <div className="svg-icon mb-4 text-4xl">
                        {typeof benefit.icon === 'string' && isImage(benefit.icon) ? (
                            <img
                                width="800"
                                height="600"
                                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                loading="lazy"
                                src={benefit.icon}
                                alt="icon"
                                className="w-12 h-12 transition duration-500 ease-in-out group-hover:brightness-0 group-hover:invert"
                            />
                        ) : (
                            <span className="text-4xl">{String(benefit.icon)}</span>
                        )}


                    </div>
                    <p dangerouslySetInnerHTML={{ __html: benefit.text }}></p>
                </div>
            ))}
        </div>
    );
};

export default AgileBenefitsGrid;
