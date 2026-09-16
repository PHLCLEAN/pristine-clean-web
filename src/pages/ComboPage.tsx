import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuoteForm from '../components/QuoteForm';
import ContactInfo from '../components/ContactInfo';
import TechnicalFigure from '../components/TechnicalFigure';
import JsonLd from '../components/JsonLd';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Phone, Check } from 'lucide-react';
import { getService, services } from '../data/services';
import { getLocation, locations } from '../data/locations';
import { useSeo } from '../hooks/use-seo';

/**
 * Service x Location combo page — e.g. /services/tile-grout-cleaning/bensalem.
 *
 * Each page needs enough genuinely unique content that Google doesn't treat
 * the set as doorway pages. Uniqueness comes from: the H1 and meta, the
 * location's own intro (which describes the actual building stock there),
 * the neighborhood list, the location-specific FAQ, and whyLocal. The
 * service's method content is shared, which is fine — it is the same method.
 */
const ComboPage = () => {
  const { serviceSlug, locationSlug } = useParams<{ serviceSlug: string; locationSlug: string }>();

  const service = serviceSlug ? getService(serviceSlug) : undefined;
  const location = locationSlug ? getLocation(locationSlug) : undefined;
  const valid = !!service && !!location;

  const title = valid
    ? `${service!.shortTitle} in ${location!.shortName} | PHL Clean`
    : 'Service Not Found | PHL Clean';
  const description = valid
    ? `${service!.shortTitle} for commercial buildings in ${location!.longName}. ${service!.heroTagline} Free on-site walkthrough — (215) 550-1414.`
    : 'Page not found';
  const canonical = valid
    ? `https://phlclean.com/services/${service!.slug}/${location!.slug}/`
    : undefined;

  useSeo({ title, description, canonical });

  if (!valid) {
    return <Navigate to="/404" replace />;
  }

  const svc = service!;
  const loc = location!;
  const url = `https://phlclean.com/services/${svc.slug}/${loc.slug}/`;

  const cityFaq = {
    question: `Do you cover all of ${loc.shortName}?`,
    answer: `Yes — we run ${svc.shortTitle.toLowerCase()} across ${loc.shortName}${
      loc.neighborhoods && loc.neighborhoods.length
        ? ` including ${loc.neighborhoods.slice(0, 5).join(', ')}`
        : ''
    }. Your building gets a written scope and a site record — surfaces, methods, access notes — so whoever is scheduled works from it rather than rediscovering your floor.`,
  };
  const allFaqs = [cityFaq, ...svc.faqs];

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

  const otherServices = services.filter(s => s.slug !== svc.slug);
  const otherLocations = locations.filter(l => l.slug !== loc.slug).slice(0, 8);

  return (
    <div className="min-h-screen bg-phl-ground">
      <Navbar />
      <JsonLd data={[breadcrumbSchema, serviceSchema, faqSchema]} />
      <main>
        {/* Hero */}
        <section className="border-b border-phl-rule">
          <div className="container-custom py-10 md:py-16">
            <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.1em] text-phl-muted mb-6">
              <Link to="/" className="hover:text-phl-blue transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link to={`/services/${svc.slug}`} className="hover:text-phl-blue transition-colors">{svc.shortTitle}</Link>
              <span className="mx-2">/</span>
              <span className="text-phl-ink-2">{loc.shortName}</span>
            </nav>

            <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-10 xl:gap-14 items-center">
              <div>
                <h1 className="text-[clamp(1.9rem,4.2vw,2.9rem)] text-phl-ink">
                  {svc.shortTitle} in {loc.longName}
                </h1>
                <p className="mt-5 text-phl-ink-2 leading-relaxed max-w-[48ch]">{svc.heroTagline}</p>
                <div className="flex flex-wrap gap-3 mt-7">
                  <a href="#quote" className="btn-primary px-6 py-3 text-[15px]">Schedule a Walkthrough</a>
                  <a href="tel:+12155501414" className="btn-ghost px-6 py-3 text-[15px] gap-2">
                    <Phone className="h-[17px] w-[17px]" />
                    (215) 550-1414
                  </a>
                </div>
              </div>

              <TechnicalFigure kind={svc.figure} />
            </div>
          </div>
        </section>

        {/* Local context — the genuinely unique part of the page */}
        <section className="section-padding border-b border-phl-rule">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-12 lg:gap-16">
              <div>
                <div className="rack-head">{svc.shortTitle} in {loc.shortName}</div>
                <p className="text-phl-ink-2 leading-relaxed text-[15px]">{loc.intro}</p>
                <div className="mt-8 bg-phl-surface border-l-2 border-phl-blue rounded-sm p-5">
                  <p className="spec-label mb-2">Why local matters here</p>
                  <p className="text-[14px] text-phl-ink-2 leading-relaxed">{loc.whyLocal}</p>
                </div>
              </div>

              <div>
                <div className="rack-head">What&rsquo;s included</div>
                <ul className="space-y-2.5">
                  {svc.whatsIncluded.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-[16px] w-[16px] text-phl-blue shrink-0 mt-1" aria-hidden="true" />
                      <span className="text-[14px] text-phl-ink-2 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhoods */}
        {loc.neighborhoods && loc.neighborhoods.length > 0 && (
          <section className="section-padding border-b border-phl-rule">
            <div className="container-custom">
              <div className="rack-head">Covered around {loc.shortName}</div>
              <ul className="flex flex-wrap gap-2.5">
                {loc.neighborhoods.map(n => (
                  <li key={n} className="bg-phl-surface border border-phl-rule rounded-sm px-3.5 py-2 text-[13px] text-phl-ink-2">
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="section-padding border-b border-phl-rule">
          <div className="container-custom max-w-4xl">
            <div className="rack-head">Questions we actually get</div>
            <Accordion type="single" collapsible className="w-full">
              {allFaqs.map((faq, i) => (
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

        {/* Quote */}
        <section id="quote" className="section-padding border-b border-phl-rule">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <p className="spec-label mb-3">Get started</p>
                <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] text-phl-ink">
                  {svc.shortTitle} in {loc.shortName} — book a walkthrough
                </h2>
                <p className="mt-4 text-phl-ink-2 leading-relaxed max-w-[50ch]">
                  We won&rsquo;t price a floor we haven&rsquo;t stood on. Free, under an hour, and you
                  get an honest read on what will and won&rsquo;t come back.
                </p>
                <div className="mt-8 pt-8 border-t border-phl-rule">
                  <ContactInfo />
                </div>
              </div>
              <QuoteForm />
            </div>
          </div>
        </section>

        {/* Cross links */}
        <section className="section-padding">
          <div className="container-custom space-y-10">
            <div>
              <div className="rack-head">Other work in {loc.shortName}</div>
              <div className="flex flex-wrap gap-2.5">
                {otherServices.map(s => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}/${loc.slug}`}
                    className="bg-phl-surface border border-phl-rule hover:border-phl-blue hover:text-phl-blue rounded-sm px-4 py-2.5 text-[13.5px] text-phl-ink-2 transition-colors"
                  >
                    {s.shortTitle} in {loc.shortName}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="rack-head">{svc.shortTitle} elsewhere</div>
              <div className="flex flex-wrap gap-2.5">
                {otherLocations.map(l => (
                  <Link
                    key={l.slug}
                    to={`/services/${svc.slug}/${l.slug}`}
                    className="bg-phl-surface border border-phl-rule hover:border-phl-blue hover:text-phl-blue rounded-sm px-4 py-2.5 text-[13.5px] text-phl-ink-2 transition-colors"
                  >
                    {l.shortName}
                  </Link>
                ))}
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
