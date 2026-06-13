/**
 * THANK YOU / REGISTRATION CONFIRMATION PAGE
 */

import { ArrowRight, CheckCircle, Home, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "../config/site";
import { Button, Card, Container, IconText } from "../components/ui";

const NEXT_STEPS = [
  "Join the WhatsApp community using the button below",
  "Introduce yourself to the community",
  "Check the schedule for the next Wednesday or Saturday run",
  "Show up at Soothe (Old Megalo) at 06:30",
  "Run your miles and smile with us",
];

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-16">
      <Container size="narrow" className="text-center">
        <IconText icon={CheckCircle} size="md" className="mb-8 justify-center">
          <span className="sr-only">Registration complete</span>
        </IconText>

        <h1 className="text-h1 mb-4 text-4xl sm:text-5xl">Welcome to Miles With Smiles</h1>
        <p className="text-body mb-10 text-lg leading-relaxed text-white/60">
          Your registration has been received. One more step to complete your journey.
        </p>

        <Card padding="lg" className="mb-8 text-center">
          <IconText icon={MessageCircle} size="md" className="mb-4 justify-center font-bold text-xl">
            Join Our WhatsApp Community
          </IconText>
          <p className="text-body mb-6 leading-relaxed text-white/60">
            Join our WhatsApp community to receive run updates, hike announcements, event information, and connect with fellow members.
          </p>
          <Button
            href={SITE_CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            aria-label="Join WhatsApp Community"
          >
            <MessageCircle size={18} />
            Join WhatsApp Community
          </Button>
        </Card>

        <Card className="mb-8 text-left">
          <h2 className="text-h3 mb-4">What happens next?</h2>
          <ol className="space-y-3">
            {NEXT_STEPS.map((step, i) => (
              <li key={step} className="flex items-start gap-3 text-sm text-white/60">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-white text-xs font-bold text-black">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </Card>

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/" variant="secondary" size="sm">
            <Home size={16} />
            Back to Home
          </Button>
          <Button to="/schedule" variant="primary" size="sm">
            View Run Schedule
            <ArrowRight size={16} />
          </Button>
        </div>
      </Container>
    </div>
  );
}
