import React from 'react'

const pressItems = [
  {
    publication: 'INDIAi',
    logo: '/lovable-uploads/c0bd72c3-f3b5-4b0d-acb2-a7667710bde9.png',
    position: 'top-left',
    link: 'https://indiaai.gov.in/indiaAi-2021/build/images/hub-content/Indiaai-svg.svg',
  },
  {
    publication: 'The Hindu',
    logo: '/lovable-uploads/b10e2301-ab5a-4de4-9b2a-6b0d9d6cc6a1.png',
    position: 'top-center',
    link: 'https://www.thehindu.com/news/cities/chennai/indias-first-ai-focused-technology-business-incubator-unveiled-in-tamil-nadu/article67513867.ece',
  },
  {
    publication: 'Financial Express',
    logo: '/lovable-uploads/f23f60d0-2969-4c47-9ab8-c99f6f18d6b9.png',
    position: 'top-right',
    link: 'https://www.financialexpress.com/business/digital-transformation-haive-introduces-self-hosted-multi-role-ai-assistantnbsp-3372568/',
  },
  {
    publication: 'AIM',
    logo: '/lovable-uploads/d6da7007-2534-4fab-80e3-0e8e5a51e3b7.png',
    position: 'bottom-left',
    link: 'https://analyticsindiamag.com/chennai-based-startup-behind-first-ai-university-professor-launches-personal-ai-home-studio/',
  },
  {
    publication: 'Outlook Start-Up',
    logo: '/lovable-uploads/6429e0b4-f2d1-459a-9aef-c517ffd293c0.png',
    position: 'bottom-right',
    link: 'https://startup.outlookindia.com/sector/saas/tamil-nadu-minister-for-msme-launches-ai-venture-factory-news-9824',
  },
]

const Press = () => {
  return (
    <section id='press' className='py-20 bg-black mb-8'>
      <div className='container mx-auto px-4'>
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-haive-orange to-haive-orange-light text-center">
In the Press
        </h2>

        {/* Top 3 press items */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto'>
          {pressItems.slice(0, 3).map((item, index) => (
            <div key={index} className='flex justify-center items-center hover:opacity-80 transition-opacity h-36'>
              {item.link ? (
                <a
                  href={item.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block h-full flex items-center'>
                  <img
                    src={item.logo}
                    alt={item.publication}
                    className={`object-contain ${index === 0 ? 'h-42 w-auto mt-20' : 'max-h-32 max-w-full'}`}
                  />
                </a>
              ) : (
                <img
                  src={item.logo}
                  alt={item.publication}
                  className={`object-contain ${item.publication === 'INDIAi' ? 'h-42 w-auto mt-20' : 'max-h-32 max-w-full'}`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Bottom 2 press items */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
          {pressItems.slice(3).map((item, index) => (
            <div key={index} className='flex justify-center items-center hover:opacity-80 transition-opacity h-36'>
              {item.link ? (
                <a
                  href={item.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block h-full flex items-center'>
                  <img src={item.logo} alt={item.publication} className='max-h-32 max-w-full object-contain' />
                </a>
              ) : (
                <img src={item.logo} alt={item.publication} className='max-h-32 max-w-full object-contain' />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Press
