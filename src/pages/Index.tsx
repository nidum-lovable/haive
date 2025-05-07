
import React from 'react';
import WhyOnPremiseAISection from '@/components/WhyOnPremiseAISection';
import WhyHaiveSection from '@/components/WhyHaiveSection';
import PricingSection from '@/components/PricingSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import TechBadgesSection from '@/components/TechBadgesSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import FAQsSection from '@/components/FAQsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-haive-dark text-white">
      <main className="pt-8">
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
        <WhyOnPremiseAISection />
        <WhyHaiveSection />
        <PricingSection />
        <TeamSection />
        <TechBadgesSection />
        <IntegrationsSection />
        <FAQsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
