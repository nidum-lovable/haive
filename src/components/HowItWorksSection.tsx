
import React from 'react';

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-haive-dark to-haive-dark-purple" id="how-it-works">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">How It Works</h2>
        
        <div className="max-w-4xl mx-auto">
          <div>
            <span className="text-haive-orange text-lg font-medium mb-6 block">
              See how agent creation works
            </span>
            
            <div className="grid gap-8 md:grid-cols-3 mt-8">
              <div className="p-6 bg-haive-dark-gray rounded-lg border border-haive-orange/20 hover:border-haive-orange/50 transition-all duration-300">
                <h4 className="text-xl font-bold mb-3">
                  <span className="text-haive-orange">1 · </span>
                  <span className="text-white">Spin-up</span>
                </h4>
                <p className="text-gray-300">
                  Name your agent, choose Voice or Chat, pick a goal (e.g., 'Close support ticket').
                </p>
              </div>
              
              <div className="p-6 bg-haive-dark-gray rounded-lg border border-haive-orange/20 hover:border-haive-orange/50 transition-all duration-300">
                <h4 className="text-xl font-bold mb-3">
                  <span className="text-haive-orange">2 · </span>
                  <span className="text-white">Feed knowledge</span>
                </h4>
                <p className="text-gray-300">
                  Drop FAQs, PDFs, DOCX/XLSX/PPTX or paste URLs—instant RAG indexing.
                </p>
              </div>
              
              <div className="p-6 bg-haive-dark-gray rounded-lg border border-haive-orange/20 hover:border-haive-orange/50 transition-all duration-300">
                <h4 className="text-xl font-bold mb-3">
                  <span className="text-haive-orange">3 · </span>
                  <span className="text-white">Connect tools</span>
                </h4>
                <p className="text-gray-300">
                  Toggle Email, Zendesk, Zoho, Freshworks, Twilio/Telynx numbers, then press "Launch".
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
