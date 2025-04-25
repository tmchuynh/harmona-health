import Image from "next/image";
import React from "react";
export function FeaturedImageGallery({
  data,
}: {
  data: { imageLink: string }[];
}) {
  const [active, setActive] = React.useState(data[0].imageLink);

  return (
    <div className="gap-4 grid">
      <div>
        <Image
          className="rounded-lg w-full max-w-full h-auto md:h-[480px] object-cover object-center"
          src={active}
          alt=""
          width={1470}
          height={980}
        />
      </div>
      <div className="gap-4 grid grid-cols-5">
        {data.map(({ imageLink }, index) => (
          <div key={index}>
            <Image
              onClick={() => setActive(imageLink)}
              src={imageLink}
              className="rounded-lg max-w-full h-20 cursor-pointer object-cover object-center"
              alt="gallery-image"
              width={800}
              height={800}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
