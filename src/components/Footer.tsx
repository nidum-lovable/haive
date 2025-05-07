
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 bg-black relative border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div className="flex flex-col items-start">
            {/* Make logo bigger and add HaiVE text */}
            <div className="flex items-center mb-2">
              <img 
                src="/lovable-uploads/4c9c5130-a848-44f5-a1a6-d621b3c0dfb0.png" 
                alt="HaiVE Logo" 
                className="h-10 w-auto mr-2"
              />
              <h1 className="text-2xl font-bold text-white">HaiVE</h1>
            </div>
            <p className="text-gray-400 text-sm mt-1">Deploy AI agents that work.</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <a href="#" className="text-gray-400 hover:text-haive-orange transition text-sm">Terms</a>
            <a href="#" className="text-gray-400 hover:text-haive-orange transition text-sm">Privacy</a>
            <a href="#contact" className="text-gray-400 hover:text-haive-orange transition text-sm">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <p className="text-gray-500 text-sm text-center">&copy; {new Date().getFullYear()} HaiVE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
