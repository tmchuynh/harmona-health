import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Card } from "../ui/card";
import { getAccessibleColorForImage } from "@/lib/utils/accessibility";

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
  const [frontTextColor, setFrontTextColor] = useState("#000000");
  const [backTextColor, setBackTextColor] = useState("#000000");

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    async function determineTextColor() {
      try {
        const frontColor = await getAccessibleColorForImage(frontImage);
        const backColor = await getAccessibleColorForImage(backImage);
        setFrontTextColor(frontColor);
        setBackTextColor(backColor);
      } catch (error) {
        console.error("Failed to determine text color:", error);
      }
    }

    determineTextColor();
  }, [frontImage, backImage]);

  console.log("frontTextColor", frontTextColor);
  console.log("backTextColor", backTextColor);

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
        <div className="absolute backface-hidden h-full overflow-hidden">
          <Image
            src={frontImage}
            alt={title || "Card Image"}
            width={256}
            height={384}
            className="opacity-65 rounded-lg h-full object-cover object-center"
          />

          <div className="bottom-[15%] absolute px-3">
            {title && (
              <h3 className="hyphens-auto" style={{ color: frontTextColor }}>
                {title}
              </h3>
            )}
          </div>
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
          <div className="top-[35%] absolute inset-0 mx-auto w-10/12">
            <p
              className="font-extrabold text-lg"
              style={{ color: backTextColor }}
            >
              {description}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardFlip;
