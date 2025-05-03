import Image from "next/image";

export function QuadGallery({ data }: { data: string[] }) {
  return (
    <div className="gap-2 grid lg:grid-cols-2 mx-auto lg:mt-3 xl:mt-0 py-2 md:py-5 lg:py-12">
      {data.map((data, index) => (
        <div key={index}>
          <Image
            className="rounded-lg max-w-full h-40 md:h-60 object-cover object-center"
            src={data}
            alt=""
            width={500}
            height={500}
          />
        </div>
      ))}
    </div>
  );
}
