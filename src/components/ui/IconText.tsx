import type { LucideIcon } from "lucide-react";
import { cn } from "../../utils/cn";

interface IconTextProps {
  icon: LucideIcon;
  children: React.ReactNode;
  size?: "sm" | "md";
  className?: string;
  iconClassName?: string;
}

const iconSizes = { sm: 16, md: 20 };

export default function IconText({
  icon: Icon,
  children,
  size = "sm",
  className,
  iconClassName,
}: IconTextProps) {
  return (
    <span className={cn("inline-flex max-w-full min-w-0 flex-wrap items-center gap-2", className)}>
      <Icon
        size={iconSizes[size]}
        className={cn("shrink-0 text-current", iconClassName)}
        aria-hidden="true"
      />
      <span className="min-w-0 break-words">{children}</span>
    </span>
  );
}
