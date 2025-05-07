
import React, { useEffect } from 'react';
import WhyOnPremiseAISection from '@/components/WhyOnPremiseAISection';
import WhyHaiveSection from '@/components/WhyHaiveSection';
import PricingSection from '@/components/PricingSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import TechBadgesSection from '@/components/TechBadgesSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import FAQsSection from '@/components/FAQsSection';
import HowItWorksSection from '@/components/HowItWorksSection';

const Index = () => {
  // Effect to ensure the widget is properly initialized and visible
  useEffect(() => {
    // Add a small delay to make sure the widget loads correctly
    const timer = setTimeout(() => {
      const widgetElement = document.querySelector('[data-haive-widget]');
      if (widgetElement) {
        // Ensure the widget is visible
        widgetElement.setAttribute('style', 'opacity: 1 !important; visibility: visible !important; z-index: 9999 !important; position: fixed !important; bottom: 20px !important; right: 20px !important;');
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-haive-dark text-white overflow-x-hidden">
      <main className="pt-8 relative">
        <section id="hero" className="bg-black">
          <div className="container mx-auto px-4 py-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Deploy AI agents that <span className="gradient-text">actually close tickets and deals.</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Self-host or SaaS. Pay only $0.05 per voice minute.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <button className="bg-haive-orange hover:bg-haive-orange-light text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Start Free Trial
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-6 rounded-lg border border-white/20 transition-colors">
                Book a Demo
              </button>
            </div>
          </div>
        </section>
        
        <HowItWorksSection />
        <WhyOnPremiseAISection />
        <WhyHaiveSection />
        <PricingSection />
        <TeamSection />
        <TechBadgesSection />
        <IntegrationsSection />
        <FAQsSection />
        <ContactSection />
      </main>
      
      {/* Empty div to ensure proper bottom spacing */}
      <div className="h-24"></div>
    </div>
  );
};

export default Index;
