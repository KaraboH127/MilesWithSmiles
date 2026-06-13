/**
 * =============================================
 * MAIN LAYOUT WRAPPER
 * =============================================
 * Wraps every page with:
 * - Navigation
 * - Main content area
 * - Footer
 * - Floating WhatsApp button
 */

import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import FloatingWhatsApp from "../ui/FloatingWhatsApp";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Global navigation */}
      <Navigation />

      {/* Page content */}
      <main id="main-content">
        {children}
      </main>

      {/* Global footer */}
      <Footer />

      {/* Floating WhatsApp button — visible on all pages */}
      <FloatingWhatsApp />
    </div>
  );
}
