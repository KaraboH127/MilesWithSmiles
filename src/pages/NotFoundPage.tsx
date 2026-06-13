/**
 * =============================================
 * 404 NOT FOUND PAGE
 * =============================================
 */

import { Link } from "react-router-dom";
import { ArrowRight, Home } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-white/20 font-black text-[8rem] leading-none mb-4">404</p>
      <h1 className="text-3xl font-black text-white mb-4">Page Not Found</h1>
      <p className="text-white/50 text-base mb-8 max-w-sm">
        Looks like this route went off-course. Let's get you back on track.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-white/90 transition-all text-sm"
        >
          <Home size={15} />
          Back to Home
        </Link>
        <Link
          to="/schedule"
          className="inline-flex items-center gap-2 border border-white/20 text-white text-sm px-6 py-3 rounded-full hover:bg-white/5 transition-all"
        >
          View Schedule
          <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}
