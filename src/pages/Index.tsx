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
import { useSeo } from '../hooks/use-seo';

export const HOME_TITLE = 'Commercial Carpet & Tile Floor Care Philadelphia | PHL Clean';
export const HOME_DESCRIPTION = 'Commercial carpet cleaning, tile and grout cleaning, re-grout and hard surface floor care in Philadelphia and Bucks County. Free walkthrough: (215) 550-1414.';

const Index = () => {
  useSeo({ title: HOME_TITLE, description: HOME_DESCRIPTION, canonical: 'https://phlclean.com/' });

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
