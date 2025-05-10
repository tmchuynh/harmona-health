"use client";

import { ToolProvider } from "@/context/toolContext";
import { toolsMap } from "@/lib/resources/toolkits/tools";
import { capitalize, formatUrlToID } from "@/lib/utils/format";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const tool = usePathname().split("/").slice(-1)[0];
  const toolKit = usePathname().split("/").slice(-2)[0];

  const toolKitID = formatUrlToID(toolKit);
  const toolName = capitalize(tool);

  const correspondingTools = toolsMap[toolKitID as keyof typeof toolsMap];

  const toolInformation = correspondingTools?.find(
    (toolInfo) => toolInfo.title === toolName
  );

  return (
    <ToolProvider value={{ tool, toolKit, toolKitID, toolInformation }}>
      <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
        <h1>{capitalize(tool)}</h1>
        <h5>{toolInformation?.description}</h5>

        <h3>Important Note Before You Begin:</h3>
        <p>
          Within these collections, you will find practices that vary in
          difficulty — some may feel beginner-friendly, others may feel more
          intermediate or advanced depending on where you are on your personal
          journey. We want to remind you that healing, growth, and emotional
          mastery are not about rushing or "doing it all." They are about
          meeting yourself where you are, with compassion, patience, and respect
          for your current needs. While we wholeheartedly encourage you to
          gently stretch your comfort zone and explore new techniques that may
          support deeper healing, we also strongly encourage you to honor your
          natural pace, respect your own timing, and recognize that starting
          exactly where you are is powerful and enough.
        </p>
        <p>
          There is no finish line in this work. Every breath you take with
          awareness, every emotion you sit with courageously, every moment you
          choose kindness over judgment is a profound victory. Small steps —
          taken consistently — build unshakable strength. Trust yourself. You
          are your own best guide. Choose the tools that resonate, experiment
          with curiosity, and return to them as often as you need. There is no
          wrong way to heal when you are moving forward with intention and care.
        </p>
        <p>You are doing beautifully simply by showing up.</p>
        {children}
      </div>
    </ToolProvider>
  );
}
