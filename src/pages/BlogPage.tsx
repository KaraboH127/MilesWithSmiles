/**
 * BLOG PAGE
 */

import { Link } from "react-router-dom";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { BLOG_POSTS } from "../data/blogPosts";
import { Card, Hero, IconText, JoinCTA, Section } from "../components/ui";

const CATEGORIES = ["All", ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))];

export default function BlogPage() {
  return (
    <>
      <Hero
        eyebrow="Knowledge and Community"
        title="Running Insights and Community Stories"
        description="Guides, tips, and community perspectives from the Miles With Smiles running family in Alexandra, Johannesburg."
      />

      <Section spacing="compact" aria-labelledby="blog-heading">
        <h2 id="blog-heading" className="sr-only">
          Blog articles
        </h2>

        <div className="mb-12 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <span
              key={cat}
              className="rounded-md border border-white/20 px-4 py-2 text-xs font-medium text-white/50"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="mb-12">
          <Link
            to={`/blog/${BLOG_POSTS[0].slug}`}
            className="group block"
            aria-label={`Read article: ${BLOG_POSTS[0].title}`}
          >
            <Card padding="lg" className="overflow-hidden p-0">
              <article className="grid grid-cols-1 gap-0 lg:grid-cols-2">
                <div className="aspect-video overflow-hidden lg:aspect-auto">
                  <img
                    src={BLOG_POSTS[0].image}
                    alt={BLOG_POSTS[0].title}
                    className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 lg:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-md border border-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white/40">
                      {BLOG_POSTS[0].category}
                    </span>
                    <span className="text-xs text-white/30">Featured</span>
                  </div>
                  <h3 className="text-h2 mb-4 text-2xl leading-tight sm:text-3xl">
                    {BLOG_POSTS[0].title}
                  </h3>
                  <p className="text-body mb-6 text-sm leading-relaxed text-white/50">
                    {BLOG_POSTS[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-white/30">
                      <IconText icon={Clock}>{BLOG_POSTS[0].readTime}</IconText>
                      <span>{BLOG_POSTS[0].date}</span>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-semibold text-white">
                      Read article
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </article>
            </Card>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.slice(1).map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block h-full"
              aria-label={`Read article: ${post.title}`}
            >
              <Card className="flex h-full flex-col overflow-hidden p-0">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <IconText icon={Tag} className="mb-3 text-xs uppercase tracking-wider text-white/40">
                    {post.category}
                  </IconText>
                  <h3 className="text-h3 mb-3 flex-1 leading-tight">{post.title}</h3>
                  <p className="text-body mb-6 line-clamp-3 text-sm leading-relaxed text-white/40">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between border-t border-white/20 pt-4">
                    <IconText icon={Clock} className="text-xs text-white/30">
                      {post.readTime}
                    </IconText>
                    <span className="flex items-center gap-1 text-xs font-semibold text-white">
                      Read
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <JoinCTA
        title="Ready to Stop Reading and Start Running?"
        description="Join Miles With Smiles and put everything you have read into practice — with a community that has your back every step of the way."
        headingId="blog-join-heading"
      />
    </>
  );
}
