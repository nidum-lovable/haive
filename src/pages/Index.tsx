
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import PricingSection from '@/components/PricingSection';
import WhyHaiveSection from '@/components/WhyHaiveSection';
import WhyOnPremiseAISection from '@/components/WhyOnPremiseAISection';
import TechBadgesSection from '@/components/TechBadgesSection';
import Footer from '@/components/Footer';

// Create public/images directory for assets
// These are placeholder declarations - in a real implementation, you'd have actual SVG files
const mockImages = [
  "/images/hive-pattern.svg",
  "/images/zendesk.svg",
  "/images/zoho.svg",
  "/images/freshworks.svg",
  "/images/twilio.svg",
  "/images/telynx.svg",
  "/images/pdf.svg",
  "/images/docx.svg",
  "/images/xlsx.svg",
  "/images/pptx.svg",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-haive-dark text-white">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <IntegrationsSection />
        <PricingSection />
        <WhyHaiveSection />
        <WhyOnPremiseAISection />
        <TechBadgesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
