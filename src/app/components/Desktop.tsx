import React from "react";

interface DesktopProps {
  children: React.ReactNode;
}

const Desktop: React.FC<DesktopProps> = ({ children }) => {
  return (
    <div
      className={`
        min-h-screen 
        bg-retro-green-dark 
        text-retro-yellow-light 
        font-pixel 
        p-4 
        flex 
        flex-col 
        items-center 
        justify-center 
        crt
      `}
    >
      <div
        className={`
          bg-retro-gray-dark 
          border-4 
          border-retro-yellow-dark 
          shadow-lg 
          rounded-lg 
          p-6 
          inner-screen
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default Desktop;
