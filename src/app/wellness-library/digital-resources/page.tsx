"use client";

import ResourceCard from "@/components/card/ResourceCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { resourceCategory } from "@/lib/resources/resourceCategory";
import {
  formatUrlToID,
  getLastWords,
  sliceOffLastWord,
} from "@/lib/utils/format";
import {
  getResourceInformationById,
  getResourcesByCategoryId,
  groupAndSortByProperties,
} from "@/lib/utils/sort";
import { useRef, useState } from "react";
import { FaArrowUp, FaCircleQuestion } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export default function Page() {
  // Ref for the table of contents
  const tocRef = useRef<HTMLDivElement>(null);
  // Add state for storing questions
  const [currentQuestions, setCurrentQuestions] = useState<any[]>([]);

  // Scroll to section function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to TOC function
  const scrollToTOC = () => {
    if (tocRef.current) {
      tocRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  async function getVariableById(id: string) {
    try {
      const importedModule = await import(`@/lib/resources/questions/${id}`);

      // Access the exported variable (assuming the variable name follows a consistent pattern)
      const variableName = `${id}Questions`;
      return importedModule[formatUrlToID(variableName)];
    } catch (error) {
      console.error(`Error loading file for id "${id}":`, error);
      return null;
    }
  }

  // Function to load questions for a category
  const loadQuestions = async (categoryId: string) => {
    try {
      const questions = await getVariableById(categoryId);
      if (questions) {
        setCurrentQuestions(Array.isArray(questions) ? questions : [questions]);
      } else {
        setCurrentQuestions([]);
      }
    } catch (error) {
      console.error("Failed to load questions:", error);
      setCurrentQuestions([]);
    }
  };

  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <div className="mx-auto text-center">
        <h1>
          Unlock Limitless Growth with Expert Resources at Your Fingertips
        </h1>
        <p ref={tocRef} className="mx-auto mt-2 max-w-4xl text-lg/8">
          Step into a world of possibility where expert guidance meets
          actionable insights—designed to elevate your business, sharpen your
          strategy, and spark unstoppable momentum. Whether you're scaling up or
          just starting out, everything you need to grow, thrive, and lead with
          confidence is just a click away.
        </p>
      </div>

      {/* Table of Contents */}
      <div className="my-12 p-6">
        <h5>Table of Contents</h5>
        <ul className="gap-4 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 xl:grid-cols-3 text-xs list-inside md:list-[upper-roman]">
          {resourceCategory.map((category) => (
            <li
              key={`toc-${category.id}`}
              className="-ml-3 md:ml-0 text-ellipsis"
            >
              <Button
                variant="link"
                className="text-left text-xs md:text-sm"
                onClick={() => scrollToSection(`category-${category.id}`)}
              >
                {category.title === "Online Therapy & Therapy Networks"
                  ? getLastWords(category.title, 2)
                  : category.title ===
                      "Children’s & Young Adult Mental Health Books" ||
                    category.title === "Recommended Books and Articles"
                  ? getLastWords(category.title, 3)
                  : category.title === "Mental Health Education & Self-Help"
                  ? sliceOffLastWord(category.title, 2)
                  : category.title === "Memoirs & Lived Experience Narratives"
                  ? "Memoirs & Narratives"
                  : category.title}
              </Button>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories  */}
      {resourceCategory.map((category, index) => {
        const resources = getResourcesByCategoryId(category.id);
        const groupedAndSorted = groupAndSortByProperties(
          resources,
          "title",
          undefined,
          false,
          true,
          true
        );
        return (
          <div
            key={`${category.id}-${index}`}
            id={`category-${category.id}`}
            className="mt-16 scroll-mt-8 lg:mt-20"
          >
            <div>
              <div>
                <div className="flex items-center gap-6">
                  <h2>{category.title}</h2>
                  <AlertDialog
                    onOpenChange={(isOpen) => {
                      if (isOpen) {
                        loadQuestions(category.id);
                      } else {
                        setCurrentQuestions([]);
                      }
                    }}
                  >
                    <AlertDialogTrigger asChild>
                      <Button size={"icon"} variant={"icon"}>
                        <FaCircleQuestion />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="flex flex-col justify-between w-11/12 max-w-none sm:max-w-none h-11/12">
                      <AlertDialogHeader>
                        <div className="flex justify-end">
                          <AlertDialogCancel
                            asChild
                            className="top-4 right-4 absolute border-none"
                          >
                            <Button size={"icon"} variant="icon">
                              <IoMdClose />
                            </Button>
                          </AlertDialogCancel>
                        </div>
                        <AlertDialogTitle>{category.title}</AlertDialogTitle>
                        <AlertDialogDescription>
                          {category.description}
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <ScrollArea className="px-3 md:px-6 lg:px-9 pb-3 h-[85%] md:h-[90%]">
                        {currentQuestions.length > 0 ? (
                          <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                          >
                            {currentQuestions.map((question, idx) => (
                              <AccordionItem key={idx} value={`item-${idx}`}>
                                <AccordionTrigger className="text-left text-lg">
                                  {question.question}
                                </AccordionTrigger>
                                <AccordionContent>
                                  {question.answer}
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        ) : (
                          <div className="py-8 text-center text-muted-foreground">
                            Loading questions or no questions available...
                          </div>
                        )}
                      </ScrollArea>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
                <p key={index}>{category.description}</p>
              </div>
              <div className="gap-x-8 gap-y-12 sm:gap-y-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
                {groupedAndSorted.map((resource, index) => {
                  const resourceInformation = getResourceInformationById(
                    resource.id
                  );

                  return (
                    <ResourceCard
                      resource={resource}
                      key={`${resource.id}-${index}`}
                      information={resourceInformation}
                    />
                  );
                })}
              </div>
              <div className="text-right mt-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={scrollToTOC}
                  className="inline-flex items-center gap-2"
                >
                  <FaArrowUp /> Back to Table of Contents
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
