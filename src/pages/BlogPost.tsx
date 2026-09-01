import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSeo } from '../hooks/use-seo';
import JsonLd from '../components/JsonLd';
import { getBlogPost, blogPosts, ContentBlock } from '../data/blog-posts';
import { Calendar, Clock, ArrowLeft, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

/** Render inline links in paragraph text. Supports [label](/path) markdown-style links. */
function renderInlineLinks(text: string): React.ReactNode {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (match) {
      const [, label, href] = match;
      return (
        <Link key={i} to={href} className="text-cleaner-blue-700 underline hover:text-cleaner-blue-900">
          {label}
        </Link>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={index} className="text-gray-700 leading-relaxed mb-5">
          {renderInlineLinks(block.text)}
        </p>
      );
    case "heading":
      if (block.level === 2)
        return (
          <h2 key={index} className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            {block.text}
          </h2>
        );
      return (
        <h3 key={index} className="text-xl font-semibold text-gray-900 mt-8 mb-3">
          {block.text}
        </h3>
      );
    case "table":
      return (
        <div key={index} className="overflow-x-auto mb-6 rounded-lg border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-cleaner-blue-700 text-white">
                {block.headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 text-left font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 text-gray-700">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "callout":
      return (
        <div
          key={index}
          className="bg-cleaner-blue-50 border-l-4 border-cleaner-blue-700 rounded-r-lg p-6 my-8"
        >
          <p className="text-gray-800 font-medium leading-relaxed">{block.text}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild className="bg-cleaner-blue-700 hover:bg-cleaner-blue-800 text-white">
              <a href="/#contact">Schedule a Walkthrough</a>
            </Button>
            <Button asChild variant="outline" className="border-cleaner-blue-700 text-cleaner-blue-700 hover:bg-cleaner-blue-50">
              <a href="tel:+12155501414">
                <Phone className="mr-2 h-4 w-4" />
                (215) 550-1414
              </a>
            </Button>
          </div>
        </div>
      );
    case "list":
      if (block.ordered) {
        return (
          <ol key={index} className="list-decimal list-outside ml-6 mb-5 space-y-2">
            {block.items.map((item, i) => (
              <li key={i} className="text-gray-700 leading-relaxed pl-1">
                {renderInlineLinks(item)}
              </li>
            ))}
          </ol>
        );
      }
      return (
        <ul key={index} className="list-disc list-outside ml-6 mb-5 space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="text-gray-700 leading-relaxed pl-1">
              {renderInlineLinks(item)}
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  useSeo({
    title: post?.metaTitle ?? "Post Not Found | PHL Clean",
    description: post?.metaDescription ?? "Page not found",
    canonical: post ? `https://phlclean.com/blog/${post.slug}/` : undefined,
  });

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const dateObj = new Date(post.date + "T00:00:00");
  const formatted = dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Find prev/next posts
  const idx = blogPosts.findIndex((p) => p.slug === post.slug);
  const prev = idx > 0 ? blogPosts[idx - 1] : null;
  const next = idx < blogPosts.length - 1 ? blogPosts[idx + 1] : null;

  // JSON-LD
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "PHL Clean",
      url: "https://phlclean.com",
    },
    publisher: {
      "@type": "Organization",
      name: "PHL Clean",
      url: "https://phlclean.com",
    },
    mainEntityOfPage: `https://phlclean.com/blog/${post.slug}/`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://phlclean.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://phlclean.com/blog/" },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://phlclean.com/blog/${post.slug}/`,
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <JsonLd data={[articleSchema, breadcrumbSchema]} />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-custom py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-1.5">
            <Link to="/" className="hover:text-cleaner-blue-700">
              Home
            </Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-cleaner-blue-700">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-700 truncate max-w-[200px] sm:max-w-none">
              {post.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="py-12 flex-1">
        <div className="container-custom max-w-3xl">
          {/* Header */}
          <header className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-cleaner-blue-700 mb-2 block">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatted}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </header>

          {/* Body */}
          <div className="prose-custom">{post.body.map(renderBlock)}</div>

          {/* Related services */}
          {post.relatedLinks.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
                Related Services
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="inline-flex items-center gap-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-cleaner-blue-50 hover:text-cleaner-blue-700 transition-colors"
                  >
                    {link.label}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Prev / Next */}
          <div className="mt-10 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-4">
            {prev ? (
              <Link
                to={`/blog/${prev.slug}`}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-cleaner-blue-700 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="line-clamp-1">{prev.title}</span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                to={`/blog/${next.slug}`}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-cleaner-blue-700 transition-colors sm:text-right"
              >
                <span className="line-clamp-1">{next.title}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
