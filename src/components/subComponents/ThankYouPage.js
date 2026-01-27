import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ThankYouPage() {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/'); // Redirect to the home page
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/'); // Auto-redirect to the home page after 5 seconds
        }, 5000);

        return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, [navigate]);
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center p-5">
            <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"
                src="https://webkorps-app.s3.us-east-1.amazonaws.com/thankyouImage.webp"
                alt="Thank You"
                className="w-[360px] h-[360px] mb-5"
            />
            <p className="text-[24px] leading-[30px] font-normal text-center text-[#73718A] font-quicksand mb-5 w-[600px]">
                Thank you for reaching out!
                <br /> We’ve received your message and our team will respond you as soon as possible. In the meantime, feel free to explore our services, or don’t hesitate to contact us if you have any further query.            </p>
            <button
                onClick={handleBackToHome}
                className="text-white h-[78px] w-[258px] rounded-[99px] text-[24px] leading-[30px] bg-gradient-to-b from-[#6FC9FF] to-[#1887C9]"
            >
                Back to Home
            </button>

        </div>
    );
}

export default ThankYouPage;
