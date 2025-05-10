"use client";
import JournalPromptCard from "@/components/card/JournalPromptCard";
import { MasonryGridGallery } from "@/components/images/MasonryGridGallery";
import MixedGallery from "@/components/images/MixedGallery";
import { QuadGallery } from "@/components/images/QuadGridImages";
import { Button } from "@/components/ui/button";
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

  const handleStartOver = async () => {
    setLoading(true);
    try {
      const data = await getToolResource(toolKit, tool, formatUrlToID(tool));

      if (data.length > 0) {
        const index = getRandomIndex(data);
        setRandomPrompt(data[index]);

        const newJournal = [...data];
        newJournal.splice(index, 1);
        setJournal(newJournal);

        // Reset old prompts with only the newly selected prompt
        setOldPrompts([data[index]]);
      }
    } catch (error) {
      console.error("Failed to reload journal prompts:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("oldPrompts", oldPrompts);

  return (
    <div className="mx-auto">
      {toolInformation?.subtitle && <h2>{toolInformation.subtitle}</h2>}

      {toolInformation?.introduction &&
        toolInformation.introduction.map((intro: string, index: number) => (
          <p key={index}>{intro}</p>
        ))}

      {randomPrompt && (
        <>
          <section className="mx-auto py-7 w-full">
            <JournalPromptCard randomPrompt={randomPrompt} />

            <div className="flex md:flex-row flex-col justify-center gap-4 mt-6">
              <Button
                variant={journal.length === 0 ? "accent" : "destructive"}
                onClick={handleStartOver}
              >
                Start Over
              </Button>

              <Button
                onClick={getNextPrompt}
                disabled={journal.length === 0}
                className={`px-4 py-2 rounded-md ${
                  journal.length === 0 && "cursor-not-allowed"
                }`}
              >
                {journal.length === 0 ? "No More Prompts" : "Next Prompt"}
              </Button>
            </div>

            {journal.length === 0 && (
              <p className="mt-4 text-center">
                You've viewed all available journal prompts!
              </p>
            )}
          </section>

          {randomPrompt.gallery &&
            (randomPrompt.gallery.data.length === 6 ? (
              <MixedGallery data={randomPrompt.gallery.data} />
            ) : randomPrompt.gallery.data.length === 4 ? (
              <div className="flex w-full">
                <QuadGallery data={randomPrompt.gallery.data} />
              </div>
            ) : (
              <div className="flex w-full">
                <MasonryGridGallery data={randomPrompt.gallery.data} />
              </div>
            ))}
        </>
      )}
    </div>
  );
}
