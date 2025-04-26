import {
  Resource,
  ResourceInformation,
} from "@/lib/interfaces&types/resources";
import Image from "next/image";
import { Button } from "../ui/button";
import { FaEye } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant={"outline"}
              size={"icon"}
              className="top-4 right-4 absolute cursor-pointer"
            >
              <span className="sr-only">View</span>
              <FaEye />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="sr-only">More Information</DialogTitle>
              <h3>More Information</h3>
              <DialogDescription>{information?.description}</DialogDescription>
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
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Image
          alt=""
          src={resource.image}
          className="rounded-2xl w-full aspect-video object-cover sm:aspect-2/1 lg:aspect-3/2"
          width={360}
          height={240}
        />
      </div>
      <div className="group relative h-full">
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
