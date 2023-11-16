import React from 'react';

import WhileInViewAnimate from '@/components/home/whileinviewanimate';

const EQBeatsIQ = () => {
  return (
    <WhileInViewAnimate>
      <div className='grid grid-cols-3 px-20 py-36'>
        <div className='col-span-1'>
          <h2 className='text-4xl'>EQ Beats IQ</h2>
        </div>
        <div className='col-span-1 w-[80%] font-medium text-zinc-700'>
          <p>
            People with high emotional intelligence (EQ) live more fulfilled
            lives. They tend to be happier and have healthier relationships.
          </p>
        </div>
        <div className='col-span-1 w-[80%] font-medium text-zinc-700'>
          <p>
            They are more successful in their pursuits and make for inspiring
            leaders. According to science, they earn $29k a year.
          </p>
        </div>
      </div>
    </WhileInViewAnimate>
  );
};

export default EQBeatsIQ;
