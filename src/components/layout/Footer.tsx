/**
 * Site-wide footer with navigation, contact, and WhatsApp CTA.
 */

import { Link } from "react-router-dom";
import { MessageCircle, Mail, MapPin, Share2, Camera } from "lucide-react";
import { SITE_CONFIG } from "../../config/site";
import { NAV_LINKS } from "../../config/navigation";
import Button from "../ui/Button";
import Container from "../ui/Container";
import IconText from "../ui/IconText";
import Section from "../ui/Section";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/20 bg-black">
      <Section variant="dark" spacing="compact" noContainer>
        <Container className="py-8 text-center">
          <IconText icon={MessageCircle} size="md" className="mb-3 justify-center font-bold text-lg">
            Join Our WhatsApp Community
          </IconText>
          <p className="text-body mx-auto mb-6 max-w-md text-sm text-white/60">
            Stay connected with run updates, hike announcements, and fellow runners.
          </p>
          <Button
            href={SITE_CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            layout="responsive"
            aria-label="Join Miles With Smiles WhatsApp Community"
          >
            <MessageCircle size={16} />
            Join WhatsApp Community
          </Button>
        </Container>
      </Section>

      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="block text-xl font-black uppercase tracking-tight text-white">
                Miles With Smiles
              </span>
              <span className="text-caption text-xs tracking-widest">
                Running Club
              </span>
            </div>
            <p className="text-body mb-6 max-w-xs text-sm leading-relaxed text-white/50">
              A community running club based in Alexandra, Johannesburg, bringing people together through fitness, friendship, consistency, and shared miles.
            </p>
            <IconText icon={MapPin} className="text-xs text-white/40">
              Alexandra, Johannesburg, South Africa
            </IconText>
          </div>

          <div>
            <h3 className="text-caption mb-6 uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/50 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-caption mb-6 uppercase tracking-widest">
              Connect
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={SITE_CONFIG.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
                  aria-label="WhatsApp Community"
                >
                  <MessageCircle size={16} className="text-white/40 group-hover:text-white" />
                  WhatsApp Community
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
                  aria-label="Facebook page"
                >
                  <Share2 size={16} className="text-white/40 group-hover:text-white" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
                  aria-label="Instagram page"
                >
                  <Camera size={16} className="text-white/40 group-hover:text-white" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="group flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
                  aria-label="Email us"
                >
                  <Mail size={16} className="text-white/40 group-hover:text-white" />
                  Email Us
                </a>
              </li>
            </ul>

            <div className="mt-8 border-t border-white/20 pt-6">
              <h4 className="text-caption mb-3 uppercase tracking-widest">
                Run Schedule
              </h4>
              <p className="text-xs leading-relaxed text-white/50">
                Wednesday: 10km — 07:00<br />
                Saturday: 5km — 07:00<br />
                Meet at {SITE_CONFIG.meetingLocation}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            &copy; {currentYear} Miles With Smiles Running Club. Alexandra, Johannesburg.
          </p>
          <p className="text-xs text-white/20">
            Built for community. Run together. Smile together.
          </p>
        </div>
      </Container>
    </footer>
  );
}
