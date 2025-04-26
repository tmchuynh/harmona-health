import { NavigationMenu } from "@/lib/interfaces&types/types";
import {
  BookOpenIcon,
  PuzzlePieceIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import {
  HeartPulseIcon,
  LayersIcon,
  BrainIcon,
  FileTextIcon,
  HandshakeIcon,
  ClipboardCheckIcon,
  AccessibilityIcon,
  BookTextIcon,
} from "lucide-react";

export const mainPages: NavigationMenu[] = [
  {
    name: "Programs",
    description:
      "Explore our complete wellness protocols tailored to your goals.",
    href: "/programs",
    icon: HeartPulseIcon,
  },
  {
    name: "Success Stories",
    description: "Read inspiring testimonials from real clients.",
    href: "/programs/start-your-journey/success-stories",
    icon: UserGroupIcon,
  },
  {
    name: "FAQs",
    description: "Get answers to our most commonly asked questions.",
    href: "/programs/FAQ",
    icon: ClipboardCheckIcon,
  },
  {
    name: "Wellness Library",
    description:
      "Browse expert content, tools, and guides for optimal well-being.",
    href: "/wellness-library",
    icon: BookOpenIcon,
  },
  {
    name: "Start Your Journey Today",
    description: "Begin your personalized path toward vibrant health.",
    href: "/programs/start-your-journey",
    icon: PuzzlePieceIcon,
  },
];

export const seccondaryPages: NavigationMenu[] = [
  {
    name: "Digital Products",
    description: "Access downloadable tools, assessments, and templates.",
    href: "/wellness-library/digital-products",
    icon: LayersIcon,
  },
  {
    name: "Health Articles",
    description: "Explore educational content written by our experts.",
    href: "/wellness-library/health-articles",
    icon: FileTextIcon,
  },
  {
    name: "Mental Health Toolkit",
    description: "Empower your mind with practical emotional health resources.",
    href: "/wellness-library/digital-products/meantal-health-toolkit",
    icon: BrainIcon,
  },
];

export const callsToAction: NavigationMenu[] = [
  {
    name: "Affiliates & Partnerships",
    href: "/about/affiliates-and-partnerships",
    icon: HandshakeIcon,
  },
  {
    name: "Self Assessments",
    href: "/wellness-library/digital-products/self-assessments",
    icon: ClipboardCheckIcon,
  },
];

export const callsToActionSecondary: NavigationMenu[] = [
  {
    name: "Accessibility Statement",
    href: "/about/accessibillity-statement",
    icon: AccessibilityIcon,
  },
  {
    name: "Wellness Dictionary",
    href: "/wellness-library/digital-products/wellness-dictionary",
    icon: BookTextIcon,
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
