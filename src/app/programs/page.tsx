import { Card, CardContent } from "@/components/ui/card";
import { serviceCategories } from "@/lib/constants/services/serviceCategory";
import React from "react";
export default function Page() {
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-11/12">
      <h1>Blank</h1>
      <h5>Blank blank blank blank</h5>

      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {serviceCategories.map((category, index) => (
          <Card key={`${category.id}-${index}`}>
            <CardContent>
              <category.icon className="mb-5 w-10 h-10" />
              <h2>{category.title}</h2>
              <p>{category.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
