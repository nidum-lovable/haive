
import React from 'react';
import ButtonCTA from './ui/ButtonCTA';

const Footer = () => {
  return (
    <footer className="py-10 bg-haive-dark-purple relative border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div>
            <h1 className="text-2xl font-bold">
              <span className="text-haive-teal">Hai</span>
              <span className="text-white">VE</span>
            </h1>
            <p className="text-gray-400 text-sm mt-1">Deploy AI agents that work.</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <a href="#" className="text-gray-400 hover:text-haive-teal transition text-sm">Terms</a>
            <a href="#" className="text-gray-400 hover:text-haive-teal transition text-sm">Privacy</a>
            <a href="#contact" className="text-gray-400 hover:text-haive-teal transition text-sm">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <p className="text-gray-500 text-sm text-center">&copy; {new Date().getFullYear()} HaiVE. All rights reserved.</p>
        </div>
      </div>
      
      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-haive-dark-gray/80 backdrop-blur-lg py-4 border-t border-haive-teal/20 z-40">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-center items-center gap-4">
          <ButtonCTA variant="primary">Get Started – Free Trial</ButtonCTA>
          <ButtonCTA variant="secondary">Create your Agent Army</ButtonCTA>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
