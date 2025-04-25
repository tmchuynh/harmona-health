"use client";

import DynamicButton from "@/components/button/button-dynamic";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { serviceCategories } from "@/lib/constants/services/serviceCategory";
import { subServices } from "@/lib/constants/services/services";
import { capitalize } from "@/lib/utils/format";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import {
  RiComputerFill,
  RiComputerLine,
  RiFireFill,
  RiFireLine,
  RiVipCrownFill,
  RiVipCrownLine,
} from "react-icons/ri";


export default function Page() {
  const segments = usePathname().split("/");
  const router = useRouter();
  const categoryId = segments[segments.length - 1];
  const filteredServices = subServices.filter((service) =>
    serviceCategories.some(() => categoryId === service.categoryId)
  );

  const category = serviceCategories.find(
    (category) => category.id === categoryId
  );

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-11/12">
      <category.icon className="mb-2 w-10 lg:w-15 2xl:w-20 h-10 lg:h-15 2xl:h-20 text-tertiary" />
      <h1>{capitalize(categoryId)}</h1>
      <h5>{category.description}</h5>

      <p className="pb-8">
        Ipsum excepteur dolore id velit adipisicing magna quis in commodo sint
        sit nostrud dolor. Eiusmod amet adipisicing consequat ea. Aute voluptate
        sunt sint elit qui aute ea non eiusmod labore. Ea voluptate ex ullamco
        qui aliqua qui minim voluptate ut incididunt nostrud. Cillum elit minim
        cupidatat officia.
      </p>

      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredServices.map((service, index) => {
          return (
            <Card
              key={`${service.id}-${index}`}
              className="group flex flex-col justify-between h-full min-h-[20rem] cursor-pointer"
              onClick={() =>
                router.push(`/programs/${categoryId}/${service.id}`)
              }
            >
              <CardContent>
                <h2 className="underline-offset-4 group-hover:underline decoration-1">
                  {service.title}
                </h2>
                <p>{service.description}</p>
              </CardContent>
              <CardFooter>
                {service.title === "Executive Health Coaching" ? (
                  <DynamicButton
                    icon={RiVipCrownFill}
                    hoverIcon={RiVipCrownLine}
                  >
                    Explore This Program
                  </DynamicButton>
                ) : service.title === "Tech-Life Balance Training" ? (
                  <DynamicButton
                    icon={RiComputerFill}
                    hoverIcon={RiComputerLine}
                  >
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
        })}
      </div>
    </div>
  );
}
