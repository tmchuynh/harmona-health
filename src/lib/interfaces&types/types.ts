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
  onClick?: () => void;
  className?: string;
  iconClassName?: string;
};

export type NavigationMenu = {
  name: string;
  description?: string;
  href: string;
  icon?: IconType;
};
