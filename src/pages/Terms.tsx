import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSeo } from '../hooks/use-seo';

const Terms = () => {
  useSeo({
    title: "Terms of Service | PHL Clean",
    description:
      "The terms that govern your use of phlclean.com and the relationship between PHL Clean and visitors, prospective customers, and applicants.",
    canonical: "https://phlclean.com/terms/",
  });

  const effectiveDate = "May 14, 2026";

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="bg-cleaner-blue-50/40 border-b border-cleaner-blue-100">
          <div className="container-custom py-12 md:py-16">
            <div className="text-sm text-gray-600 mb-3">
              <Link to="/" className="hover:text-cleaner-blue-700">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-cleaner-blue-700">Terms of Service</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-3">
              Terms of Service
            </h1>
            <p className="text-gray-600">
              Effective date: {effectiveDate}
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom max-w-3xl">
            <div className="text-gray-700 leading-relaxed space-y-6">
              <p>
                These Terms of Service ("Terms") govern your access to and use of
                phlclean.com (the "Site"), operated by PHL Clean ("PHL Clean," "we," "us,"
                or "our"). By using the Site you agree to these Terms. If you don't agree,
                please don't use the Site.
              </p>
              <p>
                These Terms apply to your use of the Site itself. The specific terms of any
                cleaning services PHL Clean performs for you as a customer are set out in
                a separate written service agreement between us — these Terms don't
                replace that agreement.
              </p>

              <h2 className="text-2xl font-bold text-cleaner-blue-800 mt-10 mb-3">
                1. About PHL Clean
              </h2>
              <p>
                PHL Clean is a commercial cleaning and janitorial services company based
                in Bensalem, Pennsylvania, serving Philadelphia and the surrounding
                counties (Bucks, Montgomery, Delaware, and Chester). The Site is an
                informational and marketing channel for our services.
              </p>

              <h2 className="text-2xl font-bold text-cleaner-blue-800 mt-10 mb-3">
                2. Walkthroughs, quotes, and service agreements
              </h2>
              <p>
                Commercial cleaning pricing depends on square footage, frequency, scope,
                building type, and site access. For that reason, we do not provide binding
                quotes through the website. When you submit a request through our quote
                form, you're asking us to contact you to schedule an in-person walkthrough
                of your space. Any pricing, scope, or service detail discussed before a
                signed service agreement is preliminary and not a binding offer.
              </p>
              <p>
                A binding commitment to perform cleaning services exists only after both
                parties sign a separate written service agreement.
              </p>

              <h2 className="text-2xl font-bold text-cleaner-blue-800 mt-10 mb-3">
                3. Job applications
              </h2>
              <p>
                Information you submit through our Careers page is reviewed for current and
                future hiring needs. Submitting an application does not create an
                employment relationship and is not an offer of employment. Hiring
                decisions, when made, are documented through a separate written offer.
              </p>

              <h2 className="text-2xl font-bold text-cleaner-blue-800 mt-10 mb-3">
                4. Acceptable use of the Site
              </h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the Site for any unlawful purpose, or in a way that interferes with the Site's operation;</li>
                <li>Attempt to gain unauthorized access to any part of the Site, our servers, or systems connected to the Site;</li>
                <li>Submit false, misleading, or deliberately spam-like information through our forms;</li>
                <li>Use automated tools (bots, scrapers, crawlers) to collect content from the Site in a way that goes beyond standard search-engine indexing;</li>
                <li>Copy or republish substantial portions of the Site's content without our written permission.</li>
              </ul>

              <h2 className="text-2xl font-bold text-cleaner-blue-800 mt-10 mb-3">
                5. Intellectual property
              </h2>
              <p>
                All content on the Site — text, graphics, logos, photographs, and the
                organization of all of it — is the property of PHL Clean or its licensors
                and is protected by copyright and other intellectual property laws. You
                may view and share links to our pages. You may not reproduce, modify,
                distribute, or use the content for commercial purposes without our written
                permission.
              </p>
              <p>
                "PHL Clean" and the PHL Clean logo are trademarks of PHL Clean and may not
                be used without permission.
              </p>

              <h2 className="text-2xl font-bold text-cleaner-blue-800 mt-10 mb-3">
                6. Third-party links
              </h2>
              <p>
                The Site may include links to third-party websites (for example, our
                Instagram page, or external policies referenced in our Privacy Policy).
                Those sites are operated by parties outside our control. We're not
                responsible for their content, products, services, or privacy practices.
                Linking to a third party doesn't imply endorsement.
              </p>

              <h2 className="text-2xl font-bold text-cleaner-blue-800 mt-10 mb-3">
                7. Disclaimers
              </h2>
              <p>
                The Site and all content on it are provided "as is" and "as available."
                We work hard to keep the information accurate and the Site available, but
                we make no warranties, express or implied, that the Site will be
                error-free, uninterrupted, secure, or that the content will be accurate,
                complete, or current at any given moment. Pricing examples, service
                descriptions, and FAQs are for general information only and are not a
                binding offer.
              </p>

              <h2 className="text-2xl font-bold text-cleaner-blue-800 mt-10 mb-3">
                8. Limitation of liability
              </h2>
              <p>
                To the maximum extent permitted by law, PHL Clean and its owners,
                employees, and affiliates are not liable for any indirect, incidental,
                consequential, special, or punitive damages arising out of or related to
                your use of the Site — including lost profits, lost data, or business
                interruption — even if we've been told the possibility of such damages
                existed.
              </p>
              <p>
                Our total liability to you for any claim arising out of or related to your
                use of the Site (separate from any service agreement you sign with us) is
                limited to one hundred U.S. dollars ($100).
              </p>

              <h2 className="text-2xl font-bold text-cleaner-blue-800 mt-10 mb-3">
                9. Indemnification
              </h2>
              <p>
                You agree to defend, indemnify, and hold harmless PHL Clean and its owners
                and employees from any claim, loss, damage, or expense (including
                reasonable attorneys' fees) arising out of your violation of these Terms
                or your misuse of the Site.
              </p>

              <h2 className="text-2xl font-bold text-cleaner-blue-800 mt-10 mb-3">
                10. Governing law and venue
              </h2>
              <p>
                These Terms are governed by the laws of the Commonwealth of Pennsylvania,
                without regard to its conflict-of-laws principles. Any dispute arising out
                of these Terms or your use of the Site will be resolved exclusively in the
                state or federal courts located in Bucks County, Pennsylvania, and you
                consent to the jurisdiction of those courts.
              </p>

              <h2 className="text-2xl font-bold text-cleaner-blue-800 mt-10 mb-3">
                11. Changes to these Terms
              </h2>
              <p>
                We may update these Terms from time to time. When we do, we'll change the
                "Effective date" at the top of the page. Significant changes will be
                announced by a notice on the Site. Your continued use after a change means
                you accept the updated Terms.
              </p>

              <h2 className="text-2xl font-bold text-cleaner-blue-800 mt-10 mb-3">
                12. Severability and entire agreement
              </h2>
              <p>
                If any part of these Terms is found to be unenforceable, the rest stays in
                effect. These Terms, together with our{' '}
                <Link to="/privacy" className="text-cleaner-blue-700 underline">Privacy Policy</Link>
                , are the entire agreement between you and PHL Clean about your use of the
                Site. Any other agreements between us (including service agreements with
                customers) are separate and govern their own subject matter.
              </p>

              <h2 className="text-2xl font-bold text-cleaner-blue-800 mt-10 mb-3">
                13. Contact us
              </h2>
              <p>
                <strong>PHL Clean</strong><br />
                Email:{' '}
                <a href="mailto:info@phlclean.com" className="text-cleaner-blue-700 underline">
                  info@phlclean.com
                </a>
                <br />
                Phone:{' '}
                <a href="tel:+12155501414" className="text-cleaner-blue-700 underline">
                  (215) 550-1414
                </a>
              </p>

              <p className="text-sm text-gray-500 mt-10 border-t border-gray-200 pt-6">
                See also our <Link to="/privacy" className="text-cleaner-blue-700 underline">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
