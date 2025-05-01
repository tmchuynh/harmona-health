"use client";
import ToolCard from "@/components/card/ToolCard";
import { icons } from "@/lib/constants/constants";
import { Toolkit } from "@/lib/interfaces&types/resources";
import { toolkit } from "@/lib/resources/toolkits/toolkit";
import { toolsMap } from "@/lib/resources/toolkits/tools";
import { getRandomIndex } from "@/lib/utils";
import { capitalize, formatUrlToID } from "@/lib/utils/format";
import { shuffleArray, sortByProperty } from "@/lib/utils/sort";
import { usePathname } from "next/navigation";
import { JSX, useEffect, useState } from "react";

import { FaLeaf } from "react-icons/fa";
export default function Page() {
  const url = usePathname();

  const segments = usePathname().split("/");
  const tool = segments[segments.length - 1];
  const toolkitCategory = segments[segments.length - 2];
  const [icon, setIcon] = useState<JSX.Element>(<FaLeaf />);

  console.log("tool", tool);
  console.log("toolkitCategory", toolkitCategory);

  const [toolkitInformation, setToolkitInformation] = useState<Toolkit>();

  const toolID = formatUrlToID(tool);

  console.log("toolID", toolID);
  console.log("toolkitInformation", toolkitInformation);

  // Find the corresponding tools array for the specific toolID
  const correspondingTools = toolsMap[toolID as keyof typeof toolsMap];

  console.log("correspondingTools", correspondingTools);

  const sortedTools = sortByProperty(correspondingTools, "title");

  useEffect(() => {
    const shuffledIcons = shuffleArray(icons);
    const index = getRandomIndex(shuffledIcons);
    const MainIcon = shuffledIcons[index];

    setIcon(<MainIcon className="mt-2 text-fancy" />);
  }, []);

  useEffect(() => {
    const toolkitInformation = toolkit.find(
      (toolkit) => toolkit.title === capitalize(tool)
    );
    if (toolkitInformation) {
      setToolkitInformation(toolkitInformation);
    }
  }, [toolkitCategory, tool]);

  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1>{capitalize(tool)}</h1>
      <h5>{toolkitInformation?.subtitle}</h5>

      <div className="my-8 md:my-4 lg:my-6">
        {toolkitInformation?.description.map((description, index) => (
          <p key={index}>{description}</p>
        ))}
      </div>

      {correspondingTools && correspondingTools.length > 0 && (
        <div className="gap-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-2">
          {sortedTools.map((tool, index) => (
            <ToolCard tool={tool} key={index} />
          ))}
        </div>
      )}
    </div>
  );
}
