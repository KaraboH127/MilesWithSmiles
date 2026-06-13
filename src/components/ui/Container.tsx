import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

type ContainerSize = "default" | "narrow" | "wide";

const sizeClasses: Record<ContainerSize, string> = {
  default: "max-w-7xl",
  narrow: "max-w-4xl",
  wide: "max-w-7xl",
};

interface ContainerProps {
  children: ReactNode;
  size?: ContainerSize;
  className?: string;
}

export default function Container({
  children,
  size = "default",
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        sizeClasses[size],
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
}
