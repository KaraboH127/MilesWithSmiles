/**
 * Stacked icon + title + lines block for contact and info sections.
 */

import type { LucideIcon } from "lucide-react";
import { cn } from "../../utils/cn";

interface IconTextBlockProps {
  icon: LucideIcon;
  title: string;
  lines: string[];
  className?: string;
}

export default function IconTextBlock({
  icon: Icon,
  title,
  lines,
  className,
}: IconTextBlockProps) {
  return (
    <div className={cn("flex w-full min-w-0 items-start gap-4", className)}>
      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/20">
        <Icon size={18} className="text-white/60" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-white">{title}</p>
        {lines.map((line, i) => (
          <p
            key={line}
            className={cn(
              "text-sm leading-relaxed break-words",
              i === 0 ? "text-white/60" : "text-white/40"
            )}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
