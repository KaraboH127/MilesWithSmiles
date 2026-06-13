import { ArrowRight, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "../../config/site";
import ActionButtonGroup from "./ActionButtonGroup";
import Button from "./Button";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

interface JoinCTAProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel?: string;
  headingId?: string;
}

export default function JoinCTA({
  eyebrow = "Ready to Run?",
  title,
  description,
  primaryLabel = "Join the Club",
  headingId,
}: JoinCTAProps) {
  return (
    <Section variant="light" spacing="default" containerSize="narrow">
      <div className="text-center">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
          titleId={headingId}
          className="mb-8 [&_.text-caption]:text-black/40 [&_.text-h2]:text-black [&_.text-body]:text-black/60"
        />
        <ActionButtonGroup>
          <Button
            href={SITE_CONFIG.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            layout="responsive"
            aria-label={primaryLabel}
          >
            {primaryLabel}
            <ArrowRight size={18} />
          </Button>
          <Button
            href={SITE_CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            layout="responsive"
            aria-label="Join WhatsApp Community"
          >
            <MessageCircle size={18} />
            Join WhatsApp Community
          </Button>
        </ActionButtonGroup>
      </div>
    </Section>
  );
}
