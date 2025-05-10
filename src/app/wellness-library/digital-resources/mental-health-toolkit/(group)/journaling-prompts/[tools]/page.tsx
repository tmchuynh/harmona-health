"use client";
import JournalPromptCard from "@/components/card/JournalPromptCard";
import { MasonryGridGallery } from "@/components/images/MasonryGridGallery";
import MixedGallery from "@/components/images/MixedGallery";
import { QuadGallery } from "@/components/images/QuadGridImages";
import { Button } from "@/components/ui/button";
import { useToolContext } from "@/context/toolContext";
import { JournalPrompts } from "@/lib/interfaces&types/resources";
import { getRandomIndex, getToolResource } from "@/lib/utils";
import { formatToURL, formatUrlToID, toKebabCase } from "@/lib/utils/format";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { tool, toolKit, toolKitID, toolInformation, correspondingTools } =
    useToolContext();
  const router = useRouter();
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

  console.log("toolInformation", toolInformation);
  console.log("toolKit", toolKit);
  console.log("tool", tool);
  console.log("correspondingTools", correspondingTools);
  console.log("journal", journal);

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
        <section>
          {journal.length > 0 && (
            <div>
              <section className="mx-auto py-7 w-full">
                <JournalPromptCard
                  randomPrompt={randomPrompt}
                  oldPrompts={oldPrompts}
                />

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
            </div>
          )}

          {journal.length === 0 && (
            <section className="my-8">
              <Button variant={"secondary"} onClick={handleStartOver}>
                View The Prompts Again
              </Button>

              <div>
                {correspondingTools && correspondingTools.length > 0 && (
                  <div className="mt-6">
                    <h3>
                      Here are some other writing categories you can explore:
                    </h3>

                    <ul className="gap-x-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-[upper-roman] list-outside">
                      {correspondingTools.map((tool, index) => (
                        <li key={index} className="mb-4">
                          <h4
                            className="underline-offset-2 hover:underline no-underline"
                            onClick={() =>
                              router.push(
                                `/wellness-library/digital-resources/mental-health-toolkit/${toKebabCase(
                                  tool.categoryId
                                )}/${formatToURL(tool.title)}`
                              )
                            }
                          >
                            {tool.title}
                          </h4>
                          <p>{tool.description}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}
        </section>
      )}
    </div>
  );
}
