
import React from 'react';
import { Shield, CloudOff, DollarSign, Clock, Settings, Play } from 'lucide-react';
import ButtonCTA from './ui/ButtonCTA';

const WhyOnPremiseAISection = () => {
  return (
    <section 
      id="why-on-prem-ai" 
      className="py-20 bg-haive-dark-purple relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Why On-Premise AI?</h2>
        
        <div className="max-w-5xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="p-6 rounded-xl bg-haive-dark-gray border border-haive-orange/20 hover:border-haive-orange/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-haive-orange/10 mr-3">
                  <Shield className="text-haive-orange h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Data Sovereignty</h3>
              </div>
              <p className="text-gray-300">Keep customer data governed by local law—no cross-border transfers.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-haive-dark-gray border border-haive-orange/20 hover:border-haive-orange/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-haive-orange/10 mr-3">
                  <CloudOff className="text-haive-orange h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Zero Cloud Leaks</h3>
              </div>
              <p className="text-gray-300">Your models run behind your firewall, not a public endpoint.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-haive-dark-gray border border-haive-orange/20 hover:border-haive-orange/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-haive-orange/10 mr-3">
                  <DollarSign className="text-haive-orange h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Predictable Bills</h3>
              </div>
              <p className="text-gray-300">Eliminate hidden cloud fees and GPU spot-price shocks with on-prem compute.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-haive-dark-gray border border-haive-orange/20 hover:border-haive-orange/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-haive-orange/10 mr-3">
                  <Clock className="text-haive-orange h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Ultra-Low Latency</h3>
              </div>
              <p className="text-gray-300">Sub-50 ms round-trip enables real-time voice, vision, and robotics workloads.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-haive-dark-gray border border-haive-orange/20 hover:border-haive-orange/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-haive-orange/10 mr-3">
                  <Settings className="text-haive-orange h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Full Control</h3>
              </div>
              <p className="text-gray-300">Swap models, fine-tune offline, and avoid vendor lock-in.</p>
            </div>
            
            <ButtonCTA 
              variant="secondary" 
              className="p-6 rounded-xl bg-haive-dark-gray border border-haive-orange/20 hover:border-haive-orange/50 transition-all duration-300 flex flex-col items-start justify-center h-full"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-haive-orange/10 mr-3">
                  <Play className="text-haive-orange h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-white">See HaiVE in action</h3>
              </div>
              <p className="text-gray-300">Experience the power and flexibility of on-premise AI firsthand.</p>
            </ButtonCTA>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOnPremiseAISection;
