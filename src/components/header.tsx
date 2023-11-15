import Link from 'next/link';
import React from 'react';

import Button from '@/components/buttons/Button';
import Logo from '@/components/icons/logo';

const links = ['Emotions', 'Manifesto', 'Self-awareness test', 'Work with us'];

const Header = () => {
  return (
    <div className='max-w-[1500px] h-[80px] sticky top-0 mx-auto px-12 py-4'>
      <div className='flex items-center w-full justify-between'>
        <Logo className='w-10 h-10' />
        <div className='flex items-center gap-24'>
          <div className='flex items-center gap-8'>
            {links.map((el) => (
              <Link key={el} href='/'>
                {el}
              </Link>
            ))}
          </div>
          <Button className='rounded-full text-white px-8 py-4 bg-black !text-xs border-none focus:bg-zinc-800 hover:bg-zinc-800'>
            Download App
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
