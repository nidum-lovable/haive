
import React from 'react';
import { ArrowDown, Pencil, MessageSquare, Server, Rocket } from 'lucide-react';

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-haive-dark to-haive-dark-purple" id="how-it-works">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">How It Works</h2>
        
        <div className="max-w-6xl mx-auto mt-12">
          {/* Step 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <h3 className="text-2xl font-bold text-white">
                  <span className="text-haive-orange">Step 1: </span>
                  Create Your Assistant
                </h3>
              </div>
              <p className="text-gray-300 mb-6">
                Create your AI phone call agent by giving them a suitable name
              </p>
              <div className="flex items-center mt-auto">
                <div className="flex flex-col items-center">
                  <ArrowDown className="h-8 w-8 text-haive-orange animate-bounce" />
                </div>
              </div>
            </div>
            <div className="bg-haive-dark-gray rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/8e6a059f-b709-40c5-94c1-760c973c4411.png" 
                alt="Create Assistant interface" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <h3 className="text-2xl font-bold text-white">
                  <span className="text-haive-orange">Step 2: </span>
                  Tell HaiVE Your Use Case
                </h3>
              </div>
              <p className="text-gray-300 mb-6">
                Need help with Sales, Customer Support, Operations, or building a product? Just let us know, and we'll handle it.
              </p>
              <div className="flex items-center mt-auto">
                <div className="flex flex-col items-center">
                  <ArrowDown className="h-8 w-8 text-haive-orange animate-bounce" />
                </div>
              </div>
            </div>
            <div className="bg-haive-dark-gray rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/55c3e285-4d12-45c8-81e1-92052729b3db.png" 
                alt="Set up use case" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <h3 className="text-2xl font-bold text-white">
                  <span className="text-haive-orange">Step 3: </span>
                  Choose a Provider
                </h3>
              </div>
              <p className="text-gray-300 mb-6">
                Select the provider Twilio or Vonage for your Phone call agent connection. If in-bound, we only need the number, if out-bound, we will also need the call list
              </p>
              <div className="flex items-center mt-auto">
                <div className="flex flex-col items-center">
                  <ArrowDown className="h-8 w-8 text-haive-orange animate-bounce" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-haive-dark-gray rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/3958f6fb-cf21-45c1-b313-bf3b035d9387.png" 
                  alt="Twilio provider" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="bg-haive-dark-gray rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/8803cf14-0d30-4fcf-bf36-68e5e7e67276.png" 
                  alt="Vonage provider" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <h3 className="text-2xl font-bold text-white">
                  <span className="text-haive-orange">Step 4: </span>
                  Deploy AI Agent
                </h3>
              </div>
              <p className="text-gray-300 mb-6">
                You are all set to now. Your AI phone call agent will answer inbound and outbound calls on behalf of your company.
              </p>
            </div>
            <div className="bg-haive-dark-gray rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/1736c0ad-7494-4eb1-acd5-c1e88f30c82c.png" 
                alt="Deployed AI agent" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
