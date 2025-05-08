
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Building, Briefcase, Users, Shield } from 'lucide-react';

const IndustriesServed = () => {
  const industries = [
    {
      name: "Corporate Offices",
      icon: <Briefcase className="h-6 w-6" />,
      description: "Creating productive, clean workspaces that impress clients and motivate employees.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3"
    },
    {
      name: "Bank Branches",
      icon: <Building className="h-6 w-6" />,
      description: "Specialized cleaning services for financial institutions with enhanced security protocols, after-hours service to maintain branch operations, secure handling of sensitive areas, meticulous attention to public spaces and teller stations, and ATM vestibule cleaning and maintenance.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3"
    },
    {
      name: "Specialty Fitness Facilities",
      icon: <Users className="h-6 w-6" />,
      description: "We understand the unique needs of fitness facilities where hygiene is paramount for member safety.",
      fitnessTypes: [
        {
          name: "Boxing Gyms",
          description: "Specialized sanitization of equipment, mats, and high-touch areas."
        },
        {
          name: "MMA Training Centers",
          description: "Deep cleaning of training areas and locker rooms."
        },
        {
          name: "CrossFit Boxes",
          description: "Thorough floor maintenance and equipment sanitization."
        }
      ],
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3"
    },
    {
      name: "Religious Facilities",
      icon: <Shield className="h-6 w-6" />,
      description: "Respectful, thorough cleaning services that honor your sacred spaces and accommodate service schedules.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3"
    },
    {
      name: "Childcare Centers & Daycares",
      icon: <Users className="h-6 w-6" />,
      description: "Specialized cleaning protocols that ensure a safe, healthy environment for children, with extra attention to sanitization and disinfection.",
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3"
    },
    {
      name: "Educational Institutions",
      icon: <Building className="h-6 w-6" />,
      description: "Maintaining clean, healthy learning environments that support student success.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3"
    }
  ];

  return (
    <section id="industries" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-4">Industries We Serve</h2>
          <div className="h-1 w-24 bg-cleaner-green-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Our specialized cleaning services are tailored to meet the unique needs of various industries across Philadelphia and surrounding counties.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              {industry.image && (
                <div className="h-48 overflow-hidden rounded-md mb-4">
                  <img 
                    src={industry.image}
                    alt={industry.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              )}
              <div className="flex items-center mb-4">
                <div className="text-cleaner-blue-700 mr-3">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-cleaner-blue-800">{industry.name}</h3>
              </div>
              <p className="text-gray-600 mb-4">{industry.description}</p>
              
              {industry.fitnessTypes && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-cleaner-blue-700 mb-2">Our Specialized Fitness Cleaning:</h4>
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                    {industry.fitnessTypes.map((type, i) => (
                      <div key={i} className="bg-gray-50 p-3 rounded-md">
                        <h5 className="font-medium text-cleaner-blue-800">{type.name}</h5>
                        <p className="text-sm text-gray-600">{type.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-cleaner-blue-800 mb-6">Service Areas</h3>
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-md">
            <AccordionItem value="philadelphia">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-cleaner-blue-800">Philadelphia Commercial Cleaning</AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                As your locally owned and operated cleaning partner, we understand Philadelphia's business community. 
                From Center City offices to Northeast Philadelphia industrial spaces, we deliver consistent, reliable service.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="bucks">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-cleaner-blue-800">Bucks County Office Services</AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Serving businesses throughout Bucks County with the same attention to detail and professional 
                standards that have made us a trusted name in commercial cleaning.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="montgomery">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-cleaner-blue-800">Montgomery County Coverage</AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Providing comprehensive cleaning solutions to Montgomery County businesses, 
                with flexible scheduling to meet your specific needs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
