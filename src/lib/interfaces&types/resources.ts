import { IconType } from "react-icons";

export interface ResourceCategory {
  id: string;
  title: string;
  introduction: string;
  description: string;
  image: string;
  icon: IconType;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  subtitle?: string;
  href: string;
  image: string;
  similarResources?: string[];
  category?: ResourceCategory["id"];
}

export interface ResourceInformation {
  keypoints: string[];
  benefits: string[];
  price: number;
  priceExplanation: string;
  description: string;
}

export interface CategoryQuestion {
  id: string;
  question: string;
  answer: string;
}

export interface Toolkit {
  id: string;
  title: string;
  subtitle?: string;
  introduction?: string;
  description: string[];
  warningText?: string;
  href?: string; // NEEDS TO BE REMOVED
  image?: string;
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  introduction: string;
}

export interface Tool {
  id: string;
  title: string;
  description: string;
  href?: string; // NEEDS TO BE REMOVED
  categoryId: string;
  subtitle?: string;
  introduction?: string[];
}

export interface Events {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  href: string;
  category: string;
}

export interface Company {
  name: string;
  description: string;
  website: string;
  logo: string;
  partnershipDetails?: string;
}

export interface Staff {
  name: string;
  title: string;
  description: string;
  image: string;
}

export interface About {
  name: string;
  description: string[];
  callToAction?: string;
  linkText?: string;
  href: string;
}

export interface AffirmationCards {
  title: string;
  description: string;
  frontImage?: string;
  backImage?: string;
}

export interface JournalPrompts {
  prompt: string;
  ideas: string[];
}

export interface Activity {
  title: string;
  introduction: string;
  description?: string;
  difficulty?: string;
  howToStart?: string[];
  useCases?: string[];
  frequency?: string;
  approximateTime?: string;
  steps: Step[];
  conclusion: string;
  afterThoughts?: string;
  image?: string;
  icon?: string;
}

export type ListDetail = {
  title?: string;
  description: string;
};

export type Step = {
  step: ListDetail;
  note?: string;
  details?: string[];
};

export interface WorkLifeBalance {
  title: string;
  introduction: string[];
  workScenario: string;
  workScenarioDescription: string;
  workScenarioImage: string;
  lifeScenario: string;
  lifeScenarioDescription: string;
  lifeScenarioImage: string;
  reasoning: string;
  conclusion: string;
  afterThoughts?: string;
}

export interface ToolLinks {
  title: string;
  description: string;
  href: string;
  image?: string;
}