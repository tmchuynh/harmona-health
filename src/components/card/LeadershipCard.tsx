"use client";

import { LeadershipTools } from "@/lib/interfaces&types/resources";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function LeadershipCard({ data }: { data: LeadershipTools }) {
  const router = useRouter();
  return (
    <div className="bg-muted p-6 rounded-2xl">
      <div className="flex md:flex-row flex-col-reverse justify-between items-center gap-4">
        <h3>{data.title}</h3>
        <Button variant={"outline"} onClick={() => router.push(data.href)}>
          Visit Website
        </Button>
      </div>
      <div>
        <h3 className="sr-only">Description</h3>

        <div className="space-y-6">
          <p className="text-base">{data.description}</p>
        </div>
      </div>
      <section className="gap-6 grid grid-cols-1 lg:grid-cols-2 my-2">
        <div className="lg:pr-8 lg:border-gray-200 lg:border-r">
          <h4 className="font-medium">Highlights</h4>

          <div className="mt-4">
            <ul role="list" className="space-y-2 pl-4 list-disc">
              {data.highlights?.map((highlight) => (
                <li key={highlight} className="">
                  <span className="">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h4 className="font-medium">Details</h4>

          <div className="space-y-6 mt-4">
            <p>{data.details}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
