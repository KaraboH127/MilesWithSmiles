import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleId?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleId,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-8 md:mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="text-caption mb-4 block uppercase tracking-widest">
          {eyebrow}
        </span>
      )}
      <h2 id={titleId} className="text-h2 tracking-tight">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-body mt-4 max-w-md text-sm leading-relaxed text-white/60 sm:text-base",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
