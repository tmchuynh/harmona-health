import { JournalPrompts } from "@/lib/interfaces&types/resources";
import { FaQuestionCircle } from "react-icons/fa";
import { Card } from "../ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function JournalPromptCard({
  randomPrompt,
  oldPrompts,
}: {
  randomPrompt: JournalPrompts;
  oldPrompts: JournalPrompts[];
}) {
  return (
    <Card
      key={randomPrompt.prompt}
      className="relative flex flex-col justify-center items-center gap-6 mx-auto p-4 md:w-2/3 lg:w-1/2 min-h-[15rem]"
    >
      <p className="top-3 left-5 absolute">#{oldPrompts.length}</p>
      <randomPrompt.Icon className="size-8" />

      <p>{randomPrompt.prompt}</p>
      <Dialog>
        <DialogTrigger className="top-5 right-5 absolute cursor-pointer">
          <FaQuestionCircle />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="pt-4">
            <DialogTitle>Ideas To Get Started:</DialogTitle>
          </DialogHeader>
          <ul className="pl-5 list-[upper-roman] list-outside">
            {randomPrompt.ideas?.map((idea, index) => (
              <li key={index}>{idea}</li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
