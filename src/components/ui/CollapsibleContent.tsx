
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CollapsibleContentProps {
  summary: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  summaryClassName?: string;
  contentClassName?: string;
}

const CollapsibleContent = ({
  summary,
  children,
  className,
  summaryClassName,
  contentClassName
}: CollapsibleContentProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cn('w-full', className)}>
      <div
        onClick={toggleOpen}
        className={cn(
          'flex items-center justify-between p-4 cursor-pointer rounded-md transition-all duration-200',
          'border border-haive-orange/30 hover:border-haive-orange',
          summaryClassName
        )}
      >
        {summary}
        {isOpen ? (
          <ChevronUp className="text-haive-orange h-5 w-5" />
        ) : (
          <ChevronDown className="text-haive-orange h-5 w-5" />
        )}
      </div>
      {isOpen && (
        <div 
          className={cn(
            'p-6 mt-2 rounded-md animate-fade-in bg-haive-dark-purple/50',
            contentClassName
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default CollapsibleContent;
