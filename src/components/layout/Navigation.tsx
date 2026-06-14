/**
 * Main site navigation — minimal, sticky, design-system compliant.
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "../../config/site";
import { NAV_LINKS } from "../../config/navigation";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled || isOpen
          ? "bg-black border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between lg:h-20" aria-label="Main navigation">
          <Link
            to="/"
            className="flex flex-col leading-none"
            aria-label="Miles With Smiles - Home"
          >
            <span className="text-lg font-black uppercase tracking-tight text-white">
              Miles With Smiles
            </span>
            <span className="text-caption text-[10px] tracking-widest">
              Social Run Club
            </span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
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

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="sm"
              aria-label="Join our WhatsApp Community"
            >
              <MessageCircle size={16} />
              WhatsApp Community
            </Button>
            <Button
              href={SITE_CONFIG.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="sm"
              aria-label="Join the Club"
            >
              Join the Club
            </Button>
          </div>

          <button
            className="-mr-2 p-2 text-white lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {isOpen && (
          <div className="border-t border-white/20 py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`rounded-md px-4 py-3 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-white/10 text-white"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-4 flex flex-col gap-3 border-t border-white/20 px-4 pt-4">
                <Button
                  href={SITE_CONFIG.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  className="w-full"
                >
                  <MessageCircle size={16} />
                  Join WhatsApp Community
                </Button>
                <Button
                  href={SITE_CONFIG.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  className="w-full"
                >
                  Join the Club
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
