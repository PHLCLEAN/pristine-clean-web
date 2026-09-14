import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuoteForm from '../components/QuoteForm';
import ContactInfo from '../components/ContactInfo';
import { Phone, MapPin, Check, ArrowRight } from 'lucide-react';
import { getLocation, locations } from '../data/locations';
import { services } from '../data/services';
import { useSeo } from '../hooks/use-seo';
import JsonLd from '../components/JsonLd';

const LocationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = slug ? getLocation(slug) : undefined;

  useSeo({
    title: location?.metaTitle ?? "Location Not Found | PHL Clean",
    description: location?.metaDescription ?? "Page not found",
    canonical: location ? `https://phlclean.com/locations/${location.slug}/` : undefined,
  });

  if (!location) {
    return <Navigate to="/404" replace />;
  }

  const locationUrl = `https://phlclean.com/locations/${location.slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://phlclean.com/" },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://phlclean.com/#industries" },
      { "@type": "ListItem", position: 3, name: location.shortName, item: locationUrl },
    ],
  };

  const otherLocations = locations.filter(l => l.slug !== location.slug);

  return (
    <div className="min-h-screen bg-phl-ground">
      <Navbar />
      <JsonLd data={breadcrumbSchema} />
      <main>
        {/* Hero */}
        <section className="border-b border-phl-rule">
          <div className="container-custom py-10 md:py-16">
            <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.1em] text-phl-muted mb-6">
              <Link to="/" className="hover:text-phl-blue transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-phl-ink-2">{location.shortName}</span>
            </nav>

            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.13em] text-phl-blue mb-4">
              <MapPin className="h-3.5 w-3.5" />
              Serving {location.longName}
            </div>

            <h1 className="text-[clamp(1.9rem,4.4vw,3rem)] text-phl-ink max-w-[20ch]">{location.h1}</h1>
            <p className="mt-5 max-w-[56ch] text-phl-ink-2 leading-relaxed">{location.heroTagline}</p>

            <div className="flex flex-wrap gap-3 mt-7">
              <a href="#quote" className="btn-primary px-6 py-3 text-[15px]">Schedule a Walkthrough</a>
              <a href="tel:+12155501414" className="btn-ghost px-6 py-3 text-[15px] gap-2">
                <Phone className="h-[17px] w-[17px]" />
                (215) 550-1414
              </a>
            </div>
          </div>
        </section>

        {/* What we find here */}
        <section className="section-padding border-b border-phl-rule">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-12 lg:gap-16">
              <div>
                <div className="rack-head">What we find in {location.shortName}</div>
                <p className="text-phl-ink-2 leading-relaxed text-[15px]">{location.intro}</p>

                <div className="mt-8 bg-phl-surface border-l-2 border-phl-blue rounded-sm p-5">
                  <p className="spec-label mb-2">Why local matters here</p>
                  <p className="text-[14px] text-phl-ink-2 leading-relaxed">{location.whyLocal}</p>
                </div>
              </div>

              <div>
                <div className="rack-head">Buildings we work in</div>
                <ul className="space-y-2.5">
                  {location.industries.map((item, i) => (
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

        {/* Services in this location */}
        <section className="section-padding border-b border-phl-rule">
          <div className="container-custom">
            <div className="rack-head">What we do in {location.shortName}</div>
            <div className="grid gap-px bg-phl-rule border border-phl-rule rounded-sm overflow-hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {services.map(s => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}/${location.slug}`}
                  className="group bg-phl-surface hover:bg-phl-raised transition-colors p-5 pb-6 flex flex-col gap-2"
                >
                  <h3 className="text-[18px] text-phl-ink group-hover:text-phl-blue transition-colors">
                    {s.shortTitle}
                  </h3>
                  <p className="text-[13px] text-phl-ink-2 leading-snug">{s.heroTagline}</p>
                  <span className="mt-auto pt-3 font-mono text-[10.5px] uppercase tracking-[0.08em] text-phl-blue inline-flex items-center gap-1.5">
                    In {location.shortName} <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Neighborhoods */}
        {location.neighborhoods && location.neighborhoods.length > 0 && (
          <section className="section-padding border-b border-phl-rule">
            <div className="container-custom">
              <div className="rack-head">Areas we cover around {location.shortName}</div>
              <ul className="flex flex-wrap gap-2.5">
                {location.neighborhoods.map(n => (
                  <li
                    key={n}
                    className="bg-phl-surface border border-phl-rule rounded-sm px-3.5 py-2 text-[13px] text-phl-ink-2"
                  >
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Quote */}
        <section id="quote" className="section-padding border-b border-phl-rule">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <p className="spec-label mb-3">Get started</p>
                <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] text-phl-ink">
                  Schedule a walkthrough in {location.shortName}
                </h2>
                <p className="mt-4 text-phl-ink-2 leading-relaxed max-w-[50ch]">
                  Tell us what surfaces you have and roughly how much of them. We come out, walk the
                  floor, and give you a written scope and a real number.
                </p>
                <div className="mt-8 pt-8 border-t border-phl-rule">
                  <ContactInfo />
                </div>
              </div>
              <QuoteForm />
            </div>
          </div>
        </section>

        {/* Other areas */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="rack-head">Other areas we cover</div>
            <div className="flex flex-wrap gap-2.5">
              {otherLocations.map(l => (
                <Link
                  key={l.slug}
                  to={`/locations/${l.slug}`}
                  className="bg-phl-surface border border-phl-rule hover:border-phl-blue hover:text-phl-blue rounded-sm px-4 py-2.5 text-[13.5px] text-phl-ink-2 transition-colors"
                >
                  {l.shortName}
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

export default LocationPage;
