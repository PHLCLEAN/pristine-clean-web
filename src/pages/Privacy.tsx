import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSeo } from '../hooks/use-seo';

const Privacy = () => {
  useSeo({
    title: "Privacy Policy | PHL Clean",
    description:
      "How PHL Clean collects, uses, and protects the information you share through phlclean.com — including quote requests, job applications, and website analytics.",
    canonical: "https://phlclean.com/privacy",
  });

  // ISO date format — keep this current when the policy is materially updated.
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
              <span className="text-cleaner-blue-700">Privacy Policy</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-3">
              Privacy Policy
            </h1>
            <p className="text-gray-600">
              Effective date: {effectiveDate}
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom max-w-3xl">
            <div className="prose-content text-gray-700 leading-relaxed space-y-6">
              <p>
                This policy explains what information PHL Clean collects when you use
                phlclean.com, how we use it, who we share it with, and the choices you have.
                We try to keep this short, accurate, and human-readable. If anything here
                isn't clear, email <a href="mailto:info@phlclean.com" className="text-cleaner-blue-700 underline">info@phlclean.com</a> and we'll
                walk you through it.
              </p>

              <h2 className="text-2xl font-bold text-cleaner-blue-800 mt-10 mb-3">
                1. Who we are
              </h2>
              <p>
                PHL Clean is a commercial cleaning and janitorial services company based in
                Bensalem, Pennsylvania, serving Philadelphia and the surrounding counties.
                When this policy says "we," "us," or "PHL Clean," that's who we mean.
              </p>

              <h2 className="text-2xl font-bold text-cleaner-blue-800 mt-10 mb-3">
                2. Information we collect
              </h2>
              <p>
                The only personal information we collect from you is the information you
                choose to give us through one of our forms or by contacting us directly:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Walkthrough / quote requests:</strong> name, email address, phone
                  number, company name, the service you're interested in, and any message
                  you include.
                </li>
                <li>
                  <strong>Job applications (Careers page):</strong> name, email, phone, the
                  position you're applying for, your experience, availability, and any
                  message you include.
                </li>
                <li>
                  <strong>Direct contact:</strong> if you call us at (215) 550-1414 or email
                  info@phlclean.com, we'll have whatever you share with us.
                </li>
              </ul>
              <p>
                We also collect a small amount of standard technical information
                automatically when you visit the site — your IP address, browser type,
                device type, the pages you view, and how you got here. This is described
                in section 5 (Cookies and analytics).
              </p>

              <h2 className="text-2xl font-bold text-cleaner-blue-800 mt-10 mb-3">
                3. How we use your information
              </h2>
              <p>We use the information you give us to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiry, schedule a walkthrough, and follow up about a quote.</li>
                <li>Evaluate job applications and contact applicants.</li>
                <li>Send service-related communications (appointment reminders, contract documents, invoices) if you become a customer.</li>
                <li>Improve the website by understanding which pages are useful and which aren't.</li>
              </ul>
              <p>
                We don't sell your personal information. We don't share it for advertising
                purposes. We don't add you to a marketing list unless you've asked us to.
              </p>

              <h2 className="text-2xl font-bold text-cleaner-blue-800 mt-10 mb-3">
                4. Who we share information with
              </h2>
              <p>
                We share information only with the service providers we use to actually
                operate the website and our business:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Web3Forms</strong> processes form submissions on our behalf and
                  delivers them to our email inbox. Your data passes through their service
                  and is subject to{' '}
                  <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer" className="text-cleaner-blue-700 underline">
                    Web3Forms' privacy policy
                  </a>.
                </li>
                <li>
                  <strong>Google Analytics 4</strong> collects anonymized usage data about
                  how people navigate the site. It's subject to{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-cleaner-blue-700 underline">
                    Google's privacy policy
                  </a>.
                </li>
                <li>
                  <strong>Our website hosting and email providers</strong>, who store the
                  data necessary to keep the site running and deliver our email.
                </li>
              </ul>
              <p>
                We may also disclose information if required by law (subpoena, court order),
                or if we believe in good faith that disclosure is necessary to protect our
                rights, your safety, or the safety of others.
              </p>

              <h2 className="text-2xl font-bold text-cleaner-blue-800 mt-10 mb-3">
                5. Cookies and analytics
              </h2>
              <p>
                The site uses Google Analytics 4 to understand traffic patterns — which
                pages people view, how long they stay, where they came from. Google
                Analytics sets cookies in your browser to do this. The data we see is
                aggregated and not tied to your name or contact information.
              </p>
              <p>
                You can opt out of Google Analytics on any site by installing the{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cleaner-blue-700 underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                , or by using browser settings or extensions that block tracking cookies.
              </p>

              <h2 className="text-2xl font-bold text-cleaner-blue-800 mt-10 mb-3">
                6. How long we keep your information
              </h2>
              <p>
                We keep quote-request and contact information for as long as is reasonably
                necessary to respond to your inquiry and operate our business — typically
                up to 24 months unless you become a customer, in which case we keep it for
                the duration of the customer relationship plus any period required by tax,
                accounting, or legal obligations. We keep job applications for up to 12
                months after a hiring decision unless you've asked us to retain them
                longer for future opportunities.
              </p>
              <p>
                You can ask us to delete your information at any time (see section 8).
              </p>

              <h2 className="text-2xl font-bold text-cleaner-blue-800 mt-10 mb-3">
                7. How we protect your information
              </h2>
              <p>
                We use reasonable administrative, technical, and physical safeguards to
                protect the information you share with us — including secure (HTTPS)
                connections for all data sent through the website, and access controls on
                our email accounts. No method of internet transmission or electronic
                storage is 100% secure, so we can't guarantee absolute security, but we
                take it seriously.
              </p>

              <h2 className="text-2xl font-bold text-cleaner-blue-800 mt-10 mb-3">
                8. Your rights
              </h2>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> ask us what personal information we have about you.</li>
                <li><strong>Correct:</strong> ask us to fix anything that's wrong.</li>
                <li><strong>Delete:</strong> ask us to remove your information from our records.</li>
                <li><strong>Opt out:</strong> stop receiving any non-essential communication from us.</li>
              </ul>
              <p>
                To exercise any of these rights, email us at{' '}
                <a href="mailto:info@phlclean.com" className="text-cleaner-blue-700 underline">info@phlclean.com</a>
                {' '}from the email address you originally used to contact us. We'll respond
                within 30 days. We may need to verify your identity before acting on the
                request. We won't charge you a fee or retaliate against you for making one.
              </p>
              <p>
                If you're a California resident, you have additional rights under the
                California Consumer Privacy Act (CCPA), including the right to know what
                categories of personal information we've collected and the right not to be
                discriminated against for exercising your rights. Email us as above.
              </p>

              <h2 className="text-2xl font-bold text-cleaner-blue-800 mt-10 mb-3">
                9. Children's privacy
              </h2>
              <p>
                phlclean.com is intended for businesses and adults. We do not knowingly
                collect personal information from anyone under 13 years old. If you
                believe a child has provided us with personal information, contact us and
                we'll delete it.
              </p>

              <h2 className="text-2xl font-bold text-cleaner-blue-800 mt-10 mb-3">
                10. Links to other websites
              </h2>
              <p>
                Our site contains links to external sites (for example, our Instagram
                account or third-party privacy policies referenced above). We aren't
                responsible for the content or privacy practices of those sites — please
                review their policies before sharing personal information with them.
              </p>

              <h2 className="text-2xl font-bold text-cleaner-blue-800 mt-10 mb-3">
                11. Changes to this policy
              </h2>
              <p>
                We may update this policy from time to time. When we do, we'll change the
                "Effective date" at the top of the page. Significant changes will be
                communicated by posting a notice on the website. Your continued use of
                phlclean.com after a change means you accept the updated policy.
              </p>

              <h2 className="text-2xl font-bold text-cleaner-blue-800 mt-10 mb-3">
                12. Contact us
              </h2>
              <p>
                Questions about this policy, or about how we handle your information?
              </p>
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
                See also our <Link to="/terms" className="text-cleaner-blue-700 underline">Terms of Service</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
