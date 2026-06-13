/**
 * Mobile-first button row: full-width stacked on small screens, inline from sm up.
 */

import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface ActionButtonGroupProps {
  children: ReactNode;
  align?: "center" | "stretch";
  className?: string;
}

export default function ActionButtonGroup({
  children,
  align = "center",
  className,
}: ActionButtonGroupProps) {
  return (
    <div
      className={cn(
        "flex w-full min-w-0 flex-col gap-4 sm:flex-row sm:flex-wrap",
        align === "center" && "sm:justify-center",
        align === "stretch" && "sm:items-stretch",
        className
      )}
    >
      {children}
    </div>
  );
}
