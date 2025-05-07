import React from 'react';
import { Shield, CloudOff, DollarSign, Clock, Settings, Lock } from 'lucide-react';

const features = [
  {
    title: "Data Sovereignty",
    description: "Keep customer data governed by local law—no cross-border transfers.",
    icon: Shield
  },
  {
    title: "Zero Cloud Leaks",
    description: "Your models run behind your firewall, not a public endpoint.",
    icon: CloudOff
  },
  {
    title: "Predictable Bills",
    description: "Eliminate hidden cloud fees and GPU spot-price shocks with on-prem compute.",
    icon: DollarSign
  },
  {
    title: "Ultra-Low Latency",
    description: "Sub-50 ms round-trip enables real-time voice, vision, and robotics workloads.",
    icon: Clock
  },
  {
    title: "Full Control",
    description: "Swap models, fine-tune offline, and avoid vendor lock-in.",
    icon: Settings
  },
  {
    title: "Enhanced Security",
    description: "Keep your AI models protected behind your enterprise security infrastructure.",
    icon: Lock
  }
];

const WhyOnPremiseAI = () => {
  return (
    <section id="why-on-premise" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-haive-orange to-haive-orange-light text-center">
          Why On-Premise AI?
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-haive-dark-gray border border-haive-orange/20 hover:border-haive-orange/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-haive-orange/10 mr-3">
                    <feature.icon className="text-haive-orange h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOnPremiseAI;
