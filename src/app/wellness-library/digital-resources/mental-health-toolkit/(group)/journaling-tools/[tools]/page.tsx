"use client";
import { useToolContext } from "@/context/toolContext";
import { getToolResource } from "@/lib/utils";
import { formatUrlToID } from "@/lib/utils/format";
import React, { useEffect, useState } from "react";
export default function Page() {
  const { tool, toolKit, toolKitID, toolInformation } = useToolContext();
  const [journal, setJournal] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Await the Promise from getToolResource
        const data = await getToolResource(toolKit, tool, formatUrlToID(tool));
        setJournal(data);
      } catch (error) {
        console.error("Failed to load affirmation cards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [toolKit, toolKitID]);

  console.log("journal", journal);
  // console.log("toolInformation", toolInformation);
  console.log("tool page", formatUrlToID(tool));

  if (!toolInformation) {
    return <div>Error: Tool information not found.</div>;
  }

  if (loading) {
    return <div>Loading affirmation cards...</div>;
  }
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9">
      <h1>Harmona Health's Affiliates and Partnerships</h1>
      <h5>Blank blank blank blank</h5>

      <p>
        Ipsum excepteur dolore id velit adipisicing magna quis in commodo sint
        sit nostrud dolor. Eiusmod amet adipisicing consequat ea. Aute voluptate
        sunt sint elit qui aute ea non eiusmod labore. Ea voluptate ex ullamco
        qui aliqua qui minim voluptate ut incididunt nostrud. Cillum elit minim
        cupidatat officia.
      </p>
    </div>
  );
}
