import { SubService } from "@/lib/interfaces&types/services";
import { useRouter } from "next/navigation";
import {
  RiVipCrownFill,
  RiVipCrownLine,
  RiComputerFill,
  RiComputerLine,
  RiFireFill,
  RiFireLine,
} from "react-icons/ri";
import DynamicButton from "../button/button-dynamic";
import { Card, CardContent, CardFooter } from "../ui/card";

export default function ProgramCard({
  service,
  categoryId,
  index,
}: {
  service: SubService;
  categoryId: string;
  index: number;
}) {
  const router = useRouter();
  return (
    <Card
      key={`${service.id}-${index}`}
      className="group flex flex-col justify-between h-full min-h-[20rem] cursor-pointer"
      onClick={() => router.push(`/programs/${categoryId}/${service.id}`)}
    >
      <CardContent>
        <h2 className="underline-offset-4 group-hover:underline decoration-1">
          {service.title}
        </h2>
        <p>{service.description}</p>
      </CardContent>
      <CardFooter>
        {service.title === "Executive Health Coaching" ? (
          <DynamicButton icon={RiVipCrownFill} hoverIcon={RiVipCrownLine}>
            Explore This Program
          </DynamicButton>
        ) : service.title === "Tech-Life Balance Training" ? (
          <DynamicButton icon={RiComputerFill} hoverIcon={RiComputerLine}>
            Explore This Program
          </DynamicButton>
        ) : service.title === "Employee Burnout Prevention" ? (
          <DynamicButton icon={RiFireFill} hoverIcon={RiFireLine}>
            Explore This Program
          </DynamicButton>
        ) : (
          <DynamicButton>Explore This Program</DynamicButton>
        )}
      </CardFooter>
    </Card>
  );
}
