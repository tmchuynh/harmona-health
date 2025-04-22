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
  tiers: SubServiceTier[]; // Array of tiered offerings
}
