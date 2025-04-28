import React, { useState } from "react";
import Image from "next/image";
import { Card } from "../ui/card";

const CardFlip = ({
  title,
  description,
  frontImage,
  backImage,
}: {
  title?: string;
  description: string;
  frontImage: string;
  backImage: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="relative mx-auto w-54 h-96 perspective-1000"
      onClick={handleClick}
    >
      <Card
        className={`w-full h-full gap-0 m-0 p-0 border-0 transition-transform duration-500 transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute backface-hidden h-full">
          <Image
            src={frontImage}
            alt={title || "Card Image"}
            width={256}
            height={384}
            className="rounded-lg h-full object-cover object-center"
          />
        </div>

        {/* Back Side */}
        <div className="absolute flex flex-col justify-center items-center backface-hidden w-full h-full text-center rotate-y-180">
          <Image
            src={backImage}
            alt={title || "Card Image"}
            width={256}
            height={384}
            className="opacity-25 rounded-lg h-full object-cover object-center"
          />
          <div className="top-[40%] absolute inset-0 mx-auto w-10/12">
            {title && <h2>{title}</h2>}
            <p className="font-extrabold text-lg">{description}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardFlip;
