
import React from 'react';
import TeamMember from './TeamMember';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Deepika Loganathan',
      title: 'CO-FOUNDER & CEO',
      image: '/lovable-uploads/eb22f08a-ab87-489a-9ed7-81fe10d182d7.png'
    },
    {
      name: 'Arjun Reddy',
      title: 'CO-FOUNDER & CTO',
      image: '/lovable-uploads/1a8638bb-360e-4eb9-8ba9-083d2420d116.png'
    },
    {
      name: 'Andrew Rothwell',
      title: 'FOUNDING ADVISOR',
      image: '/lovable-uploads/d27794b6-b1e9-470f-83c8-bcf6a4072716.png'
    },
    {
      name: 'Mohan Karuppiah',
      title: 'FOUNDING INVESTOR',
      image: '/lovable-uploads/328e991c-71f4-44d3-b8b5-dba1d03dbde7.png'
    },
    {
      name: 'Jai Kumar',
      title: 'FOUNDING INVESTOR',
      image: '/lovable-uploads/5016fd48-2402-4e88-aa5e-b67b892a0c1d.png'
    }
  ];

  return (
    <section id="team" className="py-20 bg-haive-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Our Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              title={member.title}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
