"use client";
import ActivityCard from "@/components/card/ActivityCard";
import { useToolContext } from "@/context/toolContext";
import { Activity } from "@/lib/interfaces&types/resources";
import { getToolResource } from "@/lib/utils";
import { formatUrlToID } from "@/lib/utils/format";
import { useEffect, useState } from "react";
export default function Page() {
  const { tool, toolKit, toolKitID, toolInformation } = useToolContext();
  const [loading, setLoading] = useState(true);
  const [toolData, setToolData] = useState<Activity[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Await the Promise from getToolResource
        const data = await getToolResource(toolKit, tool, formatUrlToID(tool));
        setToolData(data);
      } catch (error) {
        console.error("Failed to load affirmation cards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [toolKit, toolKitID]);

  console.log("toolData", toolData);

  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9">
      {toolInformation?.subtitle && <h2>{toolInformation.subtitle}</h2>}

      {toolInformation?.introduction &&
        toolInformation.introduction.map((intro: string, index: number) => (
          <p key={index}>{intro}</p>
        ))}

      <section className="gap-4 grid grid-cols-1 lg:grid-cols-2">
        {toolData.map((data, index) => (
          <ActivityCard data={data} key={index} />
        ))}
      </section>
    </div>
  );
}
