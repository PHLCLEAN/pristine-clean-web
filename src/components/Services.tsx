
import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      title: "Commercial Cleaning",
      description: "Keep your business premises spotless, hygienic, and professional",
      imageSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3",
      features: [
        "Daily or weekly scheduled cleaning",
        "Floor maintenance and polishing",
        "Restroom sanitation and stock",
        "Dust control and allergen reduction",
        "Comprehensive recycling programs"
      ],
      delay: "0s"
    },
    {
      title: "Carpet Cleaning",
      description: "Revitalize your carpets with our deep cleaning technology",
      imageSrc: "https://images.unsplash.com/photo-1599619585752-c3edb42a414c?ixlib=rb-4.0.3",
      features: [
        "Hot water extraction cleaning",
        "Low moisture encapsulation method",
        "Stain and odor removal",
        "Allergen removal treatment",
        "Quick-dry technology"
      ],
      delay: "0.2s"
    },
    {
      title: "Deep Cleaning",
      description: "Thorough cleaning of every surface and corner of your facility",
      imageSrc: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3",
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
            />
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-cleaner-blue-800 mb-4">Specialized Facility Cleaning</h3>
          <div className="h-1 w-16 bg-cleaner-green-500 mb-6"></div>
          <p className="text-gray-600 mb-6">
            PHL Clean provides specialized cleaning services for facilities that require unique attention and protocols:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-cleaner-blue-800 mb-3">Medical Facilities</h4>
              <p className="text-gray-600 mb-4">
                Our trained professionals follow strict disinfection protocols for medical centers, clinics, and healthcare facilities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-cleaner-green-500 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">OSHA compliant cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-cleaner-green-500 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Hospital-grade disinfectants</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-cleaner-green-500 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Cross-contamination prevention</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-cleaner-blue-800 mb-3">Educational Facilities</h4>
              <p className="text-gray-600 mb-4">
                Create healthy learning environments with our specialized school and campus cleaning services.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-cleaner-green-500 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Classroom & common area sanitization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-cleaner-green-500 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Gym & auditorium cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-cleaner-green-500 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Student-safe cleaning products</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-cleaner-blue-800 mb-3">Religious Facilities</h4>
              <p className="text-gray-600 mb-4">
                Respectful and thorough cleaning services for churches and places of worship throughout the Philadelphia area.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-cleaner-green-500 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Sanctuary & worship space cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-cleaner-green-500 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Careful handling of religious items</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-cleaner-green-500 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Event setup & cleanup services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
