import React, { ReactChild } from 'react';
import { motion } from 'framer-motion';

export interface SlideUpProps {
  children: ReactChild;
  className?: string;
  duration: number;
}

function SlideUp({ children, className, duration }: SlideUpProps): JSX.Element {
  const variants = {
    open: {
      y: 0,
      scale: 1,
      transition: { type: 'spring', duration, bounce: 0.1 },
    },
    closed: {
      y: '300px',
      scale: 0.8,
      transition: { type: 'spring', duration, bounce: 0.1 },
    },
  };

  return (
    <div className="overflow-hidden">
      <motion.div
        className={className}
        variants={variants}
        initial="closed"
        animate="open"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default SlideUp;
