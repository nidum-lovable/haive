
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-black/80 backdrop-blur-lg shadow-lg' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-haive-orange">Hai</span>
            <span className="text-white">VE</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#why-on-premise" className="text-gray-300 hover:text-haive-orange transition">Why On-Premise</a>
          <a href="#why-haive" className="text-gray-300 hover:text-haive-orange transition">Why HaiVE</a>
          <a href="#pricing" className="text-gray-300 hover:text-haive-orange transition">Pricing</a>
          <a href="#team" className="text-gray-300 hover:text-haive-orange transition">Team</a>
          <a href="#press" className="text-gray-300 hover:text-haive-orange transition">Press</a>
          <a href="#faqs" className="text-gray-300 hover:text-haive-orange transition">FAQs</a>
          <a href="#contact" className="text-gray-300 hover:text-haive-orange transition">Contact</a>
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
        <div className="md:hidden bg-black animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <a 
              href="#why-on-premise" 
              className="text-gray-300 hover:text-haive-orange transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why On-Premise
            </a>
            <a 
              href="#why-haive" 
              className="text-gray-300 hover:text-haive-orange transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why HaiVE
            </a>
            <a 
              href="#pricing" 
              className="text-gray-300 hover:text-haive-orange transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#team" 
              className="text-gray-300 hover:text-haive-orange transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Team
            </a>
            <a 
              href="#press" 
              className="text-gray-300 hover:text-haive-orange transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Press
            </a>
            <a 
              href="#faqs" 
              className="text-gray-300 hover:text-haive-orange transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQs
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-haive-orange transition py-2"
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
