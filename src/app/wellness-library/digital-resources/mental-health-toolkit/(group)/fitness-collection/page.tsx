"use client";
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
  CarouselApi,
  CarouselContent,
  CarouselItem,
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
  simpleShuffleArray,
  sortByProperty,
} from "@/lib/utils/sort";
import useEmblaCarousel from "embla-carousel-react";
import { CalendarDaysIcon, CreditCardIcon, UserCircleIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { JSX, useCallback, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaLeaf } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

export default function Page() {
  const { fitnessContent, loading } = useFitnessContent();
  const segments = usePathname().split("/");
  const tool = segments[segments.length - 1];
  const toolkitCategory = segments[segments.length - 2];
  const [icon, setIcon] = useState<JSX.Element>(<FaLeaf />);
  const [decorativeIcon, setDecorativeIcon] = useState<JSX.Element>(<FaLeaf />);
  const [toolkitInformation, setToolkitInformation] = useState<Toolkit>();
  const toolID = formatUrlToID(tool);
  const carouselOptions = { loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [api, setApi] = useState<CarouselApi>();

  const scrollPrev = useCallback(() => {
    if (api) {
      api.scrollPrev();
      console.log(api.canScrollPrev());
    }
  }, [api]);

  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext();
      console.log(api.canScrollNext());
    }
  }, [api]);

  // Find the corresponding tools array for the specific toolID
  const correspondingTools = toolsMap[toolID as keyof typeof toolsMap];

  const sortedTools = sortByProperty(correspondingTools, "title");

  useEffect(() => {
    let shuffledIcons = shuffleArray(icons);
    let index = getRandomIndex(shuffledIcons);

    const MainIcon = shuffledIcons[index];
    setIcon(<MainIcon className="w-10 h-10 text-primary" />);

    shuffledIcons = shuffleArray(icons.filter((ic) => ic !== MainIcon));
    index = getRandomIndex(simpleShuffleArray(shuffledIcons));

    const DecorativeIcon = shuffledIcons[index];
    setDecorativeIcon(
      <DecorativeIcon className="w-12 xl:w-16 h-12 xl:h-16 text-secondary" />
    );
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

  return (
    <>
      <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
        <h1>{capitalize(tool)}</h1>
        <h5>{toolkitInformation?.subtitle}</h5>

        <div className="my-8 md:my-4 lg:my-6">
          {toolkitInformation?.description.map((description, index) => (
            <p key={index}>{description}</p>
          ))}
        </div>
      </div>

      <div>
        {correspondingTools && correspondingTools.length > 0 && (
          <section>
            <Carousel setApi={setApi} opts={carouselOptions} ref={emblaRef}>
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
                          className="md:h-[25em] lg:h-[30em] xl:h-[25em] lg:basis-1/2 grow"
                        >
                          <Card className="relative flex flex-col justify-between h-full overflow-hidden">
                            <CardHeader>
                              <h5 className="md:flex items-center gap-3 hidden mb-0">
                                {icon} {tool.subtitle}
                              </h5>
                              <h3> {capitalize(tool.title)}</h3>
                            </CardHeader>
                            <CardContent className="md:flex hidden h-full">
                              {tool.description}
                            </CardContent>
                            <CardFooter className="md:mb-7">
                              <div className="-bottom-3 xl:-bottom-5 absolute md:flex gap-2 hidden opacity-60 -mx-10">
                                {[
                                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                  0, 0, 0,
                                ].map((_, index) => (
                                  <span key={index}>{decorativeIcon}</span>
                                ))}{" "}
                              </div>
                              <Button variant={"outline"} className="z-10">
                                View Routines
                              </Button>
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
                                      <Badge variant={"secondary"}>
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
                                          Duration of Workout
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
                                                <div>
                                                  {exercise.set && (
                                                    <span>
                                                      {exercise.set} Set(s) of{" "}
                                                    </span>
                                                  )}
                                                  {exercise.rep && (
                                                    <span>
                                                      {exercise.rep} Reps{" "}
                                                    </span>
                                                  )}
                                                  {exercise.time && (
                                                    <span>
                                                      {exercise.time} seconds{" "}
                                                    </span>
                                                  )}
                                                </div>
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
            </Carousel>
            <div className="flex md:flex-row flex-col gap-4 mx-auto my-3 lg:my-10 w-10/12 md:w-11/12">
              <Button
                size={"icon"}
                variant={"ghost"}
                className="rounded-full"
                onClick={scrollPrev}
              >
                <FaChevronLeft />
              </Button>
              <Button
                size={"icon"}
                variant={"ghost"}
                className="rounded-full"
                onClick={scrollNext}
              >
                <FaChevronRight />
              </Button>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
