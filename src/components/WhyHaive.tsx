
import React from 'react';
import { Database, TrendingDown, Cpu } from 'lucide-react';

const features = [
  {
    title: "Data Sovereignty",
    description: "Keep sensitive customer data within your premises and comply with regulations.",
    icon: Database
  }, 
  {
    title: "Lower TCO",
    description: "Reduce total cost of ownership with pay-per-use pricing and no hidden fees.",
    icon: TrendingDown
  }, 
  {
    title: "CPU-friendly",
    description: "Optimized for cost-effective performance on CPU or GPU infrastructure.",
    icon: Cpu
  }
];

const WhyHaive = () => {
  return (
    <section id="why-haive" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-haive-orange to-haive-orange-light text-center">
          Why HaiVE
        </h2>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg bg-haive-dark-purple border border-haive-orange/10 hover:border-haive-orange/30 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-haive-orange/10 rounded-full group-hover:bg-haive-orange/20 transition-all">
                  <feature.icon className="h-8 w-8 text-haive-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHaive;
