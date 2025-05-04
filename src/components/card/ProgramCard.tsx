import { Service } from "@/lib/interfaces&types/services";
import { useRouter } from "next/navigation";
import {
  RiComputerFill,
  RiComputerLine,
  RiFireFill,
  RiFireLine,
  RiVipCrownFill,
  RiVipCrownLine,
} from "react-icons/ri";
import BackdropButton from "../button/button-dynamic";
import { Card, CardContent, CardFooter } from "../ui/card";

export default function ProgramCard({
  service,
  categoryId,
  index,
}: {
  service: Service;
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
        <p>{service.introduction}</p>
      </CardContent>
      <CardFooter>
        {service.title === "Executive Health Coaching" ? (
          <BackdropButton icon={RiVipCrownFill} hoverIcon={RiVipCrownLine}>
            Explore This Program
          </BackdropButton>
        ) : service.title === "Tech-Life Balance Training" ? (
          <BackdropButton icon={RiComputerFill} hoverIcon={RiComputerLine}>
            Explore This Program
          </BackdropButton>
        ) : service.title === "Employee Burnout Prevention" ? (
          <BackdropButton icon={RiFireFill} hoverIcon={RiFireLine}>
            Explore This Program
          </BackdropButton>
        ) : (
          <BackdropButton>Explore This Program</BackdropButton>
        )}
      </CardFooter>
    </Card>
  );
}
