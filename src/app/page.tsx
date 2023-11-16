'use client';

import Head from 'next/head';
import * as React from 'react';

import Best from '@/components/home/bebest';
import EQBeatsIQ from '@/components/home/eq-beats-iq';
import Familiar from '@/components/home/Familiar';
import Hero from '@/components/home/hero';
import Meet from '@/components/home/Meet';
import Rate from '@/components/home/rate';
import Self from '@/components/home/self';
import Test from '@/components/home/test';
import Vacancies from '@/components/home/Vacancies';
import Work from '@/components/home/work';

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-white'>
        <Hero />
        <EQBeatsIQ />
        <Familiar />
        <Meet />
        <Self />
        <Best />
        <Rate />
        <Test />
        <Work />
        <Vacancies />
      </section>
    </main>
  );
}
