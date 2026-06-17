import { MapPin, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "../../config/site";
import Card from "./Card";
import Button from "./Button";

export default function FirstTimerCard() {
  return (
    <Card className="border-white/30">
      <p className="mb-1 text-sm font-bold text-white">First time? Here is all you need to know.</p>
      <p className="mb-4 text-sm leading-relaxed text-white/60">
        Show up at <strong className="text-white/80">{SITE_CONFIG.meetingLocation}</strong> at <strong className="text-white/80">{SITE_CONFIG.meetTime}</strong>. Look for the Miles With
        Smiles crew. Wear comfortable clothes and bring water. No registration needed on the day —
        just show up.
      </p>
      <Button
        href={SITE_CONFIG.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        variant="secondary"
        size="sm"
        aria-label="Join WhatsApp for run updates"
      >
        <MessageCircle size={16} />
        Join WhatsApp for updates
      </Button>
    </Card>
  );
}