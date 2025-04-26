"use client";
import ProgramCard from "@/components/card/ProgramCard";
import { serviceCategories } from "@/lib/constants/services/serviceCategory";
import { subServices } from "@/lib/constants/services/services";
import { capitalize } from "@/lib/utils/format";
import { usePathname, useRouter } from "next/navigation";

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
      <h5>{category.subtitle}</h5>

      <div className="my-2 md:my-4 lg:my-6">
        {category.introduction.map((intro, index) => (
          <p key={index} className="py-1">
            {intro}
          </p>
        ))}
      </div>

      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredServices.map((service, index) => {
          return (
            <ProgramCard
              service={service}
              categoryId={categoryId}
              index={index}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
