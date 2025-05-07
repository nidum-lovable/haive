
import React, { useState } from 'react';
import ButtonCTA from './ui/ButtonCTA';

const WhyOnPremiseAISection = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <section 
      id="why-on-prem-ai" 
      className="py-20 bg-haive-dark-purple relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Why On-Premise AI?</h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <button 
              onClick={toggleDetails}
              className="flex items-center justify-center gap-2 text-haive-orange hover:text-haive-orange-light transition-colors mx-auto cursor-pointer"
            >
              <span className="font-medium">See the five biggest reasons</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
          
          {isOpen && (
            <div className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                <div className="p-6 rounded-xl bg-haive-dark-gray border border-haive-orange/20 hover:border-haive-orange/50 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-white">Data Sovereignty</h3>
                  <p className="text-gray-300">Keep customer data governed by local law—no cross-border transfers.</p>
                </div>
                
                <div className="p-6 rounded-xl bg-haive-dark-gray border border-haive-orange/20 hover:border-haive-orange/50 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-white">Zero Cloud Leaks</h3>
                  <p className="text-gray-300">Your models run behind your firewall, not a public endpoint.</p>
                </div>
                
                <div className="p-6 rounded-xl bg-haive-dark-gray border border-haive-orange/20 hover:border-haive-orange/50 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-white">Predictable Bills</h3>
                  <p className="text-gray-300">Eliminate hidden cloud fees and GPU spot-price shocks with on-prem compute.</p>
                </div>
                
                <div className="p-6 rounded-xl bg-haive-dark-gray border border-haive-orange/20 hover:border-haive-orange/50 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-white">Ultra-Low Latency</h3>
                  <p className="text-gray-300">Sub-50 ms round-trip enables real-time voice, vision, and robotics workloads.</p>
                </div>
                
                <div className="p-6 rounded-xl bg-haive-dark-gray border border-haive-orange/20 hover:border-haive-orange/50 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-white">Full Control</h3>
                  <p className="text-gray-300">Swap models, fine-tune offline, and avoid vendor lock-in.</p>
                </div>
              </div>
              
              <div className="flex justify-center mt-10">
                <ButtonCTA variant="secondary" size="lg">
                  See HaiVE in action
                </ButtonCTA>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyOnPremiseAISection;
