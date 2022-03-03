import React, { ReactNode } from 'react';

export interface SampleBoxProps {
  children: ReactNode;
}

export const SampleBox = ({ children }: SampleBoxProps) => {
  return (
    <div className="flex text-red-600  border-2 w-24 justify-center">
      {children}
    </div>
  );
};
