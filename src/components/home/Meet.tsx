import React from 'react';

import WhileInViewAnimate from '@/components/home/whileinviewanimate';

const Meet = () => {
  return (
    <WhileInViewAnimate>
      <div className='flex h-[calc(100vh-85px)] flex-col justify-center rounded-[48px] bg-[#fef7f1] px-12'>
        <p className='mb-6'>Built out of Frustration</p>
        <h1 className='text-6xl'>
          Meet the Ahead app <br />
        </h1>
        <div className='flex items-center space-x-12'></div>
        <div className='ml-auto mr-4 mt-4'>
          <p className='text-lg'>
            A personalized pocket coach that provides bite-
            <br />
            sized , science-driven tools to boost emotional intelligence.
            <br />
            Think of it as a pocket cheerleader towards a better, more
            fulfilling.
          </p>
        </div>
      </div>
    </WhileInViewAnimate>
  );
};

export default Meet;
