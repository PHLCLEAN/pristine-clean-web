import React from 'react';
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <AspectRatio ratio={16 / 9}>
                  <img 
                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Sleek Modern Office Workspace" 
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={675}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-cleaner-blue-700 text-white p-6 rounded-lg shadow-lg hidden md:block">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">Years of Experience</div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-6">About PHL Clean</h2>
            <div className="h-1 w-16 bg-cleaner-green-500 mb-8"></div>
            
            <p className="text-gray-700 mb-6">
              As a locally owned and operated business, PHL Clean is committed to providing exceptional cleaning services to businesses throughout Philadelphia, Montgomery, Delaware, Bucks, and Chester counties. Our passion for excellence has quickly established us as a trusted partner for businesses seeking reliable cleaning solutions.
            </p>
            
            <p className="text-gray-700 mb-6">
              Our team consists of highly trained Philadelphia-area professionals who take pride in their work and understand the importance of maintaining clean, healthy work environments. We use professional-grade products and advanced equipment to deliver superior results across the Greater Philadelphia region.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <span className="text-cleaner-green-500 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Professional Team</h3>
                  <p className="text-gray-600">Fully trained, background-checked staff</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-cleaner-green-500 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Quality Guaranteed</h3>
                  <p className="text-gray-600">Satisfaction guaranteed on every service</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-cleaner-green-500 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Thorough</h3>
                  <p className="text-gray-600">Professional-grade products and methods</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-cleaner-green-500 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Insured & Bonded</h3>
                  <p className="text-gray-600">Fully insured services for your peace of mind</p>
                </div>
              </div>
            </div>
            
            <Button asChild className="bg-cleaner-blue-700 hover:bg-cleaner-blue-800 text-white px-8 py-6">
              <a href="#contact">Schedule a Consultation</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
