"use client";
import { DynamicButtonProps } from "@/lib/interfaces&types/types";
import { cn } from "@/lib/utils";
import { shuffleArray, simpleShuffleArray } from "@/lib/utils/sort";
import React, { JSX, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { icons } from "@/lib/constants/constants";

/**
 * A dynamic button component that can display different icons on hover.
 *
 * @component
 * @param {Object} props - The component props
 * @param {"default" | string} [props.variant="default"] - The button variant style
 * @param {React.ReactNode} props.children - The content to display inside the button
 * @param {React.ElementType} [props.icon] - The primary icon to display. If not provided, a random icon will be selected
 * @param {React.ElementType} [props.hoverIcon] - The icon to display on hover. If not provided, a random different icon will be selected
 * @param {() => void} [props.onClick] - Click event handler
 * @param {string} [props.href] - URL for the button link
 * @param {string} [props.className] - Additional CSS classes for the button
 * @param {string} [props.iconClassName] - Additional CSS classes for the icon container
 *
 * @returns {JSX.Element} A dynamic button with icons that change on hover
 *
 * @example
 * <DynamicButton
 *   variant="outline"
 *   icon={HomeIcon}
 *   hoverIcon={PlusIcon}
 *   href="/dashboard"
 * >
 *   Dashboard
 * </DynamicButton>
 */
export default function DynamicButton({
  variant = "default",
  children,
  icon,
  hoverIcon,
  onClick,
  href,
  className,
  iconClassName,
}: Omit<DynamicButtonProps, "text"> & {
  children: React.ReactNode;
}): JSX.Element {
  const [initialIcon, setInitialIcon] = useState<React.ElementType | null>(
    null
  );
  const [alternateIcon, setAlternateIcon] = useState<React.ElementType | null>(
    null
  );
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Assign fallback icons if not provided
    if (!icon) {
      let shuffled = simpleShuffleArray(Object.values(icons));

      // Use Date.now() and Math.random() to select the first icon
      const now = Date.now();
      const index =
        (now + Math.floor(Math.random() * shuffled.length)) % shuffled.length;
      const first = shuffled[index];

      shuffled = shuffleArray(Object.values(icons)).filter(
        (ic) => ic !== first
      );
      const second =
        hoverIcon || shuffled[Math.floor(Math.random() * shuffled.length)];

      setInitialIcon(() => first);
      setAlternateIcon(() => second);
    } else {
      setInitialIcon(() => icon);
      setAlternateIcon(
        () =>
          hoverIcon || Object.values(icons).find((ic) => ic !== icon) || icon
      );
    }
  }, [icon, hoverIcon]);

  const ActiveIcon = isHovered ? alternateIcon : initialIcon;

  return (
    <Button
      variant={variant}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "mt-2 group gap-0 flex w-fit shadow-md cursor-pointer font-bold font-[Nunito] uppercase",
        {
          "inline w-fit px-0 mx-0 shadow-none": variant === "link",
        },
        className
      )}
    >
      {ActiveIcon && variant !== "link" && (
        <span
          className={cn("inline-block px-4 text-background", iconClassName, {
            "text-foreground group-hover:text-background":
              variant === "outline",
          })}
        >
          <ActiveIcon className="w-4 h-4 transition-all duration-300 ease-in-out" />
        </span>
      )}
      <a href={href} className="px-3">
        {children}
      </a>
      {ActiveIcon && variant !== "link" && (
        <span
          className={cn("inline-block px-4 text-background", iconClassName, {
            "text-foreground group-hover:text-background":
              variant === "outline",
          })}
        >
          <ActiveIcon className="w-4 h-4" />
        </span>
      )}
    </Button>
  );
}
