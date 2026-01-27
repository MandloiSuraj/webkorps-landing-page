import React from 'react';

const SocialIcons = () => {
  return (
    <div className="fixed bottom-4 right-8 flex flex-col gap-4">
      {/* WhatsApp Icon (SVG) */}
      <a
        href="https://wa.me/1234567890" // Replace with your WhatsApp link
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-700"
      >
      <img width="800" height="600"  sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"
          src="https://webkorps-app.s3.us-east-1.amazonaws.com/whatsapp.webp"
          alt="whatsApp"
          className="w-10 h-10 "
        />
      </a>

      {/* Skype Icon (SVG) */}
      <a
        href="skype:live:username?chat" // Replace with your Skype link
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700"
      >
        <img width="800" height="600"  sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"
          src="https://webkorps-app.s3.us-east-1.amazonaws.com/skype.webp"
          alt="skype"
          className="w-10 h-10  "
        />
      </a>
    </div>
  );
};

export default SocialIcons;
