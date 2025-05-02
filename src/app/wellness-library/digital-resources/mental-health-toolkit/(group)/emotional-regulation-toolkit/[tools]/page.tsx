"use client";
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

  console.log("tool", tool);
  console.log("toolKit", toolKit);
  console.log("toolKitID", toolKitID);
  console.log("toolName", toolInformation);

  console.log("toolData", toolData);

  return (
    <div className="mx-auto">
      {toolInformation?.subtitle && <h2>{toolInformation.subtitle}</h2>}

      {toolInformation?.introduction &&
        toolInformation.introduction.map((intro: string, index: number) => (
          <p key={index}>{intro}</p>
        ))}
    </div>
  );
}
