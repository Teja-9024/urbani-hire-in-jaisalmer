import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, getBlogBySlug, getRelatedBlogs, getAllBlogSlugs } from "@/lib/blogData";
import { COMPANY_INFO, CONTACT_INFO } from "@/lib/constants";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Blog Post Not Found" };

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: COMPANY_INFO.name }],
    alternates: {
      canonical: `https://urbaniahireindia.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://urbaniahireindia.com/blog/${post.slug}`,
      siteName: COMPANY_INFO.name,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [COMPANY_INFO.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedBlogs(slug, 3);

  // Convert markdown-like content to HTML sections
  const contentHtml = post.content
    .replace(/### (.*)/g, '<h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">$1</h3>')
    .replace(/## (.*)/g, '<h2 class="text-2xl font-display font-bold text-gray-900 mt-10 mb-4">$1</h2>')
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/^- (.*)/gm, '<li class="ml-4 mb-1">$1</li>')
    .replace(/^(\d+)\. (.*)/gm, '<li class="ml-4 mb-1 list-decimal">$2</li>')
    .replace(
      /\| (.*?) \|/g,
      (match) => {
        const cells = match
          .split("|")
          .filter((c) => c.trim())
          .map((c) => `<td class="border border-gray-200 px-3 py-2 text-sm">${c.trim()}</td>`)
          .join("");
        return `<tr>${cells}</tr>`;
      }
    )
    .replace(/^> (.*)/gm, '<blockquote class="border-l-4 border-orange-500 pl-4 py-2 my-6 bg-orange-50 rounded-r-lg text-gray-700 font-medium">$1</blockquote>')
    .replace(/- ✅ (.*)/g, '<li class="ml-4 mb-1 flex items-start gap-2"><span class="text-green-600 mt-0.5">✅</span><span>$1</span></li>')
    .replace(/\n\n/g, "</p><p class='mb-4 text-gray-700 leading-relaxed'>");

  return (
    <>
      {/* Article Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: post.coverImage,
            datePublished: post.publishedAt,
            dateModified: post.publishedAt,
            author: {
              "@type": "Organization",
              name: COMPANY_INFO.name,
              url: "https://urbaniahireindia.com",
            },
            publisher: {
              "@type": "Organization",
              name: COMPANY_INFO.name,
              url: "https://urbaniahireindia.com",
              logo: {
                "@type": "ImageObject",
                url: "https://urbaniahireindia.com/images/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://urbaniahireindia.com/blog/${post.slug}`,
            },
            keywords: post.keywords.join(", "),
            articleSection: post.category,
          }),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://urbaniahireindia.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://urbaniahireindia.com/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: `https://urbaniahireindia.com/blog/${post.slug}`,
              },
            ],
          }),
        }}
      />

      <main className="min-h-screen bg-white">
        {/* Hero Banner */}
        <section className="relative h-80 sm:h-[28rem] md:h-[34rem] overflow-hidden bg-gray-900">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="container mx-auto">
              <nav className="flex items-center gap-2 text-sm text-white/80 mb-3">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span>/</span>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors"
                >
                  Blog
                </Link>
                <span>/</span>
                <span className="text-white truncate max-w-[200px]">
                  {post.title}
                </span>
              </nav>
              <span className="inline-block bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {post.category}
              </span>
              <h1 className="text-2xl md:text-4xl font-display font-bold text-white max-w-3xl">
                {post.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-10">
          <div className="max-w-3xl mx-auto">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-6 border-b">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-xs">UH</span>
                </div>
                <span className="font-medium text-gray-700">{post.author}</span>
              </div>
              <span>
                {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span>{post.readTime}</span>
            </div>

            {/* Content */}
            <article
              className="prose prose-lg prose-gray max-w-none
                prose-headings:font-display
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-gray-700 prose-p:leading-relaxed
                prose-li:text-gray-700
                prose-strong:text-gray-900
                prose-table:border-collapse
                prose-td:border prose-td:border-gray-200 prose-td:px-3 prose-td:py-2
                prose-th:border prose-th:border-gray-200 prose-th:px-3 prose-th:py-2 prose-th:bg-gray-50
                prose-blockquote:border-l-orange-500 prose-blockquote:bg-orange-50 prose-blockquote:rounded-r-lg"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {/* Tags */}
            <div className="mt-10 pt-6 border-t">
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Inline CTA */}
            <div className="mt-10 bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-8 text-white text-center">
              <h3 className="text-xl md:text-2xl font-display font-bold mb-3">
                Need a Quote? Get It in 2 Minutes
              </h3>
              <p className="opacity-90 mb-6 max-w-md mx-auto">
                Force Urbania 12, 15, 17 seater available across India. Best
                prices guaranteed — no middlemen.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="inline-flex items-center justify-center bg-white text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call {CONTACT_INFO.phoneDisplay}
                </Link>
                <Link
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi%2C%20I%20read%20your%20blog%20and%20need%20a%20quote`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  </svg>
                  WhatsApp Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-8 text-center">
                You May Also Like
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group block"
                  >
                    <article className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow h-full flex flex-col">
                      <div className="relative bg-gray-100">
                        <Image
                          src={related.coverImage}
                          alt={related.title}
                          width={800}
                          height={1000}
                          className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <span className="text-xs text-orange-600 font-medium mb-1">
                          {related.category}
                        </span>
                        <h3 className="text-base font-semibold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                          {related.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-2 line-clamp-2 flex-1">
                          {related.excerpt}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
