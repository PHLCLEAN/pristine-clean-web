
import React from 'react';
import ServiceCard from './ServiceCard';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      title: "Commercial Cleaning",
      description: "Keep your business premises spotless, hygienic, and professional",
      imageSrc: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      features: [
        "Daily or weekly scheduled cleaning",
        "Floor maintenance and polishing",
        "Restroom sanitation and stock",
        "Dust control and allergen reduction"
      ],
      delay: "0s"
    },
    {
      title: "Carpet Cleaning",
      description: "Revitalize your carpets with our deep cleaning technology",
      imageSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
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
      title: "Deep Cleaning",
      description: "Thorough cleaning of every surface and corner of your facility",
      imageSrc: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
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
          <h2 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-4">Our Professional Services</h2>
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
              hideButton={true}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg" className="bg-cleaner-blue-700 hover:bg-cleaner-blue-800 py-6 px-12 text-lg">
            <a href="#contact">Request Our Professional Services</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
