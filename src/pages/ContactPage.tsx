/**
 * =============================================
 * CONTACT PAGE
 * =============================================
 * Contact channels:
 * - WhatsApp (primary)
 * - Facebook
 * - Instagram
 * - Email
 *
 * Includes map section for Alexandra location
 * and a Join CTA section.
 */

import { Mail, MapPin, ArrowRight, MessageCircle, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "../config/site";

const CONTACT_CHANNELS = [
  {
    icon: (
      // WhatsApp SVG — primary contact method
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
    label: "WhatsApp Community",
    sublabel: "Primary — Get run updates & connect with the club",
    href: SITE_CONFIG.whatsappLink,
    cta: "Join Community",
    primary: true,
  },
  {
    icon: (
      // Facebook SVG
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    label: "Facebook",
    sublabel: "Follow us for community updates and event announcements",
    href: SITE_CONFIG.facebook,
    cta: "Follow on Facebook",
    primary: false,
  },
  {
    icon: (
      // Instagram SVG
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    label: "Instagram",
    sublabel: "Discover our community in photos",
    href: SITE_CONFIG.instagram,
    cta: "Follow on Instagram",
    primary: false,
  },
  {
    icon: <Mail className="w-6 h-6" aria-hidden="true" />,
    label: "Email",
    sublabel: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    cta: "Send an Email",
    primary: false,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ─── PAGE HERO ──────────────────────────────────────────── */}
      <section className="relative pt-40 pb-24" aria-label="Contact page hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-white/30 text-xs font-bold tracking-widest uppercase mb-4 block">
            Get in Touch
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight max-w-2xl">
            Let's Connect
          </h1>
          <p className="mt-6 text-white/60 text-lg max-w-lg leading-relaxed">
            Have questions? Want to join? The best way to connect with Miles With Smiles is through our WhatsApp community — where the club lives.
          </p>
        </div>
      </section>

      {/* ─── CONTACT CHANNELS ───────────────────────────────────── */}
      <section className="pb-24" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="contact-heading" className="sr-only">Contact channels</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CONTACT_CHANNELS.map((channel, i) => (
              <a
                key={i}
                href={channel.href}
                target={channel.href.startsWith("mailto") ? undefined : "_blank"}
                rel={channel.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className={`group block p-6 rounded-2xl border transition-all duration-300 ${
                  channel.primary
                    ? "bg-white border-white text-black col-span-1 sm:col-span-2"
                    : "bg-[#0f0f0f] border-white/10 text-white hover:border-white/25"
                }`}
                aria-label={`${channel.label} - ${channel.sublabel}`}
              >
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div
                    className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                      channel.primary ? "bg-black/10" : "bg-white/10"
                    }`}
                  >
                    <span className={channel.primary ? "text-black" : "text-white"}>
                      {channel.icon}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p
                          className={`font-bold text-lg ${
                            channel.primary ? "text-black" : "text-white"
                          }`}
                        >
                          {channel.label}
                          {channel.primary && (
                            <span className="ml-2 text-xs font-medium bg-black text-white px-2 py-0.5 rounded-full">
                              Primary
                            </span>
                          )}
                        </p>
                        <p
                          className={`text-sm mt-0.5 ${
                            channel.primary ? "text-black/60" : "text-white/50"
                          }`}
                        >
                          {channel.sublabel}
                        </p>
                      </div>
                      <div
                        className={`flex items-center gap-1 text-sm font-semibold shrink-0 group-hover:gap-2 transition-all ${
                          channel.primary ? "text-black" : "text-white/60"
                        }`}
                      >
                        {channel.cta}
                        <ExternalLink size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LOCATION / MAP SECTION ─────────────────────────────── */}
      <section className="bg-[#0a0a0a] border-y border-white/10 py-24" aria-labelledby="location-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Location info */}
            <div>
              <span className="text-white/30 text-xs font-bold tracking-widest uppercase mb-4 block">
                Find Us
              </span>
              <h2 id="location-heading" className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-8">
                Where We Meet
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={18} className="text-white/60" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Meeting Location</p>
                    <p className="text-white/60 text-sm">{SITE_CONFIG.meetingLocation}</p>
                    <p className="text-white/40 text-xs mt-1">Alexandra, Johannesburg, South Africa</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-sm">⏰</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Meeting Time</p>
                    <p className="text-white/60 text-sm">
                      Every Wednesday & Saturday at {SITE_CONFIG.meetTime}
                    </p>
                    <p className="text-white/40 text-xs mt-1">
                      Runs begin at {SITE_CONFIG.runStartTime}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-sm">🏃</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Distances</p>
                    <p className="text-white/60 text-sm">Wednesday: 10km</p>
                    <p className="text-white/60 text-sm">Saturday: 5km</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-xl">
                <p className="text-white/50 text-sm">
                  💡 <strong className="text-white/70">First time?</strong> Just show up at Soothe (Old Megalo) in Alexandra at 06:30. Look for the Miles With Smiles crew — you can't miss us. Or join our WhatsApp community to connect with members before your first run.
                </p>
              </div>
            </div>

            {/* Map embed — showing Alexandra, Johannesburg */}
            <div className="rounded-2xl overflow-hidden border border-white/10 h-80 lg:h-full min-h-80">
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
        </div>
      </section>

      {/* ─── WHATSAPP PRIORITY CTA ──────────────────────────────── */}
      <section className="py-24" aria-labelledby="contact-whatsapp-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-6">💬</div>
          <h2 id="contact-whatsapp-heading" className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
            The Club Lives on WhatsApp
          </h2>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            The fastest way to connect with Miles With Smiles is through our WhatsApp community. Get run updates, hike announcements, meet fellow members, and stay in the loop — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-all"
              aria-label="Join WhatsApp Community"
            >
              <MessageCircle size={18} />
              Join WhatsApp Community
            </a>
            <a
              href={SITE_CONFIG.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all"
              aria-label="Register as a Member"
            >
              Register as a Member
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
