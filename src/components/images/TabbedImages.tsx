import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export function GalleryWithTab({
  data,
}: {
  data: { label: string; value: string; images: { imageLink: string }[] }[];
}) {
  return (
    <Tabs value="html">
      <TabsList>
        {data.map(({ label, value }) => (
          <TabsTrigger key={value} value={value}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="gap-4 grid grid-cols-1">
        {data.map(({ value, images }) => (
          <TabsContent
            value={value}
            className="gap-4 grid grid-cols-2 md:grid-cols-3"
            key={value}
          >
            {images.map(({ imageLink }, index) => (
              <div key={index}>
                <Image
                  className="rounded-lg w-full max-w-full h-40 object-cover object-center"
                  src={imageLink}
                  alt="image-photo"
                  width={500}
                  height={500}
                />
              </div>
            ))}
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}
