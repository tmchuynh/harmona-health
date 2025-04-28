"use client";

import React, { useState } from "react";

interface FancyCardFlipperProps {
  texts: string[]; // Array of strings where each string represents the text on a card
}

const FancyCardFlipper: React.FC<FancyCardFlipperProps> = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current card being displayed

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length); // Move to the next card
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 p-6 min-h-screen">
      <div className="relative w-80 h-52">
        {texts.map((text, index) => {
          // Calculate the position of each card relative to the current index
          const position = (index - currentIndex + texts.length) % texts.length;

          return (
            <div
              key={index}
              className={`absolute w-full h-full flex justify-center items-center bg-white shadow-xl rounded-lg font-bold text-2xl transition-transform duration-700`}
              style={{
                transform: `translateY(${position * 10}px) rotateX(${
                  position === 0 ? 0 : -90
                }deg)`,
                zIndex: texts.length - position,
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              {text}
            </div>
          );
        })}
      </div>
      <button
        onClick={handleNext}
        className="bg-blue-600 hover:bg-blue-700 mt-8 px-6 py-2 rounded-md text-white transition"
      >
        Next
      </button>
    </div>
  );
};

export default FancyCardFlipper;