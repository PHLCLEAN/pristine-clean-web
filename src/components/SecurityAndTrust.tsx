
import React from 'react';
import { Check, Shield } from 'lucide-react';

const SecurityAndTrust = () => {
  return (
    <section id="security-trust" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-4">Security & Trust</h2>
          <div className="h-1 w-24 bg-cleaner-green-500 mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-cleaner-blue-700 mr-3" />
              <h3 className="text-2xl font-bold text-cleaner-blue-800">Your Security is Our Priority</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Comprehensive background checks on all staff members",
                "Criminal record screening",
                "Drug testing protocols",
                "Fully bonded and insured employees",
                "Strict confidentiality agreements",
                "Secure key and access code management",
                "Uniformed, identifiable staff"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-cleaner-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-cleaner-blue-800 mb-6">Staff Training & Development</h3>
            <ul className="space-y-3">
              {[
                "Detailed security protocols",
                "Proper handling of secure areas",
                "Emergency response procedures",
                "Regular safety updates",
                "Ongoing professional development"
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
    </section>
  );
};

export default SecurityAndTrust;
