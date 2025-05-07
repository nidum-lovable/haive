
import React from 'react';

const integrations = [
  { name: "Zendesk", logo: "/images/zendesk.svg" },
  { name: "Zoho", logo: "/images/zoho.svg" },
  { name: "Freshworks", logo: "/images/freshworks.svg" },
  { name: "Twilio", logo: "/images/twilio.svg" },
  { name: "Telynx", logo: "/images/telynx.svg" },
];

const IntegrationsSection = () => {
  return (
    <section className="py-[5%] bg-black" id="integrations">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Integrations</h2>
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 justify-items-center">
            {integrations.map((integration, index) => (
              <div 
                key={index} 
                className="group flex flex-col items-center justify-center"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-haive-dark-gray rounded-lg flex items-center justify-center p-4 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-haive-teal/10">
                  <img 
                    src={integration.logo} 
                    alt={integration.name} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <span className="text-sm text-gray-400 group-hover:text-haive-teal transition-colors">{integration.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
