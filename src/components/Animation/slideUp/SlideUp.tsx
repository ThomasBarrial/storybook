import React from 'react';
import { useInView } from 'react-intersection-observer';

export interface SlideUpProps {
  text: string;
  className: string;
  duration:
    | '0'
    | '75'
    | '100'
    | '150'
    | '200'
    | '300'
    | '500'
    | '700'
    | '1000'
    | '1200'
    | '1500'
    | '1800'
    | '2000';
}

function SlideUp({ text, className, duration }: SlideUpProps): JSX.Element {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <p
        className={`${
          inView ? 'translate-y-0 translate-x-0' : 'translate-y-20 scale-105'
        } transform  duration-${duration}`}
      >
        {text}
      </p>
    </div>
  );
}

export default SlideUp;
