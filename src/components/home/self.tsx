import { Ghost } from 'lucide-react';
import React from 'react';

import WhileInViewAnimate from '@/components/home/whileinviewanimate';

const Self = () => {
  return (
    <WhileInViewAnimate>
      <div className='flex h-[calc(100vh-85px)] flex-col justify-center rounded-[48px] px-12'>
        <h6>Wrong with self-improvement and how we are fixing it</h6>
        <div className='flex items-center space-x-8 '>
          <h1 className='text-blue mb-4 text-2xl font-bold'>
            Self-Improvement. Ugh{' '}
          </h1>
          <Ghost className='rotate-50 h-12 w-12' />
        </div>

        <div className='flex w-[50vw] justify-center'>
          <div className='flex-1 p-4'>
            <ol className='relative border-s border-gray-200 dark:border-gray-700'>
              <li className='mb-10 ms-6'>
                <span className='absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900'>
                  <svg
                    className='h-2.5 w-2.5 text-blue-800 dark:text-blue-300'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
                  </svg>
                </span>
                <h3 className='mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white'>
                  It's not as easy as 1-2-3.{' '}
                  <span className='me-2 ms-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300'>
                    Latest
                  </span>
                </h3>

                <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
                  {' '}
                  The journey of change may be long, but our sessions are quick.
                  We get to the point and tell you what you want to know (and
                  nothing else).
                </p>
              </li>
              <li className='mb-10 ms-6'>
                <span className='absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900'>
                  <svg
                    className='h-2.5 w-2.5 text-blue-800 dark:text-blue-300'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
                  </svg>
                </span>
                <h3 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
                  Old habits are hard to break.
                </h3>
                <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
                  And bad behaviors die hard. Fortunately, we give you great,
                  science-backed techniques to use.
                </p>
              </li>
              <li className='ms-6'>
                <span className='absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900'>
                  <svg
                    className='h-2.5 w-2.5 text-blue-800 dark:text-blue-300'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
                  </svg>
                </span>
                <h3 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
                  You and your motivation don't have a long-term relationship.
                </h3>
                <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
                  Luckily, we can proactively prepare you for the marathon, not
                  just the race. Effective, memorable exercises will help you
                  stick to your goals.
                </p>
              </li>
              <li className='ms-6'>
                <span className='absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900'>
                  <svg
                    className='h-2.5 w-2.5 text-blue-800 dark:text-blue-300'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
                  </svg>
                </span>
                <h3 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
                  Books just don't offer practical solutions.
                </h3>
                <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
                  Remember when you learned to ride a bike iust by reading? Yeah
                  we don't either.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </WhileInViewAnimate>
  );
};

export default Self;
