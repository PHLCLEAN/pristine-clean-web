
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold text-cleaner-blue-700">
                PristineClean
              </span>
              <span className="ml-1 text-cleaner-green-500 text-2xl">Pro</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-cleaner-blue-700 transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="text-gray-600 hover:text-cleaner-blue-700 transition-colors font-medium">
              About Us
            </a>
            <a href="#why-choose-us" className="text-gray-600 hover:text-cleaner-blue-700 transition-colors font-medium">
              Why Choose Us
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-cleaner-blue-700 transition-colors font-medium">
              Testimonials
            </a>
          </div>

          {/* Call to action button */}
          <div className="hidden md:block">
            <Button asChild className="bg-cleaner-blue-700 hover:bg-cleaner-blue-800 text-white">
              <a href="#contact">Get a Free Quote</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-600 hover:text-cleaner-blue-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "md:hidden",
            isMenuOpen ? "block" : "hidden"
          )}
        >
          <div className="flex flex-col space-y-3 pt-3 pb-4">
            <a
              href="#services"
              className="text-gray-600 hover:text-cleaner-blue-700 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-cleaner-blue-700 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#why-choose-us"
              className="text-gray-600 hover:text-cleaner-blue-700 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Choose Us
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-cleaner-blue-700 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <Button asChild className="bg-cleaner-blue-700 hover:bg-cleaner-blue-800 text-white w-full">
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Get a Free Quote</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
