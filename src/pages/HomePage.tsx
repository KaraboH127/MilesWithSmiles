/**
 * HOME PAGE
 * Hero → Social proof → About → Schedule → Benefits → WhatsApp → Gallery → Join CTA
 */
import SEOHead from '../components/SEOHead';
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  Calendar,
  ChevronRight,
  Clock,
  Footprints,
  Globe,
  MapPin,
  Megaphone,
  MessageCircle,
  Mountain,
  Repeat,
  TrendingUp,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SITE_CONFIG, IMAGES } from "../config/site";
import { getUpcomingDates, formatDateShort, isThisWeek } from "../utils/dates";
import {
  Button,
  Card,
  Hero,
  IconText,
  JoinCTA,
  Section,
  SectionHeader,
} from "../components/ui";

const BENEFITS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Repeat,
    title: "Consistency",
    description:
      "Show up week after week. The club holds you accountable and makes it easier to stick to your running goals.",
  },
  {
    icon: Footprints,
    title: "Fitness",
    description:
      "Whether you are a beginner or experienced runner, every run builds strength, stamina, and resilience.",
  },
  {
    icon: Users,
    title: "Friendship",
    description:
      "Some of the best friendships start at mile one. Our club is built on real connections and shared experiences.",
  },
  {
    icon: Megaphone,
    title: "Accountability",
    description:
      "When the community knows you are coming, you show up. Together, we push each other to be better.",
  },
  {
    icon: Globe,
    title: "Community Impact",
    description:
      "We run in and for Alexandra. Every step we take contributes to a more active, healthier community.",
  },
  {
    icon: TrendingUp,
    title: "Personal Growth",
    description:
      "Running teaches patience, discipline, and grit. You will surprise yourself with what you can achieve.",
  },
];

export default function HomePage() {
  const wedDates = getUpcomingDates(SITE_CONFIG.scheduleStartDate.wednesday, 3, 4);
  const satDates = getUpcomingDates(SITE_CONFIG.scheduleStartDate.saturday, 6, 4);

  return (
    <>
      <SEOHead
        title="Miles With Smiles | Social Running Club in Alexandra, Johannesburg"
        description="Join Miles With Smiles, a social running club in Alexandra, Johannesburg. Weekly 5km and 10km group runs, monthly hikes, and a supportive community for all levels."
        canonical="/"
      />
      <Hero
        fullScreen
        backgroundImage={IMAGES.hero}
        meta={
          <span className="inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-2 text-xs font-medium text-white/80">
            <MapPin size={16} />
            Alexandra, Johannesburg
          </span>
        }
        title={
          <>
            Run Together.
            <br />
            <span className="text-white/70">Smile Together.</span>
          </>
        }
        description="Miles With Smiles Social Run Club is a community running club based in Alexandra, bringing people together through fitness, friendship, consistency, and shared miles."
        className="min-h-[600px]"
        footer={
          <div className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
            {/*<span className="text-caption uppercase tracking-widest">Scroll</span>
            <ArrowDown size={16} className="text-white/30" />*/}
          </div>
        }
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            href={SITE_CONFIG.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            aria-label="Join Miles With Smiles"
          >
            Join Miles With Smiles
            <ArrowRight size={18} />
          </Button>
          <Button
            href={SITE_CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            aria-label="Join WhatsApp Community"
          >
            <MessageCircle size={18} />
            Join WhatsApp Community
          </Button>
        </div>
      </Hero>

     <Section variant="dark" spacing="none" className="border-y border-white/20 py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-center">
          {[
            { value: "60+", label: "Active members" },
            { value: "2×", label: "Weekly runs" },
            { value: "Free", label: "Always, forever" },
            { value: "All paces", label: "Welcome here" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-2xl font-black text-white">{value}</p>
              <p className="mt-1 text-xs text-white/50">{label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section aria-labelledby="about-heading">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="Who We Are"
              title={
                <>
                  More Than Miles.
                  <br />
                  We&apos;re a Movement.
                </>
              }
              titleId="about-heading"
            />
            <p className="text-body mb-4 leading-relaxed text-white/60">
              Miles With Smiles Social Run Club was born on the streets of Alexandra — a neighbourhood brimming with energy, ambition, and untapped potential. We started as a small group of friends who believed that running could do more than build fitness. We believed it could build community.
            </p>
            <p className="text-body mb-8 leading-relaxed text-white/60">
              Today, we gather every Wednesday and Saturday to run together, support each other, and show Alexandra that community strength starts with showing up. We are inclusive, consistent, and community-first. No experience required. All paces welcome.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border-b border-white/30 pb-1 text-sm font-semibold text-white transition-colors hover:border-white"
            >
              Our Full Story
              <ChevronRight size={16} />
            </Link>
          </div>

          <div className="aspect-[3/3] overflow-hidden rounded-md">
            <img
              src= "/images/MilesWithSmilesLogo.jpg"
              alt="Miles With Smiles community runners in Alexandra"
              className="h-full w-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
              loading="lazy"
              width="1"
              height="1"
            />
          </div>
        </div>
      </Section>

      <Section variant="dark" aria-labelledby="schedule-heading">
        <SectionHeader
          eyebrow="Join Us"
          title="Weekly Schedule"
          description="Lace up and show up. Here is where and when we run."
          align="center"
          titleId="schedule-heading"
        />

        <Card className="mb-8 flex flex-col items-center justify-center gap-6 text-center sm:flex-row">
          <IconText icon={MapPin} className="text-sm text-white/70">
            {SITE_CONFIG.meetingLocation}
          </IconText>
          <span className="hidden h-6 w-px bg-white/20 sm:block" />
          <IconText icon={Clock} className="text-sm text-white/70">
            Meet: {SITE_CONFIG.meetTime} | Run Start: {SITE_CONFIG.runStartTime}
          </IconText>
        </Card>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <ScheduleRunCard
            title="Wednesday Run"
            distance={SITE_CONFIG.wednesday.distance}
            dates={wedDates}
          />
          <ScheduleRunCard
            title="Saturday Run"
            distance={SITE_CONFIG.saturday.distance}
            dates={satDates}
          />
          <Card>
            <div className="mb-4 flex items-center justify-between">
              <span className="text-h3">Monthly Hikes</span>
              <span className="rounded-md border border-white/20 px-3 py-1 text-xs font-bold text-white/60">
                Monthly
              </span>
            </div>
            <p className="text-body mb-6 text-sm leading-relaxed text-white/60">
              Our community hikes take place once every month. Dates and destinations are announced through our WhatsApp community.
            </p>
            <div className="border-t border-white/20 pt-4">
              <p className="text-caption mb-4 normal-case tracking-normal text-white/40">
                Hike dates and destinations are announced through our WhatsApp community.
              </p>
              <Button
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="sm"
              >
                <MessageCircle size={16} />
                Join WhatsApp Community
              </Button>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <Link
            to="/schedule"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            View full schedule
            <ChevronRight size={16} />
          </Link>
        </div>
      </Section>

      <Section aria-labelledby="benefits-heading">
        <SectionHeader
          eyebrow="Why Run With Us"
          title="What You Gain"
          align="center"
          titleId="benefits-heading"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <Card key={benefit.title}>
              <IconText icon={benefit.icon} className="mb-4 text-white">
                <span className="sr-only">{benefit.title}</span>
              </IconText>
              <h3 className="text-h3 mb-2">{benefit.title}</h3>
              <p className="text-body text-sm leading-relaxed text-white/50">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section variant="dark" aria-labelledby="whatsapp-heading">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeader
            eyebrow="Stay Connected"
            title="Join the Conversation"
            description="Get weekly run updates, hike announcements, community news, and connect with fellow runners through our WhatsApp community."
            align="center"
            titleId="whatsapp-heading"
          />
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              <MessageCircle size={18} />
              Join WhatsApp Community
            </Button>
            <Button
              href={SITE_CONFIG.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              Register as a Member
            </Button>
          </div>
        </div>
      </Section>

      <Section aria-labelledby="gallery-preview-heading">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Our Community"
            title="Moments in Motion"
            titleId="gallery-preview-heading"
            className="mb-0"
          />
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 border-b border-white/30 pb-1 text-sm font-semibold text-white transition-colors hover:border-white"
          >
            View Full Gallery
            <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {[
            IMAGES.communityRun1,
            IMAGES.raceDay1,
            IMAGES.hike1,
            IMAGES.communityRun2,
            IMAGES.raceDay2,
            IMAGES.hike2,
          ].map((src, i) => (
            <div
              key={src}
              className={`overflow-hidden rounded-md ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
            >
              <img
                src={src}
                alt={`Miles With Smiles community moment ${i + 1}`}
                className="aspect-square h-full w-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
                loading="lazy"
                width="1"
                height="1"
              />
            </div>
          ))}
        </div>
      </Section>

      <JoinCTA
        title={
          <>
            Join the Miles With
            <br />
            Smiles Family
          </>
        }
        description="No matter your pace, fitness level, or experience — you belong here. Show up, run your miles, and smile with us."
        primaryLabel="Join the Club"
        headingId="join-heading"
      />
    </>
  );
}

function ScheduleRunCard({
  title,
  distance,
  dates,
}: {
  title: string;
  distance: string;
  dates: Date[];
}) {
  return (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-h3">{title}</span>
        <span className="rounded-md bg-white px-3 py-1 text-xs font-bold text-black">
          {distance}
        </span>
      </div>
      <p className="text-caption mb-4 normal-case tracking-normal text-white/40">
        Upcoming dates
      </p>
      <ul className="space-y-2">
        {dates.map((date, i) => (
          <li
            key={i}
            className={`flex items-center justify-between border-b border-white/10 py-2 last:border-0 ${
              isThisWeek(date) ? "text-white" : "text-white/50"
            }`}
          >
            <IconText icon={Calendar} className="text-sm">
              {formatDateShort(date)}
            </IconText>
            {isThisWeek(date) && (
              <span className="rounded-md border border-white/20 px-2 py-1 text-xs text-white/70">
                This week
              </span>
            )}
          </li>
        ))}
      </ul>
    </Card>
  );
}
