"use client";
import { useToolContext } from "@/context/toolContext";
import { getToolResource } from "@/lib/utils";
import { formatUrlToID } from "@/lib/utils/format";
import { useEffect, useState } from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { JournalPrompts } from "@/lib/interfaces&types/resources";
import { TiPen } from "react-icons/ti";

export default function Page() {
  const { tool, toolKit, toolKitID, toolInformation } = useToolContext();
  const [journal, setJournal] = useState<JournalPrompts[]>([]);
  const [loading, setLoading] = useState(true);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

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

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  console.log("journal", journal);
  console.log("tool page", formatUrlToID(tool));

  if (loading) {
    return <div>Loading affirmation cards...</div>;
  }
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9">
      {toolInformation?.subtitle && <h2>{toolInformation.subtitle}</h2>}

      {toolInformation?.introduction &&
        toolInformation.introduction.map((intro: string, index: number) => (
          <p key={index}>{intro}</p>
        ))}

      <section className="mx-auto py-7 w-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
          className="mx-auto xl:px-6 w-9/12 lg:w-3/4 xl:w-full select-none"
        >
          <CarouselContent>
            {journal.map((prompt, index) => (
              <CarouselItem key={index} className="lg:basis-1/2 xl:basis-1/3">
                <Card className="flex flex-col justify-between h-full">
                  <CardHeader>
                    <h3 className="text-lg md:text-xl lg:text-2xl">
                      {prompt.prompt}
                    </h3>
                  </CardHeader>
                  <CardContent className="md:flex hidden p-6">
                    <ul>
                      {prompt.ideas.map((idea, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-x-3 text-pretty"
                        >
                          <div className="flex-shrink-0 mt-1">
                            <TiPen className="w-4 h-4 text-primary" />
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
          <p className="mx-auto text-center text-muted-foreground text-sm">
            {current} out of {count}
          </p>
        </Carousel>
      </section>
    </div>
  );
}
