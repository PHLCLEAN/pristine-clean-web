
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
