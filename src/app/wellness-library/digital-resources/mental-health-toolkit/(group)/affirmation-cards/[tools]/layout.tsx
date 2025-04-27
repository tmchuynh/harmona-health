"use client";
import { capitalize } from "@/lib/utils/format";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
export default function Page({ children }: { children: ReactNode }) {
  const url = usePathname();
  const segments = url.split("/");
  const tool = segments[segments.length - 1];
  const toolkitCategory = segments[segments.length - 2];

  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-11/12">
      <h1>{capitalize(tool)}</h1>
      <h5>{capitalize(toolkitCategory)}</h5>

      {children}
    </div>
  );
}
