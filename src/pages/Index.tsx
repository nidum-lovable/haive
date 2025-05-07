
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

// Create public/images directory for assets
// These are placeholder declarations - in a real implementation, you'd have actual SVG files
const mockImages = [
  "/images/hive-pattern.svg",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-haive-dark text-white">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
