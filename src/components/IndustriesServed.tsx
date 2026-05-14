
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Building,
  Briefcase,
  Users,
  Shield,
  Dumbbell,
  School,
  Stethoscope,
  ShoppingBag,
  Warehouse,
} from 'lucide-react';

const IndustriesServed = () => {
  const industries = [
    {
      name: "Corporate Offices",
      icon: <Briefcase className="h-6 w-6" />,
      description: "Productive, professional workspaces that impress clients and motivate employees — daily, weekly, or after-hours service.",
    },
    {
      name: "Bank Branches",
      icon: <Building className="h-6 w-6" />,
      description: "After-hours service for financial institutions with enhanced security protocols, attention to teller stations, and ATM vestibule care.",
    },
    {
      name: "Medical & Dental Offices",
      icon: <Stethoscope className="h-6 w-6" />,
      description: "HIPAA-aware crews, hospital-grade disinfectants, and documentation-ready cleaning for practices, urgent care, and specialty clinics.",
    },
    {
      name: "Religious Facilities",
      icon: <Shield className="h-6 w-6" />,
      description: "Respectful, thorough cleaning that honors your sacred spaces and accommodates service schedules.",
    },
    {
      name: "Childcare & Daycare",
      icon: <Users className="h-6 w-6" />,
      description: "Specialized sanitization protocols that keep a safe, healthy environment for children — extra attention to high-touch surfaces.",
    },
    {
      name: "Educational Institutions",
      icon: <School className="h-6 w-6" />,
      description: "Clean, healthy learning environments. Routine custodial service plus summer and holiday-break deep cleans.",
    },
    {
      name: "Specialty Fitness & Gyms",
      icon: <Dumbbell className="h-6 w-6" />,
      description: "Boxing gyms, MMA centers, and CrossFit boxes — equipment sanitization, mat care, and locker room deep cleans where hygiene is non-negotiable.",
    },
    {
      name: "Retail & Showrooms",
      icon: <ShoppingBag className="h-6 w-6" />,
      description: "Floors, glass, fitting rooms, and front-of-house presentation. Scheduled to keep your space ready for customers every morning.",
    },
    {
      name: "Property Management",
      icon: <Warehouse className="h-6 w-6" />,
      description: "Common areas, lobbies, restrooms, and turnover cleans across your portfolio. Consistent crews, one point of contact.",
    },
  ];

  return (
    <section id="industries" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-4">Industries We Serve</h2>
          <div className="h-1 w-24 bg-cleaner-green-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Specialized cleaning programs tailored to the way your industry actually operates — across Philadelphia and the surrounding counties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-3">
                <div className="text-cleaner-blue-700 mr-3">{industry.icon}</div>
                <h3 className="text-xl font-bold text-cleaner-blue-800">{industry.name}</h3>
              </div>
              <p className="text-gray-600">{industry.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-8">
          Don't see your industry? We've cleaned a little bit of everything.{' '}
          <a href="#contact" className="text-cleaner-blue-700 font-medium underline">
            Tell us about your space
          </a>{' '}
          and we'll build a program that fits.
        </p>

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
            <AccordionItem value="delaware">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-cleaner-blue-800">Delaware County Service</AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Full-service commercial cleaning across Delaware County — offices, retail, medical, and property management.
                Locally dispatched crews keep response times short.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="chester">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-cleaner-blue-800">Chester County Coverage</AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Reliable commercial cleaning and janitorial service for Chester County businesses. After-hours
                scheduling available so your operations are never interrupted.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
