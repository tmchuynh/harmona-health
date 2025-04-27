import ResourceCard from "@/components/card/ResourceCard";
import { resourceCategory } from "@/lib/resources/resourceCategory";
import {
  getResourceInformationById,
  getResourcesByCategoryId,
  sortByProperty,
} from "@/lib/utils/sort";

export default function Page() {
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-11/12">
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
        const sortedResources = sortByProperty(resources, "title");
        return (
          <div key={`${category.id}-${index}`} className="mt-16 lg:mt-20">
            <h2>{category.title}</h2>
            <p>{category.introduction}</p>
            <div className="gap-x-8 gap-y-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto lg:mx-0 mt-16 lg:max-w-none">
              {sortedResources.map((resource, index) => {
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
        );
      })}
    </div>
  );
}
