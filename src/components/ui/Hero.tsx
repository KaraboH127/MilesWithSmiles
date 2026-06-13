import type { ReactNode } from "react";
import { cn } from "../../utils/cn";
import Container from "./Container";

interface HeroProps {
  eyebrow?: string;
  meta?: ReactNode;
  title: ReactNode;
  description?: string;
  backgroundImage?: string;
  fullScreen?: boolean;
  align?: "left" | "center";
  children?: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export default function Hero({
  eyebrow,
  meta,
  title,
  description,
  backgroundImage,
  fullScreen = false,
  align = "left",
  children,
  footer,
  className,
}: HeroProps) {
  const hasImage = Boolean(backgroundImage);

  return (
    <section
      className={cn(
        "relative overflow-hidden",
        fullScreen ? "flex min-h-[600px] h-screen flex-col justify-center" : "pt-32 pb-12 lg:pt-40 lg:pb-16",
        className
      )}
      aria-label="Page hero"
    >
      {hasImage && (
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt=""
            className="h-full w-full object-cover object-center grayscale"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
      )}

      <Container
        className={cn(
          "relative z-10",
          fullScreen && "flex h-full flex-col justify-center pt-24 lg:pt-16",
          align === "center" && "text-center"
        )}
      >
        {eyebrow && (
          <span className="text-caption mb-4 block uppercase tracking-widest">
            {eyebrow}
          </span>
        )}

        {meta && <div className="mb-6">{meta}</div>}

        <h1 className="text-h1 max-w-3xl leading-tight tracking-tight">{title}</h1>

        {description && (
          <p
            className={cn(
              "text-body mt-6 max-w-xl leading-relaxed text-white/60",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        )}

        {children && <div className="mt-8">{children}</div>}
      </Container>

      {footer}
    </section>
  );
}
