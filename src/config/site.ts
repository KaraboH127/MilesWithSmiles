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
  name: "Miles With Smiles Social Running Club",
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
  registrationLink: "https://forms.gle/ZYUX226aVmFgXdCe6",

  // Social Media (update when available)
  facebook: "https://www.facebook.com/profile.php?id=61570772859468&mibextid=wwXIfr&mibextid=wwXIfr",
  instagram: "https://www.instagram.com/miles_with_smiles_src/",
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
  hero: "/images/GalleryPicture-22.jpeg",

  /**
   * ABOUT PAGE — Main feature image
   */
  about: "/images/PeopleRunning-four.jpg",

  /**
   * ABOUT PAGE — Secondary image
   */
  aboutSecondary: "/images/GroupPhoto-two.jpg",

  /**
   * ABOUT PAGE — third image
   */
    aboutThird: "/images/MilesWithSmilesLogo.jpg",

  /**
   * COMMUNITY RUNS — Used in schedule / run sections
   */
  communityRun1: "/images/GroupWalking.jpg",
  communityRun2: "/images/GroupPhoto-one.jpg",
  communityRun3: "/images/PeopleRunning-three.jpg",

  /**
   * HIKE IMAGERY
   */
  hike1: "/images/HikingPicture-one.jpeg",
  hike2: "/images/HikingPicture-two.jpeg",
  hike3: "/images/HikingPicture-three.jpeg",

  /**
   * RACE DAY IMAGERY
   */
  raceDay1: "/images/PeopleRunning-one.jpg",
  raceDay2: "/images/PeopleRunning-two.jpg",
  raceDay3: "/images/PeopleRunning-four.jpg",

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
      src: "/images/PeopleRunning-three.jpg",
      category: "Community Runs",
      alt: "Smilers",
    },
    {
      src: "/images/GalleryPicture-one.jpeg",
      category: "Hikes",
      alt: "Smilers at a hike",
    },
    {
      src: "/images/GalleryPicture-three.jpeg",
      category: "Hikes",
      alt: "Smilers at a hike",
    },
    {
      src: "/images/GalleryPicture-four.jpeg",
      category: "Hikes",
      alt: "Smilers at a hike",
    },
    {
      src: "/images/GalleryPicture-eleven.jpeg",
      category: "Community Runs",
      alt: "Smilers",
    },
    {
      src: "/images/GalleryPicture-eight.jpeg",
      category: "Community Runs",
      alt: "Group hiking on mountain trail",
    },
    {
      src: "/images/GalleryPicture-two.jpeg",
      category: "Hikes",
      alt: "Smilers at a hike",
    },
    {
      src: "/images/GalleryPicture-nine.jpeg",
      category: "Community Runs",
      alt: "Smilers",
    },
    {
      src: "/images/GalleryPicture-ten.jpeg",
      category: "Community Runs",
      alt: "Smilers",
    },
    {
      src: "/images/GalleryPicture-seven.jpeg",
      category: "Community Runs",
      alt: "Smilers",
    },
    {
      src: "/images/GalleryPicture-five.jpeg",
      category: "Community Runs",
      alt: "Smilers",
    },
    {
      src: "/images/GalleryPicture-six.jpeg",
      category: "Community Runs",
      alt: "Smilers",
    },
    {
      src: "/images/GalleryPicture-12.jpeg",
      category: "Hikes",
      alt: "Smilers at a hike",
    },
    {
      src: "/images/GalleryPicture-13.jpeg",
      category: "Hikes",
      alt: "Smilers at a hike",
    },
    {
      src: "/images/GalleryPicture-14.jpeg",
      category: "Hikes",
      alt: "Smilers at a hike",
    },
    {
      src: "/images/GalleryPicture-15.jpeg",
      category: "Hikes",
      alt: "Smilers at a hike",
    },
    {
      src: "/images/GalleryPicture-16.jpeg",
      category: "Hikes",
      alt: "Smilers at a hike",
    },
    {
      src: "/images/GalleryPicture-17.jpeg",
      category: "Hikes",
      alt: "Smilers at a hike",
    },
    {
      src: "/images/GalleryPicture-18.jpeg",
      category: "Community Runs",
      alt: "Smilers",
    },
    {
      src: "/images/GalleryPicture-19.jpeg",
      category: "Community Runs",
      alt: "Smilers",
    },
    {
      src: "/images/GalleryPicture-20.jpg",
      category: "Community Runs",
      alt: "Smilers",
    },
    {
      src: "/images/GalleryPicture-21.jpeg",
      category: "Community Runs",
      alt: "Smilers",
    },
  ],
};
