
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="bg-[url('https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3')] bg-cover bg-center h-full w-full opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cleaner-blue-700/30 to-cleaner-green-500/20"></div>
      </div>
      
      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cleaner-blue-800 leading-tight mb-6 animate-fade-in">
            Professional Cleaning Services for Philadelphia Businesses
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Serving Philadelphia and surrounding counties with exceptional commercial cleaning, carpet cleaning, and deep cleaning services that create healthier work environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button asChild className="bg-cleaner-blue-700 hover:bg-cleaner-blue-800 text-white px-8 py-6 text-lg">
              <a href="#contact">Get a Free Quote</a>
            </Button>
            <Button asChild variant="outline" className="border-cleaner-blue-700 text-cleaner-blue-700 hover:bg-cleaner-blue-50 px-8 py-6 text-lg">
              <a href="#services">Our Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
