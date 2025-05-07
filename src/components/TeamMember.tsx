
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface TeamMemberProps {
  name: string;
  title: string;
  image: string;
}

const TeamMember = ({ name, title, image }: TeamMemberProps) => {
  // Split the name to get first name for the fallback
  const nameParts = name.split(' ');
  const firstNameInitial = nameParts[0][0];
  const lastNameInitial = nameParts.length > 1 ? nameParts[1][0] : '';
  
  return (
    <div className="flex flex-col items-center p-6 bg-haive-dark-gray rounded-lg">
      <Avatar className="h-32 w-32 border-2 border-haive-orange mb-6">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback className="text-xl bg-haive-dark-purple text-haive-orange">
          {firstNameInitial}{lastNameInitial}
        </AvatarFallback>
      </Avatar>
      
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <p className="text-sm font-medium tracking-wider text-gray-400 uppercase">{title}</p>
    </div>
  );
};

export default TeamMember;
