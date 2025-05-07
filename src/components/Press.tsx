
import React from 'react';

const pressItems = [
  {
    publication: "INDIai",
    logo: "/lovable-uploads/0db5f464-24d4-490b-b028-e85eaa2007f3.png",
    position: "top-left"
  },
  {
    publication: "The Hindu",
    logo: "/lovable-uploads/0db5f464-24d4-490b-b028-e85eaa2007f3.png",
    position: "top-center"
  },
  {
    publication: "Financial Express",
    logo: "/lovable-uploads/0db5f464-24d4-490b-b028-e85eaa2007f3.png",
    position: "top-right"
  },
  {
    publication: "AIM",
    logo: "/lovable-uploads/0db5f464-24d4-490b-b028-e85eaa2007f3.png",
    position: "bottom-left"
  },
  {
    publication: "Outlook Start-Up",
    logo: "/lovable-uploads/0db5f464-24d4-490b-b028-e85eaa2007f3.png",
    position: "bottom-right"
  }
];

const Press = () => {
  return (
    <section id="press" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold mb-20 text-white text-center">
          In the Press
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {pressItems.slice(0, 3).map((item, index) => (
            <div 
              key={index}
              className="flex justify-center items-center"
            >
              <img 
                src={item.logo} 
                alt={item.publication}
                className="max-h-20 max-w-full object-contain" 
              />
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pressItems.slice(3).map((item, index) => (
            <div 
              key={index}
              className="flex justify-center items-center"
            >
              <img 
                src={item.logo} 
                alt={item.publication}
                className="max-h-20 max-w-full object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Press;
