"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
  autoFlip = true,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
  autoFlip?: boolean;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const flipToNext = () => {
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards];
      newArray.unshift(newArray.pop()!);
      return newArray;
    });

    // Reset timer when manually flipping
    if (autoFlip) {
      resetFlipTimer();
    }
  };

  const flipToPrevious = () => {
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards];
      newArray.push(newArray.shift()!);
      return newArray;
    });

    // Reset timer when manually flipping
    if (autoFlip) {
      resetFlipTimer();
    }
  };

  const startFlipping = () => {
    if (autoFlip) {
      intervalRef.current = setInterval(() => {
        flipToNext();
      }, 5000);
    }
  };

  const resetFlipTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      startFlipping();
    }
  };

  useEffect(() => {
    startFlipping();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoFlip]);

  return (
    <div className="relative w-60 md:w-96 h-60 md:h-60">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute flex flex-col justify-between bg-white dark:bg-black shadow-black/[0.1] shadow-xl dark:shadow-white/[0.05] p-4 border border-neutral-200 dark:border-white/[0.1] rounded-3xl w-60 md:w-96 h-60 md:h-60"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          >
            <div className="font-normal text-neutral-700 dark:text-neutral-200">
              {card.content}
            </div>
            <div>
              <p className="font-medium text-neutral-500 dark:text-white">
                {card.name}
              </p>
              <p className="font-normal text-neutral-400 dark:text-neutral-200">
                {card.designation}
              </p>
            </div>
          </motion.div>
        );
      })}

      {/* Navigation controls */}
      <div className="right-0 -bottom-20 left-0 absolute flex justify-center gap-4">
        <button
          onClick={flipToPrevious}
          className="bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 p-2 rounded-full transition-colors"
          aria-label="Previous card"
        >
          ←
        </button>
        <button
          onClick={flipToNext}
          className="bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 p-2 rounded-full transition-colors"
          aria-label="Next card"
        >
          →
        </button>
      </div>
    </div>
  );
};
