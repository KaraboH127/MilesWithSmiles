/**
 * =============================================
 * ABOUT PAGE
 * =============================================
 * Sections:
 * - Page hero
 * - Our Story
 * - Our Mission
 * - Our Values
 * - Why We Run
 * - CTA
 */

import { ArrowRight, MessageCircle } from "lucide-react";
import { SITE_CONFIG, IMAGES } from "../config/site";

// ─── VALUES DATA ─────────────────────────────────────────────────────────────
const VALUES = [
  {
    number: "01",
    title: "Community",
    description: "We are nothing without each other. Every runner, every smile, every step we share builds the community that defines us.",
  },
  {
    number: "02",
    title: "Discipline",
    description: "Showing up when it's cold, when you're tired, when life is busy — that discipline is what separates those who dream from those who achieve.",
  },
  {
    number: "03",
    title: "Positivity",
    description: "We celebrate every runner, every pace, every milestone. Negativity has no place in our community. We lift each other up.",
  },
  {
    number: "04",
    title: "Growth",
    description: "We believe every person who joins us is capable of more than they realise. We run to grow — physically, mentally, and as a community.",
  },
  {
    number: "05",
    title: "Inclusion",
    description: "All genders, all ages, all fitness levels, all backgrounds. If you want to run with us, you are welcome here. No exceptions.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── PAGE HERO ──────────────────────────────────────────── */}
      <section className="relative pt-40 pb-24 overflow-hidden" aria-label="About page hero">
        {/* Subtle background */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.about}
            alt="Miles With Smiles runners"
            className="w-full h-full object-cover grayscale"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-white/30 text-xs font-bold tracking-widest uppercase mb-4 block">
            About Us
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight max-w-2xl">
            We're More Than a Running Club.
          </h1>
          <p className="mt-6 text-white/60 text-lg max-w-xl leading-relaxed">
            We're a community movement built on the streets of Alexandra, powered by shared miles and collective smiles.
          </p>
        </div>
      </section>

      {/* ─── OUR STORY ──────────────────────────────────────────── */}
      <section className="py-24 lg:py-32" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Story text */}
            <div>
              <span className="text-white/30 text-xs font-bold tracking-widest uppercase mb-6 block">
                Our Story
              </span>
              <h2 id="story-heading" className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-8">
                Born on the Streets of Alexandra
              </h2>
              <div className="space-y-5 text-white/60 text-base leading-relaxed">
                <p>
                  Miles With Smiles didn't begin in a boardroom or a gym. It began on the streets of Alexandra — one of Johannesburg's most vibrant and resilient communities — with a simple belief: that running could bring people together.
                </p>
                <p>
                  A small group of passionate runners came together, drawn not just by the love of running, but by a vision of what community could look like when people showed up for each other consistently. They ran in the early morning before the city woke up, through the streets they knew and loved, and in doing so, they started something far bigger than a fitness routine.
                </p>
                <p>
                  Word spread. Friends brought friends. Strangers became training partners. Training partners became family. Each Wednesday and Saturday morning, the group grew — not because of marketing or fancy equipment — but because of something far more powerful: authentic community.
                </p>
                <p>
                  Today, Miles With Smiles represents a movement of people who believe in the power of showing up — for yourself, for your community, and for the miles ahead. We are Alexandra. We are proud. We run together.
                </p>
              </div>
            </div>

            {/* Story images */}
            <div className="space-y-4">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img
                  src={IMAGES.about}
                  alt="Community runners at Miles With Smiles"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src={IMAGES.raceDay2}
                    alt="Runners celebrating together"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src={IMAGES.hike1}
                    alt="Community hike with Miles With Smiles"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OUR MISSION ────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] border-y border-white/10 py-24" aria-labelledby="mission-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-white/30 text-xs font-bold tracking-widest uppercase mb-6 block">
              Our Mission
            </span>
            <h2 id="mission-heading" className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-8">
              Promoting Health, Connection & Community
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: "❤️‍🔥", title: "Health", desc: "We promote physical wellbeing through accessible, consistent running for all fitness levels." },
              { icon: "🔁", title: "Consistency", desc: "We build habits that last. Twice-weekly runs create the discipline that changes lives." },
              { icon: "🔗", title: "Connection", desc: "We bring people together, forging real friendships through shared effort and shared miles." },
              { icon: "🌍", title: "Community Engagement", desc: "We are rooted in Alexandra and committed to making our community stronger, healthier, and more united." },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#111] border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-colors"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR VALUES ─────────────────────────────────────────── */}
      <section className="py-24 lg:py-32" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-white/30 text-xs font-bold tracking-widest uppercase mb-4 block">
              What We Stand For
            </span>
            <h2 id="values-heading" className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              Our Values
            </h2>
          </div>

          <div className="divide-y divide-white/10">
            {VALUES.map((value, i) => (
              <div
                key={i}
                className="group py-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-12 hover:bg-white/2 transition-colors"
              >
                <span className="text-white/20 font-black text-5xl w-20 shrink-0 font-mono">
                  {value.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-white font-black text-2xl mb-2 group-hover:text-white transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-white/50 text-base leading-relaxed max-w-2xl">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY WE RUN ─────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] border-t border-white/10 py-24" aria-labelledby="why-run-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-video rounded-2xl overflow-hidden">
              <img
                src={IMAGES.aboutSecondary}
                alt="Miles With Smiles runners after a race"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </div>
            <div>
              <span className="text-white/30 text-xs font-bold tracking-widest uppercase mb-4 block">
                Our Purpose
              </span>
              <h2 id="why-run-heading" className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                Why We Run
              </h2>
              <div className="space-y-5 text-white/60 text-base leading-relaxed">
                <p>
                  We run because running is one of the most democratic sports in the world. No subscriptions. No special equipment. No gatekeeping. Just people, pavement, and persistence.
                </p>
                <p>
                  We run because the streets of Alexandra deserve to be celebrated — and running is how we celebrate them. Every route we take is a declaration: this is our community, and we are proud of it.
                </p>
                <p>
                  We run because the mental and physical benefits of consistent exercise have the power to transform lives. We've seen it happen. A beginner runner who couldn't complete 1km becomes someone who finishes their first 10km. That transformation — that growth — is why Miles With Smiles exists.
                </p>
                <p>
                  We run because together, we are stronger. In a world that often feels divided, we offer a simple, powerful alternative: show up, run your miles, and smile. Everything else follows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── JOIN CTA ───────────────────────────────────────────── */}
      <section className="bg-white py-24" aria-labelledby="about-join-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="about-join-heading" className="text-4xl sm:text-5xl font-black text-black tracking-tight mb-6">
            Ready to Be Part of This?
          </h2>
          <p className="text-black/60 text-base sm:text-lg mb-10 max-w-xl mx-auto">
            Join the Miles With Smiles community today. Register as a member and start your journey with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SITE_CONFIG.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-black text-white font-bold px-8 py-4 rounded-full hover:bg-black/80 transition-all"
              aria-label="Join Miles With Smiles"
            >
              Join Miles With Smiles
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
