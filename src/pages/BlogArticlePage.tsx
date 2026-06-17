/**
 * BLOG ARTICLE PAGE
 */
import SEOHead from '../components/SEOHead';
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Footprints, Tag, MessageCircle } from "lucide-react";
import { BLOG_POSTS } from "../data/blogPosts";
import { SITE_CONFIG } from "../config/site";
import {
  Button,
  Card,
  Container,
  JoinCTA,
  Section,
  IconText,
} from "../components/ui";

export default function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category
  ).slice(0, 2);

  const relatedPosts =
    related.length > 0
      ? related
      : BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": "2026-06-01",
    "author": { "@type": "Organization", "name": "Miles With Smiles Social Running Club" },
    "publisher": {
      "@type": "Organization",
      "name": "Miles With Smiles",
      "logo": { "@type": "ImageObject", "url": "https://miles-with-smiles.vercel.app/images/MilesWithSmilesLogo.jpg" }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://miles-with-smiles.vercel.app/blog/${post.slug}` }
  };

  return (
    <>
      <SEOHead
        title={post.seoTitle}
        description={post.metaDescription}
        canonical={`/blog/${post.slug}`}
        ogImage={post.image}
        schema={articleSchema}
      />
      <section className="relative pb-0 pt-32" aria-label="Article header">
        <div className="relative h-64 overflow-hidden sm:h-80 lg:h-96">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover grayscale"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <Container className="relative z-10 -mt-20">
          <Card padding="lg">
            <Link
              to="/blog"
              className="mb-6 inline-flex items-center gap-2 text-xs text-white/40 transition-colors hover:text-white"
              aria-label="Back to Blog"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>

            <div className="mb-4 flex items-center gap-3">
              <span className="flex items-center gap-1 rounded-md border border-white/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/40">
                <Tag size={16} />
                {post.category}
              </span>
              <IconText icon={Clock} className="text-xs text-white/30">
                {post.readTime}
              </IconText>
              <span className="text-xs text-white/20">{post.date}</span>
            </div>

            <h1 className="text-h1 mb-4 text-3xl sm:text-4xl lg:text-5xl">{post.title}</h1>
            <p className="text-body leading-relaxed text-white/50">{post.excerpt}</p>
          </Card>
        </Container>
      </section>

      <Section spacing="compact" aria-label="Article content">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_280px]">
          <article
            className="prose-article"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <aside className="space-y-6">
            <Card variant="inverse" padding="lg" className="sticky top-4 text-center">
              <IconText icon={Footprints} className="mb-4 justify-center" />
              <h3 className="text-h3 mb-2 text-black">Run With Us</h3>
              <p className="text-body mb-6 text-xs leading-relaxed text-black/60">
                Join Miles With Smiles and put this into practice. We run every Wednesday and Saturday in Alexandra.
              </p>
              <Button
                href={SITE_CONFIG.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="mb-3 w-full"
                aria-label="Join the Club"
              >
                Join the Club
              </Button>
              <Button
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="w-full"
              >
                <MessageCircle size={16} />
                WhatsApp Community
              </Button>
            </Card>

            <Card padding="md">
              <h3 className="text-h3 mb-4 text-sm">Weekly Schedule</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Wednesday</span>
                  <span className="font-medium text-white">10km · 07:00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Saturday</span>
                  <span className="font-medium text-white">5km · 07:00</span>
                </div>
                <div className="border-t border-white/20 pt-3">
                  <p className="text-caption normal-case tracking-normal text-white/30">
                    Soothe (Old Megalo), Alexandra
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </div>
      </Section>

      {relatedPosts.length > 0 && (
        <Section
          variant="dark"
          spacing="compact"
          containerSize="narrow"
          aria-labelledby="related-heading"
        >
          <h2 id="related-heading" className="text-h2 mb-8 text-2xl">
            More from the Blog
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                to={`/blog/${related.slug}`}
                className="group block"
                aria-label={`Read: ${related.title}`}
              >
                <Card className="overflow-hidden p-0">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                      loading="lazy"
                      width="16"
                      height="9"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-caption mb-2 block normal-case tracking-wider text-white/30">
                      {related.category}
                    </span>
                    <h3 className="text-h3 mb-2 text-sm leading-snug">{related.title}</h3>
                    <span className="flex items-center gap-1 text-xs text-white/40">
                      Read article
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <JoinCTA
        title="Join Miles With Smiles"
        description="Ready to put what you have read into practice? Join our community in Alexandra and run with us this week."
        primaryLabel="Join the Club"
        headingId="article-join-heading"
      />
    </>
  );
}
