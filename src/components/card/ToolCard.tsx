import { Tool } from "@/lib/interfaces&types/resources";
import { formatToURL, toKebabCase } from "@/lib/utils/format";
import Link from "next/link";
import { FaLeaf } from "react-icons/fa";
import BackdropButton from "../button/BackdropButton";

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/wellness-library/digital-resources/mental-health-toolkit/${toKebabCase(
        tool.categoryId
      )}/${formatToURL(tool.title)}`}
      className="group"
    >
      <div
        key={tool.id}
        className="grid grid-cols-1 shadow-[inset_0_0_2px_1px_#ffffff4d] -m-2 max-lg:mx-auto rounded-[2rem] ring-1 ring-black/5 max-lg:w-full max-lg:max-w-md md:min-h-[20em] lg:min-h-[24em] xl:min-h-[20em]"
      >
        <div className="grid grid-cols-1 shadow-black/5 shadow-md p-2 rounded-[2rem]">
          <div className="flex flex-col justify-between p-10 pb-9 rounded-3xl ring-1">
            <div>
              <h3 className="underline-offset-4 group-hover:underline decoration-1">
                {tool.title}
              </h3>
              <p className="mt-2">{tool.description}</p>
            </div>
            <div className="mt-8">
              <BackdropButton
                icon={FaLeaf}
                hoverIcon={FaLeaf}
                variant="tertiary"
                className="w-full"
              >
                View
              </BackdropButton>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
