"use client";

import BackdropButton from "@/components/button/BackdropButton";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToolContext } from "@/context/toolContext";
import { icons } from "@/lib/constants/constants";
import { AffirmationCards } from "@/lib/interfaces&types/resources";
import { getRandomIndex, getToolResource } from "@/lib/utils";
import { formatUrlToID } from "@/lib/utils/format";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
export default function Page() {
  const { tool, toolKit, toolKitID, toolInformation } = useToolContext();
  const [cardData, setCardData] = useState<AffirmationCards[][]>([]);
  const [loading, setLoading] = useState(true);
  const [api, setApi] = useState<CarouselApi>();

  const scrollPrev = () => {
    if (api) {
      api.scrollPrev();
    }
  };
  const scrollNext = () => {
    if (api) {
      api.scrollNext();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Await the Promise from getToolResource
        const data = await getToolResource(toolKit, tool, formatUrlToID(tool));
        setCardData(data);
      } catch (error) {
        console.error("Failed to load affirmation cards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [toolKit, toolKitID]);

  if (!toolInformation) {
    return <div>Error: Tool information not found.</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("cardData", cardData);

  return (
    <div className="pb-2 md:pb-4 lg:pb-6">
      <h2>{toolInformation.subtitle}</h2>

      {toolInformation.introduction.map((intro: string, index: number) => (
        <p key={index}>{intro}</p>
      ))}

      {/* <div className="flex justify-center items-center w-full h-[40rem]">
        <CardStack items={cardData} />
      </div> */}

      <Tabs className="my-9 w-full">
        <>
          <TabsList
            defaultValue={1}
            className="flex flex-wrap justify-between items-start w-full h-auto"
          >
            {cardData.map((_, index) => {
              return (
                <TabsTrigger
                  key={index}
                  value={`${index}`}
                  className="max-w-min lg:text-lg"
                >
                  Set {index + 1}
                </TabsTrigger>
              );
            })}
          </TabsList>

          <>
            {cardData.map((set, index) => {
              console.log(`set ${index}`, set);
              const iconIndex = getRandomIndex(icons);
              const Icon = icons[iconIndex];
              return (
                <TabsContent key={index} value={`${index}`} className="">
                  <Carousel
                    setApi={setApi}
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    className="flex flex-col h-[25em]"
                  >
                    <CarouselContent className="h-[30em] overflow-visible">
                      {set.map((card, cardIndex) => (
                        <CarouselItem
                          key={cardIndex}
                          className="h-[20em] md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                        >
                          <Card className="flex flex-col gap-4 lg:gap-6 my-7 h-full">
                            <CardContent className="flex flex-col gap-4 lg:gap-6">
                              <div className="flex items-center gap-3">
                                <Icon className="w-auto h-6 text-accent" />
                                <h3>{card.title}</h3>
                              </div>
                              <p>{card.description}</p>
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                  <div className="flex items-center gap-4 mt-4 w-full">
                    <BackdropButton onClick={scrollPrev}>
                      <FaChevronLeft />
                    </BackdropButton>
                    <BackdropButton onClick={scrollNext}>
                      <FaChevronRight />
                    </BackdropButton>
                  </div>
                </TabsContent>
              );
            })}
          </>
        </>
      </Tabs>
    </div>
  );
}