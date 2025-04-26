"use client";
import ProgramCategoryCard from "@/components/card/ProgramCategoryCard";
import { serviceCategories } from "@/lib/constants/services/serviceCategory";
export default function Page() {
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-11/12">
      <h1>Blank</h1>
      <h5>Blank blank blank blank</h5>

      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {serviceCategories.map((category, index) => (
          <ProgramCategoryCard
            category={category}
            index={index}
            key={`${category.id}-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
