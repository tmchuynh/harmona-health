import React, { useState } from "react";
import Image from "next/image";
import { Card } from "../ui/card";

const CardFlip = ({
  title,
  description,
  imageUrl,
}: {
  title?: string;
  description: string;
  imageUrl?: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  // Default image URL
  const defaultImageUrl =
    "https://images.unsplash.com/photo-1745730274677-9b64ef519b3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8";

  return (
    <div className="relative w-64 h-96 perspective-1000" onClick={handleClick}>
      <Card
        className={`w-full h-full gap-0 m-0 p-0 transition-transform duration-500 transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute backface-hidden h-full">
          <Image
            src={imageUrl || defaultImageUrl}
            alt={title || "Card Image"}
            width={256}
            height={384}
            className="rounded-lg h-full object-cover object-center"
          />
        </div>

        {/* Back Side */}
        <div className="absolute flex flex-col justify-center items-center backface-hidden p-4 w-full h-full text-center rotate-y-180">
          {title && <h2 className="text-2xl">{title}</h2>}
          <p className="text-lg">{description}</p>
        </div>
      </Card>
    </div>
  );
};

export default CardFlip;
