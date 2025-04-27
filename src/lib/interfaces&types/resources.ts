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
  href: string;
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
  href: string; // NEEDS TO BE REMOVED
  categoryId: string;
}