import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

type CardVariant = "light" | "dark" | "inverse";

const variantClasses: Record<CardVariant, string> = {
  light: "bg-white text-black border-black/20",
  dark: "bg-black text-white border-white/20",
  inverse: "bg-white text-black border-black",
};

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: CardVariant;
  padding?: "md" | "lg";
}

export default function Card({
  children,
  variant = "dark",
  padding = "md",
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "border rounded-md",
        variantClasses[variant],
        padding === "md" ? "p-4" : "p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
