/**
 * ABOUT PAGE
 */

import { Globe, Heart, Link2, Repeat } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { IMAGES } from "../config/site";
import { Card, Hero, IconText, JoinCTA, Section, SectionHeader } from "../components/ui";

const VALUES = [
  {
    number: "01",
    title: "Community",
    description:
      "We are nothing without each other. Every runner, every smile, every step we share builds the community that defines us.",
  },
  {
    number: "02",
    title: "Discipline",
    description:
      "Showing up when it is cold, when you are tired, when life is busy — that discipline is what separates those who dream from those who achieve.",
  },
  {
    number: "03",
    title: "Positivity",
    description:
      "We celebrate every runner, every pace, every milestone. Negativity has no place in our community. We lift each other up.",
  },
  {
    number: "04",
    title: "Growth",
    description:
      "We believe every person who joins us is capable of more than they realise. We run to grow — physically, mentally, and as a community.",
  },
  {
    number: "05",
    title: "Inclusion",
    description:
      "All genders, all ages, all fitness levels, all backgrounds. If you want to run with us, you are welcome here. No exceptions.",
  },
];

const MISSION_ITEMS: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Heart,
    title: "Health",
    desc: "We promote physical wellbeing through accessible, consistent running for all fitness levels.",
  },
  {
    icon: Repeat,
    title: "Consistency",
    desc: "We build habits that last. Twice-weekly runs create the discipline that changes lives.",
  },
  {
    icon: Link2,
    title: "Connection",
    desc: "We bring people together, forging real friendships through shared effort and shared miles.",
  },
  {
    icon: Globe,
    title: "Community Engagement",
    desc: "We are rooted in Alexandra and committed to making our community stronger, healthier, and more united.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About Us"
        backgroundImage={IMAGES.about}
        title="We're More Than a Running Club."
        description="We're a community movement built on the streets of Alexandra, powered by shared miles and collective smiles."
      />

      <Section aria-labelledby="story-heading">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Our Story"
              title="Born on the Streets of Alexandra"
              titleId="story-heading"
            />
            <div className="space-y-4 text-body leading-relaxed text-white/60">
              <p>
                Miles With Smiles did not begin in a boardroom or a gym. It began on the streets of Alexandra — one of Johannesburg&apos;s most vibrant and resilient communities — with a simple belief: that running could bring people together.
              </p>
              <p>
                A small group of passionate runners came together, drawn not just by the love of running, but by a vision of what community could look like when people showed up for each other consistently.
              </p>
              <p>
                Word spread. Friends brought friends. Strangers became training partners. Training partners became family. Each Wednesday and Saturday morning, the group grew through authentic community.
              </p>
              <p>
                Today, Miles With Smiles represents a movement of people who believe in the power of showing up — for yourself, for your community, and for the miles ahead.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="aspect-video overflow-hidden rounded-md">
              <img
                src={IMAGES.about}
                alt="Community runners at Miles With Smiles"
                className="h-full w-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
                loading="lazy"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden rounded-md">
                <img
                  src={IMAGES.raceDay2}
                  alt="Runners celebrating together"
                  className="h-full w-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
                  loading="lazy"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-md">
                <img
                  src={IMAGES.hike1}
                  alt="Community hike with Miles With Smiles"
                  className="h-full w-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="dark" aria-labelledby="mission-heading">
        <SectionHeader
          eyebrow="Our Mission"
          title="Promoting Health, Connection and Community"
          align="center"
          titleId="mission-heading"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {MISSION_ITEMS.map((item) => (
            <Card key={item.title} className="text-center">
              <IconText icon={item.icon} className="mb-4 justify-center text-white" />
              <h3 className="text-h3 mb-2">{item.title}</h3>
              <p className="text-body text-sm leading-relaxed text-white/50">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section aria-labelledby="values-heading">
        <SectionHeader eyebrow="What We Stand For" title="Our Values" titleId="values-heading" />
        <div className="divide-y divide-white/20">
          {VALUES.map((value) => (
            <div
              key={value.number}
              className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:gap-12"
            >
              <span className="w-20 shrink-0 text-5xl font-black text-white/20">
                {value.number}
              </span>
              <div className="flex-1">
                <h3 className="text-h3 mb-2 text-2xl">{value.title}</h3>
                <p className="text-body max-w-2xl leading-relaxed text-white/50">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="dark" aria-labelledby="why-run-heading">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="aspect-video overflow-hidden rounded-md">
            <img
              src={IMAGES.aboutSecondary}
              alt="Miles With Smiles runners after a race"
              className="h-full w-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
              loading="lazy"
            />
          </div>
          <div>
            <SectionHeader eyebrow="Our Purpose" title="Why We Run" titleId="why-run-heading" />
            <div className="space-y-4 text-body leading-relaxed text-white/60">
              <p>
                We run because running is one of the most democratic sports in the world. No subscriptions. No special equipment. No gatekeeping. Just people, pavement, and persistence.
              </p>
              <p>
                We run because the streets of Alexandra deserve to be celebrated — and running is how we celebrate them.
              </p>
              <p>
                We run because the mental and physical benefits of consistent exercise have the power to transform lives.
              </p>
              <p>
                We run because together, we are stronger. Show up, run your miles, and smile. Everything else follows.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <JoinCTA
        eyebrow="Join Us"
        title="Ready to Be Part of This?"
        description="Join the Miles With Smiles community today. Register as a member and start your journey with us."
        headingId="about-join-heading"
      />
    </>
  );
}
