import React from 'react';
import ContactInfo from './ContactInfo';
import QuoteForm from './QuoteForm';

const ContactForm = () => {
  return (
    <section id="contact" className="section-padding bg-phl-ground">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="spec-label mb-3">Get started</p>
            <h2 className="text-[clamp(1.6rem,3.4vw,2.35rem)] text-phl-ink">
              Schedule a walkthrough
            </h2>
            <p className="mt-4 text-phl-ink-2 leading-relaxed max-w-[50ch]">
              Tell us what surfaces you have and roughly how much of them. We&rsquo;ll come out, walk
              the floor, and give you a written scope and a real number — plus an honest read on
              anything that is past cleaning and into restoration.
            </p>
            <p className="mt-4 text-[13.5px] text-phl-muted max-w-[50ch]">
              We reply within one business day. If it&rsquo;s urgent, the phone is faster than the form.
            </p>

            <div className="mt-8 pt-8 border-t border-phl-rule">
              <ContactInfo />
            </div>
          </div>

          <QuoteForm />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
