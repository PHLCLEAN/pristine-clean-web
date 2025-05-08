
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock, Settings, Users } from 'lucide-react';

const CleaningProcess = () => {
  return (
    <section id="cleaning-process" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-4">Professional Cleaning Process</h2>
          <div className="h-1 w-24 bg-cleaner-green-500 mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Settings className="h-6 w-6 text-cleaner-green-500" />
                <CardTitle>Initial Facility Assessment</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-2">
              <ul className="space-y-2">
                {[
                  "Thorough evaluation of your space",
                  "Identification of high-traffic areas",
                  "Custom solution development",
                  "Detailed cost proposal"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-cleaner-green-500 mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Settings className="h-6 w-6 text-cleaner-green-500" />
                <CardTitle>Customized Cleaning Plans</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-2">
              <p className="mb-4">Every facility is unique, which is why we develop tailored cleaning programs that:</p>
              <ul className="space-y-2">
                {[
                  "Match your schedule and budget",
                  "Address specific industry requirements",
                  "Include specialized services as needed",
                  "Flexible after-hours scheduling to minimize business disruption"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-cleaner-green-500 mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Check className="h-6 w-6 text-cleaner-green-500" />
                <CardTitle>Quality Assurance Program</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-2">
              <ul className="space-y-2">
                {[
                  "Regular inspections",
                  "Client feedback integration",
                  "Continuous staff training",
                  "Performance monitoring"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-cleaner-green-500 mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-cleaner-green-500" />
                <CardTitle>Flexible After-Hours Service</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-2">
              <ul className="space-y-2">
                {[
                  "Evening and overnight cleaning services",
                  "Weekend availability",
                  "Holiday coverage when needed",
                  "Zero disruption to your daily operations",
                  "Secured facility protocols during off-hours cleaning"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-cleaner-green-500 mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-cleaner-blue-800 mb-4">Bank & Financial Institution Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-cleaner-blue-700 mb-3">Specialized Security Protocols</h4>
              <ul className="space-y-2">
                {[
                  "Comprehensive staff screening and background checks",
                  "Secure access management systems",
                  "Confidentiality agreements for all team members",
                  "Detailed cleaning logs and documentation",
                  "After-hours service coordination with security systems"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-cleaner-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-cleaner-blue-700 mb-3">Enhanced Cleaning Services for Financial Institutions</h4>
              <ul className="space-y-2">
                {[
                  "Private office and cubicle cleaning",
                  "Vault area maintenance (upon authorization)",
                  "ATM vestibule sanitization",
                  "Customer service areas",
                  "Employee break rooms",
                  "Conference rooms",
                  "Drive-through facilities"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-cleaner-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleaningProcess;
