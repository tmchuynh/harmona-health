import {
  Resource,
  ResourceInformation,
} from "@/lib/interfaces&types/resources";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaInfoCircle } from "react-icons/fa";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

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
      className="flex flex-col justify-between items-start"
    >
      <div className="relative mb-5 w-full">
        <Image
          alt=""
          src={resource.image}
          className={cn(
            "rounded-2xl w-full aspect-video object-cover md:aspect-2/1 lg:aspect-3/2",
            {
              "aspect-2/3 md:aspect-3/5 lg:aspect-1/2 w-1/2":
                resource.category === "mental-health-apps",
            },
            {
              "aspect-2/3 md:aspect-2/3 lg:aspect-2/3 w-2/3":
                resource.category === "recommended-books-and-articles",
            },
            {
              "aspect-square md:aspect-square lg:aspect-square w-2/3":
                resource.category === "podcasts",
            }
          )}
          width={360}
          height={240}
        />
      </div>
      <div className="relative h-full cursor-pointer">
        <div className="flex items-center gap-5 -ml-2">
          <h3>
            <a
              href={resource.href}
              className="underline-offset-2 hover:underline"
            >
              {resource.title}
            </a>
          </h3>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant={"icon"} size={"icon"} className="cursor-pointer">
                <span className="sr-only">View</span>
                <FaInfoCircle />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="sr-only">More Information</DialogTitle>
                <h2>{resource.title}</h2>
                <DialogDescription>
                  {information?.description}
                </DialogDescription>
              </DialogHeader>
              <div className="gap-4 grid py-4">
                <div className="flex flex-col gap-2">
                  <h4>Key Points</h4>
                  <ul className="pl-5 list-disc">
                    {information?.keypoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  <h4>Benefits</h4>
                  <ul className="pl-5 list-disc">
                    {information?.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <p className="mt-2 line-clamp-3">{resource.description}</p>
        <p className="mt-2 text-primary">{information?.priceExplanation}</p>
      </div>
    </article>
  );
}
