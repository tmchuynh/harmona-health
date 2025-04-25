import { FC, ReactNode } from "react";
import { MdCheck } from "react-icons/md";
import { cn } from "../utils";

export const IconDisplay: FC<{ Icon: ReactNode }> = ({
  Icon,
  iconClassName,
}: {
  Icon: ReactNode;
  iconClassName?: string;
}) => {
  return (
    <div className="inline-flex mr-1">
      {Icon ? (
        <div
          className={cn("mx-auto text-lg text-primary", {
            iconClassName: iconClassName,
          })}
        >
          {Icon}
        </div>
      ) : (
        <MdCheck className="text-lg text-primary" />
      )}
    </div>
  );
};
