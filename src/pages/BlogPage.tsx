/**
 * =============================================
 * BLOG PAGE
 * =============================================
 * Static blog with SEO-optimised articles.
 * Articles are defined in src/data/blogPosts.ts
 *
 * Each card links to a dedicated article page.
 */

import { Link } from "react-router-dom";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { BLOG_POSTS } from "../data/blogPosts";
import { SITE_CONFIG } from "../config/site";
import { MessageCircle } from "lucide-react";

// Unique categories derived from posts
const CATEGORIES = ["All", ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))];

export default function BlogPage() {
  return (
    <>
      {/* ─── PAGE HERO ──────────────────────────────────────────── */}
      <section className="relative pt-40 pb-24" aria-label="Blog page hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-white/30 text-xs font-bold tracking-widest uppercase mb-4 block">
            Knowledge & Community
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight max-w-3xl">
            Running Insights & Community Stories
          </h1>
          <p className="mt-6 text-white/60 text-lg max-w-xl leading-relaxed">
            Guides, tips, and community perspectives from the Miles With Smiles running family in Alexandra, Johannesburg.
          </p>
        </div>
      </section>

      {/* ─── BLOG GRID ──────────────────────────────────────────── */}
      <section className="pb-24 lg:pb-32" aria-labelledby="blog-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="blog-heading" className="sr-only">Blog articles</h2>

          {/* Category chips */}
          <div className="flex flex-wrap gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/50"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Featured article — first post */}
          <div className="mb-12">
            <Link
              to={`/blog/${BLOG_POSTS[0].slug}`}
              className="group block"
              aria-label={`Read article: ${BLOG_POSTS[0].title}`}
            >
              <article className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden hover:border-white/25 transition-all duration-300">
                <div className="aspect-video lg:aspect-auto overflow-hidden">
                  <img
                    src={BLOG_POSTS[0].image}
                    alt={BLOG_POSTS[0].title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold text-white/40 uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full">
                      {BLOG_POSTS[0].category}
                    </span>
                    <span className="text-white/30 text-xs">Featured</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-4 group-hover:text-white/90 transition-colors">
                    {BLOG_POSTS[0].title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">
                    {BLOG_POSTS[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-white/30 text-xs">
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {BLOG_POSTS[0].readTime}
                      </span>
                      <span>{BLOG_POSTS[0].date}</span>
                    </div>
                    <span className="flex items-center gap-1 text-white text-sm font-semibold group-hover:gap-2 transition-all">
                      Read article
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>

          {/* Remaining articles grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(1).map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group block"
                aria-label={`Read article: ${post.title}`}
              >
                <article className="bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden hover:border-white/25 transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag size={11} className="text-white/30" />
                      <span className="text-xs font-medium text-white/40 uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-white tracking-tight leading-tight mb-3 group-hover:text-white/90 transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                      <span className="text-white/30 text-xs flex items-center gap-1">
                        <Clock size={10} />
                        {post.readTime}
                      </span>
                      <span className="text-white text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read <ArrowRight size={11} />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── JOIN CTA ───────────────────────────────────────────── */}
      <section className="bg-white py-24" aria-labelledby="blog-join-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="blog-join-heading" className="text-4xl sm:text-5xl font-black text-black tracking-tight mb-6">
            Ready to Stop Reading and Start Running?
          </h2>
          <p className="text-black/60 text-base sm:text-lg mb-10 max-w-xl mx-auto">
            Join Miles With Smiles and put everything you've read into practice — with a community that has your back every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SITE_CONFIG.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-black text-white font-bold px-8 py-4 rounded-full hover:bg-black/80 transition-all"
              aria-label="Join Miles With Smiles"
            >
              Join Miles With Smiles
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
