import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
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
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-cleaner-blue-700">
                PHL
              </span>
              <span className="ml-1 text-cleaner-green-500 text-2xl">Clean</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#services" className="text-gray-600 hover:text-cleaner-blue-700 transition-colors font-medium">
              Services
            </a>
            <a href="/#about" className="text-gray-600 hover:text-cleaner-blue-700 transition-colors font-medium">
              About Us
            </a>
            <a href="/#why-choose-us" className="text-gray-600 hover:text-cleaner-blue-700 transition-colors font-medium">
              Why Choose Us
            </a>
            <a href="/blog" className="text-gray-600 hover:text-cleaner-blue-700 transition-colors font-medium">
              Blog
            </a>
          </div>

          {/* Call to action buttons (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <Button asChild variant="outline" className="border-cleaner-blue-700 text-cleaner-blue-700 hover:bg-cleaner-blue-50">
              <a href="tel:+12155501414">
                <Phone className="mr-2 h-4 w-4" />
                (215) 550-1414
              </a>
            </Button>
            <Button asChild className="bg-cleaner-blue-700 hover:bg-cleaner-blue-800 text-white">
              <a href="/#contact">Schedule a Walkthrough</a>
            </Button>
          </div>

          {/* Mobile call button + menu button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="tel:+12155501414"
              aria-label="Call PHL Clean"
              className="p-2 rounded-full bg-cleaner-blue-700 text-white hover:bg-cleaner-blue-800 transition-colors"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
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
              href="/#services"
              className="text-gray-600 hover:text-cleaner-blue-700 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="/#about"
              className="text-gray-600 hover:text-cleaner-blue-700 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="/#why-choose-us"
              className="text-gray-600 hover:text-cleaner-blue-700 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Choose Us
            </a>
            <a
              href="/blog"
              className="text-gray-600 hover:text-cleaner-blue-700 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
            <Button asChild className="bg-cleaner-blue-700 hover:bg-cleaner-blue-800 text-white w-full">
              <a href="/#contact" onClick={() => setIsMenuOpen(false)}>Schedule a Walkthrough</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
