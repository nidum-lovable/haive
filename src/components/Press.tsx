
import React from 'react';

const pressItems = [
  {
    publication: "INDIAi",
    logo: "/lovable-uploads/9d5ea631-4e7c-4bc9-9714-098bb2ebee66.png",
    position: "top-left",
    link: "https://indiaai.gov.in"
  },
  {
    publication: "The Hindu",
    logo: "/lovable-uploads/ce1bdf26-c1e8-4854-b024-368c3f92238e.png",
    position: "top-center",
    link: "https://www.thehindu.com/news/cities/chennai/indias-first-ai-focused-technology-business-incubator-unveiled-in-tamil-nadu/article67513867.ece"
  },
  {
    publication: "Financial Express",
    logo: "/lovable-uploads/5f8968d2-74c4-4809-9bd3-ed470d7e756b.png",
    position: "top-right",
    link: "https://www.financialexpress.com/business/digital-transformation-haive-introduces-self-hosted-multi-role-ai-assistantnbsp-3372568/"
  },
  {
    publication: "AIM",
    logo: "/lovable-uploads/eb0c88b7-7be5-4438-9f87-de5ac6989e67.png",
    position: "bottom-left",
    link: "https://analyticsindiamag.com/chennai-based-startup-behind-first-ai-university-professor-launches-personal-ai-home-studio/"
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
              className="flex justify-center items-center hover:opacity-80 transition-opacity"
            >
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                  <img 
                    src={item.logo} 
                    alt={item.publication}
                    className="max-h-24 max-w-full object-contain" 
                  />
                </a>
              ) : (
                <img 
                  src={item.logo} 
                  alt={item.publication}
                  className="max-h-20 max-w-full object-contain" 
                />
              )}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pressItems.slice(3).map((item, index) => (
            <div 
              key={index}
              className="flex justify-center items-center hover:opacity-80 transition-opacity"
            >
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                  <img 
                    src={item.logo} 
                    alt={item.publication}
                    className="max-h-24 max-w-full object-contain" 
                  />
                </a>
              ) : (
                <img 
                  src={item.logo} 
                  alt={item.publication}
                  className="max-h-20 max-w-full object-contain" 
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Press;
