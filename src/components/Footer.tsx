import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cleaner-blue-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-white">
                PHL
              </span>
              <span className="ml-1 text-cleaner-green-500 text-2xl">Clean</span>
            </div>
            <p className="text-gray-300 mb-6">
              Professional cleaning services for businesses throughout Philadelphia and surrounding counties. We deliver exceptional results that exceed expectations.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/phl.clean"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow PHL Clean on Instagram"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="/services/commercial-cleaning" className="text-gray-300 hover:text-white transition-colors">Commercial Cleaning</a>
              </li>
              <li>
                <a href="/services/carpet-cleaning" className="text-gray-300 hover:text-white transition-colors">Carpet Cleaning</a>
              </li>
              <li>
                <a href="/services/deep-cleaning" className="text-gray-300 hover:text-white transition-colors">Deep Cleaning</a>
              </li>
              <li>
                <a href="/services/floor-maintenance" className="text-gray-300 hover:text-white transition-colors">Floor Maintenance</a>
              </li>
              <li>
                <a href="/services/medical-facility-cleaning" className="text-gray-300 hover:text-white transition-colors">Medical Facility Cleaning</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="/#about" className="text-gray-300 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="/team" className="text-gray-300 hover:text-white transition-colors">Our Team</a>
              </li>
              <li>
                <a href="/#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</a>
              </li>
              <li>
                <a href="/#contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Service Areas</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">Philadelphia County</li>
              <li className="text-gray-300">Montgomery County</li>
              <li className="text-gray-300">Delaware County</li>
              <li className="text-gray-300">Bucks County</li>
              <li className="text-gray-300">Chester County</li>
            </ul>
            
            <div className="mt-6">
              <p className="text-gray-300 mb-2">Contact Us:</p>
              <p className="text-gray-300">
                <a href="tel:+12155501414" className="hover:text-white transition-colors">(215) 550-1414</a>
              </p>
              <p className="text-gray-300">
                <a href="mailto:info@phlclean.com" className="hover:text-white transition-colors">info@phlclean.com</a>
              </p>
              <p className="text-gray-300 text-sm mt-2">621 Bristol Pike, Suite C<br/>Bensalem, PA 19020</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} PHL Clean. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Locally owned & operated · Bensalem, PA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
