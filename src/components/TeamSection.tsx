
import React from 'react';
import TeamMember from './TeamMember';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Deepika Loganathan',
      title: 'CO-FOUNDER & CEO',
      image: '/lovable-uploads/2178dd2d-066d-4e83-9ef4-3bb903e3a9fb.png'
    },
    {
      name: 'Arjun Reddy',
      title: 'CO-FOUNDER & CTO',
      image: '/lovable-uploads/47e047b0-d046-4e76-ba79-d95c000a2853.png'
    },
    {
      name: 'Andrew Rothwell',
      title: 'FOUNDING ADVISOR',
      image: '/lovable-uploads/132031da-c3f1-4372-8589-5cf7f11d07e4.png'
    },
    {
      name: 'Mohan Karuppiah',
      title: 'FOUNDING INVESTOR',
      image: '/lovable-uploads/f6d751c8-b1aa-49c6-a063-c1bb90823d1b.png'
    },
    {
      name: 'Jai Kumar',
      title: 'FOUNDING INVESTOR',
      image: '/lovable-uploads/b1e56ad0-6027-4f51-b735-2ff6516f78c3.png'
    }
  ];

  return (
    <section id="team" className="py-20 bg-haive-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Our Team</h2>
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-16 max-w-4xl mx-auto">
  {teamMembers.slice(0, 2).map((member, index) => (
    <TeamMember
      key={index}
      name={member.name}
      title={member.title}
      image={member.image}
    />
  ))}
</div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Other team members in the second row */}
          {teamMembers.slice(2).map((member, index) => (
            <TeamMember
              key={index + 2}
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
