/**
 * CONTACT PAGE
 */

import { ArrowRight, Clock, ExternalLink, Mail, MapPin, MessageCircle, Share2, Camera, Footprints } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SITE_CONFIG } from "../config/site";
import {
  Button,
  Card,
  Hero,
  IconText,
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
  {
    icon: Mail,
    label: "Email",
    sublabel: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    cta: "Send an Email",
  },
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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {CONTACT_CHANNELS.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("mailto") ? undefined : "_blank"}
              rel={channel.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className={channel.primary ? "sm:col-span-2" : ""}
              aria-label={`${channel.label} - ${channel.sublabel}`}
            >
              <Card
                variant={channel.primary ? "inverse" : "dark"}
                padding="lg"
                className="h-full transition-colors duration-200 hover:border-white/40"
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-md border ${
                      channel.primary ? "border-black/20" : "border-white/20"
                    }`}
                  >
                    <channel.icon size={20} />
                  </div>
                  <div className="flex flex-1 items-center justify-between gap-4">
                    <div>
                      <p className="text-h3 text-lg">
                        {channel.label}
                        {channel.primary && (
                          <span className="ml-2 rounded-md bg-black px-2 py-1 text-xs font-medium text-white">
                            Primary
                          </span>
                        )}
                      </p>
                      <p className={`text-body mt-1 text-sm ${channel.primary ? "text-black/60" : "text-white/50"}`}>
                        {channel.sublabel}
                      </p>
                    </div>
                    <span className="flex shrink-0 items-center gap-1 text-sm font-semibold">
                      {channel.cta}
                      <ExternalLink size={16} />
                    </span>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </Section>

      <Section variant="dark" aria-labelledby="location-heading">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div>
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
              <p className="text-body text-sm text-white/50">
                <strong className="text-white/70">First time?</strong> Show up at Soothe (Old Megalo) in Alexandra at 06:30. Look for the Miles With Smiles crew. Or join our WhatsApp community to connect with members before your first run.
              </p>
            </Card>
          </div>

          <div className="min-h-80 overflow-hidden rounded-md border border-white/20 lg:h-full">
            <iframe
              title="Miles With Smiles meeting location - Alexandra, Johannesburg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14345.982706684!2d28.1072!3d-26.1032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950eb3e29d1e9b%3A0x8e8acfca9f5a2a85!2sAlexandra%2C%20Johannesburg!5e0!3m2!1sen!2sza!4v1718000000000!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Map showing Alexandra, Johannesburg, South Africa"
            />
          </div>
        </div>
      </Section>

      <Section variant="light" aria-labelledby="contact-whatsapp-heading">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeader
            eyebrow="Stay Connected"
            title="The Club Lives on WhatsApp"
            description="The fastest way to connect with Miles With Smiles is through our WhatsApp community. Get run updates, hike announcements, and stay in the loop."
            align="center"
            titleId="contact-whatsapp-heading"
            className="[&_.text-caption]:text-black/40 [&_.text-h2]:text-black [&_.text-body]:text-black/60"
          />
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              href={SITE_CONFIG.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
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
              aria-label="Join WhatsApp Community"
            >
              <MessageCircle size={18} />
              Join WhatsApp Community
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

function IconTextBlock({
  icon: Icon,
  title,
  lines,
}: {
  icon: LucideIcon;
  title: string;
  lines: string[];
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/20">
        <Icon size={18} className="text-white/60" />
      </div>
      <div>
        <p className="font-semibold text-white">{title}</p>
        {lines.map((line, i) => (
          <p key={line} className={`text-sm ${i === 0 ? "text-white/60" : "text-white/40"}`}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
