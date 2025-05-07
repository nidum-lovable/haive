
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqItems = [
  {
    question: "What is HaiVE AI Agent Studio?",
    answer: "HaiVE AI Agent Studio is a platform for automating customer interactions using AI-powered assistants. It streamlines communication, provides actionable analytics, and integrates seamlessly with existing systems."
  },
  {
    question: "What makes HaiVE better than Vapi or Bland?",
    answer: "The platform includes AI assistant creation, analytics, call logs, SIP configuration, external number management, and data collection with customizable workflows. And all of this is opensource & hostable on-premise."
  },
  {
    question: "Can I customize the AI assistant's behavior and interactions?",
    answer: "Yes, you can customize greetings, system prompts, data collection fields, and call settings, ensuring that assistants align with your specific business needs."
  },
  {
    question: "How does HaiVE handle integration with existing communication systems?",
    answer: "HaiVE offers SIP configuration and allows integration with phone number providers like Twilio, Telynx, and Vonage for seamless communication management."
  },
  {
    question: "What analytics are available to track performance?",
    answer: "The platform provides detailed insights, including total call minutes, number of calls, average cost per call, call analysis, and cost comparisons by provider. Transcriptions and collected data further enhance performance tracking and improvement."
  }
];

const FAQs = () => {
  return (
    <section id="faqs" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-haive-orange to-haive-orange-light text-center">
          FAQs
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-b border-haive-orange/20"
              >
                <AccordionTrigger className="py-4 text-left text-lg font-medium hover:text-haive-orange">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-6 pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
