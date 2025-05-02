import { Tool } from "@/lib/interfaces&types/resources";
import { cn } from "@/lib/utils";
import { formatToURL, toKebabCase } from "@/lib/utils/format";
import Image from "next/image";
import Link from "next/link";
import {checklistImages} from "@/lib/constants/constants";

export default function ChecklistToolkitCard({
  tool,
  index,
}: {
  tool: Tool;
  index: number;
}) {
  return (
    <Link
      href={`/wellness-library/digital-resources/mental-health-toolkit/${toKebabCase(
        tool.categoryId
      )}/${formatToURL(tool.title)}`}
      className="group"
    >
      <div
        className={cn(
          "relative flex rounded-lg lg:h-96 h-full overflow-hidden",
          {
            "flex-row-reverse": index % 2 === 0,
          }
        )}
      >
        <div className="absolute inset-0">
          <Image
            alt=""
            src={checklistImages[index]}
            className="size-full object-cover"
            width={500}
            height={500}
          />
        </div>
        <div className="bottom-0 inset-x-0 sm:flex md:flex-col sm:justify-between sm:items-center lg:items-start bg-black/75 backdrop-blur-sm backdrop-filter p-6 border rounded-lg w-full 2xl:w-[50%] h-full lg:h-[15em] 2xl:h-full">
          <div>
            <h3 className="underline-offset-4 group-hover:underline decoration-1">
             {tool.title}
            </h3>
            <p>{tool.description}</p>
          </div>
          <div className="flex justify-center items-center hover:bg-white/10 mt-6 sm:mt-0 sm:ml-8 lg:ml-0 px-4 py-3 border border-white/25 rounded-md lg:w-full font-medium text-base text-white shrink-0">
           Get Started Today
          </div>
        </div>
      </div>
    </Link>
  );
}
