"use client";
import { Toolkit } from "@/lib/interfaces&types/resources";
import { formatToURL } from "@/lib/utils/format";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ToolkitCard({ toolkit }: { toolkit: Toolkit }) {
  const router = useRouter();
  return (
    <div key={toolkit.id} className="group flex flex-col gap-6 cursor-pointer">
      {toolkit.image && (
        <Image
          alt=""
          src={toolkit.image}
          className="flex-none rounded-2xl w-52 aspect-4/5 object-cover"
          width={400}
          height={500}
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 30vw, 50vw"
        />
      )}
      <div className="flex-auto">
        <h3
          onClick={() =>
            router.push(
              `/wellness-library/digital-resources/mental-health-toolkit/${formatToURL(
                toolkit.title
              )}`
            )
          }
          className="w-3/4 underline-offset-2 group-hover:underline"
        >
          {toolkit.title}
        </h3>
        <h5>{toolkit.subtitle}</h5>
      </div>
    </div>
  );
}
