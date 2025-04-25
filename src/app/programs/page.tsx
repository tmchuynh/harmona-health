"use client";

import DynamicButton from "@/components/button/button-dynamic";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { serviceCategories } from "@/lib/constants/services/serviceCategory";
import { useRouter } from "next/navigation";
export default function Page() {
  const router = useRouter();
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-11/12">
      <h1>Blank</h1>
      <h5>Blank blank blank blank</h5>

      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {serviceCategories.map((category, index) => (
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
        ))}
      </div>
    </div>
  );
}
