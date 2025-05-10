"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useToolContext } from "@/context/toolContext";
import { CommunicationTools } from "@/lib/interfaces&types/resources";
import { cn, getToolResource } from "@/lib/utils";
import { formatUrlToID } from "@/lib/utils/format";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Page() {
  const { tool, toolKit, toolKitID, toolInformation } = useToolContext();
  const [loading, setLoading] = useState(true);
  const [toolData, setToolData] = useState<CommunicationTools[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Await the Promise from getToolResource
        const data = await getToolResource(toolKit, tool, formatUrlToID(tool));
        setToolData(data);
      } catch (error) {
        console.error("Failed to load affirmation cards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [toolKit, toolKitID]);

  return (
    <div className="mx-auto">
      {toolInformation?.subtitle && <h2>{toolInformation.subtitle}</h2>}

      {toolInformation?.introduction &&
        toolInformation.introduction.map((intro: string, index: number) => (
          <p key={index}>{intro}</p>
        ))}

      <section className="gap-4 xl:gap-8 grid lg:grid-cols-2 my-8">
        {toolData.map((data, index) => (
          <Card key={index}>
            <CardHeader>
              <h3>{data.title}</h3>
              <p>{data.description}</p>
            </CardHeader>
            <CardContent>
              <section className="gap-5 grid lg:grid-cols-5 my-3">
                {data.image && (
                  <Image
                    src={data.image}
                    alt={data.title}
                    className="col-span-2 rounded-lg w-full h-full object-cover object-center aspect-square"
                    width={500}
                    height={300}
                  />
                )}
                <div
                  className={cn("col-span-3 flex flex-col gap-3 h-full", {
                    "col-span-5": !data.image,
                  })}
                >
                  {data.items.item.map((item, iIndex) => (
                    <div key={iIndex}>
                      {item.title && <h4>{item.title}</h4>}
                      {item.description && <p>{item.description}</p>}
                      <ul className="list-inside list=[upper-roman]">
                        {item.examples.map((example, eIndex) => (
                          <li key={eIndex}>{example}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
