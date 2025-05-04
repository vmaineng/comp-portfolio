import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    translateY: rect ? 0 : "-50%",
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
      className="bg-retro-gray-light border-2 border-retro-gray-dark shadow-md rounded-md p-4 w-80 absolute z-10 retro-window"
      variants={modalVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={iconRect}
    >
      <div className="flex justify-between items-center mb-2 bg-retro-gray-dark p-2 border-b-2 border-retro-gray-light">
        {" "}
        {/* Title bar */}
        <h2 className="text-lg font-bold text-retro-yellow-dark">{title}</h2>
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          [x]
        </button>{" "}
      </div>
      <div className="p-4">
        {" "}
        <p className="text-sm text-retro-green-dark">{description}</p>
      </div>
    </motion.div>
  );
};

export default DescriptionWindow;
