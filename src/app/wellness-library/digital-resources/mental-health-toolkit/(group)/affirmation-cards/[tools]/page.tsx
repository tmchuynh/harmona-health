"use client";

import CardFlip from "@/components/card/CardFlip";
import { useToolContext } from "@/context/toolContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getToolResource } from "@/lib/utils";
import { AffirmationCards } from "@/lib/interfaces&types/resources";
import { useEffect, useState } from "react";

export default function Page() {
  const { tool, toolKit, toolKitID, toolInformation } = useToolContext();
  const [cardData, setCardData] = useState<AffirmationCards[][]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Await the Promise from getToolResource
        const data = await getToolResource(toolKit, tool, toolKitID);
        setCardData(data);
      } catch (error) {
        console.error("Failed to load affirmation cards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [toolKit, toolKitID]);

  console.log("Card Data:", cardData);

  if (!toolInformation) {
    return <div>Error: Tool information not found.</div>;
  }

  if (loading) {
    return <div>Loading affirmation cards...</div>;
  }

  return (
    <div className="py-2 md:py-4 lg:py-6">
      <h2>{toolInformation.description}</h2>
      <h5>{toolInformation.subtitle}</h5>

      {toolInformation.introduction.map((intro: string, index: number) => (
        <p key={index}>{intro}</p>
      ))}

      <Accordion type="single" collapsible className="w-full">
        {cardData.map((set, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>
              <h3>Affirmation Set {index + 1}</h3>
            </AccordionTrigger>
            <AccordionContent className="gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {set.map((affirmation, index) => (
                <CardFlip
                  key={index}
                  description={affirmation.description}
                  title={affirmation.title}
                  frontImage={
                    affirmation.frontImage ||
                    "https://images.unsplash.com/photo-1602459831426-7f1bd5b4339a?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  backImage={
                    affirmation.backImage ||
                    "https://images.unsplash.com/photo-1601779144646-5e6a43c5d615?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8"
                  }
                />
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}