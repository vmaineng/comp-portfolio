"use client";

import React, { useState } from "react";
import Desktop from "./components/Desktop";
import Icon from "./components/Icon";
import DescriptionWindow from "./components/DescriptionWindow";
import { AnimatePresence } from "framer-motion";

interface PortfolioItem {
  label: string;
  description: string;
  iconImage: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    label: "About Me",
    description: "A brief introduction about myself and my skills.",
    iconImage: "globe.svg",
  },
  {
    label: "Projects",
    description: "A showcase of my web development projects.",
    iconImage: "file.svg",
  },
  {
    label: "Contact",
    description: "How to get in touch with me.",
    iconImage: "window.svg",
  },
];

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [iconPosition, setIconPosition] = useState<DOMRect | null>(null);

  const handleIconClick = (item: PortfolioItem, rect: DOMRect) => {
    setSelectedItem(item);
    setIconPosition(rect);
  };

  const handleCloseDescription = () => {
    setSelectedItem(null);
    setIconPosition(null);
  };

  return (
    <Desktop>
      <div className="grid grid-cols-3 gap-4">
        {portfolioItems.map((item) => (
          <Icon
            key={item.label}
            label={item.label}
            onClick={(rect) => handleIconClick(item, rect)}
            iconImage={item.iconImage}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedItem && iconPosition && (
          <DescriptionWindow
            title={selectedItem.label}
            description={selectedItem.description}
            onClose={handleCloseDescription}
            iconRect={iconPosition}
          />
        )}
      </AnimatePresence>
    </Desktop>
  );
}
