/**
 * =============================================
 * THANK YOU / REGISTRATION CONFIRMATION PAGE
 * =============================================
 * Shown after form submission.
 * Encourages users to join the WhatsApp community
 * as the next step in the onboarding journey.
 *
 * Journey:
 * Visitor → Website → Google Form → This page → WhatsApp → Club
 */

import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Home } from "lucide-react";
import { SITE_CONFIG } from "../config/site";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-24">
      {/* Success animation */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-6xl mb-8 animate-bounce">🎉</div>

        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
          Welcome to Miles With Smiles!
        </h1>
        <p className="text-white/60 text-lg mb-10 leading-relaxed">
          Your registration has been received. We're so excited to have you join the family. One more step to complete your journey:
        </p>

        {/* WhatsApp CTA — central onboarding step */}
        <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageCircle size={28} className="text-white" />
            <h2 className="text-2xl font-black text-white">
              Join Our WhatsApp Community
            </h2>
          </div>
          <p className="text-white/60 text-base leading-relaxed mb-6">
            Join our WhatsApp community to receive run updates, hike announcements, event information, and connect with fellow members.
          </p>
          <a
            href={SITE_CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-all text-base"
            aria-label="Join WhatsApp Community"
          >
            <MessageCircle size={18} />
            Join WhatsApp Community
          </a>
        </div>

        {/* What's next */}
        <div className="text-left bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 mb-8">
          <h3 className="text-white font-bold mb-4">What happens next?</h3>
          <ol className="space-y-3">
            {[
              "Join the WhatsApp community (button above)",
              "Introduce yourself to the community",
              "Check the schedule for the next Wednesday or Saturday run",
              "Show up at Soothe (Old Megalo) at 06:30",
              "Run your miles and smile with us! 🏃‍♂️",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-white/60 text-sm">
                <span className="shrink-0 w-5 h-5 rounded-full bg-white text-black text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/70 text-sm px-6 py-3 rounded-full hover:bg-white/5 transition-all"
          >
            <Home size={15} />
            Back to Home
          </Link>
          <Link
            to="/schedule"
            className="inline-flex items-center justify-center gap-2 text-white text-sm px-6 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-all"
          >
            View Run Schedule
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
