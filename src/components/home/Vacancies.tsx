import clsx from 'clsx';
import React, { useState } from 'react';

import Button from '@/components/buttons/Button';
import WhileInViewAnimate from '@/components/home/whileinviewanimate';

const Vacancies = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const cards = [
    { className: 'bg-[#fefbec]', job: 'Senior fullstack engineer' },
    { className: 'bg-[#fefbec]', job: 'Frontend intern' },
    { className: 'bg-[#fefbec]', job: 'Superstar intern' },
  ];

  return (
    <WhileInViewAnimate>
      <div>
        <h1 className='mb-10 ml-10 mt-20'>Open Vacancies</h1>
        <div className='mb-24 flex  items-center justify-evenly space-x-8'>
          {cards.map((el, i) => (
            <div
              key={i}
              className={clsx(el.className, 'w-[300px] rounded-xl px-8 py-4', {
                'hovered-card': hoveredCard === i,
              })}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h1 className='text-3xl'>{el.job}</h1>
              <h5>Lorem ipsum dolor sit</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                voluptatibus, consequuntur nesciunt asperiores id natus nihil
                ad?
              </p>
              {hoveredCard === i && (
                <Button className='rounded-full border-none bg-black px-8 py-4 !text-xs text-white hover:bg-zinc-800 focus:bg-zinc-800'>
                  Take test
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </WhileInViewAnimate>
  );
};

export default Vacancies;
