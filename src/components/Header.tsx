
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-haive-dark/80 backdrop-blur-lg shadow-lg' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-haive-teal">Hai</span>
            <span className="text-white">VE</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#how-it-works" className="text-gray-300 hover:text-haive-teal transition">How It Works</a>
          <a href="#team" className="text-gray-300 hover:text-haive-teal transition">Our Team</a>
          <a href="#contact" className="text-gray-300 hover:text-haive-teal transition">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-haive-dark-purple animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <a 
              href="#how-it-works" 
              className="text-gray-300 hover:text-haive-teal transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#team" 
              className="text-gray-300 hover:text-haive-teal transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Team
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-haive-teal transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
