"use client";
import "@/components/EmblaCarouselScale/css/embla.css";
import EmblaCarousel from "@/components/EmblaCarouselScale/tsx/EmblaCarousel";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useFitnessContent } from "@/hooks/useFitnessContent";
import { icons } from "@/lib/constants/constants";
import { Fitness, Toolkit } from "@/lib/interfaces&types/resources";
import { toolkit } from "@/lib/resources/toolkits/toolkit";
import { toolsMap } from "@/lib/resources/toolkits/tools";
import { getRandomIndex } from "@/lib/utils";
import {
  capitalize,
  formatUrlToID,
  sliceOffLastWord,
} from "@/lib/utils/format";
import {
  generateRandomString,
  shuffleArray,
  sortByProperty,
} from "@/lib/utils/sort";
import { CalendarDaysIcon, CreditCardIcon, UserCircleIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { JSX, useEffect, useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

export default function Page() {
  const url = usePathname();
  const { fitnessContent, loading } = useFitnessContent();
  const segments = usePathname().split("/");
  const tool = segments[segments.length - 1];
  const toolkitCategory = segments[segments.length - 2];
  const [icon, setIcon] = useState<JSX.Element>(<FaLeaf />);
  const [content, setContent] = useState<Fitness[]>([]);
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

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <p>Loading...</p>
      </div>
    );
  }

  console.log("fitnessContent", fitnessContent);

  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1>{capitalize(tool)}</h1>
      <h5>{toolkitInformation?.subtitle}</h5>

      <div className="my-8 md:my-4 lg:my-6">
        {toolkitInformation?.description.map((description, index) => (
          <p key={index}>{description}</p>
        ))}
      </div>

      <EmblaCarousel slides={correspondingTools} />

      <div>
        {correspondingTools && correspondingTools.length > 0 && (
          <>
            <Carousel className="mx-auto w-9/12 md:w-10/12 xl:w-11/12">
              <CarouselContent>
                {sortedTools.map((tool, index) => {
                  const toolName = capitalize(tool.title);

                  const toolInformation = sortedTools?.find(
                    (toolInfo) => toolInfo.title === toolName
                  );

                  if (!toolInformation) {
                    return null; // Skip if tool information is not found
                  }

                  console.log(formatUrlToID(toolInformation.id));

                  const content =
                    fitnessContent[formatUrlToID(toolInformation.id)];

                  console.log("content", content);

                  // console.log(`toolInformation for ${index}`, toolInformation);

                  return (
                    <AlertDialog
                      key={`${index}-${tool.title}-${generateRandomString(2)}`}
                    >
                      <AlertDialogTrigger asChild>
                        <CarouselItem
                          key={`${index}-${generateRandomString(4)}`}
                          className="lg:basis-1/2 grow"
                        >
                          <Card className="h-full">
                            <CardHeader>
                              <h5>{capitalize(tool.title)}</h5>
                              <h3>{tool.subtitle}</h3>
                            </CardHeader>
                            <CardContent>{tool.description}</CardContent>
                            <CardFooter>
                              <Button variant={"fancy"}>View Routines</Button>
                            </CardFooter>
                          </Card>
                        </CarouselItem>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="flex flex-col justify-between w-11/12 max-w-none sm:max-w-none h-11/12">
                        <AlertDialogHeader className="relative">
                          <AlertDialogCancel className="top-0 right-0 absolute">
                            <IoCloseSharp />
                          </AlertDialogCancel>
                          <AlertDialogTitle className="lg:text-2xl">
                            {tool.title}
                          </AlertDialogTitle>
                          <div>
                            {tool.introduction?.map((intro, tIndex) => (
                              <p
                                key={`${tIndex}-${sliceOffLastWord(
                                  intro
                                )}-${generateRandomString(9)}`}
                              >
                                {intro}
                              </p>
                            ))}
                          </div>
                        </AlertDialogHeader>
                        <ScrollArea className="px-3 md:px-6 lg:px-9 pb-3 border-accent border-b-2 border-dashed h-[50%] md:h-[80%] lg:h-[75%]">
                          <div className="gap-3 lg:gap-4 grid grid-cols-1 lg:grid-cols-2">
                            {/* ==================================== */}
                            {content.map((routine: Fitness, index: number) => (
                              <Card
                                className="shadow-xs p-5 rounded-lg"
                                key={`${index}-${generateRandomString(4)}`}
                              >
                                <section className="flex flex-wrap h-fit">
                                  <div className="flex md:flex-row flex-col-reverse justify-between items-start w-full">
                                    <div className="flex-auto">
                                      <h3>{routine.title}</h3>
                                      <p>
                                        <strong>Goal: </strong>
                                        {routine.goal}
                                      </p>
                                    </div>
                                    <div className="mb-4">
                                      <p className="sr-only">
                                        Difficulty Level
                                      </p>
                                      <Badge className="bg-green-50 px-2 rounded-md ring-1 ring-green-600/20 ring-inset font-medium text-green-600 text-xs">
                                        {routine.difficulty}
                                      </Badge>
                                    </div>
                                  </div>
                                  <div className="gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                                    <div className="flex flex-none gap-x-4 border-gray-900/5 border-t w-full">
                                      <p className="flex-none">
                                        <span className="sr-only">
                                          Frequency
                                        </span>
                                        <UserCircleIcon className="w-5 h-6" />
                                      </p>
                                      <p>
                                        <strong>Frequency: </strong>
                                        {routine.frequency}
                                      </p>
                                    </div>
                                    <div className="flex flex-none gap-x-4 w-full">
                                      <p className="flex-none">
                                        <span className="sr-only">
                                          Durattion of Workout
                                        </span>
                                        <CalendarDaysIcon className="w-5 h-6" />
                                      </p>
                                      <p>
                                        <strong>Duration: </strong>
                                        {routine.duration}
                                      </p>
                                    </div>
                                    <div className="flex flex-none gap-x-4 w-full">
                                      <p className="flex-none">
                                        <span className="sr-only">
                                          Workout Format
                                        </span>
                                        <CreditCardIcon className="w-5 h-6" />
                                      </p>
                                      <p>
                                        <strong>Format: </strong>
                                        {routine.format}
                                      </p>
                                    </div>
                                    <div className="flex flex-none gap-x-4 w-full">
                                      <p className="flex-none">
                                        <span className="sr-only">
                                          Workout Tip Before Getting Started
                                        </span>
                                        <CreditCardIcon className="w-5 h-6" />
                                      </p>
                                      <p>
                                        <strong>Quick Tip: </strong>
                                        {routine.tip}
                                      </p>
                                    </div>
                                  </div>
                                </section>
                                <section>
                                  <div className="flex flex-col gap-2 mt-4">
                                    <h3>Workout Steps</h3>
                                    <div>
                                      <ul className="px-6 list-decimal">
                                        {routine.exercises.map(
                                          (exercise, eIndex) => (
                                            <li key={eIndex}>
                                              <div className="flex md:flex-row flex-col justify-between">
                                                <p>{exercise.exercise.title}</p>
                                                {exercise.set && (
                                                  <p>{exercise.set} Sets of </p>
                                                )}
                                                {exercise.rep && (
                                                  <p>{exercise.rep} Reps </p>
                                                )}

                                                {exercise.time && (
                                                  <p>
                                                    {exercise.time} seconds{" "}
                                                  </p>
                                                )}
                                              </div>
                                              <i className="ml-2">
                                                *{exercise.exercise.description}
                                              </i>
                                              {exercise.exercise.howTo.map(
                                                (step, sIndex) => (
                                                  <div
                                                    key={sIndex}
                                                    className="ml-4"
                                                  >
                                                    <p>
                                                      {step.step.title && (
                                                        <strong>
                                                          {step.step.title}
                                                        </strong>
                                                      )}{" "}
                                                      {step.step.description}
                                                    </p>
                                                  </div>
                                                )
                                              )}
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  </div>
                                </section>
                              </Card>
                            ))}
                            {/* ============================================ */}
                          </div>
                        </ScrollArea>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Close</AlertDialogCancel>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  );
                })}
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
