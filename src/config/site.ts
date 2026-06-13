/**
 * =============================================
 * SITE CONFIGURATION — SINGLE SOURCE OF TRUTH
 * =============================================
 * All configurable values are defined here.
 * Change links, branding, and schedule info
 * from this one file.
 */

export const SITE_CONFIG = {
  // ─── Club Identity ───────────────────────────────────
  name: "Miles With Smiles",
  tagline: "Run Together. Smile Together.",
  location: "Alexandra, Johannesburg, South Africa",
  locationShort: "Alexandra, Johannesburg",

  // ─── Contact & Social Links ──────────────────────────
  /**
   * WhatsApp Community Link
   * Replace this value to update ALL WhatsApp buttons site-wide
   */
  whatsappLink: "https://chat.whatsapp.com/L29mgr6a98aKrRBtgkZ8dg?s=cl&p=i&ilr=4",

  /**
   * Google Form Registration Link
   * Replace this value to update ALL "Join" buttons site-wide
   */
  registrationLink: "https://forms.google.com/example",

  // Social Media (update when available)
  facebook: "https://facebook.com/mileswithsmiles",
  instagram: "https://instagram.com/mileswithsmiles",
  email: "hello@mileswithsmiles.co.za",

  // ─── Run Schedule ────────────────────────────────────
  meetingLocation: "Soothe (Old Megalo), Alexandra",
  meetTime: "06:30",
  runStartTime: "07:00",

  /**
   * Wednesday Run Schedule
   * Recurring start date: Wednesday, 17 June 2026
   */
  wednesday: {
    day: "Wednesday",
    distance: "10km",
    label: "Community Run",
  },

  /**
   * Saturday Run Schedule
   * Recurring start date: Saturday, 20 June 2026
   */
  saturday: {
    day: "Saturday",
    distance: "5km",
    label: "Community Run",
  },

  /**
   * Recurring schedule start dates
   * The first Wednesday run: June 17, 2026
   * The first Saturday run: June 20, 2026
   */
  scheduleStartDate: {
    wednesday: new Date(2026, 5, 17), // June 17, 2026 (months are 0-indexed)
    saturday: new Date(2026, 5, 20),  // June 20, 2026
  },
};

// ─── Image URLs ───────────────────────────────────────────
/**
 * PHOTOGRAPHY CONFIGURATION
 * Replace these URLs with real club photography when available.
 * Each key corresponds to a section or component in the site.
 */
export const IMAGES = {
  /**
   * HERO SECTION
   * Full-screen background image (100vh)
   * Replace with authentic club race/run photography
   */
  hero: "https://images.pexels.com/photos/8556686/pexels-photo-8556686.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920",

  /**
   * ABOUT PAGE — Main feature image
   */
  about: "https://images.pexels.com/photos/12071514/pexels-photo-12071514.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",

  /**
   * ABOUT PAGE — Secondary image
   */
  aboutSecondary: "https://images.pexels.com/photos/17983227/pexels-photo-17983227.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",

  /**
   * COMMUNITY RUNS — Used in schedule / run sections
   */
  communityRun1: "https://images.pexels.com/photos/12071514/pexels-photo-12071514.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  communityRun2: "https://images.pexels.com/photos/5319502/pexels-photo-5319502.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  communityRun3: "https://images.pexels.com/photos/12079180/pexels-photo-12079180.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",

  /**
   * HIKE IMAGERY
   */
  hike1: "https://images.pexels.com/photos/4268105/pexels-photo-4268105.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  hike2: "https://images.pexels.com/photos/5004995/pexels-photo-5004995.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  hike3: "https://images.pexels.com/photos/27951269/pexels-photo-27951269.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",

  /**
   * RACE DAY IMAGERY
   */
  raceDay1: "https://images.pexels.com/photos/17983227/pexels-photo-17983227.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  raceDay2: "https://images.pexels.com/photos/2403528/pexels-photo-2403528.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  raceDay3: "https://images.pexels.com/photos/8447266/pexels-photo-8447266.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",

  /**
   * BLOG ARTICLE THUMBNAILS
   * Replace with relevant photography for each article
   */
  blog1: "https://images.pexels.com/photos/8556686/pexels-photo-8556686.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=700",
  blog2: "https://images.pexels.com/photos/5319502/pexels-photo-5319502.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=700",
  blog3: "https://images.pexels.com/photos/35094520/pexels-photo-35094520.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=700",
  blog4: "https://images.pexels.com/photos/12079180/pexels-photo-12079180.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=700",
  blog5: "https://images.pexels.com/photos/36717054/pexels-photo-36717054.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=700",
  blog6: "https://images.pexels.com/photos/31833583/pexels-photo-31833583.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=700",

  /**
   * GALLERY IMAGES — Masonry grid
   */
  gallery: [
    {
      src: "https://images.pexels.com/photos/12071514/pexels-photo-12071514.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      category: "Community Runs",
      alt: "Group of runners in a community run",
    },
    {
      src: "https://images.pexels.com/photos/8556686/pexels-photo-8556686.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      category: "Community Runs",
      alt: "Diverse group running together",
    },
    {
      src: "https://images.pexels.com/photos/17983227/pexels-photo-17983227.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      category: "Race Days",
      alt: "Runners celebrating at a race event",
    },
    {
      src: "https://images.pexels.com/photos/4268105/pexels-photo-4268105.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      category: "Hikes",
      alt: "Community members hiking on a trail",
    },
    {
      src: "https://images.pexels.com/photos/2403528/pexels-photo-2403528.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      category: "Race Days",
      alt: "Marathon runners smiling",
    },
    {
      src: "https://images.pexels.com/photos/5004995/pexels-photo-5004995.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      category: "Hikes",
      alt: "Group hiking on mountain trail",
    },
    {
      src: "https://images.pexels.com/photos/5319502/pexels-photo-5319502.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      category: "Community Runs",
      alt: "People running on the road together",
    },
    {
      src: "https://images.pexels.com/photos/8447266/pexels-photo-8447266.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      category: "Special Events",
      alt: "Runners giving thumbs up at event",
    },
    {
      src: "https://images.pexels.com/photos/12079180/pexels-photo-12079180.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      category: "Race Days",
      alt: "Runners on a bridge at a race",
    },
    {
      src: "https://images.pexels.com/photos/27951269/pexels-photo-27951269.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      category: "Hikes",
      alt: "Friends hiking on mountain trail",
    },
    {
      src: "https://images.pexels.com/photos/31833583/pexels-photo-31833583.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      category: "Special Events",
      alt: "Happy participants at a marathon event",
    },
    {
      src: "https://images.pexels.com/photos/36717054/pexels-photo-36717054.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      category: "Community Runs",
      alt: "Silhouetted runners at sunrise",
    },
  ],
};
