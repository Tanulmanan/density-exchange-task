import React from 'react';

import WhileInViewAnimate from '@/components/home/whileinviewanimate';

const Best = () => {
  return (
    <WhileInViewAnimate>
      <div className='flex h-[calc(100vh-85px)] items-center rounded-lg px-16'>
        <p className='ml-8 mt-4 w-full text-3xl text-black'>
          <strong>
            Be the best you
            <br /> with Eq
          </strong>
        </p>
        <p className='ml-4 mt-4 w-full text-black'>
          Not having your own emotions <br />
          under control might be holding
          <br /> you back
        </p>
        <p className='mt-4 w-full text-black'>
          Books just don't offer practical solutions.
          <br /> Remember when you learned to ride a bike just by reading?{' '}
          <br />
          Yeah, we don't either.
        </p>
      </div>
    </WhileInViewAnimate>
  );
};

export default Best;
