
import React from 'react';

const pressItems = [
  {
    publication: "TechCrunch",
    quote: "HaiVE is revolutionizing on-premise AI deployment with their innovative approach to voice agents.",
    logo: "/lovable-uploads/1a8638bb-360e-4eb9-8ba9-083d2420d116.png"
  },
  {
    publication: "Forbes",
    quote: "One of the most promising AI startups focusing on enterprise data sovereignty and security.",
    logo: "/lovable-uploads/328e991c-71f4-44d3-b8b5-dba1d03dbde7.png"
  },
  {
    publication: "The Wall Street Journal",
    quote: "HaiVE's cost-effective AI solution is making waves in customer service automation.",
    logo: "/lovable-uploads/3958f6fb-cf21-45c1-b313-bf3b035d9387.png"
  }
];

const InThePressSection = () => {
  return (
    <section className="py-[5%] bg-black" id="press">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">In the Press</h2>
        
        <div className="max-w-5xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pressItems.map((item, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-haive-dark-gray border border-gray-800 hover:border-haive-teal/30 transition-all duration-300"
              >
                <div className="h-16 mb-4 flex items-center">
                  <img 
                    src={item.logo} 
                    alt={item.publication} 
                    className="max-h-full max-w-[180px] object-contain"
                  />
                </div>
                <p className="text-gray-300 italic mb-3">"{item.quote}"</p>
                <p className="text-sm text-haive-teal">— {item.publication}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InThePressSection;
