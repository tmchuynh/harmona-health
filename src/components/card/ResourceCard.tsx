import {
  Resource,
  ResourceInformation,
} from "@/lib/interfaces&types/resources";
import Image from "next/image";

export default function ResourceCard({
  resource,
  information,
}: {
  resource: Resource;
  information: ResourceInformation;
}) {
  return (
    <article
      key={resource.id}
      className="group flex flex-col justify-between items-start cursor-pointer"
    >
      <div className="relative mb-5 w-full">
        <Image
          alt=""
          src={resource.image}
          className="rounded-2xl w-full aspect-video object-cover sm:aspect-2/1 lg:aspect-3/2"
          width={360}
          height={240}
        />
      </div>
      <div className="relative h-full">
        <h3>
          <a
            href={resource.href}
            className="underline-offset-2 group-hover:underline"
          >
            {resource.title}
          </a>
        </h3>
        <p className="mt-2 line-clamp-3">{resource.description}</p>
        <p className="mt-2 text-primary">{information?.priceExplanation}</p>
      </div>
    </article>
  );
}
