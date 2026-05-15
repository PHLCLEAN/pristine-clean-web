
import React from 'react';
import ContactInfo from './ContactInfo';
import QuoteForm from './QuoteForm';

const ContactForm = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-6">Schedule a Walkthrough</h2>
            <div className="h-1 w-16 bg-cleaner-green-500 mb-8"></div>
            
            <p className="text-gray-700 mb-8">
              Ready to bring on a reliable, locally owned cleaning team? Tell us a little about your space and we'll set up a free on-site walkthrough — that's how we put together an accurate quote you can actually rely on. We'll get back to you within 24 hours.
            </p>
            
            <ContactInfo />
          </div>
          
          <QuoteForm />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
