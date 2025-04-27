"use client";
import { icons } from "@/lib/constants/constants";
import { Toolkit } from "@/lib/interfaces&types/resources";
import { toolkit } from "@/lib/resources/toolkits/toolkit";
import { toolsMap } from "@/lib/resources/toolkits/tools";
import { getRandomIndex } from "@/lib/utils";
import { capitalize, formatUrlToID } from "@/lib/utils/format";
import { shuffleArray } from "@/lib/utils/sort";
import { usePathname } from "next/navigation";
import { JSX, useEffect, useState } from "react";

import { FaLeaf } from "react-icons/fa";
export default function Page() {
  const url = usePathname();

  const segments = usePathname().split("/");
  const tool = segments[segments.length - 1];
  const toolkitCategory = segments[segments.length - 2];
  const [icon, setIcon] = useState<JSX.Element>(<FaLeaf />);

  const [toolkitInformation, setToolkitInformation] = useState<Toolkit>();

  const toolID = formatUrlToID(tool);

  // Find the corresponding tools array for the specific toolID
  const correspondingTools = toolsMap[toolID as keyof typeof toolsMap];

  console.log(correspondingTools);

  useEffect(() => {
    const shuffledIcons = shuffleArray(icons);
    const index = getRandomIndex(shuffledIcons);
    const MainIcon = shuffledIcons[index];

    setIcon(<MainIcon className="mt-2 text-fancy" />);
  }, []);

  useEffect(() => {
    const toolkitInformation = toolkit.find((toolkit) => toolkit.href === url);
    if (toolkitInformation) {
      setToolkitInformation(toolkitInformation);
    }
  }, [toolkitCategory, tool]);

  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-11/12">
      <h1>
        {capitalize(toolkitCategory)}: {capitalize(tool)}
      </h1>
      <h5>{toolkitInformation?.subtitle}</h5>

      <div className="my-8 md:my-4 lg:my-6">
        {toolkitInformation?.description.map((description, index) => (
          <p key={index} className="py-1">
            {description}
          </p>
        ))}
      </div>
    </div>
  );
}
