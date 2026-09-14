import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSeo } from '../hooks/use-seo';
import JsonLd from '../components/JsonLd';
import { blogPosts } from '../data/blog-posts';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  useSeo({
    title: "Field Notes — Commercial Floor Care Insights | PHL Clean",
    description: "Practical, technical writing on commercial carpet, tile and grout, and hard surface floor care from PHL Clean — serving Philadelphia, Bucks County and surrounding areas.",
    canonical: "https://phlclean.com/blog/",
  });

  const breadcrumbSchema = {"@context": "https://schema.org","@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://phlclean.com/" },
      { "@type": "ListItem", position: 2, name: "Field Notes", item: "https://phlclean.com/blog/" },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-phl-navy to-phl-ground text-white py-16 md:py-20">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Field Notes
          </h1>
          <p className="text-lg md:text-xl text-[#AFC4E0] max-w-2xl mx-auto">
            What we actually find under commercial floors, and what we do about it.
            Written by the people holding the wand.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <section className="py-16 bg-phl-ground flex-1">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => {
              const dateObj = new Date(post.date + "T00:00:00");
              const formatted = dateObj.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });

              return (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group bg-phl-surface rounded-xl  hover: transition-shadow overflow-hidden flex flex-col"
                >
                  {/* Color bar */}
                  <div className="h-2 bg-phl-blue group-hover:bg-phl-blue transition-colors" />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Category */}
                    <span className="text-xs font-semibold uppercase tracking-wider text-phl-blue mb-2">
                      {post.category}
                    </span>

                    {/* Title */}
                    <h2 className="text-lg font-bold text-gray-900 group-hover:text-phl-blue transition-colors mb-3 line-clamp-3">
                      {post.title}
                    </h2>

                    {/* Excerpt — first paragraph, truncated */}
                    <p className="text-phl-ink-2 text-sm mb-4 line-clamp-3 flex-1">
                      {post.body.find((b) => b.type === "paragraph")?.text ?? ""}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-phl-muted mt-auto pt-3 border-t border-phl-rule">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatted}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                      <span className="ml-auto flex items-center gap-1 text-phl-blue font-medium group-hover:gap-2 transition-all">
                        Read <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
