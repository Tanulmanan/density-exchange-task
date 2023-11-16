import React from 'react';

import Button from '@/components/buttons/Button';
import WhileInViewAnimate from '@/components/home/whileinviewanimate';

const Test = () => {
  return (
    <WhileInViewAnimate>
      <div className=' h-[calc(100vh-155px)] items-center rounded-lg px-16'>
        <div className='mt-44 text-center'>
          <p className='mb-4'>We take privacy seriously</p>
          <h2 className='mb-4'>Before you get started</h2>
          <p className='mb-4'>
            "We won't share your answers with anyone (and won't ever tell you
            which friends said what about you)"
          </p>
          <p className='mb-4'>With love,</p>
          <Button className='rounded-full border-none bg-black px-8 py-4 !text-xs text-white hover:bg-zinc-800 focus:bg-zinc-800'>
            Take test
          </Button>
        </div>
      </div>
    </WhileInViewAnimate>
  );
};

export default Test;
