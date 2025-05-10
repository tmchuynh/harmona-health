"use client";

import { Article } from "@/lib/interfaces&types/resources";
import { formatToURL } from "@/lib/utils/format";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BackdropButton from "../button/BackdropButton";

export default function ArticleCard({ article }: { article: Article }) {
  const router = useRouter();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div
      key={article.id}
      className="group flex flex-col justify-between h-full cursor-pointer"
    >
      <div>
        <Image
          alt=""
          src={theme === "dark" ? article.darkImage : article.image}
          className="rounded-2xl w-full aspect-3/2 object-cover"
          width={800}
          height={900}
        />
      </div>
      <div className="flex flex-col justify-between h-full min-h-[20em] md:min-h-[16em] lg:min-h-[20em] xl:min-h-[15em]">
        <div>
          <h3
            onClick={() =>
              router.push(
                `/wellness-library/health-articles/${formatToURL(
                  article.title
                )}`
              )
            }
            className="mt-3 underline-offset-2 group-hover:underline"
          >
            {article.title}
          </h3>
          <h5>{article.subtitle}</h5>
          <p>{article.description}</p>
        </div>
        <BackdropButton
          onClick={`/wellness-library/health-articles/${formatToURL(
            article.title
          )}`}
        >
          Read This Article
        </BackdropButton>
      </div>
    </div>
  );
}
