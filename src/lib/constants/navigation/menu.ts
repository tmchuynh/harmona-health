import { NavigationMenu } from "@/lib/interfaces&types/types";
import {
  BookOpenIcon,
  PuzzlePieceIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import {
  AccessibilityIcon,
  BrainIcon,
  ClipboardCheckIcon,
  FileTextIcon,
  HandshakeIcon,
  HeartPulseIcon,
  LayersIcon,
} from "lucide-react";

export const mainPages: NavigationMenu[] = [
  {
    name: "Overview",
    description:
      "Explore our complete wellness protocols tailored to your goals.",
    href: "/programs",
    icon: HeartPulseIcon,
  },
  {
    name: "Success Stories",
    description: "Read inspiring testimonials from real clients.",
    href: "/about/success-stories",
    icon: UserGroupIcon,
  },
  {
    name: "FAQs",
    description: "Get answers to our most commonly asked questions.",
    href: "/programs/FAQ",
    icon: ClipboardCheckIcon,
  },

  {
    name: "Start Your Journey Today",
    description: "Begin your personalized path toward vibrant health.",
    href: "/programs/start-your-journey",
    icon: PuzzlePieceIcon,
  },
];

export const secondaryPages: NavigationMenu[] = [
  {
    name: "Wellness Library",
    description:
      "Browse expert content, tools, and guides for optimal well-being.",
    href: "/wellness-library",
    icon: BookOpenIcon,
  },
  {
    name: "Digital Resources",
    description: "Access downloadable tools, assessments, and templates.",
    href: "/wellness-library/digital-resources",
    icon: LayersIcon,
  },
  {
    name: "Mental Health Toolkit",
    description: "Empower your mind with practical emotional health resources.",
    href: "/wellness-library/digital-resources/mental-health-toolkit",
    icon: BrainIcon,
  },
  {
    name: "Health Articles",
    description: "Explore educational content written by our experts.",
    href: "/wellness-library/health-articles",
    icon: FileTextIcon,
  },
  {
    name: "Self Assessments",
    href: "/wellness-library/digital-resources/self-assessments",
    description: "Evaluate your wellness with our self-assessment tools.",
    icon: ClipboardCheckIcon,
  },
];

export const aboutPages: NavigationMenu[] = [
  {
    name: "Our Story",
    description: "Learn about our mission and the team behind Harmona Health.",
    href: "/about",
    icon: UserGroupIcon,
  },
  {
    name: "Affiliates & Partnerships",
    description: "Explore our affiliate program and partnership opportunities.",
    href: "/about/affiliates-and-partnerships",
    icon: HandshakeIcon,
  },
  {
    name: "Accessibility Statement",
    description: "Learn about our commitment to accessibility and inclusivity.",
    href: "/about/accessibility-statement",
    icon: AccessibilityIcon,
  },
];

export const singlePage: NavigationMenu[] = [
  {
    name: "Events and Workshops",
    href: "/wellness-library/events-and-workshops",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
