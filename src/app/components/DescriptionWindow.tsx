import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface DescriptionWindowProps {
  title: string;
  description: string;
  onClose: () => void;
  iconRect: DOMRect | null;
}

const modalVariants = {
  initial: (rect: DOMRect | null) => ({
    top: rect ? rect.bottom + 10 : "50%",
    left: rect ? rect.left : "50%",
    translateX: rect ? 0 : "-50%",
    translateY: rect ? 0 : "-50%",
    opacity: 0,
    scale: 0.8,
  }),
  animate: {
    top: "auto",
    left: "auto",
    translateX: 0,
    translateY: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
  exit: (rect: DOMRect | null) => ({
    top: rect ? rect.bottom + 10 : "50%",
    left: rect ? rect.left : "50%",
    translateX: rect ? 0 : "-50%",
    translateY: 0,
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2 },
  }),
};

const DescriptionWindow: React.FC<DescriptionWindowProps> = ({
  title,
  description,
  onClose,
  iconRect,
}) => {
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        windowRef.current &&
        !windowRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!iconRect) {
    return null;
  }

  return (
    <motion.div
      ref={windowRef}
      className={`absolute z-10 bg-retro-gray-light border-4 border-outset border-retro-gray-dark shadow-md rounded-md p-0 w-80`}
      style={{
        top: iconRect ? `${iconRect.bottom + 10}px` : "50%",
        left: iconRect ? `${iconRect.left}px` : "50%",
        transform: iconRect ? "" : "translate(-50%, -50%)",
      }}
      variants={modalVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={iconRect}
    >
      <div
        className={`bg-retro-gray-dark p-2 border-b-2 border-retro-gray-light flex justify-between items-center`}
      >
        <h2 className="text-lg font-bold text-retro-yellow-dark">{title}</h2>
        <button
          onClick={onClose}
          className="bg-retro-yellow-dark text-black border border-black px-1 text-sm focus:outline-none"
        >
          [x]
        </button>
      </div>
      <div className="p-4">
        <p className="text-sm text-retro-green-dark">{description}</p>
      </div>
    </motion.div>
  );
};

export default DescriptionWindow;
