import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import HomePhotos from '../components/HomePhotos';
import IndustriesServed from '../components/IndustriesServed';
import AboutUs from '../components/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs';
import Walkthrough from '../components/Walkthrough';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-phl-ground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HomePhotos />
        <IndustriesServed />
        <AboutUs />
        <WhyChooseUs />
        <Walkthrough />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
