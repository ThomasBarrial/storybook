import React from 'react';
import classNames from '../../../utils/tailwind';

export interface SlideUpProps {
  text: string;
  inView: boolean | false;
  className: string;
  // duration:
  //   | '0'
  //   | '75'
  //   | '100'
  //   | '150'
  //   | '200'
  //   | '300'
  //   | '500'
  //   | '700'
  //   | '1000'
  //   | '1200'
  //   | '1500'
  //   | '1800'
  //   | '2000';
}

function SlideUp({ text, className, inView }: SlideUpProps): JSX.Element {
  return (
    <div className={`overflow-hidden ${className}`}>
      <p
        className={classNames(
          `transform  duration-1000 ${
            inView ? 'translate-y-0' : 'translate-y-20'
          } `
        )}
      >
        {text}
      </p>
    </div>
  );
}

export default SlideUp;
