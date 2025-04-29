import { ToolLinks } from "@/lib/interfaces&types/resources";
import React from "react";
import DynamicButton from "../button/button-dynamic";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ToolLinkCard = ({ data }: { data: ToolLinks }) => {
  const isVectorLogo = data.image.includes("cdn.worldvectorlogo.com");

  return (
    <div className="flex flex-col justify-between bg-card shadow-lg mx-auto mt-8 p-6 rounded-lg">
      <div>
        <Image
          src={data.image}
          alt={data.title}
          className={cn(
            "mb-6 rounded-lg w-full h-48",
            isVectorLogo ? "object-contain" : "object-cover"
          )}
          width={300}
          height={200}
          priority
        />
        <h2 className="mb-4 font-semibold text-2xl">{data.title}</h2>
        <p className="mb-4 text-lg">{data.description}</p>
      </div>
      <DynamicButton href={data.href}>Visit Website</DynamicButton>
    </div>
  );
};

export default ToolLinkCard;
