
import React from 'react';

const Hero = () => {
  return (
    <section className="flex items-center justify-center min-h-screen pt-20 pb-16 bg-black" id="hero">
      {/* Gradient Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-haive-dark-purple to-black opacity-70 z-0" />
      
      {/* Hexagon Grid Background */}
      <div className="absolute inset-0 bg-[url('/images/hive-pattern.svg')] bg-repeat opacity-10 z-0" />
      
      {/* Content */}
      <div className="container mx-auto relative z-10 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Deploy AI agents that <span className="text-transparent bg-clip-text bg-gradient-to-r from-haive-orange to-haive-orange-light">actually close tickets and deals.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            Self-host or SaaS. Pay only $0.05 per voice minute.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a 
              href="https://speakup.haive.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-haive-orange hover:bg-haive-orange-light text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Start Free Trial
            </a>
            <button className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-6 rounded-lg border border-white/20 transition-colors">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
