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

  const getNextPrompt = () => {
    if (journal.length > 0) {
      // Get random index from remaining prompts
      const index = getRandomIndex(journal);
      const nextPrompt = journal[index];

      // Update state
      setRandomPrompt(nextPrompt);
      setOldPrompts((prev) => [...prev, nextPrompt]);

      // Remove selected prompt from journal array
      const newJournal = [...journal];
      newJournal.splice(index, 1);
      setJournal(newJournal);
    }
  };

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

          <div className="flex justify-center mt-6">
            <button
              onClick={getNextPrompt}
              disabled={journal.length === 0}
              className={`px-4 py-2 rounded-md ${
                journal.length === 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-primary text-white hover:bg-primary-dark"
              }`}
            >
              {journal.length === 0 ? "No More Prompts" : "Next Prompt"}
            </button>
          </div>

          {journal.length === 0 && (
            <p className="mt-4 text-center text-gray-600">
              You've viewed all available journal prompts!
            </p>
          )}
        </section>
      )}
    </div>
  );
}
