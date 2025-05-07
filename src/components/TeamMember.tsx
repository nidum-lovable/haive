
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface TeamMemberProps {
  name: string;
  title: string;
  image: string;
}

const TeamMember = ({ name, title, image }: TeamMemberProps) => {
  // Split the name to get initials for the fallback
  const nameParts = name.split(' ');
  const firstNameInitial = nameParts[0][0];
  const lastNameInitial = nameParts.length > 1 ? nameParts[1][0] : '';
  
  // Split the name for styling
  const firstName = nameParts[0];
  const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
  
  return (
    <div className="flex flex-col items-center p-6">
      <Avatar className="h-32 w-32 mb-6">
        <AvatarImage src={image} alt={name} className="rounded-full" />
        <AvatarFallback className="text-xl bg-transparent text-haive-orange">
          {firstNameInitial}{lastNameInitial}
        </AvatarFallback>
      </Avatar>
      
      <div className="text-center">
        <h3 className="text-2xl font-bold text-haive-orange mb-1">
          {firstName}<br/>{lastName}
        </h3>
        <p className="text-sm font-medium tracking-wider text-white uppercase mt-2">{title}</p>
      </div>
    </div>
  );
};

export default TeamMember;
