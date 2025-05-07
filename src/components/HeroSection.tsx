
import React from 'react';
import ButtonCTA from './ui/ButtonCTA';

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center relative overflow-hidden" id="hero">
      {/* Gradient Hive Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-haive-dark-purple to-haive-dark opacity-70 z-0" />
      
      {/* Hexagon Grid Background */}
      <div className="absolute inset-0 bg-[url('/images/hive-pattern.svg')] bg-repeat opacity-10 animate-pulse-teal z-0" />
      
      {/* Content */}
      <div className="container mx-auto relative z-10 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Deploy AI agents that <span className="gradient-text">actually close tickets and deals.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            Self-host or SaaS. Pay only $0.05 per voice minute.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ButtonCTA variant="primary" size="lg">Start Free Trial</ButtonCTA>
            <ButtonCTA variant="secondary" size="lg">Book a Demo</ButtonCTA>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-haive-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
