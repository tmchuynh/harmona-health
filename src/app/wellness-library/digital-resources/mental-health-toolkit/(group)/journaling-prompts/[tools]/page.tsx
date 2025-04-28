"use client";
import { useToolContext } from "@/context/toolContext";
import { getToolResource } from "@/lib/utils";
import { capitalize, formatUrlToID } from "@/lib/utils/format";
import React, { useEffect, useState } from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { JournalPrompts } from "@/lib/interfaces&types/resources";
import { FaLeaf } from "react-icons/fa";
import { IoIosLeaf } from "react-icons/io";
import { toolsMap } from "@/lib/resources/toolkits/tools";

export default function Page() {
  const { tool, toolKit, toolKitID, toolInformation } = useToolContext();
  const [journal, setJournal] = useState<JournalPrompts[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Await the Promise from getToolResource
        const data = await getToolResource(toolKit, tool, formatUrlToID(tool));
        setJournal(data);
      } catch (error) {
        console.error("Failed to load affirmation cards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [toolKit, toolKitID]);

  console.log("journal", journal);
  // console.log("toolInformation", toolInformation);
  console.log("tool page", formatUrlToID(tool));

  if (loading) {
    return <div>Loading affirmation cards...</div>;
  }
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9">
      <section className="mx-auto w-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto xl:px-6 w-2/3 lg:w-3/4 xl:w-11/12"
        >
          <CarouselContent>
            {journal.map((prompt, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="flex flex-col justify-center h-full">
                  <CardHeader>
                    <h3>{prompt.prompt}</h3>
                  </CardHeader>
                  <CardContent className="flex justify-center items-center p-6 h-1/3 aspect-4/5">
                    <ul>
                      {prompt.ideas.map((idea, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-x-3 text-pretty"
                        >
                          <div className="flex-shrink-0 mt-1">
                            <IoIosLeaf className="w-4 h-4 text-primary" />
                          </div>
                          <span>{idea}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  );
}
