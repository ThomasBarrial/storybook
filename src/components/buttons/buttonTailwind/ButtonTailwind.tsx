import React from 'react';
import { motion } from 'framer-motion';
import classNames from '../../../utils/tailwind';

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
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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
    </motion.button>
  );
}

export default ButtonTailwind;
