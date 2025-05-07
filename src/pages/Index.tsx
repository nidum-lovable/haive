
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhyOnPremiseAISection from '@/components/WhyOnPremiseAISection';
import WhyHaiveSection from '@/components/WhyHaiveSection';
import PricingSection from '@/components/PricingSection';
import TeamSection from '@/components/TeamSection';
import InThePressSection from '@/components/InThePressSection';
import FAQsSection from '@/components/FAQsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-haive-dark text-white overflow-x-hidden">
      <Header />
      <main className="relative">
        <HeroSection />
        <WhyOnPremiseAISection />
        <WhyHaiveSection />
        <PricingSection />
        <TeamSection />
        <InThePressSection />
        <FAQsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
