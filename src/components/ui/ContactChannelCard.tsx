/**
 * Mobile-first contact / social channel card.
 * Stacks vertically: icon → title + description → CTA.
 */

import { ExternalLink } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "../../utils/cn";
import Card from "./Card";

export interface ContactChannelCardProps {
  icon: LucideIcon;
  label: string;
  sublabel: string;
  href: string;
  cta: string;
  primary?: boolean;
  className?: string;
}

export default function ContactChannelCard({
  icon: Icon,
  label,
  sublabel,
  href,
  cta,
  primary = false,
  className,
}: ContactChannelCardProps) {
  const isMailto = href.startsWith("mailto");

  return (
    <a
      href={href}
      target={isMailto ? undefined : "_blank"}
      rel={isMailto ? undefined : "noopener noreferrer"}
      className={cn("block w-full min-w-0", className)}
      aria-label={`${label} - ${sublabel}`}
    >
      <Card
        variant={primary ? "inverse" : "dark"}
        padding="lg"
        className="h-full transition-colors duration-200 hover:border-white/40"
      >
        <div className="flex w-full min-w-0 flex-col gap-4">
          <div
            className={cn(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-md border",
              primary ? "border-black/20" : "border-white/20"
            )}
          >
            <Icon size={20} aria-hidden="true" />
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <p className="text-h3 text-base sm:text-lg">{label}</p>
              {primary && (
                <span className="rounded-md bg-black px-2 py-0.5 text-xs font-medium leading-snug text-white">
                  Primary
                </span>
              )}
            </div>
            <p
              className={cn(
                "text-body mt-2 text-sm leading-relaxed break-words",
                primary ? "text-black/60" : "text-white/50"
              )}
            >
              {sublabel}
            </p>
          </div>

          <span
            className={cn(
              "inline-flex max-w-full flex-wrap items-center gap-1 text-sm font-semibold",
              primary ? "text-black" : "text-white"
            )}
          >
            {cta}
            <ExternalLink size={16} className="shrink-0" aria-hidden="true" />
          </span>
        </div>
      </Card>
    </a>
  );
}
