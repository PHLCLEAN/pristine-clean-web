
import React from 'react';
import { Check, MapPin, Users, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhyChooseLocal = () => {
  return (
    <section id="why-choose-local" className="section-padding bg-gradient-to-br from-cleaner-blue-700 to-cleaner-blue-900 text-white">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Local Philadelphia Cleaning Company</h2>
          <div className="h-1 w-24 bg-cleaner-green-500 mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <MapPin className="h-8 w-8 text-cleaner-green-500 mr-3" />
              <h3 className="text-xl font-bold">Local Expertise & Reliability</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Family-owned and operated in the Philadelphia area",
                "Deep understanding of local business needs",
                "Quick response times",
                "Personal attention from ownership",
                "Strong community relationships"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-cleaner-green-500 mr-2 mt-0.5" />
                  <span className="opacity-90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-cleaner-green-500 mr-3" />
              <h3 className="text-xl font-bold">Professional Standards</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Fully trained and vetted cleaning staff",
                "Comprehensive insurance coverage",
                "Consistent quality control",
                "Regular supervision and inspections",
                "Eco-friendly cleaning certification"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-cleaner-green-500 mr-2 mt-0.5" />
                  <span className="opacity-90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Phone className="h-8 w-8 text-cleaner-green-500 mr-3" />
              <h3 className="text-xl font-bold">Client Communication</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Dedicated account manager",
                "24/7 emergency response",
                "Regular service reviews",
                "Open feedback channels",
                "Prompt issue resolution"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-cleaner-green-500 mr-2 mt-0.5" />
                  <span className="opacity-90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Get Started Today</h3>
          <p className="opacity-90 mb-6">
            Transform your facility with our professional cleaning services. We offer:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[
              "Free facility assessments",
              "Customized cleaning proposals",
              "Flexible contract terms",
              "After-hours scheduling options",
              "Competitive pricing"
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center">
                <Check className="h-5 w-5 text-cleaner-green-500 mr-2" />
                <span className="opacity-90">{item}</span>
              </div>
            ))}
          </div>
          <Button asChild size="lg" className="bg-cleaner-green-500 hover:bg-cleaner-green-600 text-white">
            <a href="#contact">Schedule Your Free Consultation</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseLocal;
