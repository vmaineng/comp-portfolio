import React from "react";
import Image from "next/image";

interface IconProps {
  label: string;
  onClick: (rect: DOMRect) => void;
  iconImage: string;
}

const Icon: React.FC<IconProps> = ({ label, onClick, iconImage }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center p-2 rounded-md hover:bg-retro-gray-light transition-colors duration-200 focus:outline-none relative"
    >
      <Image src={iconImage} alt={label} width={32} height={32} />
      <span className="text-sm text-retro-green-dark">{label}</span>
    </button>
  );
};

export default Icon;
