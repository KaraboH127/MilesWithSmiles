/**
 * =============================================
 * BLOG ARTICLE PAGE
 * =============================================
 * Renders individual blog articles dynamically
 * based on the URL slug parameter.
 *
 * Article content is stored in src/data/blogPosts.ts
 * Add new articles there to have them appear here.
 */

import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, Tag, ArrowRight, MessageCircle } from "lucide-react";
import { BLOG_POSTS } from "../data/blogPosts";
import { SITE_CONFIG } from "../config/site";

export default function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();

  // Find post by slug
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  // 404 redirect if post not found
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Related articles (same category, excluding current)
  const related = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category
  ).slice(0, 2);

  // If no same-category related, show other articles
  const relatedPosts =
    related.length > 0
      ? related
      : BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      {/* ─── ARTICLE HERO ───────────────────────────────────────── */}
      <section className="relative pt-32 pb-0" aria-label="Article header">
        {/* Hero image */}
        <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover grayscale"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Article metadata overlay */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 sm:p-10">
            {/* Breadcrumb */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/40 text-xs hover:text-white transition-colors mb-6"
              aria-label="Back to Blog"
            >
              <ArrowLeft size={12} />
              Back to Blog
            </Link>

            {/* Category + read time */}
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center gap-1 text-xs font-medium text-white/40 uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full">
                <Tag size={10} />
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-white/30 text-xs">
                <Clock size={10} />
                {post.readTime}
              </span>
              <span className="text-white/20 text-xs">{post.date}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-white/50 text-base leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* ─── ARTICLE CONTENT ────────────────────────────────────── */}
      <section className="py-16 lg:py-20" aria-label="Article content">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">

            {/* Main content */}
            <article
              className="prose-article"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Sidebar */}
            <aside className="space-y-6">

              {/* Join CTA card */}
              <div className="bg-white rounded-2xl p-6 text-center sticky top-24">
                <div className="text-3xl mb-3">🏃</div>
                <h3 className="text-black font-black text-lg mb-2">
                  Run With Us
                </h3>
                <p className="text-black/60 text-xs leading-relaxed mb-5">
                  Join Miles With Smiles and put this into practice. We run every Wednesday and Saturday in Alexandra.
                </p>
                <a
                  href={SITE_CONFIG.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-black text-white font-bold text-sm px-5 py-3 rounded-full hover:bg-black/80 transition-all mb-3"
                  aria-label="Join Miles With Smiles"
                >
                  Join the Club
                </a>
                <a
                  href={SITE_CONFIG.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-black/20 text-black text-xs font-medium px-5 py-2.5 rounded-full hover:bg-black/5 transition-all flex items-center justify-center gap-1.5"
                >
                  <MessageCircle size={13} />
                  WhatsApp Community
                </a>
              </div>

              {/* Schedule card */}
              <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-5">
                <h3 className="text-white font-bold text-sm mb-4">Weekly Schedule</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50">Wednesday</span>
                    <span className="text-white font-medium">10km · 07:00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50">Saturday</span>
                    <span className="text-white font-medium">5km · 07:00</span>
                  </div>
                  <div className="pt-3 border-t border-white/10">
                    <p className="text-white/30 text-xs">
                      Soothe (Old Megalo), Alexandra
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ─── RELATED ARTICLES ───────────────────────────────────── */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-white/10 py-16 lg:py-20" aria-labelledby="related-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="related-heading" className="text-2xl font-black text-white mb-8">
              More from the Blog
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  to={`/blog/${related.slug}`}
                  className="group block"
                  aria-label={`Read: ${related.title}`}
                >
                  <article className="bg-[#0f0f0f] border border-white/10 rounded-xl overflow-hidden hover:border-white/25 transition-all">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs text-white/30 uppercase tracking-wider mb-2 block">
                        {related.category}
                      </span>
                      <h3 className="text-white font-bold text-sm leading-snug mb-2">
                        {related.title}
                      </h3>
                      <span className="text-white/40 text-xs flex items-center gap-1">
                        Read article <ArrowRight size={10} />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── JOIN CTA ───────────────────────────────────────────── */}
      <section className="bg-white py-24" aria-labelledby="article-join-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="article-join-heading" className="text-4xl font-black text-black tracking-tight mb-6">
            Join Miles With Smiles
          </h2>
          <p className="text-black/60 text-base mb-8 max-w-xl mx-auto">
            Ready to put what you've read into practice? Join our community in Alexandra and run with us this week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SITE_CONFIG.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-black text-white font-bold px-8 py-4 rounded-full hover:bg-black/80 transition-all"
            >
              Register as a Member
              <ArrowRight size={18} />
            </a>
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-black text-black font-semibold px-8 py-4 rounded-full hover:bg-black/5 transition-all"
            >
              <MessageCircle size={18} />
              Join WhatsApp Community
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
