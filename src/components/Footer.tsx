
import React from 'react';

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
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.15l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Commercial Cleaning</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Carpet Cleaning</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Deep Cleaning</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Window Cleaning</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Floor Maintenance</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Our Team</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a>
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
              <p className="text-gray-300">(215) 550-1414</p>
              <p className="text-gray-300">sales@phlclean.com</p>
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
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
