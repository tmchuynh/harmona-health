"use client";

import { Card, CardContent } from "@/components/ui/card";
import { serviceCategories } from "@/lib/constants/services/serviceCategory";
import { subServices } from "@/lib/constants/services/services";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
export default function Page() {
  const segments = usePathname().split("/");
  const categoryId = segments[segments.length - 1];
  const filteredServices = subServices.filter((service) =>
    serviceCategories.some(() => categoryId === service.categoryId)
  );

  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-11/12">
      <h1>Blank</h1>
      <h5>Blank blank blank blank</h5>

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
            <Link
              key={`${service.id}-${index}`}
              href={`/programs/${categoryId}/${service.id}`}
            >
              <Card>
                <CardContent>
                  <h2>{service.title}</h2>
                  <p>{service.introduction}</p>
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
