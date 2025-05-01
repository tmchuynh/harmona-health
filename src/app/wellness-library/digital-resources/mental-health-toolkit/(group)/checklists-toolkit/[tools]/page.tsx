"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { useToolContext } from "@/context/toolContext";
import { getToolResource } from "@/lib/utils";
import { formatUrlToID } from "@/lib/utils/format";
import { useEffect, useState } from "react";

export default function Page() {
  const { tool, toolKit, toolKitID, toolInformation } = useToolContext();
  const [checklist, setChecklist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Await the Promise from getToolResource
        const data = await getToolResource(toolKit, tool, formatUrlToID(tool));
        setChecklist(data);
      } catch (error) {
        console.error("Failed to load affirmation cards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [toolKit, toolKitID]);

  console.log("checklist", checklist);
  console.log("toolInformation", toolInformation);
  console.log("tool page", formatUrlToID(tool));

  if (!toolInformation) {
    return <div>Error: Tool information not found.</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleCheckChange = (item: string, checked: boolean) => {
    setCheckedItems((prev) => ({
      ...prev,
      [item]: checked,
    }));
  };

  return (
    <div className="mx-auto py-2 md:py-4 lg:py-6 w-10/12">
      {toolInformation?.subtitle && <h2>{toolInformation.subtitle}</h2>}

      {toolInformation?.introduction &&
        toolInformation.introduction.map((intro: string, index: number) => (
          <p key={index}>{intro}</p>
        ))}
      <div className="gap-2 md:gap-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {checklist.map((item, index) => (
          <div className="flex items-center space-x-2" key={index}>
            <Checkbox
              id={`checkbox-${index}`}
              checked={checkedItems[item] || false}
              onCheckedChange={(checked) => handleCheckChange(item, !!checked)}
            />
            <label
              htmlFor={`checkbox-${index}`}
              className={`peer-disabled:opacity-70 font-medium text-sm leading-none peer-disabled:cursor-not-allowed transition-all duration-200 ${
                checkedItems[item]
                  ? "line-through text-gray-400"
                  : "text-black dark:text-white"
              }`}
            >
              {item}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
