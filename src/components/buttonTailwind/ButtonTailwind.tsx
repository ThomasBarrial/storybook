import React from 'react';
import classNames from '../../utils/tailwind';

export interface ButtonTailwindProps {
  label: string;
  className?: string;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function ButtonTailwind({
  onClick,
  label,
  className,
  size,
  backgroundColor,
}: ButtonTailwindProps) {
  return (
    <button
      type="button"
      className={classNames(
        `px-5 py-1 ${className} ${size === 'small' && `text-sm`} ${
          size === 'medium' && `text-xl`
        } ${size === 'large' && `text-2xl`}`
      )}
      style={backgroundColor ? { backgroundColor } : {}}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default ButtonTailwind;
