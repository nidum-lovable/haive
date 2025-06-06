
import React from 'react';
import { Twitter, Linkedin, Mail } from 'lucide-react';

const ContactSection = () => {
  const locations = [
    {
      country: 'Singapore',
      image: '/lovable-uploads/d9b2545c-1c81-4376-b0ab-2edd94d50d4d.png',
      address: [
        'No. 2 Venture Drive',
        '#09-24 Vision Exchange',
        'Singapore 608526'
      ]
    },
    {
      country: 'Australia',
      image: '/lovable-uploads/22b226f0-1b04-497b-b054-a475c2c18f0e.png',
      address: [
        'Level 6, 201 Kent Street',
        'Barangaroo NSW 2000'
      ]
    },
    {
      country: 'USA',
      image: '/lovable-uploads/ea5a4d49-f927-479a-ae7d-07d1298619f6.png',
      address: [
        '8400 W. Sunset Road',
        'Suite 300, Las Vegas, NV 89113'
      ]
    }
  ];

  const socialLinks = [
    { icon: <Twitter className="h-6 w-6" />, url: 'https://x.com/HaiveTech', label: 'Twitter' },
    { icon: <Linkedin className="h-6 w-6" />, url: 'https://www.linkedin.com/company/haivetech/', label: 'LinkedIn' },
    { icon: <Mail className="h-6 w-6" />, url: 'mailto:info@haive.tech', label: 'Email' }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {locations.map((location, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-4 h-24 flex items-center justify-center">
                <img 
                  src={location.image} 
                  alt={`${location.country} flag`} 
                  className="max-h-24 w-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-haive-orange mb-4">{location.country}</h3>
              <div className="text-center">
                {location.address.map((line, i) => (
                  <p key={i} className="text-gray-300">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <h3 className="text-xl font-bold text-white uppercase mb-6">Follow Us</h3>
          <div className="flex justify-center space-x-8">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                className="text-gray-400 hover:text-haive-orange transition-colors"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
