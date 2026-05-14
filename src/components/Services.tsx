import React from 'react';
import ServiceCard from './ServiceCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      slug: "commercial-cleaning",
      title: "Commercial Cleaning & Janitorial",
      description: "Daily, weekly, or after-hours office cleaning that keeps your space spotless and professional",
      imageSrc: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      features: [
        "Daily or weekly scheduled cleaning",
        "Floor maintenance and polishing",
        "Restroom sanitation and stock",
        "Dust control and allergen reduction"
      ],
      delay: "0s"
    },
    {
      slug: "carpet-cleaning",
      title: "Carpet Cleaning",
      description: "Revitalize your carpets with our deep cleaning technology",
      imageSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      features: [
        "Hot water extraction cleaning",
        "Low moisture encapsulation method",
        "Stain and odor removal",
        "Allergen removal treatment",
        "Carpet maintenance"
      ],
      delay: "0.2s"
    },
    {
      slug: "deep-cleaning",
      title: "Deep Cleaning",
      description: "Thorough cleaning of every surface and corner of your facility",
      imageSrc: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      features: [
        "Detail cleaning of fixtures and fittings",
        "High dusting of vents and ceiling areas",
        "Baseboard and wall cleaning",
        "Furniture and upholstery cleaning",
        "Disinfection of high-touch surfaces"
      ],
      delay: "0.4s"
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-4">Our Cleaning & Janitorial Services</h2>
          <div className="h-1 w-24 bg-cleaner-green-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Serving Philadelphia, Montgomery, Delaware, Bucks, and Chester counties with exceptional cleaning services tailored to your business needs, ensuring a healthy and impressive environment for your employees and customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              features={service.features}
              delay={service.delay}
              linkTo={`/services/${service.slug}`}
            />
          ))}
        </div>

        <div className="mt-12 text-center space-y-4">
          <p className="text-gray-600">
            Also offering{' '}
            <Link to="/services/floor-maintenance" className="text-cleaner-blue-700 font-medium hover:underline">Floor Maintenance</Link>
            {' and '}
            <Link to="/services/medical-facility-cleaning" className="text-cleaner-blue-700 font-medium hover:underline">Medical Facility Cleaning</Link>
            .
          </p>
          <Button asChild size="lg" className="bg-cleaner-blue-700 hover:bg-cleaner-blue-800 py-6 px-12 text-lg">
            <a href="#contact">Request Our Professional Services</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
