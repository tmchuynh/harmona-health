import { ServiceCategory } from "@/lib/interfaces&types/services";
import { useRouter } from "next/navigation";
import DynamicButton from "../button/button-dynamic";
import { Card, CardContent, CardFooter } from "../ui/card";

export default function ProgramCategoryCard({
  category,
  index,
}: {
  category: ServiceCategory;
  index: number;
}) {
  const router = useRouter();
  return (
    <Card
      key={`${category.id}-${index}`}
      className="group flex flex-col justify-between h-full min-h-[20rem] cursor-pointer"
      onClick={() => router.push(`/programs/${category.id}`)}
    >
      <CardContent>
        <category.icon className="mb-5 w-10 h-10 group-hover:text-tertiary" />
        <h2 className="underline-offset-4 group-hover:underline decoration-1">
          {category.title}
        </h2>
        <p>{category.description}</p>
      </CardContent>
      <CardFooter>
        <DynamicButton>Explore This Category</DynamicButton>
      </CardFooter>
    </Card>
  );
}
