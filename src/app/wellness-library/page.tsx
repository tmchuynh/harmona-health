"use client";
import MockButton from "@/components/button/MockButton";
import { icons } from "@/lib/constants/constants";
import { featuredResource, resource } from "@/lib/resources/resource";
import { getRandomIndex } from "@/lib/utils";
import { IconDisplay } from "@/lib/utils/IconDisplay";
import { shuffleArray } from "@/lib/utils/sort";
import Link from "next/link";
import { JSX, useEffect, useState } from "react";
import { FaLeaf } from "react-icons/fa";

export default function Page() {
  const [icon, setIcon] = useState<JSX.Element>(<FaLeaf />);

  useEffect(() => {
    const shuffledIcons = shuffleArray(icons);
    const index = getRandomIndex(shuffledIcons);
    const MainIcon = shuffledIcons[index];

    setIcon(<MainIcon className="mt-2 text-fancy" />);
  }, []);

  return (
    <div className="mx-auto py-12 md:py-24 w-11/12">
      <div className="gap-x-8 gap-y-12 sm:gap-y-16 grid grid-cols-1 lg:grid-cols-2 mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col gap-y-8 lg:gap-y-12">
          {featuredResource.map((featuredResource, index) => (
            <Link href={featuredResource.href} key={index} className="group">
              <article className="mx-auto lg:mx-0 w-full max-w-2xl lg:max-w-lg">
                <h2 className="underline-offset-2 group-hover:underline">
                  {featuredResource.title}{" "}
                </h2>
                <p className="text-lg lg:text-xl">
                  {featuredResource.description}
                </p>
                <MockButton>View This Resource</MockButton>
              </article>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-y-8">
          {resource.map((item, index) => (
            <Link href={item.href} key={index} className="group">
              <article>
                <div className="group relative max-w-xl">
                  <h3 className="flex items-center underline-offset-4 group-hover:underline">
                    <span>
                      <IconDisplay Icon={icon} />
                    </span>{" "}
                    {item.title}
                  </h3>
                  <p>{item.description}</p>
                  <MockButton size="sm" className="text-xs">
                    Read More
                  </MockButton>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
