import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ComprehensiveServices from '../components/ComprehensiveServices';
import Services from '../components/Services';
import SustainableCleaning from '../components/SustainableCleaning';
import IndustriesServed from '../components/IndustriesServed';
import AboutUs from '../components/AboutUs';
import CleaningProcess from '../components/CleaningProcess';
import SecurityAndTrust from '../components/SecurityAndTrust';
import WhyChooseUs from '../components/WhyChooseUs';
import WhyChooseLocal from '../components/WhyChooseLocal';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ComprehensiveServices />
        <Services />
        <SustainableCleaning />
        <IndustriesServed />
        <AboutUs />
        <CleaningProcess />
        <SecurityAndTrust />
        <WhyChooseUs />
        <WhyChooseLocal />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
