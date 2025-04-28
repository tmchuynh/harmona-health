"use client";

import { ToolProvider } from "@/context/toolContext";
import { toolsMap } from "@/lib/resources/toolkits/tools";
import { capitalize, formatUrlToID } from "@/lib/utils/format";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const tool = usePathname().split("/").slice(-1)[0];
  const toolKit = usePathname().split("/").slice(-2)[0];

  const toolKitID = formatUrlToID(toolKit);
  const toolName = capitalize(tool);

  const correspondingTools = toolsMap[toolKitID as keyof typeof toolsMap];

  const toolInformation = correspondingTools?.find(
    (toolInfo) => toolInfo.title === toolName
  );

  console.log("tool", tool);
  console.log("toolKit", toolKit);
  console.log("toolKitID", toolKitID);
  console.log("toolName", toolName);

  return (
    <ToolProvider value={{ tool, toolKit, toolKitID, toolInformation }}>
      <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
        <h1>{capitalize(tool)}</h1>
        <h5>{toolInformation?.description}</h5>
        {children}
      </div>
    </ToolProvider>
  );
}