
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-haive-dark text-white">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Deploy AI agents that <span className="gradient-text">actually close tickets and deals.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            Self-host or SaaS. Pay only $0.05 per voice minute.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button className="bg-gradient-to-r from-haive-orange to-haive-orange-light text-white hover:shadow-lg hover:shadow-haive-orange/20 rounded-md font-medium transition-all duration-200 text-lg py-6 px-8">
              Start Free Trial
            </button>
            <button className="bg-transparent border-2 border-haive-orange text-haive-orange hover:bg-haive-orange/10 rounded-md font-medium transition-all duration-200 text-lg py-6 px-8">
              Book a Demo
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
