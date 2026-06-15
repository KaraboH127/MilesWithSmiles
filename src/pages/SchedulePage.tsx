/**
 * SCHEDULE PAGE
 */

import { Calendar, Clock, MapPin, MessageCircle } from "lucide-react";
import { SITE_CONFIG, IMAGES } from "../config/site";
import {
  getUpcomingDates,
  formatDate,
  isThisWeek,
  isToday,
} from "../utils/dates";
import {
  Button,
  Card,
  Hero,
  IconText,
  JoinCTA,
  Section,
  SectionHeader,
} from "../components/ui";

export default function SchedulePage() {
  const wedDates = getUpcomingDates(SITE_CONFIG.scheduleStartDate.wednesday, 3, 6);
  const satDates = getUpcomingDates(SITE_CONFIG.scheduleStartDate.saturday, 6, 6);

  return (
    <>
      <Hero
        eyebrow="When We Run"
        backgroundImage={IMAGES.communityRun2}
        title="Run Schedule"
        description="Every Wednesday and Saturday, we take to the streets of Alexandra. Here is everything you need to show up."
      >
        <div className="flex flex-wrap gap-4">
          <span className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2 text-sm text-white/70">
            <MapPin size={16} />
            {SITE_CONFIG.meetingLocation}
          </span>
          <span className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2 text-sm text-white/70">
            <Clock size={16} />
            Meet: {SITE_CONFIG.meetTime}
          </span>
          <span className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2 text-sm text-white/70">
            <Clock size={16} />
            Run Start: {SITE_CONFIG.runStartTime}
          </span>
        </div>
      </Hero>

      <Section className="border-b border-white/20" aria-labelledby="wednesday-heading">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Midweek Miles"
              title={
                <>
                  Wednesday
                  <br />
                  Community Run
                </>
              }
              titleId="wednesday-heading"
            />
            <p className="text-body mb-8 leading-relaxed text-white/60">
              Our midweek run is the backbone of the Miles With Smiles routine. 10km through the streets of Alexandra with your crew.
            </p>
            <RunDetailsList
              items={[
                { label: "Distance", value: SITE_CONFIG.wednesday.distance },
                { label: "Meeting Point", value: SITE_CONFIG.meetingLocation },
                { label: "Meet Time", value: SITE_CONFIG.meetTime },
                { label: "Run Start", value: SITE_CONFIG.runStartTime },
                { label: "Frequency", value: "Every Wednesday" },
              ]}
            />
          </div>

          <DateList title="Upcoming Wednesday Runs" dates={wedDates} distance="10km" />
        </div>
      </Section>

      <Section variant="dark" className="border-b border-white/20" aria-labelledby="saturday-heading">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <DateList title="Upcoming Saturday Runs" dates={satDates} distance="5km" />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeader
              eyebrow="Weekend Warrior"
              title={
                <>
                  Saturday
                  <br />
                  Community Run
                </>
              }
              titleId="saturday-heading"
            />
            <p className="text-body mb-8 leading-relaxed text-white/60">
              Start your weekend right. Our Saturday 5km is welcoming to all fitness levels — from first-timers to experienced runners.
            </p>
            <RunDetailsList
              items={[
                { label: "Distance", value: SITE_CONFIG.saturday.distance },
                { label: "Meeting Point", value: SITE_CONFIG.meetingLocation },
                { label: "Meet Time", value: SITE_CONFIG.meetTime },
                { label: "Run Start", value: SITE_CONFIG.runStartTime },
                { label: "Frequency", value: "Every Saturday" },
              ]}
            />
          </div>
        </div>
      </Section>

      <Section className="border-b border-white/20" aria-labelledby="hikes-heading">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Beyond the Road"
              title={
                <>
                  Monthly
                  <br />
                  Community Hikes
                </>
              }
              titleId="hikes-heading"
            />
            <p className="text-body mb-4 leading-relaxed text-white/60">
              Our community hikes take place once every month. We leave the city behind and explore trails, mountains, and natural beauty together.
            </p>
            <p className="text-body mb-8 leading-relaxed text-white/60">
              Dates and destinations are announced through our WhatsApp community. Join to get notified for the next hike.
            </p>

            <Card className="mb-6">
              <IconText icon={MessageCircle} className="text-sm">
                <span>
                  <span className="font-semibold text-white">Hike Dates via WhatsApp.</span>{" "}
                  <span className="text-white/50">
                    Hike dates and destinations are announced through our WhatsApp community.
                  </span>
                </span>
              </IconText>
            </Card>

            <Button
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              aria-label="Join WhatsApp Community for hike announcements"
            >
              <MessageCircle size={16} />
              Join WhatsApp Community
            </Button>
          </div>

          <div className="aspect-[4/3] overflow-hidden rounded-md">
            <img
              src={IMAGES.hike4}
              alt="Miles With Smiles community hike"
              className="h-full w-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      <JoinCTA
        title="See You at the Starting Line"
        description="Register as a member and join us every Wednesday and Saturday morning. Your first run is one click away."
        headingId="schedule-join-heading"
      />
    </>
  );
}

function RunDetailsList({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-center justify-between border-b border-white/20 py-3"
        >
          <span className="text-sm text-white/40">{item.label}</span>
          <span className="text-sm font-semibold text-white">{item.value}</span>
        </div>
      ))}
    </div>
  );
}

function DateList({
  title,
  dates,
  distance,
}: {
  title: string;
  dates: Date[];
  distance: string;
}) {
  return (
    <div>
      <IconText icon={Calendar} className="mb-6 text-lg font-bold">
        {title}
      </IconText>
      {/*<p className="text-caption mb-4 normal-case tracking-normal text-white/40">
        Dates are generated automatically and always stay current.
      </p>*/}
      <div className="space-y-3">
        {dates.map((date, i) => (
          <Card
            key={i}
            variant={isToday(date) ? "inverse" : "dark"}
            padding="md"
            className={
              isToday(date)
                ? ""
                : isThisWeek(date)
                ? "border-white/30 bg-white/10"
                : ""
            }
          >
            <div className="flex items-center justify-between">
              <IconText icon={Calendar} className="text-sm font-semibold">
                {formatDate(date)}
              </IconText>
              <div className="flex items-center gap-2">
                {isToday(date) && (
                  <span className="rounded-md bg-black px-2 py-1 text-xs font-bold text-white">
                    TODAY
                  </span>
                )}
                {!isToday(date) && isThisWeek(date) && (
                  <span className="rounded-md border border-white/20 px-2 py-1 text-xs text-white">
                    This week
                  </span>
                )}
                <span className="text-xs font-medium text-white/40">{distance}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
