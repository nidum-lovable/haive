
import React from 'react';

const integrations = [
  { name: "Zendesk", logo: "/images/zendesk.svg" },
  { name: "Zoho", logo: "/images/zoho.svg" },
  { name: "Freshworks", logo: "/images/freshworks.svg" },
  { name: "Twilio", logo: "/images/twilio.svg" },
  { name: "Telynx", logo: "/images/telynx.svg" },
  { name: "PDF", logo: "/images/pdf.svg" },
  { name: "DOCX", logo: "/images/docx.svg" },
  { name: "XLSX", logo: "/images/xlsx.svg" },
  { name: "PPTX", logo: "/images/pptx.svg" },
];

const IntegrationsSection = () => {
  return (
    <section className="py-20 bg-haive-dark" id="integrations">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Integrations</h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
            {integrations.map((integration, index) => (
              <div 
                key={index} 
                className="group flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-haive-dark-gray rounded-lg flex items-center justify-center p-4 mb-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-haive-teal/10">
                  <div className="w-full h-full bg-white/10 rounded flex items-center justify-center">
                    {/* Placeholder for logo - in a real implementation, you would use actual SVGs */}
                    <span className="text-haive-teal text-xs">{integration.name}</span>
                  </div>
                </div>
                <span className="text-sm text-gray-400">{integration.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
