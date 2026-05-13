import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Award, Shield, Heart, Users } from 'lucide-react';

const Team = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-cleaner-blue-700" />,
      title: "Trust & Integrity",
      description: "Every team member is background-checked, insured, and trained to treat your space with the same respect they'd give their own home."
    },
    {
      icon: <Award className="h-8 w-8 text-cleaner-blue-700" />,
      title: "Expertise You Can See",
      description: "Our crew members average 5+ years of commercial cleaning experience, certified in everything from carpet care to medical-grade disinfection."
    },
    {
      icon: <Heart className="h-8 w-8 text-cleaner-blue-700" />,
      title: "Pride in the Work",
      description: "We hire people who care. The result: cleaning that doesn't just look done — it looks done right, every single visit."
    },
    {
      icon: <Users className="h-8 w-8 text-cleaner-blue-700" />,
      title: "Local & Accountable",
      description: "We're based in Bensalem and live in the communities we serve. When something needs attention, you talk to a real person — usually the owner."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-cleaner-blue-700/10 to-cleaner-green-500/10"></div>
          </div>
          <div className="container-custom relative z-10 py-20 md:py-28">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-cleaner-blue-800 mb-6">
                Meet the PHL Clean Team
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                Behind every spotless office is a team of trained, trusted professionals who take pride in what they do. Here's who we are and what we stand for.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-4">What Sets Our Team Apart</h2>
              <div className="h-1 w-24 bg-cleaner-green-500 mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg">
                A cleaning service is only as good as the people doing the work. We invest heavily in finding, training, and keeping the right ones.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((v, i) => (
                <div key={i} className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="mb-4">{v.icon}</div>
                  <h3 className="text-xl font-bold text-cleaner-blue-800 mb-3">{v.title}</h3>
                  <p className="text-gray-600">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership placeholder — Joe to add real bios/photos */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-4">Leadership</h2>
              <div className="h-1 w-24 bg-cleaner-green-500 mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg">
                PHL Clean is locally owned and operated, founded on the belief that a cleaning company should answer to its customers — not to a corporate office in another state.
              </p>
            </div>
            <div className="max-w-2xl mx-auto bg-cleaner-blue-50 border border-cleaner-blue-100 rounded-lg p-8 text-center">
              <p className="text-gray-700 mb-2">
                <strong className="text-cleaner-blue-800">Want to know more about our team?</strong>
              </p>
              <p className="text-gray-600">
                We'd rather show you in person. Call or schedule a walkthrough and meet the people who'll be taking care of your space.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-cleaner-blue-700 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to work with our team?</h2>
              <p className="text-lg text-blue-100 mb-8">
                Get a free quote in under a minute, or call us directly and talk to a real person — no phone trees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-white text-cleaner-blue-700 hover:bg-gray-100 px-8 py-6 text-lg">
                  <a href="/#contact">Get a Free Quote</a>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                  <a href="tel:+12155501414">
                    <Phone className="mr-2 h-5 w-5" />
                    (215) 550-1414
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
