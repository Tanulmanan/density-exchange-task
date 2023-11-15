import clsx from 'clsx';
import { Ghost } from 'lucide-react';
import React from 'react';

const cards = [
  {
    icon: '😍',
    clasName: 'bg-yellow-200',
  },
  {
    icon: '😊',
    clasName: 'bg-green-200',
  },
  {
    icon: '😘',
    clasName: 'bg-blue-200',
  },
  {
    icon: '🤔',
    clasName: 'bg-red-200',
  },
  {
    icon: '😚',
    clasName: 'bg-pink-200',
  },
  {
    icon: '🤪',
    clasName: 'bg-orange-200',
  },
];

const Familiar = () => {
  return (
    <div className='pb-24 px-20'>
      <div className='flex items-center space-x-8'>
        <h1 className='text-5xl'>Does this sound familiar...</h1>
        <Ghost className='h-16 w-16 rotate-12' />
      </div>
      <div>
        {cards.map((el, i) => (
          <div
            key={i}
            className={clsx(el.clasName, 'rounded-xl py-4 px-8 w-[300px]')}
          >
            <h1 className='text-3xl'>{el.icon}</h1>
            <h5>Lorem ipsum dolor sit</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              voluptatibus, consequuntur nesciunt asperiores id natus nihil ad?
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Familiar;
