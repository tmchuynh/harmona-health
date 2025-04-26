import { Toolkit } from "@/lib/interfaces&types/resources";
import { IoIosWarning } from "react-icons/io";

export default function SelfAssessmentCard({
  assessment,
}: {
  assessment: Toolkit;
}) {
  return (
    <div className="group shadow-md p-9 border rounded-2xl cursor-pointer">
      <h2 className="underline-offset-2 group-hover:underline">
        {assessment.title}
      </h2>
      <p className="mt-6">{assessment.introduction}</p>
      <figure className="mt-10 pl-3 border-l text-destructive">
        <blockquote className="flex items-center gap-3 font-semibold">
          <div className="w-11 h-11">
            <IoIosWarning className="w-10 h-10 text-destructive/50" />
          </div>
          <p>{assessment.warningText}</p>
        </blockquote>
      </figure>
      <p className="mt-10">{assessment.description}</p>
    </div>
  );
}
