"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { icons } from "@/lib/constants/constants";
import { Toolkit } from "@/lib/interfaces&types/resources";
import { toolkit } from "@/lib/resources/toolkits/toolkit";
import { toolsMap } from "@/lib/resources/toolkits/tools";
import { getRandomIndex } from "@/lib/utils";
import {
  capitalize,
  formatToURL,
  formatUrlToID,
  toKebabCase,
} from "@/lib/utils/format";
import { shuffleArray, sortByProperty } from "@/lib/utils/sort";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX, useEffect, useState } from "react";
import { FaLeaf } from "react-icons/fa";
export default function Page() {
  const segments = usePathname().split("/");
  const tool = segments[segments.length - 1];
  const toolkitCategory = segments[segments.length - 2];
  const [icon, setIcon] = useState<JSX.Element>(<FaLeaf />);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [toolkitInformation, setToolkitInformation] = useState<Toolkit>();

  const toolID = formatUrlToID(tool);

  // Find the corresponding tools array for the specific toolID
  const correspondingTools = toolsMap[toolID as keyof typeof toolsMap];

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
            <Link
              href={`/wellness-library/digital-resources/mental-health-toolkit/${toKebabCase(
                tool.categoryId
              )}/${formatToURL(tool.title)}`}
              key={index}
              className="group block relative p-2 w-full h-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.span
                    className="block absolute inset-0 bg-neutral-200 dark:bg-slate-800/[0.8] rounded-3xl w-full h-full"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.5 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.5, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <Card
                key={index}
                className="relative z-10 flex flex-col justify-between h-full"
              >
                <CardHeader className="">
                  <h3 className="text-foreground underline-offset-4 group-hover:underline decoration-1">
                    {tool.title}
                  </h3>
                  <p>{tool.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center items-center group-hover:bg-muted/90 mt-6 sm:mt-0 sm:ml-8 lg:ml-0 px-4 py-3 border border-border rounded-md lg:w-full font-medium text-base text-foreground dark:group-hover:text-background shrink-0">
                    Get Started Today
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
