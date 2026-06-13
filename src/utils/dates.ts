/**
 * =============================================
 * DYNAMIC RUN DATE GENERATOR
 * =============================================
 * Generates upcoming run dates automatically
 * based on the current date.
 *
 * Recurring schedule starts:
 *   Wednesday: June 17, 2026
 *   Saturday:  June 20, 2026
 *
 * These functions will NEVER return past dates
 * and will always show the next N upcoming dates.
 */

/**
 * Returns the next N upcoming dates for a given day of the week,
 * starting from a reference start date.
 *
 * @param startDate  - The first occurrence of the recurring run
 * @param dayOfWeek  - 0 (Sun) to 6 (Sat)
 * @param count      - Number of upcoming dates to return (default: 4)
 */
export function getUpcomingDates(
  startDate: Date,
  dayOfWeek: number,
  count: number = 4
): Date[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // normalize to start of day

  const dates: Date[] = [];

  // Start from the later of startDate or today
  let current = new Date(startDate);
  current.setHours(0, 0, 0, 0);

  // Advance if current is before today
  if (current < today) {
    // Calculate how many weeks to jump forward
    const diffDays = Math.floor(
      (today.getTime() - current.getTime()) / (1000 * 60 * 60 * 24)
    );
    const weeksAhead = Math.ceil(diffDays / 7);
    current.setDate(current.getDate() + weeksAhead * 7);
  }

  // Ensure day of week matches (in case of timezone edge cases)
  while (current.getDay() !== dayOfWeek) {
    current.setDate(current.getDate() + 1);
  }

  // Collect next N dates
  while (dates.length < count) {
    // Only include today or future dates
    if (current >= today) {
      dates.push(new Date(current));
    }
    current.setDate(current.getDate() + 7);
  }

  return dates;
}

/**
 * Formats a date in a friendly readable format.
 * Example: "Wed, 17 Jun 2026"
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-ZA", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/**
 * Formats a date in a compact format.
 * Example: "17 Jun"
 */
export function formatDateShort(date: Date): string {
  return date.toLocaleDateString("en-ZA", {
    day: "numeric",
    month: "short",
  });
}

/**
 * Formats a date in a long format.
 * Example: "Wednesday, 17 June 2026"
 */
export function formatDateLong(date: Date): string {
  return date.toLocaleDateString("en-ZA", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Returns true if a date is today
 */
export function isToday(date: Date): boolean {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

/**
 * Returns true if a date is this week (within 7 days)
 */
export function isThisWeek(date: Date): boolean {
  const today = new Date();
  const diffMs = date.getTime() - today.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  return diffDays >= 0 && diffDays <= 7;
}
