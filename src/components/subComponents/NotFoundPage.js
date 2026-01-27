import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/'); // Redirect to the home page
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center p-5">
            <img width="800" height="600"  sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"
                src="https://webkorps-app.s3.us-east-1.amazonaws.com/404Image.webp"
                alt="404 Not Found"
                className="w-[709px] h-[376px] mb-5"
            />
            <p className="text-[24px] leading-[30px] font-normal text-center text-[#73718A] font-quicksand mb-5 w-[600px]">
            The page cannot be found. The requested URL was not found on this server.
            </p>
            <button
                onClick={handleBackToHome}
                className="text-white h-[78px] w-[258px] rounded-[99px] text-[24px] leading-[30px] bg-gradient-to-b from-[#6FC9FF] to-[#1887C9]"
            >
                Back to Home
            </button>
        </div>
    );
}

export default NotFoundPage;
