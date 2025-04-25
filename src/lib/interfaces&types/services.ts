export interface ServiceCategory {
  id: string; // Unique identifier for the category
  title: string; // Display title
  icon: string; // Icon component name from react-icons
  description: string; // Short description for this category
}

export interface SubServiceTier {
  tier: "basic" | "growth" | "scale"; // Tier level
  description: string; // Description of what’s included
}

export interface SubService {
  id: string; // Unique identifier for the sub-service
  categoryId: string; // Links this service to a category via ID
  title: string; // Display title of the service
  description: string; // Description of the service
  introduction?: string;
  tiers: SubServiceTier[]; // Array of tiered offerings
}

export interface SubServiceInformation {
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
  price: number; // price per session
  durationOfSession: number; // e.g., '60 minutes'
  sessions: number; // total number of sessions
  sessionsPerWeek: number;
  totalSessions: number;
  totalPrice: number;
  blackOutDays?: string[];
}