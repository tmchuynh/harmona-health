import { IconType } from "react-icons/lib";

export type NotFoundContextType = {
  isNotFound: boolean;
  setNotFound: (value: boolean) => void;
};

export type DynamicButtonProps = {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "accent"
    | "tertiary"
    | "fancy"
    | "destructive"
    | "ghost"
    | "icon"
    | "link"
    | "disabled";
  text: string;
  icon?: IconType;
  hoverIcon?: IconType;
  target?: string;
  rel?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  iconClassName?: string;
};

export type NavigationMenu = {
  name: string;
  description?: string;
  href: string;
  icon?: IconType;
};

export type Data = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string[] | string;
    borderColor?: string[] | string;
    borderWidth?: number;
    fill?: boolean;
    tension?: number;
  }[];
};

export type Workout = {
  exercise: Exercise;
  set: number;
  rep?: number;
  time?: number;
};

export type Exercise = {
  title: string;
  description: string;
  howTo: Step[];
  tips: string[];
};

export type ListDetail = {
  title?: string;
  description: string;
};

export type Step = {
  step: ListDetail;
  note?: string;
  details?: string[];
};

export type Paragraph = {
  image?: string;
  topic: string;
  supporting: string[];
  concluding?: string;
};

export type Section = {
  image?: string;
  title: string;
  subtitle?: string;
  preface?: string[];
  paragraphs: Paragraph[];
};
