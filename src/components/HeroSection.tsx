
import React from 'react';
import ButtonCTA from './ui/ButtonCTA';

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center relative overflow-hidden min-h-screen pt-20" id="hero">
      {/* Gradient Hive Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-haive-dark-purple to-haive-dark opacity-70 z-0" />
      
      {/* Hexagon Grid Background */}
      <div className="absolute inset-0 bg-[url('/images/hive-pattern.svg')] bg-repeat opacity-10 animate-pulse-teal z-0" />
      
      {/* Content */}
      <div className="container mx-auto relative z-10 text-center px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Deploy AI agents that <span className="gradient-text">actually close tickets and deals.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            Self-host or SaaS. Pay only $0.05 per voice minute.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <ButtonCTA variant="primary" size="lg" onClick={() => window.open("https://speakup.haive.tech/", "_blank")}>Start Free Trial</ButtonCTA>
            <ButtonCTA variant="secondary" size="lg">Book a Demo</ButtonCTA>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
