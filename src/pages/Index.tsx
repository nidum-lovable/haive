
import React from 'react';
import ButtonCTA from '@/components/ui/ButtonCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-haive-dark text-white">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Deploy AI agents that <span className="gradient-text">actually close tickets and deals.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            Self-host or SaaS. Pay only $0.05 per voice minute.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <ButtonCTA variant="primary" size="lg">Start Free Trial</ButtonCTA>
            <ButtonCTA variant="secondary" size="lg">Book a Demo</ButtonCTA>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center gradient-text">
            Why Choose HaiVE
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 rounded-lg bg-haive-dark-purple border border-haive-teal/10 hover:border-haive-teal/30 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-white text-center">Data Sovereignty</h3>
              <p className="text-gray-300 text-center">Keep sensitive customer data within your premises and comply with regulations.</p>
            </div>
            
            <div className="p-6 rounded-lg bg-haive-dark-purple border border-haive-teal/10 hover:border-haive-teal/30 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-white text-center">Lower TCO</h3>
              <p className="text-gray-300 text-center">Reduce total cost of ownership with pay-per-use pricing and no hidden fees.</p>
            </div>
            
            <div className="p-6 rounded-lg bg-haive-dark-purple border border-haive-teal/10 hover:border-haive-teal/30 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-white text-center">CPU-friendly</h3>
              <p className="text-gray-300 text-center">Optimized for cost-effective performance on CPU or GPU infrastructure.</p>
            </div>
          </div>
        </div>
        
        {/* Pricing Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center gradient-text">
            Simple Pricing
          </h2>
          
          <div className="max-w-xl mx-auto p-8 rounded-xl bg-haive-dark-purple border border-haive-orange/20 hover:border-haive-orange/40 transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white">Pay Only For What You Use</h3>
              <p className="text-gray-300 mt-2">No hidden fees. No surprises.</p>
            </div>
            
            <div className="flex justify-center items-center mb-8">
              <span className="text-5xl font-bold text-haive-orange">$0.05</span>
              <span className="text-xl text-gray-300 ml-2">per minute</span>
            </div>
            
            <ul className="space-y-3 mb-8 max-w-sm mx-auto">
              <li className="flex items-center">
                <span className="bg-haive-teal/20 p-1 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-haive-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span className="text-gray-300">Self-host or use our cloud</span>
              </li>
              <li className="flex items-center">
                <span className="bg-haive-teal/20 p-1 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-haive-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span className="text-gray-300">Unlimited minutes</span>
              </li>
              <li className="flex items-center">
                <span className="bg-haive-teal/20 p-1 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-haive-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span className="text-gray-300">Free trial available</span>
              </li>
            </ul>
            
            <div className="flex justify-center">
              <ButtonCTA variant="primary">Contact Sales</ButtonCTA>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Get in Touch</h2>
          <p className="text-gray-300 mb-8">Ready to transform your business with AI agents that actually work? Reach out to our team.</p>
          <ButtonCTA variant="primary" size="lg">Book a Demo</ButtonCTA>
        </div>
        
        {/* Footer */}
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400 mb-20">&copy; {new Date().getFullYear()} HaiVE. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
