import { motion } from 'framer-motion';
import React from 'react';

import WhileInViewAnimate from '@/components/home/whileinviewanimate';

const Work = () => {
  return (
    <WhileInViewAnimate>
      <div className='flex h-[calc(100vh-85px)] flex-col justify-center rounded-[48px] bg-violet-100 px-12'>
        <div className='flex'>
          <div className='flex-1 p-4'>
            <motion.div
              initial={{ x: -600, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <h1 className='mb-12'>Work with us</h1>
            </motion.div>
            <div className='mb-4 ml-24 max-w-[300px] rounded-md bg-white p-4'>
              <h3>About</h3>
              <p>
                At ahead our goat is to make self-improvement fun and lasting.
                We know there's a way how to make it work. And that's what aHead
                is all about!
              </p>
            </div>
            <div className='mb-4 ml-24 max-w-[300px] rounded-md bg-[#fef7f1] p-4'>
              <h3>Product</h3>
              <p>
                Sure, you could spend ages reading books or sitting in seminars
                on how to become a better spouse, parent, or manager - like we
                did...
              </p>
            </div>
          </div>

          <div className='flex-1 overflow-y-auto p-4'>
            <motion.div
              initial={{ x: 600, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <h1 className='mb-12 mr-12 text-right text-[#6641f6]'>ahead</h1>
            </motion.div>
            <div
              className='max-h-[400px]  w-[500px] flex-1 overflow-y-auto p-4 '
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#af9afb white',
              }}
            >
              <div className='mb-4 ml-24 max-w-[300px] rounded-md bg-white p-4'>
                <p>
                  <strong>Power through, even when the going gets tough</strong>
                  <br />
                  We help you spot and work around whatever stands in the way,
                  be it bad habits, fears, etc.
                </p>
              </div>
              <div className='mb-4 ml-24 max-w-[300px] rounded-md bg-white p-4'>
                <p>
                  <strong>
                    Learn more about who you are and where you want to go
                  </strong>
                  <br />
                  We ask the right questions to help you better understand why
                  you do things the way you do.
                </p>
              </div>
              <div className='mb-4 ml-24 max-w-[300px] rounded-md bg-white p-4'>
                <p>
                  <strong>
                    Play and grow together with others on the same journey
                  </strong>
                  <br />
                  Ahead feels like a game, not like a chore. See yourself grow
                  every day towards achieving your goals!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WhileInViewAnimate>
  );
};

export default Work;
