import { LeadershipTools } from "@/lib/interfaces&types/resources";
import DynamicButton from "../button/button-dynamic";

const ToolLinkCard = ({ data }: { data: LeadershipTools }) => {
  return (
    <div className="flex flex-col justify-between bg-card shadow-lg mx-auto mt-8 p-6 rounded-lg">
      <div>
        <h3 className="mb-4 font-semibold text-2xl">{data.title}</h3>
        <p className="mb-4 text-lg">{data.description}</p>
      </div>
      <DynamicButton href={data.href}>Visit Website</DynamicButton>
    </div>
  );
};

export default ToolLinkCard;
