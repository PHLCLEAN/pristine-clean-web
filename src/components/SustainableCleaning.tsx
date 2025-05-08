
import React from 'react';
import { Check } from 'lucide-react';

const SustainableCleaning = () => {
  return (
    <section id="sustainable-cleaning" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-4">Our Sustainable Cleaning Advantage</h2>
          <div className="h-1 w-24 bg-cleaner-green-500 mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="rounded-lg overflow-hidden mb-6 shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3" 
                alt="Eco-Friendly Cleaning" 
                className="w-full h-64 object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-cleaner-blue-800 mb-4">Eco-Friendly Cleaning Solutions</h3>
            <p className="text-gray-600 mb-6">
              We prioritize your health and the environment by using eco-friendly cleaning products that deliver powerful results without harsh chemicals. Our green cleaning approach creates healthier indoor air quality while maintaining exceptional cleanliness standards.
            </p>
            
            <h3 className="text-2xl font-bold text-cleaner-blue-800 mb-4">Environmental Benefits for Your Business</h3>
            <p className="text-gray-600 mb-6">
              Partner with us to reduce your facility's environmental impact while maintaining the highest cleaning standards. Our sustainable practices help you meet your corporate responsibility goals while protecting your investment.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="rounded-lg overflow-hidden mb-6">
              <img 
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3" 
                alt="Low Moisture Carpet Cleaning" 
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-cleaner-blue-800 mb-4">Low Moisture Encapsulation Carpet Care</h3>
            <p className="text-gray-600 mb-6">
              Our innovative low moisture encapsulation technology represents the future of carpet cleaning. This advanced method:
            </p>
            <ul className="space-y-4">
              {[
                "Reduces drying time dramatically",
                "Prevents mold and mildew growth",
                "Extends carpet life",
                "Maintains a cleaner appearance longer",
                "Uses less water, supporting our environmental commitment"
              ].map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-cleaner-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainableCleaning;
