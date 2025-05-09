"use client";

import { ArticleInformation } from "@/lib/interfaces&types/resources";
import { articles } from "@/lib/resources/articles/articles";
import { capitalize, formatUrlToID } from "@/lib/utils/format";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const segments = usePathname().split("/");
  const article = segments[segments.length - 1];
  const articleID = formatUrlToID(article);
  const articleInformation = articles.find(
    (article) => article.title === capitalize(article.title)
  );

  console.log("article", article);
  console.log("articleID", articleID);

  console.log("articleInformation", articleInformation);

  const [articleData, setArticleData] = useState<ArticleInformation[]>([]);

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
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1>Article [article]</h1>
      <h5>Blank blank blank blank</h5>

      <p>
        Ipsum excepteur dolore id velit adipisicing magna quis in commodo sint
        sit nostrud dolor. Eiusmod amet adipisicing consequat ea. Aute voluptate
        sunt sint elit qui aute ea non eiusmod labore. Ea voluptate ex ullamco
        qui aliqua qui minim voluptate ut incididunt nostrud. Cillum elit minim
        cupidatat officia.
      </p>
    </div>
  );
}
