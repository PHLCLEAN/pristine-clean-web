import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuoteForm from '../components/QuoteForm';
import ContactInfo from '../components/ContactInfo';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
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
    canonical: location ? `https://phlclean.com/locations/${location.slug}` : undefined,
  });

  if (!location) {
    return <Navigate to="/404" replace />;
  }

  // --- Structured data (JSON-LD) ---
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
    <div className="min-h-screen bg-white">
      <Navbar />
      <JsonLd data={breadcrumbSchema} />
      <main>
        {/* Hero */}
        <section className="relative bg-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-cleaner-blue-700/30 to-cleaner-green-500/20"></div>
          </div>

          <div className="container-custom relative z-10 py-16 md:py-24">
            <div className="max-w-3xl">
              <div className="text-sm text-gray-600 mb-4">
                <Link to="/" className="hover:text-cleaner-blue-700">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-cleaner-blue-700">{location.shortName}</span>
              </div>

              <div className="inline-flex items-center bg-cleaner-blue-50 text-cleaner-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                Serving {location.longName}
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-cleaner-blue-800 leading-tight mb-6">
                {location.h1}
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                {location.heroTagline}
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

        {/* Intro */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                {location.intro}
              </p>
            </div>
          </div>
        </section>

        {/* Services available in this location */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-4">
                Services Available in {location.shortName}
              </h2>
              <div className="h-1 w-24 bg-cleaner-green-500 mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg">
                Every service we offer is available throughout {location.longName}.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {services.map(s => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}/${location.slug}`}
                  className="block bg-white border border-gray-200 hover:border-cleaner-blue-700 rounded-lg p-6 transition-colors group"
                >
                  <h3 className="text-xl font-bold text-cleaner-blue-800 mb-2">
                    {s.shortTitle} in {location.shortName}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{s.heroTagline.slice(0, 110)}...</p>
                  <span className="text-cleaner-blue-700 font-medium inline-flex items-center group-hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-4">
                  Who We Serve in {location.shortName}
                </h2>
                <div className="h-1 w-24 bg-cleaner-green-500 mx-auto mb-6"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {location.industries.map((item, i) => (
                  <div key={i} className="flex items-start bg-cleaner-blue-50 border border-cleaner-blue-100 rounded-lg p-4">
                    <CheckCircle2 className="h-5 w-5 text-cleaner-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-cleaner-blue-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhoods */}
        {location.neighborhoods && location.neighborhoods.length > 0 && (
          <section className="section-padding bg-gray-50">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-4">
                    Areas We Serve in {location.shortName}
                  </h2>
                  <div className="h-1 w-24 bg-cleaner-green-500 mx-auto mb-6"></div>
                  <p className="text-gray-600 text-lg">
                    Active accounts and routine service throughout these neighborhoods and surrounding areas.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  {location.neighborhoods.map((n, i) => (
                    <span key={i} className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
                      {n}
                    </span>
                  ))}
                </div>
                <p className="text-center text-gray-600 mt-8">
                  Don't see your area listed? <a href="tel:+12155501414" className="text-cleaner-blue-700 font-medium">Give us a call</a> — we may already service it.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Why local */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto bg-cleaner-blue-50 border border-cleaner-blue-100 rounded-lg p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-cleaner-blue-800 mb-4">
                Why Local Matters
              </h2>
              <p className="text-gray-700 text-lg">
                {location.whyLocal}
              </p>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section id="quote" className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-6">
                  Schedule a Walkthrough — {location.shortName}
                </h2>
                <div className="h-1 w-16 bg-cleaner-green-500 mb-8"></div>
                <p className="text-gray-700 mb-8">
                  Tell us about your facility and we'll get back to you within 24 hours. Or call us directly — most quotes start with a quick conversation about your space and your goals.
                </p>
                <ContactInfo />
              </div>
              <QuoteForm />
            </div>
          </div>
        </section>

        {/* Other locations */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-cleaner-blue-800 mb-4">Other Areas We Serve</h2>
              <div className="h-1 w-16 bg-cleaner-green-500 mx-auto"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {otherLocations.map(l => (
                <Link
                  key={l.slug}
                  to={`/locations/${l.slug}`}
                  className="inline-flex items-center bg-cleaner-blue-50 hover:bg-cleaner-blue-100 text-cleaner-blue-800 font-medium px-5 py-3 rounded-full transition-colors"
                >
                  <MapPin className="h-4 w-4 mr-2" />
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
