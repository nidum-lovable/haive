
import React from 'react';

const pressItems = [
  {
    publication: "INDIAi",
    logo: "/lovable-uploads/c0bd72c3-f3b5-4b0d-acb2-a7667710bde9.png",
    position: "top-left",
    link: "https://indiaai.gov.in/article/meet-malar-teacher-an-autonomous-ai-university-professor"
  },
  {
    publication: "The Hindu",
    logo: "/lovable-uploads/b10e2301-ab5a-4de4-9b2a-6b0d9d6cc6a1.png",
    position: "top-center",
    link: "https://www.thehindu.com/news/cities/chennai/indias-first-ai-focused-technology-business-incubator-unveiled-in-tamil-nadu/article67513867.ece"
  },
  {
    publication: "Financial Express",
    logo: "/lovable-uploads/f23f60d0-2969-4c47-9ab8-c99f6f18d6b9.png",
    position: "top-right",
    link: "https://www.financialexpress.com/business/digital-transformation-haive-introduces-self-hosted-multi-role-ai-assistantnbsp-3372568/"
  },
  {
    publication: "AIM",
    logo: "/lovable-uploads/d6da7007-2534-4fab-80e3-0e8e5a51e3b7.png",
    position: "bottom-left",
    link: "https://analyticsindiamag.com/chennai-based-startup-behind-first-ai-university-professor-launches-personal-ai-home-studio/"
  },
  {
    publication: "Outlook Start-Up",
    logo: "/lovable-uploads/6429e0b4-f2d1-459a-9aef-c517ffd293c0.png",
    position: "bottom-right",
    link: "https://startup.outlookindia.com/sector/saas/tamil-nadu-minister-for-msme-launches-ai-venture-factory-news-9824"
  }
];

const InThePressSection = () => {
  return (
    <section className="py-[5%] bg-black" id="press">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold mb-20 text-white text-center">
          In the Press
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {pressItems.slice(0, 3).map((item, index) => (
            <div 
              key={index}
              className={`flex justify-center items-center hover:opacity-80 transition-opacity h-36 ${item.publication === "INDIAi" ? "h-96" : ""}`}
            >
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block h-full flex items-center">
                  <img 
                    src={item.logo} 
                    alt={item.publication}
                    className={`max-w-full object-contain ${item.publication === "INDIAi" ? "max-h-96" : "max-h-32"}`} 
                  />
                </a>
              ) : (
                <img 
                  src={item.logo} 
                  alt={item.publication}
                  className={`max-w-full object-contain ${item.publication === "INDIAi" ? "max-h-96" : "max-h-32"}`} 
                />
              )}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pressItems.slice(3).map((item, index) => (
            <div 
              key={index}
              className="flex justify-center items-center hover:opacity-80 transition-opacity h-36"
            >
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block h-full flex items-center">
                  <img 
                    src={item.logo} 
                    alt={item.publication}
                    className="max-h-32 max-w-full object-contain" 
                  />
                </a>
              ) : (
                <img 
                  src={item.logo} 
                  alt={item.publication}
                  className="max-h-32 max-w-full object-contain" 
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InThePressSection;
