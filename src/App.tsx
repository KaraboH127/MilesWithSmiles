/**
 * =============================================
 * MILES WITH SMILES — APP ROOT
 * =============================================
 * Main application entry point.
 * Defines client-side routing and wraps all
 * pages in the Layout component.
 *
 * Routes:
 * /           → Home
 * /about      → About
 * /schedule   → Schedule
 * /gallery    → Gallery
 * /blog       → Blog listing
 * /blog/:slug → Individual blog article
 * /contact    → Contact
 * /thank-you  → Registration confirmation
 * *           → 404
 */

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/layout/Layout";

// ─── PAGES ───────────────────────────────────────────────────────────────────
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SchedulePage from "./pages/SchedulePage";
import GalleryPage from "./pages/GalleryPage";
import BlogPage from "./pages/BlogPage";
import BlogArticlePage from "./pages/BlogArticlePage";
import ContactPage from "./pages/ContactPage";
import ThankYouPage from "./pages/ThankYouPage";
import NotFoundPage from "./pages/NotFoundPage";

// ─── SCROLL TO TOP ON ROUTE CHANGE ───────────────────────────────────────────
/**
 * Scrolls to the top of the page whenever the route changes.
 * This ensures consistent UX when navigating between pages.
 */
function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);
  return null;
}

// ─── APP COMPONENT ───────────────────────────────────────────────────────────
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutPage />
            </Layout>
          }
        />
        <Route
          path="/schedule"
          element={
            <Layout>
              <SchedulePage />
            </Layout>
          }
        />
        <Route
          path="/gallery"
          element={
            <Layout>
              <GalleryPage />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <BlogPage />
            </Layout>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <Layout>
              <BlogArticlePage />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <ContactPage />
            </Layout>
          }
        />
        <Route
          path="/thank-you"
          element={
            <Layout>
              <ThankYouPage />
            </Layout>
          }
        />
        {/* 404 fallback */}
        <Route
          path="*"
          element={
            <Layout>
              <NotFoundPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
