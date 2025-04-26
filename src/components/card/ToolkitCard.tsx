"use client";
import { Resource } from "@/lib/interfaces&types/resources";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ToolkitCard({
  toolkit,
  index,
  className,
}: {
  toolkit: Resource;
  index: number;
  className?: string;
}) {
  const router = useRouter();
  return (
    <article
      key={toolkit.id}
      className={cn(`relative flex flex-col gap-8 isolate ${className}`, {
        "lg:flex-row": index % 2 === 0,
        "lg:flex-row-reverse text-right": index % 2 !== 0,
      })}
    >
      <div className="relative lg:w-64 aspect-video sm:aspect-2/1 lg:aspect-square lg:shrink-0">
        <Image
          alt=""
          src={toolkit.image}
          className="shadow-md rounded-2xl size-full object-cover"
          width={1200}
          height={800}
        />
      </div>
      <div className="group">
        <h3
          onClick={() => router.push(toolkit.href)}
          className="underline-offset-2 group-hover:underline"
        >
          {toolkit.title}
        </h3>
        <h5>{toolkit.subtitle}</h5>
        <p>{toolkit.description}</p>
      </div>
    </article>
  );
}
