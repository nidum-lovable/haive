import React, { useState, useEffect } from 'react'
import { CheckCircle, XCircle } from 'lucide-react'

const pricingData = [
  {
    provider: 'HaiVE',
    freeTier: 'Trial on request',
    usageRate: '$0.05 min⁻¹',
    highlight: true,
    unlimited: true,
    onPrem: '✔ Enterprise',
  },
  {
    provider: 'Vapi',
    freeTier: 'Dev plan',
    usageRate: '$0.05 min⁻¹*',
    unlimited: false,
    onPrem: false,
    footnote: '*Real-world cost ≈ $0.13 min⁻¹ after extras.',
  },
  {
    provider: 'Bland.ai',
    freeTier: 'Trial credits',
    usageRate: '$0.09 min⁻¹',
    unlimited: false,
    onPrem: false,
  },
  {
    provider: 'Voiceflow',
    freeTier: 'Starter',
    usageRate: 'Credit model',
    unlimited: false,
    onPrem: 'Private cloud only',
  },
]

const Pricing = () => {
  const [animationIndex, setAnimationIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationIndex((prev) => (prev + 1) % pricingData.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id='pricing' className='py-20 bg-black mb-8'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-haive-orange to-haive-orange-light text-center'>
          Pricing
        </h2>

        <div className='max-w-5xl mx-auto overflow-x-auto'>
          <table className='w-full min-w-[600px] max-w-full table-fixed border-collapse'>
            <thead>
              <tr className='border-b border-gray-700'>
                <th className='py-4 px-6 text-left text-gray-400 font-medium'>Plan</th>
                {pricingData.map((plan, index) => (
                  <th key={index} className='py-4 px-6 text-left'>
                    <div
                      className={`inline-block transition-transform duration-500 ${
                        animationIndex === index
                          ? 'scale-105 text-haive-orange'
                          : plan.highlight
                          ? 'text-white'
                          : 'text-gray-400'
                      }`}>
                      {plan.provider}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className='border-b border-gray-800'>
                <td className='py-4 px-6 text-gray-400'>Free tier</td>
                {pricingData.map((plan, index) => (
                  <td
                    key={index}
                    className={`py-4 px-6 max-w-[160px] whitespace-normal break-words ${
                      animationIndex === index
                        ? 'text-haive-orange font-medium'
                        : plan.highlight
                        ? 'text-white'
                        : 'text-gray-300'
                    }`}>
                    {plan.freeTier}
                  </td>
                ))}
              </tr>
              <tr className='border-b border-gray-800'>
                <td className='py-4 px-6 text-gray-400'>Usage rate</td>
                {pricingData.map((plan, index) => (
                  <td
                    key={index}
                    className={`py-4 px-6 ${
                      animationIndex === index
                        ? 'text-haive-orange font-bold'
                        : plan.highlight
                        ? 'font-bold text-white'
                        : 'text-gray-300'
                    }`}>
                    {plan.usageRate}
                  </td>
                ))}
              </tr>
              <tr className='border-b border-gray-800'>
                <td className='py-4 px-6 text-gray-400'>Unlimited minutes</td>
                {pricingData.map((plan, index) => (
                  <td
                    key={index}
                    className={`py-4 px-6 ${
                      animationIndex === index ? 'text-haive-orange' : plan.highlight ? 'text-white' : 'text-gray-300'
                    }`}>
                    {plan.unlimited ? (
                      <CheckCircle className='h-5 w-5 text-haive-orange' />
                    ) : (
                      <XCircle className='h-5 w-5 text-gray-500' />
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                <td className='py-4 px-6 text-gray-400'>On-prem option</td>
                {pricingData.map((plan, index) => (
                  <td
                    key={index}
                    className={`py-4 px-6 ${
                      animationIndex === index ? 'text-haive-orange' : plan.highlight ? 'text-white' : 'text-gray-300'
                    }`}>
                    {typeof plan.onPrem === 'string' ? (
                      plan.onPrem
                    ) : plan.onPrem ? (
                      <CheckCircle className='h-5 w-5 text-haive-orange' />
                    ) : (
                      <XCircle className='h-5 w-5 text-gray-500' />
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
          <p className='text-xs text-gray-400 mt-3 italic'>*Real-world cost ≈ $0.13 min⁻¹ after extras.</p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
