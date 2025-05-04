import React from "react";

interface DesktopProps {
  children: React.ReactNode;
}

const Desktop: React.FC<DesktopProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-retro-gray-light p-4 flex flex-col items-center justify-center font-pixel crt">
      <div className="bg-retro-gray-dark border-2 border-retro-gray-light shadow-md rounded-md p-6 inner-screen">
        {children}
      </div>
    </div>
  );
};

export default Desktop;
