import React from 'react';

import AppStore from '@/components/icons/appStore';

const Hero = () => {
  return (
    <div className='flex flex-col rounded-[48px] justify-center px-12 h-[calc(100vh-85px)] bg-violet-100'>
      <p className='mb-6'>Ahead Life</p>
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
