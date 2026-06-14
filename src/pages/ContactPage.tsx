/**
 * CONTACT PAGE
 */

import { ArrowRight, Clock, Mail, MapPin, MessageCircle, Share2, Camera, Footprints } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SITE_CONFIG } from "../config/site";
import { cn } from "../utils/cn";
import {
  ActionButtonGroup,
  Button,
  Card,
  ContactChannelCard,
  Hero,
  IconTextBlock,
  Section,
  SectionHeader,
} from "../components/ui";

const CONTACT_CHANNELS: {
  icon: LucideIcon;
  label: string;
  sublabel: string;
  href: string;
  cta: string;
  primary?: boolean;
}[] = [
  {
    icon: MessageCircle,
    label: "WhatsApp Community",
    sublabel: "Primary — Get run updates and connect with the club",
    href: SITE_CONFIG.whatsappLink,
    cta: "Join Community",
    primary: true,
  },
  {
    icon: Share2,
    label: "Facebook",
    sublabel: "Follow us for community updates and event announcements",
    href: SITE_CONFIG.facebook,
    cta: "Follow on Facebook",
  },
  {
    icon: Camera,
    label: "Instagram",
    sublabel: "Discover our community in photos",
    href: SITE_CONFIG.instagram,
    cta: "Follow on Instagram",
  },
  /*{
    icon: Mail,
    label: "Email",
    sublabel: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    cta: "Send an Email",
  }*/,
];

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Get in Touch"
        title="Let's Connect"
        description="Have questions? Want to join? The best way to connect with Miles With Smiles is through our WhatsApp community — where the club lives."
      />

      <Section spacing="compact" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="sr-only">
          Contact channels
        </h2>

        <div className="grid w-full min-w-0 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CONTACT_CHANNELS.map((channel) => (
            <div
              key={channel.label}
              className={cn(
                "w-full min-w-0",
                channel.primary && "md:col-span-2 lg:col-span-3"
              )}
            >
              <ContactChannelCard {...channel} />
            </div>
          ))}
        </div>
      </Section>

      <Section variant="dark" aria-labelledby="location-heading">
        <div className="grid w-full min-w-0 grid-cols-1 items-start gap-8 md:gap-12 lg:grid-cols-2">
          <div className="min-w-0">
            <SectionHeader eyebrow="Find Us" title="Where We Meet" titleId="location-heading" />

            <div className="space-y-6">
              <IconTextBlock
                icon={MapPin}
                title="Meeting Location"
                lines={[
                  SITE_CONFIG.meetingLocation,
                  "Alexandra, Johannesburg, South Africa",
                ]}
              />
              <IconTextBlock
                icon={Clock}
                title="Meeting Time"
                lines={[
                  `Every Wednesday and Saturday at ${SITE_CONFIG.meetTime}`,
                  `Runs begin at ${SITE_CONFIG.runStartTime}`,
                ]}
              />
              <IconTextBlock
                icon={Footprints}
                title="Distances"
                lines={["Wednesday: 10km", "Saturday: 5km"]}
              />
            </div>

            <Card className="mt-8">
              <p className="text-body text-sm leading-relaxed break-words text-white/50">
                <strong className="text-white/70">First time?</strong> Show up at Soothe (Old Megalo) in Alexandra at 06:30. Look for the Miles With Smiles crew. Or join our WhatsApp community to connect with members before your first run.
              </p>
            </Card>
          </div>

          <div className="min-h-64 w-full min-w-0 overflow-hidden rounded-md border border-white/20 lg:min-h-80">
            <iframe
              title="Miles With Smiles meeting location - Alexandra, Johannesburg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1745.546230068433!2d28.095718201784358!3d-26.09677574617285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957382d0647ecb%3A0xd768c975658272de!2sSOOTHE!5e0!3m2!1sen!2sza!4v1781430707233!5m2!1sen!2sza"
              width="100%"
              height="100%"
              className="min-h-64 w-full lg:min-h-80"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Map showing Alexandra, Johannesburg, South Africa"
            />
          </div>
        </div>
      </Section>

      <Section variant="light" aria-labelledby="contact-whatsapp-heading">
        <div className="mx-auto w-full min-w-0 max-w-4xl text-center">
          <SectionHeader
            eyebrow="Stay Connected"
            title="The Club Lives on WhatsApp"
            description="The fastest way to connect with Miles With Smiles is through our WhatsApp community. Get run updates, hike announcements, and stay in the loop."
            align="center"
            titleId="contact-whatsapp-heading"
            className="[&_.text-caption]:text-black/40 [&_.text-h2]:text-black [&_.text-body]:text-black/60"
          />
          <ActionButtonGroup>
            <Button
              href={SITE_CONFIG.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              layout="responsive"
              aria-label="Register as a Member"
            >
              Register as a Member
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
    </>
  );
}
