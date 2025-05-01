import { JournalPrompts } from "@/lib/interfaces&types/resources";
import { convertToIngForm, getFirstWord } from "@/lib/utils/format";
import { FaQuestionCircle } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function JournalPromptCard({
  randomPrompt,
}: {
  randomPrompt: JournalPrompts;
}) {
  return (
    <div
      key={randomPrompt.prompt}
      className="relative flex flex-col justify-center items-center gap-6 bg-card shadow-md mx-auto p-4 rounded-lg md:w-2/3 lg:w-1/2 min-h-[15rem]"
    >
      <randomPrompt.Icon className="size-8" />

      <p>{randomPrompt.prompt}</p>
      <Dialog>
        <DialogTrigger className="top-5 right-5 absolute cursor-pointer">
          <FaQuestionCircle />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="pt-4">
            <DialogTitle>
              Ideas for {convertToIngForm(getFirstWord(randomPrompt.prompt))}{" "}
              {randomPrompt.prompt
                .trim()
                .split(/\s+/)
                .slice(1, randomPrompt.prompt.length - 1)
                .join(" ")
                .split(",")[0]
                .replace(".", "")}
              :
            </DialogTitle>
          </DialogHeader>
          <ul className="pl-5 list-disc">
            {randomPrompt.ideas?.map((idea, index) => (
              <li key={index}>{idea}</li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>
    </div>
  );
}
