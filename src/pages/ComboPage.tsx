import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuoteForm from '../components/QuoteForm';
import ContactInfo from '../components/ContactInfo';
import JsonLd from '../components/JsonLd';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Phone, CheckCircle2 } from 'lucide-react';
import { getService, services } from '../data/services';
import { getLocation, locations } from '../data/locations';
import { useSeo } from '../hooks/use-seo';

/**
 * Service x Location combo page — e.g. /services/commercial-cleaning/bensalem.
 *
 * Strategy: each page must have enough unique-per-page content that Google
 * doesn't flag the set of 30 as doorway/thin pages. We get uniqueness from:
 *  - H1, meta title, meta description (auto-interpolated)
 *  - A location-specific intro paragraph using neighborhoods + industries
 *  - The neighborhoods list and industries-served list (genuinely different per city)
 *  - One city-specific FAQ prepended to the standard service FAQs
 *  - The location.whyLocal blurb (already city-specific)
 *
 * Everything else (what's included, process, why-choose) is shared service
 * content — reusing it is fine because the rest of the page is unique.
 */
const ComboPage = () => {
  const { serviceSlug, locationSlug } = useParams<{
    serviceSlug: string;
    locationSlug: string;
  }>();

  const service = serviceSlug ? getService(serviceSlug) : undefined;
  const location = locationSlug ? getLocation(locationSlug) : undefined;

  const valid = !!service && !!location;

  // Hooks must run unconditionally; compute SEO inputs with safe fallbacks.
  const title = valid
    ? `${service!.shortTitle} in ${location!.shortName} | PHL Clean`
    : 'Service Not Found | PHL Clean';
  const description = valid
    ? `Professional ${service!.shortTitle.toLowerCase()} for businesses in ${location!.longName}. ${service!.heroTagline} Locally owned. Book a free walkthrough — (215) 550-1414.`
    : 'Page not found';
  const canonical = valid
    ? `https://phlclean.com/services/${service!.slug}/${location!.slug}/`
    : undefined;

  useSeo({ title, description, canonical });

  if (!valid) {
    return <Navigate to="/404" replace />;
  }

  // From here on TypeScript can rely on service + location being defined.
  const svc = service!;
  const loc = location!;
  const url = `https://phlclean.com/services/${svc.slug}/${loc.slug}/`;

  // Location-specific intro — mixes service + neighborhoods + industries.
  const neighborhoodList = loc.neighborhoods?.slice(0, 4).join(', ');
  const industryList = loc.industries.slice(0, 3).join(', ').toLowerCase();

  // City-specific FAQ prepended to standard service FAQs.
  const cityFaq = {
    question: `Do you cover all of ${loc.shortName}?`,
    answer: `Yes — we run ${svc.shortTitle.toLowerCase()} programs across ${loc.shortName}${
      loc.neighborhoods && loc.neighborhoods.length
        ? ` including ${loc.neighborhoods.slice(0, 5).join(', ')}`
        : ''
    }. We assign the same crew to your account so the team that services your facility learns your space and your standards.`,
  };
  const allFaqs = [cityFaq, ...svc.faqs];

  // --- Structured data ---
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://phlclean.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://phlclean.com/#services" },
      { "@type": "ListItem", position: 3, name: svc.shortTitle, item: `https://phlclean.com/services/${svc.slug}/` },
      { "@type": "ListItem", position: 4, name: loc.shortName, item: url },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: svc.shortTitle,
    name: `${svc.shortTitle} in ${loc.longName}`,
    description,
    url,
    provider: { "@id": "https://phlclean.com/#business" },
    areaServed: { "@type": "AdministrativeArea", name: loc.longName },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map(f => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const allSchemas = [breadcrumbSchema, serviceSchema, faqSchema];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <JsonLd data={allSchemas} />
      <main>
        {/* Hero */}
        <section className="relative bg-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={svc.heroImage}
              alt={`${svc.title} in ${loc.name}`}
              className="h-full w-full object-cover object-center opacity-15"
              loading="eager"
              width={1600}
              height={900}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cleaner-blue-700/30 to-cleaner-green-500/20" />
          </div>

          <div className="container-custom relative z-10 py-14 md:py-20">
            <div className="max-w-3xl">
              <div className="text-sm text-gray-600 mb-4">
                <Link to="/" className="hover:text-cleaner-blue-700">Home</Link>
                <span className="mx-2">/</span>
                <Link to={`/services/${svc.slug}`} className="hover:text-cleaner-blue-700">{svc.shortTitle}</Link>
                <span className="mx-2">/</span>
                <span className="text-cleaner-blue-700">{loc.shortName}</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-cleaner-blue-800 leading-tight mb-6">
                {svc.shortTitle} in {loc.longName}
              </h1>

              <p className="text-lg md:text-xl text-gray-700 mb-6">
                When {loc.shortName} businesses need reliable {svc.shortTitle.toLowerCase()}, they call PHL Clean.
                {neighborhoodList && (
                  <> We service {neighborhoodList}, and have run {svc.shortTitle.toLowerCase()} programs for {industryList} across the area.</>
                )}
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-8">
                {loc.whyLocal}
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
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-4">
                What's Included
              </h2>
              <div className="h-1 w-24 bg-cleaner-green-500 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {svc.whatsIncluded.map((item, i) => (
                <div key={i} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-cleaner-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location-specific service area */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-cleaner-blue-800 mb-4">
                  Serving {loc.shortName} & the surrounding area
                </h2>
                <div className="h-1 w-16 bg-cleaner-green-500 mb-6" />
                {loc.neighborhoods && loc.neighborhoods.length > 0 && (
                  <>
                    <p className="text-gray-700 mb-4">
                      Crews regularly service {svc.shortTitle.toLowerCase()} accounts in:
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {loc.neighborhoods.map((n) => (
                        <span key={n} className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-700">
                          {n}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-cleaner-blue-800 mb-4">
                  Common in {loc.shortName}
                </h2>
                <div className="h-1 w-16 bg-cleaner-green-500 mb-6" />
                <p className="text-gray-700 mb-4">
                  Typical {svc.shortTitle.toLowerCase()} accounts in {loc.shortName} include:
                </p>
                <ul className="space-y-2">
                  {loc.industries.map((ind) => (
                    <li key={ind} className="flex items-start text-gray-700">
                      <CheckCircle2 className="h-5 w-5 text-cleaner-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{ind}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our process */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-4">
                How we run a {svc.shortTitle.toLowerCase()} program in {loc.shortName}
              </h2>
              <div className="h-1 w-24 bg-cleaner-green-500 mx-auto" />
            </div>
            <div className="space-y-6">
              {svc.process.map((step, i) => (
                <div key={i} className="flex items-start">
                  <div className="bg-cleaner-blue-700 text-white rounded-full h-9 w-9 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cleaner-blue-800 mb-1">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-4">
                Why {loc.shortName} businesses choose PHL Clean
              </h2>
              <div className="h-1 w-24 bg-cleaner-green-500 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {svc.whyChoose.map((wc, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-cleaner-blue-800 mb-2">{wc.title}</h3>
                  <p className="text-gray-700">{wc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-3xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-4">
                {svc.shortTitle} FAQ — {loc.shortName}
              </h2>
              <div className="h-1 w-24 bg-cleaner-green-500 mx-auto" />
            </div>
            <Accordion type="single" collapsible className="bg-white">
              {allFaqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-cleaner-blue-800 hover:bg-gray-50 px-2">
                    {f.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 px-2">
                    {f.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA / Quote form */}
        <section id="quote" className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-4">
                  Schedule a Walkthrough — {loc.shortName}
                </h2>
                <div className="h-1 w-16 bg-cleaner-green-500 mb-6" />
                <p className="text-gray-700 mb-6">
                  Tell us a little about your space and we'll book a free on-site walkthrough — that's how we put together a {svc.shortTitle.toLowerCase()} program that actually fits your building, hours, and budget.
                </p>
                <ContactInfo />
              </div>
              <QuoteForm />
            </div>
          </div>
        </section>

        {/* Cross-link to other services in same city + other locations for same service */}
        <section className="section-padding bg-white border-t border-gray-100">
          <div className="container-custom max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-bold text-cleaner-blue-800 mb-4">
                  Other services we offer in {loc.shortName}
                </h3>
                <ul className="space-y-2">
                  {services
                    .filter(s => s.slug !== svc.slug)
                    .map(s => (
                      <li key={s.slug}>
                        <Link
                          to={`/services/${s.slug}/${loc.slug}`}
                          className="text-cleaner-blue-700 hover:text-cleaner-blue-800 underline"
                        >
                          {s.shortTitle} in {loc.shortName}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-cleaner-blue-800 mb-4">
                  {svc.shortTitle} in nearby areas
                </h3>
                <ul className="space-y-2">
                  {locations
                    .filter(l => l.slug !== loc.slug)
                    .map(l => (
                      <li key={l.slug}>
                        <Link
                          to={`/services/${svc.slug}/${l.slug}`}
                          className="text-cleaner-blue-700 hover:text-cleaner-blue-800 underline"
                        >
                          {svc.shortTitle} in {l.shortName}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ComboPage;
