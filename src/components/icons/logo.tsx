import * as React from 'react';
import { SVGProps } from 'react';
const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
    <defs>
      <style>{'.b{fill:#864e20}.c{fill:#e7c930}'}</style>
    </defs>
    <rect
      width={22}
      height={22}
      x={1}
      y={1}
      rx={7.656}
      style={{
        fill: '#f8de40',
      }}
    />
    <path
      d='M7.055 7.313A1.747 1.747 0 1 0 8.8 9.059a1.747 1.747 0 0 0-1.745-1.746zm9.903 0A1.747 1.747 0 1 0 18.7 9.059a1.747 1.747 0 0 0-1.742-1.746z'
      className='b'
    />
    <path
      d='M23 13.938a14.69 14.69 0 0 1-12.406 6.531c-5.542 0-6.563-1-9.142-2.529A7.66 7.66 0 0 0 8.656 23h6.688A7.656 7.656 0 0 0 23 15.344z'
      className='c'
    />
    <path
      d='M16.6 12.25a8.622 8.622 0 0 1-4.6 1.271 8.622 8.622 0 0 1-4.6-1.271s-.451-.273-.169.273 1.867.93 1.882 1.133a4.862 4.862 0 0 0 5.782 0c.015-.2 1.6-.586 1.882-1.133s-.177-.273-.177-.273z'
      className='b'
    />
    <path
      d='M14.422 14.961a4.8 4.8 0 0 1-4.844 0c-.424-.228-.476.164.352.656a4.093 4.093 0 0 0 2.07.656 4.093 4.093 0 0 0 2.07-.656c.83-.492.776-.884.352-.656z'
      className='c'
    />
  </svg>
);
export default Logo;
