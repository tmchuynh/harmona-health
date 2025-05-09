import { Service } from "@/lib/interfaces&types/services";
import { useRouter } from "next/navigation";
import BackdropButton from "../button/BackdropButton";
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
          <BackdropButton onClick={`/programs/${categoryId}/${service.id}`}>
            Explore This Program
          </BackdropButton>
        ) : service.title === "Tech-Life Balance Training" ? (
          <BackdropButton onClick={`/programs/${categoryId}/${service.id}`}>
            Explore This Program
          </BackdropButton>
        ) : service.title === "Employee Burnout Prevention" ? (
          <BackdropButton onClick={`/programs/${categoryId}/${service.id}`}>
            Explore This Program
          </BackdropButton>
        ) : (
          <BackdropButton onClick={`/programs/${categoryId}/${service.id}`}>
            Explore This Program
          </BackdropButton>
        )}
      </CardFooter>
    </Card>
  );
}
