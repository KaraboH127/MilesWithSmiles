/**
 * 404 NOT FOUND PAGE
 */

import { ArrowRight, Home } from "lucide-react";
import { Button, Container } from "../components/ui";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-16 text-center">
      <Container size="narrow">
        <p className="mb-4 text-[8rem] font-black leading-none text-white/20">404</p>
        <h1 className="text-h2 mb-4 text-3xl">Page Not Found</h1>
        <p className="text-body mb-8 max-w-sm text-white/50">
          This route went off-course. Let us get you back on track.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/" variant="secondary" size="sm">
            <Home size={16} />
            Back to Home
          </Button>
          <Button to="/schedule" variant="primary" size="sm">
            View Schedule
            <ArrowRight size={16} />
          </Button>
        </div>
      </Container>
    </div>
  );
}
