import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="bg-[url('https://images.unsplash.com/photo-1554475901-4538ddfbccc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')] bg-cover bg-center h-full w-full opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cleaner-blue-700/30 to-cleaner-green-500/20"></div>
      </div>
      
      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cleaner-blue-800 leading-tight mb-6 animate-fade-in">
            Professional Cleaning Services for Philadelphia Businesses
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Janitorial and commercial cleaning services for Philadelphia-area businesses — daily office cleaning, carpet care, and deep cleans that create healthier, more professional work environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button asChild className="bg-cleaner-blue-700 hover:bg-cleaner-blue-800 text-white px-8 py-6 text-lg">
              <a href="#contact">Schedule a Walkthrough</a>
            </Button>
            <Button asChild variant="outline" className="border-cleaner-blue-700 text-cleaner-blue-700 hover:bg-cleaner-blue-50 px-8 py-6 text-lg">
              <a href="tel:+12155501414">
                <Phone className="mr-2 h-5 w-5" />
                (215) 550-1414
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
