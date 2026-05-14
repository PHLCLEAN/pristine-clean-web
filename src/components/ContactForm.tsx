
import React from 'react';
import ContactInfo from './ContactInfo';
import QuoteForm from './QuoteForm';

const ContactForm = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-6">Get a Free Quote</h2>
            <div className="h-1 w-16 bg-cleaner-green-500 mb-8"></div>
            
            <p className="text-gray-700 mb-8">
              Ready to experience the difference of professional cleaning services across Philadelphia and surrounding counties? Fill out the form below to get a customized quote for your specific needs. We'll get back to you within 24 hours.
            </p>
            
            <ContactInfo />

            <div className="mt-6 rounded-lg overflow-hidden shadow-md border border-gray-200">
              <iframe
                title="PHL Clean office location — 621 Bristol Pike, Suite C, Bensalem, PA 19020"
                src="https://www.google.com/maps?q=621+Bristol+Pike,+Suite+C,+Bensalem,+PA+19020&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=621+Bristol+Pike+Suite+C+Bensalem+PA+19020"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm font-medium text-cleaner-blue-700 hover:text-cleaner-blue-800 underline"
            >
              Get directions on Google Maps →
            </a>
          </div>
          
          <QuoteForm />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
