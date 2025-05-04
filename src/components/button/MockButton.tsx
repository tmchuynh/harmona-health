import { icons } from "@/lib/constants/constants";
import { cn } from "@/lib/utils";
import { shuffleArray, simpleShuffleArray } from "@/lib/utils/sort";
import { useEffect, useState } from "react";
import { buttonVariants } from "../ui/button";

export default function MockButton({
  variant = "default",
  size = "default",
  children,
  className,
  icon,
  hoverIcon,
  iconClassName,
}: {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "tertiary"
    | "fancy"
    | "icon"
    | "accent"
    | "disabled";
  size?: "default" | "sm" | "lg" | "icon";
  children: React.ReactNode;
  className?: string;
  icon?: React.ElementType;
  hoverIcon?: React.ElementType;
  iconClassName?: string;
}) {
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
    <div
      className={cn(
        `${buttonVariants({ variant, size })} my-2 min-w-1/3`,
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {ActiveIcon && (
        <span
          className={cn("inline-block px-4 text-background", iconClassName, {
            "text-foreground group-hover:text-accent": variant === "outline",
          })}
        >
          <ActiveIcon className="w-4 h-4 transition-all duration-300 ease-in-out" />
        </span>
      )}
      {children}
      {ActiveIcon && variant !== "link" && (
        <span
          className={cn("inline-block px-4 text-background", iconClassName, {
            "text-foreground group-hover:text-accent": variant === "outline",
          })}
        >
          <ActiveIcon className="w-4 h-4" />
        </span>
      )}
    </div>
  );
}
