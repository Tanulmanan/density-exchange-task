import React from 'react';

import WhileInViewAnimate from '@/components/home/whileinviewanimate';

const Rate = () => {
  return (
    <WhileInViewAnimate>
      <div className='flex h-[calc(100vh-85px)] flex-col justify-center rounded-[48px] bg-[#edf8fe] px-12'>
        <h5 className='text-4x1 mb-6 text-center'>
          Let your family and coworkers anonymously rate your skills
        </h5>
        <h4 className='text-center text-6xl'>
          Ever wondered what others think of you?
        </h4>

        <div className=' flex w-full items-center justify-center '>
          {Array.from({ length: 5 }).map((_, index) => {
            const content =
              index % 2 === 0 ? (
                <svg
                  width='106px'
                  height='106px'
                  viewBox='-143.36 -143.36 1310.72 1310.72'
                  className='icon'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='#000000'
                  transform='rotate(0)'
                  stroke='#000000'
                  stroke-width='0.01024'
                >
                  <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                  <g
                    id='SVGRepo_tracerCarrier'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke='#CCCCCC'
                    stroke-width='8.192'
                  ></g>
                  <g id='SVGRepo_iconCarrier'>
                    <path
                      d='M861 656.7l144.6-144.6L861 367.6V163.1H656.6L512 18.6 367.4 163.1H163v204.5L18.4 512.1 163 656.7v204.4h204.4L512 1005.7l144.6-144.6H861z'
                      fill='#FCD170'
                    ></path>
                    <path
                      d='M512 1015.7c-2.6 0-5.1-1-7.1-2.9L363.3 871.1H163c-5.5 0-10-4.5-10-10V660.8L11.4 519.2c-1.9-1.9-2.9-4.4-2.9-7.1 0-2.7 1.1-5.2 2.9-7.1L153 363.4V163.1c0-5.5 4.5-10 10-10h200.3L504.9 11.5c1.9-1.9 4.4-2.9 7.1-2.9s5.2 1.1 7.1 2.9l141.6 141.6H861c5.5 0 10 4.5 10 10v200.3L1012.6 505c1.9 1.9 2.9 4.4 2.9 7.1 0 2.7-1.1 5.2-2.9 7.1L871 660.8v200.3c0 5.5-4.5 10-10 10H660.7l-141.6 141.6c-2 2-4.5 3-7.1 3zM173 851.1h194.4c2.7 0 5.2 1.1 7.1 2.9L512 991.6l137.5-137.5c1.9-1.9 4.4-2.9 7.1-2.9H851V656.7c0-2.7 1.1-5.2 2.9-7.1l137.5-137.5-137.5-137.5c-1.9-1.9-2.9-4.4-2.9-7.1V173.1H656.6c-2.7 0-5.2-1.1-7.1-2.9L512 32.7 374.5 170.2c-1.9 1.9-4.4 2.9-7.1 2.9H173v194.4c0 2.7-1.1 5.2-2.9 7.1L32.6 512.1l137.5 137.5c1.9 1.9 2.9 4.4 2.9 7.1v194.4z'
                      fill=''
                    ></path>
                    <path
                      d='M512 512.1m-257.8 0a257.8 257.8 0 1 0 515.6 0 257.8 257.8 0 1 0-515.6 0Z'
                      fill='#F7DDAD'
                    ></path>
                    <path
                      d='M512 779.9c-71.5 0-138.8-27.9-189.4-78.4-50.6-50.6-78.4-117.8-78.4-189.4s27.9-138.8 78.4-189.4c50.6-50.6 117.8-78.4 189.4-78.4 71.5 0 138.8 27.9 189.4 78.4 50.6 50.6 78.4 117.8 78.4 189.4S752 650.9 701.4 701.5 583.5 779.9 512 779.9z m0-515.6c-66.2 0-128.4 25.8-175.2 72.6-46.8 46.8-72.6 109-72.6 175.2s25.8 128.4 72.6 175.2c46.8 46.8 109 72.6 175.2 72.6 66.2 0 128.4-25.8 175.2-72.6 46.8-46.8 72.6-109 72.6-175.2S734 383.7 687.2 336.9c-46.8-46.8-109-72.6-175.2-72.6z'
                      fill=''
                    ></path>
                  </g>
                </svg>
              ) : (
                <span key={index} style={{ color: 'brown', flex: '1' }}>
                  --------------------------------------------------------------------------
                </span>
              );
            return content;
          })}
        </div>
      </div>
    </WhileInViewAnimate>
  );
};

export default Rate;
