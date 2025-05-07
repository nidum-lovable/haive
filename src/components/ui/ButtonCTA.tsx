
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ButtonCTAProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'lg';
  className?: string;
  onClick?: () => void;
}

const ButtonCTA = ({ 
  children, 
  variant = 'primary', 
  size = 'default',
  className,
  onClick 
}: ButtonCTAProps) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        'rounded-md font-medium transition-all duration-200',
        variant === 'primary' ? 
          'bg-gradient-to-r from-haive-teal to-haive-teal-light text-black hover:shadow-lg hover:shadow-haive-teal/20' : 
          'bg-transparent border-2 border-haive-teal text-haive-teal hover:bg-haive-teal/10',
        size === 'lg' ? 'text-lg py-6 px-8' : 'text-base py-2 px-4',
        className
      )}
    >
      {children}
    </Button>
  );
};

export default ButtonCTA;
