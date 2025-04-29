import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
export function FeaturedImageGallery({
  data,
}: {
  data: { imageLink: string }[];
}) {
  const [active, setActive] = React.useState(data[0].imageLink);
  const [length, setLength] = React.useState(data.length);
  React.useEffect(() => {
    if (length > 5) {
      setLength(Math.floor((data.length - 1) / 2));
    } else {
      setLength(data.length - 1);
    }
  }, [data.length]);

  console.log(length);
  console.log("data.length", data.length);

  return (
    <div className="gap-4 grid">
      <div>
        <Image
          className="rounded-lg w-full h-auto aspect-video object-cover object-center"
          src={active}
          alt=""
          width={3600}
          height={3600}
          priority
        />
      </div>
      <div
        className={cn("grid grid-cols-2 gap-3", {
          "lg:grid-cols-5": length > 2,
        })}
      >
        {data.slice(0, 10).map(({ imageLink }, index) => (
          <div key={index}>
            <Image
              onClick={() => setActive(imageLink)}
              src={imageLink}
              className="rounded-lg max-w-full h-20 cursor-pointer aspect-square object-cover object-center"
              alt="gallery-image"
              width={1200}
              height={1200}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
