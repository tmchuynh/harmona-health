import { JSX } from "react";
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

export interface ListDetail {
  title?: string;
  description?: string | JSX.Element;
  list?: ListDetail[];
}

export interface CTA extends ListDetail {
  intro: string;
  button: string;
  afterButtonText?: string;
}
