import React from 'react';

import AppStore from '@/components/icons/appStore';

const Hero = () => {
  return (
    <div className='flex h-[calc(100vh-85px)] flex-col justify-center rounded-[48px] bg-violet-100 px-12'>
      <p className=' mb-6 text-lg'>
        <strong>Ahead Life</strong>
      </p>
      <h1 className='text-7xl'>
        Master your life <br />
        by mastering <br />
        emotions
      </h1>
      <div className='flex items-center space-x-12'>
        <AppStore className='h-36' />
        <div>
          <div className='space-x-2'>
            {Array.from({ length: 5 }).map((_, index) => {
              return <span key={index}>⭐</span>;
            })}
          </div>
          <p className='text-xs'>1000+ App store reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
