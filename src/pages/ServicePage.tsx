import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuoteForm from '../components/QuoteForm';
import ContactInfo from '../components/ContactInfo';
import TechnicalFigure from '../components/TechnicalFigure';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Phone, Check, ArrowRight, Clock } from 'lucide-react';
import { getService, services } from '../data/services';
import { locations } from '../data/locations';
import { blogPosts } from '../data/blog-posts';
import { useSeo } from '../hooks/use-seo';
import JsonLd from '../components/JsonLd';
import JobPhotos from '../components/JobPhotos';

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getService(slug) : undefined;

  useSeo({
    title: service?.metaTitle ?? "Service Not Found | PHL Clean",
    description: service?.metaDescription ?? "Page not found",
    canonical: service ? `https://phlclean.com/services/${service.slug}/` : undefined,
  });

  if (!service) {
    return <Navigate to="/404" replace />;
  }

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

  const relatedPosts = blogPosts
    .filter(p => p.relatedLinks.some(l => l.href === `/services/${service.slug}`))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-phl-ground">
      <Navbar />
      <JsonLd data={allSchemas} />
      <main>
        <section className="border-b border-phl-rule">
          <div className="container-custom py-10 md:py-16">
            <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.1em] text-phl-muted mb-6">
              <Link to="/" className="hover:text-phl-blue transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/#services" className="hover:text-phl-blue transition-colors">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-phl-ink-2">{service.shortTitle}</span>
            </nav>
            <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-10 xl:gap-14 items-center">
              <div>
                <h1 className="text-[clamp(1.9rem,4.4vw,3rem)] text-phl-ink">{service.h1}</h1>
                <p className="mt-5 max-w-[48ch] text-phl-ink-2 leading-relaxed">{service.heroTagline}</p>
                <div className="flex flex-wrap gap-3 mt-7">
                  <a href="#quote" className="btn-primary px-6 py-3 text-[15px]">Schedule a Walkthrough</a>
                  <a href="tel:+12155501414" className="btn-ghost px-6 py-3 text-[15px] gap-2">
                    <Phone className="h-[17px] w-[17px]" />
                    (215) 550-1414
                  </a>
                </div>
              </div>
              <TechnicalFigure kind={service.figure} />
            </div>
          </div>
        </section>

        <section className="section-padding border-b border-phl-rule">
          <div className="container-custom">
            <div className="rack-head">What&rsquo;s included</div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3.5">
              {service.whatsIncluded.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-[17px] w-[17px] text-phl-blue shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-[14.5px] text-phl-ink-2 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-padding border-b border-phl-rule">
          <div className="container-custom">
            <div className="rack-head">How the job runs</div>
            <ol className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-8">
              {service.process.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-mono text-[12px] text-phl-blue pt-1 shrink-0 tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="border-l border-phl-rule pl-4">
                    <h3 className="text-[18px] text-phl-ink mb-2">{step.title}</h3>
                    <p className="text-[13.5px] text-phl-ink-2 leading-relaxed">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <JobPhotos slug={service.slug} />

        <section className="section-padding border-b border-phl-rule">
          <div className="container-custom">
            <div className="rack-head">Who it&rsquo;s for</div>
            <ul className="flex flex-wrap gap-2.5">
              {service.whoItsFor.map((item, i) => (
                <li key={i} className="bg-phl-surface border border-phl-rule rounded-sm px-4 py-2.5 text-[13.5px] text-phl-ink-2">{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-padding bg-phl-navy border-b border-phl-rule">
          <div className="container-custom">
            <div className="flex items-baseline gap-4 mb-5 font-mono text-[11px] tracking-[0.14em] uppercase text-phl-blue-soft">
              Why us
              <span className="flex-1 h-px bg-white/20" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              {service.whyChoose.map((item, i) => (
                <div key={i} className="border-t border-white/20 pt-4">
                  <h3 className="text-[18px] text-white mb-2.5">{item.title}</h3>
                  <p className="text-[13.5px] text-[#AFC4E0] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding border-b border-phl-rule">
          <div className="container-custom max-w-4xl">
            <div className="rack-head">Questions we actually get</div>
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-phl-rule">
                  <AccordionTrigger className="text-left text-[16px] font-medium text-phl-ink hover:text-phl-blue hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[14px] text-phl-ink-2 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="quote" className="section-padding border-b border-phl-rule">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <p className="spec-label mb-3">Get started</p>
                <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] text-phl-ink">
                  Schedule a walkthrough for {service.shortTitle.toLowerCase()}
                </h2>
                <p className="mt-4 text-phl-ink-2 leading-relaxed max-w-[50ch]">
                  We won&rsquo;t price a floor we haven&rsquo;t stood on. The walkthrough is free, takes
                  under an hour, and you get an honest read on what will and won&rsquo;t come back
                  whether or not you hire us.
                </p>
                <div className="mt-8 pt-8 border-t border-phl-rule">
                  <ContactInfo />
                </div>
              </div>
              <QuoteForm />
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="section-padding border-b border-phl-rule">
            <div className="container-custom">
              <div className="rack-head">Related work</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-phl-rule border border-phl-rule rounded-sm overflow-hidden">
                {related.map(r => (
                  <Link key={r.slug} to={`/services/${r.slug}`} className="group bg-phl-surface hover:bg-phl-raised transition-colors p-5 pb-6">
                    <h3 className="text-[19px] text-phl-ink group-hover:text-phl-blue transition-colors mb-2">{r.shortTitle}</h3>
                    <p className="text-[13px] text-phl-ink-2 leading-snug mb-3">{r.heroTagline}</p>
                    <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-phl-blue inline-flex items-center gap-1.5">Read more <ArrowRight className="h-3.5 w-3.5" /></span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {relatedPosts.length > 0 && (
          <section className="section-padding border-b border-phl-rule">
            <div className="container-custom">
              <div className="rack-head">Field notes</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-phl-rule border border-phl-rule rounded-sm overflow-hidden">
                {relatedPosts.map(post => (
                  <Link key={post.slug} to={`/blog/${post.slug}`} className="group bg-phl-surface hover:bg-phl-raised transition-colors p-5 pb-6">
                    <div className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.08em] text-phl-muted mb-3">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-[17px] text-phl-ink group-hover:text-phl-blue transition-colors leading-snug">{post.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="section-padding">
          <div className="container-custom">
            <div className="rack-head">{service.shortTitle} across our coverage area</div>
            <div className="flex flex-wrap gap-2.5">
              {locations.map(l => (
                <Link key={l.slug} to={`/services/${service.slug}/${l.slug}`} className="bg-phl-surface border border-phl-rule hover:border-phl-blue hover:text-phl-blue rounded-sm px-4 py-2.5 text-[13.5px] text-phl-ink-2 transition-colors">
                  {service.shortTitle} in {l.shortName}
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
