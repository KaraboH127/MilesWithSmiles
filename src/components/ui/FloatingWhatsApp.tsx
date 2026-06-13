/**
 * Fixed-position WhatsApp button — monochrome, Lucide icon only.
 */

import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "../../config/site";

export default function FloatingWhatsApp() {
  return (
    <a
      href={SITE_CONFIG.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Join our WhatsApp Community"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-md border border-white bg-black text-white transition-colors duration-200 hover:bg-white hover:text-black"
    >
      <MessageCircle size={20} aria-hidden="true" />
      <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-md border border-white/20 bg-black px-3 py-2 text-xs font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:block">
        Join WhatsApp Community
      </span>
    </a>
  );
}
