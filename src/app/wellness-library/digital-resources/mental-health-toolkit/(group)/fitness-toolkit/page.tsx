"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "https://images.unsplash.com/photo-1599552683573-9dc48255fe85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya291dHxlbnwwfDF8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1549476464-37392f717541?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtvdXR8ZW58MHwxfDB8fHww",
  "https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvcmtvdXR8ZW58MHwxfDB8fHww",
  "https://images.unsplash.com/photo-1550259979-ed79b48d2a30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya291dHxlbnwwfDF8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1500468756762-a401b6f17b46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmtvdXR8ZW58MHwxfDB8fHww",
  "https://images.unsplash.com/photo-1649887974297-4be052375a67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHdvcmtvdXR8ZW58MHwxfDB8fHww",
  "https://images.unsplash.com/photo-1517438984742-1262db08379e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdvcmtvdXR8ZW58MHwxfDB8fHww",
  "https://images.unsplash.com/photo-1539794830467-1f1755804d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHdvcmtvdXR8ZW58MHwxfDB8fHww",
  "https://plus.unsplash.com/premium_photo-1674675647518-10fb231b4635?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHdvcmtvdXR8ZW58MHwxfDB8fHww",
  "https://images.unsplash.com/photo-1586401100295-7a8096fd231a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHdvcmtvdXR8ZW58MHwxfDB8fHww",
  "https://plus.unsplash.com/premium_photo-1674675646762-74d41a8889a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHdvcmtvdXR8ZW58MHwxfDB8fHww",
  "https://plus.unsplash.com/premium_photo-1672862928749-d49270b3af84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHdvcmtvdXR8ZW58MHwxfDB8fHww",
  "https://images.unsplash.com/photo-1618688862225-ac941a9da58f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHdvcmtvdXR8ZW58MHwxfDB8fHww",
  "https://images.unsplash.com/photo-1560233075-4c1e2007908e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHdvcmtvdXR8ZW58MHwxfDB8fHww",
];

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

  const sortedTools = sortByProperty(correspondingTools, "title");

  console.log("sortedTools", sortedTools);

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

      <div>
        {correspondingTools && correspondingTools.length > 0 && (
          <>
            <Carousel className="mx-auto w-9/12 md:w-10/12 xl:w-11/12">
              <CarouselContent>
                {sortedTools.map((tool, index) => (
                  <CarouselItem key={index} className="lg:basis-1/2">
                    <Card className="h-full">
                      <CardHeader>
                        <h5>{capitalize(tool.title)}</h5>
                        <h3>{tool.subtitle}</h3>
                      </CardHeader>
                      <CardContent>
                        {tool.introduction?.slice(0, 2).map((intro, index) => (
                          <span key={index}>{intro}</span>
                        ))}
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </>
        )}
      </div>
    </div>
  );
}
