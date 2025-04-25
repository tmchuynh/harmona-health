import { IconType } from "react-icons";

export interface ServiceCategory {
  id: string;
  title: string;
  icon: IconType;
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
  introduction?: string;
  tiers: Tier[];
}

export interface ServiceInformation {
  subServiceId: string;
  introduction: string;
  keypoints: string[];
  outcomes: string[];
  goals: string[];
  image: string;
  benefits: string[];
}

export interface ServiceTierInformation {
  subServiceId: string;
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
