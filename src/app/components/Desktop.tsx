"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Draggable from "react-draggable";
import { AboutWindow } from "./windowsOpen/AboutWindow";
import Image from "next/image";

const ICONS = [
  { id: "about", label: "About Me", icon: "globe.svg" },
  { id: "portfolio", label: "Portfolio", icon: "file.svg" },
  { id: "streamer", label: "Stream", icon: "window.svg" },
];

export default function DesktopPortfolio() {
  const [openApp, setOpenApp] = useState<string | null>(null);

  return (
    <div className="min-h-screen w-full bg-[#F8F9F8] relative font-sans">
      {/* Wallpaper background */}
      <div className="absolute inset-0 bg-[#F8F9F8] z-0" />

      {/* Icons */}
      <div className="absolute top-8 left-8 space-y-6 z-10">
        {ICONS.map(({ id, label, icon }) => (
          <div
            key={id}
            onClick={() => setOpenApp(id)}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
          >
            <Image src={icon} alt={label} width={32} height={32} />
            <span className="text-sm text-[#758650] mt-1">{label}</span>
          </div>
        ))}
      </div>

      {/* Window */}
      {openApp === "about" && (
        <Draggable handle=".title-bar">
          <motion.div
            className="absolute top-24 left-32 w-96 bg-[#FFE27C] rounded-lg shadow-xl z-20 border border-[#C9B6A1]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <div className="title-bar bg-[#E8B634] text-[#758650] p-2 rounded-t-lg flex justify-between items-center">
              <span>About Me</span>
              <button
                className="text-[#758650] font-bold"
                onClick={() => setOpenApp(null)}
              >
                ✕
              </button>
            </div>
            <div className="p-4 text-[#758650]">
              <AboutWindow />
            </div>
          </motion.div>
        </Draggable>
      )}
    </div>
  );
}
