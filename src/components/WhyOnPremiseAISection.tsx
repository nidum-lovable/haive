
import React, { useState, useEffect } from 'react';
import { Shield, Lock, Coins, Zap, Cog } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import ButtonCTA from '@/components/ui/ButtonCTA';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

type ReasonCardProps = {
  icon: React.ElementType;
  title: string;
  description: React.ReactNode;
  iconLabel: string;
  delay: number;
};

const ReasonCard = ({ icon: Icon, title, description, iconLabel, delay }: ReasonCardProps) => {
  return (
    <motion.div 
      className="rounded-xl bg-[#141417]/70 backdrop-blur p-6 ring-1 ring-haive-orange/20 hover:ring-[#00ffff] hover:ring-opacity-50 transition-all duration-150 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="p-3 bg-haive-orange/10 rounded-full mb-4">
        <Icon className="h-7 w-7 text-haive-orange" aria-label={iconLabel} />
      </div>
      <h3 className="font-bold text-xl mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const CounterAnimation = () => {
  const [count, setCount] = useState(0.13);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      const duration = 2000; // 2 seconds
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentValue = 0.13 - (progress * (0.13 - 0.05));
        setCount(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [inView]);

  return (
    <div ref={ref} className="font-mono">
      <span className="text-red-500 line-through mr-2">${count.toFixed(2)}</span>
      <span className="text-green-500">${count <= 0.06 ? '0.05' : count.toFixed(2)}</span> 
      <span className="text-sm text-gray-400 ml-1">per minute</span>
    </div>
  );
};

const WhyOnPremiseAISection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const reasonsData = [
    {
      icon: Shield,
      title: "Data Sovereignty",
      description: "Keep customer data governed by local law—no cross-border transfers.",
      iconLabel: "Data Sovereignty Icon",
    },
    {
      icon: Lock,
      title: "Zero Cloud Leaks",
      description: "Your models run behind your firewall, not a public endpoint.",
      iconLabel: "Zero Cloud Leaks Icon",
    },
    {
      icon: Coins,
      title: "Predictable Bills",
      description: <CounterAnimation />,
      iconLabel: "Predictable Bills Icon",
    },
    {
      icon: Zap,
      title: "Ultra-Low Latency",
      description: "< 50ms round-trip = real-time voice, vision, robotics.",
      iconLabel: "Ultra-Low Latency Icon",
    },
    {
      icon: Cog,
      title: "Full Control",
      description: "Swap models, fine-tune offline, no vendor lock-in.",
      iconLabel: "Full Control Icon",
    },
  ];

  // Set details open based on screen size
  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 768);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section 
      id="why-on-prem-ai" 
      className="py-20 bg-[#0d0d0f] relative overflow-hidden"
      style={{ backgroundImage: 'url("/images/honeycomb-pattern.svg")' }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-[#00E5C9] to-[#0EA5E9] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Why On-Premise AI?
        </motion.h2>

        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger className="flex items-center justify-center gap-2 text-haive-orange hover:text-haive-orange-light transition-colors mx-auto mb-8 cursor-pointer">
            <span className="font-medium">See the five biggest reasons</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className={cn("h-4 w-4 transition-transform", isOpen ? "rotate-180" : "")}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </CollapsibleTrigger>

          <CollapsibleContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {reasonsData.map((item, index) => (
                <ReasonCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  iconLabel={item.iconLabel}
                  delay={index * 0.2}
                />
              ))}
            </div>

            <div id="cost-chart" className="mt-16 mb-10">
              {/* Space for future chart implementation */}
            </div>

            <div className="flex justify-center mt-10">
              <ButtonCTA variant="secondary" size="lg">
                See HaiVE in action
              </ButtonCTA>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
};

export default WhyOnPremiseAISection;
