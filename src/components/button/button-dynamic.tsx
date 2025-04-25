import { cn } from "@/lib/utils";
import React, { JSX } from "react";
import { Button } from "../ui/button";
import { DynamicButtonProps } from "@/lib/interfaces&types/types";
import { FaLeaf } from "react-icons/fa";
import {
  GiChestnutLeaf,
  GiMonsteraLeaf,
  GiVineLeaf,
  GiYinYang,
} from "react-icons/gi";
import { RiLeafFill } from "react-icons/ri";
import { ImLeaf } from "react-icons/im";
import { PiFlowerLotusDuotone } from "react-icons/pi";

const icons = [
  FaLeaf,
  GiMonsteraLeaf,
  GiVineLeaf,
  ImLeaf,
  RiLeafFill,
  GiChestnutLeaf,
  PiFlowerLotusDuotone,
  GiYinYang,
];

/**
 * A dynamic button component that can display icons alongside its content.
 *
 * @param variant - The visual style of the button ("default" by default).
 * @param children - The content to display inside the button.
 * @param Icon - The icon component to display (FaLeaf by default).
 * @param onClick - The function to call when the button is clicked.
 * @param className - Additional CSS classes to apply to the button.
 * @param iconClassName - Additional CSS classes to apply to the icon container.
 *
 * @returns JSX Element representing the button.
 *
 * @example
 * ```tsx
 * <DynamicButton
 *   variant="primary"
 *   onClick={() => console.log("Button clicked")}
 *   className="my-custom-class"
 *   icon={FaHeart}
 * >
 *   Click Me
 * </DynamicButton>
 * ```
 */
export default function DynamicButton({
  variant = "default",
  children,
  icon: Icon = icons[Math.floor(Math.random() * icons.length)],
  onClick,
  href,
  className,
  iconClassName,
}: Omit<DynamicButtonProps, "text"> & {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      className={cn(
        "mt-2 group gap-0 flex w-fit shadow-md cursor-pointer font-bold font-[Nunito] uppercase",
        {
          "inline w-fit p-0 m-0": variant === "link",
        },
        className
      )}
    >
      {Icon && (
        <span
          className={cn("inline-block px-4 text-background", iconClassName)}
        >
          <Icon className="w-4 h-4" />
        </span>
      )}
      <a href={href} className="px-3">
        {children}
      </a>
      {Icon && variant !== "link" && (
        <span
          className={cn("inline-block px-4 text-background", iconClassName)}
        >
          <Icon className="w-4 h-4" />
        </span>
      )}
    </Button>
  );
}
