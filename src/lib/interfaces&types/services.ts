import { IconType } from "react-icons";

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: IconType;
  introduction: string[];
  description: string;
}

export interface Tier {
  tier: "basic" | "growth" | "scale";
  description: string;
}

export interface Service {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  introduction: string;
  tiers: Tier[];
}

export interface ServiceInformation {
  serviceId: string;
  introduction: string;
  keypoints: string[];
  outcomes: string[];
  goals: string[];
  image: string;
  benefits: string[];
}

export interface ServiceTierInformation {
  serviceId: string;
  tier: "basic" | "growth" | "scale";
  introduction: string;
  price: number;
  durationOfSession: number;
  sessions: number;
  sessionsPerWeek: number;
  totalSessions: number;
  totalPrice: number;
  blackOutDays?: string[];
}
