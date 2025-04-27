"use client";
import { toolsMap } from "@/lib/resources/toolkits/tools";
import { capitalize, formatUrlToID } from "@/lib/utils/format";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
export default function Page({ children }: { children: ReactNode }) {
  const segments = usePathname().split("/");
  const tool = segments[segments.length - 1];
  const toolkit = segments[segments.length - 2];

  const correspondingTools =
    toolsMap[formatUrlToID(toolkit) as keyof typeof toolsMap];

  const toolInformation = correspondingTools.find(
    (t) => t.title === capitalize(tool)
  );

  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1>{capitalize(tool)}</h1>
      <h5>{toolInformation?.description}</h5>

      {children}
    </div>
  );
}
