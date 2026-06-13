/**
 * =============================================
 * NAVIGATION COMPONENT
 * =============================================
 * Main site navigation with:
 * - Logo placeholder (replace with real logo)
 * - Desktop nav links
 * - WhatsApp Community CTA button
 * - Mobile hamburger menu
 * - Sticky header with scroll behaviour
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "../../config/site";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Schedule", href: "/schedule" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Add solid background after user scrolls
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-black border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* ─── LOGO PLACEHOLDER ──────────────────────────────────
              Replace the text block below with an <img> tag
              once the real logo asset is available.
              Example:
              <img src="/logo.svg" alt="Miles With Smiles" className="h-8 w-auto" />
          ─────────────────────────────────────────────────── */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            aria-label="Miles With Smiles - Home"
          >
            {/* Logo container — swap for real logo image */}
            <div className="flex flex-col leading-none">
              <span className="text-white font-black text-lg tracking-tight uppercase">
                Miles With Smiles
              </span>
              <span className="text-white/40 text-[10px] tracking-widest uppercase">
                Running Club
              </span>
            </div>
          </Link>

          {/* ─── DESKTOP NAV LINKS ─────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* ─── NAV CTA BUTTONS ───────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-3">
            {/* WhatsApp Community CTA — prominent in nav */}
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 border border-white/20 hover:border-white/40"
              aria-label="Join our WhatsApp Community"
            >
              <MessageCircle size={15} />
              <span>WhatsApp Community</span>
            </a>

            {/* Primary Join CTA */}
            <a
              href={SITE_CONFIG.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black text-sm font-bold px-5 py-2 rounded-full hover:bg-white/90 transition-all duration-200"
              aria-label="Join Miles With Smiles"
            >
              Join the Club
            </a>
          </div>

          {/* ─── MOBILE MENU TOGGLE ────────────────────────────── */}
          <button
            className="lg:hidden text-white p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ─── MOBILE MENU ─────────────────────────────────────── */}
        {isOpen && (
          <div className="lg:hidden border-t border-white/10 py-4">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive(link.href)
                      ? "bg-white/10 text-white"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3 px-4">
                <a
                  href={SITE_CONFIG.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-medium px-4 py-3 rounded-full hover:bg-white/10 transition-all"
                >
                  <MessageCircle size={16} />
                  Join WhatsApp Community
                </a>
                <a
                  href={SITE_CONFIG.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black text-sm font-bold px-4 py-3 rounded-full text-center hover:bg-white/90 transition-all"
                >
                  Join Miles With Smiles
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
