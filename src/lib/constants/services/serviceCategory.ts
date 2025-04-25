import { PiFlowerLotusFill } from "react-icons/pi";

import {
  GiMeal,
  GiMeditation,
  GiOfficeChair,
  GiWeightLiftingUp,
} from "react-icons/gi";
import { ServiceCategory } from "@/lib/interfaces&types/services";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "wellness-programs",
    title: "Wellness Programs",
    icon: PiFlowerLotusFill,
    description:
      "Holistic programs tailored to balance mind, body, and spirit.",
  },
  {
    id: "nutrition-coaching",
    title: "Nutrition Coaching",
    icon: GiMeal,
    description: "Personalized meal planning and dietary guidance.",
  },
  {
    id: "fitness-training",
    title: "Fitness Training",
    icon: GiWeightLiftingUp,
    description: "One-on-one and group training for all fitness levels.",
  },
  {
    id: "mental-health",
    title: "Mental Health Support",
    icon: GiMeditation,
    description:
      "Guided practices and licensed therapy sessions for emotional wellness.",
  },
  {
    id: "corporate-wellness",
    title: "Corporate Wellness",
    icon: GiOfficeChair,
    description:
      "Health solutions for teams and organizations to foster productivity and well-being.",
  },
];
