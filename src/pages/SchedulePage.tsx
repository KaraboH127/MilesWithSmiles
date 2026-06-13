/**
 * =============================================
 * SCHEDULE PAGE
 * =============================================
 * Dedicated page for all run activities:
 * - Wednesday 10km run with dynamic dates
 * - Saturday 5km run with dynamic dates
 * - Monthly Hikes with WhatsApp integration
 * - Join CTA
 */

import { MapPin, Clock, MessageCircle, Calendar, ArrowRight } from "lucide-react";
import { SITE_CONFIG, IMAGES } from "../config/site";
import {
  getUpcomingDates,
  formatDate,
  isThisWeek,
  isToday,
} from "../utils/dates";

export default function SchedulePage() {
  // ─── DYNAMIC DATE GENERATION ──────────────────────────────────
  // Generates upcoming run dates automatically — never hardcoded
  const wedDates = getUpcomingDates(
    SITE_CONFIG.scheduleStartDate.wednesday,
    3, // Wednesday = day index 3
    6  // Show 6 upcoming dates
  );
  const satDates = getUpcomingDates(
    SITE_CONFIG.scheduleStartDate.saturday,
    6, // Saturday = day index 6
    6  // Show 6 upcoming dates
  );

  return (
    <>
      {/* ─── PAGE HERO ──────────────────────────────────────────── */}
      <section className="relative pt-40 pb-24" aria-label="Schedule page hero">
        <div className="absolute inset-0">
          <img
            src={IMAGES.communityRun2}
            alt="Community runners"
            className="w-full h-full object-cover grayscale"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-white/30 text-xs font-bold tracking-widest uppercase mb-4 block">
            When We Run
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
            Run Schedule
          </h1>
          <p className="mt-6 text-white/60 text-lg max-w-lg leading-relaxed">
            Every Wednesday and Saturday, we take to the streets of Alexandra. Here's everything you need to show up.
          </p>

          {/* Quick info strip */}
          <div className="mt-10 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-white/70">
              <MapPin size={14} className="text-white/40" />
              {SITE_CONFIG.meetingLocation}
            </div>
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-white/70">
              <Clock size={14} className="text-white/40" />
              Meet: {SITE_CONFIG.meetTime}
            </div>
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-white/70">
              <Clock size={14} className="text-white/40" />
              Run Start: {SITE_CONFIG.runStartTime}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WEDNESDAY RUN ──────────────────────────────────────── */}
      <section className="py-24 border-b border-white/10" aria-labelledby="wednesday-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div>
              <span className="text-white/30 text-xs font-bold tracking-widest uppercase mb-4 block">
                Midweek Miles
              </span>
              <h2 id="wednesday-heading" className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
                Wednesday<br />Community Run
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-8">
                Our midweek run is the backbone of the Miles With Smiles routine. 10km through the streets of Alexandra with your crew. Push through the middle of the week and arrive at the weekend stronger.
              </p>

              {/* Run details */}
              <div className="space-y-4">
                {[
                  { label: "Distance", value: SITE_CONFIG.wednesday.distance },
                  { label: "Meeting Point", value: SITE_CONFIG.meetingLocation },
                  { label: "Meet Time", value: SITE_CONFIG.meetTime },
                  { label: "Run Start", value: SITE_CONFIG.runStartTime },
                  { label: "Frequency", value: "Every Wednesday" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between py-3 border-b border-white/10"
                  >
                    <span className="text-white/40 text-sm">{item.label}</span>
                    <span className="text-white font-semibold text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Wednesday dates */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Calendar size={16} className="text-white/40" />
                <h3 className="text-white font-bold text-lg">Upcoming Wednesday Runs</h3>
              </div>
              <p className="text-white/40 text-xs mb-4">
                Dates are generated automatically and always stay current.
              </p>
              <div className="space-y-3">
                {wedDates.map((date, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-colors ${
                      isToday(date)
                        ? "bg-white text-black border-white"
                        : isThisWeek(date)
                        ? "bg-white/10 text-white border-white/20"
                        : "bg-[#0f0f0f] text-white/60 border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Calendar
                        size={16}
                        className={isToday(date) ? "text-black/50" : "text-white/30"}
                      />
                      <span className="font-semibold text-sm">{formatDate(date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {isToday(date) && (
                        <span className="text-xs bg-black text-white px-2 py-0.5 rounded-full font-bold">
                          TODAY
                        </span>
                      )}
                      {!isToday(date) && isThisWeek(date) && (
                        <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">
                          This week
                        </span>
                      )}
                      <span
                        className={`text-xs font-medium ${
                          isToday(date) ? "text-black/60" : "text-white/40"
                        }`}
                      >
                        10km
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SATURDAY RUN ───────────────────────────────────────── */}
      <section className="py-24 border-b border-white/10 bg-[#060606]" aria-labelledby="saturday-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Saturday dates — left column on desktop */}
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-6">
                <Calendar size={16} className="text-white/40" />
                <h3 className="text-white font-bold text-lg">Upcoming Saturday Runs</h3>
              </div>
              <p className="text-white/40 text-xs mb-4">
                Dates are generated automatically and always stay current.
              </p>
              <div className="space-y-3">
                {satDates.map((date, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-colors ${
                      isToday(date)
                        ? "bg-white text-black border-white"
                        : isThisWeek(date)
                        ? "bg-white/10 text-white border-white/20"
                        : "bg-[#0f0f0f] text-white/60 border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Calendar
                        size={16}
                        className={isToday(date) ? "text-black/50" : "text-white/30"}
                      />
                      <span className="font-semibold text-sm">{formatDate(date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {isToday(date) && (
                        <span className="text-xs bg-black text-white px-2 py-0.5 rounded-full font-bold">
                          TODAY
                        </span>
                      )}
                      {!isToday(date) && isThisWeek(date) && (
                        <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">
                          This week
                        </span>
                      )}
                      <span
                        className={`text-xs font-medium ${
                          isToday(date) ? "text-black/60" : "text-white/40"
                        }`}
                      >
                        5km
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Saturday info — right column on desktop */}
            <div className="order-1 lg:order-2">
              <span className="text-white/30 text-xs font-bold tracking-widest uppercase mb-4 block">
                Weekend Warrior
              </span>
              <h2 id="saturday-heading" className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
                Saturday<br />Community Run
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-8">
                Start your weekend right. Our Saturday 5km is welcoming to all fitness levels — from first-timers to experienced runners. Show up, run your miles, and enjoy the community energy that makes early Saturday mornings the best part of the week.
              </p>

              {/* Run details */}
              <div className="space-y-4">
                {[
                  { label: "Distance", value: SITE_CONFIG.saturday.distance },
                  { label: "Meeting Point", value: SITE_CONFIG.meetingLocation },
                  { label: "Meet Time", value: SITE_CONFIG.meetTime },
                  { label: "Run Start", value: SITE_CONFIG.runStartTime },
                  { label: "Frequency", value: "Every Saturday" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between py-3 border-b border-white/10"
                  >
                    <span className="text-white/40 text-sm">{item.label}</span>
                    <span className="text-white font-semibold text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MONTHLY HIKES ──────────────────────────────────────── */}
      <section className="py-24 border-b border-white/10" aria-labelledby="hikes-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <span className="text-white/30 text-xs font-bold tracking-widest uppercase mb-4 block">
                Beyond the Road
              </span>
              <h2 id="hikes-heading" className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
                Monthly<br />Community Hikes
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-6">
                Our community hikes take place once every month. We leave the city behind and explore trails, mountains, and natural beauty together. These are some of our most cherished community moments.
              </p>
              <p className="text-white/60 text-base leading-relaxed mb-8">
                Dates and destinations are announced through our WhatsApp community. Join to get notified for the next hike.
              </p>

              {/* WhatsApp integration for hike dates */}
              <div className="bg-[#111] border border-white/10 rounded-2xl p-5 mb-6">
                <div className="flex items-start gap-3">
                  <MessageCircle size={18} className="text-white/40 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">
                      Hike Dates via WhatsApp
                    </p>
                    <p className="text-white/50 text-sm">
                      Hike dates and destinations are announced through our WhatsApp community. Never miss an adventure.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-white/90 transition-all text-sm"
                aria-label="Join WhatsApp Community for hike announcements"
              >
                <MessageCircle size={16} />
                Join WhatsApp Community
              </a>
            </div>

            {/* Hike image */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={IMAGES.hike2}
                alt="Miles With Smiles community hike"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── JOIN CTA ───────────────────────────────────────────── */}
      <section className="bg-white py-24" aria-labelledby="schedule-join-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="schedule-join-heading" className="text-4xl sm:text-5xl font-black text-black tracking-tight mb-6">
            See You at the Starting Line
          </h2>
          <p className="text-black/60 text-base sm:text-lg mb-10 max-w-xl mx-auto">
            Register as a member and join us every Wednesday and Saturday morning. Your first run is just one click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SITE_CONFIG.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-black text-white font-bold px-8 py-4 rounded-full hover:bg-black/80 transition-all"
              aria-label="Join the Club"
            >
              Join the Club
              <ArrowRight size={18} />
            </a>
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-black text-black font-semibold px-8 py-4 rounded-full hover:bg-black/5 transition-all"
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
