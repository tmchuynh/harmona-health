import { NavigationMenu } from "@/lib/interfaces&types/types";
import { SquaresPlusIcon } from "@heroicons/react/24/outline";
import { ChartPieIcon, PhoneIcon, PlayCircleIcon } from "lucide-react";

export const mainPages: NavigationMenu[] = [
  {
    name: "Programs",
    description: "Get a better understanding of your traffic",
    href: "/programs",
    icon: ChartPieIcon,
  },
  {
    name: "Sucess Stories",
    description: "Connect with third-party tools",
    href: "/programs/start-your-journey/success-stories",
    icon: SquaresPlusIcon,
  },
  {
    name: "FAQs",
    description: "Connect with third-party tools",
    href: "/programs/FAQ",
    icon: SquaresPlusIcon,
  },
  {
    name: "Wellness Library",
    description: "Get a better understanding of your traffic",
    href: "/wellness-library",
    icon: ChartPieIcon,
  },
  {
    name: "Start",
    description: "Connect with third-party tools",
    href: "/programs/start-your-journey",
    icon: SquaresPlusIcon,
  },
];

export const seccondaryPages: NavigationMenu[] = [
  {
    name: "Digital Products",
    description: "Connect with third-party tools",
    href: "/wellness-library/digital-products",
    icon: SquaresPlusIcon,
  },
  {
    name: "Wellness Articles",
    description: "Get a better understanding of your traffic",
    href: "/wellness-library/articles",
    icon: ChartPieIcon,
  },
  {
    name: "Health Toolkit",
    description: "Connect with third-party tools",
    href: "/wellness-library/digital-products/health-toolkit",
    icon: SquaresPlusIcon,
  },
];

export const callsToAction: NavigationMenu[] = [
  {
    name: "Affiliates & Partnerships",
    href: "/about/affiliates-and-partnerships",
    icon: PlayCircleIcon,
  },
  {
    name: "Assessments",
    href: "/wellness-library/digital-products/assessments",
    icon: PhoneIcon,
  },
];

export const callsToActionSecondary: NavigationMenu[] = [
  {
    name: "Accessibility Statement",
    href: "/about/accessibillity-statement",
    icon: PlayCircleIcon,
  },
  {
    name: "Wellness Dictionary",
    href: "/wellness-library/digital-products/wellness-dictionary",
    icon: PhoneIcon,
  },
];

export const singlePage: NavigationMenu[] = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Events and Workshops",
    href: "/wellness-library/events-and-workshops",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
