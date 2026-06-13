import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";
import Container from "./Container";

type SectionVariant = "default" | "dark" | "light";
type SectionSpacing = "default" | "compact" | "none";

const variantClasses: Record<SectionVariant, string> = {
  default: "bg-black text-white",
  dark: "bg-black text-white border-y border-white/20",
  light: "bg-white text-black",
};

const spacingClasses: Record<SectionSpacing, string> = {
  default: "py-8 lg:py-16",
  compact: "py-6 lg:py-8",
  none: "",
};

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: SectionVariant;
  spacing?: SectionSpacing;
  containerSize?: "default" | "narrow" | "wide";
  containerClassName?: string;
  noContainer?: boolean;
}

export default function Section({
  children,
  variant = "default",
  spacing = "default",
  containerSize = "default",
  containerClassName,
  noContainer = false,
  className,
  ...props
}: SectionProps) {
  const content = noContainer ? (
    children
  ) : (
    <Container size={containerSize} className={containerClassName}>
      {children}
    </Container>
  );

  return (
    <section
      className={cn(
        variantClasses[variant],
        spacingClasses[spacing],
        "w-full min-w-0 overflow-x-hidden",
        className
      )}
      {...props}
    >
      {content}
    </section>
  );
}
