
import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const pricingData = [
  {
    provider: "HaiVE",
    freeTier: "Trial on request",
    usageRate: "$0.05 min⁻¹",
    highlight: true,
    unlimited: true,
    onPrem: "✔ Enterprise",
  },
  {
    provider: "Vapi",
    freeTier: "Dev plan",
    usageRate: "$0.05 min⁻¹*",
    unlimited: false,
    onPrem: false,
    footnote: "*Real-world cost ≈ $0.13 min⁻¹ after extras.",
  },
  {
    provider: "Bland.ai",
    freeTier: "Trial credits",
    usageRate: "$0.09 min⁻¹",
    unlimited: false,
    onPrem: false,
  },
  {
    provider: "Voiceflow",
    freeTier: "Starter",
    usageRate: "Credit model",
    unlimited: false,
    onPrem: "Private cloud only",
  },
];

const PricingSection = () => {
  const [animationIndex, setAnimationIndex] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setAnimationIndex((prev) => (prev + 1) % pricingData.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-haive-dark-purple to-haive-dark" id="pricing">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Pricing</h2>
        
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-4 px-6 text-left text-gray-400 font-medium">Plan</th>
                {pricingData.map((plan, index) => (
                  <th 
                    key={index}
                    className={`py-4 px-6 text-left transition-all duration-500 ${
                      animationIndex === index 
                        ? 'text-haive-teal scale-105' 
                        : plan.highlight 
                          ? 'text-white' 
                          : 'text-gray-400'
                    }`}
                  >
                    {plan.provider}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-6 text-gray-400">Free tier</td>
                {pricingData.map((plan, index) => (
                  <td 
                    key={index} 
                    className={`py-4 px-6 ${
                      animationIndex === index 
                        ? 'text-haive-teal font-medium' 
                        : plan.highlight 
                          ? 'text-white' 
                          : 'text-gray-300'
                    }`}
                  >
                    {plan.freeTier}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-6 text-gray-400">Usage rate</td>
                {pricingData.map((plan, index) => (
                  <td 
                    key={index} 
                    className={`py-4 px-6 ${
                      animationIndex === index 
                        ? 'text-haive-teal font-bold' 
                        : plan.highlight 
                          ? 'font-bold text-white' 
                          : 'text-gray-300'
                    }`}
                  >
                    {plan.usageRate}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-6 text-gray-400">Unlimited minutes</td>
                {pricingData.map((plan, index) => (
                  <td 
                    key={index} 
                    className={`py-4 px-6 ${
                      animationIndex === index 
                        ? 'text-haive-teal' 
                        : plan.highlight 
                          ? 'text-white' 
                          : 'text-gray-300'
                    }`}
                  >
                    {plan.unlimited ? (
                      <CheckCircle className="h-5 w-5 text-haive-teal" />
                    ) : (
                      <XCircle className="h-5 w-5 text-gray-500" />
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-400">On-prem option</td>
                {pricingData.map((plan, index) => (
                  <td 
                    key={index} 
                    className={`py-4 px-6 ${
                      animationIndex === index 
                        ? 'text-haive-teal' 
                        : plan.highlight 
                          ? 'text-white' 
                          : 'text-gray-300'
                    }`}
                  >
                    {typeof plan.onPrem === 'string' ? (
                      plan.onPrem
                    ) : plan.onPrem ? (
                      <CheckCircle className="h-5 w-5 text-haive-teal" />
                    ) : (
                      <XCircle className="h-5 w-5 text-gray-500" />
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-400 mt-3 italic">
            *Real-world cost ≈ $0.13 min⁻¹ after extras.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
