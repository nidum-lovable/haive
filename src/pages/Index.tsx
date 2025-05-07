
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyOnPremiseAI from '@/components/WhyOnPremiseAI';
import WhyHaive from '@/components/WhyHaive';
import Pricing from '@/components/Pricing';
import Team from '@/components/Team';
import Press from '@/components/Press';
import FAQs from '@/components/FAQs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <WhyOnPremiseAI />
        <WhyHaive />
        <Pricing />
        <Team />
        <Press />
        <FAQs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
