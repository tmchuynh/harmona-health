import Image from "next/image";

export function QuadGallery({ data }: { data: { imageLink: string }[] }) {
  return (
    <div className="gap-2 grid grid-cols-2">
      {data.map(({ imageLink }, index) => (
        <div key={index}>
          <Image
            className="rounded-lg max-w-full h-40 md:h-60 object-cover object-center"
            src={imageLink}
            alt=""
            width={500}
            height={500}
          />
        </div>
      ))}
    </div>
  );
}
