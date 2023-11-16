import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Ghost } from 'lucide-react';
import React from 'react';

import WhileInViewAnimate from '@/components/home/whileinviewanimate';

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
    <WhileInViewAnimate>
      <div className='px-20 pb-24'>
        <div className='flex items-center space-x-8 '>
          <h1 className='text-5xl'>Does this sound familiar...</h1>
          <Ghost className='h-16 w-16 rotate-12' />
        </div>
        <motion.div
          className='flex justify-evenly gap-8 '
          initial={{ x: 600, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {cards.map((el, i) => (
            <div
              key={i}
              className={clsx(
                el.clasName,
                'min-w-[300px] rounded-xl px-8 py-4 '
              )}
            >
              <h1 className='text-3xl'>{el.icon}</h1>
              <h5>Lorem ipsum dolor sit</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                voluptatibus, consequuntur nesciunt asperiores id natus nihil
                ad?
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </WhileInViewAnimate>
  );
};

export default Familiar;
