"use client";

import { ArticleInformation } from "@/lib/interfaces&types/resources";
import { articles } from "@/lib/resources/articles/articles";
import { cn } from "@/lib/utils";
import { capitalize, formatUrlToID } from "@/lib/utils/format";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const segments = usePathname().split("/");
  const article = segments[segments.length - 1];

  console.log(capitalize(article));
  const articleID = formatUrlToID(article);
  const articleInformation = articles.find(
    (a) => a.title === capitalize(article)
  );

  console.log("article", article);
  console.log("articleID", articleID);

  console.log("articleInformation", articleInformation);

  const [articleData, setArticleData] = useState<ArticleInformation>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articleModule = await import(
          `@/lib/resources/articles/${article}`
        );
        // Return the specific named export that matches articleID
        if (articleModule[articleID]) {
          setArticleData(articleModule[articleID]);
        } else {
          console.error(`Export named ${articleID} not found in module`);
        }
      } catch (error) {
        console.error(`Error loading resource: ${error}`);
      }
    };

    fetchData();
  }, [article, articleID]);

  console.log("articleData", articleData);

  return (
    <>
      {articleInformation && (
        <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
          <div className="items-center gap-9 lg:gap-5 grid md:grid-cols-3 lg:grid-cols-6 mb-5">
            <div
              className={cn("md:col-span-2 lg:col-span-4", {
                "md:col-span-3 lg:col-span-6": !articleData?.image,
              })}
            >
              <h1>{articleInformation.title}</h1>
              <h5>{articleInformation.subtitle}</h5>

              {articleData?.preface.map((p, pIndex) => (
                <p key={pIndex} className="indent-5">
                  {p}
                </p>
              ))}
            </div>
            {articleData?.image && (
              <Image
                src={articleData.image}
                alt={articleInformation.title}
                className="order-first lg:col-span-2 my-4 rounded-2xl w-full h-full object-cover object-center lg:aspect-video"
                width={1000}
                height={1000}
              />
            )}
          </div>

          {articleData && (
            <section className="flex flex-col gap-4 lg:gap-6">
              <div className="flex flex-col gap-4 lg:gap-6">
                {articleData.sections.map((section, aIndex) => (
                  <div key={aIndex}>
                    <div className="items-center gap-6 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 my-3">
                      {section.image && (
                        <div
                          className={cn("col-span-3 lg:col-span-3", {
                            "order-last": aIndex % 2 === 0,
                          })}
                        >
                          <Image
                            src={section.image}
                            alt={section.title}
                            className="my-4 rounded-2xl w-full h-auto object-cover object-center lg:aspect-9/10"
                            width={1000}
                            height={1000}
                          />
                        </div>
                      )}
                      <div
                        className={cn("col-span-3 lg:col-span-5", {
                          "md:col-span-6 lg:col-span-8": !section.image,
                        })}
                      >
                        {section.subtitle && <h5>{section.subtitle}</h5>}
                        <h2>{section.title}</h2>
                        {section.preface &&
                          section.preface.map((content, sIndex) => (
                            <p key={sIndex} className="indent-5">
                              {content}
                            </p>
                          ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 lg:gap-6">
                      {section.paragraphs.map((paragraph, pIndex) => (
                        <div key={pIndex}>
                          <div
                            className={cn(
                              "gap-6 lg:gap-8 grid grid-cols-1 items-center md:grid-cols-6 lg:grid-cols-8"
                            )}
                          >
                            <div
                              className={cn(
                                "col-span-3 lg:col-span-4 xl:col-span-5 2xl:col-span-6",
                                {
                                  "lg:col-span-5": pIndex % 2 === 0,
                                  "order-last": pIndex % 3 === 0,
                                  "col-span-6 lg:col-span-8 xl:col-span-8 2xl:col-span-8":
                                    !paragraph.image,
                                }
                              )}
                            >
                              <h3>{paragraph.topic}</h3>
                              {paragraph.supporting.map((content, sIndex) => (
                                <p key={sIndex} className="indent-5">
                                  {content}
                                </p>
                              ))}
                            </div>

                            {paragraph.image && (
                              <div
                                className={cn(
                                  "col-span-3 lg:col-span-4 xl:col-span-3 2xl:col-span-2 flex flex-col h-full justify-center",
                                  {
                                    "lg:col-span-3": pIndex % 2 === 0,
                                    "": pIndex % 3 === 0,
                                  }
                                )}
                              >
                                <Image
                                  src={paragraph.image}
                                  alt={paragraph.topic}
                                  className="my-4 rounded-2xl w-full h-full lg:aspect-square object-cover"
                                  width={1000}
                                  height={1000}
                                />
                              </div>
                            )}
                          </div>
                          {paragraph.concluding && (
                            <p className="indent-5">{paragraph.concluding}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h2>Conclusion</h2>
                {articleData.conclusion.map((conclusion, cIndex) => (
                  <p key={cIndex} className="indent-5">
                    {conclusion}
                  </p>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </>
  );
}
