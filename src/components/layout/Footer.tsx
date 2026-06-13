/**
 * =============================================
 * FOOTER COMPONENT
 * =============================================
 * Site-wide footer with:
 * - Logo placeholder
 * - Navigation links
 * - Social links
 * - WhatsApp Community CTA (permanent)
 * - Copyright
 */

import { Link } from "react-router-dom";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { SITE_CONFIG } from "../../config/site";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Schedule", href: "/schedule" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      {/* ─── WHATSAPP CTA BANNER ─────────────────────────────────
          Permanent WhatsApp Community CTA in footer
          as specified in requirements
      ─────────────────────────────────────────────────────── */}
      <div className="bg-[#111111] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <MessageCircle size={20} className="text-white" />
            <span className="text-white font-bold text-lg">Join Our WhatsApp Community</span>
          </div>
          <p className="text-white/60 text-sm mb-5 max-w-md mx-auto">
            Stay connected with run updates, hike announcements, and fellow runners.
          </p>
          <a
            href={SITE_CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-full text-sm hover:bg-white/90 transition-all"
            aria-label="Join Miles With Smiles WhatsApp Community"
          >
            <MessageCircle size={16} />
            Join WhatsApp Community
          </a>
        </div>
      </div>

      {/* ─── MAIN FOOTER ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ─── LOGO + ABOUT ─────────────────────────────────── */}
          <div className="lg:col-span-2">
            {/* ─── LOGO PLACEHOLDER ─────────────────────────────
                Replace with <img src="/logo.svg" /> when ready
            ─────────────────────────────────────────────────── */}
            <div className="mb-4">
              <span className="text-white font-black text-xl tracking-tight uppercase block">
                Miles With Smiles
              </span>
              <span className="text-white/30 text-xs tracking-widest uppercase">
                Running Club
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              A community running club based in Alexandra, Johannesburg, bringing people together through fitness, friendship, consistency, and shared miles.
            </p>
            <div className="flex items-center gap-1.5 text-white/40 text-xs">
              <MapPin size={12} />
              <span>Alexandra, Johannesburg, South Africa</span>
            </div>
          </div>

          {/* ─── QUICK LINKS ──────────────────────────────────── */}
          <div>
            <h3 className="text-white text-xs font-bold tracking-widest uppercase mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/50 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── CONTACT + SOCIAL ─────────────────────────────── */}
          <div>
            <h3 className="text-white text-xs font-bold tracking-widest uppercase mb-5">
              Connect
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={SITE_CONFIG.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors group"
                  aria-label="WhatsApp Community"
                >
                  <MessageCircle size={14} className="group-hover:text-white text-white/40" />
                  WhatsApp Community
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors group"
                  aria-label="Facebook page"
                >
                  {/* Facebook icon SVG */}
                  <svg className="w-3.5 h-3.5 text-white/40 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors group"
                  aria-label="Instagram page"
                >
                  {/* Instagram icon SVG */}
                  <svg className="w-3.5 h-3.5 text-white/40 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors group"
                  aria-label="Email us"
                >
                  <Mail size={14} className="group-hover:text-white text-white/40" />
                  Email Us
                </a>
              </li>
            </ul>

            {/* Run schedule quick info */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="text-white/30 text-xs tracking-widest uppercase mb-3">
                Run Schedule
              </h4>
              <p className="text-white/50 text-xs leading-relaxed">
                Wednesday: 10km — 07:00<br />
                Saturday: 5km — 07:00<br />
                Meet at {SITE_CONFIG.meetingLocation}
              </p>
            </div>
          </div>
        </div>

        {/* ─── BOTTOM BAR ───────────────────────────────────── */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {currentYear} Miles With Smiles Running Club. Alexandra, Johannesburg.
          </p>
          <p className="text-white/20 text-xs">
            Built for community. Run together. Smile together.
          </p>
        </div>
      </div>
    </footer>
  );
}
