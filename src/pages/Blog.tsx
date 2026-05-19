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
    title: "Cleaning Tips & Insights for Facility Managers | PHL Clean Blog",
    description:
      "Practical advice on commercial carpet cleaning, floor maintenance, and facility care from PHL Clean — serving Philadelphia, Bucks County, and surrounding areas.",
    canonical: "https://phlclean.com/blog",
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://phlclean.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://phlclean.com/blog" },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-cleaner-blue-700 to-cleaner-blue-900 text-white py-16 md:py-20">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Cleaning Tips &amp; Insights
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Practical advice on keeping your commercial space clean, safe, and
            looking its best — from the team that does it every day.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <section className="py-16 bg-gray-50 flex-1">
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
                  className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
                >
                  {/* Color bar */}
                  <div className="h-2 bg-cleaner-blue-700 group-hover:bg-cleaner-green-500 transition-colors" />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Category */}
                    <span className="text-xs font-semibold uppercase tracking-wider text-cleaner-blue-700 mb-2">
                      {post.category}
                    </span>

                    {/* Title */}
                    <h2 className="text-lg font-bold text-gray-900 group-hover:text-cleaner-blue-700 transition-colors mb-3 line-clamp-3">
                      {post.title}
                    </h2>

                    {/* Excerpt — first paragraph, truncated */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                      {post.body.find((b) => b.type === "paragraph")?.text ?? ""}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-gray-400 mt-auto pt-3 border-t border-gray-100">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatted}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                      <span className="ml-auto flex items-center gap-1 text-cleaner-blue-700 font-medium group-hover:gap-2 transition-all">
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
