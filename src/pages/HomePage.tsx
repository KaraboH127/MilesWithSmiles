/**
 * =============================================
 * HOME PAGE
 * =============================================
 * Sections (in order):
 * 1. Hero — full-screen, emotional centerpiece
 * 2. Social Proof Strip
 * 3. About Preview
 * 4. Weekly Schedule
 * 5. Community Benefits
 * 6. WhatsApp / Stay Connected
 * 7. Gallery Preview
 * 8. Join CTA
 */

import { Link } from "react-router-dom";
import { ArrowDown, MapPin, MessageCircle, ArrowRight, Calendar, Clock, ChevronRight } from "lucide-react";
import { SITE_CONFIG, IMAGES } from "../config/site";
import { getUpcomingDates, formatDateShort, isThisWeek } from "../utils/dates";

// ─── COMMUNITY BENEFITS DATA ─────────────────────────────────────────────────
const BENEFITS = [
  {
    emoji: "🔄",
    title: "Consistency",
    description: "Show up week after week. The club holds you accountable and makes it easier to stick to your running goals.",
  },
  {
    emoji: "💪",
    title: "Fitness",
    description: "Whether you're a beginner or experienced runner, every run builds strength, stamina, and resilience.",
  },
  {
    emoji: "🤝",
    title: "Friendship",
    description: "Some of the best friendships start at mile one. Our club is built on real connections and shared experiences.",
  },
  {
    emoji: "📣",
    title: "Accountability",
    description: "When the community knows you're coming, you show up. Together, we push each other to be better.",
  },
  {
    emoji: "🌍",
    title: "Community Impact",
    description: "We run in and for Alexandra. Every step we take contributes to a more active, healthier community.",
  },
  {
    emoji: "📈",
    title: "Personal Growth",
    description: "Running teaches patience, discipline, and grit. You'll surprise yourself with what you can achieve.",
  },
];

export default function HomePage() {
  // Generate dynamic upcoming dates
  const wedDates = getUpcomingDates(
    SITE_CONFIG.scheduleStartDate.wednesday,
    3, // Wednesday = 3
    4
  );
  const satDates = getUpcomingDates(
    SITE_CONFIG.scheduleStartDate.saturday,
    6, // Saturday = 6
    4
  );

  return (
    <>
      {/* ══════════════════════════════════════════════════
          SECTION 1: HERO
          Full-screen emotional centerpiece.
          Background image: replace IMAGES.hero in config/site.ts
      ══════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative h-screen min-h-[600px] flex flex-col justify-center overflow-hidden"
        aria-label="Hero section"
      >
        {/* Hero background image
            Replace /hero-community-run-placeholder.jpg with real photography */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Miles With Smiles community runners"
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-black/65" />
          {/* Bottom fade for smooth transition to next section */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-16 flex flex-col justify-center h-full">
          {/* Location badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full">
              <MapPin size={11} />
              Alexandra, Johannesburg
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.9] tracking-tight mb-6 max-w-3xl">
            Run Together.<br />
            <span className="text-white/70">Smile Together.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-white/70 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed mb-10">
            Miles With Smiles is a community running club based in Alexandra, bringing people together through fitness, friendship, consistency, and shared miles.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Primary CTA */}
            <a
              href={SITE_CONFIG.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-black font-bold text-base px-8 py-4 rounded-full hover:bg-white/90 active:scale-95 transition-all duration-200"
              aria-label="Join Miles With Smiles"
            >
              Join Miles With Smiles
              <ArrowRight size={18} />
            </a>

            {/* Secondary CTA — WhatsApp */}
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-white/20 active:scale-95 transition-all duration-200"
              aria-label="Join WhatsApp Community"
            >
              <MessageCircle size={18} />
              Join WhatsApp Community
            </a>
          </div>
        </div>

        {/* ─── SCROLL INDICATOR ─────────────────────────────────────
            Animated scroll hint to encourage exploration
        ──────────────────────────────────────────────────────── */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
          <div className="animate-bounce text-white/30">
            <ArrowDown size={16} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SOCIAL PROOF STRIP
          Instant context & credibility below the fold
      ══════════════════════════════════════════════════ */}
      <section
        className="bg-[#111111] border-y border-white/10 py-5"
        aria-label="Club highlights"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm text-white/60">
            <span className="flex items-center gap-2">
              <span className="text-base">📍</span>
              <span>Alexandra, Johannesburg</span>
            </span>
            <span className="hidden sm:block w-px h-4 bg-white/20" />
            <span className="flex items-center gap-2">
              <span className="text-base">🏃</span>
              <span>Weekly Community Runs</span>
            </span>
            <span className="hidden sm:block w-px h-4 bg-white/20" />
            <span className="flex items-center gap-2">
              <span className="text-base">🥾</span>
              <span>Monthly Hikes</span>
            </span>
            <span className="hidden sm:block w-px h-4 bg-white/20" />
            <span className="flex items-center gap-2">
              <span className="text-base">🤝</span>
              <span>Open To Everyone</span>
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 2: ABOUT PREVIEW
          Brief introduction with link to full About page
      ══════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text content */}
            <div>
              <span className="text-white/30 text-xs font-bold tracking-widest uppercase mb-4 block">
                Who We Are
              </span>
              <h2 id="about-heading" className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                More Than Miles.<br />We're a Movement.
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-5">
                Miles With Smiles was born on the streets of Alexandra — a neighbourhood brimming with energy, ambition, and untapped potential. We started as a small group of friends who believed that running could do more than build fitness. We believed it could build community.
              </p>
              <p className="text-white/60 text-base leading-relaxed mb-8">
                Today, we gather every Wednesday and Saturday to run together, support each other, and show Alexandra — and the world — that community strength starts with showing up. We are inclusive, consistent, and community-first. No experience required. All paces welcome.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-white font-semibold text-sm border-b border-white/30 pb-0.5 hover:border-white transition-colors group"
                aria-label="Learn more about Miles With Smiles"
              >
                Our Full Story
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={IMAGES.communityRun1}
                  alt="Miles With Smiles community runners in Alexandra"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
              </div>
              {/* Floating stat card */}
              {/*
              <div className="absolute -bottom-5 -left-5 bg-white text-black p-4 rounded-xl shadow-xl place-items-center">
                <div className="text-2xl font-black">2×</div>
                <div className="text-xs font-medium text-black/70 mt-0.5">Weekly Runs</div>
              </div>
              */}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 3: WEEKLY SCHEDULE
          Prominent schedule with dynamic upcoming dates
      ══════════════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] border-y border-white/10 py-24" aria-labelledby="schedule-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-white/30 text-xs font-bold tracking-widest uppercase mb-4 block">
              Join Us
            </span>
            <h2 id="schedule-heading" className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Weekly Schedule
            </h2>
            <p className="text-white/50 text-base max-w-md mx-auto">
              Lace up and show up. Here's where and when we run.
            </p>
          </div>

          {/* Location & time banner */}
          <div className="bg-[#111] border border-white/10 rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
            <div className="flex items-center gap-2 text-white/70">
              <MapPin size={16} className="text-white/40" />
              <span className="text-sm font-medium">{SITE_CONFIG.meetingLocation}</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/20" />
            <div className="flex items-center gap-2 text-white/70">
              <Clock size={16} className="text-white/40" />
              <span className="text-sm font-medium">Meet: {SITE_CONFIG.meetTime} | Run Start: {SITE_CONFIG.runStartTime}</span>
            </div>
          </div>

          {/* Run cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

            {/* Wednesday Run */}
            <div className="bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-bold text-lg">Wednesday Run</span>
                <span className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full">
                  {SITE_CONFIG.wednesday.distance}
                </span>
              </div>
              <p className="text-white/40 text-xs mb-5">Upcoming dates</p>
              <ul className="space-y-2">
                {wedDates.map((date, i) => (
                  <li
                    key={i}
                    className={`flex items-center justify-between py-2 border-b border-white/5 last:border-0 ${
                      isThisWeek(date) ? "text-white" : "text-white/50"
                    }`}
                  >
                    <span className="text-sm flex items-center gap-2">
                      <Calendar size={12} className="text-white/30" />
                      {formatDateShort(date)}
                    </span>
                    {isThisWeek(date) && (
                      <span className="text-xs bg-white/10 text-white/70 px-2 py-0.5 rounded-full">
                        This week
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Saturday Run */}
            <div className="bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-bold text-lg">Saturday Run</span>
                <span className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full">
                  {SITE_CONFIG.saturday.distance}
                </span>
              </div>
              <p className="text-white/40 text-xs mb-5">Upcoming dates</p>
              <ul className="space-y-2">
                {satDates.map((date, i) => (
                  <li
                    key={i}
                    className={`flex items-center justify-between py-2 border-b border-white/5 last:border-0 ${
                      isThisWeek(date) ? "text-white" : "text-white/50"
                    }`}
                  >
                    <span className="text-sm flex items-center gap-2">
                      <Calendar size={12} className="text-white/30" />
                      {formatDateShort(date)}
                    </span>
                    {isThisWeek(date) && (
                      <span className="text-xs bg-white/10 text-white/70 px-2 py-0.5 rounded-full">
                        This week
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Monthly Hikes */}
            <div className="bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-bold text-lg">Monthly Hikes</span>
                <span className="bg-white/10 text-white/60 text-xs font-bold px-3 py-1 rounded-full">
                  Monthly
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                Our community hikes take place once every month. Dates and destinations are announced through our WhatsApp community.
              </p>
              {/* WhatsApp CTA for hike dates — as specified */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-white/40 text-xs mb-3">
                  🗺️ Hike dates and destinations are announced through our WhatsApp community.
                </p>
                <a
                  href={SITE_CONFIG.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white text-xs font-semibold border border-white/20 px-4 py-2 rounded-full hover:bg-white/10 transition-all"
                >
                  <MessageCircle size={12} />
                  Join WhatsApp Community
                </a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/schedule"
              className="inline-flex items-center gap-2 text-white/60 text-sm font-medium hover:text-white transition-colors"
            >
              View full schedule <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 4: COMMUNITY BENEFITS
          Cards for the 6 key benefits
      ══════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32" aria-labelledby="benefits-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-white/30 text-xs font-bold tracking-widest uppercase mb-4 block">
              Why Run With Us
            </span>
            <h2 id="benefits-heading" className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              What You Gain
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((benefit, i) => (
              <div
                key={i}
                className="group bg-[#0f0f0f] border border-white/10 rounded-2xl p-6 hover:border-white/25 hover:bg-[#141414] transition-all duration-300"
              >
                <div className="text-3xl mb-4">{benefit.emoji}</div>
                <h3 className="text-white font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 5: WHATSAPP / STAY CONNECTED
          Dedicated WhatsApp section as specified
      ══════════════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] border-y border-white/10 py-24" aria-labelledby="whatsapp-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl mb-6">💬</div>
          <span className="text-white/30 text-xs font-bold tracking-widest uppercase mb-4 block">
            Stay Connected
          </span>
          <h2 id="whatsapp-heading" className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
            Join the Conversation
          </h2>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Get weekly run updates, hike announcements, community news, and connect with fellow runners through our WhatsApp community. This is where the Miles With Smiles family lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-all text-sm"
              aria-label="Join WhatsApp Community"
            >
              <MessageCircle size={18} />
              Join WhatsApp Community
            </a>
            <a
              href={SITE_CONFIG.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all text-sm"
              aria-label="Register as a Member"
            >
              Register as a Member
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 6: GALLERY PREVIEW
          Featured images with link to full gallery
      ══════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32" aria-labelledby="gallery-preview-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-white/30 text-xs font-bold tracking-widest uppercase mb-4 block">
                Our Community
              </span>
              <h2 id="gallery-preview-heading" className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                Moments in Motion
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-white font-semibold text-sm border-b border-white/30 pb-0.5 hover:border-white transition-colors group whitespace-nowrap"
            >
              View Full Gallery
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Gallery grid — 6 images preview */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              IMAGES.communityRun1,
              IMAGES.raceDay1,
              IMAGES.hike1,
              IMAGES.communityRun2,
              IMAGES.raceDay2,
              IMAGES.hike2,
            ].map((src, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-xl ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              >
                <img
                  src={src}
                  alt={`Miles With Smiles community moment ${i + 1}`}
                  className="w-full h-full object-cover aspect-square grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500 cursor-pointer"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 7: JOIN CTA
          Final conversion section with both CTAs
      ══════════════════════════════════════════════════ */}
      <section className="bg-white py-24 lg:py-32" aria-labelledby="join-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-black/30 text-xs font-bold tracking-widest uppercase mb-4 block">
            Ready to Run?
          </span>
          <h2 id="join-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight leading-tight mb-6">
            Join the Miles With<br />Smiles Family
          </h2>
          <p className="text-black/60 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            No matter your pace, fitness level, or experience — you belong here. Show up, run your miles, and smile with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary — Register */}
            <a
              href={SITE_CONFIG.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-black text-white font-bold px-8 py-4 rounded-full hover:bg-black/80 transition-all text-base"
              aria-label="Register as a Member of Miles With Smiles"
            >
              Register as a Member
              <ArrowRight size={18} />
            </a>
            {/* Secondary — WhatsApp */}
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-black text-black font-semibold px-8 py-4 rounded-full hover:bg-black/5 transition-all text-base"
              aria-label="Join WhatsApp Community"
            >
              <MessageCircle size={18} />
              Join WhatsApp Community
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
