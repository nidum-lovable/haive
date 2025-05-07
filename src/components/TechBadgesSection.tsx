
import React from 'react';
import { 
  Shield, 
  Cpu, 
  Database, 
  FileJson, 
  Globe, 
  ServerCog,
  CheckCircle
} from 'lucide-react';

type TechBadge = {
  name: string;
  icon: React.FC<{ className?: string }>;
  color: string;
  description: string;
};

const badges: TechBadge[] = [
  { 
    name: "CPU+GPU Processing", 
    icon: Cpu,
    color: "bg-blue-500/20 text-blue-400", 
    description: "Optimized for both CPU and GPU infrastructure"
  },
  { 
    name: "SOC-2 Ready", 
    icon: Shield,
    color: "bg-green-500/20 text-green-400", 
    description: "Enterprise-grade security compliance"
  },
  { 
    name: "Global Compliance", 
    icon: Globe,
    color: "bg-purple-500/20 text-purple-400", 
    description: "Meets regional data regulations globally"
  },
  { 
    name: "High Availability", 
    icon: ServerCog,
    color: "bg-orange-500/20 text-orange-400", 
    description: "99.99% uptime guarantee"
  },
  { 
    name: "Data Sovereignty", 
    icon: Database,
    color: "bg-red-500/20 text-red-400", 
    description: "Keep data within your jurisdiction"
  },
  { 
    name: "JSON API Support", 
    icon: FileJson,
    color: "bg-yellow-500/20 text-yellow-400", 
    description: "Easy integration with existing systems"
  },
];

const TechBadgesSection = () => {
  return (
    <section className="py-12 bg-haive-dark-purple">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-12">Technology & Compliance</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className={`p-4 rounded-lg border border-gray-800 backdrop-blur-sm bg-haive-dark/60 hover:bg-haive-dark-gray/60 transition-all duration-300 flex items-start gap-4 group`}
            >
              <div className={`p-3 rounded-lg ${badge.color} flex-shrink-0`}>
                <badge.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-1 group-hover:text-haive-orange transition-colors">{badge.name}</h3>
                <p className="text-sm text-gray-400">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-haive-teal/30 bg-haive-dark/60">
            <CheckCircle className="w-4 h-4 text-haive-teal" />
            <span className="text-sm text-gray-300">All systems fully operational</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechBadgesSection;
