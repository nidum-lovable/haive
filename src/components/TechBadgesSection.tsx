
import React from 'react';

const badges = [
  { name: "CPU+GPU", color: "bg-blue-500" },
  { name: "SOC-2-ready", color: "bg-green-500" },
  { name: "India Compliance", color: "bg-orange-500" },
  { name: "EU Compliance", color: "bg-yellow-500" },
  { name: "US Compliance", color: "bg-red-500" },
];

const TechBadgesSection = () => {
  return (
    <section className="py-16 bg-haive-dark-purple">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="px-4 py-2 rounded-full border border-haive-teal/30 backdrop-blur-sm bg-haive-dark/60 flex items-center gap-2"
            >
              <div className={`w-2 h-2 rounded-full ${badge.color}`} />
              <span className="text-sm text-gray-300">{badge.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechBadgesSection;
