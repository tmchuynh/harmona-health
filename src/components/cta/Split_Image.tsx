"use client";

import { CTA } from "@/lib/interfaces&types/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import BackdropButton from "../button/BackdropButton";

export default function CallToActionImage({ cta }: { cta: CTA }) {
  const router = useRouter();
  return (
    <div className="relative bg-primary/30">
      <div className="relative lg:left-0 lg:absolute opacity-70 lg:w-1/3 xl:w-1/2 h-80 md:h-full overflow-hidden">
        <Image
          alt=""
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
          className="size-full object-cover"
          width={900}
          height={800}
        />
        <svg
          viewBox="0 0 926 676"
          aria-hidden="true"
          className="-bottom-24 left-24 absolute blur-[118px] w-[57.875rem] transform-gpu"
        >
          <path
            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
            fill="url(#2c7356-93e0-4a09-a0e6-4c228a0116d8)"
            fillOpacity=".4"
          />
          <defs>
            <linearGradient
              id="2c7356-93e0-4a09-a0e6-4c228a0116d8"
              x1="926.392"
              x2="-109.635"
              y1=".176"
              y2="321.024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#130a91" />
              <stop offset={1} stopColor="#1cd397" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="md:top-10 lg:top-24 md:left-12 lg:left-20 md:absolute mx-auto w-11/12 md:w-9/12 lg:w-2/5">
        <p className="mt-6 text-base/7 md:text-white">{cta.intro}</p>

        {cta.description && (
          <p className="mt-6 text-base/7 md:text-white">{cta.description}</p>
        )}
      </div>
      <div className="relative mx-auto lg:px-8 py-24 lg:py-32 xl:py-40 max-w-7xl">
        <div className="md:ml-auto pr-6 lg:pr-0 pl-6 md:pl-16 lg:pl-24 xl:pl-32 lg:w-2/3 xl:w-1/2">
          <h1 className="text-secondary">{cta.title}</h1>

          {cta.afterButtonText && (
            <p className="mt-6 text-base/7 text-foreground">
              {cta.afterButtonText}
            </p>
          )}
          <div className="mt-8">
            <BackdropButton
              variant={"secondary"}
              className="mx-0 w-full"
              onClick={"/programs/start-your-journey"}
            >
              Get Started Today!
            </BackdropButton>
          </div>
        </div>
      </div>
    </div>
  );
}
