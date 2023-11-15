'use client';

import Head from 'next/head';
import * as React from 'react';

import EQBeatsIQ from '@/components/home/eq-beats-iq';
import Familiar from '@/components/home/Familiar';
import Hero from '@/components/home/hero';

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
      </section>
    </main>
  );
}
