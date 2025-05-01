"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToolContext } from "@/context/toolContext";
import { JournalPrompts } from "@/lib/interfaces&types/resources";
import { getRandomIndex, getToolResource } from "@/lib/utils";
import {
  convertToIngForm,
  formatUrlToID,
  getFirstWord,
} from "@/lib/utils/format";
import { useEffect, useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";

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
            className="relative flex flex-col justify-center items-center gap-6 bg-card shadow-md mx-auto p-4 rounded-lg md:w-2/3 lg:w-1/2 min-h-[15rem]"
          >
            <randomPrompt.Icon className="size-8" />

            <p>{randomPrompt.prompt}</p>
            <Dialog>
              <DialogTrigger className="top-5 right-5 absolute cursor-pointer">
                <FaQuestionCircle />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader className="pt-4">
                  <DialogTitle>
                    Ideas for{" "}
                    {convertToIngForm(getFirstWord(randomPrompt.prompt))}{" "}
                    {randomPrompt.prompt
                      .trim()
                      .split(/\s+/)
                      .slice(1, randomPrompt.prompt.length - 1)
                      .join(" ")
                      .split(",")[0]
                      .replace(".", "")}
                    :
                  </DialogTitle>
                </DialogHeader>
                <ul className="pl-5 list-disc">
                  {randomPrompt.ideas?.map((idea, index) => (
                    <li key={index}>{idea}</li>
                  ))}
                </ul>
              </DialogContent>
            </Dialog>
          </div>

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
      )}
    </div>
  );
}
