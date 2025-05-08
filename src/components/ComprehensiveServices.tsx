
import React from 'react';
import { Button } from '@/components/ui/button';

const ComprehensiveServices = () => {
  return (
    <section id="comprehensive-services" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-4">Comprehensive Commercial Cleaning Solutions</h2>
          <div className="h-1 w-24 bg-cleaner-green-500 mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-cleaner-blue-800 mb-4">Professional Office Cleaning Services</h3>
            <p className="text-gray-600 mb-4">
              Our dedicated team delivers exceptional cleaning results while respecting your workspace and schedule. From daily maintenance to deep cleaning, we ensure your office environment promotes productivity and wellness for your employees and visitors.
            </p>
            <Button asChild className="w-full bg-cleaner-blue-700 hover:bg-cleaner-blue-800 mt-4">
              <a href="#contact">Schedule Service</a>
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-cleaner-blue-800 mb-4">Advanced Carpet Cleaning & Maintenance</h3>
            <p className="text-gray-600 mb-4">
              Our specialized carpet care programs extend the life of your investment while maintaining a pristine appearance. Using state-of-the-art equipment and proven techniques, we keep your carpets looking professional year-round.
            </p>
            <Button asChild className="w-full bg-cleaner-blue-700 hover:bg-cleaner-blue-800 mt-4">
              <a href="#contact">Schedule Service</a>
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-cleaner-blue-800 mb-4">Daily/Weekly Janitorial Services</h3>
            <p className="text-gray-600 mb-4">
              Consistent, reliable cleaning services tailored to your facility's needs. Our trained professionals handle everything from restroom sanitation to break room maintenance, ensuring your facility maintains the highest standards of cleanliness.
            </p>
            <Button asChild className="w-full bg-cleaner-blue-700 hover:bg-cleaner-blue-800 mt-4">
              <a href="#contact">Schedule Service</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveServices;
