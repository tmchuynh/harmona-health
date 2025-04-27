"use client";
import { toolsMap } from "@/lib/resources/toolkits/tools";
import { capitalize, formatUrlToID } from "@/lib/utils/format";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
export default function Page({ children }: { children: ReactNode }) {
  const tool = usePathname().split("/").slice(-1)[0];
  const toolKit = usePathname().split("/").slice(-2)[0];

  const toolKitID = formatUrlToID(toolKit);
  const toolName = capitalize(tool);

  const correspondingTools = toolsMap[toolKitID as keyof typeof toolsMap];

  const toolInformation = correspondingTools.find(
    (toolInfo) => toolInfo.title === toolName
  );

  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1>{capitalize(tool)}</h1>
      <h5>{toolInformation?.description}</h5>

      {children}
    </div>
  );
}
