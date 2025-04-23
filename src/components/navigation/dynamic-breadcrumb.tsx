"use client";

import useMediumScreen from "@/lib/screens/useMediumScreen";
import useSmallScreen from "@/lib/screens/useSmallScreen";
import {
  capitalize,
  clipString,
  compareStringWordCount,
} from "@/lib/utils/format";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/ui/breadcrumb";

import { usePathname } from "next/navigation";
import { JSX } from "react";

const formatSegment = (segment: string): string => {
  const label = capitalize(segment);
  return compareStringWordCount(label, 4) ? label : clipString(label, 15);
};

export default function DynamicBreadcrumb(): JSX.Element {
  const pathname = usePathname();
  const isSmallScreen = useSmallScreen();
  const isMediumScreen = useMediumScreen();

  const pathSegments = pathname.split("/").filter(Boolean);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    const isLast = index === pathSegments.length - 1;
    const label = formatSegment(segment);

    return (
      <BreadcrumbItem key={href}>
        {isLast ? (
          <span>{label}</span>
        ) : (
          <BreadcrumbLink
            href={href}
            className="text-blue-500 hover:underline transition"
          >
            {label}
          </BreadcrumbLink>
        )}
      </BreadcrumbItem>
    );
  });

  let visibleBreadcrumbs: JSX.Element[] = [];

  if (isSmallScreen) {
    if (breadcrumbs.length) {
      visibleBreadcrumbs = [breadcrumbs[breadcrumbs.length - 1]];
    }
  } else if (isMediumScreen) {
    const lastTwo = breadcrumbs.slice(-2);
    visibleBreadcrumbs = [
      <BreadcrumbItem key="home">
        <BreadcrumbLink
          href="/"
          className="text-blue-500 hover:underline transition"
        >
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>,
      ...lastTwo,
    ];
  } else {
    visibleBreadcrumbs = [
      <BreadcrumbItem key="home">
        <BreadcrumbLink
          href="/"
          className="text-blue-500 hover:underline transition"
        >
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>,
      ...breadcrumbs,
    ];
  }

  return (
    <Breadcrumb className="px-4 py-2 w-full">
      <BreadcrumbList className="bg-gray-50 shadow-sm px-4 py-2 rounded-lg">
        {visibleBreadcrumbs}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
