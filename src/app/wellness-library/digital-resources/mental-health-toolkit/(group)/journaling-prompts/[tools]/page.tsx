"use client";
import { useToolContext } from "@/context/toolContext";
import { JournalPrompts } from "@/lib/interfaces&types/resources";
import { getRandomIndex, getToolResource } from "@/lib/utils";
import { formatUrlToID } from "@/lib/utils/format";
import { useEffect, useState } from "react";

export default function Page() {
  const { tool, toolKit, toolKitID, toolInformation } = useToolContext();
  const [journal, setJournal] = useState<JournalPrompts[]>([]);
  const [loading, setLoading] = useState(true);
  const [randomPrompt, setRandomPrompt] = useState<JournalPrompts | null>(null);
  const [oldPrompts, setOldPrompts] = useState<JournalPrompts[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Await the Promise from getToolResource
        const data = await getToolResource(toolKit, tool, formatUrlToID(tool));

        if (data.length > 0) {
          const index = getRandomIndex(data);
          setRandomPrompt(data[index]);

          // Create a copy of the data without the selected prompt
          const newJournal = [...data];
          newJournal.splice(index, 1);
          setJournal(newJournal);

          // Add the selected prompt to oldPrompts
          setOldPrompts((prev) => [...prev, data[index]]);

          console.log("Selected prompt:", data[index]);
          console.log("Remaining prompts:", newJournal);
        }
      } catch (error) {
        console.error("Failed to load affirmation cards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [toolKit, toolKitID]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9">
      {toolInformation?.subtitle && <h2>{toolInformation.subtitle}</h2>}

      {toolInformation?.introduction &&
        toolInformation.introduction.map((intro: string, index: number) => (
          <p key={index}>{intro}</p>
        ))}

      {randomPrompt && (
        <section className="mx-auto py-7 w-full">
          <div
            key={randomPrompt.prompt}
            className="flex flex-col justify-center items-center gap-6 bg-card shadow-md p-4 rounded-lg"
          >
            <randomPrompt.Icon className="size-8" />
            <p>{randomPrompt.prompt}</p>
          </div>
        </section>
      )}
    </div>
  );
}
