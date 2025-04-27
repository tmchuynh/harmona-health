"use client";

import ResourceCard from "@/components/card/ResourceCard";
import { Button } from "@/components/ui/button";
import { resourceCategory } from "@/lib/resources/resourceCategory";
import { formatUrlToID } from "@/lib/utils/format";
import {
  getResourceInformationById,
  getResourcesByCategoryId,
  groupAndSortByProperties,
  sortByProperty,
} from "@/lib/utils/sort";
import { FaCircleQuestion } from "react-icons/fa6";

export default function Page() {
  async function getVariableById(id: string) {
    try {
      const importedModule = await import(`@/lib/resources/questions/${id}`);

      // Access the exported variable (assuming the variable name follows a consistent pattern)
      const variableName = `${id}Questions`;
      return importedModule[formatUrlToID(variableName)];
    } catch (error) {
      console.error(`Error loading file for id "${id}":`, error);
      return null;
    }
  }
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <div className="mx-auto text-center">
        <h1>
          Unlock Limitless Growth with Expert Resources at Your Fingertips
        </h1>
        <p className="mx-auto mt-2 max-w-4xl text-lg/8">
          Step into a world of possibility where expert guidance meets
          actionable insights—designed to elevate your business, sharpen your
          strategy, and spark unstoppable momentum. Whether you're scaling up or
          just starting out, everything you need to grow, thrive, and lead with
          confidence is just a click away.
        </p>
      </div>

      {/* Categories  */}
      {resourceCategory.map((category, index) => {
        const resources = getResourcesByCategoryId(category.id);
        const groupedAndSorted = groupAndSortByProperties(
          resources,
          "title",
          undefined,
          false,
          true,
          true
        );
        return (
          <div key={`${category.id}-${index}`} className="mt-16 lg:mt-20">
            <div>
              <div>
                <div className="flex items-center gap-6">
                  <h2>{category.title}</h2>
                  <Button
                    size={"icon"}
                    variant={"ghost"}
                    onClick={async () => {
                      try {
                        const questions = await getVariableById(category.id);
                        console.log(questions);
                      } catch (error) {
                        console.error("Failed to load questions:", error);
                      }
                    }}
                    className="hover:bg-transparent hover:text-accent"
                  >
                    <FaCircleQuestion />
                  </Button>
                </div>
                <p key={index}>{category.description}</p>
              </div>
              <div className="gap-x-8 gap-y-12 sm:gap-y-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
                {groupedAndSorted.map((resource, index) => {
                  const resourceInformation = getResourceInformationById(
                    resource.id
                  );

                  return (
                    <ResourceCard
                      resource={resource}
                      key={`${resource.id}-${index}`}
                      information={resourceInformation}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
