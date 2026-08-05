import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuoteForm from '../components/QuoteForm';
import ContactInfo from '../components/ContactInfo';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { getService, services } from '../data/services';
import { locations } from '../data/locations';
import { blogPosts } from '../data/blog-posts';
import { Calendar } from 'lucide-react';
import { useSeo } from '../hooks/use-seo';
import JsonLd from '../components/JsonLd';

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getService(slug) : undefined;

  // Always call hooks before any conditional returns
  useSeo({
    title: service?.metaTitle ?? "Service Not Found | PHL Clean",
    description: service?.metaDescription ?? "Page not found",
    canonical: service ? `https://phlclean.com/services/${service.slug}` : undefined,
  });

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  // --- Structured data (JSON-LD) ---
  const serviceUrl = `https://phlclean.com/services/${service.slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://phlclean.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://phlclean.com/#services" },
      { "@type": "ListItem", position: 3, name: service.shortTitle, item: serviceUrl },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.shortTitle,
    name: service.h1,
    description: service.metaDescription,
    url: serviceUrl,
    provider: { "@id": "https://phlclean.com/#business" },
    areaServed: [
      { "@type": "City", name: "Philadelphia" },
      { "@type": "AdministrativeArea", name: "Bucks County, PA" },
      { "@type": "AdministrativeArea", name: "Montgomery County, PA" },
      { "@type": "AdministrativeArea", name: "Delaware County, PA" },
      { "@type": "AdministrativeArea", name: "Chester County, PA" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `What's included — ${service.shortTitle}`,
      itemListElement: service.whatsIncluded.map((item, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: { "@type": "Service", name: item },
      })),
    },
  };

  const faqSchema = service.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map(f => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  } : null;

  const allSchemas = [breadcrumbSchema, serviceSchema, ...(faqSchema ? [faqSchema] : [])];

  const related = service.relatedSlugs
    .map(rs => services.find(s => s.slug === rs))
    .filter((s): s is NonNullable<typeof s> => s !== undefined);

  // Blog posts that link back to this exact service page — surfaced as "From the Blog"
  const relatedPosts = blogPosts
    .filter(p => p.relatedLinks.some(l => l.href === `/services/${service.slug}`))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <JsonLd data={allSchemas} />
      <main>
        {/* Hero */}
        <section className="relative bg-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="bg-cover bg-center h-full w-full opacity-15"
              style={{ backgroundImage: `url('${service.heroImage}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cleaner-blue-700/30 to-cleaner-green-500/20"></div>
          </div>

          <div className="container-custom relative z-10 py-16 md:py-24">
            <div className="max-w-3xl">
              {/* Breadcrumb */}
              <div className="text-sm text-gray-600 mb-4">
                <Link to="/" className="hover:text-cleaner-blue-700">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/#services" className="hover:text-cleaner-blue-700">Services</Link>
                <span className="mx-2">/</span>
                <span className="text-cleaner-blue-700">{service.shortTitle}</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-cleaner-blue-800 leading-tight mb-6">
                {service.h1}
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                {service.heroTagline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-cleaner-blue-700 hover:bg-cleaner-blue-800 text-white px-8 py-6 text-lg">
                  <a href="#quote">Schedule a Walkthrough</a>
                </Button>
                <Button asChild variant="outline" className="border-cleaner-blue-700 text-cleaner-blue-700 hover:bg-cleaner-blue-50 px-8 py-6 text-lg">
                  <a href="tel:+12155501414">
                    <Phone className="mr-2 h-5 w-5" />
                    (215) 550-1414
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-4">What's Included</h2>
                <div className="h-1 w-24 bg-cleaner-green-500 mx-auto mb-6"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {service.whatsIncluded.map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-cleaner-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our process */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-4">Our Process</h2>
              <div className="h-1 w-24 bg-cleaner-green-500 mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg">
                How a project moves from first call to ongoing service — no surprises.
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {service.process.map((step, i) => (
                <div key={i} className="flex items-start gap-6 bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-cleaner-blue-700 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cleaner-blue-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-4">Who We Serve</h2>
                <div className="h-1 w-24 bg-cleaner-green-500 mx-auto mb-6"></div>
                <p className="text-gray-600 text-lg">
                  Facilities and businesses that rely on {service.shortTitle.toLowerCase()} from PHL Clean.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.whoItsFor.map((item, i) => (
                  <div key={i} className="bg-cleaner-blue-50 border border-cleaner-blue-100 rounded-lg p-4 text-cleaner-blue-800 font-medium">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-4">Why Choose PHL Clean</h2>
              <div className="h-1 w-24 bg-cleaner-green-500 mx-auto mb-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {service.whyChoose.map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-cleaner-blue-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-4">Frequently Asked Questions</h2>
                <div className="h-1 w-24 bg-cleaner-green-500 mx-auto mb-6"></div>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {service.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left text-lg font-medium text-cleaner-blue-800">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Quote form */}
        <section id="quote" className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-6">
                  Schedule a Walkthrough for {service.shortTitle}
                </h2>
                <div className="h-1 w-16 bg-cleaner-green-500 mb-8"></div>
                <p className="text-gray-700 mb-8">
                  Tell us about your facility and we'll get back to you within 24 hours with a custom quote. Or call us directly — most quotes start with a quick conversation.
                </p>
                <ContactInfo />
              </div>
              <QuoteForm />
            </div>
          </div>
        </section>

        {/* Related services */}
        {related.length > 0 && (
          <section className="section-padding bg-white">
            <div className="container-custom">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-4">Related Services</h2>
                <div className="h-1 w-24 bg-cleaner-green-500 mx-auto mb-6"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {related.map(r => (
                  <Link
                    key={r.slug}
                    to={`/services/${r.slug}`}
                    className="block bg-cleaner-blue-50 border border-cleaner-blue-100 hover:border-cleaner-blue-700 rounded-lg p-6 transition-colors group"
                  >
                    <h3 className="text-xl font-bold text-cleaner-blue-800 mb-2">{r.shortTitle}</h3>
                    <p className="text-gray-600 text-sm mb-3">{r.heroTagline.slice(0, 100)}...</p>
                    <span className="text-cleaner-blue-700 font-medium inline-flex items-center group-hover:underline">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
        {/* From the blog — internal links to relevant articles */}
        {relatedPosts.length > 0 && (
          <section className="section-padding bg-gray-50 border-t border-gray-100">
            <div className="container-custom">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-4">From the Blog</h2>
                <div className="h-1 w-24 bg-cleaner-green-500 mx-auto mb-6"></div>
                <p className="text-gray-600">More on {service.shortTitle.toLowerCase()} from our team.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {relatedPosts.map(post => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="block bg-white border border-gray-200 hover:border-cleaner-blue-700 rounded-lg p-6 transition-colors group"
                  >
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-cleaner-blue-800 mb-2 leading-snug">{post.title}</h3>
                    <span className="text-cleaner-blue-700 font-medium text-sm inline-flex items-center group-hover:underline">
                      Read article <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Location coverage — links to service x location combo pages */}
        <section className="section-padding bg-gray-50 border-t border-gray-100">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-cleaner-blue-800 mb-3">
                {service.shortTitle} across our coverage area
              </h2>
              <div className="h-1 w-16 bg-cleaner-green-500 mx-auto mb-4" />
              <p className="text-gray-600">
                Same service, programs adapted to each area we cover.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {locations.map(l => (
                <Link
                  key={l.slug}
                  to={`/services/${service.slug}/${l.slug}`}
                  className="bg-white border border-gray-200 hover:border-cleaner-blue-700 rounded-lg p-4 text-center transition-colors"
                >
                  <span className="text-cleaner-blue-700 font-medium">
                    {service.shortTitle} in {l.shortName}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
