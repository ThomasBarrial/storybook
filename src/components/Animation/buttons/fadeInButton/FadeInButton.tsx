import React from 'react';
import { motion } from 'framer-motion';

export interface FadeInButtonProps {
  label: string;
  duration: number;
  className?: string;
  backgroundColor?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function FadeInButton({
  onClick,
  label,
  duration,
  className,
  backgroundColor,
}: FadeInButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration }}
    >
      <motion.button
        whileTap={{ scale: 0.5 }}
        whileHover={{
          backgroundColor: 'transparent',
          color: backgroundColor,
        }}
        transition={{ duration: 0.5 }}
        type="button"
        className={`px-5 py-1 ${className}`}
        style={
          backgroundColor
            ? { backgroundColor, border: `1px solid ${backgroundColor}` }
            : {}
        }
        onClick={onClick}
      >
        {label}
      </motion.button>
    </motion.div>
  );
}

export default FadeInButton;
